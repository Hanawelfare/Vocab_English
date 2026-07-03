// Game and Spaced Repetition System Engine
document.addEventListener("DOMContentLoaded", () => {
  // --- Game State ---
  let vocabList = [];
  let currentWord = null;
  let currentChoices = [];
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let lives = 5;
  let soundEnabled = true;
  
  // Game modes
  let activeTab = "dashboard"; // dashboard, study, manager, analytics, settings
  let studyMode = null; // 'srs' or 'category'
  let activeCategory = null;
  let studyDeck = [];
  let studyIndex = 0;
  let isAnswered = false;

  // Spaced Repetition Box Intervals (in milliseconds)
  // Box 1: Immediate, Box 2: 30s, Box 3: 2 mins, Box 4: 10 mins, Box 5: 30 mins (optimized for demo/active sessions)
  const SRS_INTERVALS = {
    1: 0,
    2: 30 * 1000,
    3: 2 * 60 * 1000,
    4: 10 * 60 * 1000,
    5: 30 * 60 * 1000
  };

  // --- Initializing Data ---
  function initData() {
    // Load existing items or default
    const storedVocab = localStorage.getItem("vocab_flashcards_srs_data");
    if (storedVocab) {
      vocabList = JSON.parse(storedVocab);
      // Auto-update if default vocabulary has changed or expanded
      if (vocabList.length < DEFAULT_VOCABULARY.length) {
        const existingIds = new Set(vocabList.map(item => item.id));
        DEFAULT_VOCABULARY.forEach(defaultItem => {
          if (!existingIds.has(defaultItem.id)) {
            vocabList.push({
              ...defaultItem,
              box: 1,
              nextReview: 0
            });
          }
        });
        saveToLocalStorage();
      }
    } else {
      // Map default vocabulary with SRS fields
      vocabList = DEFAULT_VOCABULARY.map(item => ({
        ...item,
        box: 1,
        nextReview: 0
      }));
      saveToLocalStorage();
    }

    // Load stats
    score = parseInt(localStorage.getItem("vocab_game_score") || "0");
    maxStreak = parseInt(localStorage.getItem("vocab_game_max_streak") || "0");
    streak = parseInt(localStorage.getItem("vocab_game_streak") || "0");
    
    // Load audio config
    const soundCfg = localStorage.getItem("vocab_game_sound");
    if (soundCfg !== null) {
      soundEnabled = soundCfg === "true";
    }

    updateStatsBar();
  }

  function saveToLocalStorage() {
    localStorage.setItem("vocab_flashcards_srs_data", JSON.stringify(vocabList));
    localStorage.setItem("vocab_game_score", score.toString());
    localStorage.setItem("vocab_game_max_streak", maxStreak.toString());
    localStorage.setItem("vocab_game_streak", streak.toString());
  }

  // --- Audio Synthesis Engine ---
  // Synthesizes retro sounds using the Web Audio API (no external file dependencies)
  function playSound(type) {
    if (!soundEnabled) return;
    
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      
      if (type === "correct") {
        // High upbeat chimes
        const now = ctx.currentTime;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc1.type = "sine";
        osc2.type = "triangle";
        
        // C5 -> E5 -> G5 rapid sequence
        osc1.frequency.setValueAtTime(523.25, now); // C5
        osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5
        
        osc2.frequency.setValueAtTime(523.25, now);
        osc2.frequency.setValueAtTime(659.25, now + 0.08);
        osc2.frequency.setValueAtTime(783.99, now + 0.16);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        
        osc1.start(now);
        osc2.start(now);
        
        osc1.stop(now + 0.35);
        osc2.stop(now + 0.35);
      } else if (type === "wrong") {
        // Descending buzzing tone
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sawtooth";
        // Sliding from F3 to C3
        osc.frequency.setValueAtTime(174.61, now);
        osc.frequency.exponentialRampToValueAtTime(130.81, now + 0.25);
        
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === "click") {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, now);
        
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch (e) {
      console.warn("Web Audio context failed to initialize:", e);
    }
  }

  // --- Pronunciation Engine (Text-To-Speech) ---
  function speakWord(text) {
    if ("speechSynthesis" in window) {
      // Cancel ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.85; // slightly slower for educational clarity
      
      // Find an English voice if possible
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(voice => voice.lang.includes("en-US") || voice.lang.includes("en-GB"));
      if (enVoice) utterance.voice = enVoice;
      
      window.speechSynthesis.speak(utterance);
    } else {
      showToast("เบราว์เซอร์ของคุณไม่รองรับการออกเสียงด้วยเสียงสังเคราะห์");
    }
  }

  // Run Speech synthesis getVoices once to preload them in Chrome/Edge
  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
  }

  // --- Navigation & View Switching ---
  const navItems = document.querySelectorAll(".nav-item[data-view]");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item[data-view]");
  const viewSections = document.querySelectorAll(".view-section");

  function switchView(viewName) {
    activeTab = viewName;
    playSound("click");
    
    navItems.forEach(item => {
      if (item.getAttribute("data-view") === viewName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    mobileNavItems.forEach(item => {
      if (item.getAttribute("data-view") === viewName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    viewSections.forEach(section => {
      if (section.id === `${viewName}-view`) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    // Sub-view actions
    if (viewName === "dashboard") {
      renderDashboard();
    } else if (viewName === "manager") {
      renderVocabManager();
    } else if (viewName === "analytics") {
      renderAnalytics();
    } else if (viewName === "settings") {
      renderSettings();
    }
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const view = item.getAttribute("data-view");
      switchView(view);
    });
  });

  mobileNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const view = item.getAttribute("data-view");
      switchView(view);
    });
  });

  // --- Toast Popup ---
  function showToast(message, borderType = "primary") {
    const toast = document.getElementById("toast-popup");
    const toastText = document.getElementById("toast-text");
    
    toastText.textContent = message;
    
    // Set border accent colors
    toast.style.borderLeftColor = `var(--${borderType})`;
    
    toast.classList.add("active");
    
    setTimeout(() => {
      toast.classList.remove("active");
    }, 3500);
  }

  // --- Dashboard Rendering ---
  function renderDashboard() {
    // Count vocabulary
    document.getElementById("dash-total-words").textContent = vocabList.length;
    
    // Count due words for SRS
    const now = Date.now();
    const dueCount = vocabList.filter(item => item.nextReview <= now).length;
    document.getElementById("dash-due-words").textContent = dueCount;
    
    // Display boxes counts
    const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    vocabList.forEach(item => {
      boxCounts[item.box] = (boxCounts[item.box] || 0) + 1;
    });

    for (let i = 1; i <= 5; i++) {
      document.getElementById(`dash-box-${i}-count`).textContent = boxCounts[i];
    }

    // Toggle category container hidden
    document.getElementById("category-selection-container").classList.remove("active");
    document.getElementById("main-dashboard-menu").style.display = "block";
  }

  function updateStatsBar() {
    document.getElementById("global-stat-score").textContent = score;
    document.getElementById("global-stat-streak").textContent = streak;
    document.getElementById("sidebar-streak-count").textContent = streak;
  }

  // --- Dashboard Menu Actions ---
  document.getElementById("start-srs-btn").addEventListener("click", () => {
    startStudySRS();
  });

  document.getElementById("start-category-btn").addEventListener("click", () => {
    document.getElementById("main-dashboard-menu").style.display = "none";
    
    // Render list of categories
    const categoriesMap = {};
    vocabList.forEach(item => {
      if (!categoriesMap[item.category]) {
        categoriesMap[item.category] = { count: 0, box5: 0 };
      }
      categoriesMap[item.category].count++;
      if (item.box === 5) categoriesMap[item.category].box5++;
    });

    const catGrid = document.getElementById("categories-grid-list");
    catGrid.innerHTML = "";

    Object.keys(categoriesMap).forEach(catName => {
      const info = categoriesMap[catName];
      const percent = Math.round((info.box5 / info.count) * 100) || 0;
      
      const card = document.createElement("div");
      card.className = "cat-item-card";
      card.innerHTML = `
        <div class="cat-info">
          <h4>${catName}</h4>
          <span>${info.count} คำศัพท์</span>
        </div>
        <div class="cat-progress">
          <div class="cat-progress-fill" style="width: ${percent}%"></div>
        </div>
        <div style="font-size: 11px; color: var(--text-muted); display:flex; justify-content: space-between;">
          <span>เชี่ยวชาญแล้ว (Box 5)</span>
          <span style="font-weight:700; color: var(--success);">${percent}%</span>
        </div>
      `;

      card.addEventListener("click", () => {
        startStudyCategory(catName);
      });

      catGrid.appendChild(card);
    });

    document.getElementById("category-selection-container").classList.add("active");
  });

  document.getElementById("back-to-menu-btn").addEventListener("click", () => {
    playSound("click");
    document.getElementById("category-selection-container").classList.remove("active");
    document.getElementById("main-dashboard-menu").style.display = "block";
  });

  // --- Game Engine Implementation ---
  function startStudySRS() {
    studyMode = "srs";
    activeCategory = null;
    lives = 5;
    
    // Gather due words
    const now = Date.now();
    studyDeck = vocabList.filter(item => item.nextReview <= now);
    
    // Shuffle
    studyDeck.sort(() => Math.random() - 0.5);
    
    if (studyDeck.length === 0) {
      playSound("wrong");
      showToast("ไม่มีคำศัพท์ที่ถึงกำหนดการทบทวนในตอนนี้! กรุณาเพิ่มคำศัพท์หรือเล่นแยกหมวดหมู่แทน", "danger");
      return;
    }

    studyIndex = 0;
    switchView("study");
    setupStudySession();
  }

  function startStudyCategory(categoryName) {
    studyMode = "category";
    activeCategory = categoryName;
    lives = 5;
    
    studyDeck = vocabList.filter(item => item.category === categoryName);
    
    // Shuffle
    studyDeck.sort(() => Math.random() - 0.5);

    if (studyDeck.length === 0) {
      showToast("ไม่มีคำศัพท์ในหมวดหมู่นี้", "danger");
      return;
    }

    studyIndex = 0;
    switchView("study");
    setupStudySession();
  }

  function setupStudySession() {
    isAnswered = false;
    document.getElementById("study-feedback-overlay").classList.remove("active");
    document.getElementById("study-card-perspective").classList.remove("flipped");
    
    // Set headers
    const modeName = studyMode === "srs" ? "ระบบทบทวนอัจฉริยะ (SRS Challenge)" : `หมวดหมู่: ${activeCategory}`;
    document.getElementById("study-deck-name").textContent = modeName;
    
    // Progress
    const pct = Math.round((studyIndex / studyDeck.length) * 100);
    document.getElementById("study-deck-progress-text").textContent = `คำที่ ${studyIndex + 1} จากทั้งหมด ${studyDeck.length} คำ`;
    document.getElementById("study-progress-fill").style.width = `${pct}%`;

    // Render lives hearts
    const livesContainer = document.getElementById("study-lives-hearts");
    livesContainer.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const heart = document.createElement("span");
      heart.className = `heart-icon ${i > lives ? 'lost' : ''}`;
      heart.innerHTML = "❤️";
      livesContainer.appendChild(heart);
    }

    if (studyIndex >= studyDeck.length) {
      finishStudySession();
      return;
    }

    currentWord = studyDeck[studyIndex];
    renderFlashcard(currentWord);
  }

  function renderFlashcard(wordObj) {
    // Set text
    document.getElementById("card-word-category").textContent = wordObj.category;
    document.getElementById("card-word-title").textContent = wordObj.word;
    document.getElementById("card-word-ipa").textContent = wordObj.ipa || "";

    // Blank out word in sentence for the front
    const blankWord = "_".repeat(wordObj.word.length);
    const regex = new RegExp(`\\b${wordObj.word}\\b`, "gi");
    let sentenceHint = wordObj.sentence;
    
    if (wordObj.sentence) {
      sentenceHint = wordObj.sentence.replace(regex, `<span class="blank-space">${blankWord}</span>`);
    } else {
      sentenceHint = "ไม่มีตัวอย่างรูปประโยคสำหรับคำศัพท์นี้";
    }

    document.getElementById("card-sentence-hint").innerHTML = sentenceHint;
    document.getElementById("card-sentence-translation").textContent = wordObj.sentenceTranslation || "";
    document.getElementById("card-sentence-translation").style.display = "none";
    document.getElementById("reveal-hint-btn").style.display = wordObj.sentenceTranslation ? "inline-block" : "none";

    // BACK FACE
    document.getElementById("card-word-meaning-back").textContent = wordObj.translation;
    document.getElementById("card-word-title-back").textContent = wordObj.word;
    document.getElementById("card-word-ipa-back").textContent = wordObj.ipa || "";
    
    // Highlight correct target word in the back sentence
    let sentenceFull = wordObj.sentence || "";
    if (wordObj.sentence) {
      sentenceFull = wordObj.sentence.replace(regex, `<b style="color:var(--primary); font-weight:700;">${wordObj.word}</b>`);
    }
    document.getElementById("card-back-sentence-en").innerHTML = sentenceFull;
    document.getElementById("card-back-sentence-th").textContent = wordObj.sentenceTranslation || "";

    // Generate Choices (2 choices)
    generateChoices(wordObj);

    // Speak automatically on load
    setTimeout(() => {
      speakWord(wordObj.word);
    }, 400);
  }

  function generateChoices(correctWord) {
    // Pull distractors
    const sameCategoryPool = vocabList.filter(item => item.category === correctWord.category && item.id !== correctWord.id);
    const generalPool = vocabList.filter(item => item.id !== correctWord.id);
    
    let distractor = null;
    if (sameCategoryPool.length > 0) {
      distractor = sameCategoryPool[Math.floor(Math.random() * sameCategoryPool.length)];
    } else if (generalPool.length > 0) {
      distractor = generalPool[Math.floor(Math.random() * generalPool.length)];
    }

    const distractorText = distractor ? distractor.translation : "ไม่มีคำแปลสำรอง";
    
    // Prepare Choices
    currentChoices = [
      { text: correctWord.translation, isCorrect: true },
      { text: distractorText, isCorrect: false }
    ];

    // Shuffle choices
    currentChoices.sort(() => Math.random() - 0.5);

    // Render Buttons
    const choicesPanel = document.getElementById("study-choices-panel");
    choicesPanel.innerHTML = "";

    currentChoices.forEach((choice, idx) => {
      const button = document.createElement("button");
      button.className = "choice-option-btn";
      button.innerHTML = `
        <span class="choice-key">${idx + 1}</span>
        <span>${choice.text}</span>
      `;
      button.addEventListener("click", () => handleAnswerSelect(choice, button));
      choicesPanel.appendChild(button);
    });
  }

  // Handle choice keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    if (activeTab !== "study" || isAnswered || !currentWord) return;
    
    if (e.key === "1") {
      const btns = document.querySelectorAll(".choice-option-btn");
      if (btns[0]) btns[0].click();
    } else if (e.key === "2") {
      const btns = document.querySelectorAll(".choice-option-btn");
      if (btns[1]) btns[1].click();
    } else if (e.key === " ") {
      e.preventDefault();
      speakWord(currentWord.word);
    }
  });

  // Reveal hint translation click
  document.getElementById("reveal-hint-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("card-sentence-translation").style.display = "block";
    document.getElementById("reveal-hint-btn").style.display = "none";
  });

  // Handle answer click
  function handleAnswerSelect(choice, clickedBtn) {
    if (isAnswered) return;
    isAnswered = true;

    const buttons = document.querySelectorAll(".choice-option-btn");
    buttons.forEach(btn => btn.classList.add("disabled"));

    // Find vocabulary card in state database to update Box
    const vocabIndex = vocabList.findIndex(item => item.id === currentWord.id);

    if (choice.isCorrect) {
      clickedBtn.classList.add("correct");
      playSound("correct");
      
      // Update score and streaks
      score += 10 * currentWord.box;
      streak++;
      if (streak > maxStreak) maxStreak = streak;

      // Leitner box logic: Advance to next box (max 5)
      if (vocabIndex !== -1) {
        const currentBox = vocabList[vocabIndex].box || 1;
        const newBox = Math.min(5, currentBox + 1);
        vocabList[vocabIndex].box = newBox;
        vocabList[vocabIndex].nextReview = Date.now() + SRS_INTERVALS[newBox];
      }

      // Add confetti particles dynamically (subtle premium micro-animation)
      createConfettiEffect();
    } else {
      clickedBtn.classList.add("wrong");
      playSound("wrong");
      
      // Highlight the correct one
      buttons.forEach((btn, idx) => {
        if (currentChoices[idx].isCorrect) {
          btn.classList.add("correct");
        }
      });

      // Vibrate/Shake card
      const cardContainer = document.getElementById("study-card-perspective");
      cardContainer.classList.add("shake-anim");
      setTimeout(() => cardContainer.classList.remove("shake-anim"), 500);

      // Streak reset
      streak = 0;
      lives--;

      // Leitner box logic: Reset back to box 1
      if (vocabIndex !== -1) {
        vocabList[vocabIndex].box = 1;
        vocabList[vocabIndex].nextReview = Date.now() + SRS_INTERVALS[1];
      }
    }

    saveToLocalStorage();
    updateStatsBar();

    // Flip the card automatically to show spelling/translation and example
    setTimeout(() => {
      document.getElementById("study-card-perspective").classList.add("flipped");
      
      // Show next button panel
      document.getElementById("study-feedback-overlay").classList.add("active");
    }, 600);
  }

  // Confetti Particle System
  function createConfettiEffect() {
    const parent = document.getElementById("study-view");
    const colors = ["#9d4edd", "#3a86c8", "#06d6a0", "#ffbe0b", "#ff4d6d"];
    
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = `${Math.random() * 8 + 4}px`;
      particle.style.height = `${Math.random() * 8 + 4}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "100";
      
      // Starting coordinates: around the study card
      const rect = document.getElementById("study-card-perspective").getBoundingClientRect();
      const startX = rect.left + rect.width / 2 + window.scrollX;
      const startY = rect.top + rect.height / 2 + window.scrollY;
      
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      
      parent.appendChild(particle);
      
      // Animate
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 12 + 6;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity - 5; // upward bias
      
      let posX = startX;
      let posY = startY;
      let opacity = 1;
      let ticks = 0;
      
      function updateParticle() {
        ticks++;
        posX += vx;
        posY += vy + ticks * 0.25; // gravity
        opacity -= 0.02;
        
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
          requestAnimationFrame(updateParticle);
        } else {
          particle.remove();
        }
      }
      
      requestAnimationFrame(updateParticle);
    }
  }

  // Next Card Button click
  document.getElementById("btn-next-card").addEventListener("click", () => {
    playSound("click");
    
    if (lives <= 0) {
      showGameOver();
      return;
    }
    
    // Reset flip state and hide feedback overlay before showing next card to prevent spoilers
    document.getElementById("study-card-perspective").classList.remove("flipped");
    document.getElementById("study-feedback-overlay").classList.remove("active");
    
    // Wait for the card to flip back before changing the vocabulary content
    setTimeout(() => {
      studyIndex++;
      setupStudySession();
    }, 300);
  });

  // TTS Voice Speak Icon on Card Face
  document.querySelectorAll(".tts-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentWord) {
        speakWord(currentWord.word);
      }
    });
  });

  // End Session Screen
  function finishStudySession() {
    showToast("สำเร็จเซสชันนี้แล้ว! เก่งมากค่ะ 🌟", "success");
    switchView("dashboard");
  }

  function showGameOver() {
    playSound("wrong");
    showToast("พลังชีวิตของคุณหมดลงแล้ว! 💔 พยายามทบทวนใหม่อีกครั้งนะ", "danger");
    switchView("dashboard");
  }

  // --- Vocabulary Manager Rendering ---
  let managerCategoryFilter = "All";
  let managerSearchQuery = "";
  let isCategoryFilterInitialized = false;

  function renderVocabManager() {
    // Generate category select options dynamically
    const categories = ["All", ...new Set(vocabList.map(item => item.category))];
    const filterSelect = document.getElementById("vocab-category-filter");
    
    filterSelect.innerHTML = "";
    categories.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat === "All" ? "ทั้งหมด (All Categories)" : cat;
      if (managerCategoryFilter === cat) {
        option.selected = true;
      }
      filterSelect.appendChild(option);
    });

    if (!isCategoryFilterInitialized) {
      filterSelect.addEventListener("change", (e) => {
        playSound("click");
        managerCategoryFilter = e.target.value;
        renderVocabListTable();
      });
      isCategoryFilterInitialized = true;
    }

    renderVocabListTable();
  }

  function renderVocabListTable() {
    const listContainer = document.getElementById("vocab-list-table-items");
    listContainer.innerHTML = "";

    // Filter items
    let filteredList = vocabList;
    
    if (managerCategoryFilter !== "All") {
      filteredList = filteredList.filter(item => item.category === managerCategoryFilter);
    }

    if (managerSearchQuery.trim() !== "") {
      const query = managerSearchQuery.toLowerCase();
      filteredList = filteredList.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.translation.toLowerCase().includes(query)
      );
    }

    if (filteredList.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state-card">
          <svg viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p>ไม่พบข้อมูลคำศัพท์ตามตัวกรองนี้</p>
        </div>
      `;
      return;
    }

    filteredList.forEach(item => {
      const row = document.createElement("div");
      row.className = "vocab-row-item";
      row.innerHTML = `
        <div class="cell-word">
          <span>${item.word}</span>
          <button class="action-icon-btn speak-row-btn" title="ออกเสียง" style="margin-left:5px;">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-3 1.77L6.43 9H3v6h3.43L11 19V5z"/></svg>
          </button>
        </div>
        <div class="cell-meaning">${item.translation}</div>
        <div><span class="cell-badge">${item.category}</span></div>
        <div class="cell-sentence" title="${item.sentence || ''}">${item.sentence || '-'}</div>
        <div class="cell-actions">
          <button class="action-icon-btn edit-btn" title="แก้ไข">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="action-icon-btn delete-btn" title="ลบ">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
      `;

      // Speak row button
      row.querySelector(".speak-row-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        speakWord(item.word);
      });

      // Edit Row button
      row.querySelector(".edit-btn").addEventListener("click", () => {
        openEditWordModal(item);
      });

      // Delete Row button
      row.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm(`คุณแน่ใจว่าต้องการลบคำศัพท์ "${item.word}" หรือไม่?`)) {
          vocabList = vocabList.filter(v => v.id !== item.id);
          saveToLocalStorage();
          showToast(`ลบคำศัพท์ "${item.word}" แล้ว`, "danger");
          renderVocabManager();
        }
      });

      listContainer.appendChild(row);
    });
  }

  // Search input events
  const searchInput = document.getElementById("vocab-search-input");
  searchInput.addEventListener("input", (e) => {
    managerSearchQuery = e.target.value;
    renderVocabListTable();
  });

  // --- Modal Forms for Single Word ADD / EDIT ---
  const wordModal = document.getElementById("add-word-modal");
  let editModeId = null;

  document.getElementById("btn-add-vocab-modal").addEventListener("click", () => {
    editModeId = null;
    document.getElementById("modal-form-title").textContent = "เพิ่มคำศัพท์ใหม่";
    document.getElementById("vocab-word-input").value = "";
    document.getElementById("vocab-translation-input").value = "";
    document.getElementById("vocab-category-input").value = "General (ทั่วไป)";
    document.getElementById("vocab-ipa-input").value = "";
    document.getElementById("vocab-sentence-input").value = "";
    document.getElementById("vocab-sentence-translation-input").value = "";
    
    wordModal.classList.add("active");
  });

  function openEditWordModal(item) {
    editModeId = item.id;
    document.getElementById("modal-form-title").textContent = "แก้ไขคำศัพท์";
    document.getElementById("vocab-word-input").value = item.word;
    document.getElementById("vocab-translation-input").value = item.translation;
    document.getElementById("vocab-category-input").value = item.category || "General (ทั่วไป)";
    document.getElementById("vocab-ipa-input").value = item.ipa || "";
    document.getElementById("vocab-sentence-input").value = item.sentence || "";
    document.getElementById("vocab-sentence-translation-input").value = item.sentenceTranslation || "";
    
    wordModal.classList.add("active");
  }

  document.getElementById("vocab-modal-close").addEventListener("click", () => {
    wordModal.classList.remove("active");
  });

  document.getElementById("btn-cancel-vocab").addEventListener("click", () => {
    wordModal.classList.remove("active");
  });

  document.getElementById("btn-save-vocab").addEventListener("click", () => {
    const word = document.getElementById("vocab-word-input").value.trim();
    const translation = document.getElementById("vocab-translation-input").value.trim();
    const category = document.getElementById("vocab-category-input").value.trim();
    const ipa = document.getElementById("vocab-ipa-input").value.trim();
    const sentence = document.getElementById("vocab-sentence-input").value.trim();
    const sentenceTranslation = document.getElementById("vocab-sentence-translation-input").value.trim();

    if (!word || !translation) {
      showToast("กรุณากรอกคำศัพท์และคำแปล", "danger");
      return;
    }

    if (editModeId) {
      // Update item
      const idx = vocabList.findIndex(v => v.id === editModeId);
      if (idx !== -1) {
        vocabList[idx] = {
          ...vocabList[idx],
          word,
          translation,
          category,
          ipa,
          sentence,
          sentenceTranslation
        };
        showToast(`แก้ไขคำศัพท์ "${word}" เรียบร้อยแล้ว`, "success");
      }
    } else {
      // Add new
      const newItem = {
        id: "custom-" + Date.now(),
        word,
        translation,
        category: category || "General (ทั่วไป)",
        ipa,
        sentence,
        sentenceTranslation,
        box: 1,
        nextReview: 0
      };
      vocabList.push(newItem);
      showToast(`เพิ่มคำศัพท์ "${word}" เรียบร้อยแล้ว`, "success");
    }

    saveToLocalStorage();
    wordModal.classList.remove("active");
    renderVocabManager();
  });

  // --- Bulk CSV/JSON Import Modal Logic ---
  const importModal = document.getElementById("bulk-import-modal");

  document.getElementById("btn-bulk-import-modal").addEventListener("click", () => {
    document.getElementById("csv-paste-area").value = "";
    importModal.classList.add("active");
  });

  document.getElementById("import-modal-close").addEventListener("click", () => {
    importModal.classList.remove("active");
  });

  document.getElementById("btn-cancel-import").addEventListener("click", () => {
    importModal.classList.remove("active");
  });

  document.getElementById("btn-confirm-import").addEventListener("click", () => {
    const textData = document.getElementById("csv-paste-area").value.trim();
    if (!textData) {
      showToast("กรุณาวางข้อมูลคำศัพท์", "danger");
      return;
    }

    try {
      // Check if JSON format
      if (textData.startsWith("[") || textData.startsWith("{")) {
        const parsed = JSON.parse(textData);
        const importedArray = Array.isArray(parsed) ? parsed : [parsed];
        
        let count = 0;
        importedArray.forEach(item => {
          if (item.word && item.translation) {
            vocabList.push({
              id: "json-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
              word: item.word.trim(),
              translation: item.translation.trim(),
              category: item.category ? item.category.trim() : "Imported",
              ipa: item.ipa ? item.ipa.trim() : "",
              sentence: item.sentence ? item.sentence.trim() : "",
              sentenceTranslation: item.sentenceTranslation ? item.sentenceTranslation.trim() : "",
              box: 1,
              nextReview: 0
            });
            count++;
          }
        });

        if (count > 0) {
          saveToLocalStorage();
          showToast(`นำเข้าคำศัพท์จาก JSON สำเร็จ ${count} คำ!`, "success");
          importModal.classList.remove("active");
          renderVocabManager();
        } else {
          showToast("ไม่พบคำศัพท์ที่สามารถนำเข้าได้จากรูปแบบ JSON", "danger");
        }
      } else {
        // Parse CSV format (tab or comma separated)
        const lines = textData.split("\n");
        let count = 0;

        lines.forEach(line => {
          if (!line.trim()) return;
          
          // Split by tab first, fallback to comma
          let cols = line.split("\t");
          if (cols.length < 2) {
            cols = line.split(",");
          }

          if (cols.length >= 2) {
            const word = cols[0].trim();
            const translation = cols[1].trim();
            
            // Skip header if matches
            if (word.toLowerCase() === "word" || word.toLowerCase() === "vocab" || word.toLowerCase() === "คำศัพท์") return;

            const category = cols[2] ? cols[2].trim() : "Imported";
            const ipa = cols[3] ? cols[3].trim() : "";
            const sentence = cols[4] ? cols[4].trim() : "";
            const sentenceTranslation = cols[5] ? cols[5].trim() : "";

            vocabList.push({
              id: "csv-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
              word,
              translation,
              category: category || "Imported",
              ipa,
              sentence,
              sentenceTranslation,
              box: 1,
              nextReview: 0
            });
            count++;
          }
        });

        if (count > 0) {
          saveToLocalStorage();
          showToast(`นำเข้าคำศัพท์จาก CSV สำเร็จ ${count} คำ!`, "success");
          importModal.classList.remove("active");
          renderVocabManager();
        } else {
          showToast("ไม่สามารถวิเคราะห์ข้อมูลที่ส่งมาได้ กรุณาตรวจหารูปแบบ CSV หรือแท็บเว้นวรรค", "danger");
        }
      }
    } catch (e) {
      showToast("เกิดข้อผิดพลาดในการวิเคราะห์ข้อมูลที่วาง: " + e.message, "danger");
    }
  });

  // Support JSON Export download
  document.getElementById("btn-export-json").addEventListener("click", () => {
    playSound("click");
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vocabList, null, 2));
    const dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "vocab_flashcards_export.json");
    dlAnchorElem.click();
    showToast("ส่งออกข้อมูลคำศัพท์ทั้งหมดเป็นไฟล์ JSON แล้ว", "success");
  });

  // --- Analytics Dashboard Rendering ---
  function renderAnalytics() {
    // Calculated stats
    const boxCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    vocabList.forEach(item => {
      boxCounts[item.box] = (boxCounts[item.box] || 0) + 1;
    });

    for (let i = 1; i <= 5; i++) {
      document.getElementById(`analytics-box-${i}-count`).textContent = boxCounts[i];
      // Set width of indicator bars in analytics
      const pct = vocabList.length > 0 ? Math.round((boxCounts[i] / vocabList.length) * 100) : 0;
      document.getElementById(`analytics-box-${i}-bar`).style.width = `${pct}%`;
      document.getElementById(`analytics-box-${i}-pct`).textContent = `${pct}%`;
    }

    // Set ring progress for Mastered (Box 5) words
    const totalCount = vocabList.length;
    const masteredCount = boxCounts[5] || 0;
    const masterPct = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;
    
    document.getElementById("analytics-mastered-pct-text").textContent = `${masterPct}%`;
    document.getElementById("analytics-mastered-details").textContent = `เชี่ยวชาญแล้ว ${masteredCount} จากทั้งหมด ${totalCount} คำ`;

    // SVG dash offset animation
    const ring = document.getElementById("analytics-progress-ring");
    if (ring) {
      const offset = 100 - masterPct;
      ring.style.strokeDashoffset = offset;
    }
  }

  // --- Settings tab UI & AI Config ---
  let geminiApiKey = localStorage.getItem("vocab_gemini_api_key") || "";
  let isGeneratingAI = false;

  function renderSettings() {
    document.getElementById("toggle-settings-sound").checked = soundEnabled;
    document.getElementById("settings-gemini-key").value = geminiApiKey;
  }

  document.getElementById("toggle-settings-sound").addEventListener("change", (e) => {
    soundEnabled = e.target.checked;
    localStorage.setItem("vocab_game_sound", soundEnabled.toString());
    playSound("click");
    showToast(soundEnabled ? "เปิดการใช้งานเสียงเสร็จสิ้น" : "ปิดการใช้งานเสียงเรียบร้อย", "success");
  });

  document.getElementById("btn-save-api-key").addEventListener("click", () => {
    const key = document.getElementById("settings-gemini-key").value.trim();
    geminiApiKey = key;
    localStorage.setItem("vocab_gemini_api_key", key);
    playSound("click");
    showToast("บันทึก Gemini API Key เรียบร้อยแล้ว", "success");
  });

  document.getElementById("btn-reset-vocab-settings").addEventListener("click", () => {
    if (confirm("คุณแน่ใจว่าต้องการล้างความคืบหน้าของคะแนน และกลับไปใช้คำศัพท์เริ่มต้นใช่หรือไม่?")) {
      localStorage.removeItem("vocab_flashcards_srs_data");
      localStorage.removeItem("vocab_game_score");
      localStorage.removeItem("vocab_game_max_streak");
      localStorage.removeItem("vocab_game_streak");
      
      score = 0;
      streak = 0;
      maxStreak = 0;
      
      initData();
      showToast("รีเซ็ตความคืบหน้าทั้งหมดเสร็จสิ้น!", "success");
      switchView("dashboard");
    }
  });

  // --- AI Example Sentence Generator ---
  async function generateAISentences() {
    if (isGeneratingAI) return;
    if (!geminiApiKey) {
      playSound("wrong");
      showToast("กรุณาใส่ Gemini API Key ในหน้าตั้งค่าก่อนใช้งานฟีเจอร์นี้", "danger");
      switchView("settings");
      return;
    }

    // Filter words that lack sentence
    const pendingWords = vocabList.filter(item => !item.sentence || item.sentence.trim() === "");
    if (pendingWords.length === 0) {
      showToast("คำศัพท์ทุกคำมีประโยคตัวอย่างครบถ้วนแล้ว!", "success");
      return;
    }

    if (!confirm(`ระบบจะใช้ AI ทยอยสร้างประโยคและคำอ่านให้คำศัพท์ทั้งหมด ${pendingWords.length} คำ ต้องการเริ่มทำงานใช่หรือไม่?`)) {
      return;
    }

    isGeneratingAI = true;
    const progressContainer = document.getElementById("ai-progress-container");
    const progressStatus = document.getElementById("ai-progress-status");
    const progressPct = document.getElementById("ai-progress-pct");
    const progressFill = document.getElementById("ai-progress-fill");
    
    progressContainer.style.display = "flex";
    document.getElementById("btn-ai-generate-sentences").disabled = true;
    document.getElementById("ai-btn-text").textContent = "⏳ กำลังเจนด้วย AI...";

    let completed = 0;
    const batchSize = 3; // run 3 in parallel
    
    for (let i = 0; i < pendingWords.length; i += batchSize) {
      if (!isGeneratingAI) break;

      const batch = pendingWords.slice(i, i + batchSize);
      const promises = batch.map(async (wordObj) => {
        try {
          const res = await callGeminiAPI(wordObj.word, wordObj.translation);
          if (res) {
            const idx = vocabList.findIndex(item => item.id === wordObj.id);
            if (idx !== -1) {
              vocabList[idx].ipa = res.ipa || "";
              vocabList[idx].sentence = res.sentence || "";
              vocabList[idx].sentenceTranslation = res.sentenceTranslation || "";
            }
          }
        } catch (err) {
          console.error("Gemini API Error for " + wordObj.word, err);
        }
      });

      await Promise.all(promises);
      
      completed += batch.length;
      const pct = Math.round((completed / pendingWords.length) * 100);
      progressPct.textContent = `${pct}%`;
      progressFill.style.width = `${pct}%`;
      progressStatus.textContent = `กำลังสร้างประโยค... (${completed}/${pendingWords.length} คำ)`;
      
      saveToLocalStorage();
      
      // Cooldown to avoid hitting free rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    isGeneratingAI = false;
    progressContainer.style.display = "none";
    document.getElementById("btn-ai-generate-sentences").disabled = false;
    document.getElementById("ai-btn-text").textContent = "✨ AI เจนประโยค";
    
    showToast(`เสร็จสิ้น! สร้างประโยคตัวอย่างสำเร็จ ${completed} คำ`, "success");
    renderVocabManager();
  }

  async function callGeminiAPI(word, translation) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`;
    
    const prompt = `Translate the English word "${word}" to Thai (meaning: "${translation}"). 
Generate an educational English example sentence showing how to use the word, and write its Thai translation. 
Also, write the IPA pronunciation guide for "${word}".
Return ONLY a valid JSON object in this exact format, with no markdown code blocks, no backticks, and no extra text:
{
  "ipa": "/pronounced/",
  "sentence": "English example sentence.",
  "sentenceTranslation": "แปลประโยคภาษาไทย"
}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text.trim();
    // Strip potential markdown wrappers just in case the model ignored constraints
    let cleanedText = text;
    if (cleanedText.startsWith("```json")) {
      cleanedText = cleanedText.substring(7, cleanedText.length - 3).trim();
    } else if (cleanedText.startsWith("```")) {
      cleanedText = cleanedText.substring(3, cleanedText.length - 3).trim();
    }
    return JSON.parse(cleanedText);
  }

  // Bind AI generator click
  document.getElementById("btn-ai-generate-sentences").addEventListener("click", () => {
    generateAISentences();
  });

  // --- Initial Startup ---
  initData();
  switchView("dashboard");
});
