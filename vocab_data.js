const DEFAULT_VOCABULARY = [
  // Animals (สัตว์)
  {
    id: "anim-001",
    word: "chameleon",
    translation: "กิ้งก่าเปลี่ยนสี",
    category: "Animals (สัตว์)",
    ipa: "/kəˈmiː.li.ən/",
    sentence: "The chameleon changed its color to blend in with the green leaves.",
    sentenceTranslation: "กิ้งก่าเปลี่ยนสีผิวของมันเพื่อให้กลมกลืนกับใบไม้สีเขียว"
  },
  {
    id: "anim-002",
    word: "dolphin",
    translation: "โลมา",
    category: "Animals (สัตว์)",
    ipa: "/ˈdɒl.fɪn/",
    sentence: "Dolphins are known for their high intelligence and playful behavior.",
    sentenceTranslation: "โลมาเป็นที่รู้จักในเรื่องของสติปัญญาที่สูงและพฤติกรรมที่รักสนุก"
  },
  {
    id: "anim-003",
    word: "squirrel",
    translation: "กระรอก",
    category: "Animals (สัตว์)",
    ipa: "/ˈskwɪr.əl/",
    sentence: "The squirrel gathered nuts and hid them in the tree for winter.",
    sentenceTranslation: "กระรอกรวบรวมลูกนัทและซ่อนมันไว้ในต้นไม้เพื่อเตรียมสำหรับฤดูหนาว"
  },
  {
    id: "anim-004",
    word: "cheetah",
    translation: "เสือชีตาห์",
    category: "Animals (สัตว์)",
    ipa: "/ˈtʃiː.tə/",
    sentence: "The cheetah is the fastest land animal in the world.",
    sentenceTranslation: "เสือชีตาห์เป็นสัตว์บกที่วิ่งเร็วที่สุดในโลก"
  },
  {
    id: "anim-005",
    word: "ostrich",
    translation: "นกกระจอกเทศ",
    category: "Animals (สัตว์)",
    ipa: "/ˈɒs.trɪtʃ/",
    sentence: "An ostrich cannot fly, but it can run incredibly fast.",
    sentenceTranslation: "นกกระจอกเทศบินไม่ได้ แต่สามารถวิ่งได้เร็วอย่างเหลือเชื่อ"
  },
  {
    id: "anim-006",
    word: "kangaroo",
    translation: "จิงโจ้",
    category: "Animals (สัตว์)",
    ipa: "/ˌkæŋ.ɡərˈuː/",
    sentence: "A female kangaroo carries her baby in a pouch on her belly.",
    sentenceTranslation: "จิงโจ้ตัวเมียอุ้มลูกของมันไว้ในกระเป๋าหน้าท้อง"
  },
  {
    id: "anim-007",
    word: "octopus",
    translation: "ปลาหมึกยักษ์",
    category: "Animals (สัตว์)",
    ipa: "/ˈɒk.tə.pəs/",
    sentence: "An octopus has three hearts and blue blood.",
    sentenceTranslation: "ปลาหมึกยักษ์มีหัวใจสามดวงและมีเลือดสีน้ำเงิน"
  },
  {
    id: "anim-008",
    word: "eagle",
    translation: "นกอินทรี",
    category: "Animals (สัตว์)",
    ipa: "/ˈiː.ɡəl/",
    sentence: "The eagle soared high above the mountains searching for prey.",
    sentenceTranslation: "นกอินทรีบินร่อนอยู่สูงเหนือภูเขาเพื่อค้นหาเหยื่อ"
  },
  {
    id: "anim-009",
    word: "jellyfish",
    translation: "แมงกะพรุน",
    category: "Animals (สัตว์)",
    ipa: "/ˈdʒel.i.fɪʃ/",
    sentence: "Some jellyfish glow in the dark ocean using bioluminescence.",
    sentenceTranslation: "แมงกะพรุนบางชนิดเรืองแสงในมหาสมุทรที่มืดมิดโดยใช้การเรืองแสงทางชีวภาพ"
  },
  {
    id: "anim-010",
    word: "peacock",
    translation: "นกยูงตัวผู้",
    category: "Animals (สัตว์)",
    ipa: "/ˈpiː.kɒk/",
    sentence: "The male peacock spread its colorful feathers to attract a mate.",
    sentenceTranslation: "นกยูงตัวผู้รำแพนขนหางที่มีสีสันสวยงามเพื่อดึงดูดคู่"
  },

  // Household Items (เครื่องใช้ในบ้าน)
  {
    id: "house-001",
    word: "refrigerator",
    translation: "ตู้เย็น",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/rɪˈfrɪdʒ.ə.reɪ.tər/",
    sentence: "Please put the milk back into the refrigerator so it doesn't spoil.",
    sentenceTranslation: "กรุณานำนมกลับไปใส่ในตู้เย็นเพื่อไม่ให้มันบูด"
  },
  {
    id: "house-002",
    word: "microwave",
    translation: "เตาไมโครเวฟ",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈmaɪ.krə.weɪv/",
    sentence: "I heated up the leftover pizza in the microwave for lunch.",
    sentenceTranslation: "ฉันอุ่นพิซซ่าที่เหลือในเตาไมโครเวฟสำหรับอาหารกลางวัน"
  },
  {
    id: "house-003",
    word: "wardrobe",
    translation: "ตู้เสื้อผ้า",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈwɔː.drəʊb/",
    sentence: "She hung her new winter coat inside the wardrobe.",
    sentenceTranslation: "เธอแขวนเสื้อโค้ทกันหนาวตัวใหม่ไว้ในตู้เสื้อผ้า"
  },
  {
    id: "house-004",
    word: "blanket",
    translation: "ผ้าห่ม",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈblæŋ.kɪt/",
    sentence: "It was freezing tonight, so I grabbed an extra blanket.",
    sentenceTranslation: "คืนนี้อากาศหนาวจัด ฉันจึงหยิบผ้าห่มเพิ่มอีกผืน"
  },
  {
    id: "house-005",
    word: "kettle",
    translation: "กาต้มน้ำ",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈket.əl/",
    sentence: "The kettle is boiling, so we can make some hot tea now.",
    sentenceTranslation: "กาต้มน้ำเดือดแล้ว ตอนนี้เราสามารถชงชาร้อนได้แล้ว"
  },
  {
    id: "house-006",
    word: "vacuum cleaner",
    translation: "เครื่องดูดฝุ่น",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈvæk.juːm ˌkliː.nər/",
    sentence: "Use the vacuum cleaner to clean the dust off the living room carpet.",
    sentenceTranslation: "ใช้เครื่องดูดฝุ่นทำความสะอาดฝุ่นออกจากพรมในห้องนั่งเล่น"
  },
  {
    id: "house-007",
    word: "toaster",
    translation: "เครื่องปิ้งขนมปัง",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈtəʊ.stər/",
    sentence: "He put two slices of bread into the toaster for breakfast.",
    sentenceTranslation: "เขาใส่ขนมปังสองแผ่นลงในเครื่องปิ้งขนมปังสำหรับอาหารเช้า"
  },
  {
    id: "house-008",
    word: "pillowcase",
    translation: "ปลอกหมอน",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈpɪl.əʊ.keɪs/",
    sentence: "I wash the pillowcases every week to keep them clean and fresh.",
    sentenceTranslation: "ฉันซักปลอกหมอนทุกสัปดาห์เพื่อให้พวกมันสะอาดและสดชื่น"
  },
  {
    id: "house-009",
    word: "curtain",
    translation: "ผ้าม่าน",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈkɜː.tən/",
    sentence: "She pulled the curtains open to let the warm sunlight in.",
    sentenceTranslation: "เธอเปิดผ้าม่านออกเพื่อให้แสงแดดอุ่นๆ ส่องเข้ามา"
  },
  {
    id: "house-010",
    word: "cushion",
    translation: "หมอนอิง",
    category: "Household (เครื่องใช้ในบ้าน)",
    ipa: "/ˈkʊʃ.ən/",
    sentence: "This sofa would be more comfortable with a soft cushion behind my back.",
    sentenceTranslation: "โซฟานี้จะนั่งสบายกว่านี้ถ้ามีหมอนอิงนุ่มๆ หนุนหลังฉันไว้"
  },

  // Food & Drinks (อาหารและเครื่องดื่ม)
  {
    id: "food-001",
    word: "beverage",
    translation: "เครื่องดื่ม",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ˈbev.ər.ɪdʒ/",
    sentence: "Water is the healthiest beverage to stay hydrated.",
    sentenceTranslation: "น้ำดื่มเป็นเครื่องดื่มที่ดีต่อสุขภาพที่สุดในการรักษาความชุ่มชื้นของร่างกาย"
  },
  {
    id: "food-002",
    word: "ingredient",
    translation: "ส่วนผสม",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ɪnˈɡriː.di.ənt/",
    sentence: "Fresh herbs are the key ingredient in this delicious pasta sauce.",
    sentenceTranslation: "สมุนไพรสดเป็นส่วนผสมหลักในซอสพาสต้าที่อร่อยนี้"
  },
  {
    id: "food-003",
    word: "delicious",
    translation: "อร่อย",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/dɪˈlɪʃ.əs/",
    sentence: "My grandmother cooked a delicious dinner for my birthday.",
    sentenceTranslation: "คุณยายของฉันทำอาหารค่ำแสนอร่อยสำหรับวันเกิดของฉัน"
  },
  {
    id: "food-004",
    word: "spicy",
    translation: "เผ็ด",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ˈspaɪ.si/",
    sentence: "Tom Yum Goong is a famous spicy Thai soup.",
    sentenceTranslation: "ต้มยำกุ้งเป็นแกงเผ็ดไทยที่มีชื่อเสียง"
  },
  {
    id: "food-005",
    word: "dessert",
    translation: "ของหวาน",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/dɪˈzɜːt/",
    sentence: "We had mango sticky rice as dessert after the main course.",
    sentenceTranslation: "พวกเราทานข้าวเหนียวมะม่วงเป็นของหวานหลังจากอาหารจานหลัก"
  },
  {
    id: "food-006",
    word: "cinnamon",
    translation: "อบเชย",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ˈsɪn.ə.mən/",
    sentence: "She sprinkled some cinnamon on top of her warm cappuccino.",
    sentenceTranslation: "เธอโรยผงอบเชยลงบนคาปูชิโน่อุ่นๆ ของเธอ"
  },
  {
    id: "food-007",
    word: "recipe",
    translation: "สูตรอาหาร",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ˈres.ɪ.pi/",
    sentence: "I followed the recipe exactly, and the cake turned out perfect.",
    sentenceTranslation: "ฉันทำตามสูตรอาหารทุกประการ และเค้กก็ออกมาสมบูรณ์แบบ"
  },
  {
    id: "food-008",
    word: "nutritious",
    translation: "ซึ่งมีคุณค่าทางโภชนาการ",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/njuːˈtrɪʃ.əs/",
    sentence: "Spinach is highly nutritious and loaded with vitamins.",
    sentenceTranslation: "ผักโขมมีคุณค่าทางโภชนาการสูงและอุดมไปด้วยวิตามิน"
  },
  {
    id: "food-009",
    word: "appetizer",
    translation: "อาหารเรียกน้ำย่อย",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/ˈæp.ə.taɪ.zər/",
    sentence: "We ordered garlic bread as an appetizer before our main dishes arrived.",
    sentenceTranslation: "พวกเราสั่งขนมปังกระเทียมเป็นอาหารเรียกน้ำย่อยก่อนที่จานหลักจะมาถึง"
  },
  {
    id: "food-010",
    word: "sour",
    translation: "เปรี้ยว",
    category: "Food & Drinks (อาหารและเครื่องดื่ม)",
    ipa: "/saʊər/",
    sentence: "Lemons have a very sour taste because they contain citric acid.",
    sentenceTranslation: "มะนาวมีรสเปรี้ยวมากเพราะมีกรดซิตริก"
  },

  // Verbs / Actions (คำกริยา)
  {
    id: "verb-001",
    word: "accomplish",
    translation: "ทำสำเร็จ",
    category: "Verbs (คำกริยา)",
    ipa: "/əˈkʌm.plɪʃ/",
    sentence: "If we work together, we can accomplish our goal much faster.",
    sentenceTranslation: "หากพวกเราร่วมมือกัน เราจะสามารถทำเป้าหมายให้สำเร็จได้เร็วขึ้นมาก"
  },
  {
    id: "verb-002",
    word: "wander",
    translation: "เดินเตร็ดเตร่ / ท่องเที่ยวไป",
    category: "Verbs (คำกริยา)",
    ipa: "/ˈwɒn.dər/",
    sentence: "We had no map, so we decided to wander around the old city streets.",
    sentenceTranslation: "พวกเราไม่มีแผนที่ จึงตัดสินใจเดินเตร็ดเตร่ไปตามถนนในเมืองเก่า"
  },
  {
    id: "verb-003",
    word: "observe",
    translation: "สังเกต",
    category: "Verbs (คำกริยา)",
    ipa: "/əbˈzɜːv/",
    sentence: "Scientists observe animal behavior to learn how they adapt.",
    sentenceTranslation: "นักวิทยาศาสตร์สังเกตพฤทีการรมสัตว์เพื่อเรียนรู้วิธีที่พวกมันปรับตัว"
  },
  {
    id: "verb-004",
    word: "postpone",
    translation: "เลื่อนเวลาออกไป",
    category: "Verbs (คำกริยา)",
    ipa: "/pəʊstˈpəʊn/",
    sentence: "The match was postponed due to heavy rain and storms.",
    sentenceTranslation: "การแข่งขันถูกเลื่อนออกไปเนื่องจากฝนตกหนักและพายุ"
  },
  {
    id: "verb-005",
    word: "exaggerate",
    translation: "พูดเกินจริง",
    category: "Verbs (คำกริยา)",
    ipa: "/ɪɡˈzædʒ.ə.reɪt/",
    sentence: "Don't exaggerate; the fish you caught was not that big!",
    sentenceTranslation: "อย่าพูดเกินจริงไปหน่อยเลย ปลาที่คุณจับได้มันไม่ได้ตัวใหญ่ขนาดนั้นสักหน่อย!"
  },
  {
    id: "verb-006",
    word: "flourish",
    translation: "เจริญรุ่งเรือง / งอกงาม",
    category: "Verbs (คำกริยา)",
    ipa: "/ˈflʌr.ɪʃ/",
    sentence: "With regular watering and sunlight, the plants began to flourish.",
    sentenceTranslation: "ด้วยการรดน้ำและแสงแดดที่สม่ำเสมอ พืชพรรณต่างๆ ก็เริ่มเจริญงอกงาม"
  },
  {
    id: "verb-007",
    word: "investigate",
    translation: "สืบสวน / ตรวจสอบ",
    category: "Verbs (คำกริยา)",
    ipa: "/ɪnˈves.tɪ.ɡeɪt/",
    sentence: "The police are trying to investigate the cause of the accident.",
    sentenceTranslation: "ตำรวจกำลังพยายามสืบสวนหาสาเหตุของอุบัติเหตุ"
  },
  {
    id: "verb-008",
    word: "memorize",
    translation: "จดจำ / ท่องจำ",
    category: "Verbs (คำกริยา)",
    ipa: "/ˈmem.ə.raɪz/",
    sentence: "It took me three days to memorize all the lyrics to this song.",
    sentenceTranslation: "ฉันใช้เวลาสามวันในการท่องจำเนื้อเพลงทั้งหมดของเพลงนี้"
  },
  {
    id: "verb-009",
    word: "encourage",
    translation: "สนับสนุน / ให้กำลังใจ",
    category: "Verbs (คำกริยา)",
    ipa: "/ɪnˈkʌr.ɪdʒ/",
    sentence: "My parents always encourage me to pursue my dreams.",
    sentenceTranslation: "พ่อแม่มักจะสนับสนุนและให้กำลังใจฉันในการทำตามความฝันเสมอ"
  },
  {
    id: "verb-010",
    word: "negotiate",
    translation: "เจรจาต่อรอง",
    category: "Verbs (คำกริยา)",
    ipa: "/nəˈɡəʊ.ʃi.eɪt/",
    sentence: "We managed to negotiate a lower price for the second-hand car.",
    sentenceTranslation: "พวกเราเจรจาต่อรองราคาที่ถูกลงสำหรับรถยนต์มือสองได้สำเร็จ"
  },

  // Academic / General (วิชาการ / ทั่วไป)
  {
    id: "gen-001",
    word: "significant",
    translation: "สำคัญอย่างยิ่ง / มีนัยสำคัญ",
    category: "General (ทั่วไป)",
    ipa: "/sɪɡˈnɪf.ɪ.kənt/",
    sentence: "There was a significant improvement in his test scores after studying.",
    sentenceTranslation: "คะแนนสอบของเขามีการพัฒนาขึ้นอย่างมีนัยสำคัญหลังจากที่ตั้งใจเรียน"
  },
  {
    id: "gen-002",
    word: "evaluate",
    translation: "ประเมินผล",
    category: "General (ทั่วไป)",
    ipa: "/ɪˈvæl.ju.eɪt/",
    sentence: "Teachers evaluate students based on their projects and participation.",
    sentenceTranslation: "คุณครูประเมินผลนักเรียนจากชิ้นงานการทำโครงงานและการมีส่วนร่วมของพวกเขา"
  },
  {
    id: "gen-003",
    word: "analyze",
    translation: "วิเคราะห์",
    category: "General (ทั่วไป)",
    ipa: "/ˈæn.əl.aɪz/",
    sentence: "The software is designed to analyze complex financial data.",
    sentenceTranslation: "ซอฟต์แวร์นี้ถูกออกแบบมาเพื่อวิเคราะห์ข้อมูลทางการเงินที่ซับซ้อน"
  },
  {
    id: "gen-004",
    word: "hypothesis",
    translation: "สมมติฐาน",
    category: "General (ทั่วไป)",
    ipa: "/haɪˈpɒθ.ə.sɪs/",
    sentence: "The scientist conducted experiments to test her scientific hypothesis.",
    sentenceTranslation: "นักวิทยาศาสตร์ได้ทำการทดลองเพื่อทดสอบสมมติฐานทางวิทยาศาสตร์ของเธอ"
  },
  {
    id: "gen-005",
    word: "consequence",
    translation: "ผลที่ตามมา",
    category: "General (ทั่วไป)",
    ipa: "/ˈkɒn.sɪ.kwəns/",
    sentence: "Global warming is a direct consequence of carbon dioxide emissions.",
    sentenceTranslation: "ภาวะโลกร้อนเป็นผลลัพธ์โดยตรงจากการปล่อยก๊าซคาร์บอนไดออกไซด์"
  },
  {
    id: "gen-006",
    word: "alternative",
    translation: "ทางเลือก",
    category: "General (ทั่วไป)",
    ipa: "/ɒlˈtɜː.nə.tɪv/",
    sentence: "Solar energy is an eco-friendly alternative to fossil fuels.",
    sentenceTranslation: "พลังงานแสงอาทิตย์เป็นทางเลือกที่เป็นมิตรต่อสิ่งแวดล้อมแทนเชื้อเพลิงฟอสซิล"
  },
  {
    id: "gen-007",
    word: "evidence",
    translation: "หลักฐาน",
    category: "General (ทั่วไป)",
    ipa: "/ˈev.ɪ.dəns/",
    sentence: "There is clear evidence that regular exercise improves heart health.",
    sentenceTranslation: "มีหลักฐานที่ชัดเจนว่าการออกกำลังกายอย่างสม่ำเสมอช่วยให้สุขภาพหัวใจดีขึ้น"
  },
  {
    id: "gen-008",
    word: "ambiguous",
    translation: "ก้ำกึ่ง / คลุมเครือ",
    category: "General (ทั่วไป)",
    ipa: "/æmˈbɪɡ.ju.əs/",
    sentence: "The instructions were ambiguous, leading to confusion among the team.",
    sentenceTranslation: "คำแนะนำนั้นคลุมเครือและก้ำกึ่ง ทำให้เกิดความสับสนในทีม"
  },
  {
    id: "gen-009",
    word: "persistent",
    translation: "ดื้อรั้น / ตื๊อ / อย่างต่อเนื่อง",
    category: "General (ทั่วไป)",
    ipa: "/pəˈsɪs.tənt/",
    sentence: "Thanks to his persistent efforts, he finally passed the driving test.",
    sentenceTranslation: "ด้วยความพยายามอย่างต่อเนื่องและไม่ย่อท้อของเขา ในที่สุดเขาก็ผ่านการทดสอบขับรถ"
  },
  {
    id: "gen-010",
    word: "vulnerable",
    translation: "อ่อนแอ / เสี่ยงต่ออันตราย / เปราะบาง",
    category: "General (ทั่วไป)",
    ipa: "/ˈvʌl.nər.ə.bəl/",
    sentence: "Young children and elderly people are more vulnerable to winter flu.",
    sentenceTranslation: "เด็กเล็กและผู้สูงอายุเป็นกลุ่มที่เปราะบางและเสี่ยงต่อการเป็นไข้หวัดใหญ่ในฤดูหนาวได้ง่ายขึ้น"
  },
  {
    id: "pdf-1",
    word: "Accept",
    translation: "ยอมรับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-2",
    word: "Acknowledge",
    translation: "รับทราบ / แจ้งว่าได้รับแล้ว",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-3",
    word: "Address",
    translation: "จัดการกับปัญหา / จ่าหน้าซอง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-4",
    word: "Advise",
    translation: "แนะนำ / แจ้งให้ทราบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-5",
    word: "Agenda",
    translation: "วาระการประชุม",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-6",
    word: "Apologize",
    translation: "ขออภัย / ขอโทษ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-7",
    word: "Application",
    translation: "การสมัครงาน / โปรแกรม",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-8",
    word: "Appointment",
    translation: "การนัดหมาย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-9",
    word: "Appreciate",
    translation: "ซาบซงึ / ขอบคุณ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-10",
    word: "Approval",
    translation: "การอนุมัติ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-11",
    word: "Approve",
    translation: "อนุมัติ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-12",
    word: "Arrangement",
    translation: "การจัดการ / การเตรียมการ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-13",
    word: "As per",
    translation: "ตามที ... / ตามระบุ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-14",
    word: "Assure",
    translation: "ให้ความมันใจ / ยืนยัน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-15",
    word: "Attach",
    translation: "แนบ (ไฟล์หรือเอกสาร)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-16",
    word: "Attachment",
    translation: "ไฟล์แนบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-17",
    word: "Available",
    translation: "ว่าง / สะดวก / มีอยู่",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-18",
    word: "Avoid",
    translation: "หลีกเลี่ยง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-19",
    word: "Basic",
    translation: "พื้นฐาน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-20",
    word: "Brief",
    translation: "สรุปสั้นๆั / ย่อ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-21",
    word: "Broadcast",
    translation: "กระจายข่าว / ออกอากาศ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-22",
    word: "Business",
    translation: "ธุรกิจ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-23",
    word: "Cc (Carbon copy)",
    translation: "สำเนาถึง (ในการสง่เมล)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-24",
    word: "Clarify",
    translation: "ชี้แจง / ทำให้กระจ่าง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-25",
    word: "Close",
    translation: "ปิด / สรุปจบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-26",
    word: "Collaborate",
    translation: "ร่วมมือกันทำงาน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-27",
    word: "Communication",
    translation: "การสื่อสาร",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-28",
    word: "Concise",
    translation: "กระชบั / ได้ใจความ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-29",
    word: "Confidential",
    translation: "เป็นความลับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-30",
    word: "Confirm",
    translation: "ยืนยัน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-31",
    word: "Confirmation",
    translation: "การยืนยัน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-32",
    word: "Connection",
    translation: "การเชอมต่ือ / สายสมัพันธ์",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-33",
    word: "Contact",
    translation: "ติดต่อ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-34",
    word: "Coordinate",
    translation: "ประสานงาน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-35",
    word: "Correspondence",
    translation: "การติดต่อทางจดหมาย/อีเมล",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-36",
    word: "Deadline",
    translation: "กําหนดเวลาสง่งาน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-37",
    word: "Delay",
    translation: "ล่าชา้ / เลือนออกไป",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-38",
    word: "Deliver",
    translation: "สง่มอบ (งาน/สงของ) ิ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-39",
    word: "Delivery",
    translation: "การสง่มอบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-40",
    word: "Detail",
    translation: "รายละเอียด",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-41",
    word: "Direct",
    translation: "โดยตรง / ชี้ทาง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-42",
    word: "Disagree",
    translation: "ไม่เห็นด้วย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-43",
    word: "Discuss",
    translation: "พูดคุย / ถกประเด็น",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-44",
    word: "Discussion",
    translation: "การสนทนา / การอภิปราย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-45",
    word: "Dispatch",
    translation: "จัดสง่ออกไป",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-46",
    word: "Draft",
    translation: "ร่าง (จดหมาย/เอกสาร)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-47",
    word: "Due date",
    translation: "วันครบกําหนด",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-48",
    word: "Electronic",
    translation: "ทางอิเล็กทรอนิกส์",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-49",
    word: "Email",
    translation: "อีเมล",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-50",
    word: "Enclose",
    translation: "แนบมาพร้อมกันนี",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-51",
    word: "Ensure",
    translation: "ทำให้มันใจ / รับประกัน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-52",
    word: "Etiquette",
    translation: "มารยาท (ทางธุรกิจ )",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-53",
    word: "Explain",
    translation: "อธิบาย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-54",
    word: "Explanation",
    translation: "คําอธิบาย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-55",
    word: "Express",
    translation: "ด่วน / แสดงออก",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-56",
    word: "Feedback",
    translation: "ความคิดเห็น / คําติชม",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-57",
    word: "Follow-up",
    translation: "ติดตามผล",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-58",
    word: "Formal",
    translation: "เป็นทางการ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-59",
    word: "Forward",
    translation: "สง่ต่อ (อีเมล)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-60",
    word: "Further",
    translation: "เพิมเติม / ต่อไป",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-61",
    word: "Greeting",
    translation: "คําทักทาย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-62",
    word: "Guidelines",
    translation: "แนวทางปฏิบัติ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-63",
    word: "Head’s up",
    translation: "การเตือน / แจ้งล่วงหน้า",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-64",
    word: "Inform",
    translation: "แจ้งให้ทราบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-65",
    word: "Information",
    translation: "ข้อมูล",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-66",
    word: "Inquire",
    translation: "สอบถาม",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-67",
    word: "Inquiry",
    translation: "การสอบถาม",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-68",
    word: "Inside",
    translation: "ภายใน",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-69",
    word: "Intention",
    translation: "ความตังใจ / เจตนา",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-70",
    word: "Language",
    translation: "ภาษา",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-71",
    word: "Letter",
    translation: "จดหมาย",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-72",
    word: "Link",
    translation: "ลิงก์ / จุดเชอมโยงื",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-73",
    word: "Mention",
    translation: "กล่าวถึง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-74",
    word: "Message",
    translation: "ข้อความ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-75",
    word: "Misunderstand",
    translation: "เข้าใจผิด",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-76",
    word: "Note",
    translation: "บันทึกย่อ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-77",
    word: "Notice",
    translation: "ประกาศ / สงัเกตเห็น",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-78",
    word: "Notify",
    translation: "แจ้ง / ประกาศให้ทราบ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-79",
    word: "Objective",
    translation: "วัตถุประสงค์",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-80",
    word: "Out of office",
    translation: "ไม่อยูส่ํานักงาน (OOO)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-81",
    word: "Particular",
    translation: "เฉพาะเจาะจง",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-82",
    word: "Please",
    translation: "กรุณา / โปรด",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-83",
    word: "Polite",
    translation: "สุภาพ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-84",
    word: "Postpone",
    translation: "เลือนเวลาออกไป",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-85",
    word: "Presentation",
    translation: "การนําเสนอ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-86",
    word: "Professional",
    translation: "มืออาชพี",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-87",
    word: "Prompt",
    translation: "รวดเร็ว / ทันทีทันใด",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-88",
    word: "Purpose",
    translation: "จุดประสงค์",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-89",
    word: "Receive",
    translation: "ได้รับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-90",
    word: "Recipient",
    translation: "ผู้รับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-91",
    word: "Regarding",
    translation: "เกียวกับ / ในเรือง (Re:)",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-92",
    word: "Remind",
    translation: "เตือนความจํา",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-93",
    word: "Reminder",
    translation: "ข้อความเตือนความจํา",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-94",
    word: "Reply",
    translation: "ตอบกลับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-95",
    word: "Request",
    translation: "ขอร้อง / คําร้องขอ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-96",
    word: "Require",
    translation: "ต้องการ / บังคับใช้",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-97",
    word: "Reschedule",
    translation: "จัดตารางเวลาใหม่",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-98",
    word: "Respond",
    translation: "ตอบสนอง / ตอบกลับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-99",
    word: "Response",
    translation: "คําตอบรับ / การตอบกลับ",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-100",
    word: "Signature",
    translation: "ลายเซน็",
    category: "Email & Communication",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-101",
    word: "Account",
    translation: "บัญชผีู้ใชงาน้ / ลูกค้ารายสำคัญ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-102",
    word: "Acquire",
    translation: "ได้มา / จัดซอื / หามาได้",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-103",
    word: "Adapt",
    translation: "ปรับตัว / ปรับให้เหมาะ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-104",
    word: "Advantage",
    translation: "ข้อได้เปรียบ / ผลประโยชน์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-105",
    word: "Advise",
    translation: "ให้คําปรึกษา / แนะนำ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-106",
    word: "Advocate",
    translation: "ผู้ให้การสนับสนุน / สนับสนุน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-107",
    word: "Afford",
    translation: "สามารถจ่ายได้ / มีเงินพอ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-108",
    word: "After-sales",
    translation: "หลังการขาย",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-109",
    word: "Agreement",
    translation: "ข้อตกลง / สญัญา",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-110",
    word: "Alliance",
    translation: "พันธมิตร / การร่วมมือกัน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-111",
    word: "Alternative",
    translation: "ทางเลือก",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-112",
    word: "Amend",
    translation: "แก้ไข (เอกสาร / สญัญา)",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-113",
    word: "Anticipate",
    translation: "คาดการณ์ / หวังไว้",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-114",
    word: "Appeal",
    translation: "ดึงดูดใจ / ร้องเรียน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-115",
    word: "Approach",
    translation: "การเข้าหา / วิธกีารจัดการ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-116",
    word: "Assist",
    translation: "ชว่ยเหลือ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-117",
    word: "Assistance",
    translation: "ความชว่ยเหลือ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-118",
    word: "Attract",
    translation: "ดึงดูด (ลูกค้า / ความสนใจ)",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-119",
    word: "Bargain",
    translation: "ต่อรองราคา / ของถูก",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-120",
    word: "Benefit",
    translation: "ผลประโยชน์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-121",
    word: "Bonding",
    translation: "การสร้างความผูกพัน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-122",
    word: "Buyer",
    translation: "ผู้ซอื",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-123",
    word: "B2B (Business-to-Business)",
    translation: "ธุรกิจกับธุรกิจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-124",
    word: "B2C (Business-to-Consumer)",
    translation: "ธุรกิจกับผู้บริโภค",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-125",
    word: "Cancel",
    translation: "ยกเลิก",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-126",
    word: "Cancellation",
    translation: "การยกเลิก",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-127",
    word: "Care",
    translation: "การดูแล / ใสใ่จ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-128",
    word: "Case study",
    translation: "กรณีศกึษา",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-129",
    word: "Cater",
    translation: "จัดหาให้ / บริการตอบสนอง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-130",
    word: "Client",
    translation: "ลูกค้า (มักเป็นองค์กร/ผู้ใช้บริการ)",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-131",
    word: "Collaboration",
    translation: "การร่วมมือกัน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-132",
    word: "Commit",
    translation: "ผูกมัด / สญัญาว่าจะทำ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-133",
    word: "Commitment",
    translation: "ข้อผูกมัด / การพันธสญัญา",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-134",
    word: "Compensation",
    translation: "ค่าชดเชย / ค่าตอบแทน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-135",
    word: "Complain",
    translation: "ร้องเรียน / บ่น",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-136",
    word: "Complaint",
    translation: "ข้อร้องเรียน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-137",
    word: "Compromise",
    translation: "ประนีประนอม",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-138",
    word: "Concede",
    translation: "ยอมรับ / ยอมตามข้อตกลง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-139",
    word: "Concern",
    translation: "ความกังวล / ข้อห่วงใย",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-140",
    word: "Condition",
    translation: "เงือนไข / สภาพ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-141",
    word: "Conflict",
    translation: "ความขัดแย้ง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-142",
    word: "Consumer",
    translation: "ผู้บริโภค",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-143",
    word: "Contract",
    translation: "สญญาั",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-144",
    word: "Counteroffer",
    translation: "ข้อเสนอโต้ตอบ / ข้อเสนอใหม่",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-145",
    word: "Courtesy",
    translation: "ความสุภาพ / มีมารยาท",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-146",
    word: "CRM",
    translation: "ระบบบริหารความสมัพันธ์ลกูค้า",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-147",
    word: "Customer",
    translation: "ลูกค้า (ผู้ซอสืนิค้า)",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-148",
    word: "Customize",
    translation: "ปรับแต่งตามใจลูกค้า",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-149",
    word: "Deal",
    translation: "ข้อตกลง / การซอขายื",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-150",
    word: "Demand",
    translation: "ความต้องการ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-151",
    word: "Demographics",
    translation: "ข้อมูลประชากรศาสตร์ของลูกค้า",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-152",
    word: "Discount",
    translation: "ส่วนลด",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-153",
    word: "Dispute",
    translation: "การโต้แย้ง / ข้อพิพาท",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-154",
    word: "Dissatisfied",
    translation: "ไม่พอใจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-155",
    word: "Empathy",
    translation: "ความเข้าใจความรู้สกึคนอืน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-156",
    word: "Engage",
    translation: "สร้างความผูกพัน / มีสวนร่วม่",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-157",
    word: "Engagement",
    translation: "การมีส่วนร่วมของลูกค้า",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-158",
    word: "Escalate",
    translation: "สง่ต่อปัญหาให้ผู้ใหญ่จัดการ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-159",
    word: "Establish",
    translation: "จัดตัง / สร้าง (ความสมัพันธ์ )",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-160",
    word: "Expectation",
    translation: "ความคาดหวัง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-161",
    word: "Experience",
    translation: "ประสบการณ์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-162",
    word: "Favor",
    translation: "ความชว่ยเหลือ / ความโปรดปราน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-163",
    word: "Flexible",
    translation: "ยืดหยุน่",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-164",
    word: "Fulfillment",
    translation: "การเติมเต็ม / การจัดสง่สนิค้าตามส",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-165",
    word: "Gain",
    translation: "ได้รับ / ผลประโยชน์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-166",
    word: "Guarantee",
    translation: "รับประกัน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-167",
    word: "Handle",
    translation: "รับมือ / จัดการกับปัญหา",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-168",
    word: "Impression",
    translation: "ความประทับใจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-169",
    word: "Influence",
    translation: "มีอทิธิพลต่อ / จูงใจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-170",
    word: "Interaction",
    translation: "การปฏิสมัพันธ์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-171",
    word: "Investigate",
    translation: "ตรวจสอบข้อเท็จจริง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-172",
    word: "Invoice",
    translation: "ใบแจ้งหนี",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-173",
    word: "Issue",
    translation: "ประเด็น / ปัญหา",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-174",
    word: "Key account",
    translation: "ลูกค้ารายสำคัญมาก",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-175",
    word: "Long-term",
    translation: "ระยะยาว",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-176",
    word: "Loyalty",
    translation: "ความจงรักภักดี (ต่อแบรนด์ )",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-177",
    word: "Maintain",
    translation: "รักษาไว้ (รักษาความสมัพันธ์ )",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-178",
    word: "Maximize",
    translation: "ทำให้ได้มากทีสุด",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-179",
    word: "Mediate",
    translation: "ไกล่เกลีย",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-180",
    word: "Meet",
    translation: "บรรลุ (เชน่ Meet demands)",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-181",
    word: "Mutually",
    translation: "ซงกัึนและกัน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-182",
    word: "Negotiate",
    translation: "เจรจาต่อรอง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-183",
    word: "Negotiation",
    translation: "การเจรจาต่อรอง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-184",
    word: "Network",
    translation: "เครือข่าย / สายสมัพันธ์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-185",
    word: "Objective",
    translation: "วัตถุประสงค์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-186",
    word: "Offer",
    translation: "ข้อเสนอ / เสนอให้",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-187",
    word: "Outcome",
    translation: "ผลลัพธ์",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-188",
    word: "Partner",
    translation: "พันธมิตร / หุ้นส่วน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-189",
    word: "Partnership",
    translation: "การเป็นหุ้นส่วนธุรกิจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-190",
    word: "Patience",
    translation: "ความอดทน",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-191",
    word: "Persuade",
    translation: "โน้มน้าวใจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-192",
    word: "Premium",
    translation: "คุณภาพสูง / เบียประกัน / เงินรางวั",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-193",
    word: "Priority",
    translation: "สงทีิสำคัญทีสุด / ลําดับต้นๆ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-194",
    word: "Profit",
    translation: "กําไร",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-195",
    word: "Proposal",
    translation: "ข้อเสนอทางธุรกิจ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-196",
    word: "Prospect",
    translation: "ผู้ทีมีแนวโน้มจะเป็นลูกค้า",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-197",
    word: "Provider",
    translation: "ผู้ให้บริการ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-198",
    word: "Rapport",
    translation: "ความสามัคคี / ความสมัพันธ์อันดี",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-199",
    word: "Reach",
    translation: "บรรลุ (ข้อตกลง) / ไปถึง",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-200",
    word: "Recommend",
    translation: "แนะนำ",
    category: "Client Relations",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-201",
    word: "Action plan",
    translation: "แผนการดําเนินงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-202",
    word: "Actionable",
    translation: "ทีสามารถนําไปปฏิบัตไิด้จริง",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-203",
    word: "Adjourn",
    translation: "เลือน / ปิดการประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-204",
    word: "Agenda",
    translation: "วาระการประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-205",
    word: "Allocate",
    translation: "จัดสรร (งบประมาณ / เวลา / คน)",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-206",
    word: "Allocation",
    translation: "การจัดสรร",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-207",
    word: "Analyst",
    translation: "นักวิเคราะห์",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-208",
    word: "Analyze",
    translation: "วิเคราะห์",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-209",
    word: "Annual meeting",
    translation: "การประชุมประจําปี",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-210",
    word: "Appointment",
    translation: "การนัดหมาย",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-211",
    word: "Approve",
    translation: "อนุมัติ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-212",
    word: "Assignment",
    translation: "งานทีได้รับมอบหมาย",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-213",
    word: "Attend",
    translation: "เข้าร่วม (การประชุม )",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-214",
    word: "Attendee",
    translation: "ผู้เข้าร่วมประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-215",
    word: "Backup plan",
    translation: "แผนสำรอง",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-216",
    word: "Boardroom",
    translation: "ห้องประชุมคณะกรรมการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-217",
    word: "Brainstorm",
    translation: "ระดมความคิด",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-218",
    word: "Brief",
    translation: "สรุปงานสนๆก่อนเริัมทำ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-219",
    word: "Budget",
    translation: "งบประมาณ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-220",
    word: "Case study",
    translation: "กรณีศกึษา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-221",
    word: "Chairperson",
    translation: "ประธานในทีประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-222",
    word: "Clarify",
    translation: "ชี้แจงให้ชัดเจน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-223",
    word: "Collaborate",
    translation: "ร่วมมือกันทำงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-224",
    word: "Committee",
    translation: "คณะกรรมการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-225",
    word: "Conclude",
    translation: "สรุป",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-226",
    word: "Conclusion",
    translation: "ข้อสรุป",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-227",
    word: "Conference",
    translation: "การประชุมใหญ่ / สมัมนา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-228",
    word: "Consensus",
    translation: "มติเป็นเอกฉันท์ / ความเห็นพ้อง",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-229",
    word: "Coordinator",
    translation: "ผู้ประสานงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-230",
    word: "Creative",
    translation: "มีความคิดสร้างสรรค์",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-231",
    word: "Criterion",
    translation: "เกณฑ์ / บรรทัดฐาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-232",
    word: "Critical",
    translation: "สำคัญมาก / วิกฤต",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-233",
    word: "Deadline",
    translation: "กําหนดเวลาสง่งาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-234",
    word: "Delegate",
    translation: "มอบหมายงานให้คนอืนทำ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-235",
    word: "Deliverable",
    translation: "ผลงานทีต้องสง่มอบ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-236",
    word: "Department",
    translation: "แผนก",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-237",
    word: "Design",
    translation: "ออกแบบ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-238",
    word: "Development",
    translation: "การพัฒนา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-239",
    word: "Discussion",
    translation: "การสนทนา / อภิปราย",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-240",
    word: "Due date",
    translation: "วันกําหนดสง่ / วันครบกําหนด",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-241",
    word: "Efficiency",
    translation: "ประสทิธิภาพ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-242",
    word: "Efficient",
    translation: "ทีมีประสทิธิภาพ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-243",
    word: "Estimate",
    translation: "ประมาณการ (ราคา / เวลา)",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-244",
    word: "Evaluate",
    translation: "ประเมินผล",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-245",
    word: "Evaluation",
    translation: "การประเมินผล",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-246",
    word: "Execute",
    translation: "ดําเนินการ / ลงมือทำ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-247",
    word: "Execution",
    translation: "การดําเนินการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-248",
    word: "Facilitate",
    translation: "อํานวยความสะดวก",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-249",
    word: "Feedback",
    translation: "ความคิดเห็น / ข้อมูลสะท้อนกลับ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-250",
    word: "Focus group",
    translation: "กลุม่เป้าหมายเฉพาะทีใชทดสอบ้",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-251",
    word: "Forecast",
    translation: "คาดการณ์ลว่งหน้า",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-252",
    word: "Goal",
    translation: "เป้าหมาย",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-253",
    word: "Implementation",
    translation: "การนําไปปฏิบัติใช้จริง",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-254",
    word: "Initiative",
    translation: "ความคิดริเริม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-255",
    word: "Innovation",
    translation: "นวัตกรรม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-256",
    word: "Insight",
    translation: "ข้อมูลเชงิลึก",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-257",
    word: "Kick-off",
    translation: "การเริมต้น (เริมเปิดตัวโครงการ)",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-258",
    word: "Launch",
    translation: "ปล่อยสนิค้าใหม่ / เปิดตัวโครงการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-259",
    word: "Leader",
    translation: "ผู้นํา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-260",
    word: "Leadership",
    translation: "ความเป็นผู้นํา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-261",
    word: "Manage",
    translation: "จัดการ / บริหาร",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-262",
    word: "Management",
    translation: "การจัดการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-263",
    word: "Manager",
    translation: "ผู้จัดการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-264",
    word: "Meeting minutes",
    translation: "รายงานการประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-265",
    word: "Milestone",
    translation: "ความสำเร็จในแต่ละขันของโครงการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-266",
    word: "Motion",
    translation: "ข้อเสนอในทีประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-267",
    word: "Objective",
    translation: "วัตถุประสงค์",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-268",
    word: "Operational",
    translation: "เกียวกับการดําเนินงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-269",
    word: "Organization",
    translation: "องค์กร / การจัดระบบ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-270",
    word: "Outline",
    translation: "เค้าโครง / สรุปย่อ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-271",
    word: "Overview",
    translation: "ภาพรวม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-272",
    word: "Participate",
    translation: "มีส่วนร่วม / เข้าร่วม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-273",
    word: "Phase",
    translation: "ระยะ (ของโครงการ)",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-274",
    word: "Plan",
    translation: "แผนการ / วางแผน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-275",
    word: "Postpone",
    translation: "เลือนการประชุมออกไป",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-276",
    word: "Presentation",
    translation: "การนําเสนอ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-277",
    word: "Priority",
    translation: "ลําดับความสำคัญ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-278",
    word: "Procedure",
    translation: "ขันตอนการปฏิบัตงิาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-279",
    word: "Progress report",
    translation: "รายงานความคืบหน้า",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-280",
    word: "Project manager",
    translation: "ผู้จัดการโครงการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-281",
    word: "Proposal",
    translation: "ข้อเสนอโครงการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-282",
    word: "Quorum",
    translation: "ครบองค์ประชุม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-283",
    word: "Remote meeting",
    translation: "การประชุมทางไกล (ออนไลน์ )",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-284",
    word: "Report",
    translation: "รายงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-285",
    word: "Research",
    translation: "วิจัย",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-286",
    word: "Reschedule",
    translation: "จัดตารางเวลาใหม่",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-287",
    word: "Resource",
    translation: "ทรัพยากร",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-288",
    word: "Responsibility",
    translation: "ความรับผิดชอบ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-289",
    word: "Review",
    translation: "ทบทวน / ตรวจทาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-290",
    word: "Risk assessment",
    translation: "การประเมินความเสยงี",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-291",
    word: "Schedule",
    translation: "ตารางเวลา",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-292",
    word: "Scope of work",
    translation: "ขอบเขตของงาน (SOW)",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-293",
    word: "Session",
    translation: "ชว่งเวลาประชุม / ชว่งเวลาอบรม",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-294",
    word: "Stakeholder",
    translation: "ผู้มีส่วนได้ส่วนเสยีในโครงการ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-295",
    word: "Strategy",
    translation: "กลยุทธ์",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-296",
    word: "Summary",
    translation: "สรุป",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-297",
    word: "Task",
    translation: "งานทีต้องทำ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-298",
    word: "Timeline",
    translation: "กําหนดเวลาของกิจกรรมต่างๆ",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-299",
    word: "Urgent",
    translation: "เร่งด่วน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-300",
    word: "Workflow",
    translation: "ขันตอนหรือกระบวนการทำงาน",
    category: "Meetings & Project",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-301",
    word: "Advertise",
    translation: "โฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-302",
    word: "Advertisement",
    translation: "สอโฆษณาื / ป้ายโฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-303",
    word: "Advertising",
    translation: "การโฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-304",
    word: "Affiliate",
    translation: "การตลาดแบบชว่ยขาย (ได้คอมมิช",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-305",
    word: "Awareness",
    translation: "การรับรู้ (เชน่ Brand awareness)Noun",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-306",
    word: "Banner",
    translation: "ป้ายโฆษณาออนไลน์หรือออฟไลน์Noun",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-307",
    word: "Benchmark",
    translation: "เกณฑ์มาตรฐานในการเปรียบเทียบNoun",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-308",
    word: "Billboard",
    translation: "ป้ายโฆษณาขนาดใหญ่ตามทางด่ว",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-309",
    word: "Brand identity",
    translation: "อัตลักษณ์หรือตัวตนของแบรนด์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-310",
    word: "Brand loyalty",
    translation: "ความจงรักภักดีตอ่แบรนด์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-311",
    word: "Brochure",
    translation: "แผ่นพับโฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-312",
    word: "Buyer persona",
    translation: "บุคลิกภาพของลูกค้ากลุม่เป้าหมายNoun",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-313",
    word: "Campaign",
    translation: "แคมเปญ / กิจกรรมทางการตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-314",
    word: "Catalog",
    translation: "สมุดรายชอสืนิค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-315",
    word: "Channel",
    translation: "ชอ่งทางการขายหรือสอสารื",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-316",
    word: "Closing a deal",
    translation: "การปิดการขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-317",
    word: "Cold call",
    translation: "การโทรหาลูกค้าทีไม่รู้จักมาก่อน",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-318",
    word: "Commission",
    translation: "ค่าคอมมิชชนั / นายหน้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-319",
    word: "Competitor",
    translation: "คูแ่ข่งทางการค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-320",
    word: "Conversion rate",
    translation: "อัตราส่วนผู้ซอจริืงต่อผู้เข้าชม",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-321",
    word: "Copyright",
    translation: "ลิขสทิธิ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-322",
    word: "CTA (Call to action)",
    translation: "คํากระตุ้นให้ลูกค้าตัดสินใจ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-323",
    word: "CTR (Click-through rate)",
    translation: "อัตราการคลิกต่อการมองเห็น",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-324",
    word: "Customer journey",
    translation: "เสนทางการตั้ดสนิใจของลูกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-325",
    word: "Demographics",
    translation: "ข้อมูลประชากร (อายุเพศรายได",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-326",
    word: "Digital marketing",
    translation: "การตลาดดิจทิัล",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-327",
    word: "Direct marketing",
    translation: "การตลาดแบบตรง",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-328",
    word: "Discount",
    translation: "ส่วนลด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-329",
    word: "Display",
    translation: "การจัดแสดงสนิค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-330",
    word: "Distribution",
    translation: "การจัดจําหน่ายกระจายสนิค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-331",
    word: "E-commerce",
    translation: "การพาณิชย์อเิล็กทรอนิกส์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-332",
    word: "Endorsement",
    translation: "การใชคนดังการันตีหรือรีวิวสินค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-333",
    word: "Engagement",
    translation: "การมีส่วนร่วม (ไลก์แชร์คอมเมนต์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-334",
    word: "Exhibit",
    translation: "จัดแสดง / นิทรรศการ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-335",
    word: "Exhibition",
    translation: "งานนิทรรศการ / งานแฟร์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-336",
    word: "Flyer",
    translation: "ใบปลิว",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-337",
    word: "Focus group",
    translation: "กลุม่เป้าหมายในการทำวิจัย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-338",
    word: "Funnel",
    translation: "กรวยการขาย (ขันตอนเปลียนคนดูเ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-339",
    word: "Giveaway",
    translation: "ของสมนาคุณ / ของแจกฟรี",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-340",
    word: "Growth",
    translation: "การเติบโต",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-341",
    word: "Inbound marketing",
    translation: "การตลาดแบบดึงดูดลูกค้าเข้ามา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-342",
    word: "Influencer",
    translation: "ผู้มีอทิธิพลบนโลกโซเชยีล",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-343",
    word: "Insight",
    translation: "ข้อมูลเชงลึกของลูกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-344",
    word: "Launch",
    translation: "การเปิดตัวสนิค้าใหม่",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-345",
    word: "Lead",
    translation: "รายชอผูื้ทีมีแนวโน้มจะเป็นลูกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-346",
    word: "Lead generation",
    translation: "การค้นหาและสร้างรายชอลูืกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-347",
    word: "Logo",
    translation: "โลโก้ / เครืองหมายการค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-348",
    word: "Market research",
    translation: "การวิจัยตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-349",
    word: "Market share",
    translation: "ส่วนแบ่งทางการตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-350",
    word: "Market trend",
    translation: "แนวโน้มของตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-351",
    word: "Marketing mix",
    translation: "ส่วนผสมทางการตลาด (4Ps)",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-352",
    word: "Merchandise",
    translation: "สนิค้า / ของทีระลึก",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-353",
    word: "Merchandising",
    translation: "การบริหารและจัดแสดงสินค้าเพือขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-354",
    word: "Niche market",
    translation: "ตลาดเฉพาะกลุม่",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-355",
    word: "Objective",
    translation: "วัตถุประสงค์ยอดขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-356",
    word: "Outbound marketing",
    translation: "การตลาดแบบรุกออกไปหาลูกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-357",
    word: "Package",
    translation: "บรรจุภณัฑ์ / แพ็กเกจ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-358",
    word: "Packaging",
    translation: "การออกแบบบรรจุภัณฑ์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-359",
    word: "Penetrate",
    translation: "เจาะตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-360",
    word: "Pitch",
    translation: "การนําเสนอเพือขายงานหรือสนิค",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-361",
    word: "Placement",
    translation: "การจัดวางสนิค้าหรือโฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-362",
    word: "Platform",
    translation: "แพลตฟอร์มในการขายหรือสอสารื",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-363",
    word: "Positioning",
    translation: "การวางตําแหน่งของแบรนด์ในตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-364",
    word: "Potential",
    translation: "ศักยภาพ / ทีมีแนวโน้มซอื",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-365",
    word: "PR (Public relations)",
    translation: "การประชาสมัพันธ์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-366",
    word: "Pricing",
    translation: "การตังราคา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-367",
    word: "Product",
    translation: "ผลิตภัณฑ์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-368",
    word: "Profit margin",
    translation: "อัตรากําไรขันต้น",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-369",
    word: "Promote",
    translation: "สง่เสริมการขาย / โปรโมต",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-370",
    word: "Promotion",
    translation: "การสง่เสริมการขาย / โปรโมชนั",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-371",
    word: "Prospect",
    translation: "ผู้ทีมีโอกาสซื้อสินค้าสูง",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-372",
    word: "Publicity",
    translation: "การเผยแพร่ขา่วสารสูส่าธารณะ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-373",
    word: "Purchase",
    translation: "ซอื / สนิค้าทีซอื",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-374",
    word: "Quota",
    translation: "โควตา / ยอดขายทีต้องทำให้ได",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-375",
    word: "Refund",
    translation: "การคืนเงิน",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-376",
    word: "Retail",
    translation: "การขายปลีก",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-377",
    word: "Retailer",
    translation: "ผู้ค้าปลีก",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-378",
    word: "ROI (Return on investment)",
    translation: "ผลตอบแทนจากการลงทุน",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-379",
    word: "Sales executive",
    translation: "เจ้าหน้าที่บริหารงานขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-380",
    word: "Sales pitch",
    translation: "คําพูดนําเสนอขายสนิค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-381",
    word: "Sales representative",
    translation: "ตัวแทนฝ่ายขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-382",
    word: "Sales volume",
    translation: "ปริมาณยอดขาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-383",
    word: "Sample",
    translation: "สนิค้าตัวอย่าง",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-384",
    word: "Segment",
    translation: "กลุม่ตลาดย่อย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-385",
    word: "Segmentation",
    translation: "การแบ่งส่วนตลาด",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-386",
    word: "SEO",
    translation: "การปรับแต่งเว็บไซต์ให้ติดหน้าแรกNoun",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-387",
    word: "Slogan",
    translation: "สโลแกน / คําขวัญโฆษณา",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-388",
    word: "Social media",
    translation: "สอสืงัคมออนไลน์",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-389",
    word: "Sponsor",
    translation: "ผู้สนับสนุนงบประมาณ",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-390",
    word: "Sponsorship",
    translation: "การเป็นผู้สนับสนุน",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-391",
    word: "Survey",
    translation: "แบบสำรวจพฤติกรรมลูกค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-392",
    word: "SWOT analysis",
    translation: "การวิเคราะห์จดุแข็งจุดอ่อนโอกาส",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-393",
    word: "Target audience",
    translation: "กลุม่เป้าหมาย",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-394",
    word: "Telemarketing",
    translation: "การตลาดทางโทรศพท์ั",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-395",
    word: "Testimonial",
    translation: "คํานิยม / คําชมจากลูกค้าทีใช้จริง",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-396",
    word: "Trademark",
    translation: "เครืองหมายการค้า",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-397",
    word: "Upsell",
    translation: "การเชยีร์ขายสนิค้าทีแพงหรือใหญ่ก",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-398",
    word: "USP (Unique selling point)",
    translation: "จุดขายทีโดดเด่นไม่เหมือนใคร",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-399",
    word: "Wholesale",
    translation: "การขายสง่",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-400",
    word: "Word of mouth",
    translation: "ปากต่อปาก (การบอกต่อ )",
    category: "Sales & Marketing",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-401",
    word: "Account payable",
    translation: "เจ้าหนีการค้า",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-402",
    word: "Account receivable",
    translation: "ลูกหนีการค้า",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-403",
    word: "Accountant",
    translation: "นักบัญชี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-404",
    word: "Accounting",
    translation: "การบัญชี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-405",
    word: "Accrual",
    translation: "เกณฑ์คงค้าง / รายได้หรือค่าใชจ่ายค้",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-406",
    word: "Advance",
    translation: "เงินทดรองจ่าย / เงินมัดจําล่วงหน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-407",
    word: "Allocation",
    translation: "การจัดสรรงบประมาณ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-408",
    word: "Amortization",
    translation: "การตัดจําหน่าย (สินทรัพย์ไม่มตีวั",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-409",
    word: "Amount",
    translation: "จํานวนเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-410",
    word: "Annual report",
    translation: "รายงานประจําปี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-411",
    word: "Asset",
    translation: "สินทรัพย์",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-412",
    word: "Audit",
    translation: "การตรวจสอบบัญชี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-413",
    word: "Auditor",
    translation: "ผู้ตรวจสอบบัญชี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-414",
    word: "Balance sheet",
    translation: "งบดุล",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-415",
    word: "Bank statement",
    translation: "ใบแจ้งยอดบัญชธีนาคาร",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-416",
    word: "Billing",
    translation: "การเรียกเก็บเงิน / การวางบิล",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-417",
    word: "Bookkeeping",
    translation: "การทำบัญชขีนตั้น / การบันทึกบัญช",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-418",
    word: "Budget",
    translation: "งบประมาณ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-419",
    word: "Capital",
    translation: "เงินทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-420",
    word: "Cash flow",
    translation: "กระแสเงินสด",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-421",
    word: "Cash on delivery (COD)",
    translation: "การเก็บเงินปลายทาง",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-422",
    word: "Charge",
    translation: "คิดราคา / ค่าธรรมเนียม",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-423",
    word: "Cheque / Check",
    translation: "เชคเงินสด็",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-424",
    word: "Commission",
    translation: "ค่าคอมมิชชนั / ค่านายหน้า",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-425",
    word: "Cost",
    translation: "ต้นทุน / ค่าใชจ่้าย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-426",
    word: "Credit",
    translation: "สนิเชอื / เครดิต (ฝั่งขวาของบัญช",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-427",
    word: "Credit note",
    translation: "ใบลดหนี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-428",
    word: "Currency",
    translation: "สกุลเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-429",
    word: "Debit",
    translation: "เดบิต (ฝังซายของบั้ญช ) ี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-430",
    word: "Debit note",
    translation: "ใบเพิมหนี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-431",
    word: "Debt",
    translation: "หนีสนิ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-432",
    word: "Deduct",
    translation: "หักออก (เชน่หักภาษี )",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-433",
    word: "Deduction",
    translation: "การหักเงิน / รายการหักภาษี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-434",
    word: "Deficit",
    translation: "การขาดดุล",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-435",
    word: "Deposit",
    translation: "เงินฝาก / เงินมัดจํา",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-436",
    word: "Depreciation",
    translation: "ค่าเสอมราคาื",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-437",
    word: "Disbursement",
    translation: "การจ่ายเงิน / การเบิกเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-438",
    word: "Discount",
    translation: "ส่วนลด",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-439",
    word: "Dividend",
    translation: "เงินปันผล",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-440",
    word: "Due date",
    translation: "วันครบกําหนดชาํระเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-441",
    word: "Earnings",
    translation: "รายได้ / ผลกําไร",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-442",
    word: "Equity",
    translation: "ส่วนของผู้ถือหุ้น",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-443",
    word: "Estimate",
    translation: "ใบประเมินราคา / ประมาณการ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-444",
    word: "Expenditure",
    translation: "รายจ่าย / การใชจ่้าย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-445",
    word: "Expense",
    translation: "ค่าใชจ่้าย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-446",
    word: "Fee",
    translation: "ค่าธรรมเนียม / ค่าบริการ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-447",
    word: "Finance",
    translation: "การเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-448",
    word: "Financial statement",
    translation: "งบการเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-449",
    word: "Fiscal year",
    translation: "ปีงบประมาณ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-450",
    word: "Fixed asset",
    translation: "สินทรัพย์ถาวร",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-451",
    word: "Forecast",
    translation: "การคาดการณ์ทางการเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-452",
    word: "Fund",
    translation: "กองทุน / เงินทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-453",
    word: "Gross profit",
    translation: "กําไรขันต้น",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-454",
    word: "Income",
    translation: "รายได้",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-455",
    word: "Income statement",
    translation: "งบกําไรขาดทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-456",
    word: "Installment",
    translation: "เงินผ่อน / การผ่อนชาํระ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-457",
    word: "Interest",
    translation: "ดอกเบีย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-458",
    word: "Inventory",
    translation: "สนิค้าคงคลัง",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-459",
    word: "Invest",
    translation: "ลงทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-460",
    word: "Investment",
    translation: "การลงทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-461",
    word: "Invoice",
    translation: "ใบแจ้งหนี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-462",
    word: "Ledger",
    translation: "สมุดบัญชแยกประเภที",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-463",
    word: "Liability",
    translation: "หนีสนิ / ความรับผิดชอบตามกฎหมาย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-464",
    word: "Loan",
    translation: "เงินกู้",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-465",
    word: "Loss",
    translation: "การขาดทุน / ความสูญเสยี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-466",
    word: "Lump sum",
    translation: "เงินก้อนใหญ่ (จ่ายทีเดียวจบ)",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-467",
    word: "Margin",
    translation: "อัตรากําไร",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-468",
    word: "Net profit",
    translation: "กําไรสุทธิ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-469",
    word: "Overdue",
    translation: "เกินกําหนดชาํระ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-470",
    word: "Overhead",
    translation: "ค่าใชจ่้ายในการดําเนินงาน (ค่านํา",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-471",
    word: "Payroll",
    translation: "ยอดเงินรวมทีต้องจ่ายค่าจ้างพนักงาน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-472",
    word: "Penalty",
    translation: "ค่าปรับ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-473",
    word: "Petty cash",
    translation: "เงินสดสอ่ย / เงินสดย่อย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-474",
    word: "Price",
    translation: "ราคา",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-475",
    word: "Profit",
    translation: "กําไร",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-476",
    word: "Purchase order (PO)",
    translation: "ใบสงซัอสืนิค้า",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-477",
    word: "Quarterly",
    translation: "รายไตรมาส (ทุก 3 เดือน)",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-478",
    word: "Quotation",
    translation: "ใบเสนอราคา",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-479",
    word: "Rate",
    translation: "อัตรา",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-480",
    word: "Rebate",
    translation: "เงินคืน / สวนลดที่คืนให้ทีหลัง",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-481",
    word: "Receipt",
    translation: "ใบเสร็จรับเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-482",
    word: "Reconciliation",
    translation: "การกระทบยอดบัญชี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-483",
    word: "Refund",
    translation: "การคืนเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-484",
    word: "Reimburse",
    translation: "เบิกเงินคืน / ชดเชยเงินทีจ่ายไป",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-485",
    word: "Remittance",
    translation: "การสง่เงิน / เงินทีโอนชาํระ",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-486",
    word: "Revenue",
    translation: "รายได้ (ของบริษัทหรือรัฐบาล)",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-487",
    word: "Salary",
    translation: "เงินเดือน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-488",
    word: "Solvency",
    translation: "ความสามารถในการชาํระหนี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-489",
    word: "Statement",
    translation: "ใบแจ้งยอดเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-490",
    word: "Surplus",
    translation: "เงินส่วนเกิน / กําไรส่วนเกิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-491",
    word: "Tax",
    translation: "ภาษี",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-492",
    word: "Transaction",
    translation: "รายการทางการเงิน / การทำธุรกรรม",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-493",
    word: "Transfer",
    translation: "โอนเงิน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-494",
    word: "Turnover",
    translation: "อัตราการหมุนเวียน (เชน่ยอดขายหรื",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-495",
    word: "Valuation",
    translation: "การประเมินมูลค่า",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-496",
    word: "Value added tax (VAT)",
    translation: "ภาษีมลูค่าเพิม",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-497",
    word: "Vendor",
    translation: "ผู้ขาย / ซพัพลายเออร์",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-498",
    word: "Voucher",
    translation: "ใบสำคัญจ่าย / บัตรกํานัล",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-499",
    word: "Withholding tax",
    translation: "ภาษีหักณทีจ่าย",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-500",
    word: "Yield",
    translation: "ผลตอบแทนจากการลงทุน",
    category: "Finance & Accounting",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-501",
    word: "Absent",
    translation: "ขาดงาน / ไม่มาทำงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-502",
    word: "Applicant",
    translation: "ผู้สมัครงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-503",
    word: "Application",
    translation: "ผู้สมัครงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-504",
    word: "Appraise",
    translation: "ประเมินค่า / ประเมินผลงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-505",
    word: "Appraisal",
    translation: "การประเมินผลการปฏิบัตงิาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-506",
    word: "Aptitude test",
    translation: "แบบทดสอบความถนัด",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-507",
    word: "Background check",
    translation: "การตรวจสอบประวัตยิ้อนหลัง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-508",
    word: "Benefit",
    translation: "สวัสดิการ / ผลประโยชน์",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-509",
    word: "Bonus",
    translation: "เงินโบนัส / เงินรางวัลพิเศษ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-510",
    word: "Candidate",
    translation: "ผู้เข้าคัดเลือก / แคนดิเดต",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-511",
    word: "Career path",
    translation: "เสนทางความก้าวหน้าในอาชพี",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-512",
    word: "Casual leave",
    translation: "วันลาปฏิบัตกิจิธุระ / ลากิจ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-513",
    word: "Compensation",
    translation: "ค่าตอบแทน (เงินเดือนบวกรวมสวัส",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-514",
    word: "Competency",
    translation: "ความรู้ความสามารถ / สมรรถนะ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-515",
    word: "Contract",
    translation: "สญัญาจ้างงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-516",
    word: "Corporate culture",
    translation: "วัฒนธรรมองค์กร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-517",
    word: "CV (Curriculum Vitae)",
    translation: "ประวัตโิดยย่อ (คล้าย Resume แต่",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-518",
    word: "Department",
    translation: "แผนก",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-519",
    word: "Dismiss",
    translation: "ไล่ออก / เลิกจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-520",
    word: "Dismissal",
    translation: "การไล่ออก / การเลิกจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-521",
    word: "Dress code",
    translation: "กฎระเบียบการแต่งกาย",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-522",
    word: "Employee",
    translation: "ลูกจ้าง / พนักงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-523",
    word: "Employer",
    translation: "นายจ้าง / บริษัท",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-524",
    word: "Employment",
    translation: "การจ้างงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-525",
    word: "Evaluation",
    translation: "การประเมินผล",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-526",
    word: "Executive",
    translation: "ผู้บริหาร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-527",
    word: "Experience",
    translation: "ประสบการณ์ทำงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-528",
    word: "Fire",
    translation: "ไล่ออก (ภาษาพูด )",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-529",
    word: "Full-time",
    translation: "งานประจํา (เต็มเวลา)",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-530",
    word: "Grievance",
    translation: "เรืองราวร้องทุกข์ของพนักงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-531",
    word: "Headhunter",
    translation: "ผู้สรรหาบุคลากรระดับบริหาร / บริษ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-532",
    word: "Health insurance",
    translation: "ประกันสุขภาพ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-533",
    word: "Hire",
    translation: "ว่าจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-534",
    word: "Holiday",
    translation: "วันหยุดเทศกาล / วันหยุดราชการ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-535",
    word: "HR (Human Resources)",
    translation: "ทรัพยากรบุคคล",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-536",
    word: "Increment",
    translation: "การปรับขึ้น (เชน่ปรับขึนเงินเดือน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-537",
    word: "Induction",
    translation: "การปฐมนิเทศพนักงานใหม่",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-538",
    word: "In-house training",
    translation: "การฝึกอบรมภายในองค์กร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-539",
    word: "Intern",
    translation: "นักศกึษาฝึกงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-540",
    word: "Internship",
    translation: "การฝึกงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-541",
    word: "Interview",
    translation: "สมัภาษณ์ / การสมัภาษณ์",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-542",
    word: "Interviewer",
    translation: "ผู้สมภาษณ์ั",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-543",
    word: "Job description",
    translation: "คําอธิบายลักษณะงาน (JD)",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-544",
    word: "Job offer",
    translation: "ข้อเสนอการเข้าทำงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-545",
    word: "Job satisfaction",
    translation: "ความพึงพอใจในงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-546",
    word: "Job security",
    translation: "ความมันคงในหน้าทีการงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-547",
    word: "KPI",
    translation: "ดัชนีชวัีดความสำเร็จของงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-548",
    word: "Labor law",
    translation: "กฎหมายแรงงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-549",
    word: "Lay off",
    translation: "เลิกจ้าง (เนืองจากเหตุผลทางเศรษฐกิ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-550",
    word: "Leave",
    translation: "การลาหยุด",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-551",
    word: "Maternity leave",
    translation: "วันลาคลอดบุตร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-552",
    word: "Medical leave / Sick leave",
    translation: "วันลาป่วย",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-553",
    word: "Mentor",
    translation: "พีเลียง / ทีปรึกษาให้คําแนะนำ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-554",
    word: "Minimum wage",
    translation: "ค่าแรงขันตํา",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-555",
    word: "Notice period",
    translation: "ระยะเวลาแจ้งล่วงหน้า (ก่อนลาออก",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-556",
    word: "Occupation",
    translation: "อาชพี",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-557",
    word: "Offboarding",
    translation: "กระบวนการลาออกจากงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-558",
    word: "Onboarding",
    translation: "กระบวนการรับพนักงานใหม่เข้าทำงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-559",
    word: "Org chart",
    translation: "แผนผังโครงสร้างองค์กร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-560",
    word: "Overtime (OT)",
    translation: "การทำงานล่วงเวลา / ค่าล่วงเวลา",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-561",
    word: "Part-time",
    translation: "งานนอกเวลา / พาร์ทไทม์",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-562",
    word: "Paternity leave",
    translation: "วันลาเพือไปดูแลบุตรทีเพิงคลอด",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-563",
    word: "Pay slip",
    translation: "สลิปเงินเดือน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-564",
    word: "Payroll",
    translation: "งานคํานวณและจ่ายเงินเดือน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-565",
    word: "Performance",
    translation: "ผลการปฏิบัตงิาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-566",
    word: "Performance review",
    translation: "การทบทวนและประเมินผลงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-567",
    word: "Position",
    translation: "ตําแหน่งงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-568",
    word: "Probation",
    translation: "การทดลองงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-569",
    word: "Promotion",
    translation: "การเลือนตําแหน่ง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-570",
    word: "Qualification",
    translation: "คุณสมบัตทิเหมาะสมกัีบงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-571",
    word: "Quit",
    translation: "ลาออก (ภาษาพูด )",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-572",
    word: "Recruit",
    translation: "สรรหาคนเข้าทำงาน / รับสมัครพนัก",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-573",
    word: "Recruiter",
    translation: "เจ้าหน้าที่สรรหาบุคลากร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-574",
    word: "Recruitment",
    translation: "การสรรหาบุคลากร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-575",
    word: "Redundancy",
    translation: "การล้นงาน / การเลิกจ้างเพราะตําแหน่",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-576",
    word: "Reference",
    translation: "บุคคลอ้างอิงในการสมัครงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-577",
    word: "Relocate",
    translation: "ย้ายสถานทีทำงาน / ย้ายสาขา",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-578",
    word: "Remuneration",
    translation: "ค่าตอบแทน / เงินค่าจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-579",
    word: "Resign",
    translation: "ลาออกจากตําแหน่ง (เป็นทางการ)Verb",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-580",
    word: "Resignation",
    translation: "การลาออก",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-581",
    word: "Resume",
    translation: "ประวัตสิวนตัวโดยย่อเพื่อสมัครงานNoun",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-582",
    word: "Retire",
    translation: "เกษียณอายุ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-583",
    word: "Retirement",
    translation: "การเกษียณอายุ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-584",
    word: "Salary",
    translation: "เงินเดือน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-585",
    word: "Salary range",
    translation: "ชว่งอัตราเงินเดือน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-586",
    word: "Screening",
    translation: "การคัดกรอง (เชน่คัดกรองใบสมัคร",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-587",
    word: "Seniority",
    translation: "ความอาวุโส / อายุงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-588",
    word: "Severance pay",
    translation: "ค่าชดเชยการเลิกจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-589",
    word: "Shortlist",
    translation: "รายชอผูื้ผ่านเข้ารอบสุดท้าย",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-590",
    word: "Skill",
    translation: "ทักษะ / ความชาํนาญ",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-591",
    word: "Staff",
    translation: "คณะผู้ทำงาน / พนักงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-592",
    word: "Subordinate",
    translation: "ผู้ใต้บังคับบัญชา / ลูกน้อง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-593",
    word: "Successor",
    translation: "ผู้สบืทอดตําแหน่ง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-594",
    word: "Superior",
    translation: "ผู้บังคับบัญชา / หัวหน้า",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-595",
    word: "Talent",
    translation: "ผู้มีความสามารถโดดเด่น / พนักงานดาวเด่",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-596",
    word: "Teamwork",
    translation: "การทำงานเป็นทีม",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-597",
    word: "Terminate",
    translation: "สนสุิด / ยกเลิกสญัญาจ้าง",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-598",
    word: "Termination",
    translation: "การเลิกจ้าง / การสนสุิดสญัญา",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-599",
    word: "Training",
    translation: "การฝึกอบรม",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-600",
    word: "Turnover rate",
    translation: "อัตราการเข้า-ออกของพนักงาน",
    category: "Human Resources",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-601",
    word: "Acquire",
    translation: "จัดหามา / ได้มา",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-602",
    word: "Actual weight",
    translation: "นําหนักจริง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-603",
    word: "Air freight",
    translation: "การขนสง่สนิค้าทางอากาศ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-604",
    word: "Allocate",
    translation: "จัดสรร (สนิค้า / พืนทีสต็อก)",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-605",
    word: "Arrival",
    translation: "การมาถึง (ของสนิค้า)",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-606",
    word: "Backorder",
    translation: "การสงซัอสืนิค้าทียังไม่มใีนสต็อก",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-607",
    word: "Barcode",
    translation: "บาร์โค้ด / รหัสแท่ง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-608",
    word: "Bill of lading (B/L)",
    translation: "ใบตราสง่สนิค้าทางเรือ / เอกสารรับ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-609",
    word: "Bulk",
    translation: "ปริมาณมาก / สนิค้าจํานวนมาก",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-610",
    word: "Buyer",
    translation: "เจ้าหน้าที่จัดซอื / ผู้ซอื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-611",
    word: "Cargo",
    translation: "สนิค้าทีบรรทุกโดยเครืองบินเรือ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-612",
    word: "Carrier",
    translation: "บริษัทผู้รับขนส่งสินค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-613",
    word: "Certificate of origin",
    translation: "หนังสอืรับรองถินกําเนิดสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-614",
    word: "Consignee",
    translation: "ผู้รับปลายทาง / ผู้รับสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-615",
    word: "Consignment",
    translation: "การฝากขาย / สนิค้าฝากขาย",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-616",
    word: "Consignor",
    translation: "ผู้สง่สนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-617",
    word: "Container",
    translation: "ตู้คอนเทนเนอร์",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-618",
    word: "Contract",
    translation: "สญัญาซอขายื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-619",
    word: "Cost of goods sold",
    translation: "ต้นทุนขาย (COGS)",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-620",
    word: "Courier",
    translation: "บริการสง่พัสดุดว่น",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-621",
    word: "Customs",
    translation: "ศุลกากร",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-622",
    word: "Customs clearance",
    translation: "การผ่านพิธกีารศุลกากร",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-623",
    word: "Damage",
    translation: "ความเสยีหาย",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-624",
    word: "Defect",
    translation: "ตําหนิ / ข้อบกพร่องของสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-625",
    word: "Defective",
    translation: "ซงมีึตําหนิ / เสยีหาย / ชาํรุด",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-626",
    word: "Delay",
    translation: "การล่าชาในการจั้ดสง่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-627",
    word: "Deliver",
    translation: "สง่มอบสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-628",
    word: "Delivery note",
    translation: "ใบสงของ่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-629",
    word: "Demand",
    translation: "ความต้องการซอสืนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-630",
    word: "Departure",
    translation: "การออกเดินทาง (ของรถ/เรือ /เครื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-631",
    word: "Destination",
    translation: "ปลายทาง / จุดหมายปลายทาง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-632",
    word: "Distribution",
    translation: "การกระจายสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-633",
    word: "Distribution center",
    translation: "ศูนย์กระจายสินค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-634",
    word: "Domestic",
    translation: "ภายในประเทศ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-635",
    word: "Duty",
    translation: "ภาษีนําเข้า / ภาษีศลุกากร",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-636",
    word: "Equipment",
    translation: "อุปกรณ์ / เครืองมือ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-637",
    word: "Estimate",
    translation: "การประมาณราคา / ใบประเมินราคา",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-638",
    word: "ETA (Estimated time of",
    translation: "arrival) เวลาทีคาดว่าจะมาถึง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-639",
    word: "ETD (Estimated time of",
    translation: "departure) เวลาทีคาดว่าจะออกจากต้นทาง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-640",
    word: "Excess stock",
    translation: "สนิค้าล้นสต็อก",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-641",
    word: "Expiry date",
    translation: "วันหมดอายุ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-642",
    word: "Export",
    translation: "สง่ออก",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-643",
    word: "Flammable",
    translation: "ไวไฟ / วัตถุไวไฟ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-644",
    word: "Fragile",
    translation: "เปราะบาง / แตกหักง่าย",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-645",
    word: "Freight",
    translation: "ค่าระวาง / สนิค้าทีขนสง่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-646",
    word: "Freight forwarder",
    translation: "ตัวแทนผู้รับจัดการขนสง่สนิค้าระหว่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-647",
    word: "Fulfillment",
    translation: "กระบวนการจัดการตามคําสงซัอของลูื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-648",
    word: "Gross weight",
    translation: "นําหนักรวม (นําหนักสนิค้า + กล่อง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-649",
    word: "Handling charge",
    translation: "ค่าธรรมเนียมการจัดการสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-650",
    word: "Import",
    translation: "นําเข้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-651",
    word: "Inbound logistics",
    translation: "โลจิสติกสขาเข์้า (การนําวัตถุดบิเข",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-652",
    word: "Incoterms",
    translation: "ข้อตกลงในการสง่มอบสนิค้าระหว่า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-653",
    word: "Inspection",
    translation: "การตรวจสอบคุณภาพสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-654",
    word: "Insurance",
    translation: "การประกันภัยสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-655",
    word: "Inventory",
    translation: "สนิค้าคงคลัง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-656",
    word: "Invoice",
    translation: "ใบแจ้งหนี",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-657",
    word: "Lead time",
    translation: "ระยะเวลาทีใชในการรอคอยส้นิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-658",
    word: "Loading",
    translation: "การขนสนิค้าขึนรถ/เรือ /เครืองบิน",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-659",
    word: "Logistics",
    translation: "ระบบโลจิสติกส์ / การบริหารการขนส",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-660",
    word: "Manufacturer",
    translation: "ผู้ผลิต",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-661",
    word: "Materials",
    translation: "วัตถุดบิ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-662",
    word: "Net weight",
    translation: "นําหนักสุทธิ (เฉพาะนําหนักสนิค",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-663",
    word: "Order",
    translation: "คําสงซัอื / สงซัอื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-664",
    word: "Outbound logistics",
    translation: "โลจิสติกสข์าออก (การสง่สนิค้าจากคลั",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-665",
    word: "Overstock",
    translation: "การมีสนิค้าในสต็อกมากเกินไป",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-666",
    word: "Package",
    translation: "พัสดุ / หีบห่อ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-667",
    word: "Packaging",
    translation: "บรรจุภณัฑ์",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-668",
    word: "Packing list",
    translation: "ใบรายการบรรจุสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-669",
    word: "Pallet",
    translation: "พาเลท / แท่นวางสินค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-670",
    word: "Parcel",
    translation: "พัสดุชนเล็ิกหรือกลาง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-671",
    word: "Pickup",
    translation: "การไปรับของ / รับสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-672",
    word: "Procurement",
    translation: "การจัดซอจัืดจ้าง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-673",
    word: "Purchasing",
    translation: "การจัดซอื",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-674",
    word: "Quality control (QC)",
    translation: "การควบคุมคุณภาพ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-675",
    word: "Quantity",
    translation: "ปริมาณ / จํานวน",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-676",
    word: "Quotation",
    translation: "ใบเสนอราคา",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-677",
    word: "Raw material",
    translation: "วัตถุดบิ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-678",
    word: "Receipt",
    translation: "ใบเสร็จรับเงิน / การได้รับของ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-679",
    word: "Receiving",
    translation: "การรับสินค้าเข้าคลัง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-680",
    word: "Refund",
    translation: "การคืนเงิน",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-681",
    word: "Reject",
    translation: "ปฏิเสธ (ไม่รับของเนืองจากไม่ได",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-682",
    word: "Replenish",
    translation: "เติมสนิค้าในสต็อก",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-683",
    word: "Request for proposal (RFP)",
    translation: "เอกสารคําขอให้ยืนข้อเสนอ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-684",
    word: "Request for quotation (RFQ)",
    translation: "เอกสารคําขอใบเสนอราคา",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-685",
    word: "Return",
    translation: "การคืนสินค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-686",
    word: "Route",
    translation: "เสนทางการขนส้ง่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-687",
    word: "Sea freight",
    translation: "การขนสง่สนิค้าทางเรือ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-688",
    word: "Shelf life",
    translation: "อายุการจัดเก็บสนิค้าบนชนวางั",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-689",
    word: "Shipment",
    translation: "การจัดสง่สนิค้า / สนิค้าทีจัดสง่ในแต่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-690",
    word: "Shipping",
    translation: "การขนส่งสินค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-691",
    word: "Shortage",
    translation: "การขาดแคลนสนิค้า / ของไม่พอ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-692",
    word: "Stock",
    translation: "สนิค้าคงคลัง / สต็อกสนิค้า",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-693",
    word: "Storage",
    translation: "การจัดเก็บสนิค้า / คลังจัดเก็บ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-694",
    word: "Supplier",
    translation: "ผู้จัดจําหน่ายวัตถุดบิ / ซพัพลายเออร์",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-695",
    word: "Supply chain",
    translation: "ห่วงโซอ่ปุทาน",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-696",
    word: "Tracking number",
    translation: "หมายเลขติดตามพัสดุ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-697",
    word: "Transit",
    translation: "การสง่ผ่าน / อยูร่ะหว่างการเดินทางขนส",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-698",
    word: "Unloading",
    translation: "การขนสนิค้าลงจากพาหนะ",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-699",
    word: "Warehouse",
    translation: "คลังสนิค้า / โกดัง",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-700",
    word: "Wholesale",
    translation: "การขายสง่",
    category: "Procurement & Logistics",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-701",
    word: "Access",
    translation: "เข้าถึง / สทิธิการเข้าใชงาน้",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-702",
    word: "Account",
    translation: "บัญชผีู้ใชงาน้",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-703",
    word: "Antivirus",
    translation: "โปรแกรมสแกนและป้องกันไวรัส",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-704",
    word: "Application",
    translation: "แอปพลิเคชนั / โปรแกรมประยุกต์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-705",
    word: "Attachment",
    translation: "ไฟล์แนบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-706",
    word: "Authentication",
    translation: "การยืนยันตัวตน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-707",
    word: "Backup",
    translation: "สำรองข้อมูล / ข้อมูลสำรอง",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-708",
    word: "Bandwidth",
    translation: "ปริมาณการรับสงข่้อมูลของอินเทอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-709",
    word: "Battery",
    translation: "แบตเตอรี",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-710",
    word: "Binder",
    translation: "แฟ้มตราชาง้ / แฟ้มห่วงใสเ่อกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-711",
    word: "Browser",
    translation: "โปรแกรมท่องเว็บ (เชน่ Chrome,",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-712",
    word: "Bug",
    translation: "ข้อผิดพลาดในระบบหรือโปรแกรม",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-713",
    word: "Cable",
    translation: "สายเคเบิล / สายไฟ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-714",
    word: "Calculator",
    translation: "เครืองคิดเลข",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-715",
    word: "Cartridge",
    translation: "ตลับหมึกเครืองพิมพ์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-716",
    word: "Cloud storage",
    translation: "พืนที่จัดเก็บข้อมูลออนไลน์บนคลาวด์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-717",
    word: "Computer",
    translation: "คอมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-718",
    word: "Connection",
    translation: "การเชอมต่ืออินเทอร์เน็ตหรือเครือข่",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-719",
    word: "Copier",
    translation: "เครืองถ่ายเอกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-720",
    word: "Crash",
    translation: "ระบบค้าง / โปรแกรมปิดตัวกะทันหั",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-721",
    word: "Cyber security",
    translation: "ความปลอดภัยทางไซเบอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-722",
    word: "Dashboard",
    translation: "หน้าต่างแสดงผลข้อมูลสรุป",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-723",
    word: "Data",
    translation: "ข้อมูล",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-724",
    word: "Database",
    translation: "ฐานข้อมูล",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-725",
    word: "Desktop",
    translation: "หน้าจอหลักคอมพิวเตอร์ / คอมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-726",
    word: "Device",
    translation: "อุปกรณ์ / เครืองมืออิเล็กทรอนิกส",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-727",
    word: "Digital",
    translation: "ดิจทิัล",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-728",
    word: "Directory",
    translation: "โฟลเดอร์เก็บเอกสาร / สมุดรายนาม",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-729",
    word: "Disconnect",
    translation: "ตัดการเชอมต่ือ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-730",
    word: "Document",
    translation: "เอกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-731",
    word: "Domain",
    translation: "ชอเว็บไซต์ื (โดเมนเนม)",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-732",
    word: "Download",
    translation: "ดาวน์โหลดข้อมูล",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-733",
    word: "Envelope",
    translation: "ซองจดหมาย",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-734",
    word: "Equipment",
    translation: "อุปกรณ์ / เครืองมือเครืองใช้",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-735",
    word: "File",
    translation: "ไฟล์ข้อมูล / แฟ้มเอกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-736",
    word: "Firewall",
    translation: "ระบบกําแพงไฟป้องกันการแฮกข",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-737",
    word: "Folder",
    translation: "โฟลเดอร์ใสไ่ฟล์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-738",
    word: "Font",
    translation: "รูปแบบตัวอักษร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-739",
    word: "Furniture",
    translation: "เฟอร์นเิจอร์สำนักงาน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-740",
    word: "Gadget",
    translation: "อุปกรณ์ไอทีขนาดเล็ก",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-741",
    word: "Glitch",
    translation: "ระบบรวนชวคราวั / ปัญหาทางเทคนิ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-742",
    word: "Hardware",
    translation: "ตัวเครืองหรืออุปกรณ์คอมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-743",
    word: "Headset",
    translation: "หูฟังพร้อมไมโครโฟน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-744",
    word: "Icon",
    translation: "สญัลักษณ์หรือรูปภาพแทนโปรแกรม",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-745",
    word: "Ink",
    translation: "นําหมึก",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-746",
    word: "Installation",
    translation: "การติดตังโปรแกรม",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-747",
    word: "Interface",
    translation: "หน้าประสานงานผู้ใช้ / หน้าตาโปรแกรม",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-748",
    word: "Internet",
    translation: "อินเทอร์เน็ต",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-749",
    word: "IT (Information Technology)",
    translation: "เทคโนโลยีสารสนเทศ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-750",
    word: "Keyboard",
    translation: "แป้นพิมพ์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-751",
    word: "Laptop",
    translation: "คอมพิวเตอร์พกพา / โน้ตบุ๊ก",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-752",
    word: "Link",
    translation: "ลิงก์เชอมโยงเว็บไซต์ื",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-753",
    word: "Log in / Sign in",
    translation: "เข้าสูร่ะบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-754",
    word: "Log out / Sign out",
    translation: "ออกจากระบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-755",
    word: "Maintenance",
    translation: "การบำรุงรักษาอุปกรณ์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-756",
    word: "Monitor",
    translation: "หน้าจอคอมพิวเตอร์ / ตรวจตราดู",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-757",
    word: "Mouse",
    translation: "เมาสค์อมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-758",
    word: "Network",
    translation: "เครือข่ายคอมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-759",
    word: "Notification",
    translation: "การแจ้งเตือน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-760",
    word: "Offline",
    translation: "ออฟไลน์ / ไม่ได้เชอมต่ืออินเทอร์เ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-761",
    word: "Online",
    translation: "ออนไลน์ / เชอมต่ืออินเทอร์เน็ตอยู",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-762",
    word: "Operating system (OS)",
    translation: "ระบบปฏิบัตกิาร (เชน่ Windows,",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-763",
    word: "Paper",
    translation: "กระดาษ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-764",
    word: "Paper shredder",
    translation: "เครืองทำลายเอกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-765",
    word: "Password",
    translation: "รหัสผ่าน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-766",
    word: "PDF",
    translation: "ไฟล์เอกสารประเภท PDF",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-767",
    word: "Platform",
    translation: "แพลตฟอร์ม / ระบบซอฟต์แวร์หลัก",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-768",
    word: "Plug",
    translation: "ปลักไฟ / เสยีบปลัก",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-769",
    word: "Printer",
    translation: "เครืองพิมพ์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-770",
    word: "Privacy",
    translation: "ความเป็นสวนตัว่",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-771",
    word: "Projector",
    translation: "เครืองฉายภาพ / โปรเจกเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-772",
    word: "Reboot / Restart",
    translation: "เริมต้นระบบใหม่ / รีสตาร์ต",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-773",
    word: "Remote access",
    translation: "การรีโมทเข้าใชงานจากระยะไกล้",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-774",
    word: "Router",
    translation: "อุปกรณ์กระจายสญัญาณอินเทอร์เน็",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-775",
    word: "Scanner",
    translation: "เครืองสแกนเอกสาร",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-776",
    word: "Screen",
    translation: "หน้าจอ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-777",
    word: "Server",
    translation: "เครืองแม่ขา่ย / เซริฟ์เวอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-778",
    word: "Setting",
    translation: "การตังค่าระบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-779",
    word: "Software",
    translation: "โปรแกรมคอมพิวเตอร์ / ซอฟต์แวร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-780",
    word: "Spam",
    translation: "อีเมลขยะ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-781",
    word: "Speaker",
    translation: "ลําโพง",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-782",
    word: "Spreadsheet",
    translation: "แผ่นตารางทำการ (เชน่ Excel, Sheets",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-783",
    word: "Stapler",
    translation: "แม็กซเย็บกระดาษ์ / เครืองเย็บกระดาษ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-784",
    word: "Stationery",
    translation: "เครืองเขียน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-785",
    word: "Storage",
    translation: "หน่วยความจํา / ที่จัดเก็บข้อมูล",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-786",
    word: "Subscription",
    translation: "การสมัครสมาชกิรายเดือน/รายปี",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-787",
    word: "Support",
    translation: "ฝ่ายสนับสนุนชว่ยเหลือลูกค้าหรือผู",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-788",
    word: "System",
    translation: "ระบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-789",
    word: "Tablet",
    translation: "แท็บเล็ต",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-790",
    word: "Technical",
    translation: "ทางเทคนิค",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-791",
    word: "Technician",
    translation: "ชา่งเทคนิค",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-792",
    word: "Template",
    translation: "รูปแบบสำเร็จรูป / แม่แบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-793",
    word: "Unsubscribe",
    translation: "ยกเลิกการรับข่าวสารหรือสมาชกิ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-794",
    word: "Update",
    translation: "อัปเดต / ปรับปรุงเวอร์ชนัใหม่",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-795",
    word: "Upgrade",
    translation: "อัปเกรดให้ดีขนหรืึอแรงขึน",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-796",
    word: "Upload",
    translation: "อัปโหลดข้อมูลขึนระบบ",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-797",
    word: "Username",
    translation: "ชอผูื้ใชงาน้",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-798",
    word: "Virus",
    translation: "ไวรัสคอมพิวเตอร์",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-799",
    word: "Wi-Fi",
    translation: "สญญาณอินเทอร์เน็ัตไร้สาย",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-800",
    word: "Workstation",
    translation: "โต๊ะทำงานประจํา / คอมพิวเตอร์ประส",
    category: "IT & Office Equipment",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-801",
    word: "Abide by",
    translation: "ปฏิบัตติาม (กฎหมาย/ข้อตกลง)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-802",
    word: "Abolish",
    translation: "ยกเลิก / ล้มเลิก (กฎหมาย/ระบบ)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-803",
    word: "Accordance",
    translation: "ความสอดคล้อง / การทำตามข้อบัง",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-804",
    word: "Accuse",
    translation: "กล่าวหา / ฟ้องร้อง",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-805",
    word: "Acquire",
    translation: "เข้าซอกิืจการ / ได้มาซงสึทิธิ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-806",
    word: "Act",
    translation: "พระราชบัญญัติ / กฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-807",
    word: "Actionable",
    translation: "ทีสามารถฟ้องร้องดําเนินคดีได้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-808",
    word: "Adhere to",
    translation: "ปฏิบัตติามเคร่งครัด (นโยบาย/กฎ)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-809",
    word: "Advocate",
    translation: "ทนายความ / ผู้แก้ต่าง",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-810",
    word: "Affidavit",
    translation: "หนังสอืให้การภายใต้คําสาบาน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-811",
    word: "Agreement",
    translation: "ข้อตกลง / หนังสอืสญัญา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-812",
    word: "Allegation",
    translation: "ข้อกล่าวหา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-813",
    word: "Alliance",
    translation: "พันธมิตรทางธุรกิจ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-814",
    word: "Amend",
    translation: "แก้ไขเพิมเติม (กฎหมาย/เอกสาร)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-815",
    word: "Amendment",
    translation: "การแก้ไขสญัญาหรือข้อกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-816",
    word: "Antitrust",
    translation: "การต่อต้านการผูกขาดทางการค้า",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-817",
    word: "Appeal",
    translation: "การอุทธรณ์ / ยืนอุทธรณ์",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-818",
    word: "Arbitration",
    translation: "การอนุญาโตตุลาการ (ประนีประนอมนอกศาล",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-819",
    word: "Article",
    translation: "มาตรา / ข้อบังคับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-820",
    word: "Audit",
    translation: "การตรวจสอบการปฏิบัติตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-821",
    word: "Authority",
    translation: "เจ้าหน้าที่ผู้มีอํานาจตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-822",
    word: "Bankruptcy",
    translation: "การล้มละลาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-823",
    word: "Binding",
    translation: "มีผลผูกพันทางกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-824",
    word: "Breach",
    translation: "การละเมิด (สัญญา/กฎหมาย)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-825",
    word: "Bribe",
    translation: "สนิบน / ให้สนิบน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-826",
    word: "Bribery",
    translation: "การติดสนิบน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-827",
    word: "Bylaw",
    translation: "ข้อบังคับภายในองค์กร",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-828",
    word: "Case",
    translation: "คดีความ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-829",
    word: "Certificate",
    translation: "หนังสอืรับรอง / ใบประกาศ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-830",
    word: "Claim",
    translation: "เรียกร้องสทิธิ / ข้อเรียกร้อง",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-831",
    word: "Clause",
    translation: "ข้อกําหนดในสญัญา / อนุประโยค",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-832",
    word: "Client",
    translation: "ลูกความ / ผู้ว่าจ้างทนาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-833",
    word: "Code of conduct",
    translation: "ประมวลจริยธรรม / ข้อพึงปฏิบัตใินการทํ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-834",
    word: "Compensate",
    translation: "ชดเชยค่าเสยีหาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-835",
    word: "Compensation",
    translation: "ค่าสนิไหมทดแทน / ค่าชดเชย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-836",
    word: "Competent",
    translation: "มีอํานาจหน้าทีตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-837",
    word: "Comply",
    translation: "ปฏิบัตติามข้อบังคับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-838",
    word: "Compliance",
    translation: "การปฏิบัตติามกฎระเบียบและข้อบัง",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-839",
    word: "Confidentiality",
    translation: "การรักษาความลับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-840",
    word: "Conflict of interest",
    translation: "ผลประโยชน์ทับซอน้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-841",
    word: "Consent",
    translation: "การยินยอม / ให้ความยินยอม",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-842",
    word: "Constitution",
    translation: "รัฐธรรมนูญ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-843",
    word: "Contract",
    translation: "สญัญา / ข้อตกลงผูกพัน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-844",
    word: "Contractor",
    translation: "ผู้รับเหมา / คูส่ญัญา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-845",
    word: "Copyright",
    translation: "ลิขสทธิ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-846",
    word: "Counsel",
    translation: "ทีปรึกษากฎหมาย / ทนายความ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-847",
    word: "Counterfeit",
    translation: "ปลอมแปลง / ของปลอม",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-848",
    word: "Court",
    translation: "ศาล",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-849",
    word: "Covenant",
    translation: "ข้อตกลงร่วมกัน / พันธสญัญา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-850",
    word: "Creditor",
    translation: "เจ้าหนีตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-851",
    word: "Damage",
    translation: "ค่าเสยีหาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-852",
    word: "Debtor",
    translation: "ลูกหนีตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-853",
    word: "Decree",
    translation: "คําสงศาลั / พระราชกฤษฎีกา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-854",
    word: "Deed",
    translation: "โฉนด / เอกสารสทิธิ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-855",
    word: "Defend",
    translation: "แก้ต่าง / ต่อสูคดี้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-856",
    word: "Defendant",
    translation: "จําเลย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-857",
    word: "Dispute",
    translation: "ข้อพิพาท / ข้อขัดแย้งทางกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-858",
    word: "Dissolution",
    translation: "การยุบ (บริษัท ) / การสนสุิดสญัญาNoun",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-859",
    word: "Due diligence",
    translation: "การตรวจสอบสถานะธุรกิจอย่างละเอี",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-860",
    word: "Effective date",
    translation: "วันทีมีผลบังคับใช้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-861",
    word: "Enforce",
    translation: "บังคับใช้ (กฎหมาย/ข้อตกลง)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-862",
    word: "Enforcement",
    translation: "การบังคับใชกฎหมาย้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-863",
    word: "Expiration",
    translation: "การหมดอายุ (สญัญา)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-864",
    word: "Fine",
    translation: "ค่าปรับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-865",
    word: "Fraud",
    translation: "การฉ้อโกง / ทุจริต",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-866",
    word: "Governing law",
    translation: "กฎหมายทีใชบังคับควบคุมส้ญญาั",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-867",
    word: "Grace period",
    translation: "ระยะเวลาผ่อนผัน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-868",
    word: "Guarantee",
    translation: "การคําประกัน",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-869",
    word: "Illegal",
    translation: "ผิดกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-870",
    word: "Indemnity",
    translation: "การชดเชยความเสยีหาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-871",
    word: "Infringement",
    translation: "การละเมิดสทิธิ (เชน่ละเมิดลิขสทิ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-872",
    word: "Injunction",
    translation: "คําสงหั้ามของศาล",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-873",
    word: "Insolvency",
    translation: "ภาวะมีหนีสนิล้นพ้นตัว",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-874",
    word: "Inspection",
    translation: "การตรวจสอบโดยเจ้าหน้าที่",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-875",
    word: "Intellectual property",
    translation: "ทรัพย์สนิทางปัญญา (IP)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-876",
    word: "Invalid",
    translation: "โมฆะ / ไม่มผีลบังคับใช้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-877",
    word: "Lawsuit",
    translation: "คดีความ / การฟ้องร้องดําเนินคดี",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-878",
    word: "Legal",
    translation: "ถูกกฎหมาย / เกียวกับกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-879",
    word: "Legislation",
    translation: "การออกกฎหมาย / ตัวบทกฎหมายNoun",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-880",
    word: "Liability",
    translation: "ความรับผิดชอบตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-881",
    word: "License",
    translation: "ใบอนุญาต",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-882",
    word: "Litigation",
    translation: "การฟ้องร้องคดีในศาล",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-883",
    word: "Monopoly",
    translation: "การผูกขาดทางการค้า",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-884",
    word: "NDA",
    translation: "สญญาไม่เปิัดเผยความลับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-885",
    word: "Negligence",
    translation: "ความประมาทเลินเล่อ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-886",
    word: "Obligation",
    translation: "ข้อผูกมัด / พันธะหน้าที",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-887",
    word: "Offense",
    translation: "การกระทำความผิดทางกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-888",
    word: "Partner",
    translation: "หุ้นส่วนธุรกิจ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-889",
    word: "Patent",
    translation: "สทิธิบัตร",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-890",
    word: "Penalty",
    translation: "บทลงโทษ / ค่าปรับตามสญัญา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-891",
    word: "Plaintiff",
    translation: "โจทก์ (ผู้ฟ้องร้อง)",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-892",
    word: "Policy",
    translation: "นโยบาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-893",
    word: "Protocol",
    translation: "ข้อตกลงร่วมกัน / ระเบียบการปฏิบัต",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-894",
    word: "Provision",
    translation: "ข้อกําหนดในกฎหมายหรือสญัญา",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-895",
    word: "Regulation",
    translation: "กฎข้อบังคับ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-896",
    word: "Settle",
    translation: "ตกลงยอมความกันได้",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-897",
    word: "Settlement",
    translation: "การประนีประนอมยอมความ",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-898",
    word: "Term",
    translation: "ระยะเวลาของสญัญา / เงือนไข",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-899",
    word: "Terminate",
    translation: "ยกเลิกสญัญา / บอกเลิก",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-900",
    word: "Valid",
    translation: "มีผลสมบูรณ์ตามกฎหมาย",
    category: "Law & Compliance",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-901",
    word: "Action item",
    translation: "งานหรือกิจกรรมทีต้องนําไปลงมือทํ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-902",
    word: "ASAP (As soon as possible)",
    translation: "เร็วทีสุดเท่าทีจะทำได้",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-903",
    word: "AS per our discussion",
    translation: "ตามทีพวกเราได้คุยกันไว้",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-904",
    word: "At the end of the day",
    translation: "ท้ายทีสุดแล้ว / เมือพิจารณาจากทุ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-905",
    word: "Back to the drawing board",
    translation: "เริมต้นนับหนึงใหม่ (เนืองจากแผนเดิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-906",
    word: "Ballpark figure",
    translation: "ตัวเลขประมาณการคร่าวๆ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-907",
    word: "Bandwidth",
    translation: "เวลาหรือพลังงานทีว่างพอจะรับงานเพิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-908",
    word: "Behind schedule",
    translation: "ทำงานล่าชากว่้าแผนทีกําหนดไว",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-909",
    word: "Behind the scenes",
    translation: "เบืองหลังการทำงาน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-910",
    word: "Big picture",
    translation: "ภาพรวม / มองภาพใหญ่",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-911",
    word: "Bite the bullet",
    translation: "กัดฟันสู้ / จําใจยอมรับสถานการณ์ท",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-912",
    word: "Bottom line",
    translation: "ผลลัพธ์สดุท้าย / สงสิําคัญทีสุด /",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-913",
    word: "Brain drain",
    translation: "ภาวะสมองไหล (คนเก่งๆลาออกจากองค์",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-914",
    word: "Bring to the table",
    translation: "นําสงทีิมีประโยชน์หรือความสามารถมาเสนอที",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-915",
    word: "Burnout",
    translation: "ภาวะหมดไฟในการทำงาน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-916",
    word: "Business as usual (BAU)",
    translation: "การทำงานตามปกติในแต่ละวัน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-917",
    word: "Buy-in",
    translation: "การยอมรับและสนับสนุนแผนงานจากผู",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-918",
    word: "By the book",
    translation: "ทำตามกฎระเบียบอย่างเคร่งครัดทุก",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-919",
    word: "Call it a day",
    translation: "เลิกงานได้ / วันนี้พอแค่นก่อน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-920",
    word: "Catch up",
    translation: "คุยอัปเดตชวีติหรือเรืองราวทีไม่ได",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-921",
    word: "Circle back",
    translation: "เดียวค่อยวนกลับมาคุยเรืองนีกันใหม่",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-922",
    word: "COB (Close of business)",
    translation: "เวลาเลิกงาน (มักหมายถึง 17.00",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-923",
    word: "Core competency",
    translation: "ความสามารถหลักทีเป็นจุดแข็งขององค์",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-924",
    word: "Crunch numbers",
    translation: "คํานวณตัวเลขปริมาณมากอย่างเคร่",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-925",
    word: "Cut corners",
    translation: "ทำงานแบบลัดขันตอนเพือให้เสร็จเร็",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-926",
    word: "Deep dive",
    translation: "การศกึษาหรือวิเคราะห์ข้อมูลอย่างละเอี",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-927",
    word: "Deliver the goods",
    translation: "ทำงานได้สำเร็จตามความคาดหวัง",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-928",
    word: "Drop the ball",
    translation: "ทำงานพลาด / ทำงานหลุดมือ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-929",
    word: "EOD (End of day)",
    translation: "ภายในสนวัินนี (ก่อนเทียงคืน )",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-930",
    word: "ETA (Estimated time of",
    translation: "arrival) เวลาทีคาดว่าจะเสร็จหรือสง่มอบงาน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-931",
    word: "Fast track",
    translation: "ทางลัด / การเร่งรัดกระบวนการให",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-932",
    word: "FYI (For your information)",
    translation: "แจ้งเพือทราบ (ไม่ต้องตอบกลับก็ไ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-933",
    word: "Game changer",
    translation: "สงทีิเข้ามาเปลียนเกมหรือสร้างจุดเปลี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-934",
    word: "Get the ball rolling",
    translation: "เริมต้นลงมือทำงานหรือเริมกิจกรรม",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-935",
    word: "Get to the point",
    translation: "เข้าประเด็นเลย / พูดตรงประเด็น",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-936",
    word: "Give the green light",
    translation: "ไฟเขียว / อนุมัตใิห้เริมงานได้",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-937",
    word: "Go above and beyond",
    translation: "ทุม่เททำงานเกินกว่าหน้าทีทีได้รับมอบหมาย",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-938",
    word: "Go the extra mile",
    translation: "ยอมเหนือยเพิมขึนอีกนิดเพือให้งานออกมาดี",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-939",
    word: "Go down the drain",
    translation: "สูญเปล่า / เทนําเทท่า (เชน่งบประมาณล",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-940",
    word: "Hands-on",
    translation: "ลงมือทำด้วยตัวเอง / มีประสบการณ์",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-941",
    word: "Hard copy",
    translation: "เอกสารทีเป็นกระดาษจริง (ไม่ใชไ่",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-942",
    word: "Heads up",
    translation: "การเตือนหรือแจ้งให้ทราบล่วงหน",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-943",
    word: "Hit the ground running",
    translation: "เริมงานใหม่แล้วลุยทำได้อย่างรวดเร็",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-944",
    word: "In a nutshell",
    translation: "พูดสรุปสั้นๆัย่อๆให้เข้าใจง่าย",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-945",
    word: "In the loop",
    translation: "ดึงเข้ามารับรู้ข้อมูลด้วย / ให้รับทราบความคื",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-946",
    word: "In the red",
    translation: "อยูใ่นภาวะขาดทุน (ตัวเลขบัญชตี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-947",
    word: "Keep an eye on",
    translation: "เฝ้าดูอย่างใกล้ชดิ / จับตาดู",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-948",
    word: "Keep your fingers crossed",
    translation: "ขอให้โชคดี (ทำท่าไขว้นิวอวยพร)",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-949",
    word: "Learn the ropes",
    translation: "เรียนรู้งานพื้นฐาน / เรียนรู้วิธกีารทำ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-950",
    word: "Low-hanging fruit",
    translation: "งานทีทำได้ง่ายและเห็นผลสำเร็จได",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-951",
    word: "Micromanage",
    translation: "การจําจีจําไชควบคุมงานลูกน้องทุก",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-952",
    word: "Move the needle",
    translation: "สร้างความเปลียนแปลงหรือผลลัพธ์",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-953",
    word: "Multitask",
    translation: "ทำงานหลายๆอย่างพร้อมกันในเวลาเดี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-954",
    word: "My hands are tied",
    translation: "ฉันขยับทำอะไรไม่ได้เลย (ติดขัดกฎระเบี",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-955",
    word: "No-brainer",
    translation: "เรืองทีง่ายมากจนไม่ต้องเสยีเวลาคิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-956",
    word: "Off the top of my head",
    translation: "เท่าทีนึกออกตอนนี (ยังไม่ได้เชค็",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-957",
    word: "On the same page",
    translation: "เข้าใจตรงกัน / คิดเห็นไปในทิศทางเดี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-958",
    word: "On track",
    translation: "เป็นไปตามแผนทีวางไว้",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-959",
    word: "Out of the blue",
    translation: "อยูด่ๆีก็เกิดขึนโดยไม่ได้คาดคิด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-960",
    word: "Out of the box",
    translation: "นอกกรอบ / คิดนอกกรอบ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-961",
    word: "Out of the loop",
    translation: "ไม่รู้เรืองด้วย / ไม่ได้รับการแจ้งข่าวคราว",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-962",
    word: "Out of office (OOO)",
    translation: "ไม่อยูส่ํานักงาน / ลาหยุด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-963",
    word: "Over the counter",
    translation: "ซอขายโดยตรงื / ยาทีซอไดื้เองตามร",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-964",
    word: "Paradigm shift",
    translation: "การเปลียนแปลงแนวคิดหรือกระบวนทั",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-965",
    word: "Play it by ear",
    translation: "ว่าไปตามหน้างาน / แก้ปัญหาเฉพาะหน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-966",
    word: "Please find attached",
    translation: "โปรดดูเอกสารหรือไฟล์ทแนบมาพรี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-967",
    word: "Put on hold",
    translation: "พักงานนันไว้ก่อน / ชะลอโครงการไว",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-968",
    word: "Raise the bar",
    translation: "การยกระดับมาตรฐานให้สูงขึนไปอี",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-969",
    word: "Red tape",
    translation: "ระเบียบราชการหรือขันตอนเอกสารที",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-970",
    word: "Run by",
    translation: "นําไอเดียไปปรึกษาหรือให้ผู้ใหญ่ช",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-971",
    word: "Scalable",
    translation: "ทีสามารถขยายตัวหรือรองรับการเติ",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-972",
    word: "See eye to eye",
    translation: "เห็นพ้องต้องกัน / มีความคิดเห็นตรงกั",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-973",
    word: "Short notice",
    translation: "การแจ้งล่วงหน้าในเวลากระชนชัดิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-974",
    word: "Synergy",
    translation: "การผสานพลังร่วมมือกันเพือผลลัพ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-975",
    word: "Take for granted",
    translation: "มองข้ามความสำคัญเพราะคิดว่าเป็",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-976",
    word: "Take it easy",
    translation: "ทำใจสบายๆ / พักผ่อนเถอะ / ไม่ต",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-977",
    word: "Take the lead",
    translation: "เป็นผู้นํา / รับหน้าทีเป็นหัวเรือหลัก",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-978",
    word: "Think outside the box",
    translation: "คิดนอกกรอบ / สร้างสรรค์สงใหม่ิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-979",
    word: "Throw under the bus",
    translation: "โยนความผิดให้คนอืนเพือเอาตัวรอด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-980",
    word: "Touch base",
    translation: "ติดต่อพูดคุยอัปเดตงานกันสนๆั",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-981",
    word: "TBD (To be determined)",
    translation: "รอการกําหนดหรือสรุปแน่ชดัอีกครั",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-982",
    word: "Up to date",
    translation: "ทันสมัย / อัปเดตข้อมูลล่าสุด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-983",
    word: "Update",
    translation: "ข้อมูลล่าสุด / ทำการปรับปรุงข้อมูล",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-984",
    word: "Up in the air",
    translation: "ยังไม่แน่นอน / ยังไม่มขี้อสรุปทีช",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-985",
    word: "Win-win situation",
    translation: "สถานการณ์ทไดี้ผลประโยชน์สมประโยชน์",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-986",
    word: "Word of mouth",
    translation: "ปากต่อปาก / การพูดบอกต่อๆกันไป",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-987",
    word: "Work from home (WFH)",
    translation: "การทำงานทีบ้าน",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-988",
    word: "Workflow",
    translation: "ขันตอนการทำงานทีลืนไหลตามลํา",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-989",
    word: "Workload",
    translation: "ปริมาณงานทีต้องรับผิดชอบ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-990",
    word: "Work-life balance",
    translation: "การจัดสมดุลระหว่างการทำงานและการใช",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-991",
    word: "Wrap up",
    translation: "สรุปจบการประชุม / สรุปงานชนสุิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-992",
    word: "Write-off",
    translation: "การตัดจําหน่ายหนีสูญ / ตัดเป็นค่าใช",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-993",
    word: "Zero in on",
    translation: "มุง่เป้าหมายหรือเพ่งความสนใจไปที",
    category: "General",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-994",
    word: "Backburner",
    translation: "พักเรืองนีไว้ก่อน (ให้ความสำคัญตํ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-995",
    word: "Synergy",
    translation: "การทำงานร่วมกันอย่างมีประสทิธิภ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-996",
    word: "Leverage",
    translation: "ใชส้งทีิมีอยูใ่ห้เกิดประโยชน์สงูสุด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-997",
    word: "Paradigm",
    translation: "แบบอย่าง / กรอบความคิด",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-998",
    word: "Streamline",
    translation: "ปรับปรุงขันตอนให้ทำงานได้ง่ายและรวดเร็",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-999",
    word: "Best practice",
    translation: "แนวทางปฏิบัตทิดีทสุีดทีได้รับการยอมรั",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1000",
    word: "Deliverable",
    translation: "ผลงานขันสุดท้ายทีต้องสง่มอบตามขนาฬกาปลุกิ",
    category: "Office Slang & Idioms",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1001",
    word: "Alarm clock",
    translation: "",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1002",
    word: "Appliance",
    translation: "เครืองใชไฟฟ้าในบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1003",
    word: "Atmosphere",
    translation: "บรรยากาศ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1004",
    word: "Backpack",
    translation: "กระเป๋าเป้สะพายหลัง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1005",
    word: "Bakery",
    translation: "ร้านขายขนมปัง /เบเกอรี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1006",
    word: "Barber",
    translation: "ชา่งตัดผมชาย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1007",
    word: "Beverage",
    translation: "เครืองดืม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1008",
    word: "Blanket",
    translation: "ผ้าห่ม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1009",
    word: "Borrow",
    translation: "ขอยืม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1010",
    word: "Bus stop",
    translation: "ป้ายรถเมล์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1011",
    word: "Cabinet",
    translation: "ตู้เก็บของ / ตู้ติดผนัง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1012",
    word: "Cafeteria",
    translation: "โรงอาหาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1013",
    word: "Calendar",
    translation: "ปฏิทนิ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1014",
    word: "Cashier",
    translation: "พนักงานเก็บเงิน / แคชเชยีร์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1015",
    word: "Ceiling",
    translation: "เพดาน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1016",
    word: "Celebrity",
    translation: "คนดัง / คนมีชอเสืยงี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1017",
    word: "Chore",
    translation: "งานบ้าน / งานหยุมหยิม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1018",
    word: "Cinema / Theater",
    translation: "โรงภาพยนตร์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1019",
    word: "Citizen",
    translation: "พลเมือง / ประชาชน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1020",
    word: "Closet / Wardrobe",
    translation: "ตู้เสื้อผ้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1021",
    word: "Community",
    translation: "ชุมชน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1022",
    word: "Commute",
    translation: "การเดินทางไปกลับ (บ้าน-ทีทำงาน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1023",
    word: "Condition",
    translation: "สภาพ / เงือนไข",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1024",
    word: "Convenience store",
    translation: "ร้านสะดวกซอื",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1025",
    word: "Costume",
    translation: "เครืองแต่งกาย / ชุดครอสเพลย์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1026",
    word: "Counter",
    translation: "เคาน์เตอร์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1027",
    word: "Credit card",
    translation: "บัตรเครดิต",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1028",
    word: "Crowd",
    translation: "ฝูงชน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1029",
    word: "Curtain",
    translation: "ผ้าม่าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1030",
    word: "Cushion",
    translation: "หมอนอิง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1031",
    word: "Daily",
    translation: "รายวัน / ทุกวัน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1032",
    word: "Decaf",
    translation: "กาแฟไม่มคีาเฟอีน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1033",
    word: "Delivery",
    translation: "การจัดสง่ (อาหาร/พัสดุ )",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1034",
    word: "Department store",
    translation: "ห้างสรรพสนิค้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1035",
    word: "Diet",
    translation: "อาหาร / การควบคุมอาหาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1036",
    word: "Direction",
    translation: "ทิศทาง / คําชแนะี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1037",
    word: "Environment",
    translation: "สิ่งแวดล้อม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1038",
    word: "Escalator",
    translation: "บันไดเลือน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1039",
    word: "Exercise",
    translation: "ออกกําลังกาย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1040",
    word: "Exhibition",
    translation: "นิทรรศการ / งานแสดงศลิปะ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1041",
    word: "Fare",
    translation: "ค่าโดยสาร (รถเมล์ / รถไฟ)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1042",
    word: "Fashion",
    translation: "แฟชนั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1043",
    word: "Fast food",
    translation: "อาหารจานด่วน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1044",
    word: "Festival",
    translation: "เทศกาล",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1045",
    word: "Flavor / Flavour",
    translation: "รสชาติ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1046",
    word: "Footpath / Sidewalk",
    translation: "ทางเท้า / ฟุตบาท",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1047",
    word: "Free time / Leisure",
    translation: "เวลาว่าง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1048",
    word: "Garage",
    translation: "โรงจอดรถ / อูซ่อ่มรถ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1049",
    word: "Garbage / Trash",
    translation: "ขยะ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1050",
    word: "Grocery",
    translation: "ร้านขายของชาํ / ของสดทีซอเขื้าบ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1051",
    word: "Gym",
    translation: "โรงยิม / สถานทีออกกําลังกาย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1052",
    word: "Habit",
    translation: "นิสยั / กิจวัตรทีทำจนชนิ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1053",
    word: "Hairdresser",
    translation: "ชา่งตัดผมหญิง / ชา่งทำผม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1054",
    word: "Handbag",
    translation: "กระเป๋าถือ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1055",
    word: "Hobby",
    translation: "งานอดิเรก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1056",
    word: "Household",
    translation: "ครัวเรือน / ภายในบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1057",
    word: "Ingredient",
    translation: "ส่วนผสม (ในการทำอาหาร)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1058",
    word: "Intersection",
    translation: "สแยกี (บนถนน)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1059",
    word: "Kitchen",
    translation: "ห้องครัว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1060",
    word: "Laundry",
    translation: "การซกัรีด / เสื้อผ้าทีรอซกั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1061",
    word: "Lifestyle",
    translation: "รูปแบบการดําเนินชวีติ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1062",
    word: "Lift / Elevator",
    translation: "ลิฟต์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1063",
    word: "Litter",
    translation: "ทิงขยะ (เรียราด) / เศษขยะ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1064",
    word: "Luggage / Baggage",
    translation: "กระเป๋าเดินทาง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1065",
    word: "Magazine",
    translation: "นิตยสาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1066",
    word: "Neighbor / Neighbour",
    translation: "เพือนบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1067",
    word: "Neighborhood",
    translation: "แถวบ้าน / ย่าน / บริเวณรอบๆ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1068",
    word: "Newspaper",
    translation: "หนังสอพิมพ์ื",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1069",
    word: "Nutrition",
    translation: "โภชนาการ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1070",
    word: "Overpass / Flyover",
    translation: "สะพานลอยคนข้าม / สะพานยกระดั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1071",
    word: "Packaging",
    translation: "บรรจุภณัฑ์ (เชน่กล่อง/ห่อขนม)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1072",
    word: "Pedestrian",
    translation: "คนเดินเท้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1073",
    word: "Pharmacy / Drugstore",
    translation: "ร้านขายยา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1074",
    word: "Pillow",
    translation: "หมอน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1075",
    word: "Pocket money",
    translation: "เงินค่าขนม / เงินพกกระเป๋า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1076",
    word: "Pollution",
    translation: "มลพิษ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1077",
    word: "Public transport",
    translation: "ขนสง่สาธารณะ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1078",
    word: "Queue / Line",
    translation: "คิว / แถว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1079",
    word: "Real estate",
    translation: "อสงัหาริมทรัพย์ (บ้านและทีดิน )",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1080",
    word: "Receipt",
    translation: "ใบเสร็จรับเงิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1081",
    word: "Recipe",
    translation: "สูตรอาหาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1082",
    word: "Recreation",
    translation: "การสนัทนาการ / การพักผ่อนหย่อนใจ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1083",
    word: "Regular",
    translation: "ลูกค้าประจํา / ปกติทัวไป",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1084",
    word: "Relax",
    translation: "ผ่อนคลาย / พักผ่อน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1085",
    word: "Rent",
    translation: "เชา่ / ค่าเชา่",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1086",
    word: "Residence",
    translation: "ทีอยูอ่าศยั / บ้านพัก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1087",
    word: "Restroom / Bathroom",
    translation: "ห้องนํา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1088",
    word: "Routine",
    translation: "กิจวัตรประจําวัน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1089",
    word: "Rush hour",
    translation: "ชวโมงเร่งด่วนั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1090",
    word: "Shopping mall",
    translation: "ศูนย์การค้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1091",
    word: "Sightseeing",
    translation: "การเทียวชมทิวทัศน์ / เดินเทียว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1092",
    word: "Souvenir",
    translation: "ของทีระลึก / ของฝาก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1093",
    word: "Subway / Underground",
    translation: "รถไฟใต้ดิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1094",
    word: "Supermarket",
    translation: "ซูเปอร์มาร์เก็ต",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1095",
    word: "Ticket",
    translation: "ตัว / บัตรผ่านประตู",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1096",
    word: "Traffic",
    translation: "การจราจร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1097",
    word: "Traffic light",
    translation: "ไฟจราจร / ไฟเขียวไฟแดง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1098",
    word: "Wallet / Purse",
    translation: "กระเป๋าเงิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1099",
    word: "Weather",
    translation: "สภาพอากาศ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1100",
    word: "Weekly",
    translation: "รายสปัดาห์ / ทุกสปัดาห์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1101",
    word: "Air conditioner",
    translation: "เครืองปรับอากาศ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1102",
    word: "Alley / Lane",
    translation: "ซอย / ตรอก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1103",
    word: "Amuse",
    translation: "ทำให้สนุกสนาน / เพลิดเพลิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1104",
    word: "Amusement park",
    translation: "สวนสนุก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1105",
    word: "Apartment",
    translation: "ห้องชุด / อพาร์ตเมนต์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1106",
    word: "Area",
    translation: "พืนที / บริเวณ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1107",
    word: "Awake",
    translation: "ตืนนอน / รู้สกตัวึ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1108",
    word: "Balcony",
    translation: "ระเบียง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1109",
    word: "Basin / Sink",
    translation: "อ่างล้างหน้า / อ่างล้างจาน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1110",
    word: "Bathrobe",
    translation: "ชุดคลุมอาบนํา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1111",
    word: "Battery charger",
    translation: "ทีชาร์จแบตเตอรี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1112",
    word: "Belongings",
    translation: "ข้าวของเครืองใชส้วนตัว่",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1113",
    word: "Boutique",
    translation: "ร้านขายเสื้อผ้าแฟชนขนาดเล็ัก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1114",
    word: "Buffet",
    translation: "อาหารแบบบุฟเฟต์",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1115",
    word: "Cafeteria",
    translation: "โรงอาหาร / ร้านอาหารบริการตนเอง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1116",
    word: "Coin",
    translation: "เหรียญ (เงิน )",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1117",
    word: "Comfort",
    translation: "ความสะดวกสบาย / ปลอบโยน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1118",
    word: "Condition",
    translation: "สภาพ / สภาวะ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1119",
    word: "Condominium / Condo",
    translation: "คอนโดมิเนียม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1120",
    word: "Cosmeceutical",
    translation: "เวชสำอาง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1121",
    word: "Cosmetic",
    translation: "เครืองสำอาง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1122",
    word: "Crossroads",
    translation: "ทางแยก / ทางตัดกันของถนน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1123",
    word: "Custom",
    translation: "ขนบธรรมเนียม / ประเพณี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1124",
    word: "Debt",
    translation: "หนีสนิ (เชน่หนีส่วนบุคคล)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1125",
    word: "Decoration",
    translation: "การตกแต่ง / เครืองประดับ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1126",
    word: "Delivery fee",
    translation: "ค่าบริการจัดสง่",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1127",
    word: "Detergent",
    translation: "ผงซกัฟอก / นํายาซกัผ้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1128",
    word: "Dinner",
    translation: "อาหารคํา / มือเย็น",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1129",
    word: "Direction",
    translation: "ทิศทาง / เสนทาง้",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1130",
    word: "Doze",
    translation: "งีบหลับ / สปหงกั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1131",
    word: "Drawer",
    translation: "ลินชกั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1132",
    word: "Earphone",
    translation: "หูฟังขนาดเล็ก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1133",
    word: "Electrician",
    translation: "ชา่งไฟฟ้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1134",
    word: "Emergency",
    translation: "เหตุฉุกเฉิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1135",
    word: "Entertainment",
    translation: "ความบันเทิง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1136",
    word: "Errand",
    translation: "การออกไปทำธุระส่วนตัว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1137",
    word: "Evening",
    translation: "ชว่งเย็น / พลบคํา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1138",
    word: "Facility",
    translation: "สงอํิานวยความสะดวก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1139",
    word: "Familiar",
    translation: "คุ้นเคย / สนิทสนม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1140",
    word: "Fastener / Zipper",
    translation: "ซปิรูด / ตัวยึดล็อก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1141",
    word: "Faucet / Tap",
    translation: "ก๊อกนํา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1142",
    word: "Flat",
    translation: "ห้องชุด / ห้องพัก (สไตล์อังกฤษ)",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1143",
    word: "Flight",
    translation: "เทียวบิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1144",
    word: "Floor",
    translation: "ชนั (ของตึก ) / พืนห้อง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1145",
    word: "Gas station / Petrol station",
    translation: "ปัมนํามัน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1146",
    word: "Gate",
    translation: "ประตูรวั / ประตูทางเข้าขนาดใหญ่",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1147",
    word: "Gown",
    translation: "ชุดครุย / ชุดกระโปรงยาว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1148",
    word: "Grocery store",
    translation: "ร้านขายของชาํ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1149",
    word: "Guest",
    translation: "แขก / ผู้มาเยือน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1150",
    word: "Haircut",
    translation: "การตัดผม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1151",
    word: "Hanger",
    translation: "ไม้แขวนเสอื",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1152",
    word: "Highway",
    translation: "ทางหลวง / ถนนสายหลัก",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1153",
    word: "Home delivery",
    translation: "การบริการจัดสง่ถึงบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1154",
    word: "Host",
    translation: "เจ้าบ้าน / เจ้าภาพ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1155",
    word: "Housework",
    translation: "งานบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1156",
    word: "ID card",
    translation: "บัตรประจําตัวประชาชน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1157",
    word: "Ingredient",
    translation: "ส่วนผสม / วัตถุดบิปรุงอาหาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1158",
    word: "Invitation",
    translation: "จดหมายเชญิ / การเชอเชืญิ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1159",
    word: "Keycard",
    translation: "คียก์าร์ดเปิดประตู",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1160",
    word: "Laundry detergent",
    translation: "นํายาซกัผ้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1161",
    word: "Lawn",
    translation: "สนามหญ้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1162",
    word: "Leftover",
    translation: "อาหารทีเหลือจากมือก่อน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1163",
    word: "Local",
    translation: "คนท้องถิน / พืนเมือง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1164",
    word: "Lock",
    translation: "แม่กญุแจ / ล็อกประตู",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1165",
    word: "Lounge",
    translation: "ห้องนังเล่น / ห้องพักผ่อน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1166",
    word: "Luggage rack",
    translation: "ชนวางกระเป๋ัาเดินทาง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1167",
    word: "Maintenance fee",
    translation: "ค่าส่วนกลาง / ค่าบํารุงรักษา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1168",
    word: "Market",
    translation: "ตลาด",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1169",
    word: "Mirror",
    translation: "กระจกเงา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1170",
    word: "Monthly",
    translation: "รายเดือน / ทุกๆเดือน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1171",
    word: "Morning",
    translation: "ชว่งเชา้",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1172",
    word: "Nap",
    translation: "นอนกลางวัน / งีบหลับสนๆั",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1173",
    word: "Nightlife",
    translation: "ชวีติยามคําคืน / การเทียวกลางคืน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1174",
    word: "Outfit",
    translation: "ชุดเสื้อผ้าทีแต่งกาย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1175",
    word: "Overpass",
    translation: "สะพานลอยคนข้าม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1176",
    word: "Parking lot",
    translation: "ลานจอดรถ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1177",
    word: "Passenger",
    translation: "ผู้โดยสาร",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1178",
    word: "Pavement",
    translation: "พืนผิวถนน / ทางเดินเท้า",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1179",
    word: "Pet",
    translation: "สตัว์เลียง",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1180",
    word: "Pillowcase",
    translation: "ปลอกหมอน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1181",
    word: "Plumber",
    translation: "ชา่งประปา",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1182",
    word: "Power bank",
    translation: "แบตเตอรีสารองพกพาํ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1183",
    word: "Property",
    translation: "ทรัพย์สนิ / ทีดินผืนดิน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1184",
    word: "Receipt",
    translation: "ใบเสร็จ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1185",
    word: "Refrigerator / Fridge",
    translation: "ตู้เย็น",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1186",
    word: "Relaxation",
    translation: "การพักผ่อนหย่อนใจ",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1187",
    word: "Rent",
    translation: "ค่าเชา่ / เชาบ่้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1188",
    word: "Repair",
    translation: "ซอ่มแซม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1189",
    word: "Resident",
    translation: "ผู้อยูอ่าศัย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1190",
    word: "Roof",
    translation: "หลังคาบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1191",
    word: "Row",
    translation: "แถว / แนว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1192",
    word: "Shampood",
    translation: "ยาสระผม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1193",
    word: "Shower",
    translation: "การอาบนําด้วยฝักบัว / ฝักบัว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1194",
    word: "Soap",
    translation: "สบู่",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1195",
    word: "Street",
    translation: "ถนน / ตรอกซอกซอย",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1196",
    word: "Takeaway",
    translation: "อาหารสงกลับบ้าน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1197",
    word: "Toothbrush",
    translation: "แปรงสฟีัน",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1198",
    word: "Toothpaste",
    translation: "ยาสฟันี",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1199",
    word: "Towel",
    translation: "ผ้าเชด็ตัว",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1200",
    word: "Umbrella",
    translation: "ร่ม",
    category: "Daily Life",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1201",
    word: "Ant",
    translation: "มด",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1202",
    word: "Alligator",
    translation: "จระเข้ตระกูลอเมริกา (ตีนเป็ด)",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1203",
    word: "Ape",
    translation: "ลิงไม่มหีาง (เชน่ชมิแปนซีอุรังอุต",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1204",
    word: "Bat",
    translation: "ค้างคาว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1205",
    word: "Bear",
    translation: "หมี",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1206",
    word: "Bee",
    translation: "ผึง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1207",
    word: "Beetle",
    translation: "ด้วง / แมลงปีกแข็ง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1208",
    word: "Bird",
    translation: "นก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1209",
    word: "Buffalo",
    translation: "ควาย",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1210",
    word: "Butterfly",
    translation: "ผีเสอื",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1211",
    word: "Camel",
    translation: "อูฐ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1212",
    word: "Cat",
    translation: "แมว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1213",
    word: "Centipede",
    translation: "ตะขาบ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1214",
    word: "Chameleon",
    translation: "กิงก่าเปลียนสี",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1215",
    word: "Cheetah",
    translation: "เสอืชตีาห์",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1216",
    word: "Chicken",
    translation: "ไก่",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1217",
    word: "Chimpanzee",
    translation: "ลิงชมิแปนซี",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1218",
    word: "Cockroach",
    translation: "แมลงสาบ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1219",
    word: "Cow",
    translation: "วัว (ตัวเมีย )",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1220",
    word: "Crab",
    translation: "ปู",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1221",
    word: "Crocodile",
    translation: "จระเข้",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1222",
    word: "Crow",
    translation: "อีกา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1223",
    word: "Deer",
    translation: "กวาง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1224",
    word: "Dog",
    translation: "สุนัข / หมา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1225",
    word: "Dolphin",
    translation: "โลมา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1226",
    word: "Donkey",
    translation: "ลา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1227",
    word: "Dragonfly",
    translation: "แมลงปอ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1228",
    word: "Duck",
    translation: "เป็ด",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1229",
    word: "Eagle",
    translation: "นกอินทรี",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1230",
    word: "Earthworm",
    translation: "ไสเดื้อน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1231",
    word: "Elephant",
    translation: "ชาง้",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1232",
    word: "Firefly",
    translation: "หิงห้อย",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1233",
    word: "Fish",
    translation: "ปลา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1234",
    word: "Flamingo",
    translation: "นกฟลามิงโก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1235",
    word: "Fly",
    translation: "แมลงวัน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1236",
    word: "Fox",
    translation: "สุนัขจิงจอก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1237",
    word: "Frog",
    translation: "กบ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1238",
    word: "Giraffe",
    translation: "ยีราฟ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1239",
    word: "Goat",
    translation: "แพะ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1240",
    word: "Goose",
    translation: "ห่าน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1241",
    word: "Gorilla",
    translation: "ลิงกอริลลา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1242",
    word: "Grasshopper",
    translation: "ตักแตน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1243",
    word: "Hamster",
    translation: "หนูแฮมสเตอร์",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1244",
    word: "Hawk",
    translation: "เหยียว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1245",
    word: "Hedgehog",
    translation: "เม่นแคระ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1246",
    word: "Hippo / Hippopotamus",
    translation: "ฮปิโปโปเตมัส",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1247",
    word: "Horse",
    translation: "ม้า",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1248",
    word: "Hummingbird",
    translation: "นกฮัมมิงเบิรด์",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1249",
    word: "Hyena",
    translation: "ไฮยีน่า",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1250",
    word: "Jellyfish",
    translation: "แมงกะพรุน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1251",
    word: "Kangaroo",
    translation: "จิงโจ้",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1252",
    word: "Koala",
    translation: "โคอาลา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1253",
    word: "Leopard",
    translation: "เสอืดาว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1254",
    word: "Lion",
    translation: "สงิโต",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1255",
    word: "Lizard",
    translation: "จิงจก / ตุก๊แก / กิงก่า",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1256",
    word: "Llama",
    translation: "ลามา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1257",
    word: "Lobster",
    translation: "กุ้งมังกร / กุ้งล็อบสเตอร์",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1258",
    word: "Monkey",
    translation: "ลิง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1259",
    word: "Mosquito",
    translation: "ยุง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1260",
    word: "Moth",
    translation: "ผีเสอกลางคืนื",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1261",
    word: "Mouse / Mice",
    translation: "หนู (ตัวเล็ก )",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1262",
    word: "Octopus",
    translation: "ปลาหมึกยักษ์ (หมึกสาย)",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1263",
    word: "Ostrich",
    translation: "นกกระจอกเทศ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1264",
    word: "Otter",
    translation: "นาก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1265",
    word: "Owl",
    translation: "นกฮูก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1266",
    word: "Ox",
    translation: "วัวตัวผู้ (ใชแรงงาน) ้",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1267",
    word: "Panda",
    translation: "หมีแพนด้า",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1268",
    word: "Parrot",
    translation: "นกแก้ว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1269",
    word: "Peacock",
    translation: "นกยูง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1270",
    word: "Penguin",
    translation: "นกเพนกวิน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1271",
    word: "Pig",
    translation: "หมู",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1272",
    word: "Pigeon",
    translation: "นกพิราบ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1273",
    word: "Polar bear",
    translation: "หมีขวโลกั",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1274",
    word: "Rabbit",
    translation: "กระต่าย",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1275",
    word: "Raccoon",
    translation: "แรคคูน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1276",
    word: "Rat",
    translation: "หนู (ตัวใหญ่ / หนูทอ่ )",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1277",
    word: "Rhino / Rhinoceros",
    translation: "แรด",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1278",
    word: "Rooster",
    translation: "ไก่ตวัผู้",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1279",
    word: "Salmon",
    translation: "ปลาแซลมอน",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1280",
    word: "Scorpion",
    translation: "แมงป่อง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1281",
    word: "Seahorse",
    translation: "ม้านํา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1282",
    word: "Seal",
    translation: "แมวนํา",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1283",
    word: "Shark",
    translation: "ฉลาม",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1284",
    word: "Sheep",
    translation: "แกะ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1285",
    word: "Shrimp / Prawn",
    translation: "กุ้ง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1286",
    word: "Snail",
    translation: "หอยทาก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1287",
    word: "Snake",
    translation: "งู",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1288",
    word: "Spider",
    translation: "แมงมุม",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1289",
    word: "Squid",
    translation: "ปลาหมึก (หมึกกล้วย)",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1290",
    word: "Squirrel",
    translation: "กระรอก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1291",
    word: "Starfish",
    translation: "ปลาดาว",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1292",
    word: "Swan",
    translation: "หงส์",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1293",
    word: "Tiger",
    translation: "เสอื",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1294",
    word: "Toad",
    translation: "คางคก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1295",
    word: "Tortoise",
    translation: "เต่าบก",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1296",
    word: "Turkey",
    translation: "ไก่งวง",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1297",
    word: "Turtle",
    translation: "เต่านํา / เต่าทะเล",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1298",
    word: "Whale",
    translation: "วาฬ",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1299",
    word: "Wolf",
    translation: "หมาป่า",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1300",
    word: "Zebra",
    translation: "ม้าลาย",
    category: "Animals",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1301",
    word: "Air current",
    translation: "กระแสลม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1302",
    word: "Air pressure",
    translation: "ความกดอากาศ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1303",
    word: "Autumn / Fall",
    translation: "ฤดูใบไม้ร่วง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1304",
    word: "Avalanche",
    translation: "หิมะถล่ม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1305",
    word: "Blizzard",
    translation: "พายุหมิะ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1306",
    word: "Breeze",
    translation: "ลมโชยอ่อนๆ / ลมพัดเบาๆ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1307",
    word: "Celsius",
    translation: "เซลเซยีส (หน่วยวัดอุณหภูม ) ิ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1308",
    word: "Chill",
    translation: "ความหนาวเย็น / รู้สกึหนาว",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1309",
    word: "Chilly",
    translation: "หนาวเย็นยะเยือก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1310",
    word: "Climate",
    translation: "ภูมอิากาศ (สภาพอากาศระยะยาว)Noun",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1311",
    word: "Cloud",
    translation: "เมฆ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1312",
    word: "Cloudy",
    translation: "มีเมฆมาก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1313",
    word: "Cold wave",
    translation: "คลืนความหนาวเย็น",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1314",
    word: "Cyclone",
    translation: "พายุไซโคลน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1315",
    word: "Damp",
    translation: "ชนื / อับชนื",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1316",
    word: "Degree",
    translation: "องศา (หน่วยวัด )",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1317",
    word: "Dew",
    translation: "นําค้าง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1318",
    word: "Dewdrop",
    translation: "หยดนําค้าง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1319",
    word: "Downpour",
    translation: "ฝนตกกระหนํา / ฝนเทลงมา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1320",
    word: "Drizzle",
    translation: "ฝนตกปรอยๆ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1321",
    word: "Drought",
    translation: "ภัยแล้ง / ความแห้งแล้ง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1322",
    word: "Dry season",
    translation: "ฤดูแล้ง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1323",
    word: "Earth Tremor",
    translation: "แผ่นดินไหวขนาดเล็ก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1324",
    word: "Earthquake",
    translation: "แผ่นดินไหว",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1325",
    word: "Fahrenheit",
    translation: "ฟาเรนไฮต์ (หน่วยวัดอุณหภูม ) ิ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1326",
    word: "Flash flood",
    translation: "นําป่าไหลหลาก / นําท่วมฉับพลัน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1327",
    word: "Flood",
    translation: "นําท่วม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1328",
    word: "Fog",
    translation: "หมอกหนา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1329",
    word: "Foggy",
    translation: "มีหมอกลงหนาจัด",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1330",
    word: "Forecast",
    translation: "พยากรณ์ (อากาศ)",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1331",
    word: "Freezing",
    translation: "หนาวจัดจนเป็นนําแข็ง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1332",
    word: "Frost",
    translation: "นําค้างแข็ง / แม่คะนิง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1333",
    word: "Gale",
    translation: "ลมพายุแรงมาก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1334",
    word: "Global warming",
    translation: "ภาวะโลกร้อน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1335",
    word: "Greenhouse effect",
    translation: "ปรากฏการณ์เรือนกระจก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1336",
    word: "Gust",
    translation: "ลมกระโชกแรง (พัดมาวูบหนึง)",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1337",
    word: "Hail",
    translation: "ลูกเห็บ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1338",
    word: "Hailstone",
    translation: "เม็ดลูกเห็บ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1339",
    word: "Hailstorm",
    translation: "พายุลกูเห็บ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1340",
    word: "Haze",
    translation: "หมอกแดด / ควันฝุ่นจางๆ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1341",
    word: "Heatwave",
    translation: "คลืนความร้อน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1342",
    word: "High pressure",
    translation: "ความกดอากาศสูง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1343",
    word: "Hot",
    translation: "ร้อน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1344",
    word: "Humid",
    translation: "ชนื (มีไวนําในอากาศสูง )",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1345",
    word: "Humidity",
    translation: "ความชนในอากาศื",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1346",
    word: "Hurricane",
    translation: "พายุเฮอริเคน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1347",
    word: "Ice",
    translation: "นําแข็ง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1348",
    word: "Icicle",
    translation: "แท่งนําแข็งย้อย",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1349",
    word: "Lightning",
    translation: "ฟ้าแลบ / ฟ้าผ่า",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1350",
    word: "Low pressure",
    translation: "ความกดอากาศตํา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1351",
    word: "Meteorologist",
    translation: "นักอุตนุยิมวิทยา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1352",
    word: "Meteorology",
    translation: "อุตนุยิมวิทยา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1353",
    word: "Mist",
    translation: "หมอกบาง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1354",
    word: "Misty",
    translation: "มีหมอกบางๆปกคลุม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1355",
    word: "Moisture",
    translation: "ความชุม่ชนื",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1356",
    word: "Monsoon",
    translation: "มรสุม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1357",
    word: "Mudslide",
    translation: "โคลนถล่ม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1358",
    word: "Overcast",
    translation: "มืดครึมไปด้วยเมฆ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1359",
    word: "Ozone layer",
    translation: "ชนโอโซนั",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1360",
    word: "Precipitation",
    translation: "หยาดนําฟ้า (ฝนหิมะลูกเห็บทีตกจากฟ้",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1361",
    word: "Puddle",
    translation: "แอ่งนําขังเล็กๆบนพืน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1362",
    word: "Radar",
    translation: "เรดาร์ (ตรวจจับกลุม่ฝน)",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1363",
    word: "Rain",
    translation: "ฝน / ฝนตก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1364",
    word: "Rainbow",
    translation: "รุ้งกินนํา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1365",
    word: "Raindrop",
    translation: "หยดนําฝน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1366",
    word: "Rainy season / Monsoon",
    translation: "ฤดู season ฝน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1367",
    word: "Sandstorm",
    translation: "พายุทราย",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1368",
    word: "Scorching",
    translation: "ร้อนจัดจนแสบผิว / ร้อนแผดเผา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1369",
    word: "Season",
    translation: "ฤดูกาล",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1370",
    word: "Shower",
    translation: "ฝนตกซูใ่หญ่ (แล้วก็หยุด )",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1371",
    word: "Sky",
    translation: "ท้องฟ้า",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1372",
    word: "Sleet",
    translation: "ฝนปนหิมะ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1373",
    word: "Smog",
    translation: "หมอกผสมควันพิษ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1374",
    word: "Snow",
    translation: "หิมะ / หิมะตก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1375",
    word: "Snowflake",
    translation: "เกล็ดหิมะ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1376",
    word: "Snowstorm",
    translation: "พายุหมิะ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1377",
    word: "Spring",
    translation: "ฤดูใบไม้ผลิ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1378",
    word: "Storm",
    translation: "พายุ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1379",
    word: "Stormy",
    translation: "มีพายุจัด / ฝนฟ้าคะนองแรง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1380",
    word: "Summer",
    translation: "ฤดูร้อน",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1381",
    word: "Sun",
    translation: "พระอาทิตย์",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1382",
    word: "Sunbeam",
    translation: "ลําแสงอาทิตย์",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1383",
    word: "Sunny",
    translation: "มีแดดจัด / ท้องฟ้าแจ่มใส",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1384",
    word: "Sunrise",
    translation: "พระอาทิตย์ขนึ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1385",
    word: "Sunset",
    translation: "พระอาทิตย์ตก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1386",
    word: "Sunshine",
    translation: "แสงแดด",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1387",
    word: "Temperature",
    translation: "อุณหภูมิ",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1388",
    word: "Thermometer",
    translation: "เครืองวัดอุณหภูมิ / เทอร์โมมิเตอร์",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1389",
    word: "Thunder",
    translation: "ฟ้าร้อง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1390",
    word: "Thundershower",
    translation: "ฝนฟ้าคะนองชว่งสนๆั",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1391",
    word: "Thunderstorm",
    translation: "พายุฝนฟ้าคะนอง",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1392",
    word: "Tornado",
    translation: "พายุทอร์นาโด",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1393",
    word: "Typhoon",
    translation: "พายุไต้ฝุ่น",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1394",
    word: "UV rays",
    translation: "รังสอีัลตราไวโอเลต",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1395",
    word: "Vapor / Vapour",
    translation: "ไอนํา",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1396",
    word: "Wind",
    translation: "ลม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1397",
    word: "Wind chill",
    translation: "ดัชนีความหนาวเย็นจากลม",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1398",
    word: "Windy",
    translation: "ลมแรง / มีลมพัดมาก",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1399",
    word: "Winter",
    translation: "ฤดูหนาว",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1400",
    word: "Wintery / Wintry",
    translation: "หนาวเย็นแบบฤดูหนาว",
    category: "Weather",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1401",
    word: "Admire",
    translation: "เลือมใส / ชนชมื",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1402",
    word: "Affectionate",
    translation: "ซงแสดงความรัึก / เมตตา",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1403",
    word: "Aggressive",
    translation: "ก้าวร้าว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1404",
    word: "Agony",
    translation: "ความทุกข์ทรมานใจอย่างรุนแรง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1405",
    word: "Alert",
    translation: "ตืนตัว / ระแวดระวัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1406",
    word: "Amazed",
    translation: "ทึง / อัศจรรย์ใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1407",
    word: "Amused",
    translation: "รู้สกึสนุกสนานขบขัน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1408",
    word: "Angry",
    translation: "โกรธ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1409",
    word: "Annoyed",
    translation: "รําคาญใจ / หงุดหงิด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1410",
    word: "Anxious",
    translation: "วิตกกังวล / กระวนกระวาย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1411",
    word: "Apathetic",
    translation: "เฉยเมย / ไร้อารมณ์ความรู้สกึ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1412",
    word: "Ashamed",
    translation: "ละอายใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1413",
    word: "Astonished",
    translation: "ประหลาดใจอย่างมาก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1414",
    word: "Awkward",
    translation: "รู้สกึอึดอัดใจ / ทำตัวไม่ถกู",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1415",
    word: "Bitter",
    translation: "ขมขืนใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1416",
    word: "Bored",
    translation: "เบือ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1417",
    word: "Brave",
    translation: "กล้าหาญ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1418",
    word: "Calm",
    translation: "สงบ / เยือกเย็น",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1419",
    word: "Cheerful",
    translation: "ร่าเริงเบิกบาน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1420",
    word: "Confused",
    translation: "สบสนั",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1421",
    word: "Content",
    translation: "พึงพอใจในสงทีิมี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1422",
    word: "Cynical",
    translation: "มองโลกในแง่ร้าย / ประชดประชนั",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1423",
    word: "Delighted",
    translation: "ยินดีมาก / ปลืมปีติ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1424",
    word: "Depressed",
    translation: "หดหู่ / ซมึเศร้า",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1425",
    word: "Desperate",
    translation: "สนหวัิง / จนตรอก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1426",
    word: "Devastated",
    translation: "ใจสลาย / สนเนืิอประดาตัว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1427",
    word: "Disappointed",
    translation: "ผิดหวัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1428",
    word: "Disgusted",
    translation: "ขยะแขยง / รังเกียจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1429",
    word: "Disheartened",
    translation: "ท้อแท้ใจ / หมดกําลังใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1430",
    word: "Dismayed",
    translation: "ท้อแท้ / ใจเสยี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1431",
    word: "Distracted",
    translation: "วอกแวก / จิตใจไม่อยูก่ับเนือกับตัว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1432",
    word: "Distressed",
    translation: "เป็นทุกข์อย่างหนัก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1433",
    word: "Dread",
    translation: "พรันพรึง / กลัวมาก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1434",
    word: "Eager",
    translation: "กระตือรือร้น / กระหายทีจะทำ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1435",
    word: "Ecstatic",
    translation: "ดีใจอย่างเหลือล้น / ปลืมปีติสดุขีด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1436",
    word: "Embarrassed",
    translation: "อับอาย / ขายหน้า",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1437",
    word: "Emotion",
    translation: "อารมณ์",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1438",
    word: "Energetic",
    translation: "กระฉับกระเฉง / มีพลัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1439",
    word: "Enthusiastic",
    translation: "กระตือรือร้นอย่างมาก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1440",
    word: "Envious",
    translation: "อิจฉาริษยา",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1441",
    word: "Excited",
    translation: "ตืนเต้น",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1442",
    word: "Exhausted",
    translation: "เหนือยล้าอ่อนเพลียอย่างมาก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1443",
    word: "Fearful",
    translation: "น่ากลัว / รู้สกึกลัว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1444",
    word: "Feeling",
    translation: "ความรู้สกึ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1445",
    word: "Fierce",
    translation: "ดุร้าย / เกรียวกราด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1446",
    word: "Frustrated",
    translation: "หงุดหงิดใจ (เพราะทำไม่สำเร็จตามหวั",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1447",
    word: "Furious",
    translation: "โกรธจัด / เป็นฟืนเป็นไฟ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1448",
    word: "Glad",
    translation: "ดีใจ / ยินดี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1449",
    word: "Gloomy",
    translation: "เศร้าหมอง / มืดมน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1450",
    word: "Grateful",
    translation: "รู้สกึขอบคุณ / สำนึกในบุญคุณ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1451",
    word: "Grief",
    translation: "ความโศกเศร้าอย่างสุดซงึ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1452",
    word: "Guilty",
    translation: "รู้สกึผิด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1453",
    word: "Happy",
    translation: "มีความสุข",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1454",
    word: "Heartbroken",
    translation: "อกหัก / เสยใจอย่างรุนแรงี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1455",
    word: "Helpless",
    translation: "ไร้ทีพึง / ไร้หนทาง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1456",
    word: "Homesick",
    translation: "คิดถึงบ้าน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1457",
    word: "Hopeful",
    translation: "เต็มไปด้วยความหวัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1458",
    word: "Hopeless",
    translation: "สนหวัิง / ไม่มหีวัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1459",
    word: "Horrified",
    translation: "ตกใจกลัวสุดขีด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1460",
    word: "Hostile",
    translation: "เป็นศตัรู / ไม่เป็นมิตร",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1461",
    word: "Hurt",
    translation: "เจ็บปวด (ร่างกายหรือจิตใจ)",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1462",
    word: "Impatient",
    translation: "ใจร้อน / ไม่อดทน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1463",
    word: "Indifferent",
    translation: "เมินเฉย / ไม่แยแส",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1464",
    word: "Insecure",
    translation: "ไม่มนใจในตัวเอง / รู้สกึไม่ปลอดภัย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1465",
    word: "Inspired",
    translation: "มีแรงบันดาลใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1466",
    word: "Insulted",
    translation: "รู้สกึถูกดูหมิน / เหยียดหยาม",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1467",
    word: "Irritated",
    translation: "ระคายเคือง / หงุดหงิดฉุนเฉียว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1468",
    word: "Jealous",
    translation: "หึงหวง / อิจฉา",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1469",
    word: "Joyful",
    translation: "มีความสุขสำราญ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1470",
    word: "Lonely",
    translation: "เหงา",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1471",
    word: "Miserable",
    translation: "เป็นทุกข์ระทม / ทุกข์ยาก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1472",
    word: "Moody",
    translation: "อารมณ์แปรปรวนง่าย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1473",
    word: "Nervous",
    translation: "ประหม่า / ตืนเต้นกระวนกระวาย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1474",
    word: "Nostalgic",
    translation: "อาลัยอาวรณ์ / คิดถึงความหลัง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1475",
    word: "Offended",
    translation: "รู้สกึถูกลบหลู่ / เคืองใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1476",
    word: "Optimistic",
    translation: "มองโลกในแง่ดี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1477",
    word: "Outraged",
    translation: "โกรธแค้นอย่างรุนแรง",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1478",
    word: "Overwhelmed",
    translation: "รู้สกึท่วมท้น / รับไม่ไหว (จากอารมณ์",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1479",
    word: "Paranoid",
    translation: "ระแวง / วิตกจริตเกินเหตุ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1480",
    word: "Passionate",
    translation: "เต็มไปด้วยความหลงใหล / คลังไคล",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1481",
    word: "Pessimistic",
    translation: "มองโลกในแง่ร้าย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1482",
    word: "Proud",
    translation: "ภูมใิจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1483",
    word: "Regretful",
    translation: "รู้สกเสึยใจภายหลังี",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1484",
    word: "Relieved",
    translation: "โล่งใจ / สบายใจขึน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1485",
    word: "Reluctant",
    translation: "ไม่เต็มใจ / ลังเลใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1486",
    word: "Resentful",
    translation: "ขุน่เคืองใจ / เจ็บแค้นใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1487",
    word: "Sad",
    translation: "เศร้า",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1488",
    word: "Scared",
    translation: "กลัว",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1489",
    word: "Shocked",
    translation: "ตกใจสุดขีด / ชอ็ก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1490",
    word: "Shy",
    translation: "ขีอาย",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1491",
    word: "Skeptical",
    translation: "สงสยั / ไม่ปักใจเชอื",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1492",
    word: "Sorrowful",
    translation: "เต็มไปด้วยความทุกข์โศก",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1493",
    word: "Stressed",
    translation: "เครียด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1494",
    word: "Surprised",
    translation: "ประหลาดใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1495",
    word: "Suspicious",
    translation: "ระแวง / น่าสงสยั",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1496",
    word: "Sympathetic",
    translation: "เห็นอกเห็นใจคนอืน",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1497",
    word: "Terrified",
    translation: "หวาดกลัวสุดขีด",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1498",
    word: "Uneasy",
    translation: "กระสบักระสา่ย / ไม่สบายใจ",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1499",
    word: "Weary",
    translation: "เหนือยหน่าย / อ่อนล้า",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1500",
    word: "Worried",
    translation: "เป็นกังวล",
    category: "Emotions",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1501",
    word: "Beige",
    translation: "สเีบจ / สนีําตาลอ่อน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1502",
    word: "Black",
    translation: "สดีํา",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1503",
    word: "Blue",
    translation: "สนีําเงิน / สฟี้า",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1504",
    word: "Bronze",
    translation: "สทีองแดง / สสีําริด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1505",
    word: "Brown",
    translation: "สนีําตาล",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1506",
    word: "Bright",
    translation: "ฉูดฉาด / สว่างจ้า",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1507",
    word: "Checkered",
    translation: "ลายตารางหมากรุก",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1508",
    word: "Circle",
    translation: "วงกลม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1509",
    word: "Circular",
    translation: "ทีมีลกัษณะเป็นวงกลม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1510",
    word: "Colorful",
    translation: "ทีมีสสีนัสดใส",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1511",
    word: "Cone",
    translation: "รูปกรวย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1512",
    word: "Conical",
    translation: "ทีมีลกัษณะเป็นรูปกรวย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1513",
    word: "Cream",
    translation: "สคีรีม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1514",
    word: "Crimson",
    translation: "สแีดงเข้ม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1515",
    word: "Cube",
    translation: "ลูกบาศก์ / ทรงสเหลียมจัตรุัส",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1516",
    word: "Cubic",
    translation: "ทีมีลกัษณะเป็นลูกบาศก์",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1517",
    word: "Curve",
    translation: "เสนโค้ง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1518",
    word: "Curved",
    translation: "ทีมีลกัษณะโค้ง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1519",
    word: "Cylinder",
    translation: "ทรงกระบอก",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1520",
    word: "Cylindrical",
    translation: "ทีมีลกัษณะเป็นทรงกระบอก",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1521",
    word: "Dark",
    translation: "สเีข้ม / มืด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1522",
    word: "Diamond",
    translation: "รูปสเหลียมขนมเปียกปูน / รูปเพชรNoun",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1523",
    word: "Dot",
    translation: "จุด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1524",
    word: "Dotted",
    translation: "ลายจุด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1525",
    word: "Emerald",
    translation: "สเีขียวมรกต",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1526",
    word: "Gold / Golden",
    translation: "สทีอง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1527",
    word: "Gray / Grey",
    translation: "สเีทา",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1528",
    word: "Green",
    translation: "สเีขียว",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1529",
    word: "Heart shape",
    translation: "รูปหัวใจ",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1530",
    word: "Hexagon",
    translation: "รูปหกเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1531",
    word: "Hexagonal",
    translation: "ทีมีลกัษณะเป็นหกเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1532",
    word: "Horizontal",
    translation: "แนวนอน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1533",
    word: "Indigo",
    translation: "สคีราม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1534",
    word: "Ivory",
    translation: "สงาชีาง้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1535",
    word: "Khaki",
    translation: "สกีากี",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1536",
    word: "Lavender",
    translation: "สมีว่งลาเวนเดอร์",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1537",
    word: "Light",
    translation: "สอีอ่น / สว่าง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1538",
    word: "Line",
    translation: "เสน้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1539",
    word: "Linear",
    translation: "ทีเป็นเสนตรง้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1540",
    word: "Magenta",
    translation: "สแดงอมม่วงี",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1541",
    word: "Maroon",
    translation: "สนีําตาลแดง / สแีดงมะรูน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1542",
    word: "Matte",
    translation: "สดี้าน / ไม่เงางาม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1543",
    word: "Metallic",
    translation: "สเีนือเมทัลลิก / มีประกายแบบโลหะ",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1544",
    word: "Navy blue",
    translation: "สนีําเงินกรมท่า",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1545",
    word: "Neon",
    translation: "สสะที้อนแสง / สนีอีอน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1546",
    word: "Octagon",
    translation: "รูปแปดเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1547",
    word: "Octagonal",
    translation: "ทีมีลกัษณะเป็นแปดเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1548",
    word: "Orange",
    translation: "สสีม้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1549",
    word: "Oval",
    translation: "รูปไข่ / วงรี",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1550",
    word: "Pale",
    translation: "สซีดี / สจางี",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1551",
    word: "Parallel",
    translation: "เสนขนาน้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1552",
    word: "Pastel",
    translation: "สพีาสเทล / สอีอ่นหวาน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1553",
    word: "Pattern",
    translation: "ลวดลาย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1554",
    word: "Peach",
    translation: "สพีชี / สสีมอมชมพู้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1555",
    word: "Pentagon",
    translation: "รูปห้าเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1556",
    word: "Pentagonal",
    translation: "ทีมีลกัษณะเป็นห้าเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1557",
    word: "Pink",
    translation: "สชีมพู",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1558",
    word: "Plain",
    translation: "เรียบๆ / ไม่มลีวดลาย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1559",
    word: "Plaid",
    translation: "ลายสก็อต",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1560",
    word: "Polka dot",
    translation: "ลายจุดกลมใหญ่ (พอลกาด็อต)",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1561",
    word: "Purple",
    translation: "สมีว่ง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1562",
    word: "Pyramid",
    translation: "รูปทรงพีระมิด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1563",
    word: "Rectangle",
    translation: "รูปสเหลียมผืนผ้า",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1564",
    word: "Rectangular",
    translation: "ทีมีลกัษณะเป็นสเหลียมผืนผ้า",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1565",
    word: "Red",
    translation: "สแีดง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1566",
    word: "Ruby",
    translation: "สแีดงทับทิม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1567",
    word: "Scarlet",
    translation: "สแีดงสด",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1568",
    word: "Semi-circle",
    translation: "ครึงวงกลม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1569",
    word: "Shade",
    translation: "เฉดสี / เงา",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1570",
    word: "Shiny",
    translation: "เงางาม / เป็นประกาย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1571",
    word: "Silver",
    translation: "สเีงิน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1572",
    word: "Solid",
    translation: "สพีนื / เนือแน่นทรงตัน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1573",
    word: "Sphere",
    translation: "ทรงกลม (สามมิติเชน่ลูกบอล)",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1574",
    word: "Spherical",
    translation: "ทีมีลกัษณะเป็นทรงกลม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1575",
    word: "Spiral",
    translation: "รูปเกลียว / เสนก้นหอย",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1576",
    word: "Square",
    translation: "รูปสเหลียมจัตรุัส",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1577",
    word: "Star shape",
    translation: "รูปดาว",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1578",
    word: "Straight",
    translation: "ตรง / เสนตรง้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1579",
    word: "Stripe",
    translation: "ลายทาง / ลายเสนยาว้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1580",
    word: "Striped",
    translation: "ทีมีลวดลายเป็นเสนทางยาว้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1581",
    word: "Teal",
    translation: "สเขียวอมนํีาเงิน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1582",
    word: "Texture",
    translation: "พืนผิว (ของวัสดุหรือรูปทรง)",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1583",
    word: "Tint",
    translation: "สอีอ่นทีผสมสขีาวเพิมเข้าไป",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1584",
    word: "Transparent",
    translation: "โปร่งใส / มองทะลุได้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1585",
    word: "Triangle",
    translation: "รูปสามเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1586",
    word: "Triangular",
    translation: "ทีมีลกัษณะเป็นสามเหลียม",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1587",
    word: "Turquoise",
    translation: "สฟี้าเทอร์ควอยซ์ / สฟี้าอมเขียว",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1588",
    word: "Vertical",
    translation: "แนวตัง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1589",
    word: "Violet",
    translation: "สมีว่งอมนําเงิน / สดีอกไวโอเลต",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1590",
    word: "Wave",
    translation: "เสนลอนคลื้น",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1591",
    word: "Wavy",
    translation: "ทีมีลกัษณะเป็นลอนคลืน",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1592",
    word: "White",
    translation: "สขีาว",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1593",
    word: "Yellow",
    translation: "สเีหลือง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1594",
    word: "Zigzag",
    translation: "ซกิแซก / ลายฟันปลา",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1595",
    word: "Amber",
    translation: "สอีําพัน / สเีหลืองอมสม้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1596",
    word: "Coral",
    translation: "สสีมปะการั้ง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1597",
    word: "Mint",
    translation: "สเขียวมิีนต์",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1598",
    word: "Olive",
    translation: "สเีขียวมะกอก",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1599",
    word: "Opaque",
    translation: "ทึบแสง / มองทะลุไม่ได้",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1600",
    word: "Fluorescent",
    translation: "สสีะท้อนแสงวาว / เรืองแสง",
    category: "Colors & Shapes",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1601",
    word: "Bakery",
    translation: "ขนมอบ / ร้านขนมปัง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1602",
    word: "Baked",
    translation: "ทีอบจนสุก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1603",
    word: "Beef",
    translation: "เนือวัว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1604",
    word: "Beverage",
    translation: "เครืองดืม (คําเป็นทางการ)",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1605",
    word: "Bitter",
    translation: "มีรสขม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1606",
    word: "Blend",
    translation: "ผสม / คลุกเคล้าให้เข้ากัน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1607",
    word: "Boil",
    translation: "ต้มจนเดือด / ต้ม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1608",
    word: "Boiled",
    translation: "ทีต้มสุกแล้ว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1609",
    word: "Bottle",
    translation: "ขวด",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1610",
    word: "Bread",
    translation: "ขนมปัง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1611",
    word: "Breakfast",
    translation: "อาหารเชา้",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1612",
    word: "Brunch",
    translation: "อาหารควบมือเชาและมื้อเทียง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1613",
    word: "Butter",
    translation: "เนยเหลว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1614",
    word: "Cake",
    translation: "เค้ก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1615",
    word: "Candy",
    translation: "ลูกอม / ลูกกวาด",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1616",
    word: "Canned food",
    translation: "อาหารกระป๋อง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1617",
    word: "Cheese",
    translation: "ชสี / เนยแข็ง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1618",
    word: "Chop",
    translation: "สบั (เนือหรือผัก )",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1619",
    word: "Coffee",
    translation: "กาแฟ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1620",
    word: "Condiment",
    translation: "เครืองปรุงรส (เชน่ซอสพริกไทย)Noun",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1621",
    word: "Cook",
    translation: "ปรุงอาหาร / คนครัว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1622",
    word: "Crispy",
    translation: "กรอบ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1623",
    word: "Dairy product",
    translation: "ผลิตภัณฑ์จากนม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1624",
    word: "Decaf",
    translation: "กาแฟสกัดคาเฟอีนออก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1625",
    word: "Delicious",
    translation: "อร่อย",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1626",
    word: "Diet",
    translation: "อาหารควบคุมนําหนัก / อาหารประจํ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1627",
    word: "Dinner",
    translation: "อาหารมือคํา",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1628",
    word: "Dough",
    translation: "แป้งนวด (สำหรับทำขนมปังหรือพิซ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1629",
    word: "Dresssing",
    translation: "นําสลัด",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1630",
    word: "Drink",
    translation: "ดืม / เครืองดืม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1631",
    word: "Egg",
    translation: "ไข่",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1632",
    word: "Fast food",
    translation: "อาหารจานด่วน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1633",
    word: "Ferment",
    translation: "หมัก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1634",
    word: "Flavor / Flavour",
    translation: "รสชาติ / กลินอาย",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1635",
    word: "Flour",
    translation: "แป้งทำอาหาร (เชน่แป้งสาลี )",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1636",
    word: "Food",
    translation: "อาหาร",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1637",
    word: "Fresh",
    translation: "สดใหม่",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1638",
    word: "Fried",
    translation: "ทีทอดด้วยนํามัน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1639",
    word: "Fruit",
    translation: "ผลไม้",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1640",
    word: "Fry",
    translation: "ทอด",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1641",
    word: "Garlic",
    translation: "กระเทียม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1642",
    word: "Glass",
    translation: "แก้วนํา",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1643",
    word: "Grain",
    translation: "เมล็ดธัญพืช",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1644",
    word: "Gravy",
    translation: "นําซอสเกรวี (นําราดเนือ)",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1645",
    word: "Grill",
    translation: "ย่าง (บนตะแกรง)",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1646",
    word: "Grilled",
    translation: "ทีย่างจนสุกแล้ว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1647",
    word: "Grocery",
    translation: "ของสดและของชาํทีซอเขื้าบ้าน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1648",
    word: "Honey",
    translation: "นําผึง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1649",
    word: "Hot",
    translation: "เผ็ด / ร้อน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1650",
    word: "Ice",
    translation: "นําแข็ง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1651",
    word: "Ingredient",
    translation: "ส่วนผสม / วัตถุดบิปรุงอาหาร",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1652",
    word: "Juice",
    translation: "นําผลไม้",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1653",
    word: "Leftover",
    translation: "อาหารทีเหลือจากมือก่อน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1654",
    word: "Lemon",
    translation: "มะนาวเหลือง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1655",
    word: "Lunch",
    translation: "อาหารกลางวัน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1656",
    word: "Meat",
    translation: "เนือสตัว์",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1657",
    word: "Milk",
    translation: "นม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1658",
    word: "Mix",
    translation: "ผสม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1659",
    word: "Noodle",
    translation: "ก๋วยเตียว / บะหมี",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1660",
    word: "Nutrient",
    translation: "สารอาหาร",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1661",
    word: "Nutrition",
    translation: "โภชนาการ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1662",
    word: "Oil",
    translation: "นํามันสำหรับทำอาหาร",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1663",
    word: "Onion",
    translation: "หัวหอม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1664",
    word: "Pasta",
    translation: "พาสต้า",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1665",
    word: "Pastry",
    translation: "ขนมอบประเภทพายหรือพัฟฟ์",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1666",
    word: "Pepper",
    translation: "พริกไทย / พริกหยวก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1667",
    word: "Pork",
    translation: "เนือหมู",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1668",
    word: "Poultry",
    translation: "เนือสตัว์ปีก (เชน่ไก่เป็ด)",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1669",
    word: "Raw",
    translation: "ดิบ (ยังไม่สกุ )",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1670",
    word: "Recipe",
    translation: "สูตรอาหาร",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1671",
    word: "Rice",
    translation: "ข้าว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1672",
    word: "Roast",
    translation: "อบเนือสตัว์ในเตาอบ / คัว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1673",
    word: "Salty",
    translation: "มีรสเค็ม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1674",
    word: "Sauce",
    translation: "ซอสปรุงรส",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1675",
    word: "Seafood",
    translation: "อาหารทะเล",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1676",
    word: "Seasoning",
    translation: "เครืองเทศหรือเครืองปรุงรส",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1677",
    word: "Slice",
    translation: "หันเป็นชนบางๆิ / ชนบางิ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1678",
    word: "Snack",
    translation: "ขนมขบเคียว / อาหารว่าง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1679",
    word: "Soft drink",
    translation: "นําอัดลม",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1680",
    word: "Soup",
    translation: "ซุป / นําแกง",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1681",
    word: "Sour",
    translation: "มีรสเปรียว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1682",
    word: "Soy sauce",
    translation: "ซอสถัวเหลือง / ซอีวิ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1683",
    word: "Spicy",
    translation: "มีรสเผ็ดร้อน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1684",
    word: "Steam",
    translation: "นึงด้วยไวนํา",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1685",
    word: "Steamed",
    translation: "ทีนึงจนสุกแล้ว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1686",
    word: "Stew",
    translation: "ตุน๋ / เนือเคียว",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1687",
    word: "Stir-fry",
    translation: "ผัด (ไฟแรงด้วยนํามันน้อย)",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1688",
    word: "Straw",
    translation: "หลอดดูดนํา",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1689",
    word: "Sugar",
    translation: "นําตาล",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1690",
    word: "Sweet",
    translation: "มีรสหวาน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1691",
    word: "Syrup",
    translation: "นําเชอมื",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1692",
    word: "Takeaway",
    translation: "อาหารสงกลับบ้าน",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1693",
    word: "Taste",
    translation: "ชมิรส / รสชาติ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1694",
    word: "Tasty",
    translation: "รสชาติดี / อร่อย",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1695",
    word: "Tea",
    translation: "ชา",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1696",
    word: "Vegetable",
    translation: "ผัก",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1697",
    word: "Vegetarian",
    translation: "อาหารเจ / มังสวิรัติ",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1698",
    word: "Vinegar",
    translation: "นําสมสายชู้",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1699",
    word: "Water",
    translation: "นําเปล่า",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1700",
    word: "Wine",
    translation: "ไวน์ / เหล้าองุ่น",
    category: "Food & Beverage",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1701",
    word: "Animation",
    translation: "การสร้างการ์ตนูแอนิเมชนั",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1702",
    word: "Aquarium",
    translation: "การเลียงปลาตู้ / สถานแสดงพันธุ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1703",
    word: "Arcade",
    translation: "ร้านเกมตู้ / ศูนย์เกม",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1704",
    word: "Archery",
    translation: "การยิงธนู",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1705",
    word: "Astronomy",
    translation: "ดาราศาสตร์ (การดูดาวเป็นงานอดิเ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1706",
    word: "Backpacking",
    translation: "การเทียวสะพายเป้ลุยๆ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1707",
    word: "Baking",
    translation: "การทำขนมอบ (เบเกอรี )",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1708",
    word: "Ballet",
    translation: "การเต้นบัลเลต์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1709",
    word: "Billiards",
    translation: "กีฬาสนุกเกอร์ / บิลเลียด",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1710",
    word: "Birdwatching",
    translation: "การสอ่งนก / ดูนก",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1711",
    word: "Blogging",
    translation: "การเขียนบล็อกออนไลน์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1712",
    word: "Board game",
    translation: "เกมกระดาน (เชน่เกมเศรษฐี )",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1713",
    word: "Boating",
    translation: "การล่องเรือเล่น",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1714",
    word: "Bowling",
    translation: "การโยนโบว์ลงิ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1715",
    word: "Boxing",
    translation: "การต่อยมวย",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1716",
    word: "Camping",
    translation: "การตังแคมป์ / กางเต็นท์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1717",
    word: "Card game",
    translation: "เกมไพ่",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1718",
    word: "Ceramics",
    translation: "การทำเครืองปันดินเผา / เซรามิก",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1719",
    word: "Chess",
    translation: "หมากรุก",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1720",
    word: "Cinema / Theater",
    translation: "การไปดูหนังทีโรงภาพยนตร์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1721",
    word: "Collecting",
    translation: "การสะสมของเก่า / ของเล่น",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1722",
    word: "Comic book",
    translation: "การอ่านหนังสอืการ์ตนู",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1723",
    word: "Concert",
    translation: "การไปดูคอนเสริต์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1724",
    word: "Cooking class",
    translation: "การลงเรียนทำอาหาร",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1725",
    word: "Cosplay",
    translation: "การแต่งตัวคอสเพลย์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1726",
    word: "Craft",
    translation: "งานฝีมือ / งานประดิษฐ์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1727",
    word: "Cycling",
    translation: "การปันจักรยาน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1728",
    word: "Dancing",
    translation: "การเต้นรํา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1729",
    word: "Diving",
    translation: "การดํานํา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1730",
    word: "DIY (Do It Yourself)",
    translation: "งานประดิษฐ์ทำด้วยตัวเอง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1731",
    word: "Drawing",
    translation: "การวาดเสน้ / ภาพลายเสน้",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1732",
    word: "Embroidery",
    translation: "การปักผ้า",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1733",
    word: "Entertainment",
    translation: "ความบันเทิง / สงรืินเริง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1734",
    word: "Exercise",
    translation: "การออกกําลังกาย",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1735",
    word: "Exhibition",
    translation: "การเดินชมงานนิทรรศการ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1736",
    word: "Fishing",
    translation: "การตกปลา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1737",
    word: "Fitness",
    translation: "การเล่นฟิตเนส",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1738",
    word: "Free time / Leisure",
    translation: "เวลาว่าง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1739",
    word: "Gambling",
    translation: "การเล่นพนัน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1740",
    word: "Gardening",
    translation: "การทำสวน / ปลูกต้นไม้",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1741",
    word: "Golfing",
    translation: "การเล่นกอล์ฟ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1742",
    word: "Gym",
    translation: "การเข้าโรงยิมออกกําลังกาย",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1743",
    word: "Hiking",
    translation: "การเดินป่า",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1744",
    word: "Hobby",
    translation: "งานอดิเรก",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1745",
    word: "Hunting",
    translation: "การล่าสตัว์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1746",
    word: "Ice skating",
    translation: "การเล่นไอซส์เกต",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1747",
    word: "Instrument",
    translation: "การเล่นเครืองดนตรี",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1748",
    word: "Jogging",
    translation: "การวิงจ๊อกกิง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1749",
    word: "Journaling",
    translation: "การเขียนไดอารี / บันทึกประจําวัน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1750",
    word: "Karaoke",
    translation: "การร้องเพลงคาราโอเกะ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1751",
    word: "Knitting",
    translation: "การถักไหมพรม",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1752",
    word: "Live streaming",
    translation: "การไลฟ์สดสตรีมมิง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1753",
    word: "Magazine",
    translation: "การอ่านนิตยสาร",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1754",
    word: "Magic trick",
    translation: "การเล่นมายากล",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1755",
    word: "Meditation",
    translation: "การนังสมาธิ / ทำจิตใจให้สงบ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1756",
    word: "Movie night",
    translation: "คืนดูภาพยนตร์กับครอบครัวหรือเพื",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1757",
    word: "Museum",
    translation: "การเดินเทียวพิพธิภัณฑ์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1758",
    word: "Musical",
    translation: "ละครเวทีเพลง / มิวสคิลั",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1759",
    word: "Newspaper",
    translation: "การอ่านหนังสอืพิมพ์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1760",
    word: "Origami",
    translation: "การพับกระดาษแบบญี่ปุ่น",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1761",
    word: "Painting",
    translation: "การวาดภาพระบายสี",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1762",
    word: "Pets",
    translation: "การเลียงและเล่นกับสตว์เลีัยง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1763",
    word: "Photography",
    translation: "การถ่ายภาพ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1764",
    word: "Pilates",
    translation: "การเล่นพิลาทิส",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1765",
    word: "Picnic",
    translation: "การไปปิกนิกนอกสถานที",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1766",
    word: "Podcast",
    translation: "การฟังพอดแคสต์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1767",
    word: "Poetry",
    translation: "การแต่งบทกวี",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1768",
    word: "Pottery",
    translation: "การทำเครืองปันดินเผา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1769",
    word: "Puzzle",
    translation: "เกมปริศนา / จิกซอว์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1770",
    word: "Reading",
    translation: "การอ่านหนังสอื",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1771",
    word: "Recreation",
    translation: "การพักผ่อนหย่อนใจ / สนัทนาการ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1772",
    word: "Relax",
    translation: "การผ่อนคลายความเครียด",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1773",
    word: "Running",
    translation: "การวิง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1774",
    word: "Scrapbooking",
    translation: "การทำสมุดภาพสมุดสะสม",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1775",
    word: "Shopping mall",
    translation: "การเดินเทียวห้างสรรพสนิค้า",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1776",
    word: "Sightseeing",
    translation: "การเทียวชมทิวทัศน์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1777",
    word: "Singing",
    translation: "การร้องเพลง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1778",
    word: "Skateboarding",
    translation: "การเล่นสเกตบอร์ด",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1779",
    word: "Sketching",
    translation: "การร่างภาพคร่าวๆ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1780",
    word: "Skiing",
    translation: "การเล่นสกี",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1781",
    word: "Social media",
    translation: "การเล่นโซเชยีลมีเดีย",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1782",
    word: "Souvenir",
    translation: "การเดินเลือกซอของฝากของทีืระลึ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1783",
    word: "Souvenir hunting",
    translation: "การตามหาของสะสมแปลกๆ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1784",
    word: "Sports",
    translation: "การเล่นกีฬา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1785",
    word: "Stamp collecting",
    translation: "การสะสมแสตมป์",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1786",
    word: "Surfing",
    translation: "การเล่นกระดานโต้คลืน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1787",
    word: "Swimming",
    translation: "การว่ายนํา",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1788",
    word: "Texting",
    translation: "การพิมพ์ข้อความคุยกับเพือน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1789",
    word: "Theatre / Theater",
    translation: "ละครเวที / โรงละคร",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1790",
    word: "Traveling",
    translation: "การท่องเทียวเดินทาง",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1791",
    word: "Video editing",
    translation: "การตัดต่อวิดโีอ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1792",
    word: "Video game",
    translation: "การเล่นวิดโีอเกม",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1793",
    word: "Vlog",
    translation: "การทำวิดโีอบล็อกบันทึกชวีติ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1794",
    word: "Volunteer",
    translation: "การทำงานจิตอาสา / อาสาสมัคร",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1795",
    word: "Walking",
    translation: "การเดินเล่น",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1796",
    word: "Watching TV",
    translation: "การดูทวี",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1797",
    word: "Weaving",
    translation: "การทอผ้า",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1798",
    word: "Weightlifting",
    translation: "การยกนําหนัก",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1799",
    word: "Writing",
    translation: "การเขียนหนังสอื / งานเขียน",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1800",
    word: "Yoga",
    translation: "การเล่นโยคะ",
    category: "Hobbies & Leisure",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1801",
    word: "Aircraft",
    translation: "เครืองบิน / อากาศยาน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1802",
    word: "Airplane / Plane",
    translation: "เครืองบิน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1803",
    word: "Ambulance",
    translation: "รถพยาบาล",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1804",
    word: "Anchor",
    translation: "สมอเรือ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1805",
    word: "Automobile / Auto",
    translation: "รถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1806",
    word: "Bicycle / Bike",
    translation: "จักรยาน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1807",
    word: "Boat",
    translation: "เรือขนาดเล็ก",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1808",
    word: "Brake",
    translation: "เบรก / ห้ามล้อ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1809",
    word: "Bulldozer",
    translation: "รถแทรกเตอร์ตนีตะขาบ / รถเกลียดิ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1810",
    word: "Bumper",
    translation: "กันชนรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1811",
    word: "Cabin",
    translation: "ห้องโดยสาร (ในเครืองบินหรือเรือ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1812",
    word: "Cable car",
    translation: "รถกระเชา้ / รถเคเบิล",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1813",
    word: "Canoe",
    translation: "เรือแคนู",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1814",
    word: "Car",
    translation: "รถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1815",
    word: "Caravan / Campervan",
    translation: "รถบ้าน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1816",
    word: "Carriage",
    translation: "รถม้า / ตู้โดยสารรถไฟ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1817",
    word: "Cart",
    translation: "รถเข็น / เกวียน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1818",
    word: "Chauffeur",
    translation: "คนขับรถส่วนตัว (ตําแหน่งหรู )",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1819",
    word: "Cockpit",
    translation: "ห้องนักบิน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1820",
    word: "Convertible",
    translation: "รถเปิดประทุน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1821",
    word: "Crane",
    translation: "รถเครน / ปันจัน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1822",
    word: "Cruise ship",
    translation: "เรือสำราญ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1823",
    word: "Dashboard",
    translation: "แผงหน้าปัดรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1824",
    word: "Driver",
    translation: "คนขับรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1825",
    word: "Engine",
    translation: "เครืองยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1826",
    word: "Fast train",
    translation: "รถไฟความเร็วสูง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1827",
    word: "Fender",
    translation: "บังโคลนรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1828",
    word: "Ferry",
    translation: "เรือข้ามฟาก",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1829",
    word: "Fire engine / Fire truck",
    translation: "รถดับเพลิง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1830",
    word: "Forklift",
    translation: "รถยกของในคลังสินค้า",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1831",
    word: "Freight train",
    translation: "รถไฟบรรทุกสนิค้า",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1832",
    word: "Fuel / Gas / Petrol",
    translation: "นํามันเชอเพลิืง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1833",
    word: "Garbage truck",
    translation: "รถเก็บขยะ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1834",
    word: "Gear",
    translation: "เกียร์รถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1835",
    word: "Golf cart",
    translation: "รถกอล์ฟ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1836",
    word: "GPS Navigation",
    translation: "ระบบนําทางจีพเีอส",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1837",
    word: "Handlebar",
    translation: "แฮนด์จักรยานหรือมอเตอร์ไซค์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1838",
    word: "Hatchback",
    translation: "รถยนต์ท้ายตัด (5 ประตู )",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1839",
    word: "Headlight",
    translation: "ไฟหน้ารถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1840",
    word: "Helicopter",
    translation: "เฮลิคอปเตอร์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1841",
    word: "Helmet",
    translation: "หมวกกันน็อก",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1842",
    word: "Hood / Bonnet",
    translation: "ฝากระโปรงหน้ารถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1843",
    word: "Horn",
    translation: "แตรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1844",
    word: "Hot-air balloon",
    translation: "บอลลูนลมร้อน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1845",
    word: "Hovercraft",
    translation: "เรือโฮเวอร์คราฟต์ / เรือสะเทินนําสะเทิ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1846",
    word: "Hybrid car",
    translation: "รถยนต์ระบบไฮบริด",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1847",
    word: "Ignition",
    translation: "สวิตชก์ญุแจสตาร์ทรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1848",
    word: "Indicator / Turn signal",
    translation: "ไฟเลียว",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1849",
    word: "Jet",
    translation: "เครืองบินไอพ่น",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1850",
    word: "Jet ski",
    translation: "เจ็ตสกี",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1851",
    word: "Kayak",
    translation: "เรือคายัค",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1852",
    word: "License plate",
    translation: "ป้ายทะเบียนรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1853",
    word: "Locomotive",
    translation: "หัวรถจักร",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1854",
    word: "Lorry / Truck",
    translation: "รถบรรทุก",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1855",
    word: "Minivan / Minibus",
    translation: "รถตู้ / รถบัสขนาดเล็ก",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1856",
    word: "Moped",
    translation: "รถจักรยานยนต์ขนาดเล็ก / รถป๊อปNoun",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1857",
    word: "Motorboat",
    translation: "เรือยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1858",
    word: "Motorcycle / Motorbike",
    translation: "รถจักรยานยนต์ / มอเตอร์ไซค์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1859",
    word: "Oar",
    translation: "ไม้พาย",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1860",
    word: "Odometer",
    translation: "มาตรวัดระยะทางรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1861",
    word: "Paddle",
    translation: "พาย / พายเรือ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1862",
    word: "Pedicab / Tricycle",
    translation: "รถสามล้อ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1863",
    word: "Pickup truck",
    translation: "รถกระบะ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1864",
    word: "Pilot",
    translation: "นักบิน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1865",
    word: "Propeller",
    translation: "ใบพัด (เครืองบินหรือเรือ )",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1866",
    word: "Public bus",
    translation: "รถเมล์ / รถโดยสารประจําทาง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1867",
    word: "Radiator",
    translation: "หม้อนํารถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1868",
    word: "Raft",
    translation: "แพ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1869",
    word: "Rearview mirror",
    translation: "กระจกมองหลัง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1870",
    word: "Rowboat",
    translation: "เรือพาย",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1871",
    word: "Sailboat",
    translation: "เรือใบ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1872",
    word: "Scooter",
    translation: "สกู๊ตเตอร์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1873",
    word: "Sedan",
    translation: "รถยนต์นังส่วนบุคคล (4 ประตู )",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1874",
    word: "Ship",
    translation: "เรือขนาดใหญ่ (เชน่เรือสนิค้าเรือรบ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1875",
    word: "Side mirror",
    translation: "กระจกมองข้าง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1876",
    word: "Skateboard",
    translation: "สเกตบอร์ด",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1877",
    word: "Speedboat",
    translation: "เรือเร็ว / สปีดโบ๊ท",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1878",
    word: "Speedometer",
    translation: "มาตรวัดความเร็วรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1879",
    word: "Sports car",
    translation: "รถสปอร์ต",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1880",
    word: "Steering wheel",
    translation: "พวงมาลัยรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1881",
    word: "Submarine",
    translation: "เรือดํานํา",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1882",
    word: "SUV",
    translation: "รถยนต์อเนกประสงค์ (SUV)",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1883",
    word: "Taillight",
    translation: "ไฟท้ายรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1884",
    word: "Tanker",
    translation: "เรือบรรทุกนํามัน / รถบรรทุกนํามัน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1885",
    word: "Taxi / Cab",
    translation: "รถแท็กซี",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1886",
    word: "Tire / Tyre",
    translation: "ยางรถยนต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1887",
    word: "Tractor",
    translation: "รถแทรกเตอร์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1888",
    word: "Traffic",
    translation: "การจราจร",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1889",
    word: "Train",
    translation: "รถไฟ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1890",
    word: "Tram / Streetcar",
    translation: "รถราง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1891",
    word: "Transmission",
    translation: "ระบบเกียร์ / ระบบสง่กําลัง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1892",
    word: "Truck",
    translation: "รถบรรทุกขนาดใหญ่",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1893",
    word: "Trunk / Boot",
    translation: "ทีเก็บสมัภาระท้ายรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1894",
    word: "Tugboat",
    translation: "เรือลากจูง",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1895",
    word: "Van",
    translation: "รถตู้",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1896",
    word: "Vehicle",
    translation: "ยานพาหนะ (คํารวม)",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1897",
    word: "Wheel",
    translation: "ล้อรถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1898",
    word: "Windshield / Windscreenกระจกบังลมหน",
    translation: "้ารถ",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1899",
    word: "Wiper",
    translation: "ทีปัดนําฝน",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1900",
    word: "Yacht",
    translation: "เรือยอชต์",
    category: "Vehicles & Transport",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1901",
    word: "Accessories",
    translation: "เครืองประดับ / อุปกรณ์ตกแต่ง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1902",
    word: "Apron",
    translation: "ผ้ากันเปือน",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1903",
    word: "Backpack",
    translation: "กระเป๋าเป้สะพายหลัง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1904",
    word: "Badge",
    translation: "เข็มกลัด / ตราสญัลักษณ์",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1905",
    word: "Bathrobe",
    translation: "ชุดคลุมอาบนํา",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1906",
    word: "Belt",
    translation: "เข็มขัด",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1907",
    word: "Beret",
    translation: "หมวกเบเร่ต์",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1908",
    word: "Blazer",
    translation: "เสอสูืทแบบลําลอง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1909",
    word: "Blouse",
    translation: "เสอสตรีื (มักเป็นผ้านิมมีระบาย)",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1910",
    word: "Boots",
    translation: "รองเท้าบู้ท",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1911",
    word: "Bow tie",
    translation: "หูกระต่าย (โบว์ผูกคอเสอ) ื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1912",
    word: "Bracelet",
    translation: "สร้อยข้อมือ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1913",
    word: "Bra",
    translation: "เสอชืนในสตรีั",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1914",
    word: "Brooch",
    translation: "เข็มกลัดประดับเพชรหรือพลอย",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1915",
    word: "Cap",
    translation: "หมวกแก๊ป / หมวกมีปีกด้านหน้า",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1916",
    word: "Cardigan",
    translation: "เสอไหมพรมถัืกผ่าหน้า (มีกระดุม",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1917",
    word: "Casual wear",
    translation: "เสื้อผ้าชุดลําลอง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1918",
    word: "Clothes / Clothing",
    translation: "เสื้อผ้า / เครืองนุ่งห่ม",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1919",
    word: "Coat",
    translation: "เสอโคื้ทตัวยาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1920",
    word: "Collar",
    translation: "ปกคอเสอื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1921",
    word: "Cufflinks",
    translation: "กระดุมข้อมือเสอเชืติ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1922",
    word: "Denim",
    translation: "ผ้าเดนิม / ผ้ายีนส์",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1923",
    word: "Dress",
    translation: "ชุดกระโปรงสตรีชดุยาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1924",
    word: "Dressing gown",
    translation: "ชุดคลุมยาว (ใสใ่นบ้านหลังตืนนอน",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1925",
    word: "Earrings",
    translation: "ต่างหู",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1926",
    word: "Fabric",
    translation: "ผืนผ้า / สงทอิ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1927",
    word: "Fashion",
    translation: "แฟชนั",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1928",
    word: "Flip-flops",
    translation: "รองเท้าแตะหูหนีบ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1929",
    word: "Formal wear",
    translation: "ชุดแต่งกายเป็นทางการ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1930",
    word: "Garment",
    translation: "เสื้อผ้า / เครืองแต่งกาย",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1931",
    word: "Glasses / Eyeglasses",
    translation: "แว่นตา",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1932",
    word: "Gloves",
    translation: "ถุงมือ (แบบแยกนิว)",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1933",
    word: "Gown",
    translation: "ชุดราตรียาว / ชุดครุย",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1934",
    word: "Handbag",
    translation: "กระเป๋าถือสตรี",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1935",
    word: "Handkerchief",
    translation: "ผ้าเชด็หน้า",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1936",
    word: "Hat",
    translation: "หมวก (แบบมีปีกรอบขอบ)",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1937",
    word: "High heels",
    translation: "รองเท้าสนสู้ง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1938",
    word: "Hoodie",
    translation: "เสอกัืนหนาวแบบมีหมวกคลุม",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1939",
    word: "Jacket",
    translation: "เสอแจ็กเก็ตตัวสืนั",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1940",
    word: "Jeans",
    translation: "กางเกงยีนส์",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1941",
    word: "Jewelry / Jewellery",
    translation: "เครืองเพชรพลอย / อัญมณี",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1942",
    word: "Jumper / Sweater",
    translation: "เสอแขนยาวไหมพรมื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1943",
    word: "Jumpsuit",
    translation: "ชุดเสอกางเกงติืดกัน (ชุดหมีสตรี",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1944",
    word: "Leather",
    translation: "หนังแท้ / ผลิตภัณฑ์ทำจากหนัง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1945",
    word: "Leggings",
    translation: "กางเกงรัดรูป / กางเกงเลกกิง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1946",
    word: "Lingerie",
    translation: "ชุดชนในสตรีัแบบแฟชนสวยงามั",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1947",
    word: "Loafers",
    translation: "รองเท้าคัทชูสนแบนแบบสวมง่้าย",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1948",
    word: "Mittens",
    translation: "ถุงมือแบบไม่มแียกนิว (แยกเฉพาะนิ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1949",
    word: "Necklace",
    translation: "สร้อยคอ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1950",
    word: "Necktie / Tie",
    translation: "เนคไท",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1951",
    word: "Nightdress / Nightgown",
    translation: "ชุดนอนกระโปรง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1952",
    word: "Outfit",
    translation: "ชุดเสื้อผ้าทีแต่งกายครบเซต็",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1953",
    word: "Overalls",
    translation: "กางเกงเอียมมีสายพาดไหล่",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1954",
    word: "Overcoat",
    translation: "เสอโคื้ทตัวใหญ่หนาพิเศษ (ใสท่ับช",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1955",
    word: "Pajamas / Pyjamas",
    translation: "ชุดนอน (เสอกางเกงเขื้าชุด )",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1956",
    word: "Panties / Underwear",
    translation: "กางเกงในสตรี",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1957",
    word: "Pants / Trousers",
    translation: "กางเกงขายาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1958",
    word: "Pocket",
    translation: "กระเป๋าเสอื / กระเป๋ากางเกง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1959",
    word: "Polo shirt",
    translation: "เสอโปโลื / เสอยืืดมีปกคอและกระดุ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1960",
    word: "Purse",
    translation: "กระเป๋าเงินสตรีใบเล็ก",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1961",
    word: "Raincoat",
    translation: "เสอกัืนฝน",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1962",
    word: "Ring",
    translation: "แหวน",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1963",
    word: "Robe",
    translation: "เสอคลุืมตัวยาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1964",
    word: "Sandals",
    translation: "รองเท้าแตะแบบรัดสน้",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1965",
    word: "Scarf",
    translation: "ผ้าพันคอ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1966",
    word: "Shawl",
    translation: "ผ้าคลุมไหล่",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1967",
    word: "Shorts",
    translation: "กางเกงขาสนั",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1968",
    word: "Silk",
    translation: "ผ้าไหม",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1969",
    word: "Size",
    translation: "ขนาดเสื้อผ้า",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1970",
    word: "Skirt",
    translation: "กระโปรง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1971",
    word: "Slacks",
    translation: "กางเกงขายาวลําลอง (ผ้ายืดหยุน่",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1972",
    word: "Sleeve",
    translation: "แขนเสอื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1973",
    word: "Slippers",
    translation: "รองเท้าใสเ่ดินในบ้าน",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1974",
    word: "Sneakers / Trainers",
    translation: "รองเท้าผ้าใบ / รองเท้ากีฬา",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1975",
    word: "Socks",
    translation: "ถุงเท้า",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1976",
    word: "Sportswear",
    translation: "ชุดกีฬา",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1977",
    word: "Stockings / Tights",
    translation: "ถุงน่องยาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1978",
    word: "Suit",
    translation: "ชุดสูทสากล (เสอและกางเกงเขื้าชุ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1979",
    word: "Sunglasses",
    translation: "แว่นตากันแดด",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1980",
    word: "Suspender",
    translation: "สายเอียมรังกางเกง",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1981",
    word: "Sweatpants",
    translation: "กางเกงวอร์มขายาว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1982",
    word: "Sweatshirt",
    translation: "เสื้อแขนยาวผ้านุ่ม (ไม่มหีมวก)",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1983",
    word: "Swimwear / Swimsuit",
    translation: "ชุดว่ายนํา",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1984",
    word: "T-shirt",
    translation: "เสอยืืดคอกลมคอวี",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1985",
    word: "Tailor",
    translation: "ชางตัดเส่อื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1986",
    word: "Tank top",
    translation: "เสอกลื้าม / เสอสายเดีืยว",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1987",
    word: "Textile",
    translation: "สงทอิ / วัสดุผ้า",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1988",
    word: "Thread",
    translation: "ด้าย / เสนด้าย",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1989",
    word: "Tracksuit",
    translation: "ชุดวอร์ม (เสอและกางเกง) ื",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1990",
    word: "Tunic",
    translation: "เสอตัืวยาวคลุมสะโพก",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1991",
    word: "Tuxedo",
    translation: "ชุดทักซโิด้ (ชุดราตรีสโมสรสำหรับ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1992",
    word: "Umbrella",
    translation: "ร่ม",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1993",
    word: "Underwear",
    translation: "ชุดชนในั (ชาย-หญิง )",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1994",
    word: "Uniform",
    translation: "ชุดเครืองแบบ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1995",
    word: "Vest / Waistcoat",
    translation: "เสอกัืก",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1996",
    word: "Wallet",
    translation: "กระเป๋าเงินพกพา (มักพับได้สำหรับนาฬิกาข้อมือ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1997",
    word: "Watch / Wristwatch",
    translation: "",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1998",
    word: "Wool",
    translation: "ผ้าขนสตัว์ / ไหมพรมขนแกะ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-1999",
    word: "Woolen",
    translation: "ทีทำจากขนสตัว์",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  },
  {
    id: "pdf-2000",
    word: "Zipper / Zip",
    translation: "ซปิ",
    category: "Clothing & Accessories",
    ipa: "",
    sentence: "",
    sentenceTranslation: ""
  }
];