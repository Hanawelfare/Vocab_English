const DEFAULT_VOCABULARY = [
    {
        "id":  "anim-001",
        "word":  "chameleon",
        "translation":  "กิ้งก่าเปลี่ยนสี",
        "category":  "Animals (สัตว์)",
        "ipa":  "/kəˈmiː.li.ən/",
        "sentence":  "The chameleon changed its color to blend in with the green leaves.",
        "sentenceTranslation":  "กิ้งก่าเปลี่ยนสีผิวของมันเพื่อให้กลมกลืนกับใบไม้สีเขียว"
    },
    {
        "id":  "anim-002",
        "word":  "dolphin",
        "translation":  "โลมา",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈdɒl.fɪn/",
        "sentence":  "Dolphins are known for their high intelligence and playful behavior.",
        "sentenceTranslation":  "โลมาเป็นที่รู้จักในเรื่องของสติปัญญาที่สูงและพฤติกรรมที่รักสนุก"
    },
    {
        "id":  "anim-003",
        "word":  "squirrel",
        "translation":  "กระรอก",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈskwɪr.əl/",
        "sentence":  "The squirrel gathered nuts and hid them in the tree for winter.",
        "sentenceTranslation":  "กระรอกรวบรวมลูกนัทและซ่อนมันไว้ในต้นไม้เพื่อเตรียมสำหรับฤดูหนาว"
    },
    {
        "id":  "anim-004",
        "word":  "cheetah",
        "translation":  "เสือชีตาห์",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈtʃiː.tə/",
        "sentence":  "The cheetah is the fastest land animal in the world.",
        "sentenceTranslation":  "เสือชีตาห์เป็นสัตว์บกที่วิ่งเร็วที่สุดในโลก"
    },
    {
        "id":  "anim-005",
        "word":  "ostrich",
        "translation":  "นกกระจอกเทศ",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈɒs.trɪtʃ/",
        "sentence":  "An ostrich cannot fly, but it can run incredibly fast.",
        "sentenceTranslation":  "นกกระจอกเทศบินไม่ได้ แต่สามารถวิ่งได้เร็วอย่างเหลือเชื่อ"
    },
    {
        "id":  "anim-006",
        "word":  "kangaroo",
        "translation":  "จิงโจ้",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˌkæŋ.ɡərˈuː/",
        "sentence":  "A female kangaroo carries her baby in a pouch on her belly.",
        "sentenceTranslation":  "จิงโจ้ตัวเมียอุ้มลูกของมันไว้ในกระเป๋าหน้าท้อง"
    },
    {
        "id":  "anim-007",
        "word":  "octopus",
        "translation":  "ปลาหมึกยักษ์",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈɒk.tə.pəs/",
        "sentence":  "An octopus has three hearts and blue blood.",
        "sentenceTranslation":  "ปลาหมึกยักษ์มีหัวใจสามดวงและมีเลือดสีน้ำเงิน"
    },
    {
        "id":  "anim-008",
        "word":  "eagle",
        "translation":  "นกอินทรี",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈiː.ɡəl/",
        "sentence":  "The eagle soared high above the mountains searching for prey.",
        "sentenceTranslation":  "นกอินทรีบินร่อนอยู่สูงเหนือภูเขาเพื่อค้นหาเหยื่อ"
    },
    {
        "id":  "anim-009",
        "word":  "jellyfish",
        "translation":  "แมงกะพรุน",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈdʒel.i.fɪʃ/",
        "sentence":  "Some jellyfish glow in the dark ocean using bioluminescence.",
        "sentenceTranslation":  "แมงกะพรุนบางชนิดเรืองแสงในมหาสมุทรที่มืดมิดโดยใช้การเรืองแสงทางชีวภาพ"
    },
    {
        "id":  "anim-010",
        "word":  "peacock",
        "translation":  "นกยูงตัวผู้",
        "category":  "Animals (สัตว์)",
        "ipa":  "/ˈpiː.kɒk/",
        "sentence":  "The male peacock spread its colorful feathers to attract a mate.",
        "sentenceTranslation":  "นกยูงตัวผู้รำแพนขนหางที่มีสีสันสวยงามเพื่อดึงดูดคู่"
    },
    {
        "id":  "house-001",
        "word":  "refrigerator",
        "translation":  "ตู้เย็น",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/rɪˈfrɪdʒ.ə.reɪ.tər/",
        "sentence":  "Please put the milk back into the refrigerator so it doesn\u0027t spoil.",
        "sentenceTranslation":  "กรุณานำนมกลับไปใส่ในตู้เย็นเพื่อไม่ให้มันบูด"
    },
    {
        "id":  "house-002",
        "word":  "microwave",
        "translation":  "เตาไมโครเวฟ",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈmaɪ.krə.weɪv/",
        "sentence":  "I heated up the leftover pizza in the microwave for lunch.",
        "sentenceTranslation":  "ฉันอุ่นพิซซ่าที่เหลือในเตาไมโครเวฟสำหรับอาหารกลางวัน"
    },
    {
        "id":  "house-003",
        "word":  "wardrobe",
        "translation":  "ตู้เสื้อผ้า",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈwɔː.drəʊb/",
        "sentence":  "She hung her new winter coat inside the wardrobe.",
        "sentenceTranslation":  "เธอแขวนเสื้อโค้ทกันหนาวตัวใหม่ไว้ในตู้เสื้อผ้า"
    },
    {
        "id":  "house-004",
        "word":  "blanket",
        "translation":  "ผ้าห่ม",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈblæŋ.kɪt/",
        "sentence":  "It was freezing tonight, so I grabbed an extra blanket.",
        "sentenceTranslation":  "คืนนี้อากาศหนาวจัด ฉันจึงหยิบผ้าห่มเพิ่มอีกผืน"
    },
    {
        "id":  "house-005",
        "word":  "kettle",
        "translation":  "กาต้มน้ำ",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈket.əl/",
        "sentence":  "The kettle is boiling, so we can make some hot tea now.",
        "sentenceTranslation":  "กาต้มน้ำเดือดแล้ว ตอนนี้เราสามารถชงชาร้อนได้แล้ว"
    },
    {
        "id":  "house-006",
        "word":  "vacuum cleaner",
        "translation":  "เครื่องดูดฝุ่น",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈvæk.juːm ˌkliː.nər/",
        "sentence":  "Use the vacuum cleaner to clean the dust off the living room carpet.",
        "sentenceTranslation":  "ใช้เครื่องดูดฝุ่นทำความสะอาดฝุ่นออกจากพรมในห้องนั่งเล่น"
    },
    {
        "id":  "house-007",
        "word":  "toaster",
        "translation":  "เครื่องปิ้งขนมปัง",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈtəʊ.stər/",
        "sentence":  "He put two slices of bread into the toaster for breakfast.",
        "sentenceTranslation":  "เขาใส่ขนมปังสองแผ่นลงในเครื่องปิ้งขนมปังสำหรับอาหารเช้า"
    },
    {
        "id":  "house-008",
        "word":  "pillowcase",
        "translation":  "ปลอกหมอน",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈpɪl.əʊ.keɪs/",
        "sentence":  "I wash the pillowcases every week to keep them clean and fresh.",
        "sentenceTranslation":  "ฉันซักปลอกหมอนทุกสัปดาห์เพื่อให้พวกมันสะอาดและสดชื่น"
    },
    {
        "id":  "house-009",
        "word":  "curtain",
        "translation":  "ผ้าม่าน",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈkɜː.tən/",
        "sentence":  "She pulled the curtains open to let the warm sunlight in.",
        "sentenceTranslation":  "เธอเปิดผ้าม่านออกเพื่อให้แสงแดดอุ่นๆ ส่องเข้ามา"
    },
    {
        "id":  "house-010",
        "word":  "cushion",
        "translation":  "หมอนอิง",
        "category":  "Household (เครื่องใช้ในบ้าน)",
        "ipa":  "/ˈkʊʃ.ən/",
        "sentence":  "This sofa would be more comfortable with a soft cushion behind my back.",
        "sentenceTranslation":  "โซฟานี้จะนั่งสบายกว่านี้ถ้ามีหมอนอิงนุ่มๆ หนุนหลังฉันไว้"
    },
    {
        "id":  "food-001",
        "word":  "beverage",
        "translation":  "เครื่องดื่ม",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ˈbev.ər.ɪdʒ/",
        "sentence":  "Water is the healthiest beverage to stay hydrated.",
        "sentenceTranslation":  "น้ำดื่มเป็นเครื่องดื่มที่ดีต่อสุขภาพที่สุดในการรักษาความชุ่มชื้นของร่างกาย"
    },
    {
        "id":  "food-002",
        "word":  "ingredient",
        "translation":  "ส่วนผสม",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ɪnˈɡriː.di.ənt/",
        "sentence":  "Fresh herbs are the key ingredient in this delicious pasta sauce.",
        "sentenceTranslation":  "สมุนไพรสดเป็นส่วนผสมหลักในซอสพาสต้าที่อร่อยนี้"
    },
    {
        "id":  "food-003",
        "word":  "delicious",
        "translation":  "อร่อย",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/dɪˈlɪʃ.əs/",
        "sentence":  "My grandmother cooked a delicious dinner for my birthday.",
        "sentenceTranslation":  "คุณยายของฉันทำอาหารค่ำแสนอร่อยสำหรับวันเกิดของฉัน"
    },
    {
        "id":  "food-004",
        "word":  "spicy",
        "translation":  "เผ็ด",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ˈspaɪ.si/",
        "sentence":  "Tom Yum Goong is a famous spicy Thai soup.",
        "sentenceTranslation":  "ต้มยำกุ้งเป็นแกงเผ็ดไทยที่มีชื่อเสียง"
    },
    {
        "id":  "food-005",
        "word":  "dessert",
        "translation":  "ของหวาน",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/dɪˈzɜːt/",
        "sentence":  "We had mango sticky rice as dessert after the main course.",
        "sentenceTranslation":  "พวกเราทานข้าวเหนียวมะม่วงเป็นของหวานหลังจากอาหารจานหลัก"
    },
    {
        "id":  "food-006",
        "word":  "cinnamon",
        "translation":  "อบเชย",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ˈsɪn.ə.mən/",
        "sentence":  "She sprinkled some cinnamon on top of her warm cappuccino.",
        "sentenceTranslation":  "เธอโรยผงอบเชยลงบนคาปูชิโน่อุ่นๆ ของเธอ"
    },
    {
        "id":  "food-007",
        "word":  "recipe",
        "translation":  "สูตรอาหาร",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ˈres.ɪ.pi/",
        "sentence":  "I followed the recipe exactly, and the cake turned out perfect.",
        "sentenceTranslation":  "ฉันทำตามสูตรอาหารทุกประการ และเค้กก็ออกมาสมบูรณ์แบบ"
    },
    {
        "id":  "food-008",
        "word":  "nutritious",
        "translation":  "ซึ่งมีคุณค่าทางโภชนาการ",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/njuːˈtrɪʃ.əs/",
        "sentence":  "Spinach is highly nutritious and loaded with vitamins.",
        "sentenceTranslation":  "ผักโขมมีคุณค่าทางโภชนาการสูงและอุดมไปด้วยวิตามิน"
    },
    {
        "id":  "food-009",
        "word":  "appetizer",
        "translation":  "อาหารเรียกน้ำย่อย",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/ˈæp.ə.taɪ.zər/",
        "sentence":  "We ordered garlic bread as an appetizer before our main dishes arrived.",
        "sentenceTranslation":  "พวกเราสั่งขนมปังกระเทียมเป็นอาหารเรียกน้ำย่อยก่อนที่จานหลักจะมาถึง"
    },
    {
        "id":  "food-010",
        "word":  "sour",
        "translation":  "เปรี้ยว",
        "category":  "Food \u0026 Drinks (อาหารและเครื่องดื่ม)",
        "ipa":  "/saʊər/",
        "sentence":  "Lemons have a very sour taste because they contain citric acid.",
        "sentenceTranslation":  "มะนาวมีรสเปรี้ยวมากเพราะมีกรดซิตริก"
    },
    {
        "id":  "verb-001",
        "word":  "accomplish",
        "translation":  "ทำสำเร็จ",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/əˈkʌm.plɪʃ/",
        "sentence":  "If we work together, we can accomplish our goal much faster.",
        "sentenceTranslation":  "หากพวกเราร่วมมือกัน เราจะสามารถทำเป้าหมายให้สำเร็จได้เร็วขึ้นมาก"
    },
    {
        "id":  "verb-002",
        "word":  "wander",
        "translation":  "เดินเตร็ดเตร่ / ท่องเที่ยวไป",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ˈwɒn.dər/",
        "sentence":  "We had no map, so we decided to wander around the old city streets.",
        "sentenceTranslation":  "พวกเราไม่มีแผนที่ จึงตัดสินใจเดินเตร็ดเตร่ไปตามถนนในเมืองเก่า"
    },
    {
        "id":  "verb-003",
        "word":  "observe",
        "translation":  "สังเกต",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/əbˈzɜːv/",
        "sentence":  "Scientists observe animal behavior to learn how they adapt.",
        "sentenceTranslation":  "นักวิทยาศาสตร์สังเกตพฤทีการรมสัตว์เพื่อเรียนรู้วิธีที่พวกมันปรับตัว"
    },
    {
        "id":  "verb-004",
        "word":  "postpone",
        "translation":  "เลื่อนเวลาออกไป",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/pəʊstˈpəʊn/",
        "sentence":  "The match was postponed due to heavy rain and storms.",
        "sentenceTranslation":  "การแข่งขันถูกเลื่อนออกไปเนื่องจากฝนตกหนักและพายุ"
    },
    {
        "id":  "verb-005",
        "word":  "exaggerate",
        "translation":  "พูดเกินจริง",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ɪɡˈzædʒ.ə.reɪt/",
        "sentence":  "Don\u0027t exaggerate; the fish you caught was not that big!",
        "sentenceTranslation":  "อย่าพูดเกินจริงไปหน่อยเลย ปลาที่คุณจับได้มันไม่ได้ตัวใหญ่ขนาดนั้นสักหน่อย!"
    },
    {
        "id":  "verb-006",
        "word":  "flourish",
        "translation":  "เจริญรุ่งเรือง / งอกงาม",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ˈflʌr.ɪʃ/",
        "sentence":  "With regular watering and sunlight, the plants began to flourish.",
        "sentenceTranslation":  "ด้วยการรดน้ำและแสงแดดที่สม่ำเสมอ พืชพรรณต่างๆ ก็เริ่มเจริญงอกงาม"
    },
    {
        "id":  "verb-007",
        "word":  "investigate",
        "translation":  "สืบสวน / ตรวจสอบ",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ɪnˈves.tɪ.ɡeɪt/",
        "sentence":  "The police are trying to investigate the cause of the accident.",
        "sentenceTranslation":  "ตำรวจกำลังพยายามสืบสวนหาสาเหตุของอุบัติเหตุ"
    },
    {
        "id":  "verb-008",
        "word":  "memorize",
        "translation":  "จดจำ / ท่องจำ",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ˈmem.ə.raɪz/",
        "sentence":  "It took me three days to memorize all the lyrics to this song.",
        "sentenceTranslation":  "ฉันใช้เวลาสามวันในการท่องจำเนื้อเพลงทั้งหมดของเพลงนี้"
    },
    {
        "id":  "verb-009",
        "word":  "encourage",
        "translation":  "สนับสนุน / ให้กำลังใจ",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/ɪnˈkʌr.ɪdʒ/",
        "sentence":  "My parents always encourage me to pursue my dreams.",
        "sentenceTranslation":  "พ่อแม่มักจะสนับสนุนและให้กำลังใจฉันในการทำตามความฝันเสมอ"
    },
    {
        "id":  "verb-010",
        "word":  "negotiate",
        "translation":  "เจรจาต่อรอง",
        "category":  "Verbs (คำกริยา)",
        "ipa":  "/nəˈɡəʊ.ʃi.eɪt/",
        "sentence":  "We managed to negotiate a lower price for the second-hand car.",
        "sentenceTranslation":  "พวกเราเจรจาต่อรองราคาที่ถูกลงสำหรับรถยนต์มือสองได้สำเร็จ"
    },
    {
        "id":  "gen-001",
        "word":  "significant",
        "translation":  "สำคัญอย่างยิ่ง / มีนัยสำคัญ",
        "category":  "General (ทั่วไป)",
        "ipa":  "/sɪɡˈnɪf.ɪ.kənt/",
        "sentence":  "There was a significant improvement in his test scores after studying.",
        "sentenceTranslation":  "คะแนนสอบของเขามีการพัฒนาขึ้นอย่างมีนัยสำคัญหลังจากที่ตั้งใจเรียน"
    },
    {
        "id":  "gen-002",
        "word":  "evaluate",
        "translation":  "ประเมินผล",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ɪˈvæl.ju.eɪt/",
        "sentence":  "Teachers evaluate students based on their projects and participation.",
        "sentenceTranslation":  "คุณครูประเมินผลนักเรียนจากชิ้นงานการทำโครงงานและการมีส่วนร่วมของพวกเขา"
    },
    {
        "id":  "gen-003",
        "word":  "analyze",
        "translation":  "วิเคราะห์",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ˈæn.əl.aɪz/",
        "sentence":  "The software is designed to analyze complex financial data.",
        "sentenceTranslation":  "ซอฟต์แวร์นี้ถูกออกแบบมาเพื่อวิเคราะห์ข้อมูลทางการเงินที่ซับซ้อน"
    },
    {
        "id":  "gen-004",
        "word":  "hypothesis",
        "translation":  "สมมติฐาน",
        "category":  "General (ทั่วไป)",
        "ipa":  "/haɪˈpɒθ.ə.sɪs/",
        "sentence":  "The scientist conducted experiments to test her scientific hypothesis.",
        "sentenceTranslation":  "นักวิทยาศาสตร์ได้ทำการทดลองเพื่อทดสอบสมมติฐานทางวิทยาศาสตร์ของเธอ"
    },
    {
        "id":  "gen-005",
        "word":  "consequence",
        "translation":  "ผลที่ตามมา",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ˈkɒn.sɪ.kwəns/",
        "sentence":  "Global warming is a direct consequence of carbon dioxide emissions.",
        "sentenceTranslation":  "ภาวะโลกร้อนเป็นผลลัพธ์โดยตรงจากการปล่อยก๊าซคาร์บอนไดออกไซด์"
    },
    {
        "id":  "gen-006",
        "word":  "alternative",
        "translation":  "ทางเลือก",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ɒlˈtɜː.nə.tɪv/",
        "sentence":  "Solar energy is an eco-friendly alternative to fossil fuels.",
        "sentenceTranslation":  "พลังงานแสงอาทิตย์เป็นทางเลือกที่เป็นมิตรต่อสิ่งแวดล้อมแทนเชื้อเพลิงฟอสซิล"
    },
    {
        "id":  "gen-007",
        "word":  "evidence",
        "translation":  "หลักฐาน",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ˈev.ɪ.dəns/",
        "sentence":  "There is clear evidence that regular exercise improves heart health.",
        "sentenceTranslation":  "มีหลักฐานที่ชัดเจนว่าการออกกำลังกายอย่างสม่ำเสมอช่วยให้สุขภาพหัวใจดีขึ้น"
    },
    {
        "id":  "gen-008",
        "word":  "ambiguous",
        "translation":  "ก้ำกึ่ง / คลุมเครือ",
        "category":  "General (ทั่วไป)",
        "ipa":  "/æmˈbɪɡ.ju.əs/",
        "sentence":  "The instructions were ambiguous, leading to confusion among the team.",
        "sentenceTranslation":  "คำแนะนำนั้นคลุมเครือและก้ำกึ่ง ทำให้เกิดความสับสนในทีม"
    },
    {
        "id":  "gen-009",
        "word":  "persistent",
        "translation":  "ดื้อรั้น / ตื๊อ / อย่างต่อเนื่อง",
        "category":  "General (ทั่วไป)",
        "ipa":  "/pəˈsɪs.tənt/",
        "sentence":  "Thanks to his persistent efforts, he finally passed the driving test.",
        "sentenceTranslation":  "ด้วยความพยายามอย่างต่อเนื่องและไม่ย่อท้อของเขา ในที่สุดเขาก็ผ่านการทดสอบขับรถ"
    },
    {
        "id":  "gen-010",
        "word":  "vulnerable",
        "translation":  "อ่อนแอ / เสี่ยงต่ออันตราย / เปราะบาง",
        "category":  "General (ทั่วไป)",
        "ipa":  "/ˈvʌl.nər.ə.bəl/",
        "sentence":  "Young children and elderly people are more vulnerable to winter flu.",
        "sentenceTranslation":  "เด็กเล็กและผู้สูงอายุเป็นกลุ่มที่เปราะบางและเสี่ยงต่อการเป็นไข้หวัดใหญ่ในฤดูหนาวได้ง่ายขึ้น"
    },
    {
        "id":  "pdf-1",
        "word":  "Accept",
        "translation":  "ยอมรับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əkˈsɛpt/",
        "sentence":  "Please accept my apology.",
        "sentenceTranslation":  "กรุณายอมรับคำขอโทษของฉันด้วย"
    },
    {
        "id":  "pdf-2",
        "word":  "Acknowledge",
        "translation":  "รับทราบ / แจ้งว่าได้รับแล้ว",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əkˈnɒlɪdʒ/",
        "sentence":  "He acknowledged receipt of the email.",
        "sentenceTranslation":  "เขารับทราบการได้รับอีเมลแล้ว"
    },
    {
        "id":  "pdf-3",
        "word":  "Address",
        "translation":  "จัดการกับปัญหา / จ่าหน้าซอง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈdrɛs/",
        "sentence":  "We need to address this issue immediately.",
        "sentenceTranslation":  "เราต้องจัดการปัญหานี้ทันที"
    },
    {
        "id":  "pdf-4",
        "word":  "Advise",
        "translation":  "แนะนำ / แจ้งให้ทราบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ədˈvaɪz/",
        "sentence":  "I would advise you to speak with a lawyer.",
        "sentenceTranslation":  "ฉันจะแนะนำให้คุณปรึกษาทนายความ"
    },
    {
        "id":  "pdf-5",
        "word":  "Agenda",
        "translation":  "วาระการประชุม",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈdʒɛndə/",
        "sentence":  "What is on the agenda for today\u0027s meeting?",
        "sentenceTranslation":  "วาระการประชุมสำหรับวันนี้มีอะไรบ้าง?"
    },
    {
        "id":  "pdf-6",
        "word":  "Apologize",
        "translation":  "ขออภัย / ขอโทษ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈpɒlədʒaɪz/",
        "sentence":  "I apologize for the delay.",
        "sentenceTranslation":  "ฉันขอโทษสำหรับความล่าช้า"
    },
    {
        "id":  "pdf-7",
        "word":  "Application",
        "translation":  "การสมัครงาน / โปรแกรม",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌæplɪˈkeɪʃən/",
        "sentence":  "Please fill out the application form.",
        "sentenceTranslation":  "กรุณากรอกใบสมัคร"
    },
    {
        "id":  "pdf-8",
        "word":  "Appointment",
        "translation":  "การนัดหมาย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈpɔɪntmənt/",
        "sentence":  "I have an appointment with the doctor.",
        "sentenceTranslation":  "ฉันมีนัดกับหมอ"
    },
    {
        "id":  "pdf-9",
        "word":  "Appreciate",
        "translation":  "ซาบซึ้ง / ขอบคุณ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈpriːʃieɪt/",
        "sentence":  "I appreciate your help.",
        "sentenceTranslation":  "ฉันซาบซึ้งในความช่วยเหลือของคุณ"
    },
    {
        "id":  "pdf-10",
        "word":  "Approval",
        "translation":  "การอนุมัติ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈpruːvəl/",
        "sentence":  "We need management\u0027s approval for this project.",
        "sentenceTranslation":  "เราต้องการการอนุมัติจากผู้บริหารสำหรับโครงการนี้"
    },
    {
        "id":  "pdf-11",
        "word":  "Approve",
        "translation":  "อนุมัติ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈpruːv/",
        "sentence":  "The manager approved the budget.",
        "sentenceTranslation":  "ผู้จัดการอนุมัติงบประมาณแล้ว"
    },
    {
        "id":  "pdf-12",
        "word":  "Arrangement",
        "translation":  "การจัดการ / การเตรียมการ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈreɪndʒmənt/",
        "sentence":  "The travel arrangements have been made.",
        "sentenceTranslation":  "การเตรียมการเดินทางได้ดำเนินการแล้ว"
    },
    {
        "id":  "pdf-13",
        "word":  "As per",
        "translation":  "ตามที่... / ตามระบุ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/æz pɜːr/",
        "sentence":  "As per our discussion, I have sent the report.",
        "sentenceTranslation":  "ตามที่เราได้หารือกัน ฉันได้ส่งรายงานไปแล้ว"
    },
    {
        "id":  "pdf-14",
        "word":  "Assure",
        "translation":  "ให้ความมั่นใจ / ยืนยัน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈʃʊər/",
        "sentence":  "I assure you that it will be fine.",
        "sentenceTranslation":  "ฉันรับรองว่ามันจะเรียบร้อยดี"
    },
    {
        "id":  "pdf-15",
        "word":  "Attach",
        "translation":  "แนบ (ไฟล์หรือเอกสาร)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈtætʃ/",
        "sentence":  "Please attach your resume to the email.",
        "sentenceTranslation":  "กรุณาแนบเรซูเม่ของคุณไปกับอีเมล"
    },
    {
        "id":  "pdf-16",
        "word":  "Attachment",
        "translation":  "ไฟล์แนบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈtætʃmənt/",
        "sentence":  "I forgot to include the attachment.",
        "sentenceTranslation":  "ฉันลืมแนบเอกสารไป"
    },
    {
        "id":  "pdf-17",
        "word":  "Available",
        "translation":  "ว่าง / สะดวก / มีอยู่",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈveɪləbəl/",
        "sentence":  "Are you available for a meeting tomorrow?",
        "sentenceTranslation":  "พรุ่งนี้คุณว่างสำหรับการประชุมไหม?"
    },
    {
        "id":  "pdf-18",
        "word":  "Avoid",
        "translation":  "หลีกเลี่ยง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əˈvɔɪd/",
        "sentence":  "Try to avoid unnecessary expenses.",
        "sentenceTranslation":  "พยายามหลีกเลี่ยงค่าใช้จ่ายที่ไม่จำเป็น"
    },
    {
        "id":  "pdf-19",
        "word":  "Basic",
        "translation":  "พื้นฐาน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈbeɪsɪk/",
        "sentence":  "These are the basic principles.",
        "sentenceTranslation":  "นี่คือหลักการพื้นฐาน"
    },
    {
        "id":  "pdf-20",
        "word":  "Brief",
        "translation":  "สรุปสั้นๆ / ย่อ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/briːf/",
        "sentence":  "Can you give me a brief summary?",
        "sentenceTranslation":  "คุณช่วยสรุปสั้นๆ ให้ฉันได้ไหม?"
    },
    {
        "id":  "pdf-21",
        "word":  "Broadcast",
        "translation":  "กระจายข่าว / ออกอากาศ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027brɔːdˌkæst/",
        "sentence":  "The news station will broadcast live from the event.",
        "sentenceTranslation":  "สถานีข่าวจะถ่ายทอดสดจากงาน"
    },
    {
        "id":  "pdf-22",
        "word":  "Business",
        "translation":  "ธุรกิจ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027bɪznɪs/",
        "sentence":  "He started his own business last year.",
        "sentenceTranslation":  "เขาเริ่มต้นธุรกิจของตัวเองเมื่อปีที่แล้ว"
    },
    {
        "id":  "pdf-23",
        "word":  "Cc (Carbon copy)",
        "translation":  "สำเนาถึง (ในการส่งเมล)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌsiː \u0027siː/",
        "sentence":  "Please make sure to Cc your manager on this email.",
        "sentenceTranslation":  "โปรดส่งสำเนาถึงผู้จัดการของคุณในอีเมลนี้ด้วย"
    },
    {
        "id":  "pdf-24",
        "word":  "Clarify",
        "translation":  "ชี้แจง / ทำให้กระจ่าง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027klærɪfaɪ/",
        "sentence":  "Could you please clarify what you mean?",
        "sentenceTranslation":  "คุณช่วยอธิบายให้ชัดเจนหน่อยได้ไหมว่าคุณหมายถึงอะไร"
    },
    {
        "id":  "pdf-25",
        "word":  "Close",
        "translation":  "ปิด / สรุปจบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kloʊz/",
        "sentence":  "Let\u0027s close this meeting by reviewing our action items.",
        "sentenceTranslation":  "มาปิดการประชุมนี้ด้วยการทบทวนรายการปฏิบัติของเรากันเถอะ"
    },
    {
        "id":  "pdf-26",
        "word":  "Collaborate",
        "translation":  "ร่วมมือกันทำงาน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kə\u0027læbəˌreɪt/",
        "sentence":  "We need to collaborate with other departments on this project.",
        "sentenceTranslation":  "เราต้องร่วมมือกับแผนกอื่น ๆ ในโครงการนี้"
    },
    {
        "id":  "pdf-27",
        "word":  "Communication",
        "translation":  "การสื่อสาร",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kəˌmjuːnɪ\u0027keɪʃən/",
        "sentence":  "Effective communication is key to team success.",
        "sentenceTranslation":  "การสื่อสารที่มีประสิทธิภาพเป็นกุญแจสู่ความสำเร็จของทีม"
    },
    {
        "id":  "pdf-28",
        "word":  "Concise",
        "translation":  "กระชับ / ได้ใจความ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kən\u0027saɪs/",
        "sentence":  "Please keep your report concise and to the point.",
        "sentenceTranslation":  "โปรดทำให้รายงานของคุณกระชับและตรงประเด็น"
    },
    {
        "id":  "pdf-29",
        "word":  "Confidential",
        "translation":  "เป็นความลับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌkɒnfɪ\u0027denʃəl/",
        "sentence":  "This document contains confidential information.",
        "sentenceTranslation":  "เอกสารนี้มีข้อมูลที่เป็นความลับ"
    },
    {
        "id":  "pdf-30",
        "word":  "Confirm",
        "translation":  "ยืนยัน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kən\u0027fɜːrm/",
        "sentence":  "Please confirm your attendance by Friday.",
        "sentenceTranslation":  "โปรดยืนยันการเข้าร่วมของคุณภายในวันศุกร์"
    },
    {
        "id":  "pdf-31",
        "word":  "Confirmation",
        "translation":  "การยืนยัน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌkɒnfɜːr\u0027meɪʃən/",
        "sentence":  "We received your confirmation for the flight.",
        "sentenceTranslation":  "เราได้รับการยืนยันการจองเที่ยวบินของคุณแล้ว"
    },
    {
        "id":  "pdf-32",
        "word":  "Connection",
        "translation":  "การเชื่อมต่อ / สายสัมพันธ์",
        "category":  "Email \u0026 Communication",
        "ipa":  "/kə\u0027nekʃən/",
        "sentence":  "The internet connection is very slow today.",
        "sentenceTranslation":  "การเชื่อมต่ออินเทอร์เน็ตช้ามากในวันนี้"
    },
    {
        "id":  "pdf-33",
        "word":  "Contact",
        "translation":  "ติดต่อ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027kɒntækt/",
        "sentence":  "You can contact me by email or phone.",
        "sentenceTranslation":  "คุณสามารถติดต่อฉันได้ทางอีเมลหรือโทรศัพท์"
    },
    {
        "id":  "pdf-34",
        "word":  "Coordinate",
        "translation":  "ประสานงาน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/koʊ\u0027ɔːrdɪneɪt/",
        "sentence":  "We need to coordinate our schedules for the meeting.",
        "sentenceTranslation":  "เราต้องประสานงานตารางเวลาของเราสำหรับการประชุม"
    },
    {
        "id":  "pdf-35",
        "word":  "Correspondence",
        "translation":  "การติดต่อทางจดหมาย/อีเมล",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌkɒrɪ\u0027spɒndəns/",
        "sentence":  "All correspondence should be sent to this address.",
        "sentenceTranslation":  "เอกสารโต้ตอบทั้งหมดควรส่งมาที่ที่อยู่นี้"
    },
    {
        "id":  "pdf-36",
        "word":  "Deadline",
        "translation":  "กำหนดเวลาส่งงาน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027dedˌlaɪn/",
        "sentence":  "The deadline for submitting the report is next Friday.",
        "sentenceTranslation":  "กำหนดส่งรายงานคือวันศุกร์หน้า"
    },
    {
        "id":  "pdf-37",
        "word":  "Delay",
        "translation":  "ล่าช้า / เลื่อนออกไป",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪ\u0027leɪ/",
        "sentence":  "We had to delay the launch due to technical issues.",
        "sentenceTranslation":  "เราต้องเลื่อนการเปิดตัวออกไปเนื่องจากปัญหาทางเทคนิค"
    },
    {
        "id":  "pdf-38",
        "word":  "Deliver",
        "translation":  "ส่งมอบ (งาน/สิ่งของ)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪ\u0027lɪvər/",
        "sentence":  "The courier will deliver the package tomorrow.",
        "sentenceTranslation":  "ผู้จัดส่งจะนำพัสดุมาส่งให้ในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-39",
        "word":  "Delivery",
        "translation":  "การส่งมอบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪ\u0027lɪvəri/",
        "sentence":  "We offer free delivery on all orders over 500 baht.",
        "sentenceTranslation":  "เราบริการจัดส่งฟรีสำหรับทุกคำสั่งซื้อที่เกิน 500 บาท"
    },
    {
        "id":  "pdf-40",
        "word":  "Detail",
        "translation":  "รายละเอียด",
        "category":  "Email \u0026 Communication",
        "ipa":  "/\u0027diːteɪl/",
        "sentence":  "Please provide more details about your proposal.",
        "sentenceTranslation":  "โปรดให้รายละเอียดเพิ่มเติมเกี่ยวกับข้อเสนอของคุณ"
    },
    {
        "id":  "pdf-41",
        "word":  "Direct",
        "translation":  "โดยตรง / ชี้ทาง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dəˈrɛkt/",
        "sentence":  "Please direct all questions to me.",
        "sentenceTranslation":  "กรุณาสอบถามทุกคำถามมาที่ฉันโดยตรง"
    },
    {
        "id":  "pdf-42",
        "word":  "Disagree",
        "translation":  "ไม่เห็นด้วย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌdɪsəˈɡriː/",
        "sentence":  "I disagree with your proposal.",
        "sentenceTranslation":  "ฉันไม่เห็นด้วยกับข้อเสนอของคุณ"
    },
    {
        "id":  "pdf-43",
        "word":  "Discuss",
        "translation":  "พูดคุย / ถกประเด็น",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪˈskʌs/",
        "sentence":  "Let\u0027s discuss this matter in the meeting.",
        "sentenceTranslation":  "เรามาหารือเรื่องนี้ในการประชุมกันเถอะ"
    },
    {
        "id":  "pdf-44",
        "word":  "Discussion",
        "translation":  "การสนทนา / การอภิปราย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪˈskʌʃən/",
        "sentence":  "We had a long discussion about the new project.",
        "sentenceTranslation":  "เรามีการหารือกันอย่างยาวนานเกี่ยวกับโครงการใหม่"
    },
    {
        "id":  "pdf-45",
        "word":  "Dispatch",
        "translation":  "จัดส่งออกไป",
        "category":  "Email \u0026 Communication",
        "ipa":  "/dɪˈspætʃ/",
        "sentence":  "The company will dispatch your order tomorrow.",
        "sentenceTranslation":  "บริษัทจะจัดส่งคำสั่งซื้อของคุณในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-46",
        "word":  "Draft",
        "translation":  "ร่าง (จดหมาย/เอกสาร)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/drɑːft/",
        "sentence":  "I need to draft a letter to the client.",
        "sentenceTranslation":  "ฉันต้องร่างจดหมายถึงลูกค้า"
    },
    {
        "id":  "pdf-47",
        "word":  "Due date",
        "translation":  "วันครบกำหนด",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈdjuː deɪt/",
        "sentence":  "The due date for the report is next Friday.",
        "sentenceTranslation":  "วันกำหนดส่งรายงานคือวันศุกร์หน้า"
    },
    {
        "id":  "pdf-48",
        "word":  "Electronic",
        "translation":  "ทางอิเล็กทรอนิกส์",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪlɛkˈtrɒnɪk/",
        "sentence":  "Many documents are now stored in electronic format.",
        "sentenceTranslation":  "เอกสารหลายฉบับปัจจุบันถูกจัดเก็บในรูปแบบอิเล็กทรอนิกส์"
    },
    {
        "id":  "pdf-49",
        "word":  "Email",
        "translation":  "อีเมล",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈiːmeɪl/",
        "sentence":  "Please send me an email with the details.",
        "sentenceTranslation":  "กรุณาส่งอีเมลรายละเอียดมาให้ฉันด้วย"
    },
    {
        "id":  "pdf-50",
        "word":  "Enclose",
        "translation":  "แนบมาพร้อมกันนี้",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈkloʊz/",
        "sentence":  "I have enclosed the required documents.",
        "sentenceTranslation":  "ฉันได้แนบเอกสารที่จำเป็นมาด้วยแล้ว"
    },
    {
        "id":  "pdf-51",
        "word":  "Ensure",
        "translation":  "ทำให้มั่นใจ / รับประกัน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈʃʊər/",
        "sentence":  "Please ensure all data is accurate before submission.",
        "sentenceTranslation":  "โปรดตรวจสอบให้แน่ใจว่าข้อมูลทั้งหมดถูกต้องก่อนส่ง"
    },
    {
        "id":  "pdf-52",
        "word":  "Etiquette",
        "translation":  "มารยาท (ทางธุรกิจ)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈɛtɪkɛt/",
        "sentence":  "Business etiquette is important for professional interactions.",
        "sentenceTranslation":  "มารยาททางธุรกิจมีความสำคัญสำหรับการปฏิสัมพันธ์อย่างมืออาชีพ"
    },
    {
        "id":  "pdf-53",
        "word":  "Explain",
        "translation":  "อธิบาย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪkˈspleɪn/",
        "sentence":  "Can you explain this concept to me again?",
        "sentenceTranslation":  "คุณช่วยอธิบายแนวคิดนี้ให้ฉันฟังอีกครั้งได้ไหม"
    },
    {
        "id":  "pdf-54",
        "word":  "Explanation",
        "translation":  "คำอธิบาย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌɛkspləˈneɪʃən/",
        "sentence":  "We need a clear explanation for the delay.",
        "sentenceTranslation":  "เราต้องการคำอธิบายที่ชัดเจนสำหรับความล่าช้า"
    },
    {
        "id":  "pdf-55",
        "word":  "Express",
        "translation":  "ด่วน / แสดงออก",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪkˈsprɛs/",
        "sentence":  "Please express your concerns openly.",
        "sentenceTranslation":  "กรุณาแสดงความกังวลของคุณออกมาอย่างเปิดเผย"
    },
    {
        "id":  "pdf-56",
        "word":  "Feedback",
        "translation":  "ความคิดเห็น / คำติชม",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈfiːdbæk/",
        "sentence":  "Your feedback is valuable to us.",
        "sentenceTranslation":  "ข้อคิดเห็นของคุณมีค่าสำหรับเรา"
    },
    {
        "id":  "pdf-57",
        "word":  "Follow-up",
        "translation":  "ติดตามผล",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈfɒloʊ ʌp/",
        "sentence":  "I will follow up with the client next week.",
        "sentenceTranslation":  "ฉันจะติดตามผลกับลูกค้าในสัปดาห์หน้า"
    },
    {
        "id":  "pdf-58",
        "word":  "Formal",
        "translation":  "เป็นทางการ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈfɔːrməl/",
        "sentence":  "This is a formal invitation, so dress appropriately.",
        "sentenceTranslation":  "นี่เป็นการเชิญอย่างเป็นทางการ ดังนั้นโปรดแต่งกายให้เหมาะสม"
    },
    {
        "id":  "pdf-59",
        "word":  "Forward",
        "translation":  "ส่งต่อ (อีเมล)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈfɔːrwərd/",
        "sentence":  "Could you please forward this email to the team?",
        "sentenceTranslation":  "คุณช่วยส่งต่ออีเมลนี้ให้ทีมได้ไหม"
    },
    {
        "id":  "pdf-60",
        "word":  "Further",
        "translation":  "เพิ่มเติม / ต่อไป",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈfɜːrðər/",
        "sentence":  "We will provide further details soon.",
        "sentenceTranslation":  "เราจะให้รายละเอียดเพิ่มเติมในไม่ช้า"
    },
    {
        "id":  "pdf-61",
        "word":  "Greeting",
        "translation":  "คำทักทาย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈɡriːtɪŋ/",
        "sentence":  "She offered a warm greeting to all the guests.",
        "sentenceTranslation":  "เธอทักทายแขกทุกคนอย่างอบอุ่น"
    },
    {
        "id":  "pdf-62",
        "word":  "Guidelines",
        "translation":  "แนวทางปฏิบัติ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈɡaɪdlaɪnz/",
        "sentence":  "Please follow the safety guidelines carefully.",
        "sentenceTranslation":  "โปรดปฏิบัติตามแนวทางด้านความปลอดภัยอย่างเคร่งครัด"
    },
    {
        "id":  "pdf-63",
        "word":  "Head’s up",
        "translation":  "การเตือน / แจ้งล่วงหน้า",
        "category":  "Email \u0026 Communication",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-64",
        "word":  "Inform",
        "translation":  "แจ้งให้ทราบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈfɔːrm/",
        "sentence":  "Could you please inform me about the new policy?",
        "sentenceTranslation":  "คุณช่วยแจ้งให้ฉันทราบเกี่ยวกับนโยบายใหม่ได้ไหม"
    },
    {
        "id":  "pdf-65",
        "word":  "Information",
        "translation":  "ข้อมูล",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌɪnfərˈmeɪʃən/",
        "sentence":  "I need more information before I can make a decision.",
        "sentenceTranslation":  "ฉันต้องการข้อมูลเพิ่มเติมก่อนที่จะตัดสินใจ"
    },
    {
        "id":  "pdf-66",
        "word":  "Inquire",
        "translation":  "สอบถาม",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈkwaɪər/",
        "sentence":  "I would like to inquire about the job vacancy.",
        "sentenceTranslation":  "ฉันต้องการสอบถามเกี่ยวกับตำแหน่งงานว่าง"
    },
    {
        "id":  "pdf-67",
        "word":  "Inquiry",
        "translation":  "การสอบถาม",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈɪnkwəri/",
        "sentence":  "We received an inquiry regarding our services.",
        "sentenceTranslation":  "เราได้รับการสอบถามเกี่ยวกับบริการของเรา"
    },
    {
        "id":  "pdf-68",
        "word":  "Inside",
        "translation":  "ภายใน",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈsaɪd/",
        "sentence":  "It\u0027s too cold outside, let\u0027s go inside.",
        "sentenceTranslation":  "ข้างนอกหนาวเกินไป เข้าไปข้างในกันเถอะ"
    },
    {
        "id":  "pdf-69",
        "word":  "Intention",
        "translation":  "ความตั้งใจ / เจตนา",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ɪnˈtɛnʃən/",
        "sentence":  "It was not my intention to offend anyone.",
        "sentenceTranslation":  "ฉันไม่มีเจตนาที่จะทำให้ใครขุ่นเคือง"
    },
    {
        "id":  "pdf-70",
        "word":  "Language",
        "translation":  "ภาษา",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈlæŋɡwɪdʒ/",
        "sentence":  "English is a widely spoken language.",
        "sentenceTranslation":  "ภาษาอังกฤษเป็นภาษาที่ใช้กันอย่างแพร่หลาย"
    },
    {
        "id":  "pdf-71",
        "word":  "Letter",
        "translation":  "จดหมาย",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈlɛtər/",
        "sentence":  "She wrote a letter to her friend.",
        "sentenceTranslation":  "เธอเขียนจดหมายถึงเพื่อนของเธอ"
    },
    {
        "id":  "pdf-72",
        "word":  "Link",
        "translation":  "ลิงก์ / จุดเชื่อมโยง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/lɪŋk/",
        "sentence":  "Click on the link to access the website.",
        "sentenceTranslation":  "คลิกที่ลิงก์เพื่อเข้าถึงเว็บไซต์"
    },
    {
        "id":  "pdf-73",
        "word":  "Mention",
        "translation":  "กล่าวถึง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈmɛnʃən/",
        "sentence":  "Did he mention anything about the upcoming event?",
        "sentenceTranslation":  "เขาได้กล่าวถึงอะไรเกี่ยวกับงานที่จะมีขึ้นบ้างไหม"
    },
    {
        "id":  "pdf-74",
        "word":  "Message",
        "translation":  "ข้อความ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈmɛsɪdʒ/",
        "sentence":  "I left a message on her voicemail.",
        "sentenceTranslation":  "ฉันฝากข้อความไว้ในข้อความเสียงของเธอ"
    },
    {
        "id":  "pdf-75",
        "word":  "Misunderstand",
        "translation":  "เข้าใจผิด",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌmɪsʌndərˈstænd/",
        "sentence":  "I\u0027m sorry if I made you misunderstand.",
        "sentenceTranslation":  "ฉันขอโทษหากฉันทำให้คุณเข้าใจผิด"
    },
    {
        "id":  "pdf-76",
        "word":  "Note",
        "translation":  "บันทึกย่อ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/noʊt/",
        "sentence":  "Please take a note of this important information.",
        "sentenceTranslation":  "โปรดจดบันทึกข้อมูลสำคัญนี้ไว้"
    },
    {
        "id":  "pdf-77",
        "word":  "Notice",
        "translation":  "ประกาศ / สังเกตเห็น",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈnoʊtɪs/",
        "sentence":  "Did you notice the new painting in the office?",
        "sentenceTranslation":  "คุณสังเกตเห็นภาพวาดใหม่ในสำนักงานไหม"
    },
    {
        "id":  "pdf-78",
        "word":  "Notify",
        "translation":  "แจ้ง / ประกาศให้ทราบ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈnoʊtɪfaɪ/",
        "sentence":  "Please notify us if there are any changes to your contact details.",
        "sentenceTranslation":  "โปรดแจ้งให้เราทราบหากมีการเปลี่ยนแปลงรายละเอียดการติดต่อของคุณ"
    },
    {
        "id":  "pdf-79",
        "word":  "Objective",
        "translation":  "วัตถุประสงค์",
        "category":  "Email \u0026 Communication",
        "ipa":  "/əbˈdʒɛktɪv/",
        "sentence":  "Our main objective is to improve customer satisfaction.",
        "sentenceTranslation":  "วัตถุประสงค์หลักของเราคือการปรับปรุงความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-80",
        "word":  "Out of office",
        "translation":  "ไม่อยู่สำนักงาน (OOO)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/aʊt əv ˈɔːfɪs/",
        "sentence":  "I will be out of office tomorrow for a conference.",
        "sentenceTranslation":  "พรุ่งนี้ฉันจะไม่อยู่ที่สำนักงานเนื่องจากไปประชุม"
    },
    {
        "id":  "pdf-81",
        "word":  "Particular",
        "translation":  "เฉพาะเจาะจง",
        "category":  "Email \u0026 Communication",
        "ipa":  "/pərˈtɪkjʊlər/",
        "sentence":  "I have a particular interest in historical novels.",
        "sentenceTranslation":  "ฉันมีความสนใจเป็นพิเศษในหนังสือนิยายอิงประวัติศาสตร์"
    },
    {
        "id":  "pdf-82",
        "word":  "Please",
        "translation":  "กรุณา / โปรด",
        "category":  "Email \u0026 Communication",
        "ipa":  "/pliːz/",
        "sentence":  "Please close the door when you leave.",
        "sentenceTranslation":  "กรุณาปิดประตูเมื่อคุณออกไป"
    },
    {
        "id":  "pdf-83",
        "word":  "Polite",
        "translation":  "สุภาพ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/pəˈlaɪt/",
        "sentence":  "It\u0027s polite to say \u0027thank you\u0027.",
        "sentenceTranslation":  "การกล่าวคำว่า \u0027ขอบคุณ\u0027 เป็นเรื่องสุภาพ"
    },
    {
        "id":  "pdf-84",
        "word":  "Postpone",
        "translation":  "เลื่อนเวลาออกไป",
        "category":  "Email \u0026 Communication",
        "ipa":  "/pəˈspoʊn/",
        "sentence":  "We had to postpone the meeting until next week.",
        "sentenceTranslation":  "เราต้องเลื่อนการประชุมออกไปเป็นสัปดาห์หน้า"
    },
    {
        "id":  "pdf-85",
        "word":  "Presentation",
        "translation":  "การนำเสนอ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌprɛzənˈteɪʃən/",
        "sentence":  "Her presentation on marketing strategies was very informative.",
        "sentenceTranslation":  "การนำเสนอเรื่องกลยุทธ์การตลาดของเธอให้ข้อมูลที่เป็นประโยชน์มาก"
    },
    {
        "id":  "pdf-86",
        "word":  "Professional",
        "translation":  "มืออาชีพ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/prəˈfɛʃənl/",
        "sentence":  "He always maintains a professional attitude.",
        "sentenceTranslation":  "เขารักษามารยาทแบบมืออาชีพเสมอ"
    },
    {
        "id":  "pdf-87",
        "word":  "Prompt",
        "translation":  "รวดเร็ว / ทันทีทันใด",
        "category":  "Email \u0026 Communication",
        "ipa":  "/prɑːmpt/",
        "sentence":  "Please be prompt for the appointment.",
        "sentenceTranslation":  "กรุณามาตรงเวลาสำหรับการนัดหมาย"
    },
    {
        "id":  "pdf-88",
        "word":  "Purpose",
        "translation":  "จุดประสงค์",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈpɜːrpəs/",
        "sentence":  "The purpose of the meeting is to discuss the new project.",
        "sentenceTranslation":  "วัตถุประสงค์ของการประชุมคือการหารือเกี่ยวกับโครงการใหม่"
    },
    {
        "id":  "pdf-89",
        "word":  "Receive",
        "translation":  "ได้รับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈsiːv/",
        "sentence":  "I hope to receive your reply soon.",
        "sentenceTranslation":  "ฉันหวังว่าจะได้รับคำตอบของคุณเร็วๆ นี้"
    },
    {
        "id":  "pdf-90",
        "word":  "Recipient",
        "translation":  "ผู้รับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈsɪpiənt/",
        "sentence":  "The recipient of the award was very surprised.",
        "sentenceTranslation":  "ผู้รับรางวัลประหลาดใจมาก"
    },
    {
        "id":  "pdf-91",
        "word":  "Regarding",
        "translation":  "เกี่ยวกับ / ในเรื่อง (Re:)",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈɡɑːrdɪŋ/",
        "sentence":  "I have a question regarding your previous email.",
        "sentenceTranslation":  "ฉันมีคำถามเกี่ยวกับอีเมลฉบับก่อนหน้าของคุณ"
    },
    {
        "id":  "pdf-92",
        "word":  "Remind",
        "translation":  "เตือนความจำ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈmaɪnd/",
        "sentence":  "Please remind me to call him tomorrow.",
        "sentenceTranslation":  "กรุณาเตือนฉันให้โทรหาเขาพรุ่งนี้ด้วย"
    },
    {
        "id":  "pdf-93",
        "word":  "Reminder",
        "translation":  "ข้อความเตือนความจำ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈmaɪndər/",
        "sentence":  "I set a reminder on my phone for the meeting.",
        "sentenceTranslation":  "ฉันตั้งการแจ้งเตือนในโทรศัพท์สำหรับประชุม"
    },
    {
        "id":  "pdf-94",
        "word":  "Reply",
        "translation":  "ตอบกลับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈplaɪ/",
        "sentence":  "Could you please reply to my email by the end of the day?",
        "sentenceTranslation":  "คุณช่วยตอบกลับอีเมลของฉันภายในสิ้นวันได้ไหม"
    },
    {
        "id":  "pdf-95",
        "word":  "Request",
        "translation":  "ขอร้อง / คำร้องขอ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈkwɛst/",
        "sentence":  "He made a request for more information.",
        "sentenceTranslation":  "เขาได้ร้องขอข้อมูลเพิ่มเติม"
    },
    {
        "id":  "pdf-96",
        "word":  "Require",
        "translation":  "ต้องการ / บังคับใช้",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈkwaɪər/",
        "sentence":  "This task will require a lot of concentration.",
        "sentenceTranslation":  "งานนี้จะต้องใช้สมาธิอย่างมาก"
    },
    {
        "id":  "pdf-97",
        "word":  "Reschedule",
        "translation":  "จัดตารางเวลาใหม่",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˌriːˈskɛdʒuːl/",
        "sentence":  "We need to reschedule the appointment for next week.",
        "sentenceTranslation":  "เราต้องกำหนดเวลานัดหมายใหม่สำหรับสัปดาห์หน้า"
    },
    {
        "id":  "pdf-98",
        "word":  "Respond",
        "translation":  "ตอบสนอง / ตอบกลับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈspɑːnd/",
        "sentence":  "He didn\u0027t respond to my question.",
        "sentenceTranslation":  "เขาไม่ได้ตอบคำถามของฉัน"
    },
    {
        "id":  "pdf-99",
        "word":  "Response",
        "translation":  "คำตอบรับ / การตอบกลับ",
        "category":  "Email \u0026 Communication",
        "ipa":  "/rɪˈspɑːns/",
        "sentence":  "We are still waiting for a response from the committee.",
        "sentenceTranslation":  "เรายังคงรอการตอบกลับจากคณะกรรมการ"
    },
    {
        "id":  "pdf-100",
        "word":  "Signature",
        "translation":  "ลายเซ็น",
        "category":  "Email \u0026 Communication",
        "ipa":  "/ˈsɪɡnətʃər/",
        "sentence":  "Please put your signature at the bottom of the form.",
        "sentenceTranslation":  "กรุณาลงลายเซ็นของคุณที่ด้านล่างของแบบฟอร์ม"
    },
    {
        "id":  "pdf-101",
        "word":  "Account",
        "translation":  "บัญชีผู้ใช้งาน / ลูกค้ารายสำคัญ",
        "category":  "Client Relations",
        "ipa":  "/əˈkaʊnt/",
        "sentence":  "Please make sure to account for all expenses.",
        "sentenceTranslation":  "โปรดตรวจสอบให้แน่ใจว่าได้ชี้แจงค่าใช้จ่ายทั้งหมดแล้ว"
    },
    {
        "id":  "pdf-102",
        "word":  "Acquire",
        "translation":  "ได้มา / จัดซื้อ / หามาได้",
        "category":  "Client Relations",
        "ipa":  "/əˈkwaɪər/",
        "sentence":  "The company plans to acquire a new business.",
        "sentenceTranslation":  "บริษัทวางแผนที่จะเข้าซื้อกิจการใหม่"
    },
    {
        "id":  "pdf-103",
        "word":  "Adapt",
        "translation":  "ปรับตัว / ปรับให้เหมาะ",
        "category":  "Client Relations",
        "ipa":  "/əˈdæpt/",
        "sentence":  "Animals must adapt to their environment to survive.",
        "sentenceTranslation":  "สัตว์ต้องปรับตัวให้เข้ากับสภาพแวดล้อมเพื่อความอยู่รอด"
    },
    {
        "id":  "pdf-104",
        "word":  "Advantage",
        "translation":  "ข้อได้เปรียบ / ผลประโยชน์",
        "category":  "Client Relations",
        "ipa":  "/ədˈvæn.t̬ɪdʒ/",
        "sentence":  "Knowing multiple languages can be a great advantage.",
        "sentenceTranslation":  "การรู้หลายภาษาสามารถเป็นข้อได้เปรียบอย่างมาก"
    },
    {
        "id":  "pdf-105",
        "word":  "Advise",
        "translation":  "ให้คำปรึกษา / แนะนำ",
        "category":  "Client Relations",
        "ipa":  "/ədˈvaɪz/",
        "sentence":  "I would advise you to invest wisely.",
        "sentenceTranslation":  "ฉันจะแนะนำให้คุณลงทุนอย่างชาญฉลาด"
    },
    {
        "id":  "pdf-106",
        "word":  "Advocate",
        "translation":  "ผู้ให้การสนับสนุน / สนับสนุน",
        "category":  "Client Relations",
        "ipa":  "/ˈædvəkeɪt/",
        "sentence":  "She continues to advocate for human rights.",
        "sentenceTranslation":  "เธอยังคงสนับสนุนสิทธิมนุษยชน"
    },
    {
        "id":  "pdf-107",
        "word":  "Afford",
        "translation":  "สามารถจ่ายได้ / มีเงินพอ",
        "category":  "Client Relations",
        "ipa":  "/əˈfɔːrd/",
        "sentence":  "I can\u0027t afford a new car right now.",
        "sentenceTranslation":  "ตอนนี้ฉันไม่มีเงินพอที่จะซื้อรถใหม่ได้"
    },
    {
        "id":  "pdf-108",
        "word":  "After-sales",
        "translation":  "หลังการขาย",
        "category":  "Client Relations",
        "ipa":  "/ˈæftərˌseɪlz/",
        "sentence":  "Good after-sales service is crucial for customer satisfaction.",
        "sentenceTranslation":  "บริการหลังการขายที่ดีมีความสำคัญอย่างยิ่งต่อความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-109",
        "word":  "Agreement",
        "translation":  "ข้อตกลง / สัญญา",
        "category":  "Client Relations",
        "ipa":  "/əˈɡriːmənt/",
        "sentence":  "They reached an agreement after a long discussion.",
        "sentenceTranslation":  "พวกเขาบรรลุข้อตกลงกันหลังจากหารือกันมานาน"
    },
    {
        "id":  "pdf-110",
        "word":  "Alliance",
        "translation":  "พันธมิตร / การร่วมมือกัน",
        "category":  "Client Relations",
        "ipa":  "/əˈlaɪəns/",
        "sentence":  "The two countries formed an alliance for trade.",
        "sentenceTranslation":  "สองประเทศได้ก่อตั้งพันธมิตรทางการค้า"
    },
    {
        "id":  "pdf-111",
        "word":  "Alternative",
        "translation":  "ทางเลือก",
        "category":  "Client Relations",
        "ipa":  "/ɔːlˈtɜːrnətɪv/",
        "sentence":  "Is there an alternative route to avoid traffic?",
        "sentenceTranslation":  "มีเส้นทางอื่นเพื่อหลีกเลี่ยงการจราจรหรือไม่"
    },
    {
        "id":  "pdf-112",
        "word":  "Amend",
        "translation":  "แก้ไข (เอกสาร / สัญญา)",
        "category":  "Client Relations",
        "ipa":  "/əˈmɛnd/",
        "sentence":  "The committee decided to amend the proposal.",
        "sentenceTranslation":  "คณะกรรมการตัดสินใจที่จะแก้ไขข้อเสนอ"
    },
    {
        "id":  "pdf-113",
        "word":  "Anticipate",
        "translation":  "คาดการณ์ / หวังไว้",
        "category":  "Client Relations",
        "ipa":  "/ænˈtɪsɪpeɪt/",
        "sentence":  "We anticipate a high demand for the new product.",
        "sentenceTranslation":  "เราคาดการณ์ความต้องการสูงสำหรับผลิตภัณฑ์ใหม่"
    },
    {
        "id":  "pdf-114",
        "word":  "Appeal",
        "translation":  "ดึงดูดใจ / ร้องเรียน",
        "category":  "Client Relations",
        "ipa":  "/əˈpiːl/",
        "sentence":  "The new design has a strong appeal to young consumers.",
        "sentenceTranslation":  "ดีไซน์ใหม่ดึงดูดใจผู้บริโภควัยหนุ่มสาวเป็นอย่างมาก"
    },
    {
        "id":  "pdf-115",
        "word":  "Approach",
        "translation":  "การเข้าหา / วิธีการจัดการ",
        "category":  "Client Relations",
        "ipa":  "/əˈproʊtʃ/",
        "sentence":  "We need a new approach to solve this problem.",
        "sentenceTranslation":  "เราต้องการแนวทางใหม่ในการแก้ปัญหานี้"
    },
    {
        "id":  "pdf-116",
        "word":  "Assist",
        "translation":  "ช่วยเหลือ",
        "category":  "Client Relations",
        "ipa":  "/əˈsɪst/",
        "sentence":  "Can you assist me with this heavy box?",
        "sentenceTranslation":  "คุณช่วยฉันยกกล่องหนักๆ นี้ได้ไหม"
    },
    {
        "id":  "pdf-117",
        "word":  "Assistance",
        "translation":  "ความช่วยเหลือ",
        "category":  "Client Relations",
        "ipa":  "/əˈsɪstəns/",
        "sentence":  "Thank you for your kind assistance.",
        "sentenceTranslation":  "ขอบคุณสำหรับความช่วยเหลือของคุณ"
    },
    {
        "id":  "pdf-118",
        "word":  "Attract",
        "translation":  "ดึงดูด (ลูกค้า / ความสนใจ)",
        "category":  "Client Relations",
        "ipa":  "/əˈtrækt/",
        "sentence":  "The bright colors attract butterflies.",
        "sentenceTranslation":  "สีสันสดใสดึงดูดผีเสื้อ"
    },
    {
        "id":  "pdf-119",
        "word":  "Bargain",
        "translation":  "ต่อรองราคา / ของถูก",
        "category":  "Client Relations",
        "ipa":  "/ˈbɑːrɡən/",
        "sentence":  "I managed to bargain for a lower price.",
        "sentenceTranslation":  "ฉันสามารถต่อรองราคาให้ต่ำลงได้"
    },
    {
        "id":  "pdf-120",
        "word":  "Benefit",
        "translation":  "ผลประโยชน์",
        "category":  "Client Relations",
        "ipa":  "/ˈbɛnɪfɪt/",
        "sentence":  "Regular exercise offers many health benefits.",
        "sentenceTranslation":  "การออกกำลังกายเป็นประจำมีประโยชน์ต่อสุขภาพมากมาย"
    },
    {
        "id":  "pdf-121",
        "word":  "Bonding",
        "translation":  "การสร้างความผูกพัน",
        "category":  "Client Relations",
        "ipa":  "/ˈbɒndɪŋ/",
        "sentence":  "The team activity was great for bonding among colleagues.",
        "sentenceTranslation":  "กิจกรรมของทีมยอดเยี่ยมสำหรับการสร้างความผูกพันระหว่างเพื่อนร่วมงาน"
    },
    {
        "id":  "pdf-122",
        "word":  "Buyer",
        "translation":  "ผู้ซื้อ",
        "category":  "Client Relations",
        "ipa":  "/ˈbaɪər/",
        "sentence":  "The buyer was very interested in the new product.",
        "sentenceTranslation":  "ผู้ซื้อสนใจในผลิตภัณฑ์ใหม่มาก"
    },
    {
        "id":  "pdf-123",
        "word":  "B2B (Business-to-Business)",
        "translation":  "ธุรกิจกับธุรกิจ",
        "category":  "Client Relations",
        "ipa":  "/ˌbiː tuː ˈbiː/",
        "sentence":  "Our company primarily focuses on B2B sales.",
        "sentenceTranslation":  "บริษัทของเราเน้นการขายแบบธุรกิจกับธุรกิจเป็นหลัก"
    },
    {
        "id":  "pdf-124",
        "word":  "B2C (Business-to-Consumer)",
        "translation":  "ธุรกิจกับผู้บริโภค",
        "category":  "Client Relations",
        "ipa":  "/ˌbiː tuː ˈsiː/",
        "sentence":  "Many online retail stores operate on a B2C model.",
        "sentenceTranslation":  "ร้านค้าปลีกออนไลน์จำนวนมากดำเนินงานในรูปแบบธุรกิจกับผู้บริโภค"
    },
    {
        "id":  "pdf-125",
        "word":  "Cancel",
        "translation":  "ยกเลิก",
        "category":  "Client Relations",
        "ipa":  "/ˈkænsəl/",
        "sentence":  "I need to cancel my appointment for tomorrow.",
        "sentenceTranslation":  "ฉันต้องยกเลิกนัดของฉันสำหรับพรุ่งนี้"
    },
    {
        "id":  "pdf-126",
        "word":  "Cancellation",
        "translation":  "การยกเลิก",
        "category":  "Client Relations",
        "ipa":  "/ˌkænsəˈleɪʃən/",
        "sentence":  "The flight cancellation caused a lot of inconvenience.",
        "sentenceTranslation":  "การยกเลิกเที่ยวบินทำให้เกิดความไม่สะดวกมากมาย"
    },
    {
        "id":  "pdf-127",
        "word":  "Care",
        "translation":  "การดูแล / ใส่ใจ",
        "category":  "Client Relations",
        "ipa":  "/keər/",
        "sentence":  "We provide excellent customer care.",
        "sentenceTranslation":  "เราให้บริการลูกค้าด้วยความเอาใจใส่อย่างดีเยี่ยม"
    },
    {
        "id":  "pdf-128",
        "word":  "Case study",
        "translation":  "กรณีศึกษา",
        "category":  "Client Relations",
        "ipa":  "/ˈkeɪs ˌstʌdi/",
        "sentence":  "The professor presented an interesting case study.",
        "sentenceTranslation":  "ศาสตราจารย์นำเสนอกรณีศึกษาที่น่าสนใจ"
    },
    {
        "id":  "pdf-129",
        "word":  "Cater",
        "translation":  "จัดหาให้ / บริการตอบสนอง",
        "category":  "Client Relations",
        "ipa":  "/ˈkeɪtər/",
        "sentence":  "We can cater to all your dietary needs.",
        "sentenceTranslation":  "เราสามารถจัดหาอาหารให้ตรงกับความต้องการด้านอาหารของคุณได้ทั้งหมด"
    },
    {
        "id":  "pdf-130",
        "word":  "Client",
        "translation":  "ลูกค้า (มักเป็นองค์กร/ผู้ใช้บริการ)",
        "category":  "Client Relations",
        "ipa":  "/ˈklaɪənt/",
        "sentence":  "Our law firm serves many corporate clients.",
        "sentenceTranslation":  "บริษัทกฎหมายของเราให้บริการลูกค้าองค์กรจำนวนมาก"
    },
    {
        "id":  "pdf-131",
        "word":  "Collaboration",
        "translation":  "การร่วมมือกัน",
        "category":  "Client Relations",
        "ipa":  "/kəˌlæbəˈreɪʃən/",
        "sentence":  "This project requires close collaboration between departments.",
        "sentenceTranslation":  "โครงการนี้ต้องการการร่วมมือกันอย่างใกล้ชิดระหว่างแผนกต่างๆ"
    },
    {
        "id":  "pdf-132",
        "word":  "Commit",
        "translation":  "ผูกมัด / สัญญาว่าจะทำ",
        "category":  "Client Relations",
        "ipa":  "/kəˈmɪt/",
        "sentence":  "He committed to finishing the report by Friday.",
        "sentenceTranslation":  "เขาให้คำมั่นว่าจะทำรายงานให้เสร็จภายในวันศุกร์"
    },
    {
        "id":  "pdf-133",
        "word":  "Commitment",
        "translation":  "ข้อผูกมัด / การพันธสัญญา",
        "category":  "Client Relations",
        "ipa":  "/kəˈmɪtmənt/",
        "sentence":  "Her commitment to the project was commendable.",
        "sentenceTranslation":  "ความมุ่งมั่นของเธอที่มีต่อโครงการนั้นน่ายกย่อง"
    },
    {
        "id":  "pdf-134",
        "word":  "Compensation",
        "translation":  "ค่าชดเชย / ค่าตอบแทน",
        "category":  "Client Relations",
        "ipa":  "/ˌkɒmpənˈseɪʃən/",
        "sentence":  "The company offered a generous compensation package.",
        "sentenceTranslation":  "บริษัทเสนอแพ็คเกจค่าตอบแทนที่ใจกว้าง"
    },
    {
        "id":  "pdf-135",
        "word":  "Complain",
        "translation":  "ร้องเรียน / บ่น",
        "category":  "Client Relations",
        "ipa":  "/kəmˈpleɪn/",
        "sentence":  "Customers often complain about slow service.",
        "sentenceTranslation":  "ลูกค้ามักจะร้องเรียนเกี่ยวกับการบริการที่ช้า"
    },
    {
        "id":  "pdf-136",
        "word":  "Complaint",
        "translation":  "ข้อร้องเรียน",
        "category":  "Client Relations",
        "ipa":  "/kəmˈpleɪnt/",
        "sentence":  "We received a complaint about the noisy neighbors.",
        "sentenceTranslation":  "เราได้รับคำร้องเรียนเกี่ยวกับเพื่อนบ้านที่ส่งเสียงดัง"
    },
    {
        "id":  "pdf-137",
        "word":  "Compromise",
        "translation":  "ประนีประนอม",
        "category":  "Client Relations",
        "ipa":  "/ˈkɒmprəmaɪz/",
        "sentence":  "Both parties had to compromise to reach an agreement.",
        "sentenceTranslation":  "ทั้งสองฝ่ายต้องประนีประนอมกันเพื่อบรรลุข้อตกลง"
    },
    {
        "id":  "pdf-138",
        "word":  "Concede",
        "translation":  "ยอมรับ / ยอมตามข้อตกลง",
        "category":  "Client Relations",
        "ipa":  "/kənˈsiːd/",
        "sentence":  "The losing candidate refused to concede the election.",
        "sentenceTranslation":  "ผู้สมัครที่แพ้ปฏิเสธที่จะยอมรับผลการเลือกตั้ง"
    },
    {
        "id":  "pdf-139",
        "word":  "Concern",
        "translation":  "ความกังวล / ข้อห่วงใย",
        "category":  "Client Relations",
        "ipa":  "/kənˈsɜːrn/",
        "sentence":  "There is growing concern about climate change.",
        "sentenceTranslation":  "มีความกังวลเพิ่มขึ้นเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศ"
    },
    {
        "id":  "pdf-140",
        "word":  "Condition",
        "translation":  "เงื่อนไข / สภาพ",
        "category":  "Client Relations",
        "ipa":  "/kənˈdɪʃən/",
        "sentence":  "The car is in excellent condition.",
        "sentenceTranslation":  "รถอยู่ในสภาพดีเยี่ยม"
    },
    {
        "id":  "pdf-141",
        "word":  "Conflict",
        "translation":  "ความขัดแย้ง",
        "category":  "Client Relations",
        "ipa":  "/ˈkɒnflɪkt/",
        "sentence":  "There was a conflict of interest among the team members.",
        "sentenceTranslation":  "มีความขัดแย้งทางผลประโยชน์ระหว่างสมาชิกในทีม"
    },
    {
        "id":  "pdf-142",
        "word":  "Consumer",
        "translation":  "ผู้บริโภค",
        "category":  "Client Relations",
        "ipa":  "/kənˈsjuːmə(r)/",
        "sentence":  "Consumers are looking for more sustainable products.",
        "sentenceTranslation":  "ผู้บริโภคกำลังมองหาผลิตภัณฑ์ที่ยั่งยืนมากขึ้น"
    },
    {
        "id":  "pdf-143",
        "word":  "Contract",
        "translation":  "สัญญา",
        "category":  "Client Relations",
        "ipa":  "/ˈkɒntrækt/",
        "sentence":  "Please read the contract carefully before signing.",
        "sentenceTranslation":  "โปรดอ่านสัญญาอย่างละเอียดก่อนลงนาม"
    },
    {
        "id":  "pdf-144",
        "word":  "Counteroffer",
        "translation":  "ข้อเสนอโต้ตอบ / ข้อเสนอใหม่",
        "category":  "Client Relations",
        "ipa":  "/ˈkaʊntərˌɒfə(r)/",
        "sentence":  "The seller rejected our offer and made a counteroffer.",
        "sentenceTranslation":  "ผู้ขายปฏิเสธข้อเสนอของเราและยื่นข้อเสนอโต้กลับมา"
    },
    {
        "id":  "pdf-145",
        "word":  "Courtesy",
        "translation":  "ความสุภาพ / มีมารยาท",
        "category":  "Client Relations",
        "ipa":  "/ˈkɜːtəsi/",
        "sentence":  "It\u0027s common courtesy to hold the door open for others.",
        "sentenceTranslation":  "เป็นมารยาททั่วไปที่จะจับประตูค้างไว้ให้ผู้อื่น"
    },
    {
        "id":  "pdf-146",
        "word":  "CRM",
        "translation":  "ระบบบริหารความสัมพันธ์ลูกค้า",
        "category":  "Client Relations",
        "ipa":  "/ˌsiː ɑːr ˈem/",
        "sentence":  "Our company uses CRM software to manage customer interactions.",
        "sentenceTranslation":  "บริษัทของเราใช้ซอฟต์แวร์ CRM เพื่อจัดการปฏิสัมพันธ์กับลูกค้า"
    },
    {
        "id":  "pdf-147",
        "word":  "Customer",
        "translation":  "ลูกค้า (ผู้ซื้อสินค้า)",
        "category":  "Client Relations",
        "ipa":  "/ˈkʌstəmə(r)/",
        "sentence":  "The customer service representative was very helpful.",
        "sentenceTranslation":  "ตัวแทนฝ่ายบริการลูกค้าให้ความช่วยเหลือดีมาก"
    },
    {
        "id":  "pdf-148",
        "word":  "Customize",
        "translation":  "ปรับแต่งตามใจลูกค้า",
        "category":  "Client Relations",
        "ipa":  "/ˈkʌstəmaɪz/",
        "sentence":  "You can customize the settings of your new phone.",
        "sentenceTranslation":  "คุณสามารถปรับแต่งการตั้งค่าของโทรศัพท์เครื่องใหม่ของคุณได้"
    },
    {
        "id":  "pdf-149",
        "word":  "Deal",
        "translation":  "ข้อตกลง / การซื้อขาย",
        "category":  "Client Relations",
        "ipa":  "/diːl/",
        "sentence":  "We finally closed the deal after weeks of negotiation.",
        "sentenceTranslation":  "ในที่สุดเราก็บรรลุข้อตกลงหลังจากเจรจากันมาหลายสัปดาห์"
    },
    {
        "id":  "pdf-150",
        "word":  "Demand",
        "translation":  "ความต้องการ",
        "category":  "Client Relations",
        "ipa":  "/dɪˈmænd/",
        "sentence":  "There is a high demand for electric vehicles right now.",
        "sentenceTranslation":  "ตอนนี้มีความต้องการรถยนต์ไฟฟ้าสูงมาก"
    },
    {
        "id":  "pdf-151",
        "word":  "Demographics",
        "translation":  "ข้อมูลประชากรศาสตร์ของลูกค้า",
        "category":  "Client Relations",
        "ipa":  "/ˌdeməˈɡræfɪks/",
        "sentence":  "The company studies demographics to target its advertising.",
        "sentenceTranslation":  "บริษัทศึกษาข้อมูลประชากรศาสตร์เพื่อกำหนดกลุ่มเป้าหมายในการโฆษณา"
    },
    {
        "id":  "pdf-152",
        "word":  "Discount",
        "translation":  "ส่วนลด",
        "category":  "Client Relations",
        "ipa":  "/ˈdɪskaʊnt/",
        "sentence":  "They offered a 10% discount for cash payments.",
        "sentenceTranslation":  "พวกเขาเสนอส่วนลด 10% สำหรับการชำระด้วยเงินสด"
    },
    {
        "id":  "pdf-153",
        "word":  "Dispute",
        "translation":  "การโต้แย้ง / ข้อพิพาท",
        "category":  "Client Relations",
        "ipa":  "/dɪˈspjuːt/",
        "sentence":  "The two companies resolved their dispute through mediation.",
        "sentenceTranslation":  "บริษัททั้งสองแก้ไขข้อพิพาทของตนผ่านการไกล่เกลี่ย"
    },
    {
        "id":  "pdf-154",
        "word":  "Dissatisfied",
        "translation":  "ไม่พอใจ",
        "category":  "Client Relations",
        "ipa":  "/dɪˈsætɪsfaɪd/",
        "sentence":  "Many customers were dissatisfied with the slow delivery service.",
        "sentenceTranslation":  "ลูกค้าจำนวนมากไม่พอใจกับบริการจัดส่งที่ล่าช้า"
    },
    {
        "id":  "pdf-155",
        "word":  "Empathy",
        "translation":  "ความเข้าใจความรู้สึกคนอื่น",
        "category":  "Client Relations",
        "ipa":  "/ˈempəθi/",
        "sentence":  "Good customer service requires empathy and understanding.",
        "sentenceTranslation":  "การบริการลูกค้าที่ดีต้องอาศัยความเห็นอกเห็นใจและความเข้าใจ"
    },
    {
        "id":  "pdf-156",
        "word":  "Engage",
        "translation":  "สร้างความผูกพัน / มีส่วนร่วม",
        "category":  "Client Relations",
        "ipa":  "/ɪnˈɡeɪdʒ/",
        "sentence":  "It\u0027s important to engage with your audience during a presentation.",
        "sentenceTranslation":  "สิ่งสำคัญคือการมีส่วนร่วมกับผู้ฟังระหว่างการนำเสนอ"
    },
    {
        "id":  "pdf-157",
        "word":  "Engagement",
        "translation":  "การมีส่วนร่วมของลูกค้า",
        "category":  "Client Relations",
        "ipa":  "/ɪnˈɡeɪdʒmənt/",
        "sentence":  "Social media engagement is crucial for brand building.",
        "sentenceTranslation":  "การมีส่วนร่วมบนโซเชียลมีเดียเป็นสิ่งสำคัญสำหรับการสร้างแบรนด์"
    },
    {
        "id":  "pdf-158",
        "word":  "Escalate",
        "translation":  "ส่งต่อปัญหาให้ผู้ใหญ่จัดการ",
        "category":  "Client Relations",
        "ipa":  "/ˈeskəleɪt/",
        "sentence":  "We need to prevent the situation from escalating further.",
        "sentenceTranslation":  "เราต้องป้องกันไม่ให้สถานการณ์ทวีความรุนแรงขึ้นอีก"
    },
    {
        "id":  "pdf-159",
        "word":  "Establish",
        "translation":  "จัดตั้ง / สร้าง (ความสัมพันธ์)",
        "category":  "Client Relations",
        "ipa":  "/ɪˈstæblɪʃ/",
        "sentence":  "The company was established in 1995.",
        "sentenceTranslation":  "บริษัทถูกก่อตั้งขึ้นในปี 1995"
    },
    {
        "id":  "pdf-160",
        "word":  "Expectation",
        "translation":  "ความคาดหวัง",
        "category":  "Client Relations",
        "ipa":  "/ˌekspekˈteɪʃn/",
        "sentence":  "We have high expectations for the new product launch.",
        "sentenceTranslation":  "เรามีความคาดหวังสูงสำหรับการเปิดตัวผลิตภัณฑ์ใหม่"
    },
    {
        "id":  "pdf-161",
        "word":  "Experience",
        "translation":  "ประสบการณ์",
        "category":  "Client Relations",
        "ipa":  "/ɪkˈspɪəriəns/",
        "sentence":  "She has a lot of experience in marketing.",
        "sentenceTranslation":  "เธอมีประสบการณ์ด้านการตลาดมากมาย"
    },
    {
        "id":  "pdf-162",
        "word":  "Favor",
        "translation":  "ความช่วยเหลือ / ความโปรดปราน",
        "category":  "Client Relations",
        "ipa":  "/ˈfeɪvər/",
        "sentence":  "Could you do me a favor and help me move this box?",
        "sentenceTranslation":  "คุณช่วยฉันหน่อยได้ไหม ช่วยฉันย้ายกล่องนี้หน่อย"
    },
    {
        "id":  "pdf-163",
        "word":  "Flexible",
        "translation":  "ยืดหยุ่น",
        "category":  "Client Relations",
        "ipa":  "/ˈflɛksəbəl/",
        "sentence":  "Our work schedule is quite flexible.",
        "sentenceTranslation":  "ตารางการทำงานของเราค่อนข้างยืดหยุ่น"
    },
    {
        "id":  "pdf-164",
        "word":  "Fulfillment",
        "translation":  "การเติมเต็ม / การจัดส่งสินค้า",
        "category":  "Client Relations",
        "ipa":  "/fʊlˈfɪlmənt/",
        "sentence":  "Achieving her dream brought her a great sense of fulfillment.",
        "sentenceTranslation":  "การบรรลุความฝันทำให้เธอรู้สึกเติมเต็มอย่างมาก"
    },
    {
        "id":  "pdf-165",
        "word":  "Gain",
        "translation":  "ได้รับ / ผลประโยชน์",
        "category":  "Client Relations",
        "ipa":  "/ɡeɪn/",
        "sentence":  "We hope to gain more customers this quarter.",
        "sentenceTranslation":  "เราหวังว่าจะได้ลูกค้าเพิ่มขึ้นในไตรมาสนี้"
    },
    {
        "id":  "pdf-166",
        "word":  "Guarantee",
        "translation":  "รับประกัน",
        "category":  "Client Relations",
        "ipa":  "/ˌɡærənˈtiː/",
        "sentence":  "The company offers a one-year guarantee on all its products.",
        "sentenceTranslation":  "บริษัทเสนอการรับประกันหนึ่งปีสำหรับผลิตภัณฑ์ทั้งหมด"
    },
    {
        "id":  "pdf-167",
        "word":  "Handle",
        "translation":  "รับมือ / จัดการกับปัญหา",
        "category":  "Client Relations",
        "ipa":  "/ˈhændəl/",
        "sentence":  "She can handle difficult situations very well.",
        "sentenceTranslation":  "เธอสามารถจัดการกับสถานการณ์ที่ยากลำบากได้เป็นอย่างดี"
    },
    {
        "id":  "pdf-168",
        "word":  "Impression",
        "translation":  "ความประทับใจ",
        "category":  "Client Relations",
        "ipa":  "/ɪmˈprɛʃən/",
        "sentence":  "He made a good impression on his new boss.",
        "sentenceTranslation":  "เขาได้สร้างความประทับใจที่ดีต่อเจ้านายคนใหม่ของเขา"
    },
    {
        "id":  "pdf-169",
        "word":  "Influence",
        "translation":  "มีอิทธิพลต่อ / จูงใจ",
        "category":  "Client Relations",
        "ipa":  "/ˈɪnfluəns/",
        "sentence":  "Social media has a big influence on public opinion.",
        "sentenceTranslation":  "โซเชียลมีเดียมีอิทธิพลอย่างมากต่อความคิดเห็นของประชาชน"
    },
    {
        "id":  "pdf-170",
        "word":  "Interaction",
        "translation":  "การปฏิสัมพันธ์",
        "category":  "Client Relations",
        "ipa":  "/ˌɪntərˈækʃən/",
        "sentence":  "Customer interaction is crucial for business growth.",
        "sentenceTranslation":  "ปฏิสัมพันธ์กับลูกค้ามีความสำคัญอย่างยิ่งต่อการเติบโตของธุรกิจ"
    },
    {
        "id":  "pdf-171",
        "word":  "Investigate",
        "translation":  "ตรวจสอบข้อเท็จจริง",
        "category":  "Client Relations",
        "ipa":  "/ɪnˈvɛstɪɡeɪt/",
        "sentence":  "The police will investigate the cause of the accident.",
        "sentenceTranslation":  "ตำรวจจะสืบสวนหาสาเหตุของอุบัติเหตุ"
    },
    {
        "id":  "pdf-172",
        "word":  "Invoice",
        "translation":  "ใบแจ้งหนี้",
        "category":  "Client Relations",
        "ipa":  "/ˈɪnvɔɪs/",
        "sentence":  "Please send me the invoice for the services rendered.",
        "sentenceTranslation":  "กรุณาส่งใบแจ้งหนี้สำหรับบริการที่ได้ดำเนินการไปแล้วให้ฉันด้วย"
    },
    {
        "id":  "pdf-173",
        "word":  "Issue",
        "translation":  "ประเด็น / ปัญหา",
        "category":  "Client Relations",
        "ipa":  "/ˈɪʃuː/",
        "sentence":  "We need to address this urgent issue immediately.",
        "sentenceTranslation":  "เราต้องแก้ไขปัญหานี้อย่างเร่งด่วนทันที"
    },
    {
        "id":  "pdf-174",
        "word":  "Key account",
        "translation":  "ลูกค้ารายสำคัญมาก",
        "category":  "Client Relations",
        "ipa":  "/kiː əˈkaʊnt/",
        "sentence":  "Our sales team manages several key accounts.",
        "sentenceTranslation":  "ทีมขายของเราบริหารจัดการลูกค้าคนสำคัญหลายราย"
    },
    {
        "id":  "pdf-175",
        "word":  "Long-term",
        "translation":  "ระยะยาว",
        "category":  "Client Relations",
        "ipa":  "/ˈlɔŋ tɜːrm/",
        "sentence":  "We are looking for a long-term solution.",
        "sentenceTranslation":  "เรากำลังมองหาวิธีแก้ปัญหาระยะยาว"
    },
    {
        "id":  "pdf-176",
        "word":  "Loyalty",
        "translation":  "ความจงรักภักดี (ต่อแบรนด์)",
        "category":  "Client Relations",
        "ipa":  "/ˈlɔɪəlti/",
        "sentence":  "Customer loyalty is vital for repeat business.",
        "sentenceTranslation":  "ความภักดีของลูกค้ามีความสำคัญอย่างยิ่งต่อการทำธุรกิจซ้ำ"
    },
    {
        "id":  "pdf-177",
        "word":  "Maintain",
        "translation":  "รักษาไว้ (รักษาความสัมพันธ์)",
        "category":  "Client Relations",
        "ipa":  "/meɪnˈteɪn/",
        "sentence":  "It\u0027s important to maintain good relationships with clients.",
        "sentenceTranslation":  "การรักษาความสัมพันธ์ที่ดีกับลูกค้าเป็นสิ่งสำคัญ"
    },
    {
        "id":  "pdf-178",
        "word":  "Maximize",
        "translation":  "ทำให้ได้มากที่สุด",
        "category":  "Client Relations",
        "ipa":  "/ˈmæksɪmaɪz/",
        "sentence":  "We aim to maximize our profits this year.",
        "sentenceTranslation":  "เราตั้งเป้าที่จะทำกำไรให้ได้มากที่สุดในปีนี้"
    },
    {
        "id":  "pdf-179",
        "word":  "Mediate",
        "translation":  "ไกล่เกลี่ย",
        "category":  "Client Relations",
        "ipa":  "/ˈmiːdieɪt/",
        "sentence":  "The UN tried to mediate a peace agreement between the two countries.",
        "sentenceTranslation":  "สหประชาชาติพยายามเป็นคนกลางเพื่อไกล่เกลี่ยข้อตกลงสันติภาพระหว่างสองประเทศ"
    },
    {
        "id":  "pdf-180",
        "word":  "Meet",
        "translation":  "บรรลุ (เช่น Meet demands)",
        "category":  "Client Relations",
        "ipa":  "/miːt/",
        "sentence":  "We need to meet the customer\u0027s demands.",
        "sentenceTranslation":  "เราจำเป็นต้องตอบสนองความต้องการของลูกค้า"
    },
    {
        "id":  "pdf-181",
        "word":  "Mutually",
        "translation":  "ซึ่งกันและกัน",
        "category":  "Client Relations",
        "ipa":  "/ˈmjuːtʃuəli/",
        "sentence":  "They agreed to help each other mutually.",
        "sentenceTranslation":  "พวกเขาตกลงที่จะช่วยเหลือซึ่งกันและกัน"
    },
    {
        "id":  "pdf-182",
        "word":  "Negotiate",
        "translation":  "เจรจาต่อรอง",
        "category":  "Client Relations",
        "ipa":  "/nɪˈɡoʊʃieɪt/",
        "sentence":  "It\u0027s important to negotiate a fair price.",
        "sentenceTranslation":  "การเจรจาต่อรองราคาที่เป็นธรรมเป็นสิ่งสำคัญ"
    },
    {
        "id":  "pdf-183",
        "word":  "Negotiation",
        "translation":  "การเจรจาต่อรอง",
        "category":  "Client Relations",
        "ipa":  "/nɪˌɡoʊʃiˈeɪʃən/",
        "sentence":  "The negotiation process can be long.",
        "sentenceTranslation":  "กระบวนการเจรจาต่อรองอาจใช้เวลานาน"
    },
    {
        "id":  "pdf-184",
        "word":  "Network",
        "translation":  "เครือข่าย / สายสัมพันธ์",
        "category":  "Client Relations",
        "ipa":  "/ˈnɛtwɜːrk/",
        "sentence":  "Building a strong professional network is crucial.",
        "sentenceTranslation":  "การสร้างเครือข่ายมืออาชีพที่แข็งแกร่งเป็นสิ่งสำคัญอย่างยิ่ง"
    },
    {
        "id":  "pdf-185",
        "word":  "Objective",
        "translation":  "วัตถุประสงค์",
        "category":  "Client Relations",
        "ipa":  "/əbˈdʒɛktɪv/",
        "sentence":  "Our main objective is customer satisfaction.",
        "sentenceTranslation":  "เป้าหมายหลักของเราคือความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-186",
        "word":  "Offer",
        "translation":  "ข้อเสนอ / เสนอให้",
        "category":  "Client Relations",
        "ipa":  "/ˈɒfər/",
        "sentence":  "We received a generous job offer.",
        "sentenceTranslation":  "เราได้รับข้อเสนองานที่ใจกว้าง"
    },
    {
        "id":  "pdf-187",
        "word":  "Outcome",
        "translation":  "ผลลัพธ์",
        "category":  "Client Relations",
        "ipa":  "/ˈaʊtkʌm/",
        "sentence":  "The outcome of the meeting was positive.",
        "sentenceTranslation":  "ผลลัพธ์ของการประชุมเป็นไปในทางบวก"
    },
    {
        "id":  "pdf-188",
        "word":  "Partner",
        "translation":  "พันธมิตร / หุ้นส่วน",
        "category":  "Client Relations",
        "ipa":  "/ˈpɑːrtnər/",
        "sentence":  "She works closely with her business partner.",
        "sentenceTranslation":  "เธอทำงานอย่างใกล้ชิดกับหุ้นส่วนทางธุรกิจของเธอ"
    },
    {
        "id":  "pdf-189",
        "word":  "Partnership",
        "translation":  "การเป็นหุ้นส่วนธุรกิจ",
        "category":  "Client Relations",
        "ipa":  "/ˈpɑːrtnərʃɪp/",
        "sentence":  "They formed a new partnership.",
        "sentenceTranslation":  "พวกเขาก่อตั้งห้างหุ้นส่วนใหม่"
    },
    {
        "id":  "pdf-190",
        "word":  "Patience",
        "translation":  "ความอดทน",
        "category":  "Client Relations",
        "ipa":  "/ˈpeɪʃəns/",
        "sentence":  "Patience is a virtue in difficult times.",
        "sentenceTranslation":  "ความอดทนเป็นคุณธรรมในช่วงเวลาที่ยากลำบาก"
    },
    {
        "id":  "pdf-191",
        "word":  "Persuade",
        "translation":  "โน้มน้าวใจ",
        "category":  "Client Relations",
        "ipa":  "/pərˈsweɪd/",
        "sentence":  "He tried to persuade her to change her mind.",
        "sentenceTranslation":  "เขาพยายามชักจูงให้เธอเปลี่ยนใจ"
    },
    {
        "id":  "pdf-192",
        "word":  "Premium",
        "translation":  "คุณภาพสูง / เบี้ยประกัน / เงินรางวัล",
        "category":  "Client Relations",
        "ipa":  "/ˈpriːmiəm/",
        "sentence":  "We pay a premium for high-quality service.",
        "sentenceTranslation":  "เราจ่ายราคาที่สูงขึ้นสำหรับบริการคุณภาพสูง"
    },
    {
        "id":  "pdf-193",
        "word":  "Priority",
        "translation":  "สิ่งที่สำคัญที่สุด / ลำดับต้นๆ",
        "category":  "Client Relations",
        "ipa":  "/praɪˈɔːrəti/",
        "sentence":  "Safety is our top priority.",
        "sentenceTranslation":  "ความปลอดภัยคือสิ่งสำคัญสูงสุดของเรา"
    },
    {
        "id":  "pdf-194",
        "word":  "Profit",
        "translation":  "กำไร",
        "category":  "Client Relations",
        "ipa":  "/ˈprɒfɪt/",
        "sentence":  "The company reported a significant profit this quarter.",
        "sentenceTranslation":  "บริษัทรายงานผลกำไรจำนวนมากในไตรมาสนี้"
    },
    {
        "id":  "pdf-195",
        "word":  "Proposal",
        "translation":  "ข้อเสนอทางธุรกิจ",
        "category":  "Client Relations",
        "ipa":  "/prəˈpoʊzl/",
        "sentence":  "They submitted a new business proposal.",
        "sentenceTranslation":  "พวกเขายื่นข้อเสนอทางธุรกิจใหม่"
    },
    {
        "id":  "pdf-196",
        "word":  "Prospect",
        "translation":  "ผู้ที่มีแนวโน้มจะเป็นลูกค้า",
        "category":  "Client Relations",
        "ipa":  "/ˈprɒspɛkt/",
        "sentence":  "The company has good prospects for growth.",
        "sentenceTranslation":  "บริษัทมีแนวโน้มที่ดีสำหรับการเติบโต"
    },
    {
        "id":  "pdf-197",
        "word":  "Provider",
        "translation":  "ผู้ให้บริการ",
        "category":  "Client Relations",
        "ipa":  "/prəˈvaɪdər/",
        "sentence":  "We are looking for a new internet provider.",
        "sentenceTranslation":  "เรากำลังมองหาผู้ให้บริการอินเทอร์เน็ตรายใหม่"
    },
    {
        "id":  "pdf-198",
        "word":  "Rapport",
        "translation":  "ความสามัคคี / ความสัมพันธ์อันดี",
        "category":  "Client Relations",
        "ipa":  "/ræˈpɔːr/",
        "sentence":  "Building good rapport with clients is essential.",
        "sentenceTranslation":  "การสร้างความสัมพันธ์ที่ดีกับลูกค้าเป็นสิ่งจำเป็น"
    },
    {
        "id":  "pdf-199",
        "word":  "Reach",
        "translation":  "บรรลุ (ข้อตกลง) / ไปถึง",
        "category":  "Client Relations",
        "ipa":  "/riːtʃ/",
        "sentence":  "We need to reach a decision soon.",
        "sentenceTranslation":  "เราจำเป็นต้องตัดสินใจให้เร็วที่สุด"
    },
    {
        "id":  "pdf-200",
        "word":  "Recommend",
        "translation":  "แนะนำ",
        "category":  "Client Relations",
        "ipa":  "/ˌrɛkəˈmɛnd/",
        "sentence":  "I highly recommend this restaurant.",
        "sentenceTranslation":  "ฉันขอแนะนำร้านอาหารนี้เป็นอย่างยิ่ง"
    },
    {
        "id":  "pdf-201",
        "word":  "Action plan",
        "translation":  "แผนการดำเนินงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌækʃən ˈplæn/",
        "sentence":  "We need to develop an action plan to address these issues.",
        "sentenceTranslation":  "เราจำเป็นต้องพัฒนาแผนปฏิบัติการเพื่อแก้ไขปัญหาเหล่านี้"
    },
    {
        "id":  "pdf-202",
        "word":  "Actionable",
        "translation":  "ที่สามารถนำไปปฏิบัติได้จริง",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈækʃənəbəl/",
        "sentence":  "The report provided actionable insights for improving customer satisfaction.",
        "sentenceTranslation":  "รายงานได้ให้ข้อมูลเชิงลึกที่นำไปปฏิบัติได้เพื่อปรับปรุงความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-203",
        "word":  "Adjourn",
        "translation":  "เลื่อน / ปิดการประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈdʒɜrn/",
        "sentence":  "The chairman decided to adjourn the meeting until next week.",
        "sentenceTranslation":  "ประธานตัดสินใจเลื่อนการประชุมออกไปจนถึงสัปดาห์หน้า"
    },
    {
        "id":  "pdf-204",
        "word":  "Agenda",
        "translation":  "วาระการประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈdʒɛndə/",
        "sentence":  "Please check the agenda for today\u0027s meeting.",
        "sentenceTranslation":  "โปรดตรวจสอบระเบียบวาระการประชุมสำหรับวันนี้"
    },
    {
        "id":  "pdf-205",
        "word":  "Allocate",
        "translation":  "จัดสรร (งบประมาณ / เวลา / คน)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈæləˌkeɪt/",
        "sentence":  "We need to allocate resources efficiently to complete the project.",
        "sentenceTranslation":  "เราจำเป็นต้องจัดสรรทรัพยากรอย่างมีประสิทธิภาพเพื่อดำเนินโครงการให้สำเร็จ"
    },
    {
        "id":  "pdf-206",
        "word":  "Allocation",
        "translation":  "การจัดสรร",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌæləˈkeɪʃən/",
        "sentence":  "The allocation of funds for the new department was approved.",
        "sentenceTranslation":  "การจัดสรรเงินทุนสำหรับแผนกใหม่ได้รับการอนุมัติแล้ว"
    },
    {
        "id":  "pdf-207",
        "word":  "Analyst",
        "translation":  "นักวิเคราะห์",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈænəlɪst/",
        "sentence":  "The financial analyst presented a report on market trends.",
        "sentenceTranslation":  "นักวิเคราะห์ทางการเงินนำเสนอรายงานเกี่ยวกับแนวโน้มของตลาด"
    },
    {
        "id":  "pdf-208",
        "word":  "Analyze",
        "translation":  "วิเคราะห์",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈænəˌlaɪz/",
        "sentence":  "It\u0027s important to analyze the data carefully before making a decision.",
        "sentenceTranslation":  "เป็นสิ่งสำคัญที่จะต้องวิเคราะห์ข้อมูลอย่างรอบคอบก่อนตัดสินใจ"
    },
    {
        "id":  "pdf-209",
        "word":  "Annual meeting",
        "translation":  "การประชุมประจำปี",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌænjuəl ˈmiːtɪŋ/",
        "sentence":  "Our company holds an annual meeting every December.",
        "sentenceTranslation":  "บริษัทของเราจัดการประชุมประจำปีทุกเดือนธันวาคม"
    },
    {
        "id":  "pdf-210",
        "word":  "Appointment",
        "translation":  "การนัดหมาย",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈpɔɪntmənt/",
        "sentence":  "I have an appointment with the doctor at 10 AM.",
        "sentenceTranslation":  "ฉันมีนัดหมายกับแพทย์เวลา 10 โมงเช้า"
    },
    {
        "id":  "pdf-211",
        "word":  "Approve",
        "translation":  "อนุมัติ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈpruːv/",
        "sentence":  "The manager needs to approve all travel expenses.",
        "sentenceTranslation":  "ผู้จัดการจำเป็นต้องอนุมัติค่าใช้จ่ายในการเดินทางทั้งหมด"
    },
    {
        "id":  "pdf-212",
        "word":  "Assignment",
        "translation":  "งานที่ได้รับมอบหมาย",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈsaɪnmənt/",
        "sentence":  "She completed her assignment ahead of schedule.",
        "sentenceTranslation":  "เธอทำงานที่ได้รับมอบหมายเสร็จก่อนกำหนด"
    },
    {
        "id":  "pdf-213",
        "word":  "Attend",
        "translation":  "เข้าร่วม (การประชุม)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˈtɛnd/",
        "sentence":  "All team members are expected to attend the workshop.",
        "sentenceTranslation":  "สมาชิกในทีมทุกคนคาดว่าจะเข้าร่วมเวิร์กช็อป"
    },
    {
        "id":  "pdf-214",
        "word":  "Attendee",
        "translation":  "ผู้เข้าร่วมประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əˌtɛnˈdiː/",
        "sentence":  "There were over 200 attendees at the conference.",
        "sentenceTranslation":  "มีผู้เข้าร่วมประชุมมากกว่า 200 คนในการประชุม"
    },
    {
        "id":  "pdf-215",
        "word":  "Backup plan",
        "translation":  "แผนสำรอง",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈbækˌʌp plæn/",
        "sentence":  "Always have a backup plan in case something goes wrong.",
        "sentenceTranslation":  "ควรมีแผนสำรองเสมอในกรณีที่เกิดข้อผิดพลาด"
    },
    {
        "id":  "pdf-216",
        "word":  "Boardroom",
        "translation":  "ห้องประชุมคณะกรรมการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈbɔrdˌruːm/",
        "sentence":  "The executive committee met in the boardroom this morning.",
        "sentenceTranslation":  "คณะกรรมการบริหารประชุมกันที่ห้องประชุมคณะกรรมการเมื่อเช้านี้"
    },
    {
        "id":  "pdf-217",
        "word":  "Brainstorm",
        "translation":  "ระดมความคิด",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈbreɪnˌstɔrm/",
        "sentence":  "Let\u0027s brainstorm some ideas for the new marketing campaign.",
        "sentenceTranslation":  "มาลองระดมสมองหาไอเดียสำหรับแคมเปญการตลาดใหม่กันเถอะ"
    },
    {
        "id":  "pdf-218",
        "word":  "Brief",
        "translation":  "สรุปงานสั้นๆก่อนเริ่มทำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/briːf/",
        "sentence":  "The manager will brief the team on the project updates.",
        "sentenceTranslation":  "ผู้จัดการจะสรุปข้อมูลอัปเดตโครงการให้ทีมทราบ"
    },
    {
        "id":  "pdf-219",
        "word":  "Budget",
        "translation":  "งบประมาณ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈbʌdʒɪt/",
        "sentence":  "We need to stay within the allocated budget for this event.",
        "sentenceTranslation":  "เราจำเป็นต้องใช้งบประมาณที่จัดสรรไว้สำหรับงานนี้"
    },
    {
        "id":  "pdf-220",
        "word":  "Case study",
        "translation":  "กรณีศึกษา",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈkeɪs ˌstʌdi/",
        "sentence":  "The professor presented a fascinating case study on successful startups.",
        "sentenceTranslation":  "ศาสตราจารย์นำเสนอกรณีศึกษาที่น่าสนใจเกี่ยวกับสตาร์ทอัพที่ประสบความสำเร็จ"
    },
    {
        "id":  "pdf-221",
        "word":  "Chairperson",
        "translation":  "ประธานในที่ประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈtʃɛərˌpɜːrsən/",
        "sentence":  "The chairperson opened the meeting with a brief introduction.",
        "sentenceTranslation":  "ประธานเปิดการประชุมด้วยการแนะนำสั้นๆ"
    },
    {
        "id":  "pdf-222",
        "word":  "Clarify",
        "translation":  "ชี้แจงให้ชัดเจน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈklærəˌfaɪ/",
        "sentence":  "Could you please clarify your last point?",
        "sentenceTranslation":  "คุณช่วยชี้แจงประเด็นสุดท้ายของคุณได้ไหม?"
    },
    {
        "id":  "pdf-223",
        "word":  "Collaborate",
        "translation":  "ร่วมมือกันทำงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kəˈlæbəˌreɪt/",
        "sentence":  "We need to collaborate on this project to achieve success.",
        "sentenceTranslation":  "เราต้องร่วมมือกันในโครงการนี้เพื่อให้ประสบความสำเร็จ"
    },
    {
        "id":  "pdf-224",
        "word":  "Committee",
        "translation":  "คณะกรรมการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kəˈmɪti/",
        "sentence":  "The committee will review all proposals before making a decision.",
        "sentenceTranslation":  "คณะกรรมการจะพิจารณาข้อเสนอทั้งหมดก่อนตัดสินใจ"
    },
    {
        "id":  "pdf-225",
        "word":  "Conclude",
        "translation":  "สรุป",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kənˈkluːd/",
        "sentence":  "Let\u0027s conclude the discussion and move to the next item.",
        "sentenceTranslation":  "เรามาสรุปการอภิปรายและไปที่หัวข้อถัดไปกันเถอะ"
    },
    {
        "id":  "pdf-226",
        "word":  "Conclusion",
        "translation":  "ข้อสรุป",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kənˈkluːʒən/",
        "sentence":  "In conclusion, teamwork is essential for this project.",
        "sentenceTranslation":  "โดยสรุปแล้ว การทำงานเป็นทีมเป็นสิ่งจำเป็นสำหรับโครงการนี้"
    },
    {
        "id":  "pdf-227",
        "word":  "Conference",
        "translation":  "การประชุมใหญ่ / สัมมนา",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈkɒnfərəns/",
        "sentence":  "The annual conference will be held next month.",
        "sentenceTranslation":  "การประชุมประจำปีจะจัดขึ้นในเดือนหน้า"
    },
    {
        "id":  "pdf-228",
        "word":  "Consensus",
        "translation":  "มติเป็นเอกฉันท์ / ความเห็นพ้อง",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kənˈsɛnsəs/",
        "sentence":  "We need to reach a consensus on the best approach.",
        "sentenceTranslation":  "เราจำเป็นต้องบรรลุฉันทามติเกี่ยวกับแนวทางที่ดีที่สุด"
    },
    {
        "id":  "pdf-229",
        "word":  "Coordinator",
        "translation":  "ผู้ประสานงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/koʊˈɔːrdɪˌneɪtər/",
        "sentence":  "The project coordinator ensures everything runs smoothly.",
        "sentenceTranslation":  "ผู้ประสานงานโครงการช่วยให้ทุกอย่างดำเนินไปอย่างราบรื่น"
    },
    {
        "id":  "pdf-230",
        "word":  "Creative",
        "translation":  "มีความคิดสร้างสรรค์",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kriˈeɪtɪv/",
        "sentence":  "She always comes up with creative solutions to problems.",
        "sentenceTranslation":  "เธอคิดค้นวิธีแก้ปัญหาที่สร้างสรรค์ได้เสมอ"
    },
    {
        "id":  "pdf-231",
        "word":  "Criterion",
        "translation":  "เกณฑ์ / บรรทัดฐาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/kraɪˈtɪəriən/",
        "sentence":  "Quality is the main criterion for selecting suppliers.",
        "sentenceTranslation":  "คุณภาพคือเกณฑ์หลักในการเลือกซัพพลายเออร์"
    },
    {
        "id":  "pdf-232",
        "word":  "Critical",
        "translation":  "สำคัญมาก / วิกฤต",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈkrɪtɪkəl/",
        "sentence":  "His feedback was critical to the success of the new design.",
        "sentenceTranslation":  "ข้อเสนอแนะของเขามีความสำคัญอย่างยิ่งต่อความสำเร็จของการออกแบบใหม่"
    },
    {
        "id":  "pdf-233",
        "word":  "Deadline",
        "translation":  "กำหนดเวลาส่งงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈdɛdˌlaɪn/",
        "sentence":  "We must meet the project deadline next Friday.",
        "sentenceTranslation":  "เราต้องส่งงานโครงการให้ทันกำหนดภายในวันศุกร์หน้า"
    },
    {
        "id":  "pdf-234",
        "word":  "Delegate",
        "translation":  "มอบหมายงานให้คนอื่นทำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈdɛlɪɡeɪt/",
        "sentence":  "It\u0027s important to delegate tasks effectively to your team.",
        "sentenceTranslation":  "การมอบหมายงานให้ทีมของคุณอย่างมีประสิทธิภาพเป็นสิ่งสำคัญ"
    },
    {
        "id":  "pdf-235",
        "word":  "Deliverable",
        "translation":  "ผลงานที่ต้องส่งมอบ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/dɪˈlɪvərəbəl/",
        "sentence":  "The final report is a key deliverable for this phase.",
        "sentenceTranslation":  "รายงานฉบับสุดท้ายเป็นผลงานสำคัญที่ต้องส่งมอบสำหรับระยะนี้"
    },
    {
        "id":  "pdf-236",
        "word":  "Department",
        "translation":  "แผนก",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/dɪˈpɑːrtmənt/",
        "sentence":  "She works in the marketing department.",
        "sentenceTranslation":  "เธอทำงานในแผนกการตลาด"
    },
    {
        "id":  "pdf-237",
        "word":  "Design",
        "translation":  "ออกแบบ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/dɪˈzaɪn/",
        "sentence":  "We need to design a new logo for the company.",
        "sentenceTranslation":  "เราจำเป็นต้องออกแบบโลโก้ใหม่สำหรับบริษัท"
    },
    {
        "id":  "pdf-238",
        "word":  "Development",
        "translation":  "การพัฒนา",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/dɪˈvɛləpmənt/",
        "sentence":  "The development of this software took several months.",
        "sentenceTranslation":  "การพัฒนาซอฟต์แวร์นี้ใช้เวลาหลายเดือน"
    },
    {
        "id":  "pdf-239",
        "word":  "Discussion",
        "translation":  "การสนทนา / อภิปราย",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/dɪˈskʌʃən/",
        "sentence":  "We had a long discussion about the budget.",
        "sentenceTranslation":  "เรามีการอภิปรายเรื่องงบประมาณกันยาวนาน"
    },
    {
        "id":  "pdf-240",
        "word":  "Due date",
        "translation":  "วันกำหนดส่ง / วันครบกำหนด",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈduː ˌdeɪt/",
        "sentence":  "Please submit your assignment by the due date.",
        "sentenceTranslation":  "โปรดส่งงานของคุณภายในวันครบกำหนด"
    },
    {
        "id":  "pdf-241",
        "word":  "Efficiency",
        "translation":  "ประสิทธิภาพ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɪˈfɪʃənsi/",
        "sentence":  "We need to improve the efficiency of our production process.",
        "sentenceTranslation":  "เราต้องปรับปรุงประสิทธิภาพของกระบวนการผลิตของเรา"
    },
    {
        "id":  "pdf-242",
        "word":  "Efficient",
        "translation":  "ที่มีประสิทธิภาพ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɪˈfɪʃənt/",
        "sentence":  "The new machine is very efficient and saves a lot of energy.",
        "sentenceTranslation":  "เครื่องจักรใหม่นี้มีประสิทธิภาพมากและประหยัดพลังงานได้มาก"
    },
    {
        "id":  "pdf-243",
        "word":  "Estimate",
        "translation":  "ประมาณการ (ราคา / เวลา)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈɛstɪmeɪt/",
        "sentence":  "Can you give me an estimate of the total cost?",
        "sentenceTranslation":  "คุณช่วยประมาณการค่าใช้จ่ายทั้งหมดให้ฉันได้ไหม"
    },
    {
        "id":  "pdf-244",
        "word":  "Evaluate",
        "translation":  "ประเมินผล",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɪˈvæljueɪt/",
        "sentence":  "We need to evaluate the results of the project carefully.",
        "sentenceTranslation":  "เราต้องประเมินผลของโครงการอย่างรอบคอบ"
    },
    {
        "id":  "pdf-245",
        "word":  "Evaluation",
        "translation":  "การประเมินผล",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɪˌvæljuˈeɪʃən/",
        "sentence":  "The performance evaluation takes place once a year.",
        "sentenceTranslation":  "การประเมินผลการปฏิบัติงานจะจัดขึ้นปีละครั้ง"
    },
    {
        "id":  "pdf-246",
        "word":  "Execute",
        "translation":  "ดำเนินการ / ลงมือทำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈɛksɪkjuːt/",
        "sentence":  "It\u0027s time to execute the plan we have developed.",
        "sentenceTranslation":  "ได้เวลาดำเนินการตามแผนที่เราได้พัฒนาขึ้นแล้ว"
    },
    {
        "id":  "pdf-247",
        "word":  "Execution",
        "translation":  "การดำเนินการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌɛksɪˈkjuːʃən/",
        "sentence":  "The success of the project depends on its flawless execution.",
        "sentenceTranslation":  "ความสำเร็จของโครงการขึ้นอยู่กับการดำเนินการที่ไร้ที่ติ"
    },
    {
        "id":  "pdf-248",
        "word":  "Facilitate",
        "translation":  "อำนวยความสะดวก",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/fəˈsɪlɪteɪt/",
        "sentence":  "The manager\u0027s role is to facilitate teamwork among the staff.",
        "sentenceTranslation":  "บทบาทของผู้จัดการคือการอำนวยความสะดวกในการทำงานเป็นทีมในหมู่พนักงาน"
    },
    {
        "id":  "pdf-249",
        "word":  "Feedback",
        "translation":  "ความคิดเห็น / ข้อมูลสะท้อนกลับ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈfiːdbæk/",
        "sentence":  "We appreciate your honest feedback on our new product.",
        "sentenceTranslation":  "เราขอขอบคุณสำหรับข้อเสนอแนะที่ตรงไปตรงมาเกี่ยวกับผลิตภัณฑ์ใหม่ของเรา"
    },
    {
        "id":  "pdf-250",
        "word":  "Focus group",
        "translation":  "กลุ่มเป้าหมายเฉพาะที่ใช้ทดสอบ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈfoʊkəs ɡruːp/",
        "sentence":  "We organized a focus group to gather opinions on the new advertising campaign.",
        "sentenceTranslation":  "เราจัดกลุ่มสนทนาเพื่อรวบรวมความคิดเห็นเกี่ยวกับแคมเปญโฆษณาใหม่"
    },
    {
        "id":  "pdf-251",
        "word":  "Forecast",
        "translation":  "คาดการณ์ล่วงหน้า",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈfɔːrkæst/",
        "sentence":  "The economic forecast for next year is positive.",
        "sentenceTranslation":  "การคาดการณ์ทางเศรษฐกิจสำหรับปีหน้าเป็นไปในเชิงบวก"
    },
    {
        "id":  "pdf-252",
        "word":  "Goal",
        "translation":  "เป้าหมาย",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɡoʊl/",
        "sentence":  "Our main goal is to increase customer satisfaction.",
        "sentenceTranslation":  "เป้าหมายหลักของเราคือการเพิ่มความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-253",
        "word":  "Implementation",
        "translation":  "การนำไปปฏิบัติใช้จริง",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌɪmplɪmɛnˈteɪʃən/",
        "sentence":  "The implementation of the new system will take several months.",
        "sentenceTranslation":  "การนำระบบใหม่มาใช้จะใช้เวลาหลายเดือน"
    },
    {
        "id":  "pdf-254",
        "word":  "Initiative",
        "translation":  "ความคิดริเริ่ม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ɪˈnɪʃətɪv/",
        "sentence":  "She took the initiative to organize the team meeting.",
        "sentenceTranslation":  "เธอเป็นคนริเริ่มจัดประชุมทีม"
    },
    {
        "id":  "pdf-255",
        "word":  "Innovation",
        "translation":  "นวัตกรรม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌɪnəˈveɪʃən/",
        "sentence":  "Innovation is key to staying competitive in the market.",
        "sentenceTranslation":  "นวัตกรรมเป็นกุญแจสำคัญในการรักษาความสามารถในการแข่งขันในตลาด"
    },
    {
        "id":  "pdf-256",
        "word":  "Insight",
        "translation":  "ข้อมูลเชิงลึก",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈɪnsaɪt/",
        "sentence":  "Her presentation offered valuable insight into market trends.",
        "sentenceTranslation":  "การนำเสนอของเธอให้ข้อมูลเชิงลึกที่มีคุณค่าเกี่ยวกับแนวโน้มของตลาด"
    },
    {
        "id":  "pdf-257",
        "word":  "Kick-off",
        "translation":  "การเริ่มต้น (เริ่มเปิดตัวโครงการ)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈkɪk ɒf/",
        "sentence":  "The project kick-off meeting is scheduled for Monday morning.",
        "sentenceTranslation":  "การประชุมเริ่มต้นโครงการมีกำหนดในเช้าวันจันทร์"
    },
    {
        "id":  "pdf-258",
        "word":  "Launch",
        "translation":  "ปล่อยสินค้าใหม่ / เปิดตัวโครงการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/lɔːntʃ/",
        "sentence":  "The company plans to launch a new product next quarter.",
        "sentenceTranslation":  "บริษัทมีแผนที่จะเปิดตัวผลิตภัณฑ์ใหม่ในไตรมาสหน้า"
    },
    {
        "id":  "pdf-259",
        "word":  "Leader",
        "translation":  "ผู้นำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈliːdər/",
        "sentence":  "A good leader inspires and motivates their team.",
        "sentenceTranslation":  "ผู้นำที่ดีสร้างแรงบันดาลใจและจูงใจทีมของตน"
    },
    {
        "id":  "pdf-260",
        "word":  "Leadership",
        "translation":  "ความเป็นผู้นำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈliːdərʃɪp/",
        "sentence":  "Effective leadership is crucial for any successful organization.",
        "sentenceTranslation":  "ความเป็นผู้นำที่มีประสิทธิภาพมีความสำคัญอย่างยิ่งสำหรับองค์กรที่ประสบความสำเร็จ"
    },
    {
        "id":  "pdf-261",
        "word":  "Manage",
        "translation":  "จัดการ / บริหาร",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmænɪdʒ/",
        "sentence":  "She can manage the project effectively.",
        "sentenceTranslation":  "เธอสามารถบริหารโครงการได้อย่างมีประสิทธิภาพ"
    },
    {
        "id":  "pdf-262",
        "word":  "Management",
        "translation":  "การจัดการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmænɪdʒmənt/",
        "sentence":  "Good management is crucial for success.",
        "sentenceTranslation":  "การจัดการที่ดีมีความสำคัญต่อความสำเร็จ"
    },
    {
        "id":  "pdf-263",
        "word":  "Manager",
        "translation":  "ผู้จัดการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmænɪdʒər/",
        "sentence":  "The manager approved the new budget.",
        "sentenceTranslation":  "ผู้จัดการอนุมัติงบประมาณใหม่แล้ว"
    },
    {
        "id":  "pdf-264",
        "word":  "Meeting minutes",
        "translation":  "รายงานการประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmiːtɪŋ ˈmɪnɪts/",
        "sentence":  "Please circulate the meeting minutes by tomorrow.",
        "sentenceTranslation":  "กรุณาเวียนรายงานการประชุมภายในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-265",
        "word":  "Milestone",
        "translation":  "ความสำเร็จในแต่ละขั้นของโครงการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmaɪlstoʊn/",
        "sentence":  "Completing this phase is a major milestone.",
        "sentenceTranslation":  "การทำให้ช่วงนี้สำเร็จลุล่วงเป็นก้าวสำคัญ"
    },
    {
        "id":  "pdf-266",
        "word":  "Motion",
        "translation":  "ข้อเสนอในที่ประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈmoʊʃən/",
        "sentence":  "The committee passed the motion to adjourn.",
        "sentenceTranslation":  "คณะกรรมการลงมติให้เลื่อนการประชุม"
    },
    {
        "id":  "pdf-267",
        "word":  "Objective",
        "translation":  "วัตถุประสงค์",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/əbˈdʒɛktɪv/",
        "sentence":  "Our main objective is to increase sales.",
        "sentenceTranslation":  "วัตถุประสงค์หลักของเราคือการเพิ่มยอดขาย"
    },
    {
        "id":  "pdf-268",
        "word":  "Operational",
        "translation":  "เกี่ยวกับการดำเนินงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌɒpəˈreɪʃənəl/",
        "sentence":  "The new system is fully operational now.",
        "sentenceTranslation":  "ระบบใหม่สามารถใช้งานได้เต็มที่แล้วตอนนี้"
    },
    {
        "id":  "pdf-269",
        "word":  "Organization",
        "translation":  "องค์กร / การจัดระบบ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌɔːrɡənɪˈzeɪʃən/",
        "sentence":  "The organization supports various charity events.",
        "sentenceTranslation":  "องค์กรสนับสนุนงานการกุศลต่างๆ"
    },
    {
        "id":  "pdf-270",
        "word":  "Outline",
        "translation":  "เค้าโครง / สรุปย่อ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈaʊtlaɪn/",
        "sentence":  "He presented an outline of the project plan.",
        "sentenceTranslation":  "เขาเสนอร่างแผนโครงการ"
    },
    {
        "id":  "pdf-271",
        "word":  "Overview",
        "translation":  "ภาพรวม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈoʊvərvjuː/",
        "sentence":  "Let\u0027s start with an overview of the current situation.",
        "sentenceTranslation":  "มาเริ่มด้วยภาพรวมของสถานการณ์ปัจจุบันกันเถอะ"
    },
    {
        "id":  "pdf-272",
        "word":  "Participate",
        "translation":  "มีส่วนร่วม / เข้าร่วม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/pɑːrˈtɪsɪpeɪt/",
        "sentence":  "Everyone is encouraged to participate in the discussion.",
        "sentenceTranslation":  "ทุกคนได้รับการส่งเสริมให้มีส่วนร่วมในการอภิปราย"
    },
    {
        "id":  "pdf-273",
        "word":  "Phase",
        "translation":  "ระยะ (ของโครงการ)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/feɪz/",
        "sentence":  "We are entering the final phase of the project.",
        "sentenceTranslation":  "เรากำลังเข้าสู่ช่วงสุดท้ายของโครงการ"
    },
    {
        "id":  "pdf-274",
        "word":  "Plan",
        "translation":  "แผนการ / วางแผน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/plæn/",
        "sentence":  "They need to develop a new marketing plan.",
        "sentenceTranslation":  "พวกเขาจำเป็นต้องพัฒนากลยุทธ์การตลาดใหม่"
    },
    {
        "id":  "pdf-275",
        "word":  "Postpone",
        "translation":  "เลื่อนการประชุมออกไป",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/poʊˈspoʊn/",
        "sentence":  "We had to postpone the meeting until next week.",
        "sentenceTranslation":  "เราต้องเลื่อนการประชุมไปสัปดาห์หน้า"
    },
    {
        "id":  "pdf-276",
        "word":  "Presentation",
        "translation":  "การนำเสนอ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌpriːzənˈteɪʃən/",
        "sentence":  "She gave an excellent presentation on the new product.",
        "sentenceTranslation":  "เธอทำการนำเสนอผลิตภัณฑ์ใหม่ได้อย่างยอดเยี่ยม"
    },
    {
        "id":  "pdf-277",
        "word":  "Priority",
        "translation":  "ลำดับความสำคัญ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/praɪˈɔːrəti/",
        "sentence":  "Customer satisfaction is our top priority.",
        "sentenceTranslation":  "ความพึงพอใจของลูกค้าคือสิ่งสำคัญสูงสุดของเรา"
    },
    {
        "id":  "pdf-278",
        "word":  "Procedure",
        "translation":  "ขั้นตอนการปฏิบัติงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/prəˈsiːdʒər/",
        "sentence":  "Follow the correct procedure for submitting reports.",
        "sentenceTranslation":  "ปฏิบัติตามขั้นตอนที่ถูกต้องในการส่งรายงาน"
    },
    {
        "id":  "pdf-279",
        "word":  "Progress report",
        "translation":  "รายงานความคืบหน้า",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈprəʊɡrəs rɪˈpɔːrt/",
        "sentence":  "The project team submits a weekly progress report.",
        "sentenceTranslation":  "ทีมโครงการส่งรายงานความคืบหน้าเป็นรายสัปดาห์"
    },
    {
        "id":  "pdf-280",
        "word":  "Project manager",
        "translation":  "ผู้จัดการโครงการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈprɒdʒɛkt ˈmænɪdʒər/",
        "sentence":  "The project manager is responsible for the overall execution.",
        "sentenceTranslation":  "ผู้จัดการโครงการมีหน้าที่รับผิดชอบการดำเนินงานโดยรวม"
    },
    {
        "id":  "pdf-281",
        "word":  "Proposal",
        "translation":  "ข้อเสนอโครงการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/prəˈpoʊzəl/",
        "sentence":  "The committee is reviewing the new project proposal.",
        "sentenceTranslation":  "คณะกรรมการกำลังทบทวนข้อเสนอโครงการใหม่"
    },
    {
        "id":  "pdf-282",
        "word":  "Quorum",
        "translation":  "ครบองค์ประชุม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈkwɔːrəm/",
        "sentence":  "We couldn\u0027t start the meeting because there wasn\u0027t a quorum.",
        "sentenceTranslation":  "เราไม่สามารถเริ่มการประชุมได้เพราะองค์ประชุมไม่ครบ"
    },
    {
        "id":  "pdf-283",
        "word":  "Remote meeting",
        "translation":  "การประชุมทางไกล (ออนไลน์)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/rɪˈmoʊt ˈmiːtɪŋ/",
        "sentence":  "Due to travel restrictions, we will hold a remote meeting.",
        "sentenceTranslation":  "เนื่องจากข้อจำกัดการเดินทาง เราจะจัดการประชุมทางไกล"
    },
    {
        "id":  "pdf-284",
        "word":  "Report",
        "translation":  "รายงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/rɪˈpɔːrt/",
        "sentence":  "Please submit your monthly report by Friday.",
        "sentenceTranslation":  "โปรดยื่นรายงานประจำเดือนของคุณภายในวันศุกร์"
    },
    {
        "id":  "pdf-285",
        "word":  "Research",
        "translation":  "วิจัย",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈriːsɜːrtʃ/",
        "sentence":  "She is conducting research on renewable energy.",
        "sentenceTranslation":  "เธอกำลังทำการวิจัยเกี่ยวกับพลังงานหมุนเวียน"
    },
    {
        "id":  "pdf-286",
        "word":  "Reschedule",
        "translation":  "จัดตารางเวลาใหม่",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˌriːˈskɛdʒuːl/",
        "sentence":  "We need to reschedule the appointment for next week.",
        "sentenceTranslation":  "เราจำเป็นต้องกำหนดเวลานัดหมายใหม่สำหรับสัปดาห์หน้า"
    },
    {
        "id":  "pdf-287",
        "word":  "Resource",
        "translation":  "ทรัพยากร",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈriːsɔːrs/",
        "sentence":  "The company allocated more resources to the new department.",
        "sentenceTranslation":  "บริษัทได้จัดสรรทรัพยากรเพิ่มเติมให้กับแผนกใหม่"
    },
    {
        "id":  "pdf-288",
        "word":  "Responsibility",
        "translation":  "ความรับผิดชอบ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/rɪˌspɑːnsəˈbɪləti/",
        "sentence":  "Taking responsibility for your actions is important.",
        "sentenceTranslation":  "การรับผิดชอบต่อการกระทำของคุณเป็นสิ่งสำคัญ"
    },
    {
        "id":  "pdf-289",
        "word":  "Review",
        "translation":  "ทบทวน / ตรวจทาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/rɪˈvjuː/",
        "sentence":  "Let\u0027s review the document before sending it out.",
        "sentenceTranslation":  "มาทบทวนเอกสารก่อนส่งออกกันเถอะ"
    },
    {
        "id":  "pdf-290",
        "word":  "Risk assessment",
        "translation":  "การประเมินความเสี่ยง",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈrɪsk əˈsɛsmənt/",
        "sentence":  "A thorough risk assessment is crucial for project planning.",
        "sentenceTranslation":  "การประเมินความเสี่ยงอย่างละเอียดมีความสำคัญต่อการวางแผนโครงการ"
    },
    {
        "id":  "pdf-291",
        "word":  "Schedule",
        "translation":  "ตารางเวลา",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈskɛdʒuːl/",
        "sentence":  "What\u0027s on your schedule for tomorrow?",
        "sentenceTranslation":  "กำหนดการของคุณสำหรับพรุ่งนี้มีอะไรบ้าง"
    },
    {
        "id":  "pdf-292",
        "word":  "Scope of work",
        "translation":  "ขอบเขตของงาน (SOW)",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈskoʊp əv wɜːrk/",
        "sentence":  "We need a clear scope of work before we can start the project.",
        "sentenceTranslation":  "เราต้องการขอบเขตของงานที่ชัดเจนก่อนที่เราจะเริ่มโครงการได้"
    },
    {
        "id":  "pdf-293",
        "word":  "Session",
        "translation":  "ช่วงเวลาประชุม / ช่วงเวลาอบรม",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈsɛʃən/",
        "sentence":  "The training session will last for two hours.",
        "sentenceTranslation":  "การฝึกอบรมจะมีระยะเวลาสองชั่วโมง"
    },
    {
        "id":  "pdf-294",
        "word":  "Stakeholder",
        "translation":  "ผู้มีส่วนได้ส่วนเสียในโครงการ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈsteɪkˌhoʊldər/",
        "sentence":  "It\u0027s important to involve all key stakeholders in the decision-making process.",
        "sentenceTranslation":  "เป็นสิ่งสำคัญที่จะต้องให้ผู้มีส่วนได้ส่วนเสียหลักทั้งหมดมีส่วนร่วมในกระบวนการตัดสินใจ"
    },
    {
        "id":  "pdf-295",
        "word":  "Strategy",
        "translation":  "กลยุทธ์",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈstrætədʒi/",
        "sentence":  "The company developed a new marketing strategy.",
        "sentenceTranslation":  "บริษัทได้พัฒนากลยุทธ์การตลาดใหม่"
    },
    {
        "id":  "pdf-296",
        "word":  "Summary",
        "translation":  "สรุป",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈsʌməri/",
        "sentence":  "Please provide a brief summary of the meeting.",
        "sentenceTranslation":  "โปรดสรุปการประชุมโดยย่อ"
    },
    {
        "id":  "pdf-297",
        "word":  "Task",
        "translation":  "งานที่ต้องทำ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/tæsk/",
        "sentence":  "Completing this task is our top priority.",
        "sentenceTranslation":  "การทำงานนี้ให้เสร็จเป็นสิ่งสำคัญสูงสุดของเรา"
    },
    {
        "id":  "pdf-298",
        "word":  "Timeline",
        "translation":  "กำหนดเวลาของกิจกรรมต่างๆ",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈtaɪmˌlaɪn/",
        "sentence":  "The project timeline extends over six months.",
        "sentenceTranslation":  "กำหนดระยะเวลาของโครงการขยายไปกว่าหกเดือน"
    },
    {
        "id":  "pdf-299",
        "word":  "Urgent",
        "translation":  "เร่งด่วน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈɜːrdʒənt/",
        "sentence":  "This is an urgent matter that requires immediate attention.",
        "sentenceTranslation":  "นี่เป็นเรื่องด่วนที่ต้องได้รับการแก้ไขทันที"
    },
    {
        "id":  "pdf-300",
        "word":  "Workflow",
        "translation":  "ขั้นตอนหรือกระบวนการทำงาน",
        "category":  "Meetings \u0026 Project",
        "ipa":  "/ˈwɜːrkˌfloʊ/",
        "sentence":  "We need to optimize our workflow to improve efficiency.",
        "sentenceTranslation":  "เราจำเป็นต้องปรับปรุงขั้นตอนการทำงานเพื่อเพิ่มประสิทธิภาพ"
    },
    {
        "id":  "pdf-301",
        "word":  "Advertise",
        "translation":  "โฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈædvərtaɪz/",
        "sentence":  "Companies often advertise their new products on social media.",
        "sentenceTranslation":  "บริษัทต่างๆ มักจะโฆษณาสินค้าใหม่ของตนบนโซเชียลมีเดีย"
    },
    {
        "id":  "pdf-302",
        "word":  "Advertisement",
        "translation":  "โฆษณา / ป้ายโฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌædvərˈtaɪzmənt/",
        "sentence":  "I saw an advertisement for a new car on TV last night.",
        "sentenceTranslation":  "เมื่อคืนฉันเห็นโฆษณารถคันใหม่ทางทีวี"
    },
    {
        "id":  "pdf-303",
        "word":  "Advertising",
        "translation":  "การโฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈædvərtaɪzɪŋ/",
        "sentence":  "Good advertising is crucial for business growth.",
        "sentenceTranslation":  "การโฆษณาที่ดีมีความสำคัญอย่างยิ่งต่อการเติบโตของธุรกิจ"
    },
    {
        "id":  "pdf-304",
        "word":  "Affiliate",
        "translation":  "การตลาดแบบช่วยขาย (ได้คอมมิชชัน)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/əˈfɪliət/",
        "sentence":  "Our company partners with several affiliates to expand our reach.",
        "sentenceTranslation":  "บริษัทของเราเป็นพันธมิตรกับบริษัทในเครือหลายแห่งเพื่อขยายการเข้าถึง"
    },
    {
        "id":  "pdf-305",
        "word":  "Awareness",
        "translation":  "การรับรู้ (เช่น Brand awareness)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/əˈwɛərnəs/",
        "sentence":  "The campaign aims to increase public awareness of environmental issues.",
        "sentenceTranslation":  "แคมเปญนี้มีวัตถุประสงค์เพื่อเพิ่มการรับรู้ของสาธารณชนเกี่ยวกับปัญหาสิ่งแวดล้อม"
    },
    {
        "id":  "pdf-306",
        "word":  "Banner",
        "translation":  "ป้ายโฆษณาออนไลน์หรือออฟไลน์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈbænər/",
        "sentence":  "We placed a banner advertisement on a popular website.",
        "sentenceTranslation":  "เราวางโฆษณาแบนเนอร์บนเว็บไซต์ยอดนิยม"
    },
    {
        "id":  "pdf-307",
        "word":  "Benchmark",
        "translation":  "เกณฑ์มาตรฐานในการเปรียบเทียบ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈbɛntʃmɑːrk/",
        "sentence":  "This project will set a new benchmark for quality in the industry.",
        "sentenceTranslation":  "โครงการนี้จะกำหนดมาตรฐานใหม่สำหรับคุณภาพในอุตสาหกรรม"
    },
    {
        "id":  "pdf-308",
        "word":  "Billboard",
        "translation":  "ป้ายโฆษณาขนาดใหญ่ตามทางด่วน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈbɪlbɔːrd/",
        "sentence":  "The company rented a large billboard to promote their new product.",
        "sentenceTranslation":  "บริษัทเช่าป้ายโฆษณาขนาดใหญ่เพื่อโปรโมทผลิตภัณฑ์ใหม่ของตน"
    },
    {
        "id":  "pdf-309",
        "word":  "Brand identity",
        "translation":  "อัตลักษณ์หรือตัวตนของแบรนด์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/brænd aɪˈdɛntəti/",
        "sentence":  "A strong brand identity is essential for standing out in the market.",
        "sentenceTranslation":  "อัตลักษณ์ของแบรนด์ที่แข็งแกร่งเป็นสิ่งสำคัญสำหรับการโดดเด่นในตลาด"
    },
    {
        "id":  "pdf-310",
        "word":  "Brand loyalty",
        "translation":  "ความจงรักภักดีต่อแบรนด์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/brænd ˈlɔɪəlti/",
        "sentence":  "Excellent customer service can significantly boost brand loyalty.",
        "sentenceTranslation":  "การบริการลูกค้าที่เป็นเลิศสามารถส่งเสริมความภักดีต่อแบรนด์ได้อย่างมาก"
    },
    {
        "id":  "pdf-311",
        "word":  "Brochure",
        "translation":  "แผ่นพับโฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈbroʊʃʊər/",
        "sentence":  "Please take a brochure to learn more about our services.",
        "sentenceTranslation":  "โปรดหยิบแผ่นพับเพื่อเรียนรู้เพิ่มเติมเกี่ยวกับบริการของเรา"
    },
    {
        "id":  "pdf-312",
        "word":  "Buyer persona",
        "translation":  "บุคลิกภาพของลูกค้ากลุ่มเป้าหมาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈbaɪər pərˈsoʊnə/",
        "sentence":  "Creating detailed buyer personas helps us understand our target audience better.",
        "sentenceTranslation":  "การสร้างตัวแทนผู้ซื้ออย่างละเอียดช่วยให้เราเข้าใจกลุ่มเป้าหมายของเราได้ดีขึ้น"
    },
    {
        "id":  "pdf-313",
        "word":  "Campaign",
        "translation":  "แคมเปญ / กิจกรรมทางการตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/kæmˈpeɪn/",
        "sentence":  "The marketing team launched a new campaign to attract younger customers.",
        "sentenceTranslation":  "ทีมการตลาดได้เปิดตัวแคมเปญใหม่เพื่อดึงดูดลูกค้ารุ่นใหม่"
    },
    {
        "id":  "pdf-314",
        "word":  "Catalog",
        "translation":  "สมุดรายชื่อสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈkætəlɔːɡ/",
        "sentence":  "You can browse our online catalog to see all available products.",
        "sentenceTranslation":  "คุณสามารถเรียกดูแคตตาล็อกออนไลน์ของเราเพื่อดูผลิตภัณฑ์ทั้งหมดที่มี"
    },
    {
        "id":  "pdf-315",
        "word":  "Channel",
        "translation":  "ช่องทางการขายหรือสื่อสาร",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈtʃænl/",
        "sentence":  "We use multiple channels to reach our customers, including email and social media.",
        "sentenceTranslation":  "เราใช้หลายช่องทางในการเข้าถึงลูกค้าของเรา รวมถึงอีเมลและโซเชียลมีเดีย"
    },
    {
        "id":  "pdf-316",
        "word":  "Closing a deal",
        "translation":  "การปิดการขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈkloʊzɪŋ ə dil/",
        "sentence":  "After weeks of negotiation, we are finally closing a deal with the client.",
        "sentenceTranslation":  "หลังจากเจรจากันมาหลายสัปดาห์ ในที่สุดเราก็กำลังปิดการขายกับลูกค้า"
    },
    {
        "id":  "pdf-317",
        "word":  "Cold call",
        "translation":  "การโทรหาลูกค้าที่ไม่รู้จักมาก่อน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/koʊld kɔːl/",
        "sentence":  "Many salespeople still rely on cold calls to generate new leads.",
        "sentenceTranslation":  "พนักงานขายหลายคนยังคงอาศัยการโทรศัพท์หาลูกค้าที่ไม่รู้จักมาก่อนเพื่อสร้างโอกาสในการขายใหม่ๆ"
    },
    {
        "id":  "pdf-318",
        "word":  "Commission",
        "translation":  "ค่าคอมมิชชัน / นายหน้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/kəˈmɪʃən/",
        "sentence":  "The sales agent earns a generous commission on every successful sale.",
        "sentenceTranslation":  "ตัวแทนขายได้รับค่านายหน้าจำนวนมากจากการขายที่ประสบความสำเร็จทุกครั้ง"
    },
    {
        "id":  "pdf-319",
        "word":  "Competitor",
        "translation":  "คู่แข่งทางการค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/kəmˈpɛtɪtər/",
        "sentence":  "Our main competitor just launched a similar product at a lower price.",
        "sentenceTranslation":  "คู่แข่งหลักของเราเพิ่งเปิดตัวผลิตภัณฑ์ที่คล้ายกันในราคาที่ต่ำกว่า"
    },
    {
        "id":  "pdf-320",
        "word":  "Conversion rate",
        "translation":  "อัตราส่วนผู้ซื้อจริงต่อผู้เข้าชม",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/kənˈvɜːrʒn reɪt/",
        "sentence":  "Optimizing our website design can significantly improve our conversion rate.",
        "sentenceTranslation":  "การปรับปรุงการออกแบบเว็บไซต์ของเราสามารถปรับปรุงอัตราการเปลี่ยนแปลงได้อย่างมาก"
    },
    {
        "id":  "pdf-321",
        "word":  "Copyright",
        "translation":  "ลิขสิทธิ์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈkɒpiraɪt/",
        "sentence":  "Please respect the copyright of this image.",
        "sentenceTranslation":  "โปรดเคารพลิขสิทธิ์ของรูปภาพนี้"
    },
    {
        "id":  "pdf-322",
        "word":  "CTA (Call to action)",
        "translation":  "คำกระตุ้นให้ลูกค้าตัดสินใจ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/kɔːl tuː ˈækʃən/",
        "sentence":  "Every good advertisement needs a clear CTA.",
        "sentenceTranslation":  "โฆษณาที่ดีทุกชิ้นต้องมี Call to Action ที่ชัดเจน"
    },
    {
        "id":  "pdf-323",
        "word":  "CTR (Click-through rate)",
        "translation":  "อัตราการคลิกต่อการมองเห็น",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/klɪk θruː reɪt/",
        "sentence":  "We need to improve our CTR to get more visitors.",
        "sentenceTranslation":  "เราต้องปรับปรุงอัตราการคลิกผ่านเพื่อดึงดูดผู้เยี่ยมชมให้มากขึ้น"
    },
    {
        "id":  "pdf-324",
        "word":  "Customer journey",
        "translation":  "เส้นทางการตัดสินใจของลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈkʌstəmər ˈdʒɜːrni/",
        "sentence":  "Understanding the customer journey helps us optimize their experience.",
        "sentenceTranslation":  "การเข้าใจเส้นทางของลูกค้าช่วยให้เราปรับปรุงประสบการณ์ของพวกเขาให้ดีที่สุด"
    },
    {
        "id":  "pdf-325",
        "word":  "Demographics",
        "translation":  "ข้อมูลประชากร (อายุ เพศ รายได้)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌdɛməˈɡræfɪks/",
        "sentence":  "The demographics of our target audience are young adults.",
        "sentenceTranslation":  "ข้อมูลประชากรของกลุ่มเป้าหมายของเราคือผู้ใหญ่ตอนต้น"
    },
    {
        "id":  "pdf-326",
        "word":  "Digital marketing",
        "translation":  "การตลาดดิจิทัล",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈdɪdʒɪtəl ˈmɑːrkɪtɪŋ/",
        "sentence":  "Digital marketing is essential for modern businesses.",
        "sentenceTranslation":  "การตลาดดิจิทัลเป็นสิ่งจำเป็นสำหรับธุรกิจสมัยใหม่"
    },
    {
        "id":  "pdf-327",
        "word":  "Direct marketing",
        "translation":  "การตลาดแบบตรง",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/daɪˈrɛkt ˈmɑːrkɪtɪŋ/",
        "sentence":  "Direct marketing often involves sending emails or mail to customers.",
        "sentenceTranslation":  "การตลาดทางตรงมักจะเกี่ยวข้องกับการส่งอีเมลหรือจดหมายถึงลูกค้า"
    },
    {
        "id":  "pdf-328",
        "word":  "Discount",
        "translation":  "ส่วนลด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈdɪskaʊnt/",
        "sentence":  "They offered a 10% discount for early bird registration.",
        "sentenceTranslation":  "พวกเขาเสนอส่วนลด 10% สำหรับผู้ที่ลงทะเบียนล่วงหน้า"
    },
    {
        "id":  "pdf-329",
        "word":  "Display",
        "translation":  "การจัดแสดงสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/dɪˈspleɪ/",
        "sentence":  "The store used an attractive display to showcase its new products.",
        "sentenceTranslation":  "ร้านค้าใช้การจัดแสดงที่น่าดึงดูดเพื่อแสดงสินค้าใหม่"
    },
    {
        "id":  "pdf-330",
        "word":  "Distribution",
        "translation":  "การจัดจำหน่ายกระจายสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌdɪstrɪˈbjuːʃən/",
        "sentence":  "Effective distribution is key to getting products to customers.",
        "sentenceTranslation":  "การจัดจำหน่ายที่มีประสิทธิภาพเป็นกุญแจสำคัญในการนำสินค้าไปถึงลูกค้า"
    },
    {
        "id":  "pdf-331",
        "word":  "E-commerce",
        "translation":  "การพาณิชย์อิเล็กทรอนิกส์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈiː kɒmərs/",
        "sentence":  "Many businesses have shifted to e-commerce due to its convenience.",
        "sentenceTranslation":  "ธุรกิจจำนวนมากได้เปลี่ยนไปใช้พาณิชย์อิเล็กทรอนิกส์เนื่องจากความสะดวกสบาย"
    },
    {
        "id":  "pdf-332",
        "word":  "Endorsement",
        "translation":  "การใช้คนดังการันตีหรือรีวิวสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ɪnˈdɔːrsmənt/",
        "sentence":  "Her endorsement of the product significantly boosted sales.",
        "sentenceTranslation":  "การรับรองผลิตภัณฑ์ของเธอช่วยเพิ่มยอดขายได้อย่างมาก"
    },
    {
        "id":  "pdf-333",
        "word":  "Engagement",
        "translation":  "การมีส่วนร่วม (ไลก์ แชร์ คอมเมนต์)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ɪnˈɡeɪdʒmənt/",
        "sentence":  "We are tracking customer engagement with our social media posts.",
        "sentenceTranslation":  "เรากำลังติดตามการมีส่วนร่วมของลูกค้ากับโพสต์โซเชียลมีเดียของเรา"
    },
    {
        "id":  "pdf-334",
        "word":  "Exhibit",
        "translation":  "จัดแสดง / นิทรรศการ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ɪɡˈzɪbɪt/",
        "sentence":  "The museum will exhibit ancient artifacts next month.",
        "sentenceTranslation":  "พิพิธภัณฑ์จะจัดแสดงโบราณวัตถุในเดือนหน้า"
    },
    {
        "id":  "pdf-335",
        "word":  "Exhibition",
        "translation":  "งานนิทรรศการ / งานแฟร์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌɛksəˈbɪʃən/",
        "sentence":  "The art exhibition will open next month.",
        "sentenceTranslation":  "นิทรรศการศิลปะจะเปิดในเดือนหน้า"
    },
    {
        "id":  "pdf-336",
        "word":  "Flyer",
        "translation":  "ใบปลิว",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈflaɪər/",
        "sentence":  "We handed out flyers to promote the event.",
        "sentenceTranslation":  "เราแจกใบปลิวเพื่อโปรโมตงาน"
    },
    {
        "id":  "pdf-337",
        "word":  "Focus group",
        "translation":  "กลุ่มเป้าหมายในการทำวิจัย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈfoʊkəs ɡruːp/",
        "sentence":  "We conducted a focus group to get feedback on the new product.",
        "sentenceTranslation":  "เราจัดกลุ่มตัวอย่างเพื่อรับฟังความคิดเห็นเกี่ยวกับผลิตภัณฑ์ใหม่"
    },
    {
        "id":  "pdf-338",
        "word":  "Funnel",
        "translation":  "กรวยการขาย (ขั้นตอนเปลี่ยนคนดูเป็นลูกค้า)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈfʌnəl/",
        "sentence":  "The marketing team is optimizing the sales funnel.",
        "sentenceTranslation":  "ทีมการตลาดกำลังปรับปรุงช่องทางการขาย"
    },
    {
        "id":  "pdf-339",
        "word":  "Giveaway",
        "translation":  "ของสมนาคุณ / ของแจกฟรี",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈɡɪvəˌweɪ/",
        "sentence":  "Don\u0027t miss our special giveaway next week.",
        "sentenceTranslation":  "อย่าพลาดของแจกฟรีสุดพิเศษของเราในสัปดาห์หน้า"
    },
    {
        "id":  "pdf-340",
        "word":  "Growth",
        "translation":  "การเติบโต",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈɡroʊθ/",
        "sentence":  "The company experienced significant growth last quarter.",
        "sentenceTranslation":  "บริษัทมีการเติบโตอย่างมีนัยสำคัญในไตรมาสที่แล้ว"
    },
    {
        "id":  "pdf-341",
        "word":  "Inbound marketing",
        "translation":  "การตลาดแบบดึงดูดลูกค้าเข้ามา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈɪnbaʊnd ˈmɑːrkɪtɪŋ/",
        "sentence":  "Inbound marketing focuses on attracting customers naturally.",
        "sentenceTranslation":  "การตลาดแบบดึงดูดเน้นการดึงดูดลูกค้าอย่างเป็นธรรมชาติ"
    },
    {
        "id":  "pdf-342",
        "word":  "Influencer",
        "translation":  "ผู้มีอิทธิพลบนโลกโซเชียล",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈɪnfluənsər/",
        "sentence":  "Many brands collaborate with social media influencers.",
        "sentenceTranslation":  "หลายแบรนด์ร่วมมือกับผู้มีอิทธิพลทางโซเชียลมีเดีย"
    },
    {
        "id":  "pdf-343",
        "word":  "Insight",
        "translation":  "ข้อมูลเชิงลึกของลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈɪnsaɪt/",
        "sentence":  "We gained valuable insights from the customer feedback.",
        "sentenceTranslation":  "เราได้รับข้อมูลเชิงลึกอันมีค่าจากข้อเสนอแนะของลูกค้า"
    },
    {
        "id":  "pdf-344",
        "word":  "Launch",
        "translation":  "การเปิดตัวสินค้าใหม่",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈlɔːntʃ/",
        "sentence":  "The company plans to launch a new product next month.",
        "sentenceTranslation":  "บริษัทวางแผนที่จะเปิดตัวผลิตภัณฑ์ใหม่ในเดือนหน้า"
    },
    {
        "id":  "pdf-345",
        "word":  "Lead",
        "translation":  "รายชื่อผู้ที่มีแนวโน้มจะเป็นลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/liːd/",
        "sentence":  "Our sales team followed up on every new lead.",
        "sentenceTranslation":  "ทีมขายของเราติดตามผู้สนใจใหม่ทุกราย"
    },
    {
        "id":  "pdf-346",
        "word":  "Lead generation",
        "translation":  "การค้นหาและสร้างรายชื่อลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/liːd ˌdʒɛnəˈreɪʃən/",
        "sentence":  "Content marketing is an effective strategy for lead generation.",
        "sentenceTranslation":  "การตลาดเนื้อหาเป็นกลยุทธ์ที่มีประสิทธิภาพสำหรับการสร้างผู้สนใจ"
    },
    {
        "id":  "pdf-347",
        "word":  "Logo",
        "translation":  "โลโก้ / เครื่องหมายการค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈloʊɡoʊ/",
        "sentence":  "The company decided to update its brand logo.",
        "sentenceTranslation":  "บริษัทตัดสินใจปรับปรุงโลโก้แบรนด์ของตน"
    },
    {
        "id":  "pdf-348",
        "word":  "Market research",
        "translation":  "การวิจัยตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɑːrkɪt rɪˌsɜːrtʃ/",
        "sentence":  "We need to conduct thorough market research before launching.",
        "sentenceTranslation":  "เราจำเป็นต้องทำการวิจัยตลาดอย่างละเอียดก่อนการเปิดตัว"
    },
    {
        "id":  "pdf-349",
        "word":  "Market share",
        "translation":  "ส่วนแบ่งทางการตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɑːrkɪt ʃɛər/",
        "sentence":  "The company aims to increase its market share by 10%.",
        "sentenceTranslation":  "บริษัทตั้งเป้าที่จะเพิ่มส่วนแบ่งการตลาด 10%"
    },
    {
        "id":  "pdf-350",
        "word":  "Market trend",
        "translation":  "แนวโน้มของตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɑːrkɪt trɛnd/",
        "sentence":  "The company closely monitors the latest market trend to adapt its strategies.",
        "sentenceTranslation":  "บริษัทติดตามแนวโน้มตลาดล่าสุดอย่างใกล้ชิดเพื่อปรับกลยุทธ์ของตน"
    },
    {
        "id":  "pdf-351",
        "word":  "Marketing mix",
        "translation":  "ส่วนผสมทางการตลาด (4Ps)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɑːrkɪtɪŋ mɪks/",
        "sentence":  "Understanding the marketing mix (4Ps) is crucial for any successful product launch.",
        "sentenceTranslation":  "การทำความเข้าใจส่วนประสมทางการตลาด (4Ps) เป็นสิ่งสำคัญสำหรับการเปิดตัวผลิตภัณฑ์ที่ประสบความสำเร็จ"
    },
    {
        "id":  "pdf-352",
        "word":  "Merchandise",
        "translation":  "สินค้า / ของที่ระลึก",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɜːrtʃəndaɪz/",
        "sentence":  "The store displayed its new merchandise prominently at the front.",
        "sentenceTranslation":  "ร้านค้าจัดแสดงสินค้าใหม่ของตนที่ด้านหน้าอย่างโดดเด่น"
    },
    {
        "id":  "pdf-353",
        "word":  "Merchandising",
        "translation":  "การบริหารและจัดแสดงสินค้าเพื่อขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈmɜːrtʃəndaɪzɪŋ/",
        "sentence":  "Effective merchandising can significantly boost sales by attracting customers.",
        "sentenceTranslation":  "การจัดแสดงสินค้าอย่างมีประสิทธิภาพสามารถเพิ่มยอดขายได้อย่างมากโดยดึงดูดลูกค้า"
    },
    {
        "id":  "pdf-354",
        "word":  "Niche market",
        "translation":  "ตลาดเฉพาะกลุ่ม",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/nɪtʃ ˈmɑːrkɪt/",
        "sentence":  "They found success by targeting a niche market with specialized products.",
        "sentenceTranslation":  "พวกเขาประสบความสำเร็จโดยการกำหนดเป้าหมายตลาดเฉพาะกลุ่มด้วยผลิตภัณฑ์พิเศษ"
    },
    {
        "id":  "pdf-355",
        "word":  "Objective",
        "translation":  "วัตถุประสงค์ยอดขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/əbˈdʒɛktɪv/",
        "sentence":  "Our main objective this quarter is to increase customer satisfaction.",
        "sentenceTranslation":  "วัตถุประสงค์หลักของเราในไตรมาสนี้คือการเพิ่มความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-356",
        "word":  "Outbound marketing",
        "translation":  "การตลาดแบบรุกออกไปหาลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈaʊtbaʊnd ˈmɑːrkɪtɪŋ/",
        "sentence":  "Traditional outbound marketing methods include TV commercials and cold calls.",
        "sentenceTranslation":  "วิธีการตลาดแบบดั้งเดิมที่เน้นการส่งออกประกอบด้วยโฆษณาทางทีวีและการโทรเย็น"
    },
    {
        "id":  "pdf-357",
        "word":  "Package",
        "translation":  "บรรจุภัณฑ์ / แพ็กเกจ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈpækɪdʒ/",
        "sentence":  "The company offers a competitive benefits package to its employees.",
        "sentenceTranslation":  "บริษัทเสนอแพ็คเกจสวัสดิการที่สามารถแข่งขันได้แก่พนักงานของตน"
    },
    {
        "id":  "pdf-358",
        "word":  "Packaging",
        "translation":  "การออกแบบบรรจุภัณฑ์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈpækɪdʒɪŋ/",
        "sentence":  "Attractive packaging plays a vital role in consumer purchasing decisions.",
        "sentenceTranslation":  "บรรจุภัณฑ์ที่น่าดึงดูดมีบทบาทสำคัญในการตัดสินใจซื้อของผู้บริโภค"
    },
    {
        "id":  "pdf-359",
        "word":  "Penetrate",
        "translation":  "เจาะตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈpɛnɪtreɪt/",
        "sentence":  "The new smartphone brand aims to penetrate the competitive Asian market.",
        "sentenceTranslation":  "แบรนด์สมาร์ทโฟนใหม่มีเป้าหมายที่จะเจาะตลาดเอเชียที่มีการแข่งขันสูง"
    },
    {
        "id":  "pdf-360",
        "word":  "Pitch",
        "translation":  "การนำเสนอเพื่อขายงานหรือสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/pɪtʃ/",
        "sentence":  "She prepared a compelling pitch to present her startup idea to investors.",
        "sentenceTranslation":  "เธอเตรียมการนำเสนอที่น่าสนใจเพื่อเสนอแนวคิดสตาร์ทอัพของเธอแก่นักลงทุน"
    },
    {
        "id":  "pdf-361",
        "word":  "Placement",
        "translation":  "การจัดวางสินค้าหรือโฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/pleɪsmənt/",
        "sentence":  "The strategic placement of the product helped increase sales.",
        "sentenceTranslation":  "การจัดวางสินค้าอย่างมีกลยุทธ์ช่วยเพิ่มยอดขาย"
    },
    {
        "id":  "pdf-362",
        "word":  "Platform",
        "translation":  "แพลตฟอร์มในการขายหรือสื่อสาร",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈplætfɔːrm/",
        "sentence":  "We use an online platform to manage our customer interactions.",
        "sentenceTranslation":  "เราใช้แพลตฟอร์มออนไลน์เพื่อจัดการการโต้ตอบกับลูกค้าของเรา"
    },
    {
        "id":  "pdf-363",
        "word":  "Positioning",
        "translation":  "การวางตำแหน่งของแบรนด์ในตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/pəˈzɪʃənɪŋ/",
        "sentence":  "Effective brand positioning is crucial for market success.",
        "sentenceTranslation":  "การวางตำแหน่งแบรนด์ที่มีประสิทธิภาพเป็นสิ่งสำคัญสำหรับความสำเร็จในตลาด"
    },
    {
        "id":  "pdf-364",
        "word":  "Potential",
        "translation":  "ศักยภาพ / ที่มีแนวโน้มซื้อ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/pəˈtɛnʃəl/",
        "sentence":  "The new employee has great potential for growth within the company.",
        "sentenceTranslation":  "พนักงานใหม่มีศักยภาพที่ดีเยี่ยมในการเติบโตภายในบริษัท"
    },
    {
        "id":  "pdf-365",
        "word":  "PR (Public relations)",
        "translation":  "การประชาสัมพันธ์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌpiː ˈɑːr/",
        "sentence":  "Good PR is essential for maintaining a positive public image.",
        "sentenceTranslation":  "การประชาสัมพันธ์ที่ดีเป็นสิ่งสำคัญสำหรับการรักษาภาพลักษณ์ที่ดีต่อสาธารณะ"
    },
    {
        "id":  "pdf-366",
        "word":  "Pricing",
        "translation":  "การตั้งราคา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈpraɪsɪŋ/",
        "sentence":  "Our pricing strategy needs to be competitive yet profitable.",
        "sentenceTranslation":  "กลยุทธ์การกำหนดราคาของเราต้องสามารถแข่งขันได้แต่ยังคงทำกำไรได้"
    },
    {
        "id":  "pdf-367",
        "word":  "Product",
        "translation":  "ผลิตภัณฑ์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈprɒdʌkt/",
        "sentence":  "The company launched a new product last month.",
        "sentenceTranslation":  "บริษัทเปิดตัวผลิตภัณฑ์ใหม่เมื่อเดือนที่แล้ว"
    },
    {
        "id":  "pdf-368",
        "word":  "Profit margin",
        "translation":  "อัตรากำไรขั้นต้น",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈprɒfɪt ˈmɑːrdʒɪn/",
        "sentence":  "We aim to improve our profit margin this quarter.",
        "sentenceTranslation":  "เราตั้งเป้าที่จะปรับปรุงอัตรากำไรของเราในไตรมาสนี้"
    },
    {
        "id":  "pdf-369",
        "word":  "Promote",
        "translation":  "ส่งเสริมการขาย / โปรโมต",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/prəˈmoʊt/",
        "sentence":  "We need to promote our new services more actively.",
        "sentenceTranslation":  "เราจำเป็นต้องโปรโมทบริการใหม่ของเราอย่างกระตือรือร้นมากขึ้น"
    },
    {
        "id":  "pdf-370",
        "word":  "Promotion",
        "translation":  "การส่งเสริมการขาย / โปรโมชัน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/prəˈmoʊʃən/",
        "sentence":  "The store is offering a special promotion on electronics this week.",
        "sentenceTranslation":  "ร้านค้ากำลังจัดโปรโมชั่นพิเศษสำหรับเครื่องใช้ไฟฟ้าในสัปดาห์นี้"
    },
    {
        "id":  "pdf-371",
        "word":  "Prospect",
        "translation":  "ผู้ที่มีโอกาสซื้อสินค้าสูง",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈprɒspɛkt/",
        "sentence":  "Our sales team is working on converting new prospects into customers.",
        "sentenceTranslation":  "ทีมขายของเรากำลังทำงานเพื่อเปลี่ยนผู้มีแนวโน้มเป็นลูกค้าใหม่ให้กลายเป็นลูกค้า"
    },
    {
        "id":  "pdf-372",
        "word":  "Publicity",
        "translation":  "การเผยแพร่ข่าวสารสู่สาธารณะ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/pʌbˈlɪsəti/",
        "sentence":  "The event generated a lot of positive publicity for the brand.",
        "sentenceTranslation":  "งานนี้สร้างการประชาสัมพันธ์เชิงบวกจำนวนมากให้กับแบรนด์"
    },
    {
        "id":  "pdf-373",
        "word":  "Purchase",
        "translation":  "ซื้อ / สินค้าที่ซื้อ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈpɜːrtʃəs/",
        "sentence":  "Customers can complete their purchase online or in-store.",
        "sentenceTranslation":  "ลูกค้าสามารถดำเนินการซื้อได้ทางออนไลน์หรือที่ร้านค้า"
    },
    {
        "id":  "pdf-374",
        "word":  "Quota",
        "translation":  "โควตา / ยอดขายที่ต้องทำให้ได้",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈkwoʊtə/",
        "sentence":  "The sales representative met their monthly quota ahead of schedule.",
        "sentenceTranslation":  "พนักงานขายทำยอดขายได้ตามเป้าหมายรายเดือนล่วงหน้า"
    },
    {
        "id":  "pdf-375",
        "word":  "Refund",
        "translation":  "การคืนเงิน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈriːfʌnd/",
        "sentence":  "You can request a full refund if you are not satisfied with the product.",
        "sentenceTranslation":  "คุณสามารถขอคืนเงินเต็มจำนวนได้หากไม่พอใจกับผลิตภัณฑ์"
    },
    {
        "id":  "pdf-376",
        "word":  "Retail",
        "translation":  "การขายปลีก",
        "category":  "General",
        "ipa":  "/ˈriːteɪl/",
        "sentence":  "The company operates primarily in the retail sector.",
        "sentenceTranslation":  "บริษัทดำเนินงานเป็นหลักในภาคการค้าปลีก"
    },
    {
        "id":  "pdf-377",
        "word":  "Retailer",
        "translation":  "ผู้ค้าปลีก",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈriːteɪlər/",
        "sentence":  "We partner with several large retailers to distribute our goods.",
        "sentenceTranslation":  "เราเป็นพันธมิตรกับผู้ค้าปลีกรายใหญ่หลายรายเพื่อจัดจำหน่ายสินค้าของเรา"
    },
    {
        "id":  "pdf-378",
        "word":  "ROI (Return on investment)",
        "translation":  "ผลตอบแทนจากการลงทุน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌɑːr oʊ ˈaɪ/",
        "sentence":  "Calculating ROI is crucial for evaluating project success.",
        "sentenceTranslation":  "การคำนวณ ROI เป็นสิ่งสำคัญสำหรับการประเมินความสำเร็จของโครงการ"
    },
    {
        "id":  "pdf-379",
        "word":  "Sales executive",
        "translation":  "เจ้าหน้าที่บริหารงานขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈseɪlz ɪɡˈzɛkjətɪv/",
        "sentence":  "A sales executive is responsible for managing client accounts.",
        "sentenceTranslation":  "ผู้บริหารฝ่ายขายมีหน้าที่รับผิดชอบในการจัดการบัญชีลูกค้า"
    },
    {
        "id":  "pdf-380",
        "word":  "Sales pitch",
        "translation":  "คำพูดนำเสนอขายสินค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈseɪlz pɪtʃ/",
        "sentence":  "He delivered a compelling sales pitch that secured the deal.",
        "sentenceTranslation":  "เขาได้นำเสนอการขายที่น่าสนใจซึ่งทำให้ได้ข้อตกลง"
    },
    {
        "id":  "pdf-381",
        "word":  "Sales representative",
        "translation":  "ตัวแทนฝ่ายขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/seɪlz ˌrɛprɪˈzɛntətɪv/",
        "sentence":  "Our sales representative will contact you shortly.",
        "sentenceTranslation":  "ตัวแทนฝ่ายขายของเราจะติดต่อคุณในไม่ช้า"
    },
    {
        "id":  "pdf-382",
        "word":  "Sales volume",
        "translation":  "ปริมาณยอดขาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/seɪlz ˈvɒljuːm/",
        "sentence":  "The company aims to increase its sales volume this quarter.",
        "sentenceTranslation":  "บริษัทตั้งเป้าที่จะเพิ่มปริมาณการขายในไตรมาสนี้"
    },
    {
        "id":  "pdf-383",
        "word":  "Sample",
        "translation":  "สินค้าตัวอย่าง",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈsæmpl/",
        "sentence":  "Please take a free sample of our new product.",
        "sentenceTranslation":  "กรุณารับตัวอย่างฟรีของผลิตภัณฑ์ใหม่ของเรา"
    },
    {
        "id":  "pdf-384",
        "word":  "Segment",
        "translation":  "กลุ่มตลาดย่อย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈsɛɡmənt/",
        "sentence":  "We target a specific market segment with this campaign.",
        "sentenceTranslation":  "เรากำหนดเป้าหมายกลุ่มตลาดเฉพาะด้วยแคมเปญนี้"
    },
    {
        "id":  "pdf-385",
        "word":  "Segmentation",
        "translation":  "การแบ่งส่วนตลาด",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌsɛɡmɛnˈteɪʃən/",
        "sentence":  "Market segmentation helps us understand our customers better.",
        "sentenceTranslation":  "การแบ่งส่วนตลาดช่วยให้เราเข้าใจลูกค้าของเราได้ดีขึ้น"
    },
    {
        "id":  "pdf-386",
        "word":  "SEO",
        "translation":  "การปรับแต่งเว็บไซต์ให้ติดหน้าแรก",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌɛs iː ˈoʊ/",
        "sentence":  "Good SEO practices are crucial for online visibility.",
        "sentenceTranslation":  "แนวปฏิบัติ SEO ที่ดีมีความสำคัญต่อการมองเห็นทางออนไลน์"
    },
    {
        "id":  "pdf-387",
        "word":  "Slogan",
        "translation":  "สโลแกน / คำขวัญโฆษณา",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈsloʊɡən/",
        "sentence":  "The company\u0027s new slogan is catchy and memorable.",
        "sentenceTranslation":  "สโลแกนใหม่ของบริษัทติดหูและน่าจดจำ"
    },
    {
        "id":  "pdf-388",
        "word":  "Social media",
        "translation":  "สื่อสังคมออนไลน์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌsoʊʃəl ˈmiːdiə/",
        "sentence":  "Social media platforms are powerful tools for marketing.",
        "sentenceTranslation":  "แพลตฟอร์มโซเชียลมีเดียเป็นเครื่องมือที่มีประสิทธิภาพสำหรับการตลาด"
    },
    {
        "id":  "pdf-389",
        "word":  "Sponsor",
        "translation":  "ผู้สนับสนุนงบประมาณ",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈspɒnsər/",
        "sentence":  "Many companies sponsor local sports teams.",
        "sentenceTranslation":  "บริษัทหลายแห่งสนับสนุนทีมกีฬาในท้องถิ่น"
    },
    {
        "id":  "pdf-390",
        "word":  "Sponsorship",
        "translation":  "การเป็นผู้สนับสนุน",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈspɒnsərʃɪp/",
        "sentence":  "We are looking for sponsorship for our annual event.",
        "sentenceTranslation":  "เรากำลังมองหาผู้สนับสนุนสำหรับกิจกรรมประจำปีของเรา"
    },
    {
        "id":  "pdf-391",
        "word":  "Survey",
        "translation":  "แบบสำรวจพฤติกรรมลูกค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈsɜːrveɪ/",
        "sentence":  "We conducted a survey to gather customer feedback.",
        "sentenceTranslation":  "เราได้ทำการสำรวจเพื่อรวบรวมความคิดเห็นของลูกค้า"
    },
    {
        "id":  "pdf-392",
        "word":  "SWOT analysis",
        "translation":  "การวิเคราะห์จุดแข็งจุดอ่อนโอกาส",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/swɒt əˈnæləsɪs/",
        "sentence":  "A SWOT analysis helps identify strengths, weaknesses, opportunities, and threats.",
        "sentenceTranslation":  "การวิเคราะห์ SWOT ช่วยระบุจุดแข็ง จุดอ่อน โอกาส และอุปสรรค"
    },
    {
        "id":  "pdf-393",
        "word":  "Target audience",
        "translation":  "กลุ่มเป้าหมาย",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈtɑːrɡɪt ˈɔːdiəns/",
        "sentence":  "Our advertising campaign is aimed at a young target audience.",
        "sentenceTranslation":  "แคมเปญโฆษณาของเรามุ่งเป้าไปที่กลุ่มเป้าหมายวัยหนุ่มสาว"
    },
    {
        "id":  "pdf-394",
        "word":  "Telemarketing",
        "translation":  "การตลาดทางโทรศัพท์",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌtɛləˈmɑːrkɪtɪŋ/",
        "sentence":  "Telemarketing is often used to generate new leads.",
        "sentenceTranslation":  "การตลาดทางโทรศัพท์มักถูกใช้เพื่อสร้างลูกค้าเป้าหมายใหม่"
    },
    {
        "id":  "pdf-395",
        "word":  "Testimonial",
        "translation":  "คำนิยม / คำชมจากลูกค้าที่ใช้จริง",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌtɛstɪˈmoʊniəl/",
        "sentence":  "We feature customer testimonials on our website.",
        "sentenceTranslation":  "เรานำเสนอคำรับรองจากลูกค้าบนเว็บไซต์ของเรา"
    },
    {
        "id":  "pdf-396",
        "word":  "Trademark",
        "translation":  "เครื่องหมายการค้า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˈtreɪdmɑːrk/",
        "sentence":  "The company applied for a trademark for its new logo.",
        "sentenceTranslation":  "บริษัทได้ยื่นขอจดทะเบียนเครื่องหมายการค้าสำหรับโลโก้ใหม่"
    },
    {
        "id":  "pdf-397",
        "word":  "Upsell",
        "translation":  "การเชียร์ขายสินค้าที่แพงหรือใหญ่กว่า",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ʌpˈsɛl/",
        "sentence":  "The salesperson tried to upsell me to a more expensive model.",
        "sentenceTranslation":  "พนักงานขายพยายามเสนอขายรุ่นที่แพงกว่าให้ฉัน"
    },
    {
        "id":  "pdf-398",
        "word":  "USP (Unique selling point)",
        "translation":  "จุดขายที่โดดเด่นไม่เหมือนใคร",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/ˌjuː ɛs ˈpiː/",
        "sentence":  "Our product\u0027s USP is its unparalleled durability.",
        "sentenceTranslation":  "จุดขายที่เป็นเอกลักษณ์ของผลิตภัณฑ์ของเราคือความทนทานที่ไม่มีใครเทียบได้"
    },
    {
        "id":  "pdf-399",
        "word":  "Wholesale",
        "translation":  "การขายส่ง",
        "category":  "General",
        "ipa":  "/ˈhoʊlseɪl/",
        "sentence":  "We sell our products both retail and wholesale.",
        "sentenceTranslation":  "เราขายสินค้าทั้งปลีกและส่ง"
    },
    {
        "id":  "pdf-400",
        "word":  "Word of mouth",
        "translation":  "ปากต่อปาก (การบอกต่อ)",
        "category":  "Sales \u0026 Marketing",
        "ipa":  "/wɜːrd əv maʊθ/",
        "sentence":  "Word of mouth is often the most effective form of advertising.",
        "sentenceTranslation":  "การบอกต่อมักเป็นรูปแบบการโฆษณาที่มีประสิทธิภาพมากที่สุด"
    },
    {
        "id":  "pdf-401",
        "word":  "Account payable",
        "translation":  "เจ้าหนี้การค้า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈkaʊnt ˈpeɪəbl/",
        "sentence":  "We need to pay off our account payable by the end of the month.",
        "sentenceTranslation":  "เราต้องชำระเจ้าหนี้การค้าของเราให้หมดภายในสิ้นเดือนนี้"
    },
    {
        "id":  "pdf-402",
        "word":  "Account receivable",
        "translation":  "ลูกหนี้การค้า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈkaʊnt rɪˈsiːvəbl/",
        "sentence":  "Managing accounts receivable effectively is crucial for cash flow.",
        "sentenceTranslation":  "การจัดการลูกหนี้การค้าอย่างมีประสิทธิภาพเป็นสิ่งสำคัญสำหรับการหมุนเวียนเงินสด"
    },
    {
        "id":  "pdf-403",
        "word":  "Accountant",
        "translation":  "นักบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈkaʊntənt/",
        "sentence":  "Our accountant helps us with tax preparations.",
        "sentenceTranslation":  "นักบัญชีของเราช่วยเราในการเตรียมภาษี"
    },
    {
        "id":  "pdf-404",
        "word":  "Accounting",
        "translation":  "การบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈkaʊntɪŋ/",
        "sentence":  "Accounting is the process of recording financial transactions.",
        "sentenceTranslation":  "การบัญชีคือกระบวนการบันทึกรายการทางการเงิน"
    },
    {
        "id":  "pdf-405",
        "word":  "Accrual",
        "translation":  "เกณฑ์คงค้าง / รายได้หรือค่าใช้จ่ายค้างจ่าย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈkruːəl/",
        "sentence":  "The accrual principle recognizes expenses when incurred, not when paid.",
        "sentenceTranslation":  "หลักการคงค้างรับรู้ค่าใช้จ่ายเมื่อเกิดขึ้น ไม่ใช่เมื่อชำระเงิน"
    },
    {
        "id":  "pdf-406",
        "word":  "Advance",
        "translation":  "เงินทดรองจ่าย / เงินมัดจำล่วงหน้า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ədˈvæns/",
        "sentence":  "He received an advance on his salary.",
        "sentenceTranslation":  "เขาได้รับเงินเดือนล่วงหน้า"
    },
    {
        "id":  "pdf-407",
        "word":  "Allocation",
        "translation":  "การจัดสรรงบประมาณ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌæləˈkeɪʃn/",
        "sentence":  "The allocation of resources needs careful planning.",
        "sentenceTranslation":  "การจัดสรรทรัพยากรต้องมีการวางแผนอย่างรอบคอบ"
    },
    {
        "id":  "pdf-408",
        "word":  "Amortization",
        "translation":  "การตัดจำหน่าย (สินทรัพย์ไม่มีตัวตน)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌæmɔːrtaɪˈzeɪʃn/",
        "sentence":  "Amortization is used to spread the cost of an intangible asset over its useful life.",
        "sentenceTranslation":  "การตัดจ่ายใช้เพื่อกระจายต้นทุนของสินทรัพย์ไม่มีตัวตนตลอดอายุการใช้งาน"
    },
    {
        "id":  "pdf-409",
        "word":  "Amount",
        "translation":  "จำนวนเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/əˈmaʊnt/",
        "sentence":  "Please specify the exact amount you wish to withdraw.",
        "sentenceTranslation":  "โปรดระบุจำนวนเงินที่แน่นอนที่คุณต้องการถอน"
    },
    {
        "id":  "pdf-410",
        "word":  "Annual report",
        "translation":  "รายงานประจำปี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈænjuəl rɪˈpɔːrt/",
        "sentence":  "Investors review the company\u0027s annual report to assess its performance.",
        "sentenceTranslation":  "นักลงทุนตรวจสอบรายงานประจำปีของบริษัทเพื่อประเมินผลการดำเนินงาน"
    },
    {
        "id":  "pdf-411",
        "word":  "Asset",
        "translation":  "สินทรัพย์",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈæset/",
        "sentence":  "The company\u0027s main asset is its intellectual property.",
        "sentenceTranslation":  "สินทรัพย์หลักของบริษัทคือทรัพย์สินทางปัญญา"
    },
    {
        "id":  "pdf-412",
        "word":  "Audit",
        "translation":  "การตรวจสอบบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɔːdɪt/",
        "sentence":  "The financial statements are subject to an annual audit.",
        "sentenceTranslation":  "งบการเงินอยู่ภายใต้การตรวจสอบบัญชีประจำปี"
    },
    {
        "id":  "pdf-413",
        "word":  "Auditor",
        "translation":  "ผู้ตรวจสอบบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɔːdɪtər/",
        "sentence":  "The external auditor ensures compliance with accounting standards.",
        "sentenceTranslation":  "ผู้ตรวจสอบบัญชีภายนอกรับรองการปฏิบัติตามมาตรฐานการบัญชี"
    },
    {
        "id":  "pdf-414",
        "word":  "Balance sheet",
        "translation":  "งบดุล",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈbæləns ʃiːt/",
        "sentence":  "The balance sheet provides a snapshot of a company\u0027s financial health.",
        "sentenceTranslation":  "งบดุลแสดงภาพรวมสุขภาพทางการเงินของบริษัท"
    },
    {
        "id":  "pdf-415",
        "word":  "Bank statement",
        "translation":  "ใบแจ้งยอดบัญชีธนาคาร",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈbæŋk ˌsteɪtmənt/",
        "sentence":  "I need to reconcile my bank statement with my ledger.",
        "sentenceTranslation":  "ฉันต้องกระทบยอดใบแจ้งยอดบัญชีธนาคารกับสมุดบัญชีของฉัน"
    },
    {
        "id":  "pdf-416",
        "word":  "Billing",
        "translation":  "การเรียกเก็บเงิน / การวางบิล",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈbɪlɪŋ/",
        "sentence":  "The billing department handles all customer invoices.",
        "sentenceTranslation":  "แผนกออกใบแจ้งหนี้จัดการใบแจ้งหนี้ลูกค้าทั้งหมด"
    },
    {
        "id":  "pdf-417",
        "word":  "Bookkeeping",
        "translation":  "การทำบัญชีขั้นต้น / การบันทึกบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈbʊkˌkiːpɪŋ/",
        "sentence":  "Accurate bookkeeping is essential for any business.",
        "sentenceTranslation":  "การทำบัญชีที่ถูกต้องแม่นยำเป็นสิ่งจำเป็นสำหรับธุรกิจใดๆ"
    },
    {
        "id":  "pdf-418",
        "word":  "Budget",
        "translation":  "งบประมาณ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈbʌdʒɪt/",
        "sentence":  "We need to stick to the budget for this project.",
        "sentenceTranslation":  "เราต้องยึดตามงบประมาณสำหรับโครงการนี้"
    },
    {
        "id":  "pdf-419",
        "word":  "Capital",
        "translation":  "เงินทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkæpɪtl/",
        "sentence":  "The company raised new capital to fund its expansion.",
        "sentenceTranslation":  "บริษัทระดมเงินทุนใหม่เพื่อใช้ในการขยายกิจการ"
    },
    {
        "id":  "pdf-420",
        "word":  "Cash flow",
        "translation":  "กระแสเงินสด",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkæʃ floʊ/",
        "sentence":  "Positive cash flow is vital for a business\u0027s survival.",
        "sentenceTranslation":  "กระแสเงินสดที่เป็นบวกมีความสำคัญอย่างยิ่งต่อการอยู่รอดของธุรกิจ"
    },
    {
        "id":  "pdf-421",
        "word":  "Cash on delivery (COD)",
        "translation":  "การเก็บเงินปลายทาง",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kæʃ ɒn dɪˈlɪvəri siː oʊ diː/",
        "sentence":  "We offer cash on delivery for all local orders.",
        "sentenceTranslation":  "เรามีบริการเก็บเงินปลายทางสำหรับการสั่งซื้อในประเทศทั้งหมด"
    },
    {
        "id":  "pdf-422",
        "word":  "Charge",
        "translation":  "คิดราคา / ค่าธรรมเนียม",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/tʃɑːrdʒ/",
        "sentence":  "The restaurant will charge you for extra services.",
        "sentenceTranslation":  "ร้านอาหารจะเรียกเก็บเงินคุณสำหรับบริการเสริม"
    },
    {
        "id":  "pdf-423",
        "word":  "Cheque / Check",
        "translation":  "เช็คเงินสด",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/tʃɛk/",
        "sentence":  "Please make the check payable to our company.",
        "sentenceTranslation":  "กรุณาสั่งจ่ายเช็คในนามบริษัทของเรา"
    },
    {
        "id":  "pdf-424",
        "word":  "Commission",
        "translation":  "ค่าคอมมิชชัน / ค่านายหน้า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kəˈmɪʃən/",
        "sentence":  "She earns a high commission on every sale she makes.",
        "sentenceTranslation":  "เธอได้รับค่านายหน้าสูงจากทุกยอดขายที่เธอทำได้"
    },
    {
        "id":  "pdf-425",
        "word":  "Cost",
        "translation":  "ต้นทุน / ค่าใช้จ่าย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kɒst/",
        "sentence":  "What is the total cost of this project?",
        "sentenceTranslation":  "โครงการนี้มีค่าใช้จ่ายทั้งหมดเท่าไหร่"
    },
    {
        "id":  "pdf-426",
        "word":  "Credit",
        "translation":  "สินเชื่อ / เครดิต (ฝั่งขวาของบัญชี)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkrɛdɪt/",
        "sentence":  "I need to check my credit score before applying for a loan.",
        "sentenceTranslation":  "ฉันต้องตรวจสอบคะแนนเครดิตของฉันก่อนยื่นขอสินเชื่อ"
    },
    {
        "id":  "pdf-427",
        "word":  "Credit note",
        "translation":  "ใบลดหนี้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkrɛdɪt nəʊt/",
        "sentence":  "The customer received a credit note for the returned goods.",
        "sentenceTranslation":  "ลูกค้าได้รับใบลดหนี้สำหรับสินค้าที่ส่งคืน"
    },
    {
        "id":  "pdf-428",
        "word":  "Currency",
        "translation":  "สกุลเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkʌrənsi/",
        "sentence":  "The local currency in Thailand is the Thai Baht.",
        "sentenceTranslation":  "สกุลเงินท้องถิ่นในประเทศไทยคือเงินบาทไทย"
    },
    {
        "id":  "pdf-429",
        "word":  "Debit",
        "translation":  "เดบิต (ฝั่งซ้ายของบัญชี)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdɛbɪt/",
        "sentence":  "Please debit my account for the payment.",
        "sentenceTranslation":  "กรุณาหักบัญชีของฉันสำหรับการชำระเงิน"
    },
    {
        "id":  "pdf-430",
        "word":  "Debit note",
        "translation":  "ใบเพิ่มหนี้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdɛbɪt nəʊt/",
        "sentence":  "We issued a debit note to correct an undercharge.",
        "sentenceTranslation":  "เราออกใบเพิ่มหนี้เพื่อแก้ไขการเรียกเก็บเงินที่ต่ำเกินไป"
    },
    {
        "id":  "pdf-431",
        "word":  "Debt",
        "translation":  "หนี้สิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɛt/",
        "sentence":  "Many students graduate with significant student loan debt.",
        "sentenceTranslation":  "นักเรียนจำนวนมากสำเร็จการศึกษาพร้อมกับหนี้เงินกู้นักเรียนจำนวนมาก"
    },
    {
        "id":  "pdf-432",
        "word":  "Deduct",
        "translation":  "หักออก (เช่นหักภาษี)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɪˈdʌkt/",
        "sentence":  "The company will deduct taxes from your salary.",
        "sentenceTranslation":  "บริษัทจะหักภาษีจากเงินเดือนของคุณ"
    },
    {
        "id":  "pdf-433",
        "word":  "Deduction",
        "translation":  "การหักเงิน / รายการหักภาษี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɪˈdʌkʃən/",
        "sentence":  "There are several deductions on my pay slip each month.",
        "sentenceTranslation":  "มีรายการหักหลายรายการในสลิปเงินเดือนของฉันทุกเดือน"
    },
    {
        "id":  "pdf-434",
        "word":  "Deficit",
        "translation":  "การขาดดุล",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdɛfɪsɪt/",
        "sentence":  "The government is trying to reduce the budget deficit.",
        "sentenceTranslation":  "รัฐบาลกำลังพยายามลดการขาดดุลงบประมาณ"
    },
    {
        "id":  "pdf-435",
        "word":  "Deposit",
        "translation":  "เงินฝาก / เงินมัดจำ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɪˈpɒzɪt/",
        "sentence":  "You need to pay a deposit to reserve the room.",
        "sentenceTranslation":  "คุณต้องวางเงินมัดจำเพื่อจองห้องพัก"
    },
    {
        "id":  "pdf-436",
        "word":  "Depreciation",
        "translation":  "ค่าเสื่อมราคา",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɪˌpriːʃiˈeɪʃən/",
        "sentence":  "Car values are subject to rapid depreciation.",
        "sentenceTranslation":  "มูลค่ารถยนต์มีการเสื่อมราคาอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-437",
        "word":  "Disbursement",
        "translation":  "การจ่ายเงิน / การเบิกเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɪsˈbɜːrsmənt/",
        "sentence":  "The charity handles the disbursement of funds to various projects.",
        "sentenceTranslation":  "องค์กรการกุศลจัดการการเบิกจ่ายเงินทุนไปยังโครงการต่างๆ"
    },
    {
        "id":  "pdf-438",
        "word":  "Discount",
        "translation":  "ส่วนลด",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdɪskaʊnt/",
        "sentence":  "We received a 10% discount on our bulk order.",
        "sentenceTranslation":  "เราได้รับส่วนลด 10% สำหรับการสั่งซื้อจำนวนมากของเรา"
    },
    {
        "id":  "pdf-439",
        "word":  "Dividend",
        "translation":  "เงินปันผล",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdɪvɪdɛnd/",
        "sentence":  "Shareholders received a healthy dividend this quarter.",
        "sentenceTranslation":  "ผู้ถือหุ้นได้รับเงินปันผลที่ดีในไตรมาสนี้"
    },
    {
        "id":  "pdf-440",
        "word":  "Due date",
        "translation":  "วันครบกำหนดชำระเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈdjuː deɪt/",
        "sentence":  "Please pay your invoice before the due date.",
        "sentenceTranslation":  "กรุณาชำระใบแจ้งหนี้ของคุณก่อนวันครบกำหนด"
    },
    {
        "id":  "pdf-441",
        "word":  "Earnings",
        "translation":  "รายได้ / ผลกำไร",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɜːrnɪŋz/",
        "sentence":  "The company reported strong quarterly earnings, exceeding expectations.",
        "sentenceTranslation":  "บริษัทรายงานผลประกอบการรายไตรมาสที่แข็งแกร่ง เกินความคาดหมาย"
    },
    {
        "id":  "pdf-442",
        "word":  "Equity",
        "translation":  "ส่วนของผู้ถือหุ้น",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɛkwɪti/",
        "sentence":  "Many homeowners have built up significant equity in their properties over the years.",
        "sentenceTranslation":  "เจ้าของบ้านจำนวนมากได้สร้างส่วนของผู้ถือหุ้นที่มีนัยสำคัญในอสังหาริมทรัพย์ของตนตลอดหลายปีที่ผ่านมา"
    },
    {
        "id":  "pdf-443",
        "word":  "Estimate",
        "translation":  "ใบประเมินราคา / ประมาณการ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɛstɪmeɪt/",
        "sentence":  "We need to get an accurate estimate of the project costs before starting.",
        "sentenceTranslation":  "เราจำเป็นต้องได้รับประมาณการค่าใช้จ่ายโครงการที่แม่นยำก่อนที่จะเริ่มต้น"
    },
    {
        "id":  "pdf-444",
        "word":  "Expenditure",
        "translation":  "รายจ่าย / การใช้จ่าย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ɪkˈspɛndɪtʃər/",
        "sentence":  "The government announced plans to reduce public expenditure in the next fiscal year.",
        "sentenceTranslation":  "รัฐบาลประกาศแผนการที่จะลดรายจ่ายสาธารณะในปีงบประมาณหน้า"
    },
    {
        "id":  "pdf-445",
        "word":  "Expense",
        "translation":  "ค่าใช้จ่าย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kʰâː t͡ɕʰáj t͡ɕàːj/",
        "sentence":  "We need to cut down on unnecessary expenses this quarter.",
        "sentenceTranslation":  "เราต้องลดค่าใช้จ่ายที่ไม่จำเป็นลงในไตรมาสนี้"
    },
    {
        "id":  "pdf-446",
        "word":  "Fee",
        "translation":  "ค่าธรรมเนียม / ค่าบริการ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kʰâː tʰam.nīam/",
        "sentence":  "The bank charges a small fee for international transfers.",
        "sentenceTranslation":  "ธนาคารคิดค่าธรรมเนียมเล็กน้อยสำหรับการโอนเงินระหว่างประเทศ"
    },
    {
        "id":  "pdf-447",
        "word":  "Finance",
        "translation":  "การเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kaːn ŋɤn/",
        "sentence":  "She decided to study finance at university.",
        "sentenceTranslation":  "เธอตัดสินใจเรียนการเงินที่มหาวิทยาลัย"
    },
    {
        "id":  "pdf-448",
        "word":  "Financial statement",
        "translation":  "งบการเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ŋóp kaːn ŋɤn/",
        "sentence":  "Investors review the company\u0027s financial statement regularly.",
        "sentenceTranslation":  "นักลงทุนตรวจสอบงบการเงินของบริษัทเป็นประจำ"
    },
    {
        "id":  "pdf-449",
        "word":  "Fiscal year",
        "translation":  "ปีงบประมาณ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/piː ŋóp pra.maːn/",
        "sentence":  "The company\u0027s fiscal year ends in December.",
        "sentenceTranslation":  "ปีงบประมาณของบริษัทสิ้นสุดในเดือนธันวาคม"
    },
    {
        "id":  "pdf-450",
        "word":  "Fixed asset",
        "translation":  "สินทรัพย์ถาวร",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/sǐn sáp tʰǎː.wɔːn/",
        "sentence":  "Buildings and land are considered fixed assets.",
        "sentenceTranslation":  "อาคารและที่ดินถือเป็นสินทรัพย์ถาวร"
    },
    {
        "id":  "pdf-451",
        "word":  "Forecast",
        "translation":  "การคาดการณ์ทางการเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/pʰa.jaː.kɔːn/",
        "sentence":  "The weather forecast predicts rain for tomorrow.",
        "sentenceTranslation":  "การพยากรณ์อากาศคาดการณ์ว่าจะมีฝนตกในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-452",
        "word":  "Fund",
        "translation":  "กองทุน / เงินทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kɔːŋ tun/",
        "sentence":  "They established a fund to help local artists.",
        "sentenceTranslation":  "พวกเขาก่อตั้งกองทุนเพื่อช่วยเหลือนักศิลปะท้องถิ่น"
    },
    {
        "id":  "pdf-453",
        "word":  "Gross profit",
        "translation":  "กำไรขั้นต้น",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kam.raj kʰân tôn/",
        "sentence":  "The company reported a significant increase in gross profit.",
        "sentenceTranslation":  "บริษัทรายงานการเพิ่มขึ้นอย่างมากของกำไรขั้นต้น"
    },
    {
        "id":  "pdf-454",
        "word":  "Income",
        "translation":  "รายได้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/raːj dâːj/",
        "sentence":  "His main source of income is his salary.",
        "sentenceTranslation":  "แหล่งรายได้หลักของเขาคือเงินเดือน"
    },
    {
        "id":  "pdf-455",
        "word":  "Income statement",
        "translation":  "งบกำไรขาดทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ŋóp kam.raj kʰàːt tun/",
        "sentence":  "The income statement shows the company\u0027s profitability over a period.",
        "sentenceTranslation":  "งบกำไรขาดทุนแสดงถึงความสามารถในการทำกำไรของบริษัทในช่วงเวลาหนึ่ง"
    },
    {
        "id":  "pdf-456",
        "word":  "Installment",
        "translation":  "เงินผ่อน / การผ่อนชำระ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ŋɤn pʰɔ̀n/",
        "sentence":  "She paid for the car in monthly installments.",
        "sentenceTranslation":  "เธอชำระค่ารถยนต์เป็นงวดรายเดือน"
    },
    {
        "id":  "pdf-457",
        "word":  "Interest",
        "translation":  "ดอกเบี้ย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/dɔ̀k bîa/",
        "sentence":  "The bank offers a high interest rate on savings accounts.",
        "sentenceTranslation":  "ธนาคารเสนออัตราดอกเบี้ยสูงสำหรับบัญชีออมทรัพย์"
    },
    {
        "id":  "pdf-458",
        "word":  "Inventory",
        "translation":  "สินค้าคงคลัง",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/sǐn kʰâː kʰoŋ kʰlaŋ/",
        "sentence":  "The store needs to conduct a full inventory count.",
        "sentenceTranslation":  "ร้านค้าต้องทำการนับสินค้าคงคลังทั้งหมด"
    },
    {
        "id":  "pdf-459",
        "word":  "Invest",
        "translation":  "ลงทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/loŋ tun/",
        "sentence":  "Many people choose to invest in real estate.",
        "sentenceTranslation":  "หลายคนเลือกที่จะลงทุนในอสังหาริมทรัพย์"
    },
    {
        "id":  "pdf-460",
        "word":  "Investment",
        "translation":  "การลงทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ɪnˈvɛstmənt/",
        "sentence":  "The company\u0027s new investment is expected to yield high returns.",
        "sentenceTranslation":  "การลงทุนใหม่ของบริษัทคาดว่าจะให้ผลตอบแทนสูง"
    },
    {
        "id":  "pdf-461",
        "word":  "Invoice",
        "translation":  "ใบแจ้งหนี้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈɪnvɔɪs/",
        "sentence":  "Please send me the invoice for the services rendered.",
        "sentenceTranslation":  "กรุณาส่งใบแจ้งหนี้สำหรับบริการที่ได้ดำเนินการไปแล้ว"
    },
    {
        "id":  "pdf-462",
        "word":  "Ledger",
        "translation":  "สมุดบัญชีแยกประเภท",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈlɛdʒər/",
        "sentence":  "All financial transactions are recorded in the general ledger.",
        "sentenceTranslation":  "การทำธุรกรรมทางการเงินทั้งหมดถูกบันทึกไว้ในสมุดบัญชีแยกประเภททั่วไป"
    },
    {
        "id":  "pdf-463",
        "word":  "Liability",
        "translation":  "หนี้สิน / ความรับผิดชอบตามกฎหมาย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌlaɪəˈbɪləti/",
        "sentence":  "The company has a significant liability due to the outstanding loan.",
        "sentenceTranslation":  "บริษัทมีหนี้สินจำนวนมากอันเนื่องมาจากเงินกู้ที่ค้างชำระ"
    },
    {
        "id":  "pdf-464",
        "word":  "Loan",
        "translation":  "เงินกู้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/loʊn/",
        "sentence":  "He took out a loan to buy a new car.",
        "sentenceTranslation":  "เขากู้เงินเพื่อซื้อรถคันใหม่"
    },
    {
        "id":  "pdf-465",
        "word":  "Loss",
        "translation":  "การขาดทุน / ความสูญเสีย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/lɔːs/",
        "sentence":  "The company reported a net loss for the quarter.",
        "sentenceTranslation":  "บริษัทรายงานผลขาดทุนสุทธิสำหรับไตรมาสนี้"
    },
    {
        "id":  "pdf-466",
        "word":  "Lump sum",
        "translation":  "เงินก้อนใหญ่ (จ่ายทีเดียวจบ)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈlʌmp ˌsʌm/",
        "sentence":  "She chose to receive her pension as a lump sum.",
        "sentenceTranslation":  "เธอเลือกที่จะรับเงินบำนาญเป็นเงินก้อน"
    },
    {
        "id":  "pdf-467",
        "word":  "Margin",
        "translation":  "อัตรากำไร",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈmɑːrdʒɪn/",
        "sentence":  "The profit margin on this product is quite low.",
        "sentenceTranslation":  "อัตรากำไรของผลิตภัณฑ์นี้ค่อนข้างต่ำ"
    },
    {
        "id":  "pdf-468",
        "word":  "Net profit",
        "translation":  "กำไรสุทธิ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌnɛt ˈprɒfɪt/",
        "sentence":  "After all expenses, the net profit was surprisingly high.",
        "sentenceTranslation":  "หลังจากหักค่าใช้จ่ายทั้งหมดแล้ว กำไรสุทธิก็สูงอย่างน่าประหลาดใจ"
    },
    {
        "id":  "pdf-469",
        "word":  "Overdue",
        "translation":  "เกินกำหนดชำระ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌoʊvərˈduː/",
        "sentence":  "The library book is now overdue by two weeks.",
        "sentenceTranslation":  "หนังสือห้องสมุดเลยกำหนดส่งมาสองสัปดาห์แล้ว"
    },
    {
        "id":  "pdf-470",
        "word":  "Overhead",
        "translation":  "ค่าใช้จ่ายในการดำเนินงาน (ค่าโสหุ้ย)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈoʊvərˌhɛd/",
        "sentence":  "Reducing overhead costs is crucial for improving profitability.",
        "sentenceTranslation":  "การลดค่าใช้จ่ายในการดำเนินงานเป็นสิ่งสำคัญสำหรับการปรับปรุงความสามารถในการทำกำไร"
    },
    {
        "id":  "pdf-471",
        "word":  "Payroll",
        "translation":  "ยอดเงินรวมที่ต้องจ่ายค่าจ้างพนักงาน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈpeɪroʊl/",
        "sentence":  "The company processes its payroll on the last Friday of each month.",
        "sentenceTranslation":  "บริษัทดำเนินการจ่ายเงินเดือนในวันศุกร์สุดท้ายของทุกเดือน"
    },
    {
        "id":  "pdf-472",
        "word":  "Penalty",
        "translation":  "ค่าปรับ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈpɛnəlti/",
        "sentence":  "There is a penalty for late payment of taxes.",
        "sentenceTranslation":  "มีการปรับสำหรับการชำระภาษีล่าช้า"
    },
    {
        "id":  "pdf-473",
        "word":  "Petty cash",
        "translation":  "เงินสดสำรองจ่าย / เงินสดย่อย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌpɛti ˈkæʃ/",
        "sentence":  "We use petty cash for small office expenses.",
        "sentenceTranslation":  "เราใช้เงินสดย่อยสำหรับค่าใช้จ่ายสำนักงานเล็กน้อย"
    },
    {
        "id":  "pdf-474",
        "word":  "Price",
        "translation":  "ราคา",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/praɪs/",
        "sentence":  "The price of oil has increased significantly.",
        "sentenceTranslation":  "ราคาน้ำมันเพิ่มขึ้นอย่างมาก"
    },
    {
        "id":  "pdf-475",
        "word":  "Profit",
        "translation":  "กำไร",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈprɒfɪt/",
        "sentence":  "The company reported a significant profit this quarter.",
        "sentenceTranslation":  "บริษัทรายงานผลกำไรที่สำคัญในไตรมาสนี้"
    },
    {
        "id":  "pdf-476",
        "word":  "Purchase order (PO)",
        "translation":  "ใบสั่งซื้อสินค้า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈpɜːrtʃəs ˈɔːrdər/",
        "sentence":  "Please issue a purchase order for these supplies.",
        "sentenceTranslation":  "โปรดออกใบสั่งซื้อสำหรับวัสดุอุปกรณ์เหล่านี้"
    },
    {
        "id":  "pdf-477",
        "word":  "Quarterly",
        "translation":  "รายไตรมาส (ทุก 3 เดือน)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈkwɔːrtərli/",
        "sentence":  "We hold quarterly meetings to review our progress.",
        "sentenceTranslation":  "เราจัดการประชุมทุกไตรมาสเพื่อทบทวนความคืบหน้าของเรา"
    },
    {
        "id":  "pdf-478",
        "word":  "Quotation",
        "translation":  "ใบเสนอราคา",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/kwoʊˈteɪʃən/",
        "sentence":  "The client requested a quotation for the renovation work.",
        "sentenceTranslation":  "ลูกค้าขอใบเสนอราคาสำหรับงานปรับปรุง"
    },
    {
        "id":  "pdf-479",
        "word":  "Rate",
        "translation":  "อัตรา",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/reɪt/",
        "sentence":  "What is the current interest rate for savings accounts?",
        "sentenceTranslation":  "อัตราดอกเบี้ยปัจจุบันสำหรับบัญชีออมทรัพย์คือเท่าไร"
    },
    {
        "id":  "pdf-480",
        "word":  "Rebate",
        "translation":  "เงินคืน / ส่วนลดที่คืนให้ทีหลัง",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈriːbeɪt/",
        "sentence":  "Customers can receive a rebate if they purchase this product by the end of the month.",
        "sentenceTranslation":  "ลูกค้าสามารถรับเงินคืนได้หากซื้อผลิตภัณฑ์นี้ภายในสิ้นเดือน"
    },
    {
        "id":  "pdf-481",
        "word":  "Receipt",
        "translation":  "ใบเสร็จรับเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/rɪˈsiːt/",
        "sentence":  "Please keep your receipt as proof of purchase.",
        "sentenceTranslation":  "โปรดเก็บใบเสร็จของคุณไว้เป็นหลักฐานการซื้อ"
    },
    {
        "id":  "pdf-482",
        "word":  "Reconciliation",
        "translation":  "การกระทบยอดบัญชี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌrɛkənsɪliˈeɪʃən/",
        "sentence":  "Bank reconciliation is an important accounting process.",
        "sentenceTranslation":  "การกระทบยอดบัญชีธนาคารเป็นกระบวนการทางบัญชีที่สำคัญ"
    },
    {
        "id":  "pdf-483",
        "word":  "Refund",
        "translation":  "การคืนเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈriːfʌnd/",
        "sentence":  "You are eligible for a full refund if you return the item within 30 days.",
        "sentenceTranslation":  "คุณมีสิทธิ์ได้รับเงินคืนเต็มจำนวนหากคุณคืนสินค้าภายใน 30 วัน"
    },
    {
        "id":  "pdf-484",
        "word":  "Reimburse",
        "translation":  "เบิกเงินคืน / ชดเชยเงินที่จ่ายไป",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌriːɪmˈbɜːrs/",
        "sentence":  "The company will reimburse employees for travel expenses.",
        "sentenceTranslation":  "บริษัทจะชดเชยค่าใช้จ่ายในการเดินทางให้กับพนักงาน"
    },
    {
        "id":  "pdf-485",
        "word":  "Remittance",
        "translation":  "การส่งเงิน / เงินที่โอนชำระ",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/rɪˈmɪtəns/",
        "sentence":  "Please send the remittance advice with your payment.",
        "sentenceTranslation":  "กรุณาส่งใบแจ้งการโอนเงินพร้อมกับการชำระเงินของคุณ"
    },
    {
        "id":  "pdf-486",
        "word":  "Revenue",
        "translation":  "รายได้ (ของบริษัทหรือรัฐบาล)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈrɛvənuː/",
        "sentence":  "The company\u0027s revenue increased by 10% last year.",
        "sentenceTranslation":  "รายได้ของบริษัทเพิ่มขึ้น 10% เมื่อปีที่แล้ว"
    },
    {
        "id":  "pdf-487",
        "word":  "Salary",
        "translation":  "เงินเดือน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈsæləri/",
        "sentence":  "Her monthly salary is paid on the last day of the month.",
        "sentenceTranslation":  "เงินเดือนประจำเดือนของเธอจะได้รับในวันสุดท้ายของเดือน"
    },
    {
        "id":  "pdf-488",
        "word":  "Solvency",
        "translation":  "ความสามารถในการชำระหนี้",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈsɒlvənsi/",
        "sentence":  "The company\u0027s solvency is crucial for its long-term stability.",
        "sentenceTranslation":  "ความสามารถในการชำระหนี้ของบริษัทมีความสำคัญต่อความมั่นคงในระยะยาว"
    },
    {
        "id":  "pdf-489",
        "word":  "Statement",
        "translation":  "ใบแจ้งยอดเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈsteɪtmənt/",
        "sentence":  "I need to check my bank statement for the last month.",
        "sentenceTranslation":  "ฉันต้องตรวจสอบรายการเดินบัญชีธนาคารของฉันสำหรับเดือนที่ผ่านมา"
    },
    {
        "id":  "pdf-490",
        "word":  "Surplus",
        "translation":  "เงินส่วนเกิน / กำไรส่วนเกิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈsɜːrpləs/",
        "sentence":  "The company reported a large budget surplus this quarter.",
        "sentenceTranslation":  "บริษัทรายงานว่ามีงบประมาณส่วนเกินจำนวนมากในไตรมาสนี้"
    },
    {
        "id":  "pdf-491",
        "word":  "Tax",
        "translation":  "ภาษี",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/tæks/",
        "sentence":  "Everyone must pay their income tax annually.",
        "sentenceTranslation":  "ทุกคนต้องจ่ายภาษีเงินได้ประจำปี"
    },
    {
        "id":  "pdf-492",
        "word":  "Transaction",
        "translation":  "รายการทางการเงิน / การทำธุรกรรม",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/trænˈzækʃən/",
        "sentence":  "The bank confirmed the successful completion of the online transaction.",
        "sentenceTranslation":  "ธนาคารยืนยันการทำธุรกรรมออนไลน์สำเร็จลุล่วงด้วยดี"
    },
    {
        "id":  "pdf-493",
        "word":  "Transfer",
        "translation":  "โอนเงิน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈtrænsfɜːr/",
        "sentence":  "Please transfer the funds to my account.",
        "sentenceTranslation":  "กรุณาโอนเงินเข้าบัญชีของฉัน"
    },
    {
        "id":  "pdf-494",
        "word":  "Turnover",
        "translation":  "อัตราการหมุนเวียน (เช่น ยอดขายหรือสต็อก)",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈtɜːrnəʊvər/",
        "sentence":  "The company\u0027s annual turnover exceeded expectations.",
        "sentenceTranslation":  "ยอดขายประจำปีของบริษัทเกินความคาดหมาย"
    },
    {
        "id":  "pdf-495",
        "word":  "Valuation",
        "translation":  "การประเมินมูลค่า",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˌvæljuˈeɪʃən/",
        "sentence":  "The valuation of the property was higher than expected.",
        "sentenceTranslation":  "การประเมินมูลค่าทรัพย์สินสูงกว่าที่คาดไว้"
    },
    {
        "id":  "pdf-496",
        "word":  "Value added tax (VAT)",
        "translation":  "ภาษีมูลค่าเพิ่ม",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈvæljuː ˈædɪd tæks/",
        "sentence":  "The price includes 7% value added tax.",
        "sentenceTranslation":  "ราคารวมภาษีมูลค่าเพิ่ม 7% แล้ว"
    },
    {
        "id":  "pdf-497",
        "word":  "Vendor",
        "translation":  "ผู้ขาย / ซัพพลายเออร์",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈvendɔːr/",
        "sentence":  "We need to find a new vendor for our raw materials.",
        "sentenceTranslation":  "เราจำเป็นต้องหาผู้จำหน่ายวัตถุดิบรายใหม่"
    },
    {
        "id":  "pdf-498",
        "word":  "Voucher",
        "translation":  "ใบสำคัญจ่าย / บัตรกำนัล",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/ˈvaʊtʃər/",
        "sentence":  "I used a gift voucher to pay for my meal.",
        "sentenceTranslation":  "ฉันใช้บัตรกำนัลเป็นค่าอาหาร"
    },
    {
        "id":  "pdf-499",
        "word":  "Withholding tax",
        "translation":  "ภาษีหัก ณ ที่จ่าย",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/wɪðˈhəʊldɪŋ tæks/",
        "sentence":  "The employer is responsible for deducting withholding tax from salaries.",
        "sentenceTranslation":  "นายจ้างมีหน้าที่หักภาษี ณ ที่จ่ายจากเงินเดือน"
    },
    {
        "id":  "pdf-500",
        "word":  "Yield",
        "translation":  "ผลตอบแทนจากการลงทุน",
        "category":  "Finance \u0026 Accounting",
        "ipa":  "/jiːld/",
        "sentence":  "The investment has a high yield, making it attractive to investors.",
        "sentenceTranslation":  "การลงทุนนี้ให้ผลตอบแทนสูง ทำให้เป็นที่น่าสนใจสำหรับนักลงทุน"
    },
    {
        "id":  "pdf-501",
        "word":  "Absent",
        "translation":  "ขาดงาน / ไม่มาทำงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈæbsənt/",
        "sentence":  "She was absent from work due to illness.",
        "sentenceTranslation":  "เธอขาดงานเนื่องจากป่วย"
    },
    {
        "id":  "pdf-502",
        "word":  "Applicant",
        "translation":  "ผู้สมัครงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈæplɪkənt/",
        "sentence":  "Each applicant must submit a resume and cover letter.",
        "sentenceTranslation":  "ผู้สมัครแต่ละคนต้องยื่นประวัติส่วนตัวและจดหมายสมัครงาน"
    },
    {
        "id":  "pdf-503",
        "word":  "Application",
        "translation":  "ใบสมัครงาน",
        "category":  "Human Resources",
        "ipa":  "/ˌæplɪˈkeɪʃən/",
        "sentence":  "His application for the job was successful.",
        "sentenceTranslation":  "การสมัครงานของเขาประสบความสำเร็จ"
    },
    {
        "id":  "pdf-504",
        "word":  "Appraise",
        "translation":  "ประเมินค่า / ประเมินผลงาน",
        "category":  "Human Resources",
        "ipa":  "/əˈpreɪz/",
        "sentence":  "The bank will appraise the property before approving the loan.",
        "sentenceTranslation":  "ธนาคารจะประเมินมูลค่าทรัพย์สินก่อนอนุมัติสินเชื่อ"
    },
    {
        "id":  "pdf-505",
        "word":  "Appraisal",
        "translation":  "การประเมินผลการปฏิบัติงาน",
        "category":  "Human Resources",
        "ipa":  "/əˈpreɪzl/",
        "sentence":  "The annual performance appraisal helps employees understand their strengths and areas for improvement.",
        "sentenceTranslation":  "การประเมินผลการปฏิบัติงานประจำปีช่วยให้พนักงานเข้าใจจุดแข็งและส่วนที่ต้องปรับปรุง."
    },
    {
        "id":  "pdf-506",
        "word":  "Aptitude test",
        "translation":  "แบบทดสอบความถนัด",
        "category":  "Human Resources",
        "ipa":  "/ˈæptɪtuːd tɛst/",
        "sentence":  "Many companies use an aptitude test to assess a candidate\u0027s potential for specific roles.",
        "sentenceTranslation":  "หลายบริษัทใช้แบบทดสอบความถนัดเพื่อประเมินศักยภาพของผู้สมัครสำหรับตำแหน่งเฉพาะ."
    },
    {
        "id":  "pdf-507",
        "word":  "Background check",
        "translation":  "การตรวจสอบประวัติย้อนหลัง",
        "category":  "Human Resources",
        "ipa":  "/ˈbækɡraʊnd tʃɛk/",
        "sentence":  "All new hires must undergo a thorough background check before starting their employment.",
        "sentenceTranslation":  "พนักงานใหม่ทุกคนจะต้องผ่านการตรวจสอบประวัติอย่างละเอียดก่อนเริ่มทำงาน."
    },
    {
        "id":  "pdf-508",
        "word":  "Benefit",
        "translation":  "สวัสดิการ / ผลประโยชน์",
        "category":  "Human Resources",
        "ipa":  "/ˈbɛnɪfɪt/",
        "sentence":  "The company offers a comprehensive benefits package, including health insurance and paid time off.",
        "sentenceTranslation":  "บริษัทเสนอแพ็คเกจสวัสดิการที่ครอบคลุม รวมถึงประกันสุขภาพและวันหยุดลา."
    },
    {
        "id":  "pdf-509",
        "word":  "Bonus",
        "translation":  "เงินโบนัส / เงินรางวัลพิเศษ",
        "category":  "Human Resources",
        "ipa":  "/ˈboʊnəs/",
        "sentence":  "Employees received a generous year-end bonus for their hard work and dedication.",
        "sentenceTranslation":  "พนักงานได้รับเงินโบนัสปลายปีจำนวนมากสำหรับความทุ่มเทและการทำงานหนักของพวกเขา."
    },
    {
        "id":  "pdf-510",
        "word":  "Candidate",
        "translation":  "ผู้เข้าคัดเลือก / แคนดิเดต",
        "category":  "Human Resources",
        "ipa":  "/ˈkændɪdeɪt/",
        "sentence":  "The hiring manager interviewed several qualified candidates for the open position.",
        "sentenceTranslation":  "ผู้จัดการฝ่ายจัดหาบุคลากรสัมภาษณ์ผู้สมัครที่มีคุณสมบัติเหมาะสมหลายคนสำหรับตำแหน่งว่าง."
    },
    {
        "id":  "pdf-511",
        "word":  "Career path",
        "translation":  "เส้นทางความก้าวหน้าในอาชีพ",
        "category":  "Human Resources",
        "ipa":  "/kəˈrɪər pæθ/",
        "sentence":  "She discussed her long-term career path with her mentor to plan her professional development.",
        "sentenceTranslation":  "เธอพูดคุยเรื่องเส้นทางอาชีพระยะยาวกับที่ปรึกษาเพื่อวางแผนการพัฒนาอาชีพของเธอ."
    },
    {
        "id":  "pdf-512",
        "word":  "Casual leave",
        "translation":  "วันลากิจธุระ / ลากิจ",
        "category":  "Human Resources",
        "ipa":  "/ˈkæʒuəl liːv/",
        "sentence":  "Employees can take casual leave for personal reasons, typically for a short duration.",
        "sentenceTranslation":  "พนักงานสามารถใช้วันลากิจสำหรับเหตุผลส่วนตัว โดยทั่วไปจะใช้ในระยะเวลาสั้นๆ."
    },
    {
        "id":  "pdf-513",
        "word":  "Compensation",
        "translation":  "ค่าตอบแทน (เงินเดือนบวกรวมสวัสดิการ)",
        "category":  "Human Resources",
        "ipa":  "/ˌkɒmpɛnˈseɪʃn/",
        "sentence":  "The compensation package for the executive role was very competitive, including a high salary and stock options.",
        "sentenceTranslation":  "แพ็คเกจค่าตอบแทนสำหรับตำแหน่งผู้บริหารนั้นมีการแข่งขันสูงมาก รวมถึงเงินเดือนที่สูงและตัวเลือกหุ้น."
    },
    {
        "id":  "pdf-514",
        "word":  "Competency",
        "translation":  "ความรู้ความสามารถ / สมรรถนะ",
        "category":  "Human Resources",
        "ipa":  "/ˈkɒmpɪtənsi/",
        "sentence":  "Teamwork and problem-solving are key competencies required for this project.",
        "sentenceTranslation":  "การทำงานเป็นทีมและการแก้ปัญหาเป็นความสามารถหลักที่จำเป็นสำหรับโครงการนี้."
    },
    {
        "id":  "pdf-515",
        "word":  "Contract",
        "translation":  "สัญญาจ้างงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈkɒntrækt/",
        "sentence":  "She signed a two-year employment contract with the new company.",
        "sentenceTranslation":  "เธอเซ็นสัญญาจ้างงานสองปีกับบริษัทใหม่."
    },
    {
        "id":  "pdf-516",
        "word":  "Corporate culture",
        "translation":  "วัฒนธรรมองค์กร",
        "category":  "Human Resources",
        "ipa":  "/ˈkɔːrpərət ˈkʌltʃər/",
        "sentence":  "A positive corporate culture can significantly impact employee morale and productivity.",
        "sentenceTranslation":  "วัฒนธรรมองค์กรที่ดีสามารถส่งผลกระทบอย่างมากต่อขวัญกำลังใจและประสิทธิภาพการทำงานของพนักงาน."
    },
    {
        "id":  "pdf-517",
        "word":  "CV (Curriculum Vitae)",
        "translation":  "ประวัติโดยย่อ (คล้าย Resume แต่ละเอียดกว่า)",
        "category":  "Human Resources",
        "ipa":  "/ˌsiː ˈviː/",
        "sentence":  "Please submit your CV along with your cover letter when applying for the job.",
        "sentenceTranslation":  "โปรดส่ง CV ของคุณพร้อมกับจดหมายสมัครงานเมื่อยื่นสมัครงาน."
    },
    {
        "id":  "pdf-518",
        "word":  "Department",
        "translation":  "แผนก",
        "category":  "Human Resources",
        "ipa":  "/dɪˈpɑːrtmənt/",
        "sentence":  "The marketing department is responsible for promoting the company\u0027s products and services.",
        "sentenceTranslation":  "แผนกการตลาดมีหน้าที่รับผิดชอบในการส่งเสริมผลิตภัณฑ์และบริการของบริษัท."
    },
    {
        "id":  "pdf-519",
        "word":  "Dismiss",
        "translation":  "ไล่ออก / เลิกจ้าง",
        "category":  "Human Resources",
        "ipa":  "/dɪsˈmɪs/",
        "sentence":  "The employee was dismissed for repeated breaches of company policy.",
        "sentenceTranslation":  "พนักงานถูกไล่ออกเนื่องจากการละเมิดนโยบายบริษัทซ้ำแล้วซ้ำเล่า."
    },
    {
        "id":  "pdf-520",
        "word":  "Dismissal",
        "translation":  "การไล่ออก / การเลิกจ้าง",
        "category":  "Human Resources",
        "ipa":  "/dɪˈsmɪsl/",
        "sentence":  "The company announced the dismissal of several employees due to restructuring.",
        "sentenceTranslation":  "บริษัทประกาศการเลิกจ้างพนักงานหลายคนเนื่องจากการปรับโครงสร้างองค์กร"
    },
    {
        "id":  "pdf-521",
        "word":  "Dress code",
        "translation":  "กฎระเบียบการแต่งกาย",
        "category":  "Human Resources",
        "ipa":  "/ˈdres koʊd/",
        "sentence":  "Our office has a strict dress code requiring business casual attire.",
        "sentenceTranslation":  "สำนักงานของเรามีระเบียบการแต่งกายที่เข้มงวดซึ่งกำหนดให้แต่งกายแบบสมาร์ทแคชชวล"
    },
    {
        "id":  "pdf-522",
        "word":  "Employee",
        "translation":  "ลูกจ้าง / พนักงาน",
        "category":  "Human Resources",
        "ipa":  "/ɪmˈplɔɪ.iː/",
        "sentence":  "Every employee is entitled to paid annual leave.",
        "sentenceTranslation":  "พนักงานทุกคนมีสิทธิ์ได้รับวันหยุดพักผ่อนประจำปีแบบมีค่าจ้าง"
    },
    {
        "id":  "pdf-523",
        "word":  "Employer",
        "translation":  "นายจ้าง / บริษัท",
        "category":  "Human Resources",
        "ipa":  "/ɪmˈplɔɪər/",
        "sentence":  "The employer offered a competitive benefits package.",
        "sentenceTranslation":  "นายจ้างเสนอแพ็คเกจผลประโยชน์ที่สามารถแข่งขันได้"
    },
    {
        "id":  "pdf-524",
        "word":  "Employment",
        "translation":  "การจ้างงาน",
        "category":  "Human Resources",
        "ipa":  "/ɪmˈplɔɪmənt/",
        "sentence":  "She is seeking full-time employment in the marketing field.",
        "sentenceTranslation":  "เธอกำลังมองหางานเต็มเวลาในสายงานการตลาด"
    },
    {
        "id":  "pdf-525",
        "word":  "Evaluation",
        "translation":  "การประเมินผล",
        "category":  "Human Resources",
        "ipa":  "/ɪˌvæljuˈeɪʃn/",
        "sentence":  "Performance evaluations are conducted annually.",
        "sentenceTranslation":  "การประเมินผลการปฏิบัติงานจะจัดขึ้นเป็นประจำทุกปี"
    },
    {
        "id":  "pdf-526",
        "word":  "Executive",
        "translation":  "ผู้บริหาร",
        "category":  "Human Resources",
        "ipa":  "/ɪɡˈzekjətɪv/",
        "sentence":  "The executive team met to discuss the company\u0027s new strategy.",
        "sentenceTranslation":  "ทีมผู้บริหารประชุมเพื่อหารือเกี่ยวกับกลยุทธ์ใหม่ของบริษัท"
    },
    {
        "id":  "pdf-527",
        "word":  "Experience",
        "translation":  "ประสบการณ์ทำงาน",
        "category":  "Human Resources",
        "ipa":  "/ɪkˈspɪəriəns/",
        "sentence":  "He has extensive experience in project management.",
        "sentenceTranslation":  "เขามีประสบการณ์อย่างกว้างขวางในการบริหารจัดการโครงการ"
    },
    {
        "id":  "pdf-528",
        "word":  "Fire",
        "translation":  "ไล่ออก (ภาษาพูด)",
        "category":  "Human Resources",
        "ipa":  "/ˈfaɪər/",
        "sentence":  "The manager had to fire an employee for repeated misconduct.",
        "sentenceTranslation":  "ผู้จัดการต้องไล่พนักงานออกเนื่องจากการประพฤติมิชอบซ้ำๆ"
    },
    {
        "id":  "pdf-529",
        "word":  "Full-time",
        "translation":  "งานประจำ (เต็มเวลา)",
        "category":  "Human Resources",
        "ipa":  "/ˈfʊl taɪm/",
        "sentence":  "Many graduates are looking for full-time positions.",
        "sentenceTranslation":  "ผู้สำเร็จการศึกษาจำนวนมากกำลังมองหาตำแหน่งงานเต็มเวลา"
    },
    {
        "id":  "pdf-530",
        "word":  "Grievance",
        "translation":  "เรื่องราวร้องทุกข์ของพนักงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈɡriːvəns/",
        "sentence":  "The union filed a grievance on behalf of the affected workers.",
        "sentenceTranslation":  "สหภาพแรงงานยื่นเรื่องร้องทุกข์ในนามของพนักงานที่ได้รับผลกระทบ"
    },
    {
        "id":  "pdf-531",
        "word":  "Headhunter",
        "translation":  "ผู้สรรหาบุคลากรระดับบริหาร / บริษัทสรรหาคน",
        "category":  "Human Resources",
        "ipa":  "/ˈhedhʌntər/",
        "sentence":  "A headhunter contacted him about a senior management role.",
        "sentenceTranslation":  "บริษัทจัดหางานติดต่อเขาเกี่ยวกับตำแหน่งผู้บริหารระดับสูง"
    },
    {
        "id":  "pdf-532",
        "word":  "Health insurance",
        "translation":  "ประกันสุขภาพ",
        "category":  "Human Resources",
        "ipa":  "/ˈhelθ ɪnˌʃʊərəns/",
        "sentence":  "All employees receive comprehensive health insurance benefits.",
        "sentenceTranslation":  "พนักงานทุกคนได้รับสิทธิประโยชน์ประกันสุขภาพแบบครอบคลุม"
    },
    {
        "id":  "pdf-533",
        "word":  "Hire",
        "translation":  "ว่าจ้าง",
        "category":  "Human Resources",
        "ipa":  "/ˈhaɪər/",
        "sentence":  "We plan to hire five new staff members next quarter.",
        "sentenceTranslation":  "เราวางแผนที่จะจ้างพนักงานใหม่ห้าคนในไตรมาสหน้า"
    },
    {
        "id":  "pdf-534",
        "word":  "Holiday",
        "translation":  "วันหยุดเทศกาล / วันหยุดราชการ",
        "category":  "Human Resources",
        "ipa":  "/ˈhɑːlədeɪ/",
        "sentence":  "The public holiday meant a long weekend for many workers.",
        "sentenceTranslation":  "วันหยุดราชการหมายถึงวันหยุดยาวสำหรับพนักงานหลายคน"
    },
    {
        "id":  "pdf-535",
        "word":  "HR (Human Resources)",
        "translation":  "ทรัพยากรบุคคล",
        "category":  "Human Resources",
        "ipa":  "/eɪtʃ ɑːr/",
        "sentence":  "The HR department handles all employee-related matters.",
        "sentenceTranslation":  "แผนกทรัพยากรบุคคลจัดการเรื่องที่เกี่ยวข้องกับพนักงานทั้งหมด"
    },
    {
        "id":  "pdf-536",
        "word":  "Increment",
        "translation":  "การปรับขึ้น (เช่น ปรับขึ้นเงินเดือน)",
        "category":  "Human Resources",
        "ipa":  "/ˈɪŋkrəmənt/",
        "sentence":  "Employees often receive an annual salary increment based on performance.",
        "sentenceTranslation":  "พนักงานมักจะได้รับการขึ้นเงินเดือนประจำปีตามผลงาน"
    },
    {
        "id":  "pdf-537",
        "word":  "Induction",
        "translation":  "การปฐมนิเทศพนักงานใหม่",
        "category":  "Human Resources",
        "ipa":  "/ɪnˈdʌkʃən/",
        "sentence":  "New hires attend an induction program to learn about the company.",
        "sentenceTranslation":  "พนักงานใหม่เข้าร่วมโครงการปฐมนิเทศเพื่อเรียนรู้เกี่ยวกับบริษัท"
    },
    {
        "id":  "pdf-538",
        "word":  "In-house training",
        "translation":  "การฝึกอบรมภายในองค์กร",
        "category":  "Human Resources",
        "ipa":  "/ɪn haʊs ˈtreɪnɪŋ/",
        "sentence":  "The company provides in-house training to develop employees\u0027 skills.",
        "sentenceTranslation":  "บริษัทมีการอบรมภายในองค์กรเพื่อพัฒนาทักษะของพนักงาน"
    },
    {
        "id":  "pdf-539",
        "word":  "Intern",
        "translation":  "นักศึกษาฝึกงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈɪntɜːrn/",
        "sentence":  "She is working as an intern at a marketing agency this summer.",
        "sentenceTranslation":  "เธอเป็นนักศึกษาฝึกงานที่บริษัทการตลาดแห่งหนึ่งในช่วงฤดูร้อนนี้"
    },
    {
        "id":  "pdf-540",
        "word":  "Internship",
        "translation":  "การฝึกงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈɪntɜːrnʃɪp/",
        "sentence":  "Many students seek an internship to gain practical work experience.",
        "sentenceTranslation":  "นักเรียนหลายคนมองหาการฝึกงานเพื่อสั่งสมประสบการณ์การทำงานจริง"
    },
    {
        "id":  "pdf-541",
        "word":  "Interview",
        "translation":  "สัมภาษณ์ / การสัมภาษณ์",
        "category":  "Human Resources",
        "ipa":  "/ˈɪntərvjuː/",
        "sentence":  "I have an interview for a new job next week.",
        "sentenceTranslation":  "ฉันมีการสัมภาษณ์งานใหม่ในสัปดาห์หน้า"
    },
    {
        "id":  "pdf-542",
        "word":  "Interviewer",
        "translation":  "ผู้สัมภาษณ์",
        "category":  "Human Resources",
        "ipa":  "/ˈɪntərvjuːər/",
        "sentence":  "The interviewer asked insightful questions during the meeting.",
        "sentenceTranslation":  "ผู้สัมภาษณ์ถามคำถามที่ลึกซึ้งในระหว่างการประชุม"
    },
    {
        "id":  "pdf-543",
        "word":  "Job description",
        "translation":  "คำอธิบายลักษณะงาน (JD)",
        "category":  "Human Resources",
        "ipa":  "/dʒɒb dɪˈskrɪpʃən/",
        "sentence":  "Please read the job description carefully before applying.",
        "sentenceTranslation":  "โปรดอ่านรายละเอียดงานอย่างละเอียดก่อนสมัคร"
    },
    {
        "id":  "pdf-544",
        "word":  "Job offer",
        "translation":  "ข้อเสนอการเข้าทำงาน",
        "category":  "Human Resources",
        "ipa":  "/dʒɒb ˈɒfər/",
        "sentence":  "She received a great job offer from a tech company.",
        "sentenceTranslation":  "เธอได้รับข้อเสนอจ้างงานที่ดีจากบริษัทเทคโนโลยี"
    },
    {
        "id":  "pdf-545",
        "word":  "Job satisfaction",
        "translation":  "ความพึงพอใจในงาน",
        "category":  "Human Resources",
        "ipa":  "/dʒɒb ˌsætɪsˈfækʃən/",
        "sentence":  "High job satisfaction often leads to increased productivity.",
        "sentenceTranslation":  "ความพึงพอใจในงานที่สูงมักนำไปสู่ผลิตภาพที่เพิ่มขึ้น"
    },
    {
        "id":  "pdf-546",
        "word":  "Job security",
        "translation":  "ความมั่นคงในหน้าที่การงาน",
        "category":  "Human Resources",
        "ipa":  "/dʒɒb sɪˈkjʊərɪti/",
        "sentence":  "Many employees value job security over a higher salary.",
        "sentenceTranslation":  "พนักงานหลายคนให้ความสำคัญกับความมั่นคงในการทำงานมากกว่าเงินเดือนที่สูงกว่า"
    },
    {
        "id":  "pdf-547",
        "word":  "KPI",
        "translation":  "ดัชนีชี้วัดความสำเร็จของงาน",
        "category":  "Human Resources",
        "ipa":  "/keɪ piː aɪ/",
        "sentence":  "We need to meet our KPIs by the end of the quarter.",
        "sentenceTranslation":  "เราต้องบรรลุ KPI ของเราภายในสิ้นไตรมาส"
    },
    {
        "id":  "pdf-548",
        "word":  "Labor law",
        "translation":  "กฎหมายแรงงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈleɪbər lɔː/",
        "sentence":  "Companies must comply with all aspects of labor law.",
        "sentenceTranslation":  "บริษัทต้องปฏิบัติตามกฎหมายแรงงานทุกประการ"
    },
    {
        "id":  "pdf-549",
        "word":  "Lay off",
        "translation":  "เลิกจ้าง (เนื่องจากเหตุผลทางเศรษฐกิจ)",
        "category":  "Human Resources",
        "ipa":  "/leɪ ɒf/",
        "sentence":  "The company had to lay off several employees due to economic downturn.",
        "sentenceTranslation":  "บริษัทต้องเลิกจ้างพนักงานหลายคนเนื่องจากเศรษฐกิจตกต่ำ"
    },
    {
        "id":  "pdf-550",
        "word":  "Leave",
        "translation":  "การลาหยุด",
        "category":  "Human Resources",
        "ipa":  "/liːv/",
        "sentence":  "I need to request leave for a personal appointment.",
        "sentenceTranslation":  "ฉันต้องขอลางานเพื่อไปทำธุระส่วนตัว"
    },
    {
        "id":  "pdf-551",
        "word":  "Maternity leave",
        "translation":  "วันลาคลอดบุตร",
        "category":  "Human Resources",
        "ipa":  "/məˈtɜːrnəti liːv/",
        "sentence":  "She will be on maternity leave for three months.",
        "sentenceTranslation":  "เธอจะลาคลอดเป็นเวลาสามเดือน"
    },
    {
        "id":  "pdf-552",
        "word":  "Medical leave / Sick leave",
        "translation":  "วันลาป่วย",
        "category":  "Human Resources",
        "ipa":  "/ˈmɛdɪkl liːv / sɪk liːv/",
        "sentence":  "He applied for medical leave due to a severe flu.",
        "sentenceTranslation":  "เขาขอลาป่วยเนื่องจากเป็นไข้หวัดใหญ่"
    },
    {
        "id":  "pdf-553",
        "word":  "Mentor",
        "translation":  "พี่เลี้ยง / ที่ปรึกษาให้คำแนะนำ",
        "category":  "Human Resources",
        "ipa":  "/ˈmɛntɔːr/",
        "sentence":  "My mentor helped me navigate my career path.",
        "sentenceTranslation":  "พี่เลี้ยงของฉันช่วยแนะนำเส้นทางอาชีพของฉัน"
    },
    {
        "id":  "pdf-554",
        "word":  "Minimum wage",
        "translation":  "ค่าแรงขั้นต่ำ",
        "category":  "Human Resources",
        "ipa":  "/ˈmɪnɪməm weɪdʒ/",
        "sentence":  "The government increased the minimum wage last year.",
        "sentenceTranslation":  "รัฐบาลขึ้นค่าแรงขั้นต่ำเมื่อปีที่แล้ว"
    },
    {
        "id":  "pdf-555",
        "word":  "Notice period",
        "translation":  "ระยะเวลาแจ้งล่วงหน้า (ก่อนลาออก)",
        "category":  "Human Resources",
        "ipa":  "/ˈnəʊtɪs ˈpɪəriəd/",
        "sentence":  "You must serve a two-week notice period before resigning.",
        "sentenceTranslation":  "คุณต้องแจ้งลาออกล่วงหน้าสองสัปดาห์ก่อนที่จะลาออก"
    },
    {
        "id":  "pdf-556",
        "word":  "Occupation",
        "translation":  "อาชีพ",
        "category":  "Human Resources",
        "ipa":  "/ˌɒkjuˈpeɪʃən/",
        "sentence":  "What is your current occupation?",
        "sentenceTranslation":  "อาชีพปัจจุบันของคุณคืออะไร?"
    },
    {
        "id":  "pdf-557",
        "word":  "Offboarding",
        "translation":  "กระบวนการลาออกจากงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈɒfbɔːrdɪŋ/",
        "sentence":  "The company has a clear offboarding process for departing employees.",
        "sentenceTranslation":  "บริษัทมีขั้นตอนการจัดการพนักงานที่กำลังจะออกจากงานที่ชัดเจน"
    },
    {
        "id":  "pdf-558",
        "word":  "Onboarding",
        "translation":  "กระบวนการรับพนักงานใหม่เข้าทำงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈɒnbɔːrdɪŋ/",
        "sentence":  "Our onboarding program helps new hires integrate quickly.",
        "sentenceTranslation":  "โปรแกรมการปฐมนิเทศของเราช่วยให้พนักงานใหม่ปรับตัวเข้ากับองค์กรได้อย่างรวดเร็ว"
    },
    {
        "id":  "pdf-559",
        "word":  "Org chart",
        "translation":  "แผนผังโครงสร้างองค์กร",
        "category":  "Human Resources",
        "ipa":  "/ɔːrɡ tʃɑːrt/",
        "sentence":  "The org chart shows the reporting structure of the company.",
        "sentenceTranslation":  "แผนผังองค์กรแสดงโครงสร้างการรายงานของบริษัท"
    },
    {
        "id":  "pdf-560",
        "word":  "Overtime (OT)",
        "translation":  "การทำงานล่วงเวลา / ค่าล่วงเวลา",
        "category":  "Human Resources",
        "ipa":  "/ˈəʊvərtaɪm (ˌəʊˈtiː)/",
        "sentence":  "Employees will receive extra pay for working overtime.",
        "sentenceTranslation":  "พนักงานจะได้รับค่าจ้างเพิ่มสำหรับการทำงานล่วงเวลา"
    },
    {
        "id":  "pdf-561",
        "word":  "Part-time",
        "translation":  "งานนอกเวลา / พาร์ทไทม์",
        "category":  "Human Resources",
        "ipa":  "/pɑːrt taɪm/",
        "sentence":  "She works part-time while studying at university.",
        "sentenceTranslation":  "เธอทำงานนอกเวลาในขณะที่เรียนมหาวิทยาลัย"
    },
    {
        "id":  "pdf-562",
        "word":  "Paternity leave",
        "translation":  "วันลาเพื่อไปดูแลบุตรที่เพิ่งคลอด",
        "category":  "Human Resources",
        "ipa":  "/pəˈtɜːrnəti liːv/",
        "sentence":  "He took paternity leave to help care for his newborn baby.",
        "sentenceTranslation":  "เขาลาเพื่อดูแลบุตรเพื่อช่วยดูแลลูกแรกเกิดของเขา"
    },
    {
        "id":  "pdf-563",
        "word":  "Pay slip",
        "translation":  "สลิปเงินเดือน",
        "category":  "Human Resources",
        "ipa":  "/ˈpeɪ slɪp/",
        "sentence":  "Please check your pay slip for any discrepancies.",
        "sentenceTranslation":  "โปรดตรวจสอบสลิปเงินเดือนของคุณสำหรับความคลาดเคลื่อนใดๆ"
    },
    {
        "id":  "pdf-564",
        "word":  "Payroll",
        "translation":  "งานคำนวณและจ่ายเงินเดือน",
        "category":  "Human Resources",
        "ipa":  "/ˈpeɪrəʊl/",
        "sentence":  "The payroll department handles all employee salaries.",
        "sentenceTranslation":  "แผนกบัญชีเงินเดือนจัดการเงินเดือนพนักงานทั้งหมด"
    },
    {
        "id":  "pdf-565",
        "word":  "Performance",
        "translation":  "ผลการปฏิบัติงาน",
        "category":  "Human Resources",
        "ipa":  "/pərˈfɔːrməns/",
        "sentence":  "The team\u0027s performance improved significantly this quarter.",
        "sentenceTranslation":  "ผลงานของทีมดีขึ้นอย่างมากในไตรมาสนี้"
    },
    {
        "id":  "pdf-566",
        "word":  "Performance review",
        "translation":  "การทบทวนและประเมินผลงาน",
        "category":  "Human Resources",
        "ipa":  "/pərˈfɔːrməns rɪˈvjuː/",
        "sentence":  "I have my annual performance review next week.",
        "sentenceTranslation":  "ฉันมีการประเมินผลการปฏิบัติงานประจำปีในสัปดาห์หน้า"
    },
    {
        "id":  "pdf-567",
        "word":  "Position",
        "translation":  "ตำแหน่งงาน",
        "category":  "Human Resources",
        "ipa":  "/pəˈzɪʃən/",
        "sentence":  "She applied for a new position in the marketing department.",
        "sentenceTranslation":  "เธอสมัครตำแหน่งใหม่ในแผนกการตลาด"
    },
    {
        "id":  "pdf-568",
        "word":  "Probation",
        "translation":  "การทดลองงาน",
        "category":  "Human Resources",
        "ipa":  "/proʊˈbeɪʃən/",
        "sentence":  "New employees are usually on probation for three months.",
        "sentenceTranslation":  "พนักงานใหม่มักจะอยู่ในช่วงทดลองงานเป็นเวลาสามเดือน"
    },
    {
        "id":  "pdf-569",
        "word":  "Promotion",
        "translation":  "การเลื่อนตำแหน่ง",
        "category":  "Human Resources",
        "ipa":  "/prəˈmoʊʃən/",
        "sentence":  "He received a promotion to senior manager.",
        "sentenceTranslation":  "เขาได้รับการเลื่อนตำแหน่งเป็นผู้จัดการอาวุโส"
    },
    {
        "id":  "pdf-570",
        "word":  "Qualification",
        "translation":  "คุณสมบัติที่เหมาะสมกับงาน",
        "category":  "Human Resources",
        "ipa":  "/ˌkwɑːlɪfɪˈkeɪʃən/",
        "sentence":  "What qualifications do you have for this job?",
        "sentenceTranslation":  "คุณสมบัติอะไรที่คุณมีสำหรับงานนี้?"
    },
    {
        "id":  "pdf-571",
        "word":  "Quit",
        "translation":  "ลาออก (ภาษาพูด)",
        "category":  "Human Resources",
        "ipa":  "/kwɪt/",
        "sentence":  "He decided to quit his job and start his own business.",
        "sentenceTranslation":  "เขาตัดสินใจลาออกจากงานและเริ่มต้นธุรกิจของตัวเอง"
    },
    {
        "id":  "pdf-572",
        "word":  "Recruit",
        "translation":  "สรรหาคนเข้าทำงาน / รับสมัครพนักงาน",
        "category":  "Human Resources",
        "ipa":  "/rɪˈkruːt/",
        "sentence":  "Our company plans to recruit more engineers next year.",
        "sentenceTranslation":  "บริษัทของเราวางแผนที่จะรับสมัครวิศวกรเพิ่มในปีหน้า"
    },
    {
        "id":  "pdf-573",
        "word":  "Recruiter",
        "translation":  "เจ้าหน้าที่สรรหาบุคลากร",
        "category":  "Human Resources",
        "ipa":  "/rɪˈkruːtər/",
        "sentence":  "The recruiter contacted me about a new job opportunity.",
        "sentenceTranslation":  "ผู้สรรหาติดต่อฉันเกี่ยวกับโอกาสงานใหม่"
    },
    {
        "id":  "pdf-574",
        "word":  "Recruitment",
        "translation":  "การสรรหาบุคลากร",
        "category":  "Human Resources",
        "ipa":  "/rɪˈkruːtmənt/",
        "sentence":  "The recruitment process can take several weeks.",
        "sentenceTranslation":  "กระบวนการสรรหาสามารถใช้เวลาหลายสัปดาห์"
    },
    {
        "id":  "pdf-575",
        "word":  "Redundancy",
        "translation":  "การล้นงาน / การเลิกจ้างเพราะตำแหน่งงานถูกยุบ",
        "category":  "Human Resources",
        "ipa":  "/rɪˈdʌndənsi/",
        "sentence":  "Due to financial difficulties, the company announced several redundancies.",
        "sentenceTranslation":  "เนื่องจากปัญหาทางการเงิน บริษัทจึงประกาศการเลิกจ้างหลายอัตรา"
    },
    {
        "id":  "pdf-576",
        "word":  "Reference",
        "translation":  "บุคคลอ้างอิงในการสมัครงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈrɛfərəns/",
        "sentence":  "Please provide three professional references with your application.",
        "sentenceTranslation":  "โปรดระบุบุคคลอ้างอิงที่เป็นมืออาชีพสามคนพร้อมกับใบสมัครของคุณ"
    },
    {
        "id":  "pdf-577",
        "word":  "Relocate",
        "translation":  "ย้ายสถานที่ทำงาน / ย้ายสาขา",
        "category":  "Human Resources",
        "ipa":  "/ˌriːˈloʊkeɪt/",
        "sentence":  "She had to relocate for her new job opportunity.",
        "sentenceTranslation":  "เธอต้องย้ายถิ่นฐานเพื่อโอกาสงานใหม่ของเธอ"
    },
    {
        "id":  "pdf-578",
        "word":  "Remuneration",
        "translation":  "ค่าตอบแทน / เงินค่าจ้าง",
        "category":  "Human Resources",
        "ipa":  "/rɪˌmjuːnəˈreɪʃən/",
        "sentence":  "The remuneration package includes a good salary and benefits.",
        "sentenceTranslation":  "แพ็คเกจค่าตอบแทนประกอบด้วยเงินเดือนและผลประโยชน์ที่ดี"
    },
    {
        "id":  "pdf-579",
        "word":  "Resign",
        "translation":  "ลาออกจากตำแหน่ง (เป็นทางการ)",
        "category":  "Human Resources",
        "ipa":  "/rɪˈzaɪn/",
        "sentence":  "He decided to resign from his position after ten years.",
        "sentenceTranslation":  "เขาตัดสินใจลาออกจากตำแหน่งหลังจากสิบปี"
    },
    {
        "id":  "pdf-580",
        "word":  "Resignation",
        "translation":  "การลาออก",
        "category":  "Human Resources",
        "ipa":  "/ˌrɛzɪɡˈneɪʃən/",
        "sentence":  "He submitted his letter of resignation yesterday.",
        "sentenceTranslation":  "เขายื่นหนังสือลาออกเมื่อวานนี้"
    },
    {
        "id":  "pdf-581",
        "word":  "Resume",
        "translation":  "ประวัติส่วนตัวโดยย่อเพื่อสมัครงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈrɛzumeɪ/",
        "sentence":  "Please attach your resume to the application form.",
        "sentenceTranslation":  "กรุณาแนบเรซูเม่ของคุณไปกับใบสมัคร"
    },
    {
        "id":  "pdf-582",
        "word":  "Retire",
        "translation":  "เกษียณอายุ",
        "category":  "Human Resources",
        "ipa":  "/rɪˈtaɪər/",
        "sentence":  "My grandfather plans to retire next year.",
        "sentenceTranslation":  "คุณปู่ของฉันวางแผนที่จะเกษียณอายุในปีหน้า"
    },
    {
        "id":  "pdf-583",
        "word":  "Retirement",
        "translation":  "การเกษียณอายุ",
        "category":  "Human Resources",
        "ipa":  "/rɪˈtaɪərmənt/",
        "sentence":  "She is looking forward to her retirement.",
        "sentenceTranslation":  "เธอกำลังตั้งตารอการเกษียณอายุของเธอ"
    },
    {
        "id":  "pdf-584",
        "word":  "Salary",
        "translation":  "เงินเดือน",
        "category":  "Human Resources",
        "ipa":  "/ˈsæləri/",
        "sentence":  "The new job offers a competitive salary.",
        "sentenceTranslation":  "งานใหม่เสนอตารางเงินเดือนที่แข่งขันได้"
    },
    {
        "id":  "pdf-585",
        "word":  "Salary range",
        "translation":  "ช่วงอัตราเงินเดือน",
        "category":  "Human Resources",
        "ipa":  "/ˈsæləri reɪndʒ/",
        "sentence":  "The salary range for this position is clearly stated.",
        "sentenceTranslation":  "ช่วงเงินเดือนสำหรับตำแหน่งนี้ระบุไว้อย่างชัดเจน"
    },
    {
        "id":  "pdf-586",
        "word":  "Screening",
        "translation":  "การคัดกรอง (เช่น คัดกรองใบสมัคร)",
        "category":  "Human Resources",
        "ipa":  "/ˈskriːnɪŋ/",
        "sentence":  "The initial screening process involves reviewing applications.",
        "sentenceTranslation":  "กระบวนการคัดกรองเบื้องต้นเกี่ยวข้องกับการตรวจสอบใบสมัคร"
    },
    {
        "id":  "pdf-587",
        "word":  "Seniority",
        "translation":  "ความอาวุโส / อายุงาน",
        "category":  "Human Resources",
        "ipa":  "/siːnˈjɔːrɪti/",
        "sentence":  "Promotions are often based on seniority and performance.",
        "sentenceTranslation":  "การเลื่อนตำแหน่งมักจะขึ้นอยู่กับอาวุโสและผลงาน"
    },
    {
        "id":  "pdf-588",
        "word":  "Severance pay",
        "translation":  "ค่าชดเชยการเลิกจ้าง",
        "category":  "Human Resources",
        "ipa":  "/ˈsɛvərəns peɪ/",
        "sentence":  "Employees who are laid off may receive severance pay.",
        "sentenceTranslation":  "พนักงานที่ถูกเลิกจ้างอาจได้รับเงินชดเชย"
    },
    {
        "id":  "pdf-589",
        "word":  "Shortlist",
        "translation":  "รายชื่อผู้ผ่านเข้ารอบสุดท้าย",
        "category":  "Human Resources",
        "ipa":  "/ˈʃɔːrtlɪst/",
        "sentence":  "We will shortlist the best candidates for the final interviews.",
        "sentenceTranslation":  "เราจะคัดเลือกผู้สมัครที่ดีที่สุดสำหรับการสัมภาษณ์รอบสุดท้าย"
    },
    {
        "id":  "pdf-590",
        "word":  "Skill",
        "translation":  "ทักษะ / ความชำนาญ",
        "category":  "Human Resources",
        "ipa":  "/skɪl/",
        "sentence":  "Good communication is a vital skill in any profession.",
        "sentenceTranslation":  "การสื่อสารที่ดีเป็นทักษะที่สำคัญในทุกอาชีพ"
    },
    {
        "id":  "pdf-591",
        "word":  "Staff",
        "translation":  "คณะผู้ทำงาน / พนักงาน",
        "category":  "Human Resources",
        "ipa":  "/stæf/",
        "sentence":  "The company has a dedicated and hardworking staff.",
        "sentenceTranslation":  "บริษัทมีพนักงานที่ทุ่มเทและทำงานหนัก"
    },
    {
        "id":  "pdf-592",
        "word":  "Subordinate",
        "translation":  "ผู้ใต้บังคับบัญชา / ลูกน้อง",
        "category":  "Human Resources",
        "ipa":  "/səˈbɔːrdɪnət/",
        "sentence":  "A good manager knows how to motivate their subordinates.",
        "sentenceTranslation":  "ผู้จัดการที่ดีรู้วิธีสร้างแรงจูงใจให้ผู้ใต้บังคับบัญชาของตน"
    },
    {
        "id":  "pdf-593",
        "word":  "Successor",
        "translation":  "ผู้สืบทอดตำแหน่ง",
        "category":  "Human Resources",
        "ipa":  "/səkˈsɛsər/",
        "sentence":  "The CEO is preparing to name her successor.",
        "sentenceTranslation":  "ซีอีโอกำลังเตรียมที่จะแต่งตั้งผู้สืบทอดตำแหน่งของเธอ"
    },
    {
        "id":  "pdf-594",
        "word":  "Superior",
        "translation":  "ผู้บังคับบัญชา / หัวหน้า",
        "category":  "Human Resources",
        "ipa":  "/suːˈpɪriər/",
        "sentence":  "You should report the issue to your immediate superior.",
        "sentenceTranslation":  "คุณควรรายงานปัญหานี้ต่อหัวหน้างานของคุณโดยตรง"
    },
    {
        "id":  "pdf-595",
        "word":  "Talent",
        "translation":  "ผู้มีความสามารถโดดเด่น / พนักงานดาวเด่น",
        "category":  "Human Resources",
        "ipa":  "/ˈtælənt/",
        "sentence":  "She has a natural talent for music.",
        "sentenceTranslation":  "เธอมีพรสวรรค์ทางดนตรีโดยธรรมชาติ"
    },
    {
        "id":  "pdf-596",
        "word":  "Teamwork",
        "translation":  "การทำงานเป็นทีม",
        "category":  "Human Resources",
        "ipa":  "/ˈtiːmwɜːrk/",
        "sentence":  "Teamwork is essential for the success of any project.",
        "sentenceTranslation":  "การทำงานเป็นทีมเป็นสิ่งจำเป็นสำหรับความสำเร็จของทุกโครงการ"
    },
    {
        "id":  "pdf-597",
        "word":  "Terminate",
        "translation":  "สิ้นสุด / ยกเลิกสัญญาจ้าง",
        "category":  "Human Resources",
        "ipa":  "/ˈtɜːrmɪneɪt/",
        "sentence":  "The company decided to terminate his contract.",
        "sentenceTranslation":  "บริษัทตัดสินใจที่จะยกเลิกสัญญาของเขา"
    },
    {
        "id":  "pdf-598",
        "word":  "Termination",
        "translation":  "การเลิกจ้าง / การสิ้นสุดสัญญา",
        "category":  "Human Resources",
        "ipa":  "/ˌtɜːrmɪˈneɪʃən/",
        "sentence":  "His termination from the job was unexpected.",
        "sentenceTranslation":  "การเลิกจ้างเขาออกจากงานเป็นเรื่องที่ไม่คาดคิด"
    },
    {
        "id":  "pdf-599",
        "word":  "Training",
        "translation":  "การฝึกอบรม",
        "category":  "Human Resources",
        "ipa":  "/ˈtreɪnɪŋ/",
        "sentence":  "The new employees will undergo intensive training.",
        "sentenceTranslation":  "พนักงานใหม่จะได้รับการฝึกอบรมอย่างเข้มข้น"
    },
    {
        "id":  "pdf-600",
        "word":  "Turnover rate",
        "translation":  "อัตราการเข้า-ออกของพนักงาน",
        "category":  "Human Resources",
        "ipa":  "/ˈtɜːrnˌoʊvər reɪt/",
        "sentence":  "A high turnover rate can indicate problems within a company.",
        "sentenceTranslation":  "อัตราการเข้า-ออกของพนักงานที่สูงอาจบ่งชี้ถึงปัญหาภายในบริษัท"
    },
    {
        "id":  "pdf-601",
        "word":  "Acquire",
        "translation":  "จัดหามา / ได้มา",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/əˈkwaɪər/",
        "sentence":  "The company plans to acquire a smaller competitor.",
        "sentenceTranslation":  "บริษัทวางแผนที่จะเข้าซื้อกิจการของคู่แข่งรายเล็กกว่า"
    },
    {
        "id":  "pdf-602",
        "word":  "Actual weight",
        "translation":  "น้ำหนักจริง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈæktʃuəl weɪt/",
        "sentence":  "Please ensure the actual weight matches the declared weight.",
        "sentenceTranslation":  "โปรดตรวจสอบให้แน่ใจว่าน้ำหนักจริงตรงกับน้ำหนักที่สำแดง"
    },
    {
        "id":  "pdf-603",
        "word":  "Air freight",
        "translation":  "การขนส่งสินค้าทางอากาศ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈɛr freɪt/",
        "sentence":  "We decided to send the urgent package by air freight.",
        "sentenceTranslation":  "เราตัดสินใจส่งพัสดุเร่งด่วนทางอากาศ"
    },
    {
        "id":  "pdf-604",
        "word":  "Allocate",
        "translation":  "จัดสรร (สินค้า / พื้นที่สต็อก)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈæləkeɪt/",
        "sentence":  "The budget committee will allocate funds for the new project.",
        "sentenceTranslation":  "คณะกรรมการงบประมาณจะจัดสรรเงินทุนสำหรับโครงการใหม่"
    },
    {
        "id":  "pdf-605",
        "word":  "Arrival",
        "translation":  "การมาถึง (ของสินค้า)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/əˈraɪvəl/",
        "sentence":  "We are awaiting the arrival of the shipment.",
        "sentenceTranslation":  "เรากำลังรอการมาถึงของสินค้า"
    },
    {
        "id":  "pdf-606",
        "word":  "Backorder",
        "translation":  "การสั่งซื้อสินค้าที่ยังไม่มีในสต็อก",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈbækˌɔːrdər/",
        "sentence":  "The item is currently on backorder and will be shipped next week.",
        "sentenceTranslation":  "สินค้านี้ขณะนี้เป็นคำสั่งซื้อที่ค้างส่งและจะถูกจัดส่งในสัปดาห์หน้า"
    },
    {
        "id":  "pdf-607",
        "word":  "Barcode",
        "translation":  "บาร์โค้ด / รหัสแท่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈbɑːrkoʊd/",
        "sentence":  "Every product in the store has a unique barcode.",
        "sentenceTranslation":  "สินค้าทุกชิ้นในร้านมีบาร์โค้ดที่ไม่ซ้ำกัน"
    },
    {
        "id":  "pdf-608",
        "word":  "Bill of lading (B/L)",
        "translation":  "ใบตราส่งสินค้าทางเรือ / เอกสารรับ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/bɪl əv ˈleɪdɪŋ/",
        "sentence":  "The bill of lading is a crucial document for international shipping.",
        "sentenceTranslation":  "ใบตราส่งสินค้าเป็นเอกสารสำคัญสำหรับการขนส่งระหว่างประเทศ"
    },
    {
        "id":  "pdf-609",
        "word":  "Bulk",
        "translation":  "ปริมาณมาก / สินค้าจำนวนมาก",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/bʌlk/",
        "sentence":  "We usually buy rice in bulk to save money.",
        "sentenceTranslation":  "เรามักจะซื้อข้าวเป็นจำนวนมากเพื่อประหยัดเงิน"
    },
    {
        "id":  "pdf-610",
        "word":  "Buyer",
        "translation":  "เจ้าหน้าที่จัดซื้อ / ผู้ซื้อ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈbaɪər/",
        "sentence":  "The buyer inspected the goods before payment.",
        "sentenceTranslation":  "ผู้ซื้อตรวจสอบสินค้าก่อนชำระเงิน"
    },
    {
        "id":  "pdf-611",
        "word":  "Cargo",
        "translation":  "สินค้าที่บรรทุกโดยเครื่องบิน/เรือ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkɑːrɡoʊ/",
        "sentence":  "The ship was loaded with valuable cargo.",
        "sentenceTranslation":  "เรือลำนั้นบรรทุกสินค้าล้ำค่า"
    },
    {
        "id":  "pdf-612",
        "word":  "Carrier",
        "translation":  "บริษัทผู้รับขนส่งสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkæriər/",
        "sentence":  "The shipping carrier delivered the package on time.",
        "sentenceTranslation":  "ผู้ขนส่งจัดส่งพัสดุตรงเวลา"
    },
    {
        "id":  "pdf-613",
        "word":  "Certificate of origin",
        "translation":  "หนังสือรับรองถิ่นกำเนิดสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/sərˈtɪfɪkət əv ˈɔːrɪdʒɪn/",
        "sentence":  "A certificate of origin is required for international trade.",
        "sentenceTranslation":  "ใบรับรองแหล่งกำเนิดสินค้าเป็นสิ่งจำเป็นสำหรับการค้าระหว่างประเทศ"
    },
    {
        "id":  "pdf-614",
        "word":  "Consignee",
        "translation":  "ผู้รับปลายทาง / ผู้รับสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˌkɒnsaɪˈniː/",
        "sentence":  "The consignee confirmed receipt of the shipment.",
        "sentenceTranslation":  "ผู้รับตราส่งยืนยันการรับสินค้าที่จัดส่งแล้ว"
    },
    {
        "id":  "pdf-615",
        "word":  "Consignment",
        "translation":  "การฝากขาย / สินค้าฝากขาย",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kənˈsaɪnmənt/",
        "sentence":  "The gallery sells artwork on consignment.",
        "sentenceTranslation":  "แกลเลอรีขายงานศิลปะในรูปแบบฝากขาย"
    },
    {
        "id":  "pdf-616",
        "word":  "Consignor",
        "translation":  "ผู้ส่งสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kənˈsaɪnər/",
        "sentence":  "The consignor sent the goods to the retailer.",
        "sentenceTranslation":  "ผู้ส่งมอบสินค้าส่งสินค้าไปที่ร้านค้าปลีก"
    },
    {
        "id":  "pdf-617",
        "word":  "Container",
        "translation":  "ตู้คอนเทนเนอร์",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kənˈteɪnər/",
        "sentence":  "The container was loaded onto the ship.",
        "sentenceTranslation":  "ตู้คอนเทนเนอร์ถูกยกขึ้นเรือ"
    },
    {
        "id":  "pdf-618",
        "word":  "Contract",
        "translation":  "สัญญาซื้อขาย",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkɒntrækt/",
        "sentence":  "They signed a new contract for the project.",
        "sentenceTranslation":  "พวกเขาเซ็นสัญญาฉบับใหม่สำหรับโครงการนี้"
    },
    {
        "id":  "pdf-619",
        "word":  "Cost of goods sold",
        "translation":  "ต้นทุนขาย (COGS)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kɒst əv ɡʊdz soʊld/",
        "sentence":  "Calculating the cost of goods sold is crucial for financial reporting.",
        "sentenceTranslation":  "การคำนวณต้นทุนสินค้าที่ขายเป็นสิ่งสำคัญสำหรับการรายงานทางการเงิน"
    },
    {
        "id":  "pdf-620",
        "word":  "Courier",
        "translation":  "บริการส่งพัสดุด่วน",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkʊriər/",
        "sentence":  "We sent the documents via an express courier service.",
        "sentenceTranslation":  "เราส่งเอกสารผ่านบริการจัดส่งด่วน"
    },
    {
        "id":  "pdf-621",
        "word":  "Customs",
        "translation":  "ศุลกากร",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkʌstəmz/",
        "sentence":  "All international packages must clear customs.",
        "sentenceTranslation":  "พัสดุระหว่างประเทศทั้งหมดต้องผ่านพิธีการศุลกากร"
    },
    {
        "id":  "pdf-622",
        "word":  "Customs clearance",
        "translation":  "การผ่านพิธีการศุลกากร",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkʌstəmz ˈklɪərəns/",
        "sentence":  "Customs clearance can sometimes delay shipments.",
        "sentenceTranslation":  "พิธีการศุลกากรบางครั้งอาจทำให้การจัดส่งล่าช้า"
    },
    {
        "id":  "pdf-623",
        "word":  "Damage",
        "translation":  "ความเสียหาย",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈdæmɪdʒ/",
        "sentence":  "Inspect the package for any damage upon arrival.",
        "sentenceTranslation":  "ตรวจสอบพัสดุว่ามีความเสียหายหรือไม่เมื่อมาถึง"
    },
    {
        "id":  "pdf-624",
        "word":  "Defect",
        "translation":  "ตำหนิ / ข้อบกพร่องของสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈdiːfekt/",
        "sentence":  "The product was returned due to a manufacturing defect.",
        "sentenceTranslation":  "สินค้าถูกส่งคืนเนื่องจากข้อบกพร่องจากการผลิต"
    },
    {
        "id":  "pdf-625",
        "word":  "Defective",
        "translation":  "ซึ่งมีตำหนิ / เสียหาย / ชำรุด",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈfɛktɪv/",
        "sentence":  "The defective product was returned to the manufacturer.",
        "sentenceTranslation":  "สินค้าที่ชำรุดถูกส่งคืนผู้ผลิต"
    },
    {
        "id":  "pdf-626",
        "word":  "Delay",
        "translation":  "การล่าช้าในการจัดส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈleɪ/",
        "sentence":  "There was a significant delay in the flight due to bad weather.",
        "sentenceTranslation":  "เที่ยวบินมีความล่าช้าอย่างมากเนื่องจากสภาพอากาศเลวร้าย"
    },
    {
        "id":  "pdf-627",
        "word":  "Deliver",
        "translation":  "ส่งมอบสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈlɪvər/",
        "sentence":  "We aim to deliver all orders within 3-5 business days.",
        "sentenceTranslation":  "เราตั้งเป้าที่จะจัดส่งคำสั่งซื้อทั้งหมดภายใน 3-5 วันทำการ"
    },
    {
        "id":  "pdf-628",
        "word":  "Delivery note",
        "translation":  "ใบส่งของ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈlɪvəri noʊt/",
        "sentence":  "Please sign the delivery note upon receipt of the goods.",
        "sentenceTranslation":  "กรุณาเซ็นชื่อในใบส่งของเมื่อได้รับสินค้า"
    },
    {
        "id":  "pdf-629",
        "word":  "Demand",
        "translation":  "ความต้องการซื้อสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈmænd/",
        "sentence":  "There is a high demand for organic produce in the market.",
        "sentenceTranslation":  "มีความต้องการสินค้าเกษตรอินทรีย์สูงในตลาด"
    },
    {
        "id":  "pdf-630",
        "word":  "Departure",
        "translation":  "การออกเดินทาง (ของรถ/เรือ/เครื่องบิน)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dɪˈpɑːrtʃər/",
        "sentence":  "The departure gate is now open for boarding.",
        "sentenceTranslation":  "ประตูออกเดินทางเปิดให้ขึ้นเครื่องแล้ว"
    },
    {
        "id":  "pdf-631",
        "word":  "Destination",
        "translation":  "ปลายทาง / จุดหมายปลายทาง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˌdɛstɪˈneɪʃən/",
        "sentence":  "Our final destination is Paris, France.",
        "sentenceTranslation":  "จุดหมายปลายทางสุดท้ายของเราคือปารีส ประเทศฝรั่งเศส"
    },
    {
        "id":  "pdf-632",
        "word":  "Distribution",
        "translation":  "การกระจายสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˌdɪstrɪˈbjuːʃən/",
        "sentence":  "The company handles the distribution of its products nationwide.",
        "sentenceTranslation":  "บริษัทจัดการการจัดจำหน่ายผลิตภัณฑ์ของตนทั่วประเทศ"
    },
    {
        "id":  "pdf-633",
        "word":  "Distribution center",
        "translation":  "ศูนย์กระจายสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˌdɪstrɪˈbjuːʃən ˈsɛntər/",
        "sentence":  "Goods are shipped from the distribution center to various retail stores.",
        "sentenceTranslation":  "สินค้าถูกจัดส่งจากศูนย์กระจายสินค้าไปยังร้านค้าปลีกต่างๆ"
    },
    {
        "id":  "pdf-634",
        "word":  "Domestic",
        "translation":  "ภายในประเทศ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/dəˈmɛstɪk/",
        "sentence":  "Domestic flights are usually cheaper than international ones.",
        "sentenceTranslation":  "เที่ยวบินภายในประเทศมักจะถูกกว่าเที่ยวบินระหว่างประเทศ"
    },
    {
        "id":  "pdf-635",
        "word":  "Duty",
        "translation":  "ภาษีนำเข้า / ภาษีศุลกากร",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈduːti/",
        "sentence":  "It is your duty to report any suspicious activity.",
        "sentenceTranslation":  "เป็นหน้าที่ของคุณที่จะต้องรายงานกิจกรรมที่น่าสงสัยใดๆ"
    },
    {
        "id":  "pdf-636",
        "word":  "Equipment",
        "translation":  "อุปกรณ์ / เครื่องมือ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ɪˈkwɪpmənt/",
        "sentence":  "The laboratory is equipped with state-of-the-art equipment.",
        "sentenceTranslation":  "ห้องปฏิบัติการติดตั้งอุปกรณ์ที่ทันสมัย"
    },
    {
        "id":  "pdf-637",
        "word":  "Estimate",
        "translation":  "การประมาณราคา / ใบประเมินราคา",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈɛstɪmeɪt/",
        "sentence":  "Can you estimate the cost of the repairs?",
        "sentenceTranslation":  "คุณสามารถประมาณการค่าใช้จ่ายในการซ่อมแซมได้หรือไม่"
    },
    {
        "id":  "pdf-638",
        "word":  "ETA (Estimated time of",
        "translation":  "arrival) เวลาทีคาดว่าจะมาถึง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-639",
        "word":  "ETD (Estimated time of",
        "translation":  "departure) เวลาทีคาดว่าจะออกจากต้นทาง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-640",
        "word":  "Excess stock",
        "translation":  "สินค้าล้นสต็อก",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/sà.tɔ́k sùan.kɤ̄n/",
        "sentence":  "We need to clear the excess stock before the new inventory arrives.",
        "sentenceTranslation":  "เราต้องระบายสต็อกส่วนเกินก่อนที่สินค้าใหม่จะมาถึง"
    },
    {
        "id":  "pdf-641",
        "word":  "Expiry date",
        "translation":  "วันหมดอายุ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/wan mɔ̀t.ʔāː.júʔ/",
        "sentence":  "Please check the expiry date on all perishable goods.",
        "sentenceTranslation":  "กรุณาตรวจสอบวันหมดอายุของสินค้าที่เน่าเสียง่ายทั้งหมด"
    },
    {
        "id":  "pdf-642",
        "word":  "Export",
        "translation":  "ส่งออก",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/sɔ̀ŋ.ʔɔ̀ɔk/",
        "sentence":  "The company plans to export its products to several new markets.",
        "sentenceTranslation":  "บริษัทวางแผนที่จะส่งออกสินค้าไปยังตลาดใหม่หลายแห่ง"
    },
    {
        "id":  "pdf-643",
        "word":  "Flammable",
        "translation":  "ไวไฟ / วัตถุไวไฟ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/waj.fāj/",
        "sentence":  "Keep flammable liquids away from open flames.",
        "sentenceTranslation":  "เก็บของเหลวไวไฟให้ห่างจากเปลวไฟ"
    },
    {
        "id":  "pdf-644",
        "word":  "Fragile",
        "translation":  "เปราะบาง / แตกหักง่าย",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/prɔ̀ʔ.bāːŋ/",
        "sentence":  "Handle with care, as this item is fragile.",
        "sentenceTranslation":  "โปรดระมัดระวังในการหยิบจับ เนื่องจากสิ่งของนี้เปราะบาง"
    },
    {
        "id":  "pdf-645",
        "word":  "Freight",
        "translation":  "ค่าระวาง / สินค้าที่ขนส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kʰâː.kʰǒn.sɔ̀ŋ/",
        "sentence":  "The freight charges can significantly add to the total cost.",
        "sentenceTranslation":  "ค่าขนส่งสามารถเพิ่มค่าใช้จ่ายทั้งหมดได้อย่างมาก"
    },
    {
        "id":  "pdf-646",
        "word":  "Freight forwarder",
        "translation":  "ตัวแทนผู้รับจัดการขนส่งสินค้าระหว่างประเทศ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/tua.tʰɛ̄n pʰûː.ráp.d͡ʑàk.kàːn kʰǒn.sɔ̀ŋ.sǐn.kʰâː/",
        "sentence":  "We hired a freight forwarder to handle our international shipments.",
        "sentenceTranslation":  "เราจ้างตัวแทนผู้รับจัดการขนส่งสินค้าเพื่อจัดการการขนส่งระหว่างประเทศของเรา"
    },
    {
        "id":  "pdf-647",
        "word":  "Fulfillment",
        "translation":  "กระบวนการจัดการตามคำสั่งซื้อของลูกค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kaːn.d͡ʑàt.kaːn kam.sàŋ.sɯ́ː/",
        "sentence":  "Efficient order fulfillment is crucial for customer satisfaction.",
        "sentenceTranslation":  "การจัดการคำสั่งซื้อที่มีประสิทธิภาพเป็นสิ่งสำคัญสำหรับการสร้างความพึงพอใจของลูกค้า"
    },
    {
        "id":  "pdf-648",
        "word":  "Gross weight",
        "translation":  "น้ำหนักรวม (น้ำหนักสินค้า + กล่องบรรจุ)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/náːm.nàk ruːam/",
        "sentence":  "The gross weight of the package is printed on the label.",
        "sentenceTranslation":  "น้ำหนักรวมของพัสดุถูกพิมพ์อยู่บนฉลาก"
    },
    {
        "id":  "pdf-649",
        "word":  "Handling charge",
        "translation":  "ค่าธรรมเนียมการจัดการสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kʰâː.tʰam.nīam kaːn.d͡ʑàt.kaːn/",
        "sentence":  "There is a small handling charge for each online order.",
        "sentenceTranslation":  "มีค่าธรรมเนียมการจัดการเล็กน้อยสำหรับการสั่งซื้อออนไลน์แต่ละรายการ"
    },
    {
        "id":  "pdf-650",
        "word":  "Import",
        "translation":  "นำเข้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/nam.kʰâw/",
        "sentence":  "Many countries import oil to meet their energy demands.",
        "sentenceTranslation":  "หลายประเทศนำเข้าน้ำมันเพื่อตอบสนองความต้องการพลังงานของตน"
    },
    {
        "id":  "pdf-651",
        "word":  "Inbound logistics",
        "translation":  "โลจิสติกส์ขาเข้า (การนำวัตถุดิบเข้า)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/loː.d͡ʑít.tìk kʰǎː.kʰâw/",
        "sentence":  "Optimizing inbound logistics can reduce production costs.",
        "sentenceTranslation":  "การปรับปรุงโลจิสติกส์ขาเข้าให้มีประสิทธิภาพสามารถลดต้นทุนการผลิตได้"
    },
    {
        "id":  "pdf-652",
        "word":  "Incoterms",
        "translation":  "ข้อตกลงในการส่งมอบสินค้าระหว่างประเทศ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ʔin.kʰoː.tʰɤːm/",
        "sentence":  "The Incoterms specify who is responsible for shipping costs and insurance.",
        "sentenceTranslation":  "อินโคเทอมส์ระบุว่าใครเป็นผู้รับผิดชอบค่าขนส่งและประกันภัย"
    },
    {
        "id":  "pdf-653",
        "word":  "Inspection",
        "translation":  "การตรวจสอบคุณภาพสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kaːn.trùat.sɔ̀ɔp/",
        "sentence":  "All goods undergo a quality inspection before shipment.",
        "sentenceTranslation":  "สินค้าทั้งหมดต้องผ่านการตรวจสอบคุณภาพก่อนการจัดส่ง"
    },
    {
        "id":  "pdf-654",
        "word":  "Insurance",
        "translation":  "การประกันภัยสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kaːn.prà.kan.pʰaj/",
        "sentence":  "It\u0027s advisable to get travel insurance before going abroad.",
        "sentenceTranslation":  "ควรทำประกันภัยการเดินทางก่อนไปต่างประเทศ"
    },
    {
        "id":  "pdf-655",
        "word":  "Inventory",
        "translation":  "สินค้าคงคลัง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ɪnˈvɛntəri/",
        "sentence":  "The company needs to conduct an inventory count to know its current stock levels.",
        "sentenceTranslation":  "บริษัทจำเป็นต้องนับสินค้าคงคลังเพื่อทราบระดับสต็อกปัจจุบัน"
    },
    {
        "id":  "pdf-656",
        "word":  "Invoice",
        "translation":  "ใบแจ้งหนี้",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈɪnvɔɪs/",
        "sentence":  "Please send the invoice for the services rendered.",
        "sentenceTranslation":  "กรุณาส่งใบแจ้งหนี้สำหรับบริการที่ได้ให้ไปแล้ว"
    },
    {
        "id":  "pdf-657",
        "word":  "Lead time",
        "translation":  "ระยะเวลาที่ใช้ในการรอคอยสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈliːd taɪm/",
        "sentence":  "Reducing the lead time can improve customer satisfaction.",
        "sentenceTranslation":  "การลดระยะเวลาตั้งแต่เริ่มจนเสร็จสามารถเพิ่มความพึงพอใจของลูกค้าได้"
    },
    {
        "id":  "pdf-658",
        "word":  "Loading",
        "translation":  "การขนสินค้าขึ้นรถ/เรือ/เครื่องบิน",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈloʊdɪŋ/",
        "sentence":  "The crew is currently loading the cargo onto the ship.",
        "sentenceTranslation":  "ลูกเรือกำลังขนถ่ายสินค้าขึ้นเรืออยู่ในขณะนี้"
    },
    {
        "id":  "pdf-659",
        "word":  "Logistics",
        "translation":  "ระบบโลจิสติกส์ / การบริหารการขนส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/loʊˈdʒɪstɪks/",
        "sentence":  "Efficient logistics are crucial for timely delivery.",
        "sentenceTranslation":  "การขนส่งที่มีประสิทธิภาพเป็นสิ่งสำคัญสำหรับการจัดส่งที่ตรงเวลา"
    },
    {
        "id":  "pdf-660",
        "word":  "Manufacturer",
        "translation":  "ผู้ผลิต",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˌmænjuˈfæktʃərər/",
        "sentence":  "We source our raw materials directly from the manufacturer.",
        "sentenceTranslation":  "เราจัดหาวัตถุดิบของเราโดยตรงจากผู้ผลิต"
    },
    {
        "id":  "pdf-661",
        "word":  "Materials",
        "translation":  "วัตถุดิบ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/məˈtɪəriəlz/",
        "sentence":  "All the necessary materials for the project have arrived.",
        "sentenceTranslation":  "วัตถุดิบที่จำเป็นทั้งหมดสำหรับโครงการได้มาถึงแล้ว"
    },
    {
        "id":  "pdf-662",
        "word":  "Net weight",
        "translation":  "น้ำหนักสุทธิ (เฉพาะน้ำหนักสินค้า)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈnɛt weɪt/",
        "sentence":  "The label clearly states the net weight of the product.",
        "sentenceTranslation":  "ฉลากระบุชัดเจนถึงน้ำหนักสุทธิของผลิตภัณฑ์"
    },
    {
        "id":  "pdf-663",
        "word":  "Order",
        "translation":  "คำสั่งซื้อ / สั่งซื้อ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈɔːrdər/",
        "sentence":  "We received a large order from our new client.",
        "sentenceTranslation":  "เราได้รับคำสั่งซื้อจำนวนมากจากลูกค้ารายใหม่ของเรา"
    },
    {
        "id":  "pdf-664",
        "word":  "Outbound logistics",
        "translation":  "โลจิสติกส์ขาออก (การส่งสินค้าจากคลัง)",
        "category":  "General",
        "ipa":  "/ˈaʊtbaʊnd loʊˈdʒɪstɪks/",
        "sentence":  "Outbound logistics involves the delivery of finished products to customers.",
        "sentenceTranslation":  "การขนส่งสินค้าขาออกเกี่ยวข้องกับการส่งมอบผลิตภัณฑ์สำเร็จรูปให้กับลูกค้า"
    },
    {
        "id":  "pdf-665",
        "word":  "Overstock",
        "translation":  "การมีสินค้าในสต็อกมากเกินไป",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈoʊvərstɒk/",
        "sentence":  "The store had an overstock of winter coats by the end of the season.",
        "sentenceTranslation":  "ร้านมีสินค้าเสื้อโค้ทฤดูหนาวมากเกินความต้องการเมื่อสิ้นสุดฤดู"
    },
    {
        "id":  "pdf-666",
        "word":  "Package",
        "translation":  "พัสดุ / หีบห่อ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpækɪdʒ/",
        "sentence":  "The delivery service dropped off a package this morning.",
        "sentenceTranslation":  "บริการจัดส่งพัสดุมาส่งหีบห่อเมื่อเช้านี้"
    },
    {
        "id":  "pdf-667",
        "word":  "Packaging",
        "translation":  "บรรจุภัณฑ์",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpækɪdʒɪŋ/",
        "sentence":  "The new packaging design is both attractive and environmentally friendly.",
        "sentenceTranslation":  "การออกแบบบรรจุภัณฑ์ใหม่ทั้งสวยงามและเป็นมิตรต่อสิ่งแวดล้อม"
    },
    {
        "id":  "pdf-668",
        "word":  "Packing list",
        "translation":  "ใบรายการบรรจุสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpækɪŋ lɪst/",
        "sentence":  "Please check the contents against the packing list.",
        "sentenceTranslation":  "โปรดตรวจสอบสินค้าเทียบกับรายการบรรจุสินค้า"
    },
    {
        "id":  "pdf-669",
        "word":  "Pallet",
        "translation":  "พาเลท / แท่นวางสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpælɪt/",
        "sentence":  "Workers used a forklift to move the heavy pallet.",
        "sentenceTranslation":  "คนงานใช้รถยกเคลื่อนย้ายแท่นวางสินค้าที่หนัก"
    },
    {
        "id":  "pdf-670",
        "word":  "Parcel",
        "translation":  "พัสดุชิ้นเล็กหรือกลาง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpɑːrsl/",
        "sentence":  "The post office delivered a large parcel to my house.",
        "sentenceTranslation":  "ไปรษณีย์นำพัสดุขนาดใหญ่มาส่งที่บ้านของฉัน"
    },
    {
        "id":  "pdf-671",
        "word":  "Pickup",
        "translation":  "การไปรับของ / รับสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpɪkʌp/",
        "sentence":  "The customer will come for a pickup at 3 PM.",
        "sentenceTranslation":  "ลูกค้าจะมารับสินค้าในเวลาบ่าย 3 โมง"
    },
    {
        "id":  "pdf-672",
        "word":  "Procurement",
        "translation":  "การจัดซื้อจัดจ้าง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/prəˈkjʊərmənt/",
        "sentence":  "The company\u0027s procurement department is responsible for sourcing materials.",
        "sentenceTranslation":  "แผนกจัดซื้อจัดจ้างของบริษัทมีหน้าที่รับผิดชอบในการจัดหาวัตถุดิบ"
    },
    {
        "id":  "pdf-673",
        "word":  "Purchasing",
        "translation":  "การจัดซื้อ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈpɜːrtʃəsɪŋ/",
        "sentence":  "She is in charge of purchasing office supplies.",
        "sentenceTranslation":  "เธอรับผิดชอบในการจัดซื้ออุปกรณ์สำนักงาน"
    },
    {
        "id":  "pdf-674",
        "word":  "Quality control (QC)",
        "translation":  "การควบคุมคุณภาพ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkwɒləti kənˈtroʊl/",
        "sentence":  "Strict quality control is essential for manufacturing reliable products.",
        "sentenceTranslation":  "การควบคุมคุณภาพอย่างเข้มงวดเป็นสิ่งจำเป็นสำหรับการผลิตสินค้าที่เชื่อถือได้"
    },
    {
        "id":  "pdf-675",
        "word":  "Quantity",
        "translation":  "ปริมาณ / จำนวน",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈkwɒntəti/",
        "sentence":  "Please specify the exact quantity of items you need.",
        "sentenceTranslation":  "โปรดระบุจำนวนสินค้าที่คุณต้องการให้ชัดเจน"
    },
    {
        "id":  "pdf-676",
        "word":  "Quotation",
        "translation":  "ใบเสนอราคา",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/kwoʊˈteɪʃən/",
        "sentence":  "We received a quotation for the new project from three different suppliers.",
        "sentenceTranslation":  "เราได้รับใบเสนอราคาสำหรับโครงการใหม่จากซัพพลายเออร์สามรายที่แตกต่างกัน"
    },
    {
        "id":  "pdf-677",
        "word":  "Raw material",
        "translation":  "วัตถุดิบ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɔː məˈtɪəriəl/",
        "sentence":  "The factory processes raw materials into finished goods.",
        "sentenceTranslation":  "โรงงานแปรรูปวัตถุดิบให้เป็นสินค้าสำเร็จรูป"
    },
    {
        "id":  "pdf-678",
        "word":  "Receipt",
        "translation":  "ใบเสร็จรับเงิน / การได้รับของ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈsiːt/",
        "sentence":  "Please keep your receipt as proof of purchase.",
        "sentenceTranslation":  "โปรดเก็บใบเสร็จไว้เป็นหลักฐานการซื้อ"
    },
    {
        "id":  "pdf-679",
        "word":  "Receiving",
        "translation":  "การรับสินค้าเข้าคลัง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈsiːvɪŋ/",
        "sentence":  "The receiving department checks all incoming deliveries.",
        "sentenceTranslation":  "แผนกรับสินค้าจะตรวจสอบการส่งมอบทั้งหมดที่เข้ามา"
    },
    {
        "id":  "pdf-680",
        "word":  "Refund",
        "translation":  "การคืนเงิน",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈriːfʌnd/",
        "sentence":  "You can get a full refund if you return the item within 30 days.",
        "sentenceTranslation":  "คุณสามารถรับเงินคืนเต็มจำนวนได้หากคุณคืนสินค้าภายใน 30 วัน"
    },
    {
        "id":  "pdf-681",
        "word":  "Reject",
        "translation":  "ปฏิเสธ (ไม่รับของเนื่องจากไม่ได้มาตรฐาน)",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈdʒɛkt/",
        "sentence":  "The quality control team decided to reject the defective batch of products.",
        "sentenceTranslation":  "ทีมควบคุมคุณภาพตัดสินใจปฏิเสธสินค้าล็อตที่มีข้อบกพร่อง"
    },
    {
        "id":  "pdf-682",
        "word":  "Replenish",
        "translation":  "เติมสินค้าในสต็อก",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈplɛnɪʃ/",
        "sentence":  "We need to replenish our stock of popular items quickly.",
        "sentenceTranslation":  "เราต้องเติมสินค้าคงคลังของสินค้าที่เป็นที่นิยมอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-683",
        "word":  "Request for proposal (RFP)",
        "translation":  "เอกสารคำขอให้ยื่นข้อเสนอ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈkwɛst fɔːr prəˈpoʊzəl/",
        "sentence":  "The government issued an RFP for the new infrastructure project.",
        "sentenceTranslation":  "รัฐบาลออกเอกสารขอข้อเสนอ (RFP) สำหรับโครงการโครงสร้างพื้นฐานใหม่"
    },
    {
        "id":  "pdf-684",
        "word":  "Request for quotation (RFQ)",
        "translation":  "เอกสารคำขอใบเสนอราคา",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈkwɛst fɔːr kwoʊˈteɪʃən/",
        "sentence":  "We sent an RFQ to several vendors to compare prices for the equipment.",
        "sentenceTranslation":  "เราส่งเอกสารขอใบเสนอราคา (RFQ) ไปยังผู้ขายหลายรายเพื่อเปรียบเทียบราคาอุปกรณ์"
    },
    {
        "id":  "pdf-685",
        "word":  "Return",
        "translation":  "การคืนสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/rɪˈtɜːrn/",
        "sentence":  "Please return the book to the library.",
        "sentenceTranslation":  "กรุณาส่งหนังสือคืนห้องสมุด"
    },
    {
        "id":  "pdf-686",
        "word":  "Route",
        "translation":  "เส้นทางการขนส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ruːt/",
        "sentence":  "The shortest route to the city center is closed.",
        "sentenceTranslation":  "เส้นทางที่สั้นที่สุดไปยังใจกลางเมืองปิดอยู่"
    },
    {
        "id":  "pdf-687",
        "word":  "Sea freight",
        "translation":  "การขนส่งสินค้าทางเรือ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/siː freɪt/",
        "sentence":  "We use sea freight for large international shipments.",
        "sentenceTranslation":  "เราใช้การขนส่งทางทะเลสำหรับการขนส่งระหว่างประเทศขนาดใหญ่"
    },
    {
        "id":  "pdf-688",
        "word":  "Shelf life",
        "translation":  "อายุการจัดเก็บสินค้าบนชั้นวาง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ʃɛlf laɪf/",
        "sentence":  "This product has a long shelf life.",
        "sentenceTranslation":  "ผลิตภัณฑ์นี้มีอายุการเก็บรักษานาน"
    },
    {
        "id":  "pdf-689",
        "word":  "Shipment",
        "translation":  "การจัดส่งสินค้า / สินค้าที่จัดส่งในแต่ละครั้ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈʃɪpmənt/",
        "sentence":  "The next shipment is expected to arrive tomorrow.",
        "sentenceTranslation":  "การจัดส่งครั้งต่อไปคาดว่าจะมาถึงพรุ่งนี้"
    },
    {
        "id":  "pdf-690",
        "word":  "Shipping",
        "translation":  "การขนส่งสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈʃɪpɪŋ/",
        "sentence":  "We offer free shipping on all orders over $50.",
        "sentenceTranslation":  "เราเสนอการจัดส่งฟรีสำหรับคำสั่งซื้อทั้งหมดที่เกิน 50 ดอลลาร์"
    },
    {
        "id":  "pdf-691",
        "word":  "Shortage",
        "translation":  "การขาดแคลนสินค้า / ของไม่พอ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈʃɔːrtɪdʒ/",
        "sentence":  "There is a shortage of skilled workers in the industry.",
        "sentenceTranslation":  "มีการขาดแคลนแรงงานมีฝีมือในอุตสาหกรรม"
    },
    {
        "id":  "pdf-692",
        "word":  "Stock",
        "translation":  "สินค้าคงคลัง / สต็อกสินค้า",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/stɒk/",
        "sentence":  "The item is currently out of stock.",
        "sentenceTranslation":  "สินค้ารายการนี้หมดสต็อกในขณะนี้"
    },
    {
        "id":  "pdf-693",
        "word":  "Storage",
        "translation":  "การจัดเก็บสินค้า / คลังจัดเก็บ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈstɔːrɪdʒ/",
        "sentence":  "We need more storage space for our documents.",
        "sentenceTranslation":  "เราต้องการพื้นที่จัดเก็บเอกสารเพิ่มขึ้น"
    },
    {
        "id":  "pdf-694",
        "word":  "Supplier",
        "translation":  "ผู้จัดจำหน่ายวัตถุดิบ / ซัพพลายเออร์",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/səˈplaɪər/",
        "sentence":  "Our main supplier delivers goods every week.",
        "sentenceTranslation":  "ผู้จัดหาสินค้าหลักของเราส่งสินค้าทุกสัปดาห์"
    },
    {
        "id":  "pdf-695",
        "word":  "Supply chain",
        "translation":  "ห่วงโซ่อุปทาน",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/səˈplaɪ tʃeɪn/",
        "sentence":  "The pandemic disrupted global supply chains.",
        "sentenceTranslation":  "การระบาดใหญ่ขัดขวางห่วงโซ่อุปทานทั่วโลก"
    },
    {
        "id":  "pdf-696",
        "word":  "Tracking number",
        "translation":  "หมายเลขติดตามพัสดุ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈtrækɪŋ ˈnʌmbər/",
        "sentence":  "You can track your order using the tracking number provided.",
        "sentenceTranslation":  "คุณสามารถติดตามคำสั่งซื้อของคุณได้โดยใช้หมายเลขติดตามพัสดุที่ให้ไว้"
    },
    {
        "id":  "pdf-697",
        "word":  "Transit",
        "translation":  "การส่งผ่าน / อยู่ระหว่างการเดินทางขนส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈtrænzɪt/",
        "sentence":  "The package is currently in transit.",
        "sentenceTranslation":  "พัสดุกำลังอยู่ระหว่างการขนส่ง"
    },
    {
        "id":  "pdf-698",
        "word":  "Unloading",
        "translation":  "การขนสินค้าลงจากพาหนะ",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ʌnˈloʊdɪŋ/",
        "sentence":  "The crew is busy unloading the cargo from the ship.",
        "sentenceTranslation":  "ลูกเรือกำลังยุ่งกับการขนถ่ายสินค้าออกจากเรือ"
    },
    {
        "id":  "pdf-699",
        "word":  "Warehouse",
        "translation":  "คลังสินค้า / โกดัง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈwɛərhaʊs/",
        "sentence":  "We store all our products in a large warehouse.",
        "sentenceTranslation":  "เราเก็บผลิตภัณฑ์ทั้งหมดของเราไว้ในโกดังขนาดใหญ่"
    },
    {
        "id":  "pdf-700",
        "word":  "Wholesale",
        "translation":  "การขายส่ง",
        "category":  "Procurement \u0026 Logistics",
        "ipa":  "/ˈhoʊlseɪl/",
        "sentence":  "We sell products at wholesale prices.",
        "sentenceTranslation":  "เราขายสินค้าในราคาขายส่ง"
    },
    {
        "id":  "pdf-701",
        "word":  "Access",
        "translation":  "เข้าถึง / สิทธิ์การเข้าใช้งาน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈæksɛs/",
        "sentence":  "You need a password to access the system.",
        "sentenceTranslation":  "คุณต้องมีรหัสผ่านเพื่อเข้าถึงระบบ"
    },
    {
        "id":  "pdf-702",
        "word":  "Account",
        "translation":  "บัญชีผู้ใช้งาน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/əˈkaʊnt/",
        "sentence":  "Please create an account to continue.",
        "sentenceTranslation":  "โปรดสร้างบัญชีเพื่อดำเนินการต่อ"
    },
    {
        "id":  "pdf-703",
        "word":  "Antivirus",
        "translation":  "โปรแกรมสแกนและป้องกันไวรัส",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌæntaɪˈvaɪrəs/",
        "sentence":  "Install antivirus software to protect your computer.",
        "sentenceTranslation":  "ติดตั้งซอฟต์แวร์ป้องกันไวรัสเพื่อปกป้องคอมพิวเตอร์ของคุณ"
    },
    {
        "id":  "pdf-704",
        "word":  "Application",
        "translation":  "แอปพลิเคชัน / โปรแกรมประยุกต์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌæplɪˈkeɪʃən/",
        "sentence":  "Download the new mobile application.",
        "sentenceTranslation":  "ดาวน์โหลดแอปพลิเคชันมือถือใหม่"
    },
    {
        "id":  "pdf-705",
        "word":  "Attachment",
        "translation":  "ไฟล์แนบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/əˈtætʃmənt/",
        "sentence":  "I sent the report as an email attachment.",
        "sentenceTranslation":  "ฉันส่งรายงานเป็นไฟล์แนบทางอีเมล"
    },
    {
        "id":  "pdf-706",
        "word":  "Authentication",
        "translation":  "การยืนยันตัวตน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ɔːˌθɛntɪˈkeɪʃən/",
        "sentence":  "Two-factor authentication adds security.",
        "sentenceTranslation":  "การยืนยันตัวตนสองขั้นตอนช่วยเพิ่มความปลอดภัย"
    },
    {
        "id":  "pdf-707",
        "word":  "Backup",
        "translation":  "สำรองข้อมูล / ข้อมูลสำรอง",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈbækʌp/",
        "sentence":  "Always make a backup of your important files.",
        "sentenceTranslation":  "ควรสำรองข้อมูลไฟล์สำคัญของคุณเสมอ"
    },
    {
        "id":  "pdf-708",
        "word":  "Bandwidth",
        "translation":  "ปริมาณการรับส่งข้อมูลของอินเทอร์เน็ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈbændwɪdθ/",
        "sentence":  "The network bandwidth is too low.",
        "sentenceTranslation":  "แบนด์วิดท์เครือข่ายต่ำเกินไป"
    },
    {
        "id":  "pdf-709",
        "word":  "Battery",
        "translation":  "แบตเตอรี่",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈbætəri/",
        "sentence":  "My phone battery is running low.",
        "sentenceTranslation":  "แบตเตอรี่โทรศัพท์ของฉันใกล้หมดแล้ว"
    },
    {
        "id":  "pdf-710",
        "word":  "Binder",
        "translation":  "แฟ้มตราช้าง / แฟ้มห่วงใส่อกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈbaɪndər/",
        "sentence":  "Put all the documents in the binder.",
        "sentenceTranslation":  "ใส่เอกสารทั้งหมดไว้ในแฟ้ม"
    },
    {
        "id":  "pdf-711",
        "word":  "Browser",
        "translation":  "โปรแกรมท่องเว็บ (เช่น Chrome)",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈbraʊzər/",
        "sentence":  "Which web browser do you use?",
        "sentenceTranslation":  "คุณใช้เว็บเบราว์เซอร์ใด"
    },
    {
        "id":  "pdf-712",
        "word":  "Bug",
        "translation":  "ข้อผิดพลาดในระบบหรือโปรแกรม",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/bʌɡ/",
        "sentence":  "There\u0027s a bug in the software.",
        "sentenceTranslation":  "มีข้อผิดพลาดในซอฟต์แวร์"
    },
    {
        "id":  "pdf-713",
        "word":  "Cable",
        "translation":  "สายเคเบิล / สายไฟ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈkeɪbəl/",
        "sentence":  "Connect the device with a USB cable.",
        "sentenceTranslation":  "เชื่อมต่ออุปกรณ์ด้วยสาย USB"
    },
    {
        "id":  "pdf-714",
        "word":  "Calculator",
        "translation":  "เครื่องคิดเลข",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈkælkjəleɪtər/",
        "sentence":  "Use a calculator for complex math.",
        "sentenceTranslation":  "ใช้เครื่องคิดเลขสำหรับการคำนวณที่ซับซ้อน"
    },
    {
        "id":  "pdf-715",
        "word":  "Cartridge",
        "translation":  "ตลับหมึกเครื่องพิมพ์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈkɑːrtrɪdʒ/",
        "sentence":  "I need to replace the ink cartridge in the printer.",
        "sentenceTranslation":  "ฉันต้องเปลี่ยนตลับหมึกในเครื่องพิมพ์"
    },
    {
        "id":  "pdf-716",
        "word":  "Cloud storage",
        "translation":  "พื้นที่จัดเก็บข้อมูลออนไลน์บนคลาวด์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/klaʊd ˈstɔːrɪdʒ/",
        "sentence":  "I saved all my photos on cloud storage.",
        "sentenceTranslation":  "ฉันบันทึกรูปภาพทั้งหมดไว้บนคลาวด์สตอเรจ"
    },
    {
        "id":  "pdf-717",
        "word":  "Computer",
        "translation":  "คอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/kəmˈpjuːtər/",
        "sentence":  "I use my computer to work every day.",
        "sentenceTranslation":  "ฉันใช้คอมพิวเตอร์ทำงานทุกวัน"
    },
    {
        "id":  "pdf-718",
        "word":  "Connection",
        "translation":  "การเชื่อมต่ออินเทอร์เน็ตหรือเครือข่าย",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/kəˈnekʃn/",
        "sentence":  "The internet connection is very slow today.",
        "sentenceTranslation":  "การเชื่อมต่ออินเทอร์เน็ตช้ามากในวันนี้"
    },
    {
        "id":  "pdf-719",
        "word":  "Copier",
        "translation":  "เครื่องถ่ายเอกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈkɑːpiər/",
        "sentence":  "Please make ten copies using the copier.",
        "sentenceTranslation":  "กรุณาทำสำเนาสิบชุดโดยใช้เครื่องถ่ายเอกสาร"
    },
    {
        "id":  "pdf-720",
        "word":  "Crash",
        "translation":  "ระบบค้าง / โปรแกรมปิดตัวกะทันหัน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/kræʃ/",
        "sentence":  "My laptop began to crash after the update.",
        "sentenceTranslation":  "แล็ปท็อปของฉันเริ่มค้างหลังจากอัปเดต"
    },
    {
        "id":  "pdf-721",
        "word":  "Cyber security",
        "translation":  "ความปลอดภัยทางไซเบอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsaɪbər sɪˈkjʊrəti/",
        "sentence":  "Our company focuses heavily on cyber security.",
        "sentenceTranslation":  "บริษัทของเราให้ความสำคัญกับความปลอดภัยทางไซเบอร์อย่างมาก"
    },
    {
        "id":  "pdf-722",
        "word":  "Dashboard",
        "translation":  "หน้าต่างแสดงผลข้อมูลสรุป",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdæʃbɔːrd/",
        "sentence":  "The dashboard shows all the project statistics.",
        "sentenceTranslation":  "แดชบอร์ดแสดงสถิติทั้งหมดของโครงการ"
    },
    {
        "id":  "pdf-723",
        "word":  "Data",
        "translation":  "ข้อมูล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdeɪtə/",
        "sentence":  "We need to analyze the data carefully.",
        "sentenceTranslation":  "เราจำเป็นต้องวิเคราะห์ข้อมูลอย่างระมัดระวัง"
    },
    {
        "id":  "pdf-724",
        "word":  "Database",
        "translation":  "ฐานข้อมูล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdeɪtəbeɪs/",
        "sentence":  "The customer information is stored in the database.",
        "sentenceTranslation":  "ข้อมูลลูกค้าถูกจัดเก็บไว้ในฐานข้อมูล"
    },
    {
        "id":  "pdf-725",
        "word":  "Desktop",
        "translation":  "หน้าจอหลักคอมพิวเตอร์ / คอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdesktɑːp/",
        "sentence":  "I prefer using a desktop for heavy tasks.",
        "sentenceTranslation":  "ฉันชอบใช้คอมพิวเตอร์ตั้งโต๊ะสำหรับงานหนัก"
    },
    {
        "id":  "pdf-726",
        "word":  "Device",
        "translation":  "อุปกรณ์ / เครื่องมืออิเล็กทรอนิกส์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/dɪˈvaɪs/",
        "sentence":  "This device connects to your phone via Bluetooth.",
        "sentenceTranslation":  "อุปกรณ์นี้เชื่อมต่อกับโทรศัพท์ของคุณผ่านบลูทูธ"
    },
    {
        "id":  "pdf-727",
        "word":  "Digital",
        "translation":  "ดิจิทัล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdɪdʒɪtəl/",
        "sentence":  "We are living in a digital age.",
        "sentenceTranslation":  "พวกเรากำลังอาศัยอยู่ในยุคดิจิทัล"
    },
    {
        "id":  "pdf-728",
        "word":  "Directory",
        "translation":  "โฟลเดอร์เก็บเอกสาร / สมุดรายนาม",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/dɪˈrektəri/",
        "sentence":  "Please check the phone directory for his number.",
        "sentenceTranslation":  "กรุณาตรวจสอบสมุดโทรศัพท์เพื่อหาเบอร์ของเขา"
    },
    {
        "id":  "pdf-729",
        "word":  "Disconnect",
        "translation":  "ตัดการเชื่อมต่อ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌdɪskəˈnekt/",
        "sentence":  "Remember to disconnect the power before cleaning.",
        "sentenceTranslation":  "อย่าลืมถอดปลั๊กไฟก่อนทำความสะอาด"
    },
    {
        "id":  "pdf-730",
        "word":  "Document",
        "translation":  "เอกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdɒkjʊmənt/",
        "sentence":  "Please sign this legal document.",
        "sentenceTranslation":  "กรุณาเซ็นเอกสารทางกฎหมายฉบับนี้"
    },
    {
        "id":  "pdf-731",
        "word":  "Domain",
        "translation":  "ชื่อเว็บไซต์ (โดเมนเนม)",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/dəˈmeɪn/",
        "sentence":  "You need to register a domain name for your website.",
        "sentenceTranslation":  "คุณจำเป็นต้องจดทะเบียนชื่อโดเมนสำหรับเว็บไซต์ของคุณ"
    },
    {
        "id":  "pdf-732",
        "word":  "Download",
        "translation":  "ดาวน์โหลดข้อมูล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈdaʊnloʊd/",
        "sentence":  "You can download the software from our website.",
        "sentenceTranslation":  "คุณสามารถดาวน์โหลดซอฟต์แวร์ได้จากเว็บไซต์ของเรา"
    },
    {
        "id":  "pdf-733",
        "word":  "Envelope",
        "translation":  "ซองจดหมาย",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈenvəloʊp/",
        "sentence":  "She put the letter into the envelope.",
        "sentenceTranslation":  "เธอใส่จดหมายลงในซองจดหมาย"
    },
    {
        "id":  "pdf-734",
        "word":  "Equipment",
        "translation":  "อุปกรณ์ / เครื่องมือเครื่องใช้",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ɪˈkwɪpmənt/",
        "sentence":  "The lab has new medical equipment.",
        "sentenceTranslation":  "ห้องแล็บมีอุปกรณ์ทางการแพทย์ชิ้นใหม่"
    },
    {
        "id":  "pdf-735",
        "word":  "File",
        "translation":  "ไฟล์ข้อมูล / แฟ้มเอกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/faɪl/",
        "sentence":  "Please save the file to your desktop.",
        "sentenceTranslation":  "กรุณาบันทึกไฟล์ไว้ที่หน้าเดสก์ท็อปของคุณ"
    },
    {
        "id":  "pdf-736",
        "word":  "Firewall",
        "translation":  "ระบบกำแพงไฟป้องกันการแฮก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈfaɪrwɔːl/",
        "sentence":  "The firewall protects our network from hackers.",
        "sentenceTranslation":  "ไฟร์วอลล์ช่วยปกป้องเครือข่ายของเราจากแฮกเกอร์"
    },
    {
        "id":  "pdf-737",
        "word":  "Folder",
        "translation":  "โฟลเดอร์ใส่ไฟล์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈfoʊldər/",
        "sentence":  "I organized my documents into a folder.",
        "sentenceTranslation":  "ฉันจัดระเบียบเอกสารของฉันไว้ในโฟลเดอร์"
    },
    {
        "id":  "pdf-738",
        "word":  "Font",
        "translation":  "รูปแบบตัวอักษร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/fɒnt/",
        "sentence":  "You can change the font size in the settings.",
        "sentenceTranslation":  "คุณสามารถเปลี่ยนขนาดตัวอักษรได้ในการตั้งค่า"
    },
    {
        "id":  "pdf-739",
        "word":  "Furniture",
        "translation":  "เฟอร์นิเจอร์สำนักงาน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈfɜːrnɪtʃər/",
        "sentence":  "They bought new furniture for their house.",
        "sentenceTranslation":  "พวกเขาซื้อเฟอร์นิเจอร์ใหม่สำหรับบ้านของพวกเขา"
    },
    {
        "id":  "pdf-740",
        "word":  "Gadget",
        "translation":  "อุปกรณ์ไอทีขนาดเล็ก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈɡædʒɪt/",
        "sentence":  "He loves buying every new electronic gadget.",
        "sentenceTranslation":  "เขาชอบซื้ออุปกรณ์อิเล็กทรอนิกส์ชิ้นใหม่ทุกอย่าง"
    },
    {
        "id":  "pdf-741",
        "word":  "Glitch",
        "translation":  "ระบบรวนชั่วคราว / ปัญหาทางเทคนิค",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ɡlɪtʃ/",
        "sentence":  "There was a small glitch in the computer program.",
        "sentenceTranslation":  "มีข้อผิดพลาดเล็กน้อยในโปรแกรมคอมพิวเตอร์"
    },
    {
        "id":  "pdf-742",
        "word":  "Hardware",
        "translation":  "ตัวเครื่องหรืออุปกรณ์คอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈhɑːrd.wer/",
        "sentence":  "He upgraded the computer hardware to improve performance.",
        "sentenceTranslation":  "เขาอัปเกรดฮาร์ดแวร์คอมพิวเตอร์เพื่อเพิ่มประสิทธิภาพ"
    },
    {
        "id":  "pdf-743",
        "word":  "Headset",
        "translation":  "หูฟังพร้อมไมโครโฟน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈhed.set/",
        "sentence":  "I use a headset for my online meetings.",
        "sentenceTranslation":  "ฉันใช้ชุดหูฟังสำหรับการประชุมออนไลน์ของฉัน"
    },
    {
        "id":  "pdf-744",
        "word":  "Icon",
        "translation":  "สัญลักษณ์หรือรูปภาพแทนโปรแกรม",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈaɪ.kɑːn/",
        "sentence":  "Double-click the icon to open the program.",
        "sentenceTranslation":  "ดับเบิลคลิกที่ไอคอนเพื่อเปิดโปรแกรม"
    },
    {
        "id":  "pdf-745",
        "word":  "Ink",
        "translation":  "น้ำหมึก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ɪŋk/",
        "sentence":  "The printer is running low on black ink.",
        "sentenceTranslation":  "เครื่องพิมพ์กำลังหมึกดำจะหมด"
    },
    {
        "id":  "pdf-746",
        "word":  "Installation",
        "translation":  "การติดตั้งโปรแกรม",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌɪn.stəˈleɪ.ʃən/",
        "sentence":  "The installation of the new software took ten minutes.",
        "sentenceTranslation":  "การติดตั้งซอฟต์แวร์ใหม่ใช้เวลาสิบนาที"
    },
    {
        "id":  "pdf-747",
        "word":  "Interface",
        "translation":  "หน้าประสานงานผู้ใช้ / หน้าตาโปรแกรม",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈɪn.t̬ɚ.feɪs/",
        "sentence":  "The app has a user-friendly interface.",
        "sentenceTranslation":  "แอปนี้มีอินเทอร์เฟซที่ใช้งานง่าย"
    },
    {
        "id":  "pdf-748",
        "word":  "Internet",
        "translation":  "อินเทอร์เน็ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈɪn.t̬ɚ.net/",
        "sentence":  "I searched for the answer on the internet.",
        "sentenceTranslation":  "ฉันค้นหาคำตอบบนอินเทอร์เน็ต"
    },
    {
        "id":  "pdf-749",
        "word":  "IT (Information Technology)",
        "translation":  "เทคโนโลยีสารสนเทศ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌaɪˈtiː/",
        "sentence":  "She works in the IT department.",
        "sentenceTranslation":  "เธอทำงานอยู่ในแผนกไอที"
    },
    {
        "id":  "pdf-750",
        "word":  "Keyboard",
        "translation":  "แป้นพิมพ์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈkiː.bɔːrd/",
        "sentence":  "My laptop keyboard is broken.",
        "sentenceTranslation":  "คีย์บอร์ดแล็ปท็อปของฉันพัง"
    },
    {
        "id":  "pdf-751",
        "word":  "Laptop",
        "translation":  "คอมพิวเตอร์พกพา / โน้ตบุ๊ก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈlæp.tɑːp/",
        "sentence":  "I carry my laptop to work every day.",
        "sentenceTranslation":  "ฉันพกแล็ปท็อปไปทำงานทุกวัน"
    },
    {
        "id":  "pdf-752",
        "word":  "Link",
        "translation":  "ลิงก์เชื่อมโยงเว็บไซต์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/lɪŋk/",
        "sentence":  "Click the link to visit the website.",
        "sentenceTranslation":  "คลิกลิงก์เพื่อเข้าไปที่เว็บไซต์"
    },
    {
        "id":  "pdf-753",
        "word":  "Log in / Sign in",
        "translation":  "เข้าสู่ระบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/lɔɡ ɪn/",
        "sentence":  "Please log in to access your account.",
        "sentenceTranslation":  "โปรดเข้าสู่ระบบเพื่อเข้าใช้งานบัญชีของคุณ"
    },
    {
        "id":  "pdf-754",
        "word":  "Log out / Sign out",
        "translation":  "ออกจากระบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/lɔɡ aʊt/",
        "sentence":  "Don\u0027t forget to log out after using the computer.",
        "sentenceTranslation":  "อย่าลืมออกจากระบบหลังจากใช้คอมพิวเตอร์"
    },
    {
        "id":  "pdf-755",
        "word":  "Maintenance",
        "translation":  "การบำรุงรักษาอุปกรณ์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈmeɪn.tən.əns/",
        "sentence":  "The website is currently down for maintenance.",
        "sentenceTranslation":  "เว็บไซต์กำลังปิดปรับปรุงชั่วคราว"
    },
    {
        "id":  "pdf-756",
        "word":  "Monitor",
        "translation":  "หน้าจอคอมพิวเตอร์ / ตรวจตราดู",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈmɑː.nə.t̬ɚ/",
        "sentence":  "He bought a larger monitor for his office.",
        "sentenceTranslation":  "เขาซื้อจอภาพที่ใหญ่ขึ้นสำหรับสำนักงานของเขา"
    },
    {
        "id":  "pdf-757",
        "word":  "Mouse",
        "translation":  "เมาส์คอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/maʊs/",
        "sentence":  "I need to buy a new mouse for my computer.",
        "sentenceTranslation":  "ฉันต้องซื้อเมาส์ตัวใหม่สำหรับคอมพิวเตอร์ของฉัน"
    },
    {
        "id":  "pdf-758",
        "word":  "Network",
        "translation":  "เครือข่ายคอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈnetwɜːrk/",
        "sentence":  "The company network is down for maintenance.",
        "sentenceTranslation":  "เครือข่ายของบริษัทกำลังปิดปรับปรุง"
    },
    {
        "id":  "pdf-759",
        "word":  "Notification",
        "translation":  "การแจ้งเตือน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌnoʊtɪfɪˈkeɪʃn/",
        "sentence":  "I received a notification on my phone.",
        "sentenceTranslation":  "ฉันได้รับแจ้งเตือนบนโทรศัพท์ของฉัน"
    },
    {
        "id":  "pdf-760",
        "word":  "Offline",
        "translation":  "ออฟไลน์ / ไม่ได้เชื่อมต่ออินเทอร์เน็ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌɔːfˈlaɪn/",
        "sentence":  "You cannot send the email while you are offline.",
        "sentenceTranslation":  "คุณไม่สามารถส่งอีเมลได้ในขณะที่คุณไม่ได้เชื่อมต่ออินเทอร์เน็ต"
    },
    {
        "id":  "pdf-761",
        "word":  "Online",
        "translation":  "ออนไลน์ / เชื่อมต่ออินเทอร์เน็ตอยู่",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈɑːnlaɪn/",
        "sentence":  "I usually do my grocery shopping online.",
        "sentenceTranslation":  "ปกติฉันซื้อของชำผ่านช่องทางออนไลน์"
    },
    {
        "id":  "pdf-762",
        "word":  "Operating system (OS)",
        "translation":  "ระบบปฏิบัติการ (เช่น Windows)",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈɑːpəreɪtɪŋ ˈsɪstəm/",
        "sentence":  "Windows is a popular operating system.",
        "sentenceTranslation":  "วินโดวส์เป็นระบบปฏิบัติการที่ได้รับความนิยม"
    },
    {
        "id":  "pdf-763",
        "word":  "Paper",
        "translation":  "กระดาษ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈpeɪpər/",
        "sentence":  "Please print the report on a piece of paper.",
        "sentenceTranslation":  "กรุณาพิมพ์รายงานลงบนกระดาษหนึ่งแผ่น"
    },
    {
        "id":  "pdf-764",
        "word":  "Paper shredder",
        "translation":  "เครื่องทำลายเอกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈpeɪpər ˈʃredər/",
        "sentence":  "Use the paper shredder to destroy sensitive documents.",
        "sentenceTranslation":  "ใช้เครื่องทำลายเอกสารเพื่อทำลายเอกสารที่เป็นความลับ"
    },
    {
        "id":  "pdf-765",
        "word":  "Password",
        "translation":  "รหัสผ่าน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈpæswɜːrd/",
        "sentence":  "Never share your password with anyone.",
        "sentenceTranslation":  "ห้ามบอกรหัสผ่านของคุณกับใครเด็ดขาด"
    },
    {
        "id":  "pdf-766",
        "word":  "PDF",
        "translation":  "ไฟล์เอกสารประเภท PDF",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌpiː diː ˈef/",
        "sentence":  "You can download the form as a PDF file.",
        "sentenceTranslation":  "คุณสามารถดาวน์โหลดแบบฟอร์มเป็นไฟล์ PDF ได้"
    },
    {
        "id":  "pdf-767",
        "word":  "Platform",
        "translation":  "แพลตฟอร์ม / ระบบซอฟต์แวร์หลัก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈplætfɔːrm/",
        "sentence":  "This platform allows users to share photos easily.",
        "sentenceTranslation":  "แพลตฟอร์มนี้ช่วยให้ผู้ใช้แชร์รูปภาพได้อย่างง่ายดาย"
    },
    {
        "id":  "pdf-768",
        "word":  "Plug",
        "translation":  "ปลั๊กไฟ / เสียบปลั๊ก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/plʌɡ/",
        "sentence":  "Make sure to plug the cable into the outlet.",
        "sentenceTranslation":  "ตรวจสอบให้แน่ใจว่าได้เสียบสายเคเบิลเข้ากับเต้ารับแล้ว"
    },
    {
        "id":  "pdf-769",
        "word":  "Printer",
        "translation":  "เครื่องพิมพ์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈprɪntər/",
        "sentence":  "The printer is out of ink.",
        "sentenceTranslation":  "เครื่องพิมพ์หมึกหมด"
    },
    {
        "id":  "pdf-770",
        "word":  "Privacy",
        "translation":  "ความเป็นส่วนตัว",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈpraɪvəsi/",
        "sentence":  "We value the privacy of our customers.",
        "sentenceTranslation":  "เราให้ความสำคัญกับความเป็นส่วนตัวของลูกค้าของเรา"
    },
    {
        "id":  "pdf-771",
        "word":  "Projector",
        "translation":  "เครื่องฉายภาพ / โปรเจกเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/prəˈdʒektər/",
        "sentence":  "Please connect the laptop to the projector.",
        "sentenceTranslation":  "กรุณาเชื่อมต่อแล็ปท็อปเข้ากับเครื่องฉายโปรเจคเตอร์"
    },
    {
        "id":  "pdf-772",
        "word":  "Reboot / Restart",
        "translation":  "เริ่มต้นระบบใหม่ / รีสตาร์ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌriːˈbuːt / ˌriːˈstɑːrt/",
        "sentence":  "You should reboot your computer to fix the lag.",
        "sentenceTranslation":  "คุณควรเริ่มระบบคอมพิวเตอร์ใหม่เพื่อแก้ไขปัญหาเครื่องหน่วง"
    },
    {
        "id":  "pdf-773",
        "word":  "Remote access",
        "translation":  "การรีโมทเข้าใช้งานจากระยะไกล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/rɪˈmoʊt ˈækses/",
        "sentence":  "The IT support team used remote access to fix the error.",
        "sentenceTranslation":  "ทีมสนับสนุนด้านไอทีใช้การเข้าถึงระยะไกลเพื่อแก้ไขข้อผิดพลาด"
    },
    {
        "id":  "pdf-774",
        "word":  "Router",
        "translation":  "อุปกรณ์กระจายสัญญาณอินเทอร์เน็ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈraʊtər/",
        "sentence":  "Check the router if the internet connection is unstable.",
        "sentenceTranslation":  "ลองตรวจสอบเราเตอร์หากการเชื่อมต่ออินเทอร์เน็ตไม่เสถียร"
    },
    {
        "id":  "pdf-775",
        "word":  "Scanner",
        "translation":  "เครื่องสแกนเอกสาร",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈskænər/",
        "sentence":  "I need to use the scanner to digitize these documents.",
        "sentenceTranslation":  "ฉันต้องใช้เครื่องสแกนเพื่อเปลี่ยนเอกสารเหล่านี้ให้เป็นไฟล์ดิจิทัล"
    },
    {
        "id":  "pdf-776",
        "word":  "Screen",
        "translation":  "หน้าจอ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/skriːn/",
        "sentence":  "The laptop screen is too bright for my eyes.",
        "sentenceTranslation":  "หน้าจอแล็ปท็อปสว่างเกินไปสำหรับสายตาของฉัน"
    },
    {
        "id":  "pdf-777",
        "word":  "Server",
        "translation":  "เครื่องแม่ข่าย / เซิร์ฟเวอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsɜːrvər/",
        "sentence":  "The company server went down during the maintenance.",
        "sentenceTranslation":  "เซิร์ฟเวอร์ของบริษัทล่มระหว่างการบำรุงรักษา"
    },
    {
        "id":  "pdf-778",
        "word":  "Setting",
        "translation":  "การตั้งค่าระบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsetɪŋ/",
        "sentence":  "Change the language setting to Thai in the menu.",
        "sentenceTranslation":  "เปลี่ยนการตั้งค่าภาษาเป็นภาษาไทยในเมนู"
    },
    {
        "id":  "pdf-779",
        "word":  "Software",
        "translation":  "โปรแกรมคอมพิวเตอร์ / ซอฟต์แวร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsɔːftwer/",
        "sentence":  "We need to install new software for the project.",
        "sentenceTranslation":  "เราจำเป็นต้องติดตั้งซอฟต์แวร์ใหม่สำหรับโปรเจกต์นี้"
    },
    {
        "id":  "pdf-780",
        "word":  "Spam",
        "translation":  "อีเมลขยะ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/spæm/",
        "sentence":  "Don\u0027t open any suspicious links in your spam folder.",
        "sentenceTranslation":  "อย่าเปิดลิงก์ที่น่าสงสัยในโฟลเดอร์อีเมลขยะของคุณ"
    },
    {
        "id":  "pdf-781",
        "word":  "Speaker",
        "translation":  "ลำโพง",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈspiːkər/",
        "sentence":  "The sound from the external speaker is quite clear.",
        "sentenceTranslation":  "เสียงจากลำโพงภายนอกมีความชัดเจนดีมาก"
    },
    {
        "id":  "pdf-782",
        "word":  "Spreadsheet",
        "translation":  "แผ่นตารางทำการ (เช่น Excel, Sheets)",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈspredʃiːt/",
        "sentence":  "Please update the data in the spreadsheet.",
        "sentenceTranslation":  "กรุณาอัปเดตข้อมูลในตารางคำนวณ"
    },
    {
        "id":  "pdf-783",
        "word":  "Stapler",
        "translation":  "แม็กเย็บกระดาษ / เครื่องเย็บกระดาษ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsteɪplər/",
        "sentence":  "Can you pass me the stapler on your desk?",
        "sentenceTranslation":  "ช่วยส่งที่เย็บกระดาษที่อยู่บนโต๊ะคุณให้หน่อยได้ไหม"
    },
    {
        "id":  "pdf-784",
        "word":  "Stationery",
        "translation":  "เครื่องเขียน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsteɪʃəneri/",
        "sentence":  "We need to buy more stationery for the office.",
        "sentenceTranslation":  "เราต้องซื้อเครื่องเขียนเพิ่มสำหรับสำนักงาน"
    },
    {
        "id":  "pdf-785",
        "word":  "Storage",
        "translation":  "หน่วยความจำ / ที่จัดเก็บข้อมูล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈstɔːrɪdʒ/",
        "sentence":  "My phone is running out of storage space.",
        "sentenceTranslation":  "โทรศัพท์ของฉันพื้นที่จัดเก็บข้อมูลใกล้จะเต็มแล้ว"
    },
    {
        "id":  "pdf-786",
        "word":  "Subscription",
        "translation":  "การสมัครสมาชิกรายเดือน/รายปี",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/səbˈskrɪpʃn/",
        "sentence":  "I decided to cancel my monthly music subscription.",
        "sentenceTranslation":  "ฉันตัดสินใจยกเลิกการสมัครสมาชิกเพลงรายเดือนของฉัน"
    },
    {
        "id":  "pdf-787",
        "word":  "Support",
        "translation":  "ฝ่ายสนับสนุนช่วยเหลือลูกค้าหรือผู้ใช้",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/səˈpɔːrt/",
        "sentence":  "I need technical support for my computer.",
        "sentenceTranslation":  "ฉันต้องการความช่วยเหลือทางเทคนิคสำหรับคอมพิวเตอร์ของฉัน"
    },
    {
        "id":  "pdf-788",
        "word":  "System",
        "translation":  "ระบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈsɪstəm/",
        "sentence":  "The operating system is very fast.",
        "sentenceTranslation":  "ระบบปฏิบัติการนี้เร็วมาก"
    },
    {
        "id":  "pdf-789",
        "word":  "Tablet",
        "translation":  "แท็บเล็ต",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈtæblət/",
        "sentence":  "She uses a tablet for drawing.",
        "sentenceTranslation":  "เธอใช้แท็บเล็ตสำหรับการวาดรูป"
    },
    {
        "id":  "pdf-790",
        "word":  "Technical",
        "translation":  "ทางเทคนิค",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈteknɪkl/",
        "sentence":  "There is a technical error in the program.",
        "sentenceTranslation":  "มีข้อผิดพลาดทางเทคนิคในโปรแกรม"
    },
    {
        "id":  "pdf-791",
        "word":  "Technician",
        "translation":  "ช่างเทคนิค",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/tekˈnɪʃn/",
        "sentence":  "The technician repaired my printer.",
        "sentenceTranslation":  "ช่างเทคนิคซ่อมเครื่องพิมพ์ของฉันแล้ว"
    },
    {
        "id":  "pdf-792",
        "word":  "Template",
        "translation":  "รูปแบบสำเร็จรูป / แม่แบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈtemplət/",
        "sentence":  "Please use this template for your report.",
        "sentenceTranslation":  "โปรดใช้แม่แบบนี้สำหรับรายงานของคุณ"
    },
    {
        "id":  "pdf-793",
        "word":  "Unsubscribe",
        "translation":  "ยกเลิกการรับข่าวสารหรือสมาชิก",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˌʌnsəbˈskraɪb/",
        "sentence":  "You can unsubscribe from the email list anytime.",
        "sentenceTranslation":  "คุณสามารถยกเลิกการรับข่าวสารจากอีเมลได้ทุกเมื่อ"
    },
    {
        "id":  "pdf-794",
        "word":  "Update",
        "translation":  "อัปเดต / ปรับปรุงเวอร์ชันใหม่",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈʌpdeɪt/",
        "sentence":  "I need to update my application.",
        "sentenceTranslation":  "ฉันต้องอัปเดตแอปพลิเคชันของฉัน"
    },
    {
        "id":  "pdf-795",
        "word":  "Upgrade",
        "translation":  "อัปเกรดให้ดีขึ้นหรือแรงขึ้น",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈʌpɡreɪd/",
        "sentence":  "It is time to upgrade the software.",
        "sentenceTranslation":  "ได้เวลาอัปเกรดซอฟต์แวร์แล้ว"
    },
    {
        "id":  "pdf-796",
        "word":  "Upload",
        "translation":  "อัปโหลดข้อมูลขึ้นระบบ",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈʌploʊd/",
        "sentence":  "I will upload the files to the cloud.",
        "sentenceTranslation":  "ฉันจะอัปโหลดไฟล์ไปยังคลาวด์"
    },
    {
        "id":  "pdf-797",
        "word":  "Username",
        "translation":  "ชื่อผู้ใช้งาน",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈjʊzərneɪm/",
        "sentence":  "Please enter your username to log in.",
        "sentenceTranslation":  "โปรดป้อนชื่อผู้ใช้ของคุณเพื่อเข้าสู่ระบบ"
    },
    {
        "id":  "pdf-798",
        "word":  "Virus",
        "translation":  "ไวรัสคอมพิวเตอร์",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈvaɪrəs/",
        "sentence":  "My computer was infected by a virus.",
        "sentenceTranslation":  "คอมพิวเตอร์ของฉันติดไวรัส"
    },
    {
        "id":  "pdf-799",
        "word":  "Wi-Fi",
        "translation":  "สัญญาณอินเทอร์เน็ตไร้สาย",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈwaɪfaɪ/",
        "sentence":  "Is there free Wi-Fi in this building?",
        "sentenceTranslation":  "อาคารนี้มีไวไฟฟรีให้ใช้ไหม"
    },
    {
        "id":  "pdf-800",
        "word":  "Workstation",
        "translation":  "โต๊ะทำงานประจำ / คอมพิวเตอร์ประมวลผล",
        "category":  "IT \u0026 Office Equipment",
        "ipa":  "/ˈwɜːrksteɪʃn/",
        "sentence":  "She is sitting at her workstation.",
        "sentenceTranslation":  "เธอนั่งอยู่ที่โต๊ะทำงานของเธอ"
    },
    {
        "id":  "pdf-801",
        "word":  "Abide by",
        "translation":  "ปฏิบัติตาม (กฎหมาย/ข้อตกลง)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈbaɪd baɪ/",
        "sentence":  "Employees must abide by the rules.",
        "sentenceTranslation":  "พนักงานทุกคนต้องปฏิบัติตามกฎระเบียบ"
    },
    {
        "id":  "pdf-802",
        "word":  "Abolish",
        "translation":  "ยกเลิก / ล้มเลิก (กฎหมาย/ระบบ)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈbɒlɪʃ/",
        "sentence":  "The government decided to abolish the outdated law.",
        "sentenceTranslation":  "รัฐบาลตัดสินใจยกเลิกกฎหมายที่ล้าสมัย"
    },
    {
        "id":  "pdf-803",
        "word":  "Accordance",
        "translation":  "ความสอดคล้อง / การทำตามข้อบังคับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈkɔːrdəns/",
        "sentence":  "The actions were taken in accordance with the regulations.",
        "sentenceTranslation":  "การดำเนินการดังกล่าวเป็นไปตามระเบียบข้อบังคับ"
    },
    {
        "id":  "pdf-804",
        "word":  "Accuse",
        "translation":  "กล่าวหา / ฟ้องร้อง",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈkjuːz/",
        "sentence":  "They accused him of stealing the documents.",
        "sentenceTranslation":  "พวกเขาตั้งข้อหาว่าเขาขโมยเอกสารไป"
    },
    {
        "id":  "pdf-805",
        "word":  "Acquire",
        "translation":  "เข้าซื้อกิจการ / ได้มาซึ่งสิทธิ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈkwaɪər/",
        "sentence":  "The company plans to acquire a smaller competitor.",
        "sentenceTranslation":  "บริษัทวางแผนที่จะเข้าซื้อกิจการของคู่แข่งรายเล็กกว่า"
    },
    {
        "id":  "pdf-806",
        "word":  "Act",
        "translation":  "พระราชบัญญัติ / กฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ækt/",
        "sentence":  "The parliament passed a new environmental act.",
        "sentenceTranslation":  "รัฐสภาผ่านพระราชบัญญัติสิ่งแวดล้อมฉบับใหม่"
    },
    {
        "id":  "pdf-807",
        "word":  "Actionable",
        "translation":  "ที่สามารถฟ้องร้องดำเนินคดีได้",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈækʃənəbl/",
        "sentence":  "The police need actionable intelligence to solve the case.",
        "sentenceTranslation":  "ตำรวจต้องการข้อมูลเชิงลึกที่สามารถนำไปปฏิบัติได้จริงเพื่อไขคดี"
    },
    {
        "id":  "pdf-808",
        "word":  "Adhere to",
        "translation":  "ปฏิบัติตามเคร่งครัด (นโยบาย/กฎ)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ədˈhɪər tuː/",
        "sentence":  "Employees must adhere to the safety guidelines.",
        "sentenceTranslation":  "พนักงานต้องปฏิบัติตามแนวทางความปลอดภัยอย่างเคร่งครัด"
    },
    {
        "id":  "pdf-809",
        "word":  "Advocate",
        "translation":  "ทนายความ / ผู้แก้ต่าง",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈædvəkət/",
        "sentence":  "She is a strong advocate for human rights.",
        "sentenceTranslation":  "เธอเป็นผู้สนับสนุนสิทธิมนุษยชนอย่างเข้มแข็ง"
    },
    {
        "id":  "pdf-810",
        "word":  "Affidavit",
        "translation":  "หนังสือให้การภายใต้คำสาบาน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌæfɪˈdeɪvɪt/",
        "sentence":  "He signed an affidavit stating what he witnessed.",
        "sentenceTranslation":  "เขาลงนามในคำให้การที่เป็นลายลักษณ์อักษรเพื่อระบุสิ่งที่เขาได้เห็นมา"
    },
    {
        "id":  "pdf-811",
        "word":  "Agreement",
        "translation":  "ข้อตกลง / หนังสือสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈɡriːmənt/",
        "sentence":  "Both parties signed the agreement this morning.",
        "sentenceTranslation":  "ทั้งสองฝ่ายลงนามในข้อตกลงเมื่อเช้านี้"
    },
    {
        "id":  "pdf-812",
        "word":  "Allegation",
        "translation":  "ข้อกล่าวหา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌæləˈɡeɪʃən/",
        "sentence":  "He denied every allegation made against him.",
        "sentenceTranslation":  "เขาปฏิเสธทุกข้อกล่าวหาที่มีต่อเขา"
    },
    {
        "id":  "pdf-813",
        "word":  "Alliance",
        "translation":  "พันธมิตรทางธุรกิจ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈlaɪəns/",
        "sentence":  "The two countries formed a military alliance.",
        "sentenceTranslation":  "ทั้งสองประเทศได้ก่อตั้งพันธมิตรทางทหาร"
    },
    {
        "id":  "pdf-814",
        "word":  "Amend",
        "translation":  "แก้ไขเพิ่มเติม (กฎหมาย/เอกสาร)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈmend/",
        "sentence":  "We need to amend the contract before signing it.",
        "sentenceTranslation":  "เราจำเป็นต้องแก้ไขสัญญาฉบับนี้ก่อนที่จะลงนาม"
    },
    {
        "id":  "pdf-815",
        "word":  "Amendment",
        "translation":  "การแก้ไขสัญญาหรือข้อกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈmendmənt/",
        "sentence":  "The proposed amendment to the constitution was rejected.",
        "sentenceTranslation":  "ข้อเสนอแก้ไขรัฐธรรมนูญถูกปฏิเสธ"
    },
    {
        "id":  "pdf-816",
        "word":  "Antitrust",
        "translation":  "การต่อต้านการผูกขาดทางการค้า",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈæntitrust/",
        "sentence":  "The company is facing an antitrust lawsuit.",
        "sentenceTranslation":  "บริษัทกำลังเผชิญกับคดีความเรื่องการผูกขาดทางการค้า"
    },
    {
        "id":  "pdf-817",
        "word":  "Appeal",
        "translation":  "การอุทธรณ์ / ยื่นอุทธรณ์",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈpiːl/",
        "sentence":  "The lawyer decided to appeal the court\u0027s verdict.",
        "sentenceTranslation":  "ทนายความตัดสินใจยื่นอุทธรณ์คำพิพากษาของศาล"
    },
    {
        "id":  "pdf-818",
        "word":  "Arbitration",
        "translation":  "การอนุญาโตตุลาการ (ประนีประนอมนอกศาล)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌɑːrbɪˈtreɪʃən/",
        "sentence":  "The dispute was settled through binding arbitration.",
        "sentenceTranslation":  "ข้อพิพาทได้รับการยุติผ่านกระบวนการอนุญาโตตุลาการที่มีผลผูกพัน"
    },
    {
        "id":  "pdf-819",
        "word":  "Article",
        "translation":  "มาตรา / ข้อบังคับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈɑːrtɪkəl/",
        "sentence":  "She wrote an interesting article about corporate law.",
        "sentenceTranslation":  "เธอเขียนบทความที่น่าสนใจเกี่ยวกับกฎหมายองค์กร"
    },
    {
        "id":  "pdf-820",
        "word":  "Audit",
        "translation":  "การตรวจสอบการปฏิบัติตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈɔːdɪt/",
        "sentence":  "The company is undergoing an annual financial audit.",
        "sentenceTranslation":  "บริษัทกำลังเข้ารับการตรวจสอบบัญชีประจำปี"
    },
    {
        "id":  "pdf-821",
        "word":  "Authority",
        "translation":  "เจ้าหน้าที่ผู้มีอำนาจตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈθɔːrɪti/",
        "sentence":  "He has the authority to sign contracts for the firm.",
        "sentenceTranslation":  "เขามีอำนาจในการลงนามในสัญญาต่างๆ ของบริษัท"
    },
    {
        "id":  "pdf-822",
        "word":  "Bankruptcy",
        "translation":  "การล้มละลาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈbæŋkrʌptsi/",
        "sentence":  "The company filed for bankruptcy after failing to pay its debts.",
        "sentenceTranslation":  "บริษัทได้ยื่นฟ้องล้มละลายหลังจากไม่สามารถชำระหนี้ได้"
    },
    {
        "id":  "pdf-823",
        "word":  "Binding",
        "translation":  "มีผลผูกพันทางกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈbaɪndɪŋ/",
        "sentence":  "This agreement is legally binding on both parties.",
        "sentenceTranslation":  "ข้อตกลงนี้มีผลผูกพันทางกฎหมายต่อทั้งสองฝ่าย"
    },
    {
        "id":  "pdf-824",
        "word":  "Breach",
        "translation":  "การละเมิด (สัญญา/กฎหมาย)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/briːtʃ/",
        "sentence":  "They were sued for a breach of contract.",
        "sentenceTranslation":  "พวกเขาถูกฟ้องร้องฐานผิดสัญญา"
    },
    {
        "id":  "pdf-825",
        "word":  "Bribe",
        "translation":  "สินบน / ให้สินบน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/braɪb/",
        "sentence":  "It is illegal to offer a bribe to a government official.",
        "sentenceTranslation":  "การเสนอสินบนแก่เจ้าหน้าที่รัฐเป็นสิ่งผิดกฎหมาย"
    },
    {
        "id":  "pdf-826",
        "word":  "Bribery",
        "translation":  "การติดสินบน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈbraɪbəri/",
        "sentence":  "The official was arrested on charges of bribery.",
        "sentenceTranslation":  "เจ้าหน้าที่คนดังกล่าวถูกจับกุมในข้อหาให้หรือรับสินบน"
    },
    {
        "id":  "pdf-827",
        "word":  "Bylaw",
        "translation":  "ข้อบังคับภายในองค์กร",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈbaɪlɔː/",
        "sentence":  "The committee voted to change the organization\u0027s bylaw.",
        "sentenceTranslation":  "คณะกรรมการลงมติให้แก้ไขข้อบังคับขององค์กร"
    },
    {
        "id":  "pdf-828",
        "word":  "Case",
        "translation":  "คดีความ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/keɪs/",
        "sentence":  "The lawyer spent months preparing for the court case.",
        "sentenceTranslation":  "ทนายความใช้เวลาหลายเดือนในการเตรียมคดีความเพื่อขึ้นศาล"
    },
    {
        "id":  "pdf-829",
        "word":  "Certificate",
        "translation":  "หนังสือรับรอง / ใบประกาศ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/sərˈtɪfɪkət/",
        "sentence":  "She received a certificate of completion after the training.",
        "sentenceTranslation":  "เธอได้รับใบประกาศนียบัตรหลังจากจบการอบรม"
    },
    {
        "id":  "pdf-830",
        "word":  "Claim",
        "translation":  "เรียกร้องสิทธิ / ข้อเรียกร้อง",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/kleɪm/",
        "sentence":  "The insurance company denied the compensation claim.",
        "sentenceTranslation":  "บริษัทประกันภัยปฏิเสธการเรียกร้องค่าชดเชย"
    },
    {
        "id":  "pdf-831",
        "word":  "Clause",
        "translation":  "ข้อกำหนดในสัญญา / อนุประโยค",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/klɔːz/",
        "sentence":  "The contract includes a termination clause for early exit.",
        "sentenceTranslation":  "สัญญาฉบับนี้มีข้อกำหนดเกี่ยวกับการบอกเลิกสัญญาสำหรับการออกจากสัญญาเร็วกว่ากำหนด"
    },
    {
        "id":  "pdf-832",
        "word":  "Client",
        "translation":  "ลูกความ / ผู้ว่าจ้างทนาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈklaɪ.ənt/",
        "sentence":  "The lawyer met with his client to discuss the case.",
        "sentenceTranslation":  "ทนายความได้พบกับลูกความเพื่อหารือเกี่ยวกับคดี"
    },
    {
        "id":  "pdf-833",
        "word":  "Code of conduct",
        "translation":  "ประมวลจริยธรรม / ข้อพึงปฏิบัติในการทำงาน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌkoʊd əv ˈkɒn.dʌkt/",
        "sentence":  "Employees must follow the company\u0027s code of conduct.",
        "sentenceTranslation":  "พนักงานทุกคนต้องปฏิบัติตามจรรยาบรรณของบริษัท"
    },
    {
        "id":  "pdf-834",
        "word":  "Compensate",
        "translation":  "ชดเชยค่าเสียหาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒm.pən.seɪt/",
        "sentence":  "The company will compensate him for the extra hours worked.",
        "sentenceTranslation":  "บริษัทจะชดเชยให้เขาสำหรับการทำงานล่วงเวลา"
    },
    {
        "id":  "pdf-835",
        "word":  "Compensation",
        "translation":  "ค่าสินไหมทดแทน / ค่าชดเชย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌkɒm.pənˈseɪ.ʃən/",
        "sentence":  "The compensation package includes health insurance and bonuses.",
        "sentenceTranslation":  "แพ็กเกจค่าตอบแทนรวมถึงประกันสุขภาพและโบนัส"
    },
    {
        "id":  "pdf-836",
        "word":  "Competent",
        "translation":  "มีอำนาจหน้าที่ตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒm.pɪ.tənt/",
        "sentence":  "She is a highly competent manager who gets the job done.",
        "sentenceTranslation":  "เธอเป็นผู้จัดการที่มีความสามารถสูงซึ่งทำงานให้สำเร็จลุล่วง"
    },
    {
        "id":  "pdf-837",
        "word":  "Comply",
        "translation":  "ปฏิบัติตามข้อบังคับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/kəmˈplaɪ/",
        "sentence":  "All businesses must comply with safety regulations.",
        "sentenceTranslation":  "ธุรกิจทั้งหมดต้องปฏิบัติตามกฎระเบียบด้านความปลอดภัย"
    },
    {
        "id":  "pdf-838",
        "word":  "Compliance",
        "translation":  "การปฏิบัติตามกฎระเบียบและข้อบังคับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/kəmˈplaɪ.əns/",
        "sentence":  "The company ensures full compliance with environmental laws.",
        "sentenceTranslation":  "บริษัทรับประกันการปฏิบัติตามกฎหมายสิ่งแวดล้อมอย่างครบถ้วน"
    },
    {
        "id":  "pdf-839",
        "word":  "Confidentiality",
        "translation":  "การรักษาความลับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌkɒn.fɪˈden.ʃiˈæl.ɪ.ti/",
        "sentence":  "The employee signed a confidentiality agreement.",
        "sentenceTranslation":  "พนักงานได้ลงนามในข้อตกลงรักษาความลับ"
    },
    {
        "id":  "pdf-840",
        "word":  "Conflict of interest",
        "translation":  "ผลประโยชน์ทับซ้อน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒn.flɪkt əv ˈɪn.trəst/",
        "sentence":  "She resigned to avoid a potential conflict of interest.",
        "sentenceTranslation":  "เธอลาออกเพื่อหลีกเลี่ยงผลประโยชน์ทับซ้อนที่อาจเกิดขึ้น"
    },
    {
        "id":  "pdf-841",
        "word":  "Consent",
        "translation":  "การยินยอม / ให้ความยินยอม",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/kənˈsent/",
        "sentence":  "The patient gave written consent for the surgery.",
        "sentenceTranslation":  "ผู้ป่วยได้ให้ความยินยอมเป็นลายลักษณ์อักษรสำหรับการผ่าตัด"
    },
    {
        "id":  "pdf-842",
        "word":  "Constitution",
        "translation":  "รัฐธรรมนูญ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌkɒn.stɪˈtjuː.ʃən/",
        "sentence":  "The country’s constitution protects the rights of its citizens.",
        "sentenceTranslation":  "รัฐธรรมนูญของประเทศคุ้มครองสิทธิของพลเมือง"
    },
    {
        "id":  "pdf-843",
        "word":  "Contract",
        "translation":  "สัญญา / ข้อตกลงผูกพัน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒn.trækt/",
        "sentence":  "Both parties signed the contract this morning.",
        "sentenceTranslation":  "ทั้งสองฝ่ายลงนามในสัญญาเมื่อเช้านี้"
    },
    {
        "id":  "pdf-844",
        "word":  "Contractor",
        "translation":  "ผู้รับเหมา / คู่สัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒn.træk.tər/",
        "sentence":  "We hired an independent contractor to renovate the office.",
        "sentenceTranslation":  "เราจ้างผู้รับเหมาอิสระเพื่อปรับปรุงสำนักงาน"
    },
    {
        "id":  "pdf-845",
        "word":  "Copyright",
        "translation":  "ลิขสิทธิ์",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkɒp.i.raɪt/",
        "sentence":  "The book is protected by copyright law.",
        "sentenceTranslation":  "หนังสือเล่มนี้ได้รับความคุ้มครองตามกฎหมายลิขสิทธิ์"
    },
    {
        "id":  "pdf-846",
        "word":  "Counsel",
        "translation":  "ที่ปรึกษากฎหมาย / ทนายความ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkaʊn.səl/",
        "sentence":  "The suspect sought legal counsel before speaking to the police.",
        "sentenceTranslation":  "ผู้ต้องสงสัยได้ปรึกษาที่ปรึกษาทางกฎหมายก่อนให้การกับตำรวจ"
    },
    {
        "id":  "pdf-847",
        "word":  "Counterfeit",
        "translation":  "ปลอมแปลง / ของปลอม",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkaʊntərfɪt/",
        "sentence":  "The police seized a large amount of counterfeit money.",
        "sentenceTranslation":  "ตำรวจยึดเงินปลอมจำนวนมากได้"
    },
    {
        "id":  "pdf-848",
        "word":  "Court",
        "translation":  "ศาล",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/kɔːrt/",
        "sentence":  "The case will be heard in court next week.",
        "sentenceTranslation":  "คดีจะถูกนำขึ้นพิจารณาในศาลสัปดาห์หน้า"
    },
    {
        "id":  "pdf-849",
        "word":  "Covenant",
        "translation":  "ข้อตกลงร่วมกัน / พันธสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkʌvɪnənt/",
        "sentence":  "The lease includes a restrictive covenant regarding property usage.",
        "sentenceTranslation":  "สัญญาเช่ารวมถึงข้อตกลงจำกัดเกี่ยวกับการใช้ประโยชน์จากทรัพย์สิน"
    },
    {
        "id":  "pdf-850",
        "word":  "Creditor",
        "translation":  "เจ้าหนี้ตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈkredɪtər/",
        "sentence":  "The company needs to inform its creditors about the financial situation.",
        "sentenceTranslation":  "บริษัทจำเป็นต้องแจ้งให้เจ้าหนี้ทราบถึงสถานการณ์ทางการเงิน"
    },
    {
        "id":  "pdf-851",
        "word":  "Damage",
        "translation":  "ค่าเสียหาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈdæmɪdʒ/",
        "sentence":  "The storm caused significant damage to the building.",
        "sentenceTranslation":  "พายุสร้างความเสียหายอย่างมากให้กับอาคาร"
    },
    {
        "id":  "pdf-852",
        "word":  "Debtor",
        "translation":  "ลูกหนี้ตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈdetər/",
        "sentence":  "The debtor failed to repay the loan on time.",
        "sentenceTranslation":  "ลูกหนี้ไม่สามารถชำระเงินกู้ได้ทันเวลา"
    },
    {
        "id":  "pdf-853",
        "word":  "Decree",
        "translation":  "คำสั่งศาล / พระราชกฤษฎีกา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/dɪˈkriː/",
        "sentence":  "The government issued a decree to ban public gatherings.",
        "sentenceTranslation":  "รัฐบาลออกกฤษฎีกาเพื่อห้ามการชุมนุมในที่สาธารณะ"
    },
    {
        "id":  "pdf-854",
        "word":  "Deed",
        "translation":  "โฉนด / เอกสารสิทธิ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/diːd/",
        "sentence":  "He signed the deed to transfer ownership of the land.",
        "sentenceTranslation":  "เขาลงนามในโฉนดเพื่อโอนกรรมสิทธิ์ที่ดิน"
    },
    {
        "id":  "pdf-855",
        "word":  "Defend",
        "translation":  "แก้ต่าง / ต่อสู้คดี",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/dɪˈfend/",
        "sentence":  "The lawyer was hired to defend the accused in court.",
        "sentenceTranslation":  "ทนายความถูกจ้างมาเพื่อแก้ต่างให้ผู้ถูกกล่าวหาในศาล"
    },
    {
        "id":  "pdf-856",
        "word":  "Defendant",
        "translation":  "จำเลย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/dɪˈfendənt/",
        "sentence":  "The defendant pleaded not guilty to all charges.",
        "sentenceTranslation":  "จำเลยให้การปฏิเสธทุกข้อกล่าวหา"
    },
    {
        "id":  "pdf-857",
        "word":  "Dispute",
        "translation":  "ข้อพิพาท / ข้อขัดแย้งทางกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/dɪˈspjuːt/",
        "sentence":  "The two neighbors are in a dispute over the property line.",
        "sentenceTranslation":  "เพื่อนบ้านทั้งสองคนมีข้อพิพาทเรื่องแนวเขตที่ดิน"
    },
    {
        "id":  "pdf-858",
        "word":  "Dissolution",
        "translation":  "การยุบ (บริษัท) / การสิ้นสุดสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌdɪsəˈluːʃn/",
        "sentence":  "The board voted for the dissolution of the company.",
        "sentenceTranslation":  "คณะกรรมการลงมติให้มีการเลิกบริษัท"
    },
    {
        "id":  "pdf-859",
        "word":  "Due diligence",
        "translation":  "การตรวจสอบสถานะธุรกิจอย่างละเอียด",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/duː ˈdɪlɪdʒəns/",
        "sentence":  "The investors conducted due diligence before buying the firm.",
        "sentenceTranslation":  "นักลงทุนได้ตรวจสอบสถานะบริษัทอย่างรอบคอบก่อนที่จะตัดสินใจซื้อ"
    },
    {
        "id":  "pdf-860",
        "word":  "Effective date",
        "translation":  "วันที่มีผลบังคับใช้",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪˈfektɪv deɪt/",
        "sentence":  "The new policy has an effective date of January first.",
        "sentenceTranslation":  "นโยบายใหม่มีผลบังคับใช้ตั้งแต่วันที่หนึ่งมกราคมเป็นต้นไป"
    },
    {
        "id":  "pdf-861",
        "word":  "Enforce",
        "translation":  "บังคับใช้ (กฎหมาย/ข้อตกลง)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈfɔːrs/",
        "sentence":  "It is the police\u0027s duty to enforce the law.",
        "sentenceTranslation":  "เป็นหน้าที่ของตำรวจในการบังคับใช้กฎหมาย"
    },
    {
        "id":  "pdf-862",
        "word":  "Enforcement",
        "translation":  "การบังคับใช้กฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈfɔːrs.mənt/",
        "sentence":  "The police are responsible for the enforcement of traffic laws.",
        "sentenceTranslation":  "ตำรวจมีหน้าที่รับผิดชอบในการบังคับใช้กฎหมายจราจร"
    },
    {
        "id":  "pdf-863",
        "word":  "Expiration",
        "translation":  "การหมดอายุ (สัญญา)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌek.spɪˈreɪ.ʃən/",
        "sentence":  "Please check the expiration date on the milk carton.",
        "sentenceTranslation":  "โปรดตรวจสอบวันหมดอายุบนกล่องนม"
    },
    {
        "id":  "pdf-864",
        "word":  "Fine",
        "translation":  "ค่าปรับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/faɪn/",
        "sentence":  "You will have to pay a fine for parking in a prohibited area.",
        "sentenceTranslation":  "คุณจะต้องเสียค่าปรับสำหรับการจอดรถในพื้นที่ห้ามจอด"
    },
    {
        "id":  "pdf-865",
        "word":  "Fraud",
        "translation":  "การฉ้อโกง / ทุจริต",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/frɔːd/",
        "sentence":  "The company was accused of credit card fraud.",
        "sentenceTranslation":  "บริษัทถูกกล่าวหาว่าฉ้อโกงบัตรเครดิต"
    },
    {
        "id":  "pdf-866",
        "word":  "Governing law",
        "translation":  "กฎหมายที่ใช้บังคับควบคุมสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈɡʌv.ər.nɪŋ lɔː/",
        "sentence":  "The contract states that the governing law is that of Thailand.",
        "sentenceTranslation":  "สัญญาฉบับนี้ระบุว่ากฎหมายที่ใช้บังคับคือกฎหมายของประเทศไทย"
    },
    {
        "id":  "pdf-867",
        "word":  "Grace period",
        "translation":  "ระยะเวลาผ่อนผัน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɡreɪs ˈpɪə.ri.əd/",
        "sentence":  "The bank allows a seven-day grace period for late payments.",
        "sentenceTranslation":  "ธนาคารอนุญาตให้มีระยะเวลาผ่อนผัน 7 วันสำหรับการชำระเงินล่าช้า"
    },
    {
        "id":  "pdf-868",
        "word":  "Guarantee",
        "translation":  "การค้ำประกัน",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌɡær.ənˈtiː/",
        "sentence":  "This product comes with a one-year money-back guarantee.",
        "sentenceTranslation":  "สินค้านี้มาพร้อมกับการรับประกันคืนเงินภายในหนึ่งปี"
    },
    {
        "id":  "pdf-869",
        "word":  "Illegal",
        "translation":  "ผิดกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪˈliː.ɡəl/",
        "sentence":  "It is illegal to drive without a valid license.",
        "sentenceTranslation":  "การขับรถโดยไม่มีใบอนุญาตที่ถูกต้องถือเป็นเรื่องผิดกฎหมาย"
    },
    {
        "id":  "pdf-870",
        "word":  "Indemnity",
        "translation":  "การชดเชยความเสียหาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈdem.nə.ti/",
        "sentence":  "The contract includes an indemnity clause to protect against losses.",
        "sentenceTranslation":  "สัญญามีข้อกำหนดเรื่องการชดเชยค่าเสียหายเพื่อป้องกันความสูญเสีย"
    },
    {
        "id":  "pdf-871",
        "word":  "Infringement",
        "translation":  "การละเมิดสิทธิ (เช่น ละเมิดลิขสิทธิ์)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈfrɪnʒ.mənt/",
        "sentence":  "They sued the company for copyright infringement.",
        "sentenceTranslation":  "พวกเขาฟ้องร้องบริษัทในข้อหาละเมิดลิขสิทธิ์"
    },
    {
        "id":  "pdf-872",
        "word":  "Injunction",
        "translation":  "คำสั่งห้ามของศาล",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈdʒʌŋk.ʃən/",
        "sentence":  "The court issued an injunction to stop the construction work.",
        "sentenceTranslation":  "ศาลออกคำสั่งห้ามชั่วคราวเพื่อหยุดงานก่อสร้าง"
    },
    {
        "id":  "pdf-873",
        "word":  "Insolvency",
        "translation":  "ภาวะมีหนี้สินล้นพ้นตัว",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈsɒl.vən.si/",
        "sentence":  "The company faced insolvency due to massive debts.",
        "sentenceTranslation":  "บริษัทเผชิญกับภาวะล้มละลายเนื่องจากมีหนี้สินจำนวนมาก"
    },
    {
        "id":  "pdf-874",
        "word":  "Inspection",
        "translation":  "การตรวจสอบโดยเจ้าหน้าที่",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈspek.ʃən/",
        "sentence":  "The building is undergoing a safety inspection today.",
        "sentenceTranslation":  "อาคารกำลังเข้ารับการตรวจสอบความปลอดภัยในวันนี้"
    },
    {
        "id":  "pdf-875",
        "word":  "Intellectual property",
        "translation":  "ทรัพย์สินทางปัญญา (IP)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌɪn.təlˈek.tʃu.əl ˈprɒp.ə.ti/",
        "sentence":  "The software code is protected as intellectual property.",
        "sentenceTranslation":  "โค้ดของซอฟต์แวร์ได้รับการคุ้มครองในฐานะทรัพย์สินทางปัญญา"
    },
    {
        "id":  "pdf-876",
        "word":  "Invalid",
        "translation":  "โมฆะ / ไม่มีผลบังคับใช้",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ɪnˈvæl.ɪd/",
        "sentence":  "Your ticket is invalid because the date has passed.",
        "sentenceTranslation":  "ตั๋วของคุณใช้ไม่ได้แล้วเนื่องจากเลยกำหนดวันมาแล้ว"
    },
    {
        "id":  "pdf-877",
        "word":  "Lawsuit",
        "translation":  "คดีความ / การฟ้องร้องดำเนินคดี",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈlɔːsuːt/",
        "sentence":  "They filed a lawsuit against the company.",
        "sentenceTranslation":  "พวกเขายื่นฟ้องบริษัท"
    },
    {
        "id":  "pdf-878",
        "word":  "Legal",
        "translation":  "ถูกกฎหมาย / เกี่ยวกับกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈliːɡəl/",
        "sentence":  "It is important to seek legal advice.",
        "sentenceTranslation":  "การขอคำปรึกษาทางกฎหมายเป็นเรื่องสำคัญ"
    },
    {
        "id":  "pdf-879",
        "word":  "Legislation",
        "translation":  "การออกกฎหมาย / ตัวบทกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌledʒɪˈsleɪʃən/",
        "sentence":  "The government passed new legislation.",
        "sentenceTranslation":  "รัฐบาลได้ผ่านกฎหมายฉบับใหม่"
    },
    {
        "id":  "pdf-880",
        "word":  "Liability",
        "translation":  "ความรับผิดชอบตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌlaɪəˈbɪlɪti/",
        "sentence":  "The company accepted liability for the accident.",
        "sentenceTranslation":  "บริษัทรับผิดชอบต่ออุบัติเหตุที่เกิดขึ้น"
    },
    {
        "id":  "pdf-881",
        "word":  "License",
        "translation":  "ใบอนุญาต",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈlaɪsəns/",
        "sentence":  "You need a license to drive a car.",
        "sentenceTranslation":  "คุณต้องมีใบขับขี่เพื่อขับรถ"
    },
    {
        "id":  "pdf-882",
        "word":  "Litigation",
        "translation":  "การฟ้องร้องคดีในศาล",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌlɪtɪˈɡeɪʃən/",
        "sentence":  "The dispute resulted in lengthy litigation.",
        "sentenceTranslation":  "ข้อพิพาทนั้นนำไปสู่การฟ้องร้องที่ยาวนาน"
    },
    {
        "id":  "pdf-883",
        "word":  "Monopoly",
        "translation":  "การผูกขาดทางการค้า",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/məˈnɒpəli/",
        "sentence":  "The company has a monopoly on the market.",
        "sentenceTranslation":  "บริษัทนี้ผูกขาดตลาด"
    },
    {
        "id":  "pdf-884",
        "word":  "NDA",
        "translation":  "สัญญาไม่เปิดเผยความลับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌen diː ˈeɪ/",
        "sentence":  "All employees must sign an NDA.",
        "sentenceTranslation":  "พนักงานทุกคนต้องลงนามในสัญญาไม่เปิดเผยข้อมูล"
    },
    {
        "id":  "pdf-885",
        "word":  "Negligence",
        "translation":  "ความประมาทเลินเล่อ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈneɡlɪdʒəns/",
        "sentence":  "The accident was caused by his negligence.",
        "sentenceTranslation":  "อุบัติเหตุเกิดจากความประมาทเลินเล่อของเขา"
    },
    {
        "id":  "pdf-886",
        "word":  "Obligation",
        "translation":  "ข้อผูกมัด / พันธะหน้าที่",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌɒblɪˈɡeɪʃən/",
        "sentence":  "You have an obligation to pay your taxes.",
        "sentenceTranslation":  "คุณมีภาระหน้าที่ที่ต้องเสียภาษี"
    },
    {
        "id":  "pdf-887",
        "word":  "Offense",
        "translation":  "การกระทำความผิดทางกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/əˈfens/",
        "sentence":  "Stealing is a criminal offense.",
        "sentenceTranslation":  "การลักขโมยเป็นความผิดทางอาญา"
    },
    {
        "id":  "pdf-888",
        "word":  "Partner",
        "translation":  "หุ้นส่วนธุรกิจ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈpɑːtnər/",
        "sentence":  "He is a senior partner at the law firm.",
        "sentenceTranslation":  "เขาเป็นหุ้นส่วนอาวุโสที่สำนักงานกฎหมาย"
    },
    {
        "id":  "pdf-889",
        "word":  "Patent",
        "translation":  "สิทธิบัตร",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈpeɪtənt/",
        "sentence":  "The inventor applied for a patent.",
        "sentenceTranslation":  "นักประดิษฐ์ได้ยื่นจดสิทธิบัตร"
    },
    {
        "id":  "pdf-890",
        "word":  "Penalty",
        "translation":  "บทลงโทษ / ค่าปรับตามสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈpenəlti/",
        "sentence":  "There is a severe penalty for breaking the law.",
        "sentenceTranslation":  "มีบทลงโทษรุนแรงสำหรับการทำผิดกฎหมาย"
    },
    {
        "id":  "pdf-891",
        "word":  "Plaintiff",
        "translation":  "โจทก์ (ผู้ฟ้องร้อง)",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈpleɪntɪf/",
        "sentence":  "The plaintiff presented evidence in court.",
        "sentenceTranslation":  "โจทก์นำเสนอหลักฐานในศาล"
    },
    {
        "id":  "pdf-892",
        "word":  "Policy",
        "translation":  "นโยบาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈpɒləsi/",
        "sentence":  "The company has a strict policy against smoking.",
        "sentenceTranslation":  "บริษัทมีนโยบายที่เคร่งครัดเกี่ยวกับการห้ามสูบบุหรี่"
    },
    {
        "id":  "pdf-893",
        "word":  "Protocol",
        "translation":  "ข้อตกลงร่วมกัน / ระเบียบการปฏิบัติ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈprəʊtəkɒl/",
        "sentence":  "We must follow the standard security protocol.",
        "sentenceTranslation":  "เราต้องปฏิบัติตามระเบียบการรักษาความปลอดภัยมาตรฐาน"
    },
    {
        "id":  "pdf-894",
        "word":  "Provision",
        "translation":  "ข้อกำหนดในกฎหมายหรือสัญญา",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/prəˈvɪʒn/",
        "sentence":  "The contract includes a provision for early termination.",
        "sentenceTranslation":  "สัญญามีข้อกำหนดสำหรับการยกเลิกก่อนกำหนด"
    },
    {
        "id":  "pdf-895",
        "word":  "Regulation",
        "translation":  "กฎข้อบังคับ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˌreɡjuˈleɪʃn/",
        "sentence":  "New safety regulation will come into effect next month.",
        "sentenceTranslation":  "กฎระเบียบด้านความปลอดภัยฉบับใหม่จะมีผลบังคับใช้ในเดือนหน้า"
    },
    {
        "id":  "pdf-896",
        "word":  "Settle",
        "translation":  "ตกลงยอมความกันได้",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈsetl/",
        "sentence":  "They decided to settle the dispute out of court.",
        "sentenceTranslation":  "พวกเขาตัดสินใจตกลงยุติข้อพิพาทนอกศาล"
    },
    {
        "id":  "pdf-897",
        "word":  "Settlement",
        "translation":  "การประนีประนอมยอมความ",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈsetlmənt/",
        "sentence":  "Both parties reached a settlement after a long negotiation.",
        "sentenceTranslation":  "ทั้งสองฝ่ายบรรลุข้อตกลงหลังจากเจรจากันมานาน"
    },
    {
        "id":  "pdf-898",
        "word":  "Term",
        "translation":  "ระยะเวลาของสัญญา / เงื่อนไข",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/tɜːm/",
        "sentence":  "The term of the contract is for three years.",
        "sentenceTranslation":  "ระยะเวลาของสัญญาคือสามปี"
    },
    {
        "id":  "pdf-899",
        "word":  "Terminate",
        "translation":  "ยกเลิกสัญญา / บอกเลิก",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈtɜːmɪneɪt/",
        "sentence":  "We were forced to terminate the agreement due to a breach of contract.",
        "sentenceTranslation":  "เราถูกบังคับให้ยกเลิกสัญญาเนื่องจากการผิดสัญญา"
    },
    {
        "id":  "pdf-900",
        "word":  "Valid",
        "translation":  "มีผลสมบูรณ์ตามกฎหมาย",
        "category":  "Law \u0026 Compliance",
        "ipa":  "/ˈvælɪd/",
        "sentence":  "Make sure your passport is still valid.",
        "sentenceTranslation":  "ตรวจสอบให้แน่ใจว่าหนังสือเดินทางของคุณยังใช้งานได้อยู่"
    },
    {
        "id":  "pdf-901",
        "word":  "Action item",
        "translation":  "งานหรือกิจกรรมที่ต้องนำไปลงมือทำ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈækʃn ˈaɪtəm/",
        "sentence":  "Please add this task to the action item list.",
        "sentenceTranslation":  "กรุณาเพิ่มงานนี้ลงในรายการสิ่งที่ต้องดำเนินการ"
    },
    {
        "id":  "pdf-902",
        "word":  "ASAP (As soon as possible)",
        "translation":  "เร็วที่สุดเท่าที่จะทำได้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˌeɪ es eɪ ˈpiː/",
        "sentence":  "Please send me the report ASAP.",
        "sentenceTranslation":  "กรุณาส่งรายงานให้ฉันโดยเร็วที่สุด"
    },
    {
        "id":  "pdf-903",
        "word":  "AS per our discussion",
        "translation":  "ตามที่พวกเราได้คุยกันไว้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/æz pɜː(r) ˈaʊə(r) dɪˈskʌʃn/",
        "sentence":  "As per our discussion, I have updated the project timeline.",
        "sentenceTranslation":  "ตามที่เราได้หารือกัน ผมได้อัปเดตกำหนดการของโครงการแล้ว"
    },
    {
        "id":  "pdf-904",
        "word":  "At the end of the day",
        "translation":  "ท้ายที่สุดแล้ว / เมื่อพิจารณาจากทุกอย่าง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/æt ðə end əv ðə deɪ/",
        "sentence":  "At the end of the day, it is his decision to make.",
        "sentenceTranslation":  "สรุปแล้วท้ายที่สุดก็เป็นการตัดสินใจของเขา"
    },
    {
        "id":  "pdf-905",
        "word":  "Back to the drawing board",
        "translation":  "เริ่มต้นนับหนึ่งใหม่ (เนื่องจากแผนเดิมล้มเหลว)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/bæk tuː ðə ˈdrɔːɪŋ bɔːd/",
        "sentence":  "The plan failed, so we have to go back to the drawing board.",
        "sentenceTranslation":  "แผนล้มเหลว ดังนั้นเราจึงต้องกลับไปเริ่มต้นใหม่ตั้งแต่ต้น"
    },
    {
        "id":  "pdf-906",
        "word":  "Ballpark figure",
        "translation":  "ตัวเลขประมาณการคร่าวๆ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbɔːlpɑːk ˈfɪɡə(r)/",
        "sentence":  "Can you give me a ballpark figure for the renovation cost?",
        "sentenceTranslation":  "คุณช่วยประมาณการตัวเลขค่าใช้จ่ายในการปรับปรุงให้ฉันหน่อยได้ไหม"
    },
    {
        "id":  "pdf-907",
        "word":  "Bandwidth",
        "translation":  "เวลาหรือพลังงานที่ว่างพอจะรับงานเพิ่ม",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbændwɪdθ/",
        "sentence":  "I don\u0027t have the bandwidth to take on another project right now.",
        "sentenceTranslation":  "ฉันไม่มีเวลาและทรัพยากรเพียงพอที่จะรับโปรเจกต์เพิ่มในตอนนี้"
    },
    {
        "id":  "pdf-908",
        "word":  "Behind schedule",
        "translation":  "ทำงานล่าช้ากว่าแผนที่กำหนดไว้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/bɪˈhaɪnd ˈskɛdʒuːl/",
        "sentence":  "We are a bit behind schedule, so we need to work faster.",
        "sentenceTranslation":  "เราค่อนข้างทำงานล่าช้ากว่ากำหนด ดังนั้นเราต้องรีบทำให้เร็วขึ้น"
    },
    {
        "id":  "pdf-909",
        "word":  "Behind the scenes",
        "translation":  "เบื้องหลังการทำงาน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/bɪˈhaɪnd ðə siːnz/",
        "sentence":  "He works behind the scenes to ensure the event runs smoothly.",
        "sentenceTranslation":  "เขาทำงานอยู่เบื้องหลังเพื่อให้แน่ใจว่างานจะดำเนินไปอย่างราบรื่น"
    },
    {
        "id":  "pdf-910",
        "word":  "Big picture",
        "translation":  "ภาพรวม / มองภาพใหญ่",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/bɪɡ ˈpɪktʃər/",
        "sentence":  "Try to look at the big picture instead of worrying about the minor details.",
        "sentenceTranslation":  "พยายามมองภาพรวมแทนที่จะกังวลกับรายละเอียดเล็กน้อย"
    },
    {
        "id":  "pdf-911",
        "word":  "Bite the bullet",
        "translation":  "กัดฟันสู้ / จำใจยอมรับสถานการณ์ที่ยากลำบาก",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/baɪt ðə ˈbʊlɪt/",
        "sentence":  "I hate going to the dentist, but I just have to bite the bullet.",
        "sentenceTranslation":  "ฉันเกลียดการไปหาหมอฟัน แต่ฉันก็ต้องยอมทำใจเผชิญกับมัน"
    },
    {
        "id":  "pdf-912",
        "word":  "Bottom line",
        "translation":  "ผลลัพธ์สุดท้าย / สิ่งสำคัญที่สุด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbɒtəm laɪn/",
        "sentence":  "The bottom line is that we need to increase our sales to survive.",
        "sentenceTranslation":  "สรุปใจความสำคัญคือเราจำเป็นต้องเพิ่มยอดขายเพื่อความอยู่รอด"
    },
    {
        "id":  "pdf-913",
        "word":  "Brain drain",
        "translation":  "ภาวะสมองไหล (คนเก่งๆลาออกจากองค์กร)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/breɪn dreɪn/",
        "sentence":  "The country is suffering from a brain drain as many experts move abroad.",
        "sentenceTranslation":  "ประเทศกำลังประสบปัญหาภาวะสมองไหลเนื่องจากผู้เชี่ยวชาญจำนวนมากย้ายไปต่างประเทศ"
    },
    {
        "id":  "pdf-914",
        "word":  "Bring to the table",
        "translation":  "นำสิ่งที่ประโยชน์หรือความสามารถมาเสนอที่ประชุม",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/brɪŋ tuː ðə ˈteɪbl/",
        "sentence":  "What skills do you bring to the table for this team?",
        "sentenceTranslation":  "คุณมีทักษะอะไรที่จะนำมาปรับใช้หรือสร้างประโยชน์ให้แก่ทีมนี้บ้าง"
    },
    {
        "id":  "pdf-915",
        "word":  "Burnout",
        "translation":  "ภาวะหมดไฟในการทำงาน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbɜːrnaʊt/",
        "sentence":  "She quit her job because she was suffering from severe burnout.",
        "sentenceTranslation":  "เธอลาออกจากงานเพราะเธอมีภาวะหมดไฟในการทำงานอย่างรุนแรง"
    },
    {
        "id":  "pdf-916",
        "word":  "Business as usual (BAU)",
        "translation":  "การทำงานตามปกติในแต่ละวัน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbɪznɪs æz ˈjuːʒuəl/",
        "sentence":  "Despite the management changes, it is business as usual for the staff.",
        "sentenceTranslation":  "แม้ว่าจะมีการเปลี่ยนแปลงด้านการบริหาร แต่พนักงานทุกคนยังคงทำงานกันไปตามปกติ"
    },
    {
        "id":  "pdf-917",
        "word":  "Buy-in",
        "translation":  "การยอมรับและสนับสนุนแผนงานจากผู้เกี่ยวข้อง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbaɪ ɪn/",
        "sentence":  "We need buy-in from the stakeholders before we can proceed.",
        "sentenceTranslation":  "เราจำเป็นต้องได้รับการยอมรับและสนับสนุนจากผู้มีส่วนได้ส่วนเสียก่อนจึงจะดำเนินการต่อได้"
    },
    {
        "id":  "pdf-918",
        "word":  "By the book",
        "translation":  "ทำตามกฎระเบียบอย่างเคร่งครัดทุกอย่าง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/baɪ ðə bʊk/",
        "sentence":  "The manager insists on doing everything by the book.",
        "sentenceTranslation":  "ผู้จัดการยืนกรานที่จะทำทุกอย่างตามกฎระเบียบอย่างเคร่งครัด"
    },
    {
        "id":  "pdf-919",
        "word":  "Call it a day",
        "translation":  "เลิกงานได้ / วันนี้พอแค่นี้ก่อน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kɔːl ɪt ə deɪ/",
        "sentence":  "We\u0027ve been working for ten hours; let\u0027s call it a day.",
        "sentenceTranslation":  "พวกเราทำงานกันมาสิบชั่วโมงแล้ว เลิกงานกันเถอะ"
    },
    {
        "id":  "pdf-920",
        "word":  "Catch up",
        "translation":  "คุยอัปเดตชีวิตหรือเรื่องราวที่ไม่ได้เจอกัน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kætʃ ʌp/",
        "sentence":  "I need to catch up on my emails after being away for a week.",
        "sentenceTranslation":  "ฉันต้องจัดการอีเมลที่ค้างอยู่ให้เสร็จหลังจากที่ห่างไปหนึ่งสัปดาห์"
    },
    {
        "id":  "pdf-921",
        "word":  "Circle back",
        "translation":  "เดี๋ยวค่อยวนกลับมาคุยเรื่องนี้กันใหม่",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈsɜːrkl bæk/",
        "sentence":  "Let\u0027s discuss this now and circle back to the other topic later.",
        "sentenceTranslation":  "มาหารือเรื่องนี้กันตอนนี้เลย แล้วค่อยกลับมาคุยเรื่องอื่นกันใหม่ทีหลัง"
    },
    {
        "id":  "pdf-922",
        "word":  "COB (Close of business)",
        "translation":  "เวลาเลิกงาน (มักหมายถึง 17.00 น.)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/siː.oʊ.biː/",
        "sentence":  "Please submit your final report by COB today.",
        "sentenceTranslation":  "กรุณาส่งรายงานฉบับสุดท้ายของคุณภายในเวลาปิดทำการวันนี้"
    },
    {
        "id":  "pdf-923",
        "word":  "Core competency",
        "translation":  "ความสามารถหลักที่เป็นจุดแข็งขององค์กร",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kɔːr ˈkɒm.pɪ.tən.si/",
        "sentence":  "Our core competency is delivering innovative solutions to complex problems.",
        "sentenceTranslation":  "ความสามารถหลักของเราคือการนำเสนอโซลูชั่นที่เป็นนวัตกรรมสำหรับปัญหาที่ซับซ้อน"
    },
    {
        "id":  "pdf-924",
        "word":  "Crunch numbers",
        "translation":  "คำนวณตัวเลขปริมาณมากอย่างเคร่งเครียด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/krʌntʃ ˈnʌm.bərz/",
        "sentence":  "The analyst spent all night crunching numbers for the financial forecast.",
        "sentenceTranslation":  "นักวิเคราะห์ใช้เวลาทั้งคืนในการวิเคราะห์ตัวเลขสำหรับการคาดการณ์ทางการเงิน"
    },
    {
        "id":  "pdf-925",
        "word":  "Cut corners",
        "translation":  "ทำงานแบบลัดขั้นตอนเพื่อให้เสร็จเร็วขึ้น",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kʌt ˈkɔːr.nərz/",
        "sentence":  "We cannot afford to cut corners on safety when manufacturing these products.",
        "sentenceTranslation":  "เราไม่สามารถประหยัดโดยลดขั้นตอนด้านความปลอดภัยในการผลิตสินค้าเหล่านี้ได้"
    },
    {
        "id":  "pdf-926",
        "word":  "Deep dive",
        "translation":  "การศึกษาหรือวิเคราะห์ข้อมูลอย่างละเอียด",
        "category":  "General",
        "ipa":  "/diːp daɪv/",
        "sentence":  "Let\u0027s do a deep dive into the customer feedback to understand their pain points.",
        "sentenceTranslation":  "เรามาเจาะลึกความคิดเห็นของลูกค้าเพื่อทำความเข้าใจปัญหาของพวกเขา"
    },
    {
        "id":  "pdf-927",
        "word":  "Deliver the goods",
        "translation":  "ทำงานได้สำเร็จตามความคาดหวัง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/dɪˈlɪv.ər ðə ɡʊdz/",
        "sentence":  "Despite the tight deadline, our team really delivered the goods on that project.",
        "sentenceTranslation":  "แม้จะมีกำหนดเวลาที่กระชั้นชิด แต่ทีมของเราก็ทำผลงานได้ดีเยี่ยมในโครงการนั้น"
    },
    {
        "id":  "pdf-928",
        "word":  "Drop the ball",
        "translation":  "ทำงานพลาด / ทำงานหลุดมือ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/drɒp ðə bɔːl/",
        "sentence":  "He dropped the ball on the client proposal, costing the company a valuable contract.",
        "sentenceTranslation":  "เขาทำผิดพลาดในการนำเสนอแก่ลูกค้า ทำให้บริษัทเสียสัญญาที่มีมูลค่าไป"
    },
    {
        "id":  "pdf-929",
        "word":  "EOD (End of day)",
        "translation":  "ภายในสิ้นวันนี้ (ก่อนเที่ยงคืน)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/iː.oʊ.diː/",
        "sentence":  "Please ensure all action items are completed by EOD tomorrow.",
        "sentenceTranslation":  "โปรดตรวจสอบให้แน่ใจว่างานทั้งหมดเสร็จสิ้นภายในสิ้นวันพรุ่งนี้"
    },
    {
        "id":  "pdf-930",
        "word":  "ETA (Estimated time of",
        "translation":  "arrival) เวลาทีคาดว่าจะเสร็จหรือสง่มอบงาน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-931",
        "word":  "Fast track",
        "translation":  "ทางลัด / การเร่งรัดกระบวนการให้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/fɑːst træk/",
        "sentence":  "The company decided to fast track the development of its new product line.",
        "sentenceTranslation":  "บริษัทตัดสินใจเร่งรัดการพัฒนาสายผลิตภัณฑ์ใหม่"
    },
    {
        "id":  "pdf-932",
        "word":  "FYI (For your information)",
        "translation":  "แจ้งเพื่อทราบ (ไม่ต้องตอบกลับก็ได้)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɛf.waɪ.aɪ/",
        "sentence":  "FYI, the server maintenance will be conducted this weekend.",
        "sentenceTranslation":  "เพื่อทราบ การบำรุงรักษาเซิร์ฟเวอร์จะดำเนินการในสุดสัปดาห์นี้"
    },
    {
        "id":  "pdf-933",
        "word":  "Game changer",
        "translation":  "สิ่งที่เข้ามาเปลี่ยนเกมหรือสร้างจุดเปลี่ยน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡeɪm ˈtʃeɪn.dʒər/",
        "sentence":  "This innovative technology could be a game changer for the entire industry.",
        "sentenceTranslation":  "เทคโนโลยีที่เป็นนวัตกรรมนี้อาจเป็นตัวเปลี่ยนเกมสำหรับอุตสาหกรรมทั้งหมด"
    },
    {
        "id":  "pdf-934",
        "word":  "Get the ball rolling",
        "translation":  "เริ่มต้นลงมือทำงานหรือเริ่มกิจกรรม",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡɛt ðə bɔːl ˈroʊl.ɪŋ/",
        "sentence":  "Let\u0027s meet tomorrow morning to get the ball rolling on the new marketing campaign.",
        "sentenceTranslation":  "เรามาประชุมกันพรุ่งนี้เช้าเพื่อเริ่มดำเนินการแคมเปญการตลาดใหม่นี้กันเถอะ"
    },
    {
        "id":  "pdf-935",
        "word":  "Get to the point",
        "translation":  "เข้าประเด็นเลย / พูดตรงประเด็น",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡɛt tuː ðə pɔɪnt/",
        "sentence":  "Please just get to the point; I\u0027m running short on time.",
        "sentenceTranslation":  "ได้โปรดเข้าประเด็นเลย; ฉันมีเวลาน้อยแล้ว"
    },
    {
        "id":  "pdf-936",
        "word":  "Give the green light",
        "translation":  "ไฟเขียว / อนุมัติให้เริ่มงานได้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡɪv ðə ɡriːn laɪt/",
        "sentence":  "The board finally gave the green light for the expansion project.",
        "sentenceTranslation":  "คณะกรรมการในที่สุดก็ให้ไฟเขียวสำหรับโครงการขยายกิจการ"
    },
    {
        "id":  "pdf-937",
        "word":  "Go above and beyond",
        "translation":  "ทุ่มเททำงานเกินกว่าหน้าที่ที่ได้รับมอบหมาย",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡoʊ əˈbʌv ænd bɪˈjɒnd/",
        "sentence":  "She always goes above and beyond for her clients.",
        "sentenceTranslation":  "เธอทำเกินกว่าที่คาดหวังเสมอสำหรับลูกค้าของเธอ"
    },
    {
        "id":  "pdf-938",
        "word":  "Go the extra mile",
        "translation":  "ยอมเหนื่อยเพิ่มขึ้นอีกนิดเพื่อให้งานออกมาดี",
        "category":  "General",
        "ipa":  "/ɡoʊ ðə ˈɛkstrə maɪl/",
        "sentence":  "Our team is willing to go the extra mile to ensure customer satisfaction.",
        "sentenceTranslation":  "ทีมของเรายินดีที่จะทุ่มเทเป็นพิเศษเพื่อให้ลูกค้าพึงพอใจ"
    },
    {
        "id":  "pdf-939",
        "word":  "Go down the drain",
        "translation":  "สูญเปล่า / เทน้ำเทท่า (เช่น งบประมาณ)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɡoʊ daʊn ðə dreɪn/",
        "sentence":  "All their hard work went down the drain when the project was cancelled.",
        "sentenceTranslation":  "ความพยายามอย่างหนักทั้งหมดของพวกเขาสูญเปล่าเมื่อโครงการถูกยกเลิก"
    },
    {
        "id":  "pdf-940",
        "word":  "Hands-on",
        "translation":  "ลงมือทำด้วยตัวเอง / มีประสบการณ์",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈhændz ɒn/",
        "sentence":  "He prefers a hands-on approach to management.",
        "sentenceTranslation":  "เขาชอบวิธีการบริหารจัดการที่ลงมือปฏิบัติจริง"
    },
    {
        "id":  "pdf-941",
        "word":  "Hard copy",
        "translation":  "เอกสารที่เป็นกระดาษจริง (ไม่ใช่ไฟล์)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/hɑːrd ˈkɒpi/",
        "sentence":  "Please provide a hard copy of the report by Friday.",
        "sentenceTranslation":  "กรุณาส่งรายงานฉบับพิมพ์ภายในวันศุกร์"
    },
    {
        "id":  "pdf-942",
        "word":  "Heads up",
        "translation":  "การเตือนหรือแจ้งให้ทราบล่วงหน้า",
        "category":  "General",
        "ipa":  "/hɛdz ʌp/",
        "sentence":  "Just a heads up, the meeting has been rescheduled to 2 PM.",
        "sentenceTranslation":  "แค่แจ้งให้ทราบล่วงหน้าว่าการประชุมได้ถูกเลื่อนไปเป็นบ่ายสองโมง"
    },
    {
        "id":  "pdf-943",
        "word":  "Hit the ground running",
        "translation":  "เริ่มงานใหม่แล้วลุยทำได้อย่างรวดเร็ว",
        "category":  "General",
        "ipa":  "/hɪt ðə ɡraʊnd ˈrʌnɪŋ/",
        "sentence":  "The new employee hit the ground running and quickly became productive.",
        "sentenceTranslation":  "พนักงานใหม่เริ่มทำงานได้อย่างรวดเร็วและมีประสิทธิภาพทันที"
    },
    {
        "id":  "pdf-944",
        "word":  "In a nutshell",
        "translation":  "พูดสรุปสั้นๆ ย่อๆ ให้เข้าใจง่าย",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɪn ə ˈnʌtʃɛl/",
        "sentence":  "In a nutshell, we need to cut costs and increase revenue.",
        "sentenceTranslation":  "พูดสั้นๆ ก็คือ เราต้องลดต้นทุนและเพิ่มรายได้"
    },
    {
        "id":  "pdf-945",
        "word":  "In the loop",
        "translation":  "ดึงเข้ามารับรู้ข้อมูลด้วย / ให้รับทราบความคืบหน้า",
        "category":  "General",
        "ipa":  "/ɪn ðə luːp/",
        "sentence":  "Make sure to keep me in the loop about any developments.",
        "sentenceTranslation":  "อย่าลืมแจ้งข่าวความคืบหน้าให้ฉันทราบเสมอ"
    },
    {
        "id":  "pdf-946",
        "word":  "In the red",
        "translation":  "อยู่ในภาวะขาดทุน (ตัวเลขบัญชีติดลบ)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɪn ðə rɛd/",
        "sentence":  "The company has been in the red for the past two quarters.",
        "sentenceTranslation":  "บริษัทขาดทุนติดต่อกันมาสองไตรมาสแล้ว"
    },
    {
        "id":  "pdf-947",
        "word":  "Keep an eye on",
        "translation":  "เฝ้าดูอย่างใกล้ชิด / จับตาดู",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kiːp æn aɪ ɒn/",
        "sentence":  "Could you please keep an eye on my bag while I go to the restroom?",
        "sentenceTranslation":  "คุณช่วยดู (เฝ้า) กระเป๋าให้ฉันหน่อยได้ไหมขณะที่ฉันไปเข้าห้องน้ำ"
    },
    {
        "id":  "pdf-948",
        "word":  "Keep your fingers crossed",
        "translation":  "ขอให้โชคดี (ทำท่าไขว้นิ้วอวยพร)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/kiːp jɔːr ˈfɪŋɡərz krɒst/",
        "sentence":  "Let\u0027s keep our fingers crossed that the weather will be good for the picnic.",
        "sentenceTranslation":  "เรามาหวังว่าอากาศจะดีสำหรับการปิกนิกกันเถอะ"
    },
    {
        "id":  "pdf-949",
        "word":  "Learn the ropes",
        "translation":  "เรียนรู้งานพื้นฐาน / เรียนรู้วิธีการทำงาน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/lɜːrn ðə roʊps/",
        "sentence":  "It takes some time for new employees to learn the ropes of the job.",
        "sentenceTranslation":  "พนักงานใหม่ต้องใช้เวลาสักพักในการเรียนรู้วิธีการทำงาน"
    },
    {
        "id":  "pdf-950",
        "word":  "Low-hanging fruit",
        "translation":  "งานที่ทำได้ง่ายและเห็นผลสำเร็จได้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/loʊ ˈhæŋɪŋ fruːt/",
        "sentence":  "Let\u0027s tackle the low-hanging fruit first to get some quick wins.",
        "sentenceTranslation":  "เรามาจัดการกับสิ่งที่ทำได้ง่ายๆ ก่อนเพื่อจะได้ผลลัพธ์ที่รวดเร็ว"
    },
    {
        "id":  "pdf-951",
        "word":  "Micromanage",
        "translation":  "การจ้ำจี้จำไชควบคุมงานลูกน้องทุกอย่าง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈmaɪkroʊˌmænɪdʒ/",
        "sentence":  "Good leaders empower their team members rather than micromanage them.",
        "sentenceTranslation":  "ผู้นำที่ดีจะส่งเสริมให้สมาชิกในทีมมีอำนาจในการตัดสินใจมากกว่าการเข้าไปจัดการทุกรายละเอียดเล็กน้อย"
    },
    {
        "id":  "pdf-952",
        "word":  "Move the needle",
        "translation":  "สร้างความเปลี่ยนแปลงหรือผลลัพธ์",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/muːv ðə ˈniːdl/",
        "sentence":  "We need a new strategy to really move the needle on sales.",
        "sentenceTranslation":  "เราต้องการกลยุทธ์ใหม่เพื่อทำให้ยอดขายมีความคืบหน้าอย่างแท้จริง"
    },
    {
        "id":  "pdf-953",
        "word":  "Multitask",
        "translation":  "ทำงานหลายๆ อย่างพร้อมกันในเวลาเดียวกัน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈmʌl.ti.tæsk/",
        "sentence":  "It\u0027s often difficult to multitask effectively when working on complex projects.",
        "sentenceTranslation":  "บ่อยครั้งเป็นเรื่องยากที่จะทำงานหลายอย่างพร้อมกันได้อย่างมีประสิทธิภาพเมื่อทำงานในโครงการที่ซับซ้อน"
    },
    {
        "id":  "pdf-954",
        "word":  "My hands are tied",
        "translation":  "ฉันขยับทำอะไรไม่ได้เลย (ติดขัดกฎระเบียบ)",
        "category":  "General",
        "ipa":  "/maɪ hændz ɑːr taɪd/",
        "sentence":  "I\u0027d like to help you, but my hands are tied due to company policy.",
        "sentenceTranslation":  "ฉันอยากจะช่วยคุณ แต่ฉันทำอะไรไม่ได้เพราะนโยบายของบริษัท"
    },
    {
        "id":  "pdf-955",
        "word":  "No-brainer",
        "translation":  "เรื่องที่ง่ายมากจนไม่ต้องเสียเวลาคิด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈnoʊˌbreɪ.nər/",
        "sentence":  "Choosing the cheapest option was a no-brainer for our limited budget.",
        "sentenceTranslation":  "การเลือกตัวเลือกที่ถูกที่สุดเป็นเรื่องง่ายๆ ที่ไม่ต้องคิดมากสำหรับงบประมาณที่จำกัดของเรา"
    },
    {
        "id":  "pdf-956",
        "word":  "Off the top of my head",
        "translation":  "เท่าที่นึกออกตอนนี้ (ยังไม่ได้เช็ก)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɒf ðə tɒp ɒv maɪ hɛd/",
        "sentence":  "Off the top of my head, I\u0027d say the meeting is at 2 PM.",
        "sentenceTranslation":  "เท่าที่จำได้ตอนนี้ การประชุมน่าจะเริ่มตอนบ่ายสองโมง"
    },
    {
        "id":  "pdf-957",
        "word":  "On the same page",
        "translation":  "เข้าใจตรงกัน / คิดเห็นไปในทิศทางเดียวกัน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɒn ðə seɪm peɪdʒ/",
        "sentence":  "Let\u0027s review the plan to make sure everyone is on the same page.",
        "sentenceTranslation":  "มาทบทวนแผนกันเพื่อให้แน่ใจว่าทุกคนเข้าใจตรงกัน"
    },
    {
        "id":  "pdf-958",
        "word":  "On track",
        "translation":  "เป็นไปตามแผนที่วางไว้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ɒn træk/",
        "sentence":  "The project is currently on track to be completed by the deadline.",
        "sentenceTranslation":  "ขณะนี้โครงการเป็นไปตามแผนที่จะแล้วเสร็จตามกำหนดเวลา"
    },
    {
        "id":  "pdf-959",
        "word":  "Out of the blue",
        "translation":  "อยู่ๆ ก็เกิดขึ้นโดยไม่ได้คาดคิด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/aʊt ɒv ðə bluː/",
        "sentence":  "She called me out of the blue after years of no contact.",
        "sentenceTranslation":  "เธอโทรหาฉันอย่างกะทันหันหลังจากไม่ได้ติดต่อกันมาหลายปี"
    },
    {
        "id":  "pdf-960",
        "word":  "Out of the box",
        "translation":  "นอกกรอบ / คิดนอกกรอบ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/aʊt ɒv ðə bɒks/",
        "sentence":  "We need some out-of-the-box ideas to solve this problem.",
        "sentenceTranslation":  "เราต้องการแนวคิดที่สร้างสรรค์เพื่อแก้ปัญหานี้"
    },
    {
        "id":  "pdf-961",
        "word":  "Out of the loop",
        "translation":  "ไม่รู้เรื่องด้วย / ไม่ได้รับการแจ้งข่าวคราว",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/aʊt ɒv ðə luːp/",
        "sentence":  "I feel a bit out of the loop since I missed the last team meeting.",
        "sentenceTranslation":  "ฉันรู้สึกเหมือนไม่ได้รับข้อมูลเลยตั้งแต่พลาดการประชุมทีมครั้งล่าสุด"
    },
    {
        "id":  "pdf-962",
        "word":  "Out of office (OOO)",
        "translation":  "ไม่อยู่สำนักงาน / ลาหยุด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/aʊt ɒv ˈɒfɪs/",
        "sentence":  "I will be out of office next week, so please contact my colleague.",
        "sentenceTranslation":  "ฉันจะไม่อยู่ที่ทำงานสัปดาห์หน้า ดังนั้นโปรดติดต่อเพื่อนร่วมงานของฉัน"
    },
    {
        "id":  "pdf-963",
        "word":  "Over the counter",
        "translation":  "ซื้อขายโดยตรง / ยาที่ซื้อได้เองตามร้าน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈoʊ.vər ðə ˈkaʊn.tər/",
        "sentence":  "You can buy pain relievers over the counter without a prescription.",
        "sentenceTranslation":  "คุณสามารถซื้อยาแก้ปวดได้ตามร้านขายยาทั่วไปโดยไม่ต้องมีใบสั่งแพทย์"
    },
    {
        "id":  "pdf-964",
        "word":  "Paradigm shift",
        "translation":  "การเปลี่ยนแปลงแนวคิดหรือกระบวนทัศน์",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈpær.ə.daɪm ʃɪft/",
        "sentence":  "The invention of the internet caused a major paradigm shift in communication.",
        "sentenceTranslation":  "การประดิษฐ์อินเทอร์เน็ตทำให้เกิดการเปลี่ยนแปลงกระบวนทัศน์ครั้งใหญ่ในการสื่อสาร"
    },
    {
        "id":  "pdf-965",
        "word":  "Play it by ear",
        "translation":  "ว่าไปตามหน้างาน / แก้ปัญหาเฉพาะหน้า",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/pleɪ ɪt baɪ ɪər/",
        "sentence":  "We don\u0027t have a fixed plan for tomorrow; let\u0027s just play it by ear.",
        "sentenceTranslation":  "เราไม่มีแผนที่แน่นอนสำหรับพรุ่งนี้ มาทำตามสถานการณ์กัน"
    },
    {
        "id":  "pdf-966",
        "word":  "Please find attached",
        "translation":  "โปรดดูเอกสารหรือไฟล์ที่แนบมาพร้อมนี้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/pliːz faɪnd əˈtætʃt/",
        "sentence":  "Please find attached the report you requested.",
        "sentenceTranslation":  "โปรดดูรายงานที่คุณขอมาในไฟล์ที่แนบมาด้วย"
    },
    {
        "id":  "pdf-967",
        "word":  "Put on hold",
        "translation":  "พักงานนั้นไว้ก่อน / ชะลอโครงการไว้",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/pʊt ɒn hoʊld/",
        "sentence":  "We need to put this project on hold until we get more funding.",
        "sentenceTranslation":  "เราต้องพักโครงการนี้ไว้ก่อนจนกว่าเราจะได้รับเงินทุนเพิ่ม"
    },
    {
        "id":  "pdf-968",
        "word":  "Raise the bar",
        "translation":  "การยกระดับมาตรฐานให้สูงขึ้นไปอีก",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/reɪz ðə bɑr/",
        "sentence":  "The new manager wants to raise the bar for customer service.",
        "sentenceTranslation":  "ผู้จัดการคนใหม่ต้องการยกระดับมาตรฐานการบริการลูกค้าให้สูงขึ้น"
    },
    {
        "id":  "pdf-969",
        "word":  "Red tape",
        "translation":  "ระเบียบราชการหรือขั้นตอนเอกสารที่ยุ่งยาก",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/rɛd teɪp/",
        "sentence":  "Dealing with all the red tape delayed the approval process.",
        "sentenceTranslation":  "การจัดการกับพิธีรีตองที่ยุ่งยากทั้งหมดทำให้กระบวนการอนุมัติล่าช้า"
    },
    {
        "id":  "pdf-970",
        "word":  "Run by",
        "translation":  "นำไอเดียไปปรึกษาหรือให้ผู้ใหญ่ช่วยดู",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/rʌn baɪ/",
        "sentence":  "Please run your ideas by me before presenting them to the team.",
        "sentenceTranslation":  "โปรดแจ้งแนวคิดของคุณให้ฉันทราบก่อนที่จะนำเสนอต่อทีม"
    },
    {
        "id":  "pdf-971",
        "word":  "Scalable",
        "translation":  "ที่สามารถขยายตัวหรือรองรับการเติบโต",
        "category":  "General",
        "ipa":  "/ˈskeɪləbəl/",
        "sentence":  "We need a scalable solution that can handle future growth.",
        "sentenceTranslation":  "เราต้องการโซลูชันที่สามารถปรับขนาดได้เพื่อรองรับการเติบโตในอนาคต"
    },
    {
        "id":  "pdf-972",
        "word":  "See eye to eye",
        "translation":  "เห็นพ้องต้องกัน / มีความคิดเห็นตรงกัน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/siː aɪ tuː aɪ/",
        "sentence":  "My brother and I rarely see eye to eye on political issues.",
        "sentenceTranslation":  "พี่ชายของฉันกับฉันไม่ค่อยมีความคิดเห็นตรงกันในประเด็นทางการเมือง"
    },
    {
        "id":  "pdf-973",
        "word":  "Short notice",
        "translation":  "การแจ้งล่วงหน้าในเวลากระชั้นชิด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ʃɔrt ˈnoʊtɪs/",
        "sentence":  "I apologize for asking you to work on such short notice.",
        "sentenceTranslation":  "ฉันขอโทษที่ขอให้คุณทำงานโดยแจ้งล่วงหน้าอย่างกระทันหัน"
    },
    {
        "id":  "pdf-974",
        "word":  "Synergy",
        "translation":  "การทำงานร่วมกันอย่างมีประสิทธิภาพ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈsɪnərdʒi/",
        "sentence":  "The merger is expected to create significant synergy between the two companies.",
        "sentenceTranslation":  "คาดว่าการควบรวมกิจการจะสร้างการทำงานร่วมกันที่สำคัญระหว่างสองบริษัท"
    },
    {
        "id":  "pdf-975",
        "word":  "Take for granted",
        "translation":  "มองข้ามความสำคัญเพราะคิดว่าเป็นเรื่องปกติ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/teɪk fɔr ˈɡræntɪd/",
        "sentence":  "Don\u0027t take your friends and family for granted.",
        "sentenceTranslation":  "อย่าละเลยคุณค่าของเพื่อนและครอบครัวของคุณ"
    },
    {
        "id":  "pdf-976",
        "word":  "Take it easy",
        "translation":  "ทำใจสบายๆ / พักผ่อนเถอะ / ไม่ต้องเครียด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/teɪk ɪt ˈiːzi/",
        "sentence":  "You\u0027ve been working too hard; you should take it easy this weekend.",
        "sentenceTranslation":  "คุณทำงานหนักเกินไปแล้ว คุณควรพักผ่อนสบายๆ ในสุดสัปดาห์นี้"
    },
    {
        "id":  "pdf-977",
        "word":  "Take the lead",
        "translation":  "เป็นผู้นำ / รับหน้าที่เป็นหัวเรือหลัก",
        "category":  "General",
        "ipa":  "/teɪk ðə liːd/",
        "sentence":  "Someone needs to take the lead on this project to ensure its success.",
        "sentenceTranslation":  "ต้องมีคนเป็นผู้นำในโครงการนี้เพื่อให้แน่ใจว่าจะประสบความสำเร็จ"
    },
    {
        "id":  "pdf-978",
        "word":  "Think outside the box",
        "translation":  "คิดนอกกรอบ / สร้างสรรค์สิ่งใหม่ๆ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/θɪŋk ˌaʊtˈsaɪd ðə bɒks/",
        "sentence":  "We need to think outside the box to solve this complex problem.",
        "sentenceTranslation":  "เราต้องคิดนอกกรอบเพื่อแก้ไขปัญหาสลับซับซ้อนนี้"
    },
    {
        "id":  "pdf-979",
        "word":  "Throw under the bus",
        "translation":  "โยนความผิดให้คนอื่นเพื่อเอาตัวรอด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/θroʊ ˈʌndər ðə bʌs/",
        "sentence":  "He decided to throw his colleague under the bus to avoid getting fired.",
        "sentenceTranslation":  "เขาตัดสินใจที่จะผลักความรับผิดชอบให้เพื่อนร่วมงานเพื่อหลีกเลี่ยงการถูกไล่ออก"
    },
    {
        "id":  "pdf-980",
        "word":  "Touch base",
        "translation":  "ติดต่อพูดคุยอัปเดตงานกันสั้นๆ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/tʌtʃ beɪs/",
        "sentence":  "Let\u0027s touch base next week to discuss our progress.",
        "sentenceTranslation":  "เรามาติดต่อกันสั้นๆ สัปดาห์หน้าเพื่อพูดคุยความคืบหน้าของเรากันเถอะ"
    },
    {
        "id":  "pdf-981",
        "word":  "TBD (To be determined)",
        "translation":  "รอการกำหนดหรือสรุปแน่ชัดอีกครั้ง",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/tiː biː diː/",
        "sentence":  "The exact date of the event is TBD, but it will be in August.",
        "sentenceTranslation":  "วันจัดงานที่แน่นอนยังไม่ได้ตัดสินใจ แต่จะเป็นในเดือนสิงหาคม"
    },
    {
        "id":  "pdf-982",
        "word":  "Up to date",
        "translation":  "ทันสมัย / อัปเดตข้อมูลล่าสุด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˌʌp tə ˈdeɪt/",
        "sentence":  "This software is always up to date with the latest features.",
        "sentenceTranslation":  "ซอฟต์แวร์นี้ทันสมัยอยู่เสมอด้วยคุณสมบัติล่าสุด"
    },
    {
        "id":  "pdf-983",
        "word":  "Update",
        "translation":  "ข้อมูลล่าสุด / ทำการปรับปรุงข้อมูล",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈʌpdeɪt/",
        "sentence":  "Please update your profile information.",
        "sentenceTranslation":  "โปรดอัปเดตข้อมูลโปรไฟล์ของคุณ"
    },
    {
        "id":  "pdf-984",
        "word":  "Up in the air",
        "translation":  "ยังไม่แน่นอน / ยังไม่มีข้อสรุปที่ชัดเจน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ʌp ɪn ðə ɛər/",
        "sentence":  "Our travel plans are still up in the air due to the weather.",
        "sentenceTranslation":  "แผนการเดินทางของเรายังไม่แน่นอนเนื่องจากสภาพอากาศ"
    },
    {
        "id":  "pdf-985",
        "word":  "Win-win situation",
        "translation":  "สถานการณ์ที่ได้ผลประโยชน์สมประโยชน์ทั้งสองฝ่าย",
        "category":  "General",
        "ipa":  "/ˈwɪn wɪn ˌsɪtʃuˈeɪʃən/",
        "sentence":  "Negotiating a fair price resulted in a win-win situation for both parties.",
        "sentenceTranslation":  "การเจรจาต่อรองราคาที่เป็นธรรมส่งผลให้เกิดสถานการณ์ที่เป็นประโยชน์ต่อทั้งสองฝ่าย"
    },
    {
        "id":  "pdf-986",
        "word":  "Word of mouth",
        "translation":  "ปากต่อปาก / การพูดบอกต่อๆ กันไป",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈwɜːrd əv maʊθ/",
        "sentence":  "Most of our new customers come from word of mouth referrals.",
        "sentenceTranslation":  "ลูกค้าใหม่ส่วนใหญ่ของเรามาจากการแนะนำแบบปากต่อปาก"
    },
    {
        "id":  "pdf-987",
        "word":  "Work from home (WFH)",
        "translation":  "การทำงานที่บ้าน",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/wɜːrk frɒm hoʊm/",
        "sentence":  "Many employees now work from home several days a week.",
        "sentenceTranslation":  "พนักงานจำนวนมากตอนนี้ทำงานจากที่บ้านหลายวันต่อสัปดาห์"
    },
    {
        "id":  "pdf-988",
        "word":  "Workflow",
        "translation":  "ขั้นตอนการทำงานที่ลื่นไหลตามลำดับ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈwɜːrkfloʊ/",
        "sentence":  "We need to optimize our workflow to improve efficiency.",
        "sentenceTranslation":  "เราจำเป็นต้องปรับปรุงขั้นตอนการทำงานของเราเพื่อเพิ่มประสิทธิภาพ"
    },
    {
        "id":  "pdf-989",
        "word":  "Workload",
        "translation":  "ปริมาณงานที่ต้องรับผิดชอบ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈwɜːrkloʊd/",
        "sentence":  "She has a heavy workload this month, preparing for the big presentation.",
        "sentenceTranslation":  "เธอมีภาระงานมากในเดือนนี้ เพื่อเตรียมการนำเสนอครั้งใหญ่"
    },
    {
        "id":  "pdf-990",
        "word":  "Work-life balance",
        "translation":  "การจัดสมดุลระหว่างการทำงานและการใช้ชีวิต",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈwɜːrk laɪf ˈbæləns/",
        "sentence":  "Achieving a good work-life balance is crucial for well-being.",
        "sentenceTranslation":  "การสร้างสมดุลที่ดีระหว่างชีวิตการทำงานและชีวิตส่วนตัวเป็นสิ่งสำคัญต่อความเป็นอยู่ที่ดี"
    },
    {
        "id":  "pdf-991",
        "word":  "Wrap up",
        "translation":  "สรุปจบการประชุม / สรุปงานชิ้นสุดท้าย",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ræp ʌp/",
        "sentence":  "Let\u0027s wrap up this meeting and move on to the next agenda.",
        "sentenceTranslation":  "มาสรุปการประชุมนี้และย้ายไปยังวาระถัดไปกันเถอะ"
    },
    {
        "id":  "pdf-992",
        "word":  "Write-off",
        "translation":  "การตัดจำหน่ายหนี้สูญ / ตัดเป็นค่าใช้จ่าย",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈraɪt ɒf/",
        "sentence":  "The company had to write-off a significant amount of bad debt.",
        "sentenceTranslation":  "บริษัทต้องตัดจำหน่ายหนี้เสียจำนวนมาก"
    },
    {
        "id":  "pdf-993",
        "word":  "Zero in on",
        "translation":  "มุ่งเป้าหมายหรือเพ่งความสนใจไปที่",
        "category":  "General",
        "ipa":  "/ˈzɪəroʊ ɪn ɒn/",
        "sentence":  "The detective began to zero in on the suspect\u0027s alibi.",
        "sentenceTranslation":  "นักสืบเริ่มเพ่งความสนใจไปที่ข้อแก้ตัวของผู้ต้องสงสัย"
    },
    {
        "id":  "pdf-994",
        "word":  "Backburner",
        "translation":  "พักเรื่องนี้ไว้ก่อน (ให้ความสำคัญต่ำ)",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈbækbɜːrnər/",
        "sentence":  "We\u0027ve put that project on the backburner for now to focus on more urgent tasks.",
        "sentenceTranslation":  "เราพักโครงการนั้นไว้ก่อนเพื่อมุ่งเน้นไปที่งานเร่งด่วนมากกว่า"
    },
    {
        "id":  "pdf-995",
        "word":  "Synergy",
        "translation":  "การทำงานร่วมกันอย่างมีประสทิธิภ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈsɪnərdʒi/",
        "sentence":  "The merger created synergy between the two companies, leading to greater innovation.",
        "sentenceTranslation":  "การควบรวมกิจการสร้างการผนึกกำลังระหว่างสองบริษัท นำไปสู่นวัตกรรมที่ยิ่งใหญ่ขึ้น"
    },
    {
        "id":  "pdf-996",
        "word":  "Leverage",
        "translation":  "ใช้สิ่งที่มีอยู่ให้เกิดประโยชน์สูงสุด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈliːvərɪdʒ/",
        "sentence":  "We need to leverage our existing resources to achieve our goals.",
        "sentenceTranslation":  "เราต้องใช้ประโยชน์จากทรัพยากรที่มีอยู่ของเราให้เกิดประโยชน์สูงสุดเพื่อบรรลุเป้าหมาย"
    },
    {
        "id":  "pdf-997",
        "word":  "Paradigm",
        "translation":  "แบบอย่าง / กรอบความคิด",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈpærədaɪm/",
        "sentence":  "The new technology shifted the entire paradigm of communication.",
        "sentenceTranslation":  "เทคโนโลยีใหม่ได้เปลี่ยนกระบวนทัศน์ของการสื่อสารทั้งหมด"
    },
    {
        "id":  "pdf-998",
        "word":  "Streamline",
        "translation":  "ปรับปรุงขั้นตอนให้ทำงานได้ง่ายและรวดเร็ว",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/ˈstriːmlaɪn/",
        "sentence":  "We need to streamline our workflow to improve productivity.",
        "sentenceTranslation":  "เราจำเป็นต้องทำให้กระบวนการทำงานของเราคล่องตัวขึ้นเพื่อเพิ่มประสิทธิภาพการผลิต"
    },
    {
        "id":  "pdf-999",
        "word":  "Best practice",
        "translation":  "แนวทางปฏิบัติที่ดีที่สุดที่ได้รับการยอมรับ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/bɛst ˈpræktɪs/",
        "sentence":  "Implementing best practices can lead to significant improvements.",
        "sentenceTranslation":  "การนำแนวทางปฏิบัติที่ดีที่สุดมาใช้สามารถนำไปสู่การปรับปรุงที่สำคัญได้"
    },
    {
        "id":  "pdf-1000",
        "word":  "Deliverable",
        "translation":  "ผลงานขั้นสุดท้ายที่ต้องส่งมอบ",
        "category":  "Office Slang \u0026 Idioms",
        "ipa":  "/dɪˈlɪvərəbl/",
        "sentence":  "The final report is the key deliverable for this project.",
        "sentenceTranslation":  "รายงานฉบับสุดท้ายเป็นผลผลิตหลักของโครงการนี้"
    },
    {
        "id":  "pdf-1001",
        "word":  "Alarm clock",
        "translation":  "นาฬิกาปลุก",
        "category":  "Daily Life",
        "ipa":  "/əˈlɑːrm klɒk/",
        "sentence":  "I woke up to the sound of my alarm clock.",
        "sentenceTranslation":  "ฉันตื่นขึ้นมาด้วยเสียงนาฬิกาปลุกของฉัน"
    },
    {
        "id":  "pdf-1002",
        "word":  "Appliance",
        "translation":  "เครื่องใช้ไฟฟ้าในบ้าน",
        "category":  "Daily Life",
        "ipa":  "/əˈplaɪəns/",
        "sentence":  "This store sells various kitchen appliances.",
        "sentenceTranslation":  "ร้านนี้ขายเครื่องใช้ไฟฟ้าในครัวหลายชนิด"
    },
    {
        "id":  "pdf-1003",
        "word":  "Atmosphere",
        "translation":  "บรรยากาศ",
        "category":  "Daily Life",
        "ipa":  "/ˈætməsfɪər/",
        "sentence":  "The restaurant had a very cozy atmosphere.",
        "sentenceTranslation":  "ร้านอาหารมีบรรยากาศที่อบอุ่นมาก"
    },
    {
        "id":  "pdf-1004",
        "word":  "Backpack",
        "translation":  "กระเป๋าเป้สะพายหลัง",
        "category":  "Daily Life",
        "ipa":  "/ˈbækˌpæk/",
        "sentence":  "He packed his clothes into his backpack.",
        "sentenceTranslation":  "เขาจัดเสื้อผ้าใส่เป้สะพายหลังของเขา"
    },
    {
        "id":  "pdf-1005",
        "word":  "Bakery",
        "translation":  "ร้านขายขนมปัง / เบเกอรี",
        "category":  "Daily Life",
        "ipa":  "/ˈbeɪkəri/",
        "sentence":  "I bought fresh bread from the bakery.",
        "sentenceTranslation":  "ฉันซื้อขนมปังสดจากร้านเบเกอรี่"
    },
    {
        "id":  "pdf-1006",
        "word":  "Barber",
        "translation":  "ช่างตัดผมชาย",
        "category":  "Daily Life",
        "ipa":  "/ˈbɑːrbər/",
        "sentence":  "My dad goes to the barber every month.",
        "sentenceTranslation":  "พ่อของฉันไปหาช่างตัดผมทุกเดือน"
    },
    {
        "id":  "pdf-1007",
        "word":  "Beverage",
        "translation":  "เครื่องดื่ม",
        "category":  "Daily Life",
        "ipa":  "/ˈbɛvərɪdʒ/",
        "sentence":  "Coffee is a popular morning beverage.",
        "sentenceTranslation":  "กาแฟเป็นเครื่องดื่มยามเช้าที่ได้รับความนิยม"
    },
    {
        "id":  "pdf-1008",
        "word":  "Blanket",
        "translation":  "ผ้าห่ม",
        "category":  "Daily Life",
        "ipa":  "/ˈblæŋkɪt/",
        "sentence":  "Please give me an extra blanket, it\u0027s cold.",
        "sentenceTranslation":  "โปรดให้ผ้าห่มเพิ่มอีกผืน อากาศหนาว"
    },
    {
        "id":  "pdf-1009",
        "word":  "Borrow",
        "translation":  "ขอยืม",
        "category":  "Daily Life",
        "ipa":  "/ˈbɒroʊ/",
        "sentence":  "Can I borrow your pen for a moment?",
        "sentenceTranslation":  "ฉันขอยืมปากกาของคุณสักครู่ได้ไหม"
    },
    {
        "id":  "pdf-1010",
        "word":  "Bus stop",
        "translation":  "ป้ายรถเมล์",
        "category":  "Daily Life",
        "ipa":  "/ˈbʌs stɒp/",
        "sentence":  "I waited for the bus at the bus stop.",
        "sentenceTranslation":  "ฉันรอรถบัสที่ป้ายรถเมล์"
    },
    {
        "id":  "pdf-1011",
        "word":  "Cabinet",
        "translation":  "ตู้เก็บของ / ตู้ติดผนัง",
        "category":  "Daily Life",
        "ipa":  "/ˈkæbɪnɪt/",
        "sentence":  "She keeps her dishes in the kitchen cabinet.",
        "sentenceTranslation":  "เธอเก็บจานชามไว้ในตู้ครัว"
    },
    {
        "id":  "pdf-1012",
        "word":  "Cafeteria",
        "translation":  "โรงอาหาร",
        "category":  "Daily Life",
        "ipa":  "/ˌkæfɪˈtɪəriə/",
        "sentence":  "We usually eat lunch in the school cafeteria.",
        "sentenceTranslation":  "เรามักจะรับประทานอาหารกลางวันที่โรงอาหารของโรงเรียน"
    },
    {
        "id":  "pdf-1013",
        "word":  "Calendar",
        "translation":  "ปฏิทิน",
        "category":  "Daily Life",
        "ipa":  "/ˈkælɪndər/",
        "sentence":  "I marked the important date on my calendar.",
        "sentenceTranslation":  "ฉันทำเครื่องหมายวันที่สำคัญลงบนปฏิทินของฉัน"
    },
    {
        "id":  "pdf-1014",
        "word":  "Cashier",
        "translation":  "พนักงานเก็บเงิน / แคชเชียร์",
        "category":  "Daily Life",
        "ipa":  "/kæˈʃɪər/",
        "sentence":  "The cashier quickly scanned all my items.",
        "sentenceTranslation":  "พนักงานเก็บเงินสแกนสินค้าทั้งหมดของฉันอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-1015",
        "word":  "Ceiling",
        "translation":  "เพดาน",
        "category":  "Daily Life",
        "ipa":  "/ˈsiːlɪŋ/",
        "sentence":  "There\u0027s a beautiful chandelier hanging from the ceiling.",
        "sentenceTranslation":  "มีโคมระย้าสวยงามห้อยลงมาจากเพดาน"
    },
    {
        "id":  "pdf-1016",
        "word":  "Celebrity",
        "translation":  "คนดัง / คนมีชื่อเสียง",
        "category":  "Daily Life",
        "ipa":  "/səˈlɛbrɪti/",
        "sentence":  "Many celebrities attended the charity event.",
        "sentenceTranslation":  "คนดังหลายคนเข้าร่วมงานการกุศล"
    },
    {
        "id":  "pdf-1017",
        "word":  "Chore",
        "translation":  "งานบ้าน / งานหยุมหยิม",
        "category":  "Daily Life",
        "ipa":  "/tʃɔːr/",
        "sentence":  "Doing laundry is my least favorite chore.",
        "sentenceTranslation":  "การซักผ้าเป็นงานบ้านที่ฉันไม่ชอบที่สุด"
    },
    {
        "id":  "pdf-1018",
        "word":  "Cinema / Theater",
        "translation":  "โรงภาพยนตร์",
        "category":  "Daily Life",
        "ipa":  "/ˈsɪnəmə/",
        "sentence":  "Let\u0027s go to the cinema to watch the new movie.",
        "sentenceTranslation":  "ไปดูหนังใหม่ที่โรงภาพยนตร์กันเถอะ"
    },
    {
        "id":  "pdf-1019",
        "word":  "Citizen",
        "translation":  "พลเมือง / ประชาชน",
        "category":  "Daily Life",
        "ipa":  "/ˈsɪtɪzən/",
        "sentence":  "Every citizen has the right to vote.",
        "sentenceTranslation":  "พลเมืองทุกคนมีสิทธิออกเสียงลงคะแนน"
    },
    {
        "id":  "pdf-1020",
        "word":  "Closet / Wardrobe",
        "translation":  "ตู้เสื้อผ้า",
        "category":  "Daily Life",
        "ipa":  "/ˈklɒzɪt/",
        "sentence":  "I need to organize my closet this weekend.",
        "sentenceTranslation":  "ฉันต้องจัดระเบียบตู้เสื้อผ้าของฉันสุดสัปดาห์นี้"
    },
    {
        "id":  "pdf-1021",
        "word":  "Community",
        "translation":  "ชุมชน",
        "category":  "Daily Life",
        "ipa":  "/kəˈmjuːnɪti/",
        "sentence":  "Our local community often organizes festivals.",
        "sentenceTranslation":  "ชุมชนท้องถิ่นของเรามักจะจัดงานเทศกาล"
    },
    {
        "id":  "pdf-1022",
        "word":  "Commute",
        "translation":  "การเดินทางไปกลับ (บ้าน-ที่ทำงาน)",
        "category":  "Daily Life",
        "ipa":  "/kəˈmjuːt/",
        "sentence":  "His daily commute to work takes over an hour.",
        "sentenceTranslation":  "การเดินทางไปทำงานของเขาใช้เวลามากกว่าหนึ่งชั่วโมงในแต่ละวัน"
    },
    {
        "id":  "pdf-1023",
        "word":  "Condition",
        "translation":  "สภาพ / เงื่อนไข",
        "category":  "Daily Life",
        "ipa":  "/kənˈdɪʃən/",
        "sentence":  "The car is in excellent condition despite its age.",
        "sentenceTranslation":  "รถคันนี้อยู่ในสภาพดีเยี่ยมแม้จะมีอายุมากแล้วก็ตาม"
    },
    {
        "id":  "pdf-1024",
        "word":  "Convenience store",
        "translation":  "ร้านสะดวกซื้อ",
        "category":  "Daily Life",
        "ipa":  "/kənˈviːniəns stɔːr/",
        "sentence":  "I stopped by the convenience store to buy some snacks.",
        "sentenceTranslation":  "ฉันแวะร้านสะดวกซื้อเพื่อซื้อขนม"
    },
    {
        "id":  "pdf-1025",
        "word":  "Costume",
        "translation":  "เครื่องแต่งกาย / ชุดคอสเพลย์",
        "category":  "Daily Life",
        "ipa":  "/ˈkɒstuːm/",
        "sentence":  "She wore a vampire costume for the Halloween party.",
        "sentenceTranslation":  "เธอสวมชุดแฟนซีแวมไพร์ไปงานปาร์ตี้ฮาโลวีน"
    },
    {
        "id":  "pdf-1026",
        "word":  "Counter",
        "translation":  "เคาน์เตอร์",
        "category":  "Daily Life",
        "ipa":  "/ˈkaʊntər/",
        "sentence":  "Please place your order at the counter.",
        "sentenceTranslation":  "กรุณาสั่งอาหารที่เคาน์เตอร์"
    },
    {
        "id":  "pdf-1027",
        "word":  "Credit card",
        "translation":  "บัตรเครดิต",
        "category":  "Daily Life",
        "ipa":  "/ˈkrɛdɪt kɑːrd/",
        "sentence":  "I will pay with my credit card.",
        "sentenceTranslation":  "ฉันจะจ่ายด้วยบัตรเครดิตของฉัน"
    },
    {
        "id":  "pdf-1028",
        "word":  "Crowd",
        "translation":  "ฝูงชน",
        "category":  "Daily Life",
        "ipa":  "/kraʊd/",
        "sentence":  "There was a large crowd at the concert.",
        "sentenceTranslation":  "มีฝูงชนจำนวนมากที่คอนเสิร์ต"
    },
    {
        "id":  "pdf-1029",
        "word":  "Curtain",
        "translation":  "ผ้าม่าน",
        "category":  "Daily Life",
        "ipa":  "/ˈkɜːrtn/",
        "sentence":  "Please draw the curtains before you leave.",
        "sentenceTranslation":  "กรุณาปิดม่านก่อนที่คุณจะออกไป"
    },
    {
        "id":  "pdf-1030",
        "word":  "Cushion",
        "translation":  "หมอนอิง",
        "category":  "Daily Life",
        "ipa":  "/ˈkʊʃn/",
        "sentence":  "She rested her head on a soft cushion.",
        "sentenceTranslation":  "เธอวางศีรษะลงบนหมอนอิงนุ่มๆ"
    },
    {
        "id":  "pdf-1031",
        "word":  "Daily",
        "translation":  "รายวัน / ทุกวัน",
        "category":  "Daily Life",
        "ipa":  "/ˈdeɪli/",
        "sentence":  "I read the newspaper daily.",
        "sentenceTranslation":  "ฉันอ่านหนังสือพิมพ์ทุกวัน"
    },
    {
        "id":  "pdf-1032",
        "word":  "Decaf",
        "translation":  "กาแฟไม่มีคาเฟอีน",
        "category":  "Daily Life",
        "ipa":  "/ˈdiːkæf/",
        "sentence":  "I prefer decaf coffee in the evening.",
        "sentenceTranslation":  "ฉันชอบกาแฟดีแคฟในตอนเย็น"
    },
    {
        "id":  "pdf-1033",
        "word":  "Delivery",
        "translation":  "การจัดส่ง (อาหาร/พัสดุ)",
        "category":  "Daily Life",
        "ipa":  "/dɪˈlɪvəri/",
        "sentence":  "The pizza delivery arrived quickly.",
        "sentenceTranslation":  "พิซซ่าที่สั่งมาส่งถึงเร็วมาก"
    },
    {
        "id":  "pdf-1034",
        "word":  "Department store",
        "translation":  "ห้างสรรพสินค้า",
        "category":  "Daily Life",
        "ipa":  "/dɪˈpɑːrtmənt stɔːr/",
        "sentence":  "We bought new clothes at the department store.",
        "sentenceTranslation":  "เราซื้อเสื้อผ้าใหม่ที่ห้างสรรพสินค้า"
    },
    {
        "id":  "pdf-1035",
        "word":  "Diet",
        "translation":  "อาหาร / การควบคุมอาหาร",
        "category":  "Daily Life",
        "ipa":  "/ˈdaɪət/",
        "sentence":  "He is on a strict diet to lose weight.",
        "sentenceTranslation":  "เขากำลังคุมอาหารอย่างเข้มงวดเพื่อลดน้ำหนัก"
    },
    {
        "id":  "pdf-1036",
        "word":  "Direction",
        "translation":  "ทิศทาง / คำแนะนำ",
        "category":  "Daily Life",
        "ipa":  "/dəˈrɛkʃn/",
        "sentence":  "Could you give me directions to the station?",
        "sentenceTranslation":  "คุณช่วยบอกทางไปสถานีรถไฟได้ไหม"
    },
    {
        "id":  "pdf-1037",
        "word":  "Environment",
        "translation":  "สิ่งแวดล้อม",
        "category":  "Daily Life",
        "ipa":  "/ɪnˈvaɪrənmənt/",
        "sentence":  "We must protect our natural environment.",
        "sentenceTranslation":  "เราต้องปกป้องสิ่งแวดล้อมทางธรรมชาติของเรา"
    },
    {
        "id":  "pdf-1038",
        "word":  "Escalator",
        "translation":  "บันไดเลื่อน",
        "category":  "Daily Life",
        "ipa":  "/ˈɛskəleɪtər/",
        "sentence":  "Take the escalator to the second floor.",
        "sentenceTranslation":  "ขึ้นบันไดเลื่อนไปที่ชั้นสอง"
    },
    {
        "id":  "pdf-1039",
        "word":  "Exercise",
        "translation":  "ออกกำลังกาย",
        "category":  "Daily Life",
        "ipa":  "/ˈɛksərsaɪz/",
        "sentence":  "Daily exercise is good for your health.",
        "sentenceTranslation":  "การออกกำลังกายทุกวันดีต่อสุขภาพของคุณ"
    },
    {
        "id":  "pdf-1040",
        "word":  "Exhibition",
        "translation":  "นิทรรศการ / งานแสดงศิลปะ",
        "category":  "Daily Life",
        "ipa":  "/ˌɛksəˈbɪʃn/",
        "sentence":  "We visited an art exhibition last weekend.",
        "sentenceTranslation":  "เราไปชมนิทรรศการศิลปะเมื่อสุดสัปดาห์ที่แล้ว"
    },
    {
        "id":  "pdf-1041",
        "word":  "Fare",
        "translation":  "ค่าโดยสาร (รถเมล์ / รถไฟ)",
        "category":  "Daily Life",
        "ipa":  "/fɛr/",
        "sentence":  "The bus fare has increased recently.",
        "sentenceTranslation":  "ค่าโดยสารรถบัสเพิ่มขึ้นเมื่อเร็วๆ นี้"
    },
    {
        "id":  "pdf-1042",
        "word":  "Fashion",
        "translation":  "แฟชั่น",
        "category":  "Daily Life",
        "ipa":  "/ˈfæʃən/",
        "sentence":  "She always follows the latest fashion trends.",
        "sentenceTranslation":  "เธอติดตามเทรนด์แฟชั่นล่าสุดเสมอ"
    },
    {
        "id":  "pdf-1043",
        "word":  "Fast food",
        "translation":  "อาหารจานด่วน",
        "category":  "Daily Life",
        "ipa":  "/ˌfɑːst ˈfuːd/",
        "sentence":  "Sometimes, I crave fast food for dinner.",
        "sentenceTranslation":  "บางครั้งฉันก็อยากกินอาหารจานด่วนเป็นมื้อเย็น"
    },
    {
        "id":  "pdf-1044",
        "word":  "Festival",
        "translation":  "เทศกาล",
        "category":  "Daily Life",
        "ipa":  "/ˈfɛstɪvəl/",
        "sentence":  "The city hosts a music festival every summer.",
        "sentenceTranslation":  "เมืองนี้จัดเทศกาลดนตรีทุกฤดูร้อน"
    },
    {
        "id":  "pdf-1045",
        "word":  "Flavor / Flavour",
        "translation":  "รสชาติ",
        "category":  "Daily Life",
        "ipa":  "/ˈfleɪvər/",
        "sentence":  "This ice cream has a great flavor.",
        "sentenceTranslation":  "ไอศกรีมรสชาตินี้อร่อยมาก"
    },
    {
        "id":  "pdf-1046",
        "word":  "Footpath / Sidewalk",
        "translation":  "ทางเท้า / ฟุตบาท",
        "category":  "Daily Life",
        "ipa":  "/ˈfʊtpæθ/ /ˈsaɪdwɔːk/",
        "sentence":  "Please walk on the sidewalk.",
        "sentenceTranslation":  "กรุณาเดินบนทางเท้า"
    },
    {
        "id":  "pdf-1047",
        "word":  "Free time / Leisure",
        "translation":  "เวลาว่าง",
        "category":  "Daily Life",
        "ipa":  "/friː taɪm/ /ˈleʒər/",
        "sentence":  "I like to read in my free time.",
        "sentenceTranslation":  "ฉันชอบอ่านหนังสือในเวลาว่าง"
    },
    {
        "id":  "pdf-1048",
        "word":  "Garage",
        "translation":  "โรงจอดรถ / อู่ซ่อมรถ",
        "category":  "Daily Life",
        "ipa":  "/ˈɡærɑːʒ/",
        "sentence":  "He parked his car in the garage.",
        "sentenceTranslation":  "เขาจอดรถไว้ในโรงรถ"
    },
    {
        "id":  "pdf-1049",
        "word":  "Garbage / Trash",
        "translation":  "ขยะ",
        "category":  "Daily Life",
        "ipa":  "/ˈɡɑːrbɪdʒ/ /træʃ/",
        "sentence":  "Please take out the trash.",
        "sentenceTranslation":  "ช่วยเอาขยะไปทิ้งหน่อย"
    },
    {
        "id":  "pdf-1050",
        "word":  "Grocery",
        "translation":  "ร้านขายของชำ / ของสดที่ซื้อเข้าบ้าน",
        "category":  "Daily Life",
        "ipa":  "/ˈɡroʊsəri/",
        "sentence":  "She went to the grocery store to buy some milk.",
        "sentenceTranslation":  "เธอไปร้านขายของชำเพื่อซื้อนม"
    },
    {
        "id":  "pdf-1051",
        "word":  "Gym",
        "translation":  "โรงยิม / สถานที่ออกกำลังกาย",
        "category":  "Daily Life",
        "ipa":  "/dʒɪm/",
        "sentence":  "I go to the gym three times a week.",
        "sentenceTranslation":  "ฉันไปยิมสามครั้งต่อสัปดาห์"
    },
    {
        "id":  "pdf-1052",
        "word":  "Habit",
        "translation":  "นิสัย / กิจวัตรที่ทำจนชิน",
        "category":  "Daily Life",
        "ipa":  "/ˈhæbɪt/",
        "sentence":  "Brushing your teeth twice a day is a good habit.",
        "sentenceTranslation":  "การแปรงฟันวันละสองครั้งเป็นนิสัยที่ดี"
    },
    {
        "id":  "pdf-1053",
        "word":  "Hairdresser",
        "translation":  "ช่างตัดผมหญิง / ช่างทำผม",
        "category":  "Daily Life",
        "ipa":  "/ˈheəˌdresər/",
        "sentence":  "I need to book an appointment with my hairdresser.",
        "sentenceTranslation":  "ฉันต้องจองนัดกับช่างทำผมของฉัน"
    },
    {
        "id":  "pdf-1054",
        "word":  "Handbag",
        "translation":  "กระเป๋าถือ",
        "category":  "Daily Life",
        "ipa":  "/ˈhændbæɡ/",
        "sentence":  "She carries her essentials in her handbag.",
        "sentenceTranslation":  "เธอพกของใช้จำเป็นไว้ในกระเป๋าถือ"
    },
    {
        "id":  "pdf-1055",
        "word":  "Hobby",
        "translation":  "งานอดิเรก",
        "category":  "Daily Life",
        "ipa":  "/ˈhɒbi/",
        "sentence":  "My hobby is collecting stamps.",
        "sentenceTranslation":  "งานอดิเรกของฉันคือการสะสมแสตมป์"
    },
    {
        "id":  "pdf-1056",
        "word":  "Household",
        "translation":  "ครัวเรือน / ภายในบ้าน",
        "category":  "Daily Life",
        "ipa":  "/ˈhaʊshoʊld/",
        "sentence":  "We need to buy new household items for the kitchen.",
        "sentenceTranslation":  "เราต้องซื้อของใช้ในครัวเรือนใหม่สำหรับห้องครัว"
    },
    {
        "id":  "pdf-1057",
        "word":  "Ingredient",
        "translation":  "ส่วนผสม (ในการทำอาหาร)",
        "category":  "Daily Life",
        "ipa":  "/ɪnˈɡriːdiənt/",
        "sentence":  "Fresh ingredients are essential for a delicious meal.",
        "sentenceTranslation":  "ส่วนผสมสดใหม่เป็นสิ่งจำเป็นสำหรับอาหารที่อร่อย"
    },
    {
        "id":  "pdf-1058",
        "word":  "Intersection",
        "translation":  "สี่แยก (บนถนน)",
        "category":  "Daily Life",
        "ipa":  "/ˌɪntərˈsekʃən/",
        "sentence":  "Turn left at the next intersection.",
        "sentenceTranslation":  "เลี้ยวซ้ายตรงสี่แยกถัดไป"
    },
    {
        "id":  "pdf-1059",
        "word":  "Kitchen",
        "translation":  "ห้องครัว",
        "category":  "Daily Life",
        "ipa":  "/ˈkɪtʃɪn/",
        "sentence":  "The family gathered in the kitchen to cook dinner.",
        "sentenceTranslation":  "ครอบครัวมารวมตัวกันในห้องครัวเพื่อทำอาหารเย็น"
    },
    {
        "id":  "pdf-1060",
        "word":  "Laundry",
        "translation":  "การซักรีด / เสื้อผ้าที่รอซัก",
        "category":  "Daily Life",
        "ipa":  "/ˈlɔːndri/",
        "sentence":  "I need to do the laundry this weekend.",
        "sentenceTranslation":  "ฉันต้องซักผ้าสุดสัปดาห์นี้"
    },
    {
        "id":  "pdf-1061",
        "word":  "Lifestyle",
        "translation":  "รูปแบบการดำเนินชีวิต",
        "category":  "Daily Life",
        "ipa":  "/ˈlaɪfstaɪl/",
        "sentence":  "Eating healthy and exercising regularly are part of a healthy lifestyle.",
        "sentenceTranslation":  "การรับประทานอาหารเพื่อสุขภาพและการออกกำลังกายเป็นประจำเป็นส่วนหนึ่งของวิถีชีวิตที่มีสุขภาพดี"
    },
    {
        "id":  "pdf-1062",
        "word":  "Lift / Elevator",
        "translation":  "ลิฟต์",
        "category":  "Daily Life",
        "ipa":  "/lɪft/ /ˌelɪveɪtər/",
        "sentence":  "Take the lift to the fifth floor.",
        "sentenceTranslation":  "ขึ้นลิฟต์ไปที่ชั้นห้า"
    },
    {
        "id":  "pdf-1063",
        "word":  "Litter",
        "translation":  "ทิ้งขยะ (เรี่ยราด) / เศษขยะ",
        "category":  "Daily Life",
        "ipa":  "/ˈlɪtər/",
        "sentence":  "Please do not drop litter in the park.",
        "sentenceTranslation":  "โปรดอย่าทิ้งขยะในสวนสาธารณะ"
    },
    {
        "id":  "pdf-1064",
        "word":  "Luggage / Baggage",
        "translation":  "กระเป๋าเดินทาง",
        "category":  "Daily Life",
        "ipa":  "/ˈlʌɡɪdʒ/ /ˈbæɡɪdʒ/",
        "sentence":  "Passengers must keep their luggage with them at all times.",
        "sentenceTranslation":  "ผู้โดยสารต้องเก็บสัมภาระไว้กับตัวตลอดเวลา"
    },
    {
        "id":  "pdf-1065",
        "word":  "Magazine",
        "translation":  "นิตยสาร",
        "category":  "Daily Life",
        "ipa":  "/ˌmæɡəˈziːn/",
        "sentence":  "She enjoys reading fashion magazines.",
        "sentenceTranslation":  "เธอชอบอ่านนิตยสารแฟชั่น"
    },
    {
        "id":  "pdf-1066",
        "word":  "Neighbor / Neighbour",
        "translation":  "เพื่อนบ้าน",
        "category":  "Daily Life",
        "ipa":  "/ˈneɪbər/",
        "sentence":  "Our new neighbor moved in yesterday.",
        "sentenceTranslation":  "เพื่อนบ้านคนใหม่ของเราย้ายเข้ามาเมื่อวานนี้"
    },
    {
        "id":  "pdf-1067",
        "word":  "Neighborhood",
        "translation":  "แถวบ้าน / ย่าน / บริเวณรอบๆ",
        "category":  "Daily Life",
        "ipa":  "/ˈneɪbərhʊd/",
        "sentence":  "It\u0027s a quiet and friendly neighborhood.",
        "sentenceTranslation":  "นี่เป็นย่านที่เงียบสงบและเป็นมิตร"
    },
    {
        "id":  "pdf-1068",
        "word":  "Newspaper",
        "translation":  "หนังสือพิมพ์",
        "category":  "Daily Life",
        "ipa":  "/ˈnuːzpeɪpər/",
        "sentence":  "He reads the newspaper every morning with his coffee.",
        "sentenceTranslation":  "เขาอ่านหนังสือพิมพ์ทุกเช้าพร้อมกับกาแฟ"
    },
    {
        "id":  "pdf-1069",
        "word":  "Nutrition",
        "translation":  "โภชนาการ",
        "category":  "Daily Life",
        "ipa":  "/nuːˈtrɪʃən/",
        "sentence":  "Good nutrition is vital for a child\u0027s development.",
        "sentenceTranslation":  "โภชนาการที่ดีมีความสำคัญต่อพัฒนาการของเด็ก"
    },
    {
        "id":  "pdf-1070",
        "word":  "Overpass / Flyover",
        "translation":  "สะพานลอยคนข้าม / สะพานยกระดับ",
        "category":  "Daily Life",
        "ipa":  "/ˈoʊvərpæs/ /ˈflaɪoʊvər/",
        "sentence":  "The new overpass helps to ease traffic congestion.",
        "sentenceTranslation":  "สะพานลอยแห่งใหม่ช่วยลดความแออัดของการจราจร"
    },
    {
        "id":  "pdf-1071",
        "word":  "Packaging",
        "translation":  "บรรจุภัณฑ์ (เช่น กล่อง/ห่อขนม)",
        "category":  "Daily Life",
        "ipa":  "/ˈpækɪdʒɪŋ/",
        "sentence":  "The product\u0027s packaging is made from recycled materials.",
        "sentenceTranslation":  "บรรจุภัณฑ์ของผลิตภัณฑ์ทำจากวัสดุรีไซเคิล"
    },
    {
        "id":  "pdf-1072",
        "word":  "Pedestrian",
        "translation":  "คนเดินเท้า",
        "category":  "Daily Life",
        "ipa":  "/pəˈdɛstriən/",
        "sentence":  "The pedestrian carefully crossed the busy street.",
        "sentenceTranslation":  "คนเดินเท้าข้ามถนนที่พลุกพล่านอย่างระมัดระวัง"
    },
    {
        "id":  "pdf-1073",
        "word":  "Pharmacy / Drugstore",
        "translation":  "ร้านขายยา",
        "category":  "Daily Life",
        "ipa":  "/ˈfɑːrməsi/ /ˈdrʌɡstɔːr/",
        "sentence":  "I need to go to the pharmacy to buy medicine.",
        "sentenceTranslation":  "ฉันต้องไปร้านขายยาเพื่อซื้อยา"
    },
    {
        "id":  "pdf-1074",
        "word":  "Pillow",
        "translation":  "หมอน",
        "category":  "Daily Life",
        "ipa":  "/ˈpɪloʊ/",
        "sentence":  "She rested her head on a soft pillow.",
        "sentenceTranslation":  "เธอวางศีรษะลงบนหมอนนุ่มๆ"
    },
    {
        "id":  "pdf-1075",
        "word":  "Pocket money",
        "translation":  "เงินค่าขนม / เงินพกกระเป๋า",
        "category":  "Daily Life",
        "ipa":  "/ˈpɒkɪt ˌmʌni/",
        "sentence":  "My parents gave me some pocket money for the weekend.",
        "sentenceTranslation":  "พ่อแม่ให้เงินค่าขนมฉันสำหรับวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1076",
        "word":  "Pollution",
        "translation":  "มลพิษ",
        "category":  "Daily Life",
        "ipa":  "/pəˈluːʃən/",
        "sentence":  "Air pollution is a major concern in big cities.",
        "sentenceTranslation":  "มลพิษทางอากาศเป็นความกังวลหลักในเมืองใหญ่"
    },
    {
        "id":  "pdf-1077",
        "word":  "Public transport",
        "translation":  "ขนส่งสาธารณะ",
        "category":  "Daily Life",
        "ipa":  "/ˌpʌblɪk ˈtrænspɔːrt/",
        "sentence":  "Many people use public transport to get to work.",
        "sentenceTranslation":  "ผู้คนจำนวนมากใช้ระบบขนส่งสาธารณะเพื่อไปทำงาน"
    },
    {
        "id":  "pdf-1078",
        "word":  "Queue / Line",
        "translation":  "คิว / แถว",
        "category":  "Daily Life",
        "ipa":  "/kjuː/ /laɪn/",
        "sentence":  "Please stand in line.",
        "sentenceTranslation":  "กรุณาเข้าแถว"
    },
    {
        "id":  "pdf-1079",
        "word":  "Real estate",
        "translation":  "อสังหาริมทรัพย์ (บ้านและที่ดิน)",
        "category":  "Daily Life",
        "ipa":  "/ˈriːəl ɪˌsteɪt/",
        "sentence":  "He works in real estate, buying and selling properties.",
        "sentenceTranslation":  "เขาทำงานด้านอสังหาริมทรัพย์ ซื้อขายที่ดินและสิ่งปลูกสร้าง"
    },
    {
        "id":  "pdf-1080",
        "word":  "Receipt",
        "translation":  "ใบเสร็จรับเงิน",
        "category":  "Daily Life",
        "ipa":  "/rɪˈsiːt/",
        "sentence":  "Please keep your receipt in case you need to return it.",
        "sentenceTranslation":  "โปรดเก็บใบเสร็จรับเงินไว้เผื่อคุณต้องการคืนสินค้า"
    },
    {
        "id":  "pdf-1081",
        "word":  "Recipe",
        "translation":  "สูตรอาหาร",
        "category":  "Daily Life",
        "ipa":  "/ˈrɛsɪpi/",
        "sentence":  "She followed the recipe to bake a delicious cake.",
        "sentenceTranslation":  "เธอทำตามสูตรอาหารเพื่ออบเค้กแสนอร่อย"
    },
    {
        "id":  "pdf-1082",
        "word":  "Recreation",
        "translation":  "การสันทนาการ / การพักผ่อนหย่อนใจ",
        "category":  "Daily Life",
        "ipa":  "/ˌrɛkriˈeɪʃən/",
        "sentence":  "The park offers various recreation activities for families.",
        "sentenceTranslation":  "สวนสาธารณะมีกิจกรรมนันทนาการหลากหลายสำหรับครอบครัว"
    },
    {
        "id":  "pdf-1083",
        "word":  "Regular",
        "translation":  "ลูกค้าประจำ / ปกติทั่วไป",
        "category":  "Daily Life",
        "ipa":  "/ˈrɛɡjələr/",
        "sentence":  "He is a regular customer at this coffee shop.",
        "sentenceTranslation":  "เขาเป็นลูกค้าประจำของร้านกาแฟแห่งนี้"
    },
    {
        "id":  "pdf-1084",
        "word":  "Relax",
        "translation":  "ผ่อนคลาย / พักผ่อน",
        "category":  "Daily Life",
        "ipa":  "/rɪˈlæks/",
        "sentence":  "After a long day, I just want to relax on the couch.",
        "sentenceTranslation":  "หลังจากวันอันยาวนาน ฉันแค่อยากจะผ่อนคลายบนโซฟา"
    },
    {
        "id":  "pdf-1085",
        "word":  "Rent",
        "translation":  "เช่า / ค่าเช่า",
        "category":  "Daily Life",
        "ipa":  "/rɛnt/",
        "sentence":  "They decided to rent an apartment in the city center.",
        "sentenceTranslation":  "พวกเขาตัดสินใจเช่าอพาร์ตเมนต์ในใจกลางเมือง"
    },
    {
        "id":  "pdf-1086",
        "word":  "Residence",
        "translation":  "ที่อยู่อาศัย / บ้านพัก",
        "category":  "Daily Life",
        "ipa":  "/ˈrɛzɪdəns/",
        "sentence":  "This building serves as the official residence of the ambassador.",
        "sentenceTranslation":  "อาคารนี้เป็นที่พักอาศัยอย่างเป็นทางการของท่านทูต"
    },
    {
        "id":  "pdf-1087",
        "word":  "Restroom / Bathroom",
        "translation":  "ห้องน้ำ",
        "category":  "Daily Life",
        "ipa":  "/ˈrɛstruːm/ / /ˈbæθruːm/",
        "sentence":  "Excuse me, where is the restroom?",
        "sentenceTranslation":  "ขอโทษนะครับ/คะ ห้องน้ำอยู่ที่ไหนครับ/คะ?"
    },
    {
        "id":  "pdf-1088",
        "word":  "Routine",
        "translation":  "กิจวัตรประจำวัน",
        "category":  "Daily Life",
        "ipa":  "/ruːˈtiːn/",
        "sentence":  "My daily routine includes exercise.",
        "sentenceTranslation":  "กิจวัตรประจำวันของฉันรวมถึงการออกกำลังกาย"
    },
    {
        "id":  "pdf-1089",
        "word":  "Rush hour",
        "translation":  "ชั่วโมงเร่งด่วน",
        "category":  "Daily Life",
        "ipa":  "/ˈrʌʃ ˌaʊər/",
        "sentence":  "Traffic is always heavy during rush hour.",
        "sentenceTranslation":  "การจราจรมักจะติดขัดเสมอในช่วงชั่วโมงเร่งด่วน"
    },
    {
        "id":  "pdf-1090",
        "word":  "Shopping mall",
        "translation":  "ศูนย์การค้า",
        "category":  "Daily Life",
        "ipa":  "/ˈʃɒpɪŋ mɔːl/",
        "sentence":  "Let\u0027s meet at the shopping mall this weekend.",
        "sentenceTranslation":  "สุดสัปดาห์นี้เราไปเจอกันที่ห้างสรรพสินค้าไหม?"
    },
    {
        "id":  "pdf-1091",
        "word":  "Sightseeing",
        "translation":  "การเที่ยวชมทิวทัศน์ / เดินเที่ยว",
        "category":  "Daily Life",
        "ipa":  "/ˈsaɪtsiːɪŋ/",
        "sentence":  "We spent the day sightseeing in the city.",
        "sentenceTranslation":  "เราใช้เวลาทั้งวันเที่ยวชมสถานที่ต่างๆ ในเมือง"
    },
    {
        "id":  "pdf-1092",
        "word":  "Souvenir",
        "translation":  "ของที่ระลึก / ของฝาก",
        "category":  "Daily Life",
        "ipa":  "/ˌsuːvəˈnɪər/",
        "sentence":  "I bought a souvenir to remember my trip.",
        "sentenceTranslation":  "ฉันซื้อของที่ระลึกเพื่อจดจำการเดินทางของฉัน"
    },
    {
        "id":  "pdf-1093",
        "word":  "Subway / Underground",
        "translation":  "รถไฟใต้ดิน",
        "category":  "Daily Life",
        "ipa":  "/ˈsʌbweɪ/ / /ˈʌndərɡraʊnd/",
        "sentence":  "It\u0027s faster to take the subway during peak hours.",
        "sentenceTranslation":  "การนั่งรถไฟฟ้าใต้ดินเร็วกว่าในช่วงเวลาเร่งด่วน"
    },
    {
        "id":  "pdf-1094",
        "word":  "Supermarket",
        "translation":  "ซูเปอร์มาร์เก็ต",
        "category":  "Daily Life",
        "ipa":  "/ˈsuːpərmɑːrkɪt/",
        "sentence":  "I need to buy groceries at the supermarket.",
        "sentenceTranslation":  "ฉันต้องไปซื้อของชำที่ซูเปอร์มาร์เก็ต"
    },
    {
        "id":  "pdf-1095",
        "word":  "Ticket",
        "translation":  "ตั๋ว / บัตรผ่านประตู",
        "category":  "Daily Life",
        "ipa":  "/ˈtɪkɪt/",
        "sentence":  "Do you have your ticket for the concert?",
        "sentenceTranslation":  "คุณมีตั๋วคอนเสิร์ตหรือยัง?"
    },
    {
        "id":  "pdf-1096",
        "word":  "Traffic",
        "translation":  "การจราจร",
        "category":  "Daily Life",
        "ipa":  "/ˈtræfɪk/",
        "sentence":  "The traffic was terrible this morning.",
        "sentenceTranslation":  "การจราจรแย่มากเมื่อเช้านี้"
    },
    {
        "id":  "pdf-1097",
        "word":  "Traffic light",
        "translation":  "ไฟจราจร / ไฟเขียวไฟแดง",
        "category":  "Daily Life",
        "ipa":  "/ˈtræfɪk laɪt/",
        "sentence":  "Turn left at the next traffic light.",
        "sentenceTranslation":  "เลี้ยวซ้ายที่สัญญาณไฟจราจรหน้า"
    },
    {
        "id":  "pdf-1098",
        "word":  "Wallet / Purse",
        "translation":  "กระเป๋าเงิน",
        "category":  "Daily Life",
        "ipa":  "/ˈwɒlɪt/ / /pɜːrs/",
        "sentence":  "I can\u0027t find my wallet anywhere.",
        "sentenceTranslation":  "ฉันหากระเป๋าสตางค์ไม่เจอเลย"
    },
    {
        "id":  "pdf-1099",
        "word":  "Weather",
        "translation":  "สภาพอากาศ",
        "category":  "Daily Life",
        "ipa":  "/ˈwɛðər/",
        "sentence":  "The weather is beautiful today.",
        "sentenceTranslation":  "วันนี้อากาศดีมาก"
    },
    {
        "id":  "pdf-1100",
        "word":  "Weekly",
        "translation":  "รายสัปดาห์ / ทุกสัปดาห์",
        "category":  "Daily Life",
        "ipa":  "/ˈwiːkli/",
        "sentence":  "We have a weekly team meeting.",
        "sentenceTranslation":  "เรามีการประชุมทีมรายสัปดาห์"
    },
    {
        "id":  "pdf-1101",
        "word":  "Air conditioner",
        "translation":  "เครื่องปรับอากาศ",
        "category":  "Daily Life",
        "ipa":  "/ˈɛər kəndɪʃənər/",
        "sentence":  "It\u0027s so hot, we need to turn on the air conditioner.",
        "sentenceTranslation":  "ร้อนมากเลย เราต้องเปิดเครื่องปรับอากาศ"
    },
    {
        "id":  "pdf-1102",
        "word":  "Alley / Lane",
        "translation":  "ซอย / ตรอก",
        "category":  "Daily Life",
        "ipa":  "/sɔːj/",
        "sentence":  "The cat ran down the narrow alley.",
        "sentenceTranslation":  "แมววิ่งลงไปในซอยแคบๆ"
    },
    {
        "id":  "pdf-1103",
        "word":  "Amuse",
        "translation":  "ทำให้สนุกสนาน / เพลิดเพลิน",
        "category":  "Daily Life",
        "ipa":  "/tham hâj pʰlɤ̂t pʰlɤːn/",
        "sentence":  "The comedian tried to amuse the audience.",
        "sentenceTranslation":  "นักแสดงตลกพยายามทำให้ผู้ชมเพลิดเพลิน"
    },
    {
        "id":  "pdf-1104",
        "word":  "Amusement park",
        "translation":  "สวนสนุก",
        "category":  "Daily Life",
        "ipa":  "/sǔan sà nùk/",
        "sentence":  "We spent the whole day at the amusement park.",
        "sentenceTranslation":  "เราใช้เวลาทั้งวันที่สวนสนุก"
    },
    {
        "id":  "pdf-1105",
        "word":  "Apartment",
        "translation":  "ห้องชุด / อพาร์ตเมนต์",
        "category":  "Daily Life",
        "ipa":  "/ʔà phàːt men/",
        "sentence":  "My friend lives in a small apartment.",
        "sentenceTranslation":  "เพื่อนของฉันอาศัยอยู่ในอพาร์ตเมนต์เล็กๆ"
    },
    {
        "id":  "pdf-1106",
        "word":  "Area",
        "translation":  "พื้นที่ / บริเวณ",
        "category":  "Daily Life",
        "ipa":  "/pʰɯ́ːn tʰîː/",
        "sentence":  "This area is known for its beautiful parks.",
        "sentenceTranslation":  "บริเวณนี้ขึ้นชื่อเรื่องสวนสาธารณะที่สวยงาม"
    },
    {
        "id":  "pdf-1107",
        "word":  "Awake",
        "translation":  "ตื่นนอน / รู้สึกตัว",
        "category":  "Daily Life",
        "ipa":  "/tɯ̀ːn/",
        "sentence":  "I was awake all night thinking about the exam.",
        "sentenceTranslation":  "ฉันตื่นอยู่ทั้งคืนเพราะคิดถึงข้อสอบ"
    },
    {
        "id":  "pdf-1108",
        "word":  "Balcony",
        "translation":  "ระเบียง",
        "category":  "Daily Life",
        "ipa":  "/rá biːaŋ/",
        "sentence":  "We enjoyed the view from the hotel balcony.",
        "sentenceTranslation":  "เราเพลิดเพลินกับวิวจากระเบียงโรงแรม"
    },
    {
        "id":  "pdf-1109",
        "word":  "Basin / Sink",
        "translation":  "อ่างล้างหน้า / อ่างล้างจาน",
        "category":  "Daily Life",
        "ipa":  "/ʔàːŋ láːŋ nâː/",
        "sentence":  "Please wash your hands in the basin.",
        "sentenceTranslation":  "กรุณาล้างมือในอ่างล้างหน้า"
    },
    {
        "id":  "pdf-1110",
        "word":  "Bathrobe",
        "translation":  "ชุดคลุมอาบน้ำ",
        "category":  "Daily Life",
        "ipa":  "/sɯ̂a kʰlum ʔàːp náːm/",
        "sentence":  "She put on her soft bathrobe after the shower.",
        "sentenceTranslation":  "เธอสวมเสื้อคลุมอาบน้ำนุ่มๆ หลังจากอาบน้ำเสร็จ"
    },
    {
        "id":  "pdf-1111",
        "word":  "Battery charger",
        "translation":  "ที่ชาร์จแบตเตอรี่",
        "category":  "Daily Life",
        "ipa":  "/tʰîː t͡ɕʰáːt bɛ̀t tə rîː/",
        "sentence":  "I forgot my battery charger at home.",
        "sentenceTranslation":  "ฉันลืมที่ชาร์จแบตเตอรี่ไว้ที่บ้าน"
    },
    {
        "id":  "pdf-1112",
        "word":  "Belongings",
        "translation":  "ข้าวของเครื่องใช้ส่วนตัว",
        "category":  "Daily Life",
        "ipa":  "/kʰɔ̌ːŋ t͡ɕʰáj sùan tua/",
        "sentence":  "Please keep your personal belongings safe.",
        "sentenceTranslation":  "กรุณาเก็บของใช้ส่วนตัวของคุณให้ปลอดภัย"
    },
    {
        "id":  "pdf-1113",
        "word":  "Boutique",
        "translation":  "ร้านขายเสื้อผ้าแฟชั่นขนาดเล็ก",
        "category":  "Daily Life",
        "ipa":  "/ráːn buː tìk/",
        "sentence":  "She bought a unique dress from a boutique.",
        "sentenceTranslation":  "เธอซื้อชุดที่ไม่เหมือนใครจากร้านบูติก"
    },
    {
        "id":  "pdf-1114",
        "word":  "Buffet",
        "translation":  "อาหารแบบบุฟเฟต์",
        "category":  "Daily Life",
        "ipa":  "/búf fêː/",
        "sentence":  "We had a delicious buffet dinner.",
        "sentenceTranslation":  "เราทานอาหารเย็นแบบบุฟเฟต์ที่อร่อยมาก"
    },
    {
        "id":  "pdf-1115",
        "word":  "Cafeteria",
        "translation":  "โรงอาหาร / ร้านอาหารบริการตนเอง",
        "category":  "Daily Life",
        "ipa":  "/roːŋ ʔaː hǎːn/",
        "sentence":  "The school cafeteria serves lunch every day.",
        "sentenceTranslation":  "โรงอาหารของโรงเรียนมีอาหารกลางวันทุกวัน"
    },
    {
        "id":  "pdf-1116",
        "word":  "Coin",
        "translation":  "เหรียญ (เงิน)",
        "category":  "Daily Life",
        "ipa":  "/rǐan/",
        "sentence":  "I found an old coin on the street.",
        "sentenceTranslation":  "ฉันเจอเหรียญเก่าบนถนน"
    },
    {
        "id":  "pdf-1117",
        "word":  "Comfort",
        "translation":  "ความสะดวกสบาย / ปลอบโยน",
        "category":  "Daily Life",
        "ipa":  "/ˈkʌmfərt/",
        "sentence":  "She found comfort in her warm blanket.",
        "sentenceTranslation":  "เธอพบความผ่อนคลายในผ้าห่มอุ่นๆ ของเธอ"
    },
    {
        "id":  "pdf-1118",
        "word":  "Condition",
        "translation":  "สภาพ / สภาวะ",
        "category":  "Daily Life",
        "ipa":  "/kənˈdɪʃən/",
        "sentence":  "The car is in excellent condition.",
        "sentenceTranslation":  "รถคันนี้อยู่ในสภาพดีเยี่ยม"
    },
    {
        "id":  "pdf-1119",
        "word":  "Condominium / Condo",
        "translation":  "คอนโดมิเนียม",
        "category":  "Daily Life",
        "ipa":  "/ˌkɒndəˈmɪniəm/",
        "sentence":  "They bought a new condo in the city center.",
        "sentenceTranslation":  "พวกเขาซื้อคอนโดใหม่ใจกลางเมือง"
    },
    {
        "id":  "pdf-1120",
        "word":  "Cosmeceutical",
        "translation":  "เวชสำอาง",
        "category":  "Daily Life",
        "ipa":  "/ˌkɒzməˈsuːtɪkəl/",
        "sentence":  "This cosmeceutical product combines cosmetics and pharmaceuticals.",
        "sentenceTranslation":  "ผลิตภัณฑ์เวชสำอางนี้รวมเครื่องสำอางและเภสัชภัณฑ์เข้าด้วยกัน"
    },
    {
        "id":  "pdf-1121",
        "word":  "Cosmetic",
        "translation":  "เครื่องสำอาง",
        "category":  "Daily Life",
        "ipa":  "/kɒzˈmɛtɪk/",
        "sentence":  "She uses various cosmetic products for her skin.",
        "sentenceTranslation":  "เธอใช้ผลิตภัณฑ์เครื่องสำอางหลายชนิดสำหรับผิวของเธอ"
    },
    {
        "id":  "pdf-1122",
        "word":  "Crossroads",
        "translation":  "ทางแยก / ทางตัดกันของถนน",
        "category":  "Daily Life",
        "ipa":  "/ˈkrɔːsroʊdz/",
        "sentence":  "We are at a crossroads regarding our future plans.",
        "sentenceTranslation":  "เรากำลังอยู่ที่ทางแยกเกี่ยวกับแผนการในอนาคตของเรา"
    },
    {
        "id":  "pdf-1123",
        "word":  "Custom",
        "translation":  "ขนบธรรมเนียม / ประเพณี",
        "category":  "Daily Life",
        "ipa":  "/ˈkʌstəm/",
        "sentence":  "It\u0027s a local custom to remove your shoes before entering a house.",
        "sentenceTranslation":  "เป็นธรรมเนียมท้องถิ่นที่จะถอดรองเท้าก่อนเข้าบ้าน"
    },
    {
        "id":  "pdf-1124",
        "word":  "Debt",
        "translation":  "หนี้สิน (เช่น หนี้ส่วนบุคคล)",
        "category":  "Daily Life",
        "ipa":  "/dɛt/",
        "sentence":  "He is working hard to pay off his debt.",
        "sentenceTranslation":  "เขากำลังทำงานหนักเพื่อชำระหนี้ของเขา"
    },
    {
        "id":  "pdf-1125",
        "word":  "Decoration",
        "translation":  "การตกแต่ง / เครื่องประดับ",
        "category":  "Daily Life",
        "ipa":  "/ˌdɛkəˈreɪʃən/",
        "sentence":  "The Christmas decoration made the house look festive.",
        "sentenceTranslation":  "ของตกแต่งคริสต์มาสทำให้บ้านดูรื่นเริง"
    },
    {
        "id":  "pdf-1126",
        "word":  "Delivery fee",
        "translation":  "ค่าบริการจัดส่ง",
        "category":  "Daily Life",
        "ipa":  "/dɪˈlɪvəri fiː/",
        "sentence":  "The total price includes a delivery fee.",
        "sentenceTranslation":  "ราคารวมทั้งหมดรวมค่าจัดส่งแล้ว"
    },
    {
        "id":  "pdf-1127",
        "word":  "Detergent",
        "translation":  "ผงซักฟอก / น้ำยาซักผ้า",
        "category":  "Daily Life",
        "ipa":  "/dɪˈtɜːrdʒənt/",
        "sentence":  "She poured liquid detergent into the washing machine.",
        "sentenceTranslation":  "เธอเทน้ำยาซักผ้าลงในเครื่องซักผ้า"
    },
    {
        "id":  "pdf-1128",
        "word":  "Dinner",
        "translation":  "อาหารค่ำ / มื้อเย็น",
        "category":  "Daily Life",
        "ipa":  "/ˈdɪnər/",
        "sentence":  "We had a lovely dinner at the new restaurant.",
        "sentenceTranslation":  "เราทานอาหารค่ำที่น่ารักที่ร้านอาหารแห่งใหม่"
    },
    {
        "id":  "pdf-1129",
        "word":  "Direction",
        "translation":  "ทิศทาง / เส้นทาง",
        "category":  "Daily Life",
        "ipa":  "/dəˈrɛkʃən/",
        "sentence":  "Can you give me directions to the nearest hospital?",
        "sentenceTranslation":  "คุณช่วยบอกทางไปโรงพยาบาลที่ใกล้ที่สุดได้ไหม"
    },
    {
        "id":  "pdf-1130",
        "word":  "Doze",
        "translation":  "งีบหลับ / สัปหงก",
        "category":  "Daily Life",
        "ipa":  "/doʊz/",
        "sentence":  "He often dozes off in front of the TV after work.",
        "sentenceTranslation":  "เขามักจะงีบหลับไปหน้าทีวีหลังเลิกงาน"
    },
    {
        "id":  "pdf-1131",
        "word":  "Drawer",
        "translation":  "ลิ้นชัก",
        "category":  "Daily Life",
        "ipa":  "/drɔːr/",
        "sentence":  "She kept her socks in the top drawer.",
        "sentenceTranslation":  "เธอเก็บถุงเท้าไว้ในลิ้นชักด้านบน"
    },
    {
        "id":  "pdf-1132",
        "word":  "Earphone",
        "translation":  "หูฟังขนาดเล็ก",
        "category":  "Daily Life",
        "ipa":  "/ˈɪərfəʊn/",
        "sentence":  "I always listen to music with my earphones.",
        "sentenceTranslation":  "ฉันฟังเพลงด้วยหูฟังเสมอ"
    },
    {
        "id":  "pdf-1133",
        "word":  "Electrician",
        "translation":  "ช่างไฟฟ้า",
        "category":  "Daily Life",
        "ipa":  "/ɪˌlɛkˈtrɪʃən/",
        "sentence":  "We called an electrician to fix the wiring.",
        "sentenceTranslation":  "เราเรียกช่างไฟฟ้ามาซ่อมสายไฟ"
    },
    {
        "id":  "pdf-1134",
        "word":  "Emergency",
        "translation":  "เหตุฉุกเฉิน",
        "category":  "Daily Life",
        "ipa":  "/ɪˈmɜːrdʒənsi/",
        "sentence":  "Call 911 in case of an emergency.",
        "sentenceTranslation":  "โทร 911 ในกรณีฉุกเฉิน"
    },
    {
        "id":  "pdf-1135",
        "word":  "Entertainment",
        "translation":  "ความบันเทิง",
        "category":  "Daily Life",
        "ipa":  "/ˌɛntərˈteɪnmənt/",
        "sentence":  "The concert provided great entertainment for everyone.",
        "sentenceTranslation":  "คอนเสิร์ตให้ความบันเทิงที่ยอดเยี่ยมแก่ทุกคน"
    },
    {
        "id":  "pdf-1136",
        "word":  "Errand",
        "translation":  "การออกไปทำธุระส่วนตัว",
        "category":  "Daily Life",
        "ipa":  "/ˈɛrənd/",
        "sentence":  "She went out to run a few errands.",
        "sentenceTranslation":  "เธอออกไปทำธุระสองสามอย่าง"
    },
    {
        "id":  "pdf-1137",
        "word":  "Evening",
        "translation":  "ช่วงเย็น / พลบค่ำ",
        "category":  "Daily Life",
        "ipa":  "/ˈiːvnɪŋ/",
        "sentence":  "We will meet for dinner in the evening.",
        "sentenceTranslation":  "เราจะพบกันเพื่อทานอาหารค่ำในตอนเย็น"
    },
    {
        "id":  "pdf-1138",
        "word":  "Facility",
        "translation":  "สิ่งอำนวยความสะดวก",
        "category":  "Daily Life",
        "ipa":  "/fəˈsɪləti/",
        "sentence":  "The hotel has excellent fitness facilities.",
        "sentenceTranslation":  "โรงแรมมีสิ่งอำนวยความสะดวกด้านฟิตเนสที่ยอดเยี่ยม"
    },
    {
        "id":  "pdf-1139",
        "word":  "Familiar",
        "translation":  "คุ้นเคย / สนิทสนม",
        "category":  "Daily Life",
        "ipa":  "/fəˈmɪliər/",
        "sentence":  "That song sounds very familiar to me.",
        "sentenceTranslation":  "เพลงนั้นฟังดูคุ้นหูมากสำหรับฉัน"
    },
    {
        "id":  "pdf-1140",
        "word":  "Fastener / Zipper",
        "translation":  "ซิปรูด / ตัวยึดล็อก",
        "category":  "Daily Life",
        "ipa":  "/ˈfæstənər / /ˈzɪpər/",
        "sentence":  "The zipper on my jacket is broken.",
        "sentenceTranslation":  "ซิปบนเสื้อแจ็คเก็ตของฉันเสีย"
    },
    {
        "id":  "pdf-1141",
        "word":  "Faucet / Tap",
        "translation":  "ก๊อกน้ำ",
        "category":  "Daily Life",
        "ipa":  "/ˈfɔːsɪt / /tæp/",
        "sentence":  "Please turn off the faucet completely.",
        "sentenceTranslation":  "กรุณาปิดก๊อกน้ำให้สนิท"
    },
    {
        "id":  "pdf-1142",
        "word":  "Flat",
        "translation":  "ห้องชุด / ห้องพัก (สไตล์อังกฤษ)",
        "category":  "Daily Life",
        "ipa":  "/flæt/",
        "sentence":  "My tire is flat, I need to change it.",
        "sentenceTranslation":  "ยางรถของฉันแบน ฉันต้องเปลี่ยนมัน"
    },
    {
        "id":  "pdf-1143",
        "word":  "Flight",
        "translation":  "เที่ยวบิน",
        "category":  "Daily Life",
        "ipa":  "/flaɪt/",
        "sentence":  "Our flight was delayed due to bad weather.",
        "sentenceTranslation":  "เที่ยวบินของเราล่าช้าเนื่องจากสภาพอากาศไม่ดี"
    },
    {
        "id":  "pdf-1144",
        "word":  "Floor",
        "translation":  "ชั้น (ของตึก) / พื้นห้อง",
        "category":  "Daily Life",
        "ipa":  "/flɔːr/",
        "sentence":  "The office is on the third floor.",
        "sentenceTranslation":  "สำนักงานอยู่บนชั้นสาม"
    },
    {
        "id":  "pdf-1145",
        "word":  "Gas station / Petrol station",
        "translation":  "ปั๊มน้ำมัน",
        "category":  "Daily Life",
        "ipa":  "/ˈɡæs steɪʃən / /ˈpɛtrəl steɪʃən/",
        "sentence":  "We need to stop at a gas station for fuel.",
        "sentenceTranslation":  "เราต้องแวะที่ปั๊มน้ำมันเพื่อเติมเชื้อเพลิง"
    },
    {
        "id":  "pdf-1146",
        "word":  "Gate",
        "translation":  "ประตูรั้ว / ประตูทางเข้าขนาดใหญ่",
        "category":  "Daily Life",
        "ipa":  "/ɡeɪt/",
        "sentence":  "Please proceed to gate B7 for boarding.",
        "sentenceTranslation":  "กรุณาไปที่ประตู B7 เพื่อขึ้นเครื่อง"
    },
    {
        "id":  "pdf-1147",
        "word":  "Gown",
        "translation":  "ชุดครุย / ชุดกระโปรงยาว",
        "category":  "Daily Life",
        "ipa":  "/ɡaʊn/",
        "sentence":  "She wore a beautiful gown to the ball.",
        "sentenceTranslation":  "เธอสวมชุดราตรีที่สวยงามไปงานเต้นรำ"
    },
    {
        "id":  "pdf-1148",
        "word":  "Grocery store",
        "translation":  "ร้านขายของชำ",
        "category":  "Daily Life",
        "ipa":  "/ˈɡroʊsəri stɔːr/",
        "sentence":  "I need to go to the grocery store to buy some food.",
        "sentenceTranslation":  "ฉันต้องไปร้านขายของชำเพื่อซื้ออาหาร"
    },
    {
        "id":  "pdf-1149",
        "word":  "Guest",
        "translation":  "แขก / ผู้มาเยือน",
        "category":  "Daily Life",
        "ipa":  "/ɡɛst/",
        "sentence":  "We are expecting a guest for dinner tonight.",
        "sentenceTranslation":  "เรากำลังรอแขกสำหรับอาหารค่ำคืนนี้"
    },
    {
        "id":  "pdf-1150",
        "word":  "Haircut",
        "translation":  "การตัดผม",
        "category":  "Daily Life",
        "ipa":  "/ˈhɛərkʌt/",
        "sentence":  "I need a haircut next week.",
        "sentenceTranslation":  "ฉันต้องตัดผมสัปดาห์หน้า"
    },
    {
        "id":  "pdf-1151",
        "word":  "Hanger",
        "translation":  "ไม้แขวนเสื้อ",
        "category":  "Daily Life",
        "ipa":  "/ˈhæŋər/",
        "sentence":  "Please put your coat on a hanger.",
        "sentenceTranslation":  "กรุณาแขวนเสื้อโค้ทของคุณบนไม้แขวนเสื้อ"
    },
    {
        "id":  "pdf-1152",
        "word":  "Highway",
        "translation":  "ทางหลวง / ถนนสายหลัก",
        "category":  "Daily Life",
        "ipa":  "/ˈhaɪweɪ/",
        "sentence":  "The highway was busy with traffic.",
        "sentenceTranslation":  "ทางหลวงมีการจราจรหนาแน่น"
    },
    {
        "id":  "pdf-1153",
        "word":  "Home delivery",
        "translation":  "การบริการจัดส่งถึงบ้าน",
        "category":  "Daily Life",
        "ipa":  "/hoʊm dɪˈlɪvəri/",
        "sentence":  "Many restaurants offer home delivery now.",
        "sentenceTranslation":  "ร้านอาหารหลายแห่งเสนอบริการส่งถึงบ้านตอนนี้"
    },
    {
        "id":  "pdf-1154",
        "word":  "Host",
        "translation":  "เจ้าบ้าน / เจ้าภาพ",
        "category":  "Daily Life",
        "ipa":  "/hoʊst/",
        "sentence":  "He was the host of the party.",
        "sentenceTranslation":  "เขาเป็นเจ้าภาพงานเลี้ยง"
    },
    {
        "id":  "pdf-1155",
        "word":  "Housework",
        "translation":  "งานบ้าน",
        "category":  "Daily Life",
        "ipa":  "/ˈhaʊswɜːrk/",
        "sentence":  "I finished all my housework this morning.",
        "sentenceTranslation":  "ฉันทำงานบ้านทั้งหมดเสร็จแล้วเมื่อเช้านี้"
    },
    {
        "id":  "pdf-1156",
        "word":  "ID card",
        "translation":  "บัตรประจำตัวประชาชน",
        "category":  "Daily Life",
        "ipa":  "/ˌaɪ ˈdiː kɑːrd/",
        "sentence":  "You need to show your ID card to enter the building.",
        "sentenceTranslation":  "คุณต้องแสดงบัตรประจำตัวเพื่อเข้าอาคาร"
    },
    {
        "id":  "pdf-1157",
        "word":  "Ingredient",
        "translation":  "ส่วนผสม / วัตถุดิบปรุงอาหาร",
        "category":  "Daily Life",
        "ipa":  "/ɪnˈɡriːdiənt/",
        "sentence":  "What are the main ingredients in this recipe?",
        "sentenceTranslation":  "ส่วนผสมหลักในสูตรนี้คืออะไร?"
    },
    {
        "id":  "pdf-1158",
        "word":  "Invitation",
        "translation":  "จดหมายเชิญ / การเชื้อเชิญ",
        "category":  "Daily Life",
        "ipa":  "/ˌɪnvɪˈteɪʃən/",
        "sentence":  "We received an invitation to their wedding.",
        "sentenceTranslation":  "เราได้รับการ์ดเชิญไปงานแต่งงานของพวกเขา"
    },
    {
        "id":  "pdf-1159",
        "word":  "Keycard",
        "translation":  "คีย์การ์ดเปิดประตู",
        "category":  "Daily Life",
        "ipa":  "/ˈkiːkɑːrd/",
        "sentence":  "Please use your keycard to open the door.",
        "sentenceTranslation":  "กรุณาใช้คีย์การ์ดของคุณเพื่อเปิดประตู"
    },
    {
        "id":  "pdf-1160",
        "word":  "Laundry detergent",
        "translation":  "น้ำยาซักผ้า",
        "category":  "Daily Life",
        "ipa":  "/ˈlɔːndri dɪˈtɜːrdʒənt/",
        "sentence":  "I need to buy more laundry detergent.",
        "sentenceTranslation":  "ฉันต้องซื้อผงซักฟอกเพิ่ม"
    },
    {
        "id":  "pdf-1161",
        "word":  "Lawn",
        "translation":  "สนามหญ้า",
        "category":  "Daily Life",
        "ipa":  "/lɔːn/",
        "sentence":  "The children are playing on the lawn.",
        "sentenceTranslation":  "เด็กๆ กำลังเล่นอยู่บนสนามหญ้า"
    },
    {
        "id":  "pdf-1162",
        "word":  "Leftover",
        "translation":  "อาหารที่เหลือจากมื้อก่อน",
        "category":  "Daily Life",
        "ipa":  "/lɛftˌoʊvər/",
        "sentence":  "Please put the leftovers in the fridge.",
        "sentenceTranslation":  "กรุณาเก็บอาหารที่เหลือไว้ในตู้เย็นด้วย"
    },
    {
        "id":  "pdf-1163",
        "word":  "Local",
        "translation":  "คนท้องถิ่น / พื้นเมือง",
        "category":  "Daily Life",
        "ipa":  "/ˈloʊkəl/",
        "sentence":  "We enjoyed trying the local cuisine.",
        "sentenceTranslation":  "เรามีความสุขกับการลองอาหารท้องถิ่น"
    },
    {
        "id":  "pdf-1164",
        "word":  "Lock",
        "translation":  "แม่กุญแจ / ล็อกประตู",
        "category":  "Daily Life",
        "ipa":  "/lɒk/",
        "sentence":  "Don\u0027t forget to lock the door before you leave.",
        "sentenceTranslation":  "อย่าลืมล็อคประตูก่อนออกไปนะ"
    },
    {
        "id":  "pdf-1165",
        "word":  "Lounge",
        "translation":  "ห้องนั่งเล่น / ห้องพักผ่อน",
        "category":  "Daily Life",
        "ipa":  "/laʊndʒ/",
        "sentence":  "We waited for our flight in the airport lounge.",
        "sentenceTranslation":  "เรารอเที่ยวบินของเราในห้องรับรองของสนามบิน"
    },
    {
        "id":  "pdf-1166",
        "word":  "Luggage rack",
        "translation":  "ชั้นวางกระเป๋าเดินทาง",
        "category":  "Daily Life",
        "ipa":  "/ˈlʌɡɪdʒ ræk/",
        "sentence":  "Please place your bags on the luggage rack.",
        "sentenceTranslation":  "กรุณาวางกระเป๋าของคุณบนชั้นวางกระเป๋าเดินทาง"
    },
    {
        "id":  "pdf-1167",
        "word":  "Maintenance fee",
        "translation":  "ค่าส่วนกลาง / ค่าบำรุงรักษา",
        "category":  "Daily Life",
        "ipa":  "/ˈmeɪntənəns fiː/",
        "sentence":  "The apartment has a monthly maintenance fee.",
        "sentenceTranslation":  "อพาร์ตเมนต์มีค่าบำรุงรักษารายเดือน"
    },
    {
        "id":  "pdf-1168",
        "word":  "Market",
        "translation":  "ตลาด",
        "category":  "Daily Life",
        "ipa":  "/ˈmɑːrkɪt/",
        "sentence":  "Let\u0027s go to the fresh market to buy some vegetables.",
        "sentenceTranslation":  "ไปตลาดสดซื้อผักกันเถอะ"
    },
    {
        "id":  "pdf-1169",
        "word":  "Mirror",
        "translation":  "กระจกเงา",
        "category":  "Daily Life",
        "ipa":  "/ˈmɪrər/",
        "sentence":  "She checked her reflection in the mirror.",
        "sentenceTranslation":  "เธอมองเงาสะท้อนของตัวเองในกระจก"
    },
    {
        "id":  "pdf-1170",
        "word":  "Monthly",
        "translation":  "รายเดือน / ทุกๆ เดือน",
        "category":  "Daily Life",
        "ipa":  "/ˈmʌnθli/",
        "sentence":  "The subscription requires a monthly payment.",
        "sentenceTranslation":  "การสมัครสมาชิกต้องชำระค่าบริการรายเดือน"
    },
    {
        "id":  "pdf-1171",
        "word":  "Morning",
        "translation":  "ช่วงเช้า",
        "category":  "Daily Life",
        "ipa":  "/ˈmɔːrnɪŋ/",
        "sentence":  "I like to drink coffee every morning.",
        "sentenceTranslation":  "ฉันชอบดื่มกาแฟทุกตอนเช้า"
    },
    {
        "id":  "pdf-1172",
        "word":  "Nap",
        "translation":  "นอนกลางวัน / งีบหลับสั้นๆ",
        "category":  "Daily Life",
        "ipa":  "/næp/",
        "sentence":  "I\u0027m going to take a short nap after lunch.",
        "sentenceTranslation":  "ฉันจะไปงีบหลับสั้นๆ หลังอาหารกลางวัน"
    },
    {
        "id":  "pdf-1173",
        "word":  "Nightlife",
        "translation":  "ชีวิตยามค่ำคืน / การเที่ยวกลางคืน",
        "category":  "Daily Life",
        "ipa":  "/ˈnaɪtlaɪf/",
        "sentence":  "Bangkok is famous for its vibrant nightlife.",
        "sentenceTranslation":  "กรุงเทพฯ มีชื่อเสียงเรื่องชีวิตยามค่ำคืนที่คึกคัก"
    },
    {
        "id":  "pdf-1174",
        "word":  "Outfit",
        "translation":  "ชุดเสื้อผ้าที่แต่งกาย",
        "category":  "Daily Life",
        "ipa":  "/ˈaʊtfɪt/",
        "sentence":  "She wore a stylish outfit to the party.",
        "sentenceTranslation":  "เธอสวมชุดเสื้อผ้าที่ดูดีไปงานปาร์ตี้"
    },
    {
        "id":  "pdf-1175",
        "word":  "Overpass",
        "translation":  "สะพานลอยคนข้าม",
        "category":  "Daily Life",
        "ipa":  "/ˈoʊvərpæs/",
        "sentence":  "We used the overpass to cross the busy road safely.",
        "sentenceTranslation":  "เราใช้สะพานลอยเพื่อข้ามถนนที่วุ่นวายได้อย่างปลอดภัย"
    },
    {
        "id":  "pdf-1176",
        "word":  "Parking lot",
        "translation":  "ลานจอดรถ",
        "category":  "Daily Life",
        "ipa":  "/ˈpɑːrkɪŋ lɒt/",
        "sentence":  "The parking lot was full, so we had to park further away.",
        "sentenceTranslation":  "ที่จอดรถเต็ม เราเลยต้องไปจอดไกลออกไป"
    },
    {
        "id":  "pdf-1177",
        "word":  "Passenger",
        "translation":  "ผู้โดยสาร",
        "category":  "Daily Life",
        "ipa":  "/pʰûː.dɔ̄ːj.sǎn/",
        "sentence":  "The passenger boarded the train.",
        "sentenceTranslation":  "ผู้โดยสารขึ้นรถไฟ"
    },
    {
        "id":  "pdf-1178",
        "word":  "Pavement",
        "translation":  "พื้นผิวถนน / ทางเดินเท้า",
        "category":  "Daily Life",
        "ipa":  "/tʰāːŋ.tʰáːw/",
        "sentence":  "She walked along the pavement.",
        "sentenceTranslation":  "เธอเดินไปตามทางเท้า"
    },
    {
        "id":  "pdf-1179",
        "word":  "Pet",
        "translation":  "สัตว์เลี้ยง",
        "category":  "Daily Life",
        "ipa":  "/sàt.líːaŋ/",
        "sentence":  "Do you have any pets?",
        "sentenceTranslation":  "คุณมีสัตว์เลี้ยงไหม"
    },
    {
        "id":  "pdf-1180",
        "word":  "Pillowcase",
        "translation":  "ปลอกหมอน",
        "category":  "Daily Life",
        "ipa":  "/plɔ̀k.mɔ̌ːn/",
        "sentence":  "I need to change the pillowcase.",
        "sentenceTranslation":  "ฉันต้องเปลี่ยนปลอกหมอน"
    },
    {
        "id":  "pdf-1181",
        "word":  "Plumber",
        "translation":  "ช่างประปา",
        "category":  "Daily Life",
        "ipa":  "/tɕʰâːŋ.prà.paː/",
        "sentence":  "We called a plumber to fix the leak.",
        "sentenceTranslation":  "เราเรียกช่างประปามาซ่อมท่อรั่ว"
    },
    {
        "id":  "pdf-1182",
        "word":  "Power bank",
        "translation":  "แบตเตอรี่สำรองพกพา",
        "category":  "Daily Life",
        "ipa":  "/pʰāːw.wɤ̂ː.bɛ̄ŋ/",
        "sentence":  "Don\u0027t forget your power bank for the trip.",
        "sentenceTranslation":  "อย่าลืมพาวเวอร์แบงค์ของคุณสำหรับการเดินทาง"
    },
    {
        "id":  "pdf-1183",
        "word":  "Property",
        "translation":  "ทรัพย์สิน / ที่ดินผืนดิน",
        "category":  "Daily Life",
        "ipa":  "/sáp.sǐn/",
        "sentence":  "The property was inherited by his son.",
        "sentenceTranslation":  "ทรัพย์สินนั้นตกทอดแก่ลูกชายของเขา"
    },
    {
        "id":  "pdf-1184",
        "word":  "Receipt",
        "translation":  "ใบเสร็จ",
        "category":  "Daily Life",
        "ipa":  "/baj.sèt/",
        "sentence":  "Please keep your receipt.",
        "sentenceTranslation":  "กรุณาเก็บใบเสร็จของคุณไว้"
    },
    {
        "id":  "pdf-1185",
        "word":  "Refrigerator / Fridge",
        "translation":  "ตู้เย็น",
        "category":  "Daily Life",
        "ipa":  "/tûː.jen/",
        "sentence":  "Put the milk back in the fridge.",
        "sentenceTranslation":  "เอา​นม​กลับ​ไป​ใส่​ใน​ตู้เย็น"
    },
    {
        "id":  "pdf-1186",
        "word":  "Relaxation",
        "translation":  "การพักผ่อนหย่อนใจ",
        "category":  "Daily Life",
        "ipa":  "/kaːn.pʰɔ̀n.kʰlāːj/",
        "sentence":  "He needs some relaxation after work.",
        "sentenceTranslation":  "เขาต้องการการผ่อนคลายหลังเลิกงาน"
    },
    {
        "id":  "pdf-1187",
        "word":  "Rent",
        "translation":  "ค่าเช่า / เช่าบ้าน",
        "category":  "Daily Life",
        "ipa":  "/tɕʰâw/",
        "sentence":  "They decided to rent an apartment.",
        "sentenceTranslation":  "พวกเขาตัดสินใจเช่าอพาร์ตเมนต์"
    },
    {
        "id":  "pdf-1188",
        "word":  "Repair",
        "translation":  "ซ่อมแซม",
        "category":  "Daily Life",
        "ipa":  "/sɔ̂m.sɛːm/",
        "sentence":  "The mechanic will repair the car.",
        "sentenceTranslation":  "ช่างเครื่องจะซ่อมรถ"
    },
    {
        "id":  "pdf-1189",
        "word":  "Resident",
        "translation":  "ผู้อยู่อาศัย",
        "category":  "Daily Life",
        "ipa":  "/pʰûː.jùː.ʔāː.sǎj/",
        "sentence":  "All residents must follow the rules.",
        "sentenceTranslation":  "ผู้อยู่อาศัยทุกคนต้องปฏิบัติตามกฎ"
    },
    {
        "id":  "pdf-1190",
        "word":  "Roof",
        "translation":  "หลังคาบ้าน",
        "category":  "Daily Life",
        "ipa":  "/lǎŋ.kʰāː/",
        "sentence":  "The roof needs to be repaired.",
        "sentenceTranslation":  "หลังคาต้องได้รับการซ่อมแซม"
    },
    {
        "id":  "pdf-1191",
        "word":  "Row",
        "translation":  "แถว / แนว",
        "category":  "Daily Life",
        "ipa":  "/tʰɛ̌w/",
        "sentence":  "Please stand in a single row.",
        "sentenceTranslation":  "กรุณายืนเรียงแถว"
    },
    {
        "id":  "pdf-1192",
        "word":  "Shampood",
        "translation":  "ยาสระผม",
        "category":  "Daily Life",
        "ipa":  "/ʃæmˈpuːd/",
        "sentence":  "She had just shampood her hair.",
        "sentenceTranslation":  "เธอเพิ่งสระผมของเธอไป"
    },
    {
        "id":  "pdf-1193",
        "word":  "Shower",
        "translation":  "การอาบน้ำด้วยฝักบัว / ฝักบัว",
        "category":  "Daily Life",
        "ipa":  "/ˈʃaʊər/",
        "sentence":  "I need to take a shower.",
        "sentenceTranslation":  "ฉันต้องไปอาบน้ำ"
    },
    {
        "id":  "pdf-1194",
        "word":  "Soap",
        "translation":  "สบู่",
        "category":  "Daily Life",
        "ipa":  "/soʊp/",
        "sentence":  "Please pass me the soap.",
        "sentenceTranslation":  "กรุณาส่งสบู่ให้ฉันหน่อย"
    },
    {
        "id":  "pdf-1195",
        "word":  "Street",
        "translation":  "ถนน / ตรอกซอกซอย",
        "category":  "Daily Life",
        "ipa":  "/striːt/",
        "sentence":  "The children were playing in the street.",
        "sentenceTranslation":  "เด็กๆ กำลังเล่นกันอยู่บนถนน"
    },
    {
        "id":  "pdf-1196",
        "word":  "Takeaway",
        "translation":  "อาหารสั่งกลับบ้าน",
        "category":  "Daily Life",
        "ipa":  "/ˈteɪkəweɪ/",
        "sentence":  "Let\u0027s order some Chinese takeaway tonight.",
        "sentenceTranslation":  "คืนนี้เรามาสั่งอาหารจีนกลับบ้านกันเถอะ"
    },
    {
        "id":  "pdf-1197",
        "word":  "Toothbrush",
        "translation":  "แปรงสีฟัน",
        "category":  "Daily Life",
        "ipa":  "/ˈtuːθbrʌʃ/",
        "sentence":  "Don\u0027t forget to pack your toothbrush.",
        "sentenceTranslation":  "อย่าลืมเก็บแปรงสีฟันของคุณนะ"
    },
    {
        "id":  "pdf-1198",
        "word":  "Toothpaste",
        "translation":  "ยาสีฟัน",
        "category":  "Daily Life",
        "ipa":  "/ˈtuːθpeɪst/",
        "sentence":  "I need to buy a new tube of toothpaste.",
        "sentenceTranslation":  "ฉันต้องซื้อยาสีฟันหลอดใหม่"
    },
    {
        "id":  "pdf-1199",
        "word":  "Towel",
        "translation":  "ผ้าเช็ดตัว",
        "category":  "Daily Life",
        "ipa":  "/ˈtaʊəl/",
        "sentence":  "Could you hand me a clean towel?",
        "sentenceTranslation":  "ช่วยส่งผ้าเช็ดตัวสะอาดให้ฉันหน่อยได้ไหม"
    },
    {
        "id":  "pdf-1200",
        "word":  "Umbrella",
        "translation":  "ร่ม",
        "category":  "Daily Life",
        "ipa":  "/ʌmˈbrɛlə/",
        "sentence":  "It\u0027s raining, so take an umbrella.",
        "sentenceTranslation":  "ฝนกำลังตก เอาพกร่มไปด้วยนะ"
    },
    {
        "id":  "pdf-1201",
        "word":  "Ant",
        "translation":  "มด",
        "category":  "Animals",
        "ipa":  "/ænt/",
        "sentence":  "An ant is a tiny insect.",
        "sentenceTranslation":  "มดเป็นแมลงตัวเล็กๆ"
    },
    {
        "id":  "pdf-1202",
        "word":  "Alligator",
        "translation":  "จระเข้ตระกูลอเมริกา (ตีนเป็ด)",
        "category":  "Animals",
        "ipa":  "/ˈælɪɡeɪtər/",
        "sentence":  "We saw an alligator in the swamp.",
        "sentenceTranslation":  "เราเห็นจระเข้ในหนองน้ำ"
    },
    {
        "id":  "pdf-1203",
        "word":  "Ape",
        "translation":  "ลิงไม่มีหาง (เช่น ชิมแปนซี อุรังอุตัง)",
        "category":  "Animals",
        "ipa":  "/eɪp/",
        "sentence":  "Apes are highly intelligent animals.",
        "sentenceTranslation":  "ลิงใหญ่เป็นสัตว์ที่ฉลาดมาก"
    },
    {
        "id":  "pdf-1204",
        "word":  "Bat",
        "translation":  "ค้างคาว",
        "category":  "Animals",
        "ipa":  "/bæt/",
        "sentence":  "Bats are nocturnal animals.",
        "sentenceTranslation":  "ค้างคาวเป็นสัตว์ออกหากินกลางคืน"
    },
    {
        "id":  "pdf-1205",
        "word":  "Bear",
        "translation":  "หมี",
        "category":  "Animals",
        "ipa":  "/bɛər/",
        "sentence":  "A bear hibernates during winter.",
        "sentenceTranslation":  "หมีจะจำศีลในช่วงฤดูหนาว"
    },
    {
        "id":  "pdf-1206",
        "word":  "Bee",
        "translation":  "ผึ้ง",
        "category":  "Animals",
        "ipa":  "/biː/",
        "sentence":  "The bee collected nectar from the flower.",
        "sentenceTranslation":  "ผึ้งเก็บน้ำหวานจากดอกไม้"
    },
    {
        "id":  "pdf-1207",
        "word":  "Beetle",
        "translation":  "ด้วง / แมลงปีกแข็ง",
        "category":  "Animals",
        "ipa":  "/ˈbiːtl/",
        "sentence":  "A beetle crawled across the leaf.",
        "sentenceTranslation":  "ด้วงคลานข้ามใบไม้ไป"
    },
    {
        "id":  "pdf-1208",
        "word":  "Bird",
        "translation":  "นก",
        "category":  "Animals",
        "ipa":  "/bɜːrd/",
        "sentence":  "The little bird sang a beautiful song.",
        "sentenceTranslation":  "นกตัวน้อยร้องเพลงเพราะมาก"
    },
    {
        "id":  "pdf-1209",
        "word":  "Buffalo",
        "translation":  "ควาย",
        "category":  "Animals",
        "ipa":  "/ˈbʌfəloʊ/",
        "sentence":  "A herd of buffalo grazed in the field.",
        "sentenceTranslation":  "ฝูงควายกำลังเล็มหญ้าอยู่ในทุ่ง"
    },
    {
        "id":  "pdf-1210",
        "word":  "Butterfly",
        "translation":  "ผีเสื้อ",
        "category":  "Animals",
        "ipa":  "/ˈbʌtərflaɪ/",
        "sentence":  "A colorful butterfly landed on the flower.",
        "sentenceTranslation":  "ผีเสื้อหลากสีสันเกาะอยู่บนดอกไม้"
    },
    {
        "id":  "pdf-1211",
        "word":  "Camel",
        "translation":  "อูฐ",
        "category":  "Animals",
        "ipa":  "/ˈkæməl/",
        "sentence":  "Camels can travel long distances without water.",
        "sentenceTranslation":  "อูฐสามารถเดินทางได้ไกลโดยไม่ต้องดื่มน้ำ"
    },
    {
        "id":  "pdf-1212",
        "word":  "Cat",
        "translation":  "แมว",
        "category":  "Animals",
        "ipa":  "/kæt/",
        "sentence":  "My cat loves to play with yarn.",
        "sentenceTranslation":  "แมวของฉันชอบเล่นลูกไหมพรม"
    },
    {
        "id":  "pdf-1213",
        "word":  "Centipede",
        "translation":  "ตะขาบ",
        "category":  "Animals",
        "ipa":  "/ˈsɛntɪpiːd/",
        "sentence":  "Beware of centipedes in humid places.",
        "sentenceTranslation":  "ระวังตะขาบในที่ชื้นแฉะ"
    },
    {
        "id":  "pdf-1214",
        "word":  "Chameleon",
        "translation":  "กิ้งก่าเปลี่ยนสี",
        "category":  "Animals",
        "ipa":  "/kəˈmiːliən/",
        "sentence":  "A chameleon can change its skin color.",
        "sentenceTranslation":  "กิ้งก่าคาเมเลี่ยนสามารถเปลี่ยนสีผิวได้"
    },
    {
        "id":  "pdf-1215",
        "word":  "Cheetah",
        "translation":  "เสือชีตาห์",
        "category":  "Animals",
        "ipa":  "/ˈtʃiːtə/",
        "sentence":  "The cheetah is the fastest land animal.",
        "sentenceTranslation":  "เสือชีตาห์เป็นสัตว์บกที่วิ่งเร็วที่สุด"
    },
    {
        "id":  "pdf-1216",
        "word":  "Chicken",
        "translation":  "ไก่",
        "category":  "Animals",
        "ipa":  "/ˈtʃɪkɪn/",
        "sentence":  "The farmer fed his chickens in the morning.",
        "sentenceTranslation":  "ชาวนาให้อาหารไก่ของเขาในตอนเช้า"
    },
    {
        "id":  "pdf-1217",
        "word":  "Chimpanzee",
        "translation":  "ลิงชิมแปนซี",
        "category":  "Animals",
        "ipa":  "/ˌtʃɪmpænˈziː/",
        "sentence":  "Chimpanzees are highly intelligent primates.",
        "sentenceTranslation":  "ลิงชิมแปนซีเป็นสัตว์เลี้ยงลูกด้วยนมจำพวกไพรเมตที่ฉลาดมาก"
    },
    {
        "id":  "pdf-1218",
        "word":  "Cockroach",
        "translation":  "แมลงสาบ",
        "category":  "Animals",
        "ipa":  "/ˈkɒkrəʊtʃ/",
        "sentence":  "I saw a cockroach scuttling across the kitchen floor.",
        "sentenceTranslation":  "ฉันเห็นแมลงสาบวิ่งไปมาบนพื้นห้องครัว"
    },
    {
        "id":  "pdf-1219",
        "word":  "Cow",
        "translation":  "วัว (ตัวเมีย)",
        "category":  "Animals",
        "ipa":  "/kaʊ/",
        "sentence":  "The cow mooed loudly in the field.",
        "sentenceTranslation":  "วัวส่งเสียงร้องดังลั่นในทุ่ง"
    },
    {
        "id":  "pdf-1220",
        "word":  "Crab",
        "translation":  "ปู",
        "category":  "Animals",
        "ipa":  "/kræb/",
        "sentence":  "We caught a crab at the beach.",
        "sentenceTranslation":  "เราจับปูได้ตัวหนึ่งที่ชายหาด"
    },
    {
        "id":  "pdf-1221",
        "word":  "Crocodile",
        "translation":  "จระเข้",
        "category":  "Animals",
        "ipa":  "/ˈkrɒkədaɪl/",
        "sentence":  "The crocodile lay still by the riverbank.",
        "sentenceTranslation":  "จระเขานอนนิ่งอยู่ริมตลิ่งแม่น้ำ"
    },
    {
        "id":  "pdf-1222",
        "word":  "Crow",
        "translation":  "อีกา",
        "category":  "Animals",
        "ipa":  "/kroʊ/",
        "sentence":  "A black crow is sitting on the tree.",
        "sentenceTranslation":  "มีอีกาสีดำตัวหนึ่งกำลังเกาะอยู่บนต้นไม้"
    },
    {
        "id":  "pdf-1223",
        "word":  "Deer",
        "translation":  "กวาง",
        "category":  "Animals",
        "ipa":  "/dɪr/",
        "sentence":  "We saw a deer in the forest.",
        "sentenceTranslation":  "เราเห็นกวางตัวหนึ่งในป่า"
    },
    {
        "id":  "pdf-1224",
        "word":  "Dog",
        "translation":  "สุนัข / หมา",
        "category":  "Animals",
        "ipa":  "/dɔːɡ/",
        "sentence":  "My dog loves to play fetch.",
        "sentenceTranslation":  "สุนัขของฉันชอบเล่นคาบของ"
    },
    {
        "id":  "pdf-1225",
        "word":  "Dolphin",
        "translation":  "โลมา",
        "category":  "Animals",
        "ipa":  "/ˈdɑːlfɪn/",
        "sentence":  "Dolphins are very intelligent animals.",
        "sentenceTranslation":  "โลมาเป็นสัตว์ที่ฉลาดมาก"
    },
    {
        "id":  "pdf-1226",
        "word":  "Donkey",
        "translation":  "ลา",
        "category":  "Animals",
        "ipa":  "/ˈdɑːŋki/",
        "sentence":  "The donkey carried the heavy bags.",
        "sentenceTranslation":  "ลาตัวนั้นแบกกระเป๋าหนักหลายใบ"
    },
    {
        "id":  "pdf-1227",
        "word":  "Dragonfly",
        "translation":  "แมลงปอ",
        "category":  "Animals",
        "ipa":  "/ˈdræɡ.ən.flaɪ/",
        "sentence":  "The dragonfly hovered over the pond.",
        "sentenceTranslation":  "แมลงปอบินวนอยู่เหนือสระน้ำ"
    },
    {
        "id":  "pdf-1228",
        "word":  "Duck",
        "translation":  "เป็ด",
        "category":  "Animals",
        "ipa":  "/dʌk/",
        "sentence":  "The duck swam across the lake.",
        "sentenceTranslation":  "เป็ดว่ายน้ำข้ามทะเลสาบ"
    },
    {
        "id":  "pdf-1229",
        "word":  "Eagle",
        "translation":  "นกอินทรี",
        "category":  "Animals",
        "ipa":  "/ˈiː.ɡəl/",
        "sentence":  "The eagle soared high in the sky.",
        "sentenceTranslation":  "นกอินทรีบินโฉบอยู่บนท้องฟ้า"
    },
    {
        "id":  "pdf-1230",
        "word":  "Earthworm",
        "translation":  "ไส้เดือน",
        "category":  "Animals",
        "ipa":  "/ˈɜːθ.wɜːm/",
        "sentence":  "The earthworm burrowed into the soil.",
        "sentenceTranslation":  "ไส้เดือนชอนไชลงไปในดิน"
    },
    {
        "id":  "pdf-1231",
        "word":  "Elephant",
        "translation":  "ช้าง",
        "category":  "Animals",
        "ipa":  "/ˈel.ɪ.fənt/",
        "sentence":  "The elephant drank water with its trunk.",
        "sentenceTranslation":  "ช้างดื่มน้ำด้วยงวงของมัน"
    },
    {
        "id":  "pdf-1232",
        "word":  "Firefly",
        "translation":  "หิ่งห้อย",
        "category":  "Animals",
        "ipa":  "/ˈfaɪə.flaɪ/",
        "sentence":  "The firefly glowed in the dark night.",
        "sentenceTranslation":  "หิ่งห้อยส่องแสงในคืนที่มืดมิด"
    },
    {
        "id":  "pdf-1233",
        "word":  "Fish",
        "translation":  "ปลา",
        "category":  "Animals",
        "ipa":  "/fɪʃ/",
        "sentence":  "The fish swam deep in the ocean.",
        "sentenceTranslation":  "ปลาว่ายอยู่ในส่วนลึกของมหาสมุทร"
    },
    {
        "id":  "pdf-1234",
        "word":  "Flamingo",
        "translation":  "นกฟลามิงโก",
        "category":  "Animals",
        "ipa":  "/fləˈmɪŋ.ɡəʊ/",
        "sentence":  "The flamingo stood on one leg.",
        "sentenceTranslation":  "นกฟลามิงโกยืนขาเดียว"
    },
    {
        "id":  "pdf-1235",
        "word":  "Fly",
        "translation":  "แมลงวัน",
        "category":  "Animals",
        "ipa":  "/flaɪ/",
        "sentence":  "The fly buzzed around the food.",
        "sentenceTranslation":  "แมลงวันบินหึ่งๆ อยู่รอบอาหาร"
    },
    {
        "id":  "pdf-1236",
        "word":  "Fox",
        "translation":  "สุนัขจิ้งจอก",
        "category":  "Animals",
        "ipa":  "/fɒks/",
        "sentence":  "The fox ran quickly into the woods.",
        "sentenceTranslation":  "สุนัขจิ้งจอกวิ่งหายเข้าไปในป่าอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-1237",
        "word":  "Frog",
        "translation":  "กบ",
        "category":  "Animals",
        "ipa":  "/frɒɡ/",
        "sentence":  "The green frog jumped into the pond.",
        "sentenceTranslation":  "กบสีเขียวกระโดดลงไปในสระน้ำ"
    },
    {
        "id":  "pdf-1238",
        "word":  "Giraffe",
        "translation":  "ยีราฟ",
        "category":  "Animals",
        "ipa":  "/dʒɪˈrɑːf/",
        "sentence":  "The giraffe has a very long neck.",
        "sentenceTranslation":  "ยีราฟมีคอที่ยาวมาก"
    },
    {
        "id":  "pdf-1239",
        "word":  "Goat",
        "translation":  "แพะ",
        "category":  "Animals",
        "ipa":  "/ɡoʊt/",
        "sentence":  "The goat is eating grass on the hill.",
        "sentenceTranslation":  "แพะกำลังกินหญ้าอยู่บนเนินเขา"
    },
    {
        "id":  "pdf-1240",
        "word":  "Goose",
        "translation":  "ห่าน",
        "category":  "Animals",
        "ipa":  "/ɡuːs/",
        "sentence":  "A white goose walked across the grass.",
        "sentenceTranslation":  "ห่านสีขาวเดินข้ามสนามหญ้า"
    },
    {
        "id":  "pdf-1241",
        "word":  "Gorilla",
        "translation":  "ลิงกอริลลา",
        "category":  "Animals",
        "ipa":  "/ɡəˈrɪl.ə/",
        "sentence":  "The gorilla is a very strong animal.",
        "sentenceTranslation":  "กอริลลาเป็นสัตว์ที่แข็งแรงมาก"
    },
    {
        "id":  "pdf-1242",
        "word":  "Grasshopper",
        "translation":  "ตั๊กแตน",
        "category":  "Animals",
        "ipa":  "/ˈɡrɑːsˌhɒp.ər/",
        "sentence":  "The green grasshopper hid under the leaf.",
        "sentenceTranslation":  "ตั๊กแตนสีเขียวซ่อนอยู่ใต้ใบไม้"
    },
    {
        "id":  "pdf-1243",
        "word":  "Hamster",
        "translation":  "หนูแฮมสเตอร์",
        "category":  "Animals",
        "ipa":  "/ˈhæm.stər/",
        "sentence":  "My hamster loves to run on its wheel.",
        "sentenceTranslation":  "หนูแฮมสเตอร์ของฉันชอบวิ่งบนวงล้อของมัน"
    },
    {
        "id":  "pdf-1244",
        "word":  "Hawk",
        "translation":  "เหยี่ยว",
        "category":  "Animals",
        "ipa":  "/hɔːk/",
        "sentence":  "The hawk flew high up in the sky.",
        "sentenceTranslation":  "เหยี่ยวบินสูงขึ้นไปบนท้องฟ้า"
    },
    {
        "id":  "pdf-1245",
        "word":  "Hedgehog",
        "translation":  "เม่นแคระ",
        "category":  "Animals",
        "ipa":  "/ˈhedʒ.hɒɡ/",
        "sentence":  "The little hedgehog rolled into a ball.",
        "sentenceTranslation":  "เม่นแคระตัวน้อยม้วนตัวเป็นลูกบอล"
    },
    {
        "id":  "pdf-1246",
        "word":  "Hippo / Hippopotamus",
        "translation":  "ฮิปโปโปเตมัส",
        "category":  "Animals",
        "ipa":  "/ˈhɪp.oʊ/ /ˌhɪp.əˈpɒt.ə.məs/",
        "sentence":  "The hippo likes to stay in the water to cool off.",
        "sentenceTranslation":  "ฮิปโปชอบอยู่ในน้ำเพื่อให้ร่างกายเย็นลง"
    },
    {
        "id":  "pdf-1247",
        "word":  "Horse",
        "translation":  "ม้า",
        "category":  "Animals",
        "ipa":  "/hɔːrs/",
        "sentence":  "She loves to ride her horse in the morning.",
        "sentenceTranslation":  "เธอชอบขี่ม้าของเธอในตอนเช้า"
    },
    {
        "id":  "pdf-1248",
        "word":  "Hummingbird",
        "translation":  "นกฮัมมิงเบิร์ด",
        "category":  "Animals",
        "ipa":  "/ˈhʌm.ɪŋ.bɜːrd/",
        "sentence":  "The hummingbird hovered near the colorful flower.",
        "sentenceTranslation":  "นกฮัมมิงเบิร์ดบินร่อนอยู่ใกล้ดอกไม้ที่มีสีสัน"
    },
    {
        "id":  "pdf-1249",
        "word":  "Hyena",
        "translation":  "ไฮยีน่า",
        "category":  "Animals",
        "ipa":  "/haɪˈiː.nə/",
        "sentence":  "We heard the laugh of a hyena in the night.",
        "sentenceTranslation":  "พวกเราได้ยินเสียงหัวเราะของไฮยีน่าในตอนกลางคืน"
    },
    {
        "id":  "pdf-1250",
        "word":  "Jellyfish",
        "translation":  "แมงกะพรุน",
        "category":  "Animals",
        "ipa":  "/ˈdʒel.i.fɪʃ/",
        "sentence":  "Be careful of the jellyfish while swimming in the sea.",
        "sentenceTranslation":  "ระวังแมงกะพรุนขณะว่ายน้ำในทะเล"
    },
    {
        "id":  "pdf-1251",
        "word":  "Kangaroo",
        "translation":  "จิงโจ้",
        "category":  "Animals",
        "ipa":  "/ˌkæŋ.ɡərˈuː/",
        "sentence":  "The kangaroo carries its baby in a pouch.",
        "sentenceTranslation":  "จิงโจ้อุ้มลูกของมันไว้ในกระเป๋าหน้าท้อง"
    },
    {
        "id":  "pdf-1252",
        "word":  "Koala",
        "translation":  "โคอาลา",
        "category":  "Animals",
        "ipa":  "/koʊˈɑː.lə/",
        "sentence":  "The koala clings to the eucalyptus tree.",
        "sentenceTranslation":  "โคอาล่าเกาะอยู่บนต้นยูคาลิปตัส"
    },
    {
        "id":  "pdf-1253",
        "word":  "Leopard",
        "translation":  "เสือดาว",
        "category":  "Animals",
        "ipa":  "/ˈlep.ərd/",
        "sentence":  "A leopard can run very fast.",
        "sentenceTranslation":  "เสือดาวสามารถวิ่งได้เร็วมาก"
    },
    {
        "id":  "pdf-1254",
        "word":  "Lion",
        "translation":  "สิงโต",
        "category":  "Animals",
        "ipa":  "/ˈlaɪ.ən/",
        "sentence":  "The lion is known as the king of the jungle.",
        "sentenceTranslation":  "สิงโตเป็นที่รู้จักในฐานะราชาแห่งป่า"
    },
    {
        "id":  "pdf-1255",
        "word":  "Lizard",
        "translation":  "จิ้งจก / ตุ๊กแก / กิ้งก่า",
        "category":  "Animals",
        "ipa":  "/ˈlɪz.əd/",
        "sentence":  "A small lizard crawled up the wall.",
        "sentenceTranslation":  "จิ้งจกตัวเล็กไต่ขึ้นไปบนกำแพง"
    },
    {
        "id":  "pdf-1256",
        "word":  "Llama",
        "translation":  "ลามา",
        "category":  "Animals",
        "ipa":  "/ˈlɑː.mə/",
        "sentence":  "The llama is native to South America.",
        "sentenceTranslation":  "ตัวลามะเป็นสัตว์พื้นเมืองของอเมริกาใต้"
    },
    {
        "id":  "pdf-1257",
        "word":  "Lobster",
        "translation":  "กุ้งมังกร / กุ้งล็อบสเตอร์",
        "category":  "Animals",
        "ipa":  "/ˈlɒb.stər/",
        "sentence":  "We had fresh lobster for dinner.",
        "sentenceTranslation":  "พวกเราทานกุ้งมังกรสดเป็นอาหารเย็น"
    },
    {
        "id":  "pdf-1258",
        "word":  "Monkey",
        "translation":  "ลิง",
        "category":  "Animals",
        "ipa":  "/ˈmʌŋ.ki/",
        "sentence":  "The monkey is swinging from branch to branch.",
        "sentenceTranslation":  "ลิงกำลังโหนจากกิ่งไม้หนึ่งไปยังอีกกิ่งไม้หนึ่ง"
    },
    {
        "id":  "pdf-1259",
        "word":  "Mosquito",
        "translation":  "ยุง",
        "category":  "Animals",
        "ipa":  "/məˈskiː.toʊ/",
        "sentence":  "I got a mosquito bite on my arm.",
        "sentenceTranslation":  "ฉันโดนยุงกัดที่แขน"
    },
    {
        "id":  "pdf-1260",
        "word":  "Moth",
        "translation":  "ผีเสื้อกลางคืน",
        "category":  "Animals",
        "ipa":  "/mɒθ/",
        "sentence":  "The moth was attracted to the bright light.",
        "sentenceTranslation":  "ผีเสื้อกลางคืนถูกดึงดูดเข้าหาแสงไฟสว่าง"
    },
    {
        "id":  "pdf-1261",
        "word":  "Mouse / Mice",
        "translation":  "หนู (ตัวเล็ก)",
        "category":  "Animals",
        "ipa":  "/maʊs/ /maɪs/",
        "sentence":  "The cat chased the mouse out of the kitchen.",
        "sentenceTranslation":  "แมววิ่งไล่หนูออกไปจากห้องครัว"
    },
    {
        "id":  "pdf-1262",
        "word":  "Octopus",
        "translation":  "ปลาหมึกยักษ์ (หมึกสาย)",
        "category":  "Animals",
        "ipa":  "/ˈɒk.tə.pəs/",
        "sentence":  "An octopus has eight arms.",
        "sentenceTranslation":  "ปลาหมึกยักษ์มีหนวดแปดเส้น"
    },
    {
        "id":  "pdf-1263",
        "word":  "Ostrich",
        "translation":  "นกกระจอกเทศ",
        "category":  "Animals",
        "ipa":  "/ˈɒs.trɪtʃ/",
        "sentence":  "The ostrich is the largest bird in the world.",
        "sentenceTranslation":  "นกกระจอกเทศเป็นนกที่ใหญ่ที่สุดในโลก"
    },
    {
        "id":  "pdf-1264",
        "word":  "Otter",
        "translation":  "นาก",
        "category":  "Animals",
        "ipa":  "/ˈɒt.ər/",
        "sentence":  "The otter swam playfully in the river.",
        "sentenceTranslation":  "นากว่ายน้ำอย่างสนุกสนานในแม่น้ำ"
    },
    {
        "id":  "pdf-1265",
        "word":  "Owl",
        "translation":  "นกฮูก",
        "category":  "Animals",
        "ipa":  "/aʊl/",
        "sentence":  "An owl can see very well in the dark.",
        "sentenceTranslation":  "นกเค้าแมวสามารถมองเห็นได้ดีมากในความมืด"
    },
    {
        "id":  "pdf-1266",
        "word":  "Ox",
        "translation":  "วัวตัวผู้ (ใช้แรงงาน)",
        "category":  "Animals",
        "ipa":  "/ɒks/",
        "sentence":  "The farmer used an ox to plow the field.",
        "sentenceTranslation":  "ชาวนาใช้ตัววัวผู้ไถนา"
    },
    {
        "id":  "pdf-1267",
        "word":  "Panda",
        "translation":  "หมีแพนด้า",
        "category":  "Animals",
        "ipa":  "/ˈpændə/",
        "sentence":  "The panda is eating bamboo.",
        "sentenceTranslation":  "แพนด้ากำลังกินไผ่"
    },
    {
        "id":  "pdf-1268",
        "word":  "Parrot",
        "translation":  "นกแก้ว",
        "category":  "Animals",
        "ipa":  "/ˈpærət/",
        "sentence":  "The colorful parrot can mimic human speech.",
        "sentenceTranslation":  "นกแก้วที่มีสีสันสดใสสามารถเลียนเสียงพูดของมนุษย์ได้"
    },
    {
        "id":  "pdf-1269",
        "word":  "Peacock",
        "translation":  "นกยูง",
        "category":  "Animals",
        "ipa":  "/ˈpiːkɒk/",
        "sentence":  "The peacock spread its beautiful feathers.",
        "sentenceTranslation":  "นกยูงรำแพนหางอันสวยงามของมัน"
    },
    {
        "id":  "pdf-1270",
        "word":  "Penguin",
        "translation":  "นกเพนกวิน",
        "category":  "Animals",
        "ipa":  "/ˈpɛŋɡwɪn/",
        "sentence":  "The penguin waddled across the ice.",
        "sentenceTranslation":  "เพนกวินเดินต้วมเตี้ยมข้ามน้ำแข็ง"
    },
    {
        "id":  "pdf-1271",
        "word":  "Pig",
        "translation":  "หมู",
        "category":  "Animals",
        "ipa":  "/pɪɡ/",
        "sentence":  "The dirty pig rolled in the mud.",
        "sentenceTranslation":  "หมูตัวสกปรกกลิ้งไปมาในโคลน"
    },
    {
        "id":  "pdf-1272",
        "word":  "Pigeon",
        "translation":  "นกพิราบ",
        "category":  "Animals",
        "ipa":  "/ˈpɪdʒən/",
        "sentence":  "The pigeon flew down to eat breadcrumbs.",
        "sentenceTranslation":  "นกพิราบบินลงมาเพื่อกินเศษขนมปัง"
    },
    {
        "id":  "pdf-1273",
        "word":  "Polar bear",
        "translation":  "หมีขั้วโลก",
        "category":  "Animals",
        "ipa":  "/ˈpoʊlər bɛər/",
        "sentence":  "The polar bear lives in the Arctic.",
        "sentenceTranslation":  "หมีขั้วโลกอาศัยอยู่ในแถบอาร์กติก"
    },
    {
        "id":  "pdf-1274",
        "word":  "Rabbit",
        "translation":  "กระต่าย",
        "category":  "Animals",
        "ipa":  "/ˈræbɪt/",
        "sentence":  "The rabbit hopped into the garden.",
        "sentenceTranslation":  "กระต่ายกระโดดเข้าไปในสวน"
    },
    {
        "id":  "pdf-1275",
        "word":  "Raccoon",
        "translation":  "แรคคูน",
        "category":  "Animals",
        "ipa":  "/ræˈkuːn/",
        "sentence":  "A raccoon is searching for food in the trash.",
        "sentenceTranslation":  "แรคคูนกำลังคุ้ยหาอาหารในถังขยะ"
    },
    {
        "id":  "pdf-1276",
        "word":  "Rat",
        "translation":  "หนู (ตัวใหญ่ / หนูท่อ)",
        "category":  "Animals",
        "ipa":  "/ræt/",
        "sentence":  "The rat ran quickly under the wooden floor.",
        "sentenceTranslation":  "หนูวิ่งอย่างรวดเร็วเข้าไปใต้พื้นไม้"
    },
    {
        "id":  "pdf-1277",
        "word":  "Rhino / Rhinoceros",
        "translation":  "แรด",
        "category":  "Animals",
        "ipa":  "/raɪˈnɒsərəs/",
        "sentence":  "The rhinoceros has a large horn on its nose.",
        "sentenceTranslation":  "แรดมีนอขนาดใหญ่อยู่บนจมูกของมัน"
    },
    {
        "id":  "pdf-1278",
        "word":  "Rooster",
        "translation":  "ไก่ตัวผู้",
        "category":  "Animals",
        "ipa":  "/ˈruːstər/",
        "sentence":  "The rooster crows at sunrise every morning.",
        "sentenceTranslation":  "ไก่ตัวผู้ขันตอนพระอาทิตย์ขึ้นทุกเช้า"
    },
    {
        "id":  "pdf-1279",
        "word":  "Salmon",
        "translation":  "ปลาแซลมอน",
        "category":  "Animals",
        "ipa":  "/ˈsæmən/",
        "sentence":  "Salmon swim upstream to lay their eggs.",
        "sentenceTranslation":  "ปลาแซลมอนว่ายทวนน้ำขึ้นไปเพื่อวางไข่"
    },
    {
        "id":  "pdf-1280",
        "word":  "Scorpion",
        "translation":  "แมงป่อง",
        "category":  "Animals",
        "ipa":  "/ˈskɔːrpiən/",
        "sentence":  "Be careful of the scorpion\u0027s venomous sting.",
        "sentenceTranslation":  "ระวังพิษจากการต่อยของแมงป่อง"
    },
    {
        "id":  "pdf-1281",
        "word":  "Seahorse",
        "translation":  "ม้าน้ำ",
        "category":  "Animals",
        "ipa":  "/ˈsiːhɔːrs/",
        "sentence":  "The seahorse holds onto seaweed with its tail.",
        "sentenceTranslation":  "ม้าน้ำใช้หางของมันยึดเกาะกับสาหร่ายทะเล"
    },
    {
        "id":  "pdf-1282",
        "word":  "Seal",
        "translation":  "แมวน้ำ",
        "category":  "Animals",
        "ipa":  "/siːl/",
        "sentence":  "The seal is swimming in the cold ocean.",
        "sentenceTranslation":  "แมวน้ำกำลังว่ายน้ำอยู่ในมหาสมุทรที่หนาวเย็น"
    },
    {
        "id":  "pdf-1283",
        "word":  "Shark",
        "translation":  "ฉลาม",
        "category":  "Animals",
        "ipa":  "/ʃɑːrk/",
        "sentence":  "The shark swam quickly through the water.",
        "sentenceTranslation":  "ฉลามว่ายน้ำอย่างรวดเร็วผ่านสายน้ำ"
    },
    {
        "id":  "pdf-1284",
        "word":  "Sheep",
        "translation":  "แกะ",
        "category":  "Animals",
        "ipa":  "/ʃiːp/",
        "sentence":  "The sheep are grazing in the green meadow.",
        "sentenceTranslation":  "แกะกำลังเล็มหญ้าอยู่ในทุ่งหญ้าสีเขียว"
    },
    {
        "id":  "pdf-1285",
        "word":  "Shrimp / Prawn",
        "translation":  "กุ้ง",
        "category":  "Animals",
        "ipa":  "/ʃrɪmp / prɔːn/",
        "sentence":  "We ordered grilled shrimp for dinner.",
        "sentenceTranslation":  "พวกเราสั่งกุ้งเผาสำหรับมื้อเย็น"
    },
    {
        "id":  "pdf-1286",
        "word":  "Snail",
        "translation":  "หอยทาก",
        "category":  "Animals",
        "ipa":  "/sneɪl/",
        "sentence":  "The snail moves very slowly.",
        "sentenceTranslation":  "หอยทากเคลื่อนที่ช้ามาก"
    },
    {
        "id":  "pdf-1287",
        "word":  "Snake",
        "translation":  "งู",
        "category":  "Animals",
        "ipa":  "/sneɪk/",
        "sentence":  "A snake is slithering through the grass.",
        "sentenceTranslation":  "งูกำลังเลื้อยผ่านสนามหญ้า"
    },
    {
        "id":  "pdf-1288",
        "word":  "Spider",
        "translation":  "แมงมุม",
        "category":  "Animals",
        "ipa":  "/ˈspaɪ.dər/",
        "sentence":  "The spider is spinning a web in the corner.",
        "sentenceTranslation":  "แมงมุมกำลังชักใยอยู่ที่มุมห้อง"
    },
    {
        "id":  "pdf-1289",
        "word":  "Squid",
        "translation":  "ปลาหมึก (หมึกกล้วย)",
        "category":  "Animals",
        "ipa":  "/skwɪd/",
        "sentence":  "Squid is a popular seafood in Asia.",
        "sentenceTranslation":  "ปลาหมึกเป็นอาหารทะเลที่ได้รับความนิยมในเอเชีย"
    },
    {
        "id":  "pdf-1290",
        "word":  "Squirrel",
        "translation":  "กระรอก",
        "category":  "Animals",
        "ipa":  "/ˈskwɪr.əl/",
        "sentence":  "The squirrel is gathering nuts for the winter.",
        "sentenceTranslation":  "กระรอกกำลังเก็บสะสมถั่วสำหรับฤดูหนาว"
    },
    {
        "id":  "pdf-1291",
        "word":  "Starfish",
        "translation":  "ปลาดาว",
        "category":  "Animals",
        "ipa":  "/ˈstɑːr.fɪʃ/",
        "sentence":  "We saw a beautiful starfish on the beach.",
        "sentenceTranslation":  "พวกเราเห็นปลาดาวที่สวยงามบนชายหาด"
    },
    {
        "id":  "pdf-1292",
        "word":  "Swan",
        "translation":  "หงส์",
        "category":  "Animals",
        "ipa":  "/swɒn/",
        "sentence":  "A beautiful white swan is gliding on the lake.",
        "sentenceTranslation":  "หงส์ขาวที่สวยงามกำลังลอยตัวอย่างสง่างามบนทะเลสาบ"
    },
    {
        "id":  "pdf-1293",
        "word":  "Tiger",
        "translation":  "เสือ",
        "category":  "Animals",
        "ipa":  "/ˈtaɪ.ɡər/",
        "sentence":  "The tiger is a powerful predator.",
        "sentenceTranslation":  "เสือเป็นสัตว์นักล่าที่มีพลังอำนาจ"
    },
    {
        "id":  "pdf-1294",
        "word":  "Toad",
        "translation":  "คางคก",
        "category":  "Animals",
        "ipa":  "/toʊd/",
        "sentence":  "A toad is sitting near the garden pond.",
        "sentenceTranslation":  "คางคกตัวหนึ่งกำลังนั่งอยู่ใกล้บ่อน้ำในสวน"
    },
    {
        "id":  "pdf-1295",
        "word":  "Tortoise",
        "translation":  "เต่าบก",
        "category":  "Animals",
        "ipa":  "/ˈtɔːr.təs/",
        "sentence":  "The tortoise lived for over a hundred years.",
        "sentenceTranslation":  "เต่าบกตัวนี้มีอายุยืนยาวกว่าร้อยปี"
    },
    {
        "id":  "pdf-1296",
        "word":  "Turkey",
        "translation":  "ไก่งวง",
        "category":  "Animals",
        "ipa":  "/tɜːr.ki/",
        "sentence":  "We usually eat turkey on Thanksgiving.",
        "sentenceTranslation":  "พวกเรามักจะกินไก่งวงในวันขอบคุณพระเจ้า"
    },
    {
        "id":  "pdf-1297",
        "word":  "Turtle",
        "translation":  "เต่าน้ำ / เต่าทะเล",
        "category":  "Animals",
        "ipa":  "/ˈtɜːrtl/",
        "sentence":  "The turtle swam slowly in the ocean.",
        "sentenceTranslation":  "เต่าว่ายน้ำอย่างช้าๆ ในมหาสมุทร"
    },
    {
        "id":  "pdf-1298",
        "word":  "Whale",
        "translation":  "วาฬ",
        "category":  "Animals",
        "ipa":  "/weɪl/",
        "sentence":  "A blue whale is the largest animal on Earth.",
        "sentenceTranslation":  "วาฬสีน้ำเงินเป็นสัตว์ที่ใหญ่ที่สุดในโลก"
    },
    {
        "id":  "pdf-1299",
        "word":  "Wolf",
        "translation":  "หมาป่า",
        "category":  "Animals",
        "ipa":  "/wʊlf/",
        "sentence":  "The wolf howled at the moon.",
        "sentenceTranslation":  "หมาป่าหอนใส่ดวงจันทร์"
    },
    {
        "id":  "pdf-1300",
        "word":  "Zebra",
        "translation":  "ม้าลาย",
        "category":  "Animals",
        "ipa":  "/ˈziːbrə/",
        "sentence":  "The zebra has black and white stripes.",
        "sentenceTranslation":  "ม้าลายมีลายแถบสีดำและขาว"
    },
    {
        "id":  "pdf-1301",
        "word":  "Air current",
        "translation":  "กระแสลม",
        "category":  "Weather",
        "ipa":  "/ˈeər ˌkʌrənt/",
        "sentence":  "Gliders use air currents to stay aloft.",
        "sentenceTranslation":  "เครื่องร่อนใช้กระแสลมเพื่อลอยตัวอยู่ในอากาศ"
    },
    {
        "id":  "pdf-1302",
        "word":  "Air pressure",
        "translation":  "ความกดอากาศ",
        "category":  "Weather",
        "ipa":  "/ˈeər ˌpreʃər/",
        "sentence":  "Air pressure decreases as you climb higher.",
        "sentenceTranslation":  "ความกดอากาศจะลดลงเมื่อคุณปีนสูงขึ้น"
    },
    {
        "id":  "pdf-1303",
        "word":  "Autumn / Fall",
        "translation":  "ฤดูใบไม้ร่วง",
        "category":  "Weather",
        "ipa":  "/ˈɔːtəm / fɔːl/",
        "sentence":  "Leaves turn red and gold in autumn.",
        "sentenceTranslation":  "ใบไม้เปลี่ยนเป็นสีแดงและสีทองในฤดูใบไม้ร่วง"
    },
    {
        "id":  "pdf-1304",
        "word":  "Avalanche",
        "translation":  "หิมะถล่ม",
        "category":  "Weather",
        "ipa":  "/ˈævəlæntʃ/",
        "sentence":  "The skiers were warned about the risk of an avalanche.",
        "sentenceTranslation":  "นักสกีได้รับการเตือนเกี่ยวกับความเสี่ยงของการเกิดหิมะถล่ม"
    },
    {
        "id":  "pdf-1305",
        "word":  "Blizzard",
        "translation":  "พายุหิมะ",
        "category":  "Weather",
        "ipa":  "/ˈblɪzərd/",
        "sentence":  "The blizzard caused poor visibility on the roads.",
        "sentenceTranslation":  "พายุหิมะทำให้ทัศนวิสัยบนถนนแย่ลง"
    },
    {
        "id":  "pdf-1306",
        "word":  "Breeze",
        "translation":  "ลมโชยอ่อนๆ / ลมพัดเบาๆ",
        "category":  "Weather",
        "ipa":  "/briːz/",
        "sentence":  "A gentle breeze blew through the open window.",
        "sentenceTranslation":  "ลมอ่อนๆ พัดผ่านหน้าต่างที่เปิดอยู่"
    },
    {
        "id":  "pdf-1307",
        "word":  "Celsius",
        "translation":  "เซลเซียส (หน่วยวัดอุณหภูมิ)",
        "category":  "Weather",
        "ipa":  "/ˈsɛlsiəs/",
        "sentence":  "Water freezes at zero degrees Celsius.",
        "sentenceTranslation":  "น้ำแข็งตัวที่อุณหภูมิศูนย์องศาเซลเซียส"
    },
    {
        "id":  "pdf-1308",
        "word":  "Chill",
        "translation":  "ความหนาวเย็น / รู้สึกหนาว",
        "category":  "Weather",
        "ipa":  "/tʃɪl/",
        "sentence":  "There was a sudden chill in the air.",
        "sentenceTranslation":  "มีความเย็นยะเยือกเกิดขึ้นในอากาศอย่างกะทันหัน"
    },
    {
        "id":  "pdf-1309",
        "word":  "Chilly",
        "translation":  "หนาวเย็นยะเยือก",
        "category":  "Weather",
        "ipa":  "/ˈtʃɪli/",
        "sentence":  "It is a bit chilly today, so wear a jacket.",
        "sentenceTranslation":  "วันนี้อากาศค่อนข้างเย็น ดังนั้นควรสวมแจ็กเก็ต"
    },
    {
        "id":  "pdf-1310",
        "word":  "Climate",
        "translation":  "ภูมิอากาศ (สภาพอากาศระยะยาว)",
        "category":  "Weather",
        "ipa":  "/ˈklaɪmɪt/",
        "sentence":  "The region has a tropical climate.",
        "sentenceTranslation":  "ภูมิภาคนี้มีภูมิอากาศแบบเขตร้อน"
    },
    {
        "id":  "pdf-1311",
        "word":  "Cloud",
        "translation":  "เมฆ",
        "category":  "Weather",
        "ipa":  "/klaʊd/",
        "sentence":  "A dark cloud covered the sun.",
        "sentenceTranslation":  "เมฆครึ้มบดบังดวงอาทิตย์"
    },
    {
        "id":  "pdf-1312",
        "word":  "Cloudy",
        "translation":  "มีเมฆมาก",
        "category":  "Weather",
        "ipa":  "/ˈklaʊ.di/",
        "sentence":  "The sky is very cloudy today, so it might rain.",
        "sentenceTranslation":  "วันนี้ท้องฟ้ามีเมฆมาก ฝนจึงอาจจะตก"
    },
    {
        "id":  "pdf-1313",
        "word":  "Cold wave",
        "translation":  "คลื่นความหนาวเย็น",
        "category":  "Weather",
        "ipa":  "/koʊld weɪv/",
        "sentence":  "A sudden cold wave hit the region, dropping temperatures below freezing.",
        "sentenceTranslation":  "คลื่นความหนาวเย็นพัดผ่านภูมิภาคนี้อย่างกะทันหัน ทำให้อุณหภูมิลดลงต่ำกว่าจุดเยือกแข็ง"
    },
    {
        "id":  "pdf-1314",
        "word":  "Cyclone",
        "translation":  "พายุไซโคลน",
        "category":  "Weather",
        "ipa":  "/ˈsaɪ.kloʊn/",
        "sentence":  "The powerful cyclone caused severe damage to the coastal towns.",
        "sentenceTranslation":  "พายุไซโคลนที่รุนแรงสร้างความเสียหายอย่างหนักแก่เมืองชายฝั่ง"
    },
    {
        "id":  "pdf-1315",
        "word":  "Damp",
        "translation":  "ชื้น / อับชื้น",
        "category":  "Weather",
        "ipa":  "/dæmp/",
        "sentence":  "The air in the basement felt cold and damp.",
        "sentenceTranslation":  "อากาศในห้องใต้ดินรู้สึกเย็นและชื้น"
    },
    {
        "id":  "pdf-1316",
        "word":  "Degree",
        "translation":  "องศา (หน่วยวัด)",
        "category":  "Weather",
        "ipa":  "/dɪˈɡriː/",
        "sentence":  "The temperature dropped by one degree Celsius.",
        "sentenceTranslation":  "อุณหภูมิลดลงหนึ่งองศาเซลเซียส"
    },
    {
        "id":  "pdf-1317",
        "word":  "Dew",
        "translation":  "น้ำค้าง",
        "category":  "Weather",
        "ipa":  "/duː/",
        "sentence":  "In the morning, the grass was covered with fresh dew.",
        "sentenceTranslation":  "ในตอนเช้า ผืนหญ้าปกคลุมไปด้วยน้ำค้างที่เย็นสดชื่น"
    },
    {
        "id":  "pdf-1318",
        "word":  "Dewdrop",
        "translation":  "หยดน้ำค้าง",
        "category":  "Weather",
        "ipa":  "/ˈduː.drɑːp/",
        "sentence":  "A single dewdrop sparkled on the rose petal.",
        "sentenceTranslation":  "หยาดน้ำค้างหยดหนึ่งประกายแวววาวบนกลีบกุหลาบ"
    },
    {
        "id":  "pdf-1319",
        "word":  "Downpour",
        "translation":  "ฝนตกกระหน่ำ / ฝนเทลงมา",
        "category":  "Weather",
        "ipa":  "/ˈdaʊn.pɔːr/",
        "sentence":  "We got soaked in the sudden downpour.",
        "sentenceTranslation":  "พวกเราเปียกโชกจากฝนที่ตกลงมาอย่างหนักอย่างกะทันหัน"
    },
    {
        "id":  "pdf-1320",
        "word":  "Drizzle",
        "translation":  "ฝนตกปรอยๆ",
        "category":  "Weather",
        "ipa":  "/ˈdrɪz.əl/",
        "sentence":  "A light drizzle fell throughout the afternoon.",
        "sentenceTranslation":  "ฝนตกปรอยๆ ตลอดทั้งบ่าย"
    },
    {
        "id":  "pdf-1321",
        "word":  "Drought",
        "translation":  "ภัยแล้ง / ความแห้งแล้ง",
        "category":  "Weather",
        "ipa":  "/draʊt/",
        "sentence":  "The long drought ruined most of the crops this year.",
        "sentenceTranslation":  "ภัยแล้งที่ยาวนานทำลายพืชผลส่วนใหญ่ในปีนี้"
    },
    {
        "id":  "pdf-1322",
        "word":  "Dry season",
        "translation":  "ฤดูแล้ง",
        "category":  "Weather",
        "ipa":  "/draɪ ˈsiː.zən/",
        "sentence":  "During the dry season, water conservation is very important.",
        "sentenceTranslation":  "ในช่วงฤดูแล้ง การอนุรักษ์น้ำเป็นสิ่งสำคัญมาก"
    },
    {
        "id":  "pdf-1323",
        "word":  "Earth Tremor",
        "translation":  "แผ่นดินไหวขนาดเล็ก",
        "category":  "Weather",
        "ipa":  "/ɜːθ ˈtrem.ər/",
        "sentence":  "We felt a small earth tremor last night, but there was no damage.",
        "sentenceTranslation":  "พวกเรารู้สึกถึงแรงสั่นสะเทือนของแผ่นดินขนาดเล็กเมื่อคืนนี้ แต่ไม่มีความเสียหายเกิดขึ้น"
    },
    {
        "id":  "pdf-1324",
        "word":  "Earthquake",
        "translation":  "แผ่นดินไหว",
        "category":  "Weather",
        "ipa":  "/ˈɜːθ.kweɪk/",
        "sentence":  "The earthquake shook the buildings violently.",
        "sentenceTranslation":  "แผ่นดินไหวทำให้ตึกต่างๆ สั่นสะเทือนอย่างรุนแรง"
    },
    {
        "id":  "pdf-1325",
        "word":  "Fahrenheit",
        "translation":  "ฟาเรนไฮต์ (หน่วยวัดอุณหภูมิ)",
        "category":  "Weather",
        "ipa":  "/ˈfær.ən.haɪt/",
        "sentence":  "Water freezes at 32 degrees Fahrenheit.",
        "sentenceTranslation":  "น้ำแข็งตัวที่อุณหภูมิ 32 องศาฟาเรนไฮต์"
    },
    {
        "id":  "pdf-1326",
        "word":  "Flash flood",
        "translation":  "น้ำป่าไหลหลาก / น้ำท่วมฉับพลัน",
        "category":  "Weather",
        "ipa":  "/flæʃ flʌd/",
        "sentence":  "The heavy rain triggered a sudden flash flood in the valley.",
        "sentenceTranslation":  "ฝนที่ตกหนักทำให้เกิดน้ำป่าไหลหลากอย่างกะทันหันในหุบเขา"
    },
    {
        "id":  "pdf-1327",
        "word":  "Flood",
        "translation":  "น้ำท่วม",
        "category":  "Weather",
        "ipa":  "/flʌd/",
        "sentence":  "The heavy rain caused a sudden flood in the valley.",
        "sentenceTranslation":  "ฝนที่ตกหนักทำให้เกิดน้ำท่วมฉับพลันในหุบเขา"
    },
    {
        "id":  "pdf-1328",
        "word":  "Fog",
        "translation":  "หมอกหนา",
        "category":  "Weather",
        "ipa":  "/fɒɡ/",
        "sentence":  "The thick fog made it difficult to see the road.",
        "sentenceTranslation":  "หมอกหนาทำให้มองเห็นถนนได้ยาก"
    },
    {
        "id":  "pdf-1329",
        "word":  "Foggy",
        "translation":  "มีหมอกลงหนาจัด",
        "category":  "Weather",
        "ipa":  "/ˈfɒɡ.i/",
        "sentence":  "It was a cold and foggy morning.",
        "sentenceTranslation":  "มันเป็นเช้าที่หนาวเย็นและมีหมอกหนา"
    },
    {
        "id":  "pdf-1330",
        "word":  "Forecast",
        "translation":  "พยากรณ์ (อากาศ)",
        "category":  "Weather",
        "ipa":  "/ˈfɔːr.kæst/",
        "sentence":  "The weather forecast predicts rain for tomorrow.",
        "sentenceTranslation":  "พยากรณ์อากาศคาดการณ์ว่าพรุ่งนี้จะมีฝนตก"
    },
    {
        "id":  "pdf-1331",
        "word":  "Freezing",
        "translation":  "หนาวจัดจนเป็นน้ำแข็ง",
        "category":  "Weather",
        "ipa":  "/ˈfriː.zɪŋ/",
        "sentence":  "Put on a coat because it is freezing outside.",
        "sentenceTranslation":  "ใส่เสื้อโค้ทด้วยเพราะข้างนอกหนาวจัดจนเป็นน้ำแข็ง"
    },
    {
        "id":  "pdf-1332",
        "word":  "Frost",
        "translation":  "น้ำค้างแข็ง / แม่คะนิ้ง",
        "category":  "Weather",
        "ipa":  "/frɒst/",
        "sentence":  "The grass was covered with a thin layer of frost.",
        "sentenceTranslation":  "ผืนหญ้าถูกปกคลุมไปด้วยน้ำค้างแข็งบางๆ"
    },
    {
        "id":  "pdf-1333",
        "word":  "Gale",
        "translation":  "ลมพายุแรงมาก",
        "category":  "Weather",
        "ipa":  "/ɡeɪl/",
        "sentence":  "The gale blew down several trees in the park.",
        "sentenceTranslation":  "ลมพายุเกลพัดต้นไม้ล้มลงหลายต้นในสวนสาธารณะ"
    },
    {
        "id":  "pdf-1334",
        "word":  "Global warming",
        "translation":  "ภาวะโลกร้อน",
        "category":  "Weather",
        "ipa":  "/ˌɡloʊ.bəl ˈwɔːr.mɪŋ/",
        "sentence":  "Global warming is causing glaciers to melt rapidly.",
        "sentenceTranslation":  "ภาวะโลกร้อนกำลังทำให้ธารน้ำแข็งละลายอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-1335",
        "word":  "Greenhouse effect",
        "translation":  "ปรากฏการณ์เรือนกระจก",
        "category":  "Weather",
        "ipa":  "/ˈɡriːn.haʊs ɪˌfekt/",
        "sentence":  "The greenhouse effect traps heat in the atmosphere.",
        "sentenceTranslation":  "ปรากฏการณ์เรือนกระจกกักเก็บความร้อนไว้ในชั้นบรรยากาศ"
    },
    {
        "id":  "pdf-1336",
        "word":  "Gust",
        "translation":  "ลมกระโชกแรง (พัดมาวูบหนึ่ง)",
        "category":  "Weather",
        "ipa":  "/ɡʌst/",
        "sentence":  "A sudden gust of wind blew my hat off.",
        "sentenceTranslation":  "ลมที่พัดแรงขึ้นมาวูบหนึ่งพัดหมวกของฉันปลิวไป"
    },
    {
        "id":  "pdf-1337",
        "word":  "Hail",
        "translation":  "ลูกเห็บ",
        "category":  "Weather",
        "ipa":  "/heɪl/",
        "sentence":  "We heard the sound of hail hitting the roof.",
        "sentenceTranslation":  "พวกเราได้ยินเสียงลูกเห็บตกกระทบหลังคา"
    },
    {
        "id":  "pdf-1338",
        "word":  "Hailstone",
        "translation":  "เม็ดลูกเห็บ",
        "category":  "Weather",
        "ipa":  "/ˈheɪl.stoʊn/",
        "sentence":  "Some hailstones were as large as golf balls.",
        "sentenceTranslation":  "ลูกเห็บบางลูกมีขนาดใหญ่เท่าลูกกอล์ฟ"
    },
    {
        "id":  "pdf-1339",
        "word":  "Hailstorm",
        "translation":  "พายุลูกเห็บ",
        "category":  "Weather",
        "ipa":  "/ˈheɪl.stɔːrm/",
        "sentence":  "The hailstorm damaged many cars parked outside.",
        "sentenceTranslation":  "พายุลูกเห็บทำความเสียหายให้กับรถยนต์หลายคันที่จอดอยู่ข้างนอก"
    },
    {
        "id":  "pdf-1340",
        "word":  "Haze",
        "translation":  "หมอกแดด / ควันฝุ่นจางๆ",
        "category":  "Weather",
        "ipa":  "/heɪz/",
        "sentence":  "The mountains were barely visible through the summer haze.",
        "sentenceTranslation":  "ภูเขาแทบจะมองไม่เห็นผ่านหมอกควันในฤดูร้อน"
    },
    {
        "id":  "pdf-1341",
        "word":  "Heatwave",
        "translation":  "คลื่นความร้อน",
        "category":  "Weather",
        "ipa":  "/ˈhiːt.weɪv/",
        "sentence":  "People stayed indoors to escape the intense heatwave.",
        "sentenceTranslation":  "ผู้คนหลบอยู่แต่ในบ้านเพื่อหลีกเลี่ยงคลื่นความร้อนที่รุนแรง"
    },
    {
        "id":  "pdf-1342",
        "word":  "High pressure",
        "translation":  "ความกดอากาศสูง",
        "category":  "Weather",
        "ipa":  "/haɪ ˈpreʃ.ər/",
        "sentence":  "A system of high pressure usually brings clear skies and dry weather.",
        "sentenceTranslation":  "ระบบความกดอากาศสูงมักจะนำมาซึ่งท้องฟ้าที่แจ่มใสและสภาพอากาศที่แห้งแล้ง"
    },
    {
        "id":  "pdf-1343",
        "word":  "Hot",
        "translation":  "ร้อน",
        "category":  "Weather",
        "ipa":  "/hɒt/",
        "sentence":  "The weather is very hot today.",
        "sentenceTranslation":  "วันนี้อากาศร้อนมาก"
    },
    {
        "id":  "pdf-1344",
        "word":  "Humid",
        "translation":  "ชื้น (มีไอน้ำในอากาศสูง)",
        "category":  "Weather",
        "ipa":  "/ˈhjuː.mɪd/",
        "sentence":  "The air is very humid in summer.",
        "sentenceTranslation":  "อากาศชื้นมากในฤดูร้อน"
    },
    {
        "id":  "pdf-1345",
        "word":  "Humidity",
        "translation":  "ความชื้นในอากาศ",
        "category":  "Weather",
        "ipa":  "/hjuːˈmɪd.ə.ti/",
        "sentence":  "High humidity makes the air feel much hotter.",
        "sentenceTranslation":  "ความชื้นสูงทำให้อากาศรู้สึกร้อนขึ้นมาก"
    },
    {
        "id":  "pdf-1346",
        "word":  "Hurricane",
        "translation":  "พายุเฮอริเคน",
        "category":  "Weather",
        "ipa":  "/ˈhʌr.ɪ.keɪn/",
        "sentence":  "The hurricane caused heavy damage along the coast.",
        "sentenceTranslation":  "พายุเฮอริเคนก่อให้เกิดความเสียหายอย่างหนักตามแนวชายฝั่ง"
    },
    {
        "id":  "pdf-1347",
        "word":  "Ice",
        "translation":  "น้ำแข็ง",
        "category":  "Weather",
        "ipa":  "/aɪs/",
        "sentence":  "The lake was covered with a thin layer of ice.",
        "sentenceTranslation":  "ทะเลสาบถูกปกคลุมไปด้วยน้ำแข็งบางๆ"
    },
    {
        "id":  "pdf-1348",
        "word":  "Icicle",
        "translation":  "แท่งน้ำแข็งย้อย",
        "category":  "Weather",
        "ipa":  "/ˈaɪ.sɪ.kəl/",
        "sentence":  "An icicle hung from the edge of the roof.",
        "sentenceTranslation":  "แท่งน้ำแข็งย้อยห้อยลงมาจากขอบหลังคา"
    },
    {
        "id":  "pdf-1349",
        "word":  "Lightning",
        "translation":  "ฟ้าแลบ / ฟ้าผ่า",
        "category":  "Weather",
        "ipa":  "/ˈlaɪt.nɪŋ/",
        "sentence":  "Lightning flashed across the dark sky.",
        "sentenceTranslation":  "ฟ้าแลบวาบผ่านท้องฟ้าที่มืดมิด"
    },
    {
        "id":  "pdf-1350",
        "word":  "Low pressure",
        "translation":  "ความกดอากาศต่ำ",
        "category":  "Weather",
        "ipa":  "/loʊ ˈpreʃ.ər/",
        "sentence":  "A low pressure system is moving in, bringing rain.",
        "sentenceTranslation":  "ระบบความกดอากาศต่ำกำลังเคลื่อนเข้ามา ซึ่งจะนำฝนมาด้วย"
    },
    {
        "id":  "pdf-1351",
        "word":  "Meteorologist",
        "translation":  "นักอุตุนิยมวิทยา",
        "category":  "Weather",
        "ipa":  "/ˌmiː.ti.əˈrɒl.ə.dʒɪst/",
        "sentence":  "The meteorologist predicted snow for tomorrow.",
        "sentenceTranslation":  "นักอุตุนิยมวิทยาพยากรณ์ว่าจะมีหิมะตกในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-1352",
        "word":  "Meteorology",
        "translation":  "อุตุนิยมวิทยา",
        "category":  "Weather",
        "ipa":  "/ˌmiː.ti.əˈrɒl.ə.dʒi/",
        "sentence":  "She is studying meteorology at university.",
        "sentenceTranslation":  "เธอกำลังเรียนวิชาอุตุนิยมวิทยาที่มหาวิทยาลัย"
    },
    {
        "id":  "pdf-1353",
        "word":  "Mist",
        "translation":  "หมอกบาง",
        "category":  "Weather",
        "ipa":  "/mɪst/",
        "sentence":  "The valley was shrouded in a thick mist.",
        "sentenceTranslation":  "หุบเขาถูกปกคลุมไปด้วยหมอกหนา"
    },
    {
        "id":  "pdf-1354",
        "word":  "Misty",
        "translation":  "มีหมอกบางๆ ปกคลุม",
        "category":  "Weather",
        "ipa":  "/ˈmɪs.ti/",
        "sentence":  "It was a cold and misty morning.",
        "sentenceTranslation":  "มันเป็นเช้าที่หนาวเย็นและมีหมอกหนา"
    },
    {
        "id":  "pdf-1355",
        "word":  "Moisture",
        "translation":  "ความชุ่มชื้น",
        "category":  "Weather",
        "ipa":  "/ˈmɔɪs.tʃər/",
        "sentence":  "Plants absorb moisture from the soil.",
        "sentenceTranslation":  "พืชดูดซับความชื้นจากดิน"
    },
    {
        "id":  "pdf-1356",
        "word":  "Monsoon",
        "translation":  "มรสุม",
        "category":  "Weather",
        "ipa":  "/mɒnˈsuːn/",
        "sentence":  "The monsoon season brings heavy rains to Southeast Asia.",
        "sentenceTranslation":  "ฤดูมรสุมนำฝนตกหนักมาสู่เอเชียตะวันออกเฉียงใต้"
    },
    {
        "id":  "pdf-1357",
        "word":  "Mudslide",
        "translation":  "โคลนถล่ม",
        "category":  "Weather",
        "ipa":  "/ˈmʌd.slaɪd/",
        "sentence":  "The heavy rain caused a massive mudslide in the mountains.",
        "sentenceTranslation":  "ฝนที่ตกหนักทำให้เกิดดินโคลนถล่มครั้งใหญ่ในภูเขา"
    },
    {
        "id":  "pdf-1358",
        "word":  "Overcast",
        "translation":  "มืดครึ้มไปด้วยเมฆ",
        "category":  "Weather",
        "ipa":  "/ˈoʊ.vɚ.kæst/",
        "sentence":  "The sky was overcast, and it looked like it was going to rain.",
        "sentenceTranslation":  "ท้องฟ้ามืดครึ้มและดูเหมือนว่าฝนกำลังจะตก"
    },
    {
        "id":  "pdf-1359",
        "word":  "Ozone layer",
        "translation":  "ชั้นโอโซน",
        "category":  "Weather",
        "ipa":  "/ˈoʊ.zoʊn ˌleɪ.ɚ/",
        "sentence":  "The ozone layer protects the Earth from harmful ultraviolet rays.",
        "sentenceTranslation":  "ชั้นโอโซนช่วยปกป้องโลกจากรังสีอัลตราไวโอเลตที่เป็นอันตราย"
    },
    {
        "id":  "pdf-1360",
        "word":  "Precipitation",
        "translation":  "หยาดน้ำฟ้า (ฝน หิมะ ลูกเห็บที่ตกจากฟ้า)",
        "category":  "Weather",
        "ipa":  "/prɪˌsɪp.əˈteɪ.ʃən/",
        "sentence":  "Rain, snow, and hail are all types of precipitation.",
        "sentenceTranslation":  "ฝน หิมะ และลูกเห็บล้วนเป็นหยาดน้ำฟ้ารูปแบบต่างๆ"
    },
    {
        "id":  "pdf-1361",
        "word":  "Puddle",
        "translation":  "แอ่งน้ำขังเล็กๆ บนพื้น",
        "category":  "Weather",
        "ipa":  "/ˈpʌd.əl/",
        "sentence":  "The children enjoyed splashing in the puddle after the rain.",
        "sentenceTranslation":  "เด็กๆ สนุกกับการกระโดดเล่นในแอ่งน้ำหลังฝนตก"
    },
    {
        "id":  "pdf-1362",
        "word":  "Radar",
        "translation":  "เรดาร์ (ตรวจจับกลุ่มฝน)",
        "category":  "Weather",
        "ipa":  "/ˈreɪ.dɑːr/",
        "sentence":  "The weather radar detected a storm approaching from the west.",
        "sentenceTranslation":  "เรดาร์ตรวจอากาศตรวจพบพายุที่กำลังพัดเข้ามาจากทิศตะวันตก"
    },
    {
        "id":  "pdf-1363",
        "word":  "Rain",
        "translation":  "ฝน / ฝนตก",
        "category":  "Weather",
        "ipa":  "/reɪn/",
        "sentence":  "I love the sound of rain falling on the roof.",
        "sentenceTranslation":  "ฉันชอบเสียงฝนตกกระทบหลังคา"
    },
    {
        "id":  "pdf-1364",
        "word":  "Rainbow",
        "translation":  "รุ้งกินน้ำ",
        "category":  "Weather",
        "ipa":  "/ˈreɪn.boʊ/",
        "sentence":  "A beautiful rainbow appeared in the sky after the storm passed.",
        "sentenceTranslation":  "รุ้งกินน้ำแสนสวยปรากฏขึ้นบนท้องฟ้าหลังจากพายุผ่านพ้นไป"
    },
    {
        "id":  "pdf-1365",
        "word":  "Raindrop",
        "translation":  "หยดน้ำฝน",
        "category":  "Weather",
        "ipa":  "/ˈreɪn.drɒp/",
        "sentence":  "A single raindrop fell on her cheek.",
        "sentenceTranslation":  "หยดน้ำฝนหยดหนึ่งตกลงบนแก้มของเธอ"
    },
    {
        "id":  "pdf-1366",
        "word":  "Rainy season / Monsoon",
        "translation":  "ฤดูฝน",
        "category":  "Weather",
        "ipa":  "/ˈreɪ.ni ˌsiː.zən / mɒnˈsuːn/",
        "sentence":  "The rainy season in Thailand usually lasts from May to October.",
        "sentenceTranslation":  "ฤดูฝนในประเทศไทยมักเริ่มตั้งแต่เดือนพฤษภาคมถึงตุลาคม"
    },
    {
        "id":  "pdf-1367",
        "word":  "Sandstorm",
        "translation":  "พายุทราย",
        "category":  "Weather",
        "ipa":  "/ˈsænd.stɔːrm/",
        "sentence":  "The travelers had to seek shelter from the incoming sandstorm.",
        "sentenceTranslation":  "นักเดินทางต้องหาที่กำบังจากพายุทรายที่กำลังพัดเข้ามา"
    },
    {
        "id":  "pdf-1368",
        "word":  "Scorching",
        "translation":  "ร้อนจัดจนแสบผิว / ร้อนแผดเผา",
        "category":  "Weather",
        "ipa":  "/ˈskɔːr.tʃɪŋ/",
        "sentence":  "We decided to stay indoors during the scorching afternoon heat.",
        "sentenceTranslation":  "พวกเราตัดสินใจอยู่ในบ้านในช่วงที่อากาศร้อนจัดตอนบ่าย"
    },
    {
        "id":  "pdf-1369",
        "word":  "Season",
        "translation":  "ฤดูกาล",
        "category":  "Weather",
        "ipa":  "/ˈsiː.zən/",
        "sentence":  "Autumn is my favorite season of the year.",
        "sentenceTranslation":  "ฤดูใบไม้ร่วงคือฤดูกาลที่ฉันชอบที่สุดในรอบปี"
    },
    {
        "id":  "pdf-1370",
        "word":  "Shower",
        "translation":  "ฝนตกซู่ใหญ่ (แล้วก็หยุด)",
        "category":  "Weather",
        "ipa":  "/ˈʃaʊ.ɚ/",
        "sentence":  "There will be a brief shower in the afternoon.",
        "sentenceTranslation":  "จะมีฝนตกโปรยๆ เป็นเวลาสั้นๆ ในช่วงบ่าย"
    },
    {
        "id":  "pdf-1371",
        "word":  "Sky",
        "translation":  "ท้องฟ้า",
        "category":  "Weather",
        "ipa":  "/skaɪ/",
        "sentence":  "The sky was completely clear and blue today.",
        "sentenceTranslation":  "วันนี้ท้องฟ้าปลอดโปร่งและเป็นสีฟ้าสดใส"
    },
    {
        "id":  "pdf-1372",
        "word":  "Sleet",
        "translation":  "ฝนปนหิมะ",
        "category":  "Weather",
        "ipa":  "/sliːt/",
        "sentence":  "The rain turned into sleet as the temperature dropped.",
        "sentenceTranslation":  "ฝนเริ่มเปลี่ยนเป็นฝนน้ำแข็งเมื่ออุณหภูมิลดลง"
    },
    {
        "id":  "pdf-1373",
        "word":  "Smog",
        "translation":  "หมอกผสมควันพิษ",
        "category":  "Weather",
        "ipa":  "/smɑːɡ/",
        "sentence":  "The city was covered in a thick layer of smog.",
        "sentenceTranslation":  "เมืองนี้ถูกปกคลุมไปด้วยหมอกควันหนาทึบ"
    },
    {
        "id":  "pdf-1374",
        "word":  "Snow",
        "translation":  "หิมะ / หิมะตก",
        "category":  "Weather",
        "ipa":  "/snoʊ/",
        "sentence":  "The children love to play in the snow.",
        "sentenceTranslation":  "เด็กๆ ชอบเล่นในหิมะ"
    },
    {
        "id":  "pdf-1375",
        "word":  "Snowflake",
        "translation":  "เกล็ดหิมะ",
        "category":  "Weather",
        "ipa":  "/ˈsnoʊ.fleɪk/",
        "sentence":  "Each snowflake has a unique and beautiful pattern.",
        "sentenceTranslation":  "เกล็ดหิมะแต่ละเกล็ดมีลวดลายที่สวยงามและเป็นเอกลักษณ์"
    },
    {
        "id":  "pdf-1376",
        "word":  "Snowstorm",
        "translation":  "พายุหิมะ",
        "category":  "Weather",
        "ipa":  "/ˈsnoʊ.stɔːrm/",
        "sentence":  "We stayed indoors during the heavy snowstorm.",
        "sentenceTranslation":  "เราพักอยู่แต่ในบ้านในช่วงพายุหิมะพัดกระหน่ำ"
    },
    {
        "id":  "pdf-1377",
        "word":  "Spring",
        "translation":  "ฤดูใบไม้ผลิ",
        "category":  "Weather",
        "ipa":  "/sprɪŋ/",
        "sentence":  "Flowers begin to bloom in the spring.",
        "sentenceTranslation":  "ดอกไม้เริ่มผลิบานในฤดูใบไม้ผลิ"
    },
    {
        "id":  "pdf-1378",
        "word":  "Storm",
        "translation":  "พายุ",
        "category":  "Weather",
        "ipa":  "/stɔːrm/",
        "sentence":  "The power went out during the violent storm.",
        "sentenceTranslation":  "ไฟดับระหว่างเกิดพายุรุนแรง"
    },
    {
        "id":  "pdf-1379",
        "word":  "Stormy",
        "translation":  "มีพายุจัด / ฝนฟ้าคะนองแรง",
        "category":  "Weather",
        "ipa":  "/ˈstɔːr.mi/",
        "sentence":  "It was a dark and stormy night.",
        "sentenceTranslation":  "มันเป็นคืนที่มืดมิดและมีพายุฝนฟ้าคะนอง"
    },
    {
        "id":  "pdf-1380",
        "word":  "Summer",
        "translation":  "ฤดูร้อน",
        "category":  "Weather",
        "ipa":  "/ˈsʌm.ər/",
        "sentence":  "We usually go to the beach in the summer.",
        "sentenceTranslation":  "พวกเรามักจะไปเที่ยวทะเลกันในฤดูร้อน"
    },
    {
        "id":  "pdf-1381",
        "word":  "Sun",
        "translation":  "พระอาทิตย์",
        "category":  "Weather",
        "ipa":  "/sʌn/",
        "sentence":  "The sun rises in the east.",
        "sentenceTranslation":  "ดวงอาทิตย์ขึ้นทางทิศตะวันออก"
    },
    {
        "id":  "pdf-1382",
        "word":  "Sunbeam",
        "translation":  "ลำแสงอาทิตย์",
        "category":  "Weather",
        "ipa":  "/ˈsʌn.biːm/",
        "sentence":  "A single sunbeam shone through the window.",
        "sentenceTranslation":  "ลำแสงอาทิตย์เส้นหนึ่งส่องผ่านเข้ามาทางหน้าต่าง"
    },
    {
        "id":  "pdf-1383",
        "word":  "Sunny",
        "translation":  "มีแดดจัด / ท้องฟ้าแจ่มใส",
        "category":  "Weather",
        "ipa":  "/ˈsʌn.i/",
        "sentence":  "I hope we have sunny weather for our picnic tomorrow.",
        "sentenceTranslation":  "ฉันหวังว่าเราจะมีสภาพอากาศที่แดดจ้าสำหรับไปปิกนิกในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-1384",
        "word":  "Sunrise",
        "translation":  "พระอาทิตย์ขึ้น",
        "category":  "Weather",
        "ipa":  "/ˈsʌn.raɪz/",
        "sentence":  "We woke up early to watch the beautiful sunrise.",
        "sentenceTranslation":  "พวกเราตื่นแต่เช้าเพื่อมาชมพระอาทิตย์ขึ้นที่สวยงาม"
    },
    {
        "id":  "pdf-1385",
        "word":  "Sunset",
        "translation":  "พระอาทิตย์ตก",
        "category":  "Weather",
        "ipa":  "/ˈsʌn.set/",
        "sentence":  "They walked along the beach at sunset.",
        "sentenceTranslation":  "พวกเขาเดินเล่นไปตามชายหาดในช่วงเวลาพระอาทิตย์ตกดิน"
    },
    {
        "id":  "pdf-1386",
        "word":  "Sunshine",
        "translation":  "แสงแดด",
        "category":  "Weather",
        "ipa":  "/ˈsʌn.ʃaɪn/",
        "sentence":  "The warm sunshine made us feel relaxed.",
        "sentenceTranslation":  "แสงแดดอันอบอุ่นทำให้พวกเรารู้สึกผ่อนคลาย"
    },
    {
        "id":  "pdf-1387",
        "word":  "Temperature",
        "translation":  "อุณหภูมิ",
        "category":  "Weather",
        "ipa":  "/ˈtɛmprətʃər/",
        "sentence":  "The temperature drops significantly at night.",
        "sentenceTranslation":  "อุณหภูมิลดลงอย่างมากในช่วงกลางคืน"
    },
    {
        "id":  "pdf-1388",
        "word":  "Thermometer",
        "translation":  "เครื่องวัดอุณหภูมิ / เทอร์โมมิเตอร์",
        "category":  "Weather",
        "ipa":  "/θərˈmɑːmɪtər/",
        "sentence":  "The thermometer showed that he had a high fever.",
        "sentenceTranslation":  "เทอร์โมมิเตอร์แสดงให้เห็นว่าเขามีไข้สูง"
    },
    {
        "id":  "pdf-1389",
        "word":  "Thunder",
        "translation":  "ฟ้าร้อง",
        "category":  "Weather",
        "ipa":  "/ˈθʌndər/",
        "sentence":  "I heard a loud clap of thunder during the storm.",
        "sentenceTranslation":  "ฉันได้ยินเสียงฟ้าร้องดังสนั่นระหว่างพายุ"
    },
    {
        "id":  "pdf-1390",
        "word":  "Thundershower",
        "translation":  "ฝนฟ้าคะนองช่วงสั้นๆ",
        "category":  "Weather",
        "ipa":  "/ˈθʌndərʃaʊər/",
        "sentence":  "A brief thundershower cooled down the hot afternoon.",
        "sentenceTranslation":  "ฝนฟ้าคะนองช่วงสั้น ๆ ช่วยให้อากาศยามบ่ายที่ร้อนอบอ้าวเย็นลง"
    },
    {
        "id":  "pdf-1391",
        "word":  "Thunderstorm",
        "translation":  "พายุฝนฟ้าคะนอง",
        "category":  "Weather",
        "ipa":  "/ˈθʌndərstɔːrm/",
        "sentence":  "The power went out during the heavy thunderstorm.",
        "sentenceTranslation":  "ไฟดับระหว่างเกิดพายุฝนฟ้าคะนองรุนแรง"
    },
    {
        "id":  "pdf-1392",
        "word":  "Tornado",
        "translation":  "พายุทอร์นาโด",
        "category":  "Weather",
        "ipa":  "/tɔːrˈneɪdoʊ/",
        "sentence":  "The tornado destroyed several houses in the village.",
        "sentenceTranslation":  "พายุทอร์นาโดทำลายบ้านเรือนหลายหลังในหมู่บ้าน"
    },
    {
        "id":  "pdf-1393",
        "word":  "Typhoon",
        "translation":  "พายุไต้ฝุ่น",
        "category":  "Weather",
        "ipa":  "/taɪˈfuːn/",
        "sentence":  "The typhoon is expected to hit the coast tomorrow.",
        "sentenceTranslation":  "คาดว่าพายุไต้ฝุ่นจะพัดเข้าถล่มชายฝั่งในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-1394",
        "word":  "UV rays",
        "translation":  "รังสีอัลตราไวโอเลต",
        "category":  "Weather",
        "ipa":  "/ˌjuːˈviː reɪz/",
        "sentence":  "You should wear sunscreen to protect your skin from UV rays.",
        "sentenceTranslation":  "คุณควรทาครีมกันแดดเพื่อปกป้องผิวจากรังสีอัลตราไวโอเลต"
    },
    {
        "id":  "pdf-1395",
        "word":  "Vapor / Vapour",
        "translation":  "ไอน้ำ",
        "category":  "Weather",
        "ipa":  "/ˈveɪpər/",
        "sentence":  "Water vapor rises from the boiling kettle.",
        "sentenceTranslation":  "ไอน้ำลอยขึ้นมาจากกาต้มน้ำที่กำลังเดือด"
    },
    {
        "id":  "pdf-1396",
        "word":  "Wind",
        "translation":  "ลม",
        "category":  "Weather",
        "ipa":  "/wɪnd/",
        "sentence":  "The strong wind blew the leaves off the trees.",
        "sentenceTranslation":  "ลมแรงพัดใบไม้ร่วงหล่นจากต้นไม้"
    },
    {
        "id":  "pdf-1397",
        "word":  "Wind chill",
        "translation":  "ดัชนีความหนาวเย็นจากลม",
        "category":  "Weather",
        "ipa":  "/ˈwɪnd tʃɪl/",
        "sentence":  "The actual temperature is freezing, but the wind chill makes it feel even colder.",
        "sentenceTranslation":  "อุณหภูมิจริงนั้นจุดเยือกแข็ง แต่ดัชนีความเย็นจากลมทำให้รู้สึกหนาวเย็นยิ่งขึ้นไปอีก"
    },
    {
        "id":  "pdf-1398",
        "word":  "Windy",
        "translation":  "ลมแรง / มีลมพัดมาก",
        "category":  "Weather",
        "ipa":  "/ˈwɪndi/",
        "sentence":  "It is a very windy day, so hold onto your hat.",
        "sentenceTranslation":  "วันนี้เป็นวันที่ลมแรงมาก ดังนั้นจงจับหมวกของคุณไว้ให้ดี"
    },
    {
        "id":  "pdf-1399",
        "word":  "Winter",
        "translation":  "ฤดูหนาว",
        "category":  "Weather",
        "ipa":  "/ˈwɪntər/",
        "sentence":  "We love going skiing in the winter.",
        "sentenceTranslation":  "พวกเราชอบไปเล่นสกีในฤดูหนาว"
    },
    {
        "id":  "pdf-1400",
        "word":  "Wintery / Wintry",
        "translation":  "หนาวเย็นแบบฤดูหนาว",
        "category":  "Weather",
        "ipa":  "/ˈwɪntri/",
        "sentence":  "The trees were covered in a wintry frost.",
        "sentenceTranslation":  "ต้นไม้ต่างถูกปกคลุมไปด้วยน้ำค้างแข็งอันหนาวเย็นแบบฤดูหนาว"
    },
    {
        "id":  "pdf-1401",
        "word":  "Admire",
        "translation":  "เลื่อมใส / ชื่นชม",
        "category":  "Emotions",
        "ipa":  "/ədˈmaɪər/",
        "sentence":  "I really admire her dedication to her work.",
        "sentenceTranslation":  "ฉันชื่นชมความทุ่มเทในการทำงานของเธอจริงๆ"
    },
    {
        "id":  "pdf-1402",
        "word":  "Affectionate",
        "translation":  "ซึ่งแสดงความรัก / เมตตา",
        "category":  "Emotions",
        "ipa":  "/əˈfɛk.ʃən.ət/",
        "sentence":  "She gave her dog an affectionate pat on the head.",
        "sentenceTranslation":  "เธอตบหัวสุนัขของเธอเบา ๆ ด้วยความรัก"
    },
    {
        "id":  "pdf-1403",
        "word":  "Aggressive",
        "translation":  "ก้าวร้าว",
        "category":  "Emotions",
        "ipa":  "/əˈɡrɛs.ɪv/",
        "sentence":  "The stray dog showed aggressive behavior toward strangers.",
        "sentenceTranslation":  "สุนัขจรจัดแสดงพฤติกรรมก้าวร้าวต่อคนแปลกหน้า"
    },
    {
        "id":  "pdf-1404",
        "word":  "Agony",
        "translation":  "ความทุกข์ทรมานใจอย่างรุนแรง",
        "category":  "Emotions",
        "ipa":  "/ˈæɡ.ə.ni/",
        "sentence":  "He lay on the ground in agony after breaking his leg.",
        "sentenceTranslation":  "เขานอนดิ้นรนด้วยความเจ็บปวดทรมานอยู่บนพื้นหลังจากขาหัก"
    },
    {
        "id":  "pdf-1405",
        "word":  "Alert",
        "translation":  "ตื่นตัว / ระแวดระวัง",
        "category":  "Emotions",
        "ipa":  "/əˈlɝːt/",
        "sentence":  "A good security guard must remain alert at all times.",
        "sentenceTranslation":  "เจ้าหน้าที่รักษาความปลอดภัยที่ดีต้องตื่นตัวอยู่ตลอดเวลา"
    },
    {
        "id":  "pdf-1406",
        "word":  "Amazed",
        "translation":  "ทึ่ง / อัศจรรย์ใจ",
        "category":  "Emotions",
        "ipa":  "/əˈmeɪzd/",
        "sentence":  "We were amazed by the beautiful view from the top of the mountain.",
        "sentenceTranslation":  "พวกเราทึ่งกับทิวทัศน์ที่สวยงามจากยอดเขา"
    },
    {
        "id":  "pdf-1407",
        "word":  "Amused",
        "translation":  "รู้สึกสนุกสนานขบขัน",
        "category":  "Emotions",
        "ipa":  "/əˈmjuːzd/",
        "sentence":  "The children were amused by the clown\u0027s funny tricks.",
        "sentenceTranslation":  "เด็ก ๆ รู้สึกสนุกสนานกับมายากลตลก ๆ ของตัวตลก"
    },
    {
        "id":  "pdf-1408",
        "word":  "Angry",
        "translation":  "โกรธ",
        "category":  "Emotions",
        "ipa":  "/ˈæŋ.ɡri/",
        "sentence":  "He was angry because his flight was canceled.",
        "sentenceTranslation":  "เขารู้สึกโกรธเพราะเที่ยวบินของเขาถูกยกเลิก"
    },
    {
        "id":  "pdf-1409",
        "word":  "Annoyed",
        "translation":  "รำคาญใจ / หงุดหงิด",
        "category":  "Emotions",
        "ipa":  "/əˈnɔɪd/",
        "sentence":  "She was annoyed by the constant noise outside her window.",
        "sentenceTranslation":  "เธอรู้สึกรำคาญเสียงรบกวนที่ดังอย่างต่อเนื่องนอกหน้าต่างของเธอ"
    },
    {
        "id":  "pdf-1410",
        "word":  "Anxious",
        "translation":  "วิตกกังวล / กระวนกระวาย",
        "category":  "Emotions",
        "ipa":  "/ˈæŋk.ʃəs/",
        "sentence":  "Parents often feel anxious about their children\u0027s future.",
        "sentenceTranslation":  "พ่อแม่มักจะรู้สึกวิตกกังวลเกี่ยวกับอนาคตของลูก ๆ"
    },
    {
        "id":  "pdf-1411",
        "word":  "Apathetic",
        "translation":  "เฉยเมย / ไร้อารมณ์ความรู้สึก",
        "category":  "Emotions",
        "ipa":  "/ˌæp.əˈθet̬.ɪk/",
        "sentence":  "Many young people are apathetic about politics.",
        "sentenceTranslation":  "คนหนุ่มสาวจำนวนมากรู้สึกเฉยเมยต่อการเมือง"
    },
    {
        "id":  "pdf-1412",
        "word":  "Ashamed",
        "translation":  "ละอายใจ",
        "category":  "Emotions",
        "ipa":  "/əˈʃeɪmd/",
        "sentence":  "He felt ashamed of his dishonest behavior.",
        "sentenceTranslation":  "เขารู้สึกละอายใจกับพฤติกรรมที่ไม่ซื่อสัตย์ของตนเอง"
    },
    {
        "id":  "pdf-1413",
        "word":  "Astonished",
        "translation":  "ประหลาดใจอย่างมาก",
        "category":  "Emotions",
        "ipa":  "/əˈstɑː.nɪʃt/",
        "sentence":  "She was astonished to win the first prize in the competition.",
        "sentenceTranslation":  "เธอรู้สึกประหลาดใจอย่างยิ่งที่ได้รับรางวัลชนะเลิศในการแข่งขัน"
    },
    {
        "id":  "pdf-1414",
        "word":  "Awkward",
        "translation":  "รู้สึกอึดอัดใจ / ทำตัวไม่ถูก",
        "category":  "Emotions",
        "ipa":  "/ˈɑː.kwɚd/",
        "sentence":  "There was an awkward silence after he made the inappropriate joke.",
        "sentenceTranslation":  "เกิดความเงียบอันน่าอึดอัดขึ้นหลังจากที่เขาเล่นมุกตลกที่ไม่เหมาะสม"
    },
    {
        "id":  "pdf-1415",
        "word":  "Bitter",
        "translation":  "ขมขื่นใจ",
        "category":  "Emotions",
        "ipa":  "/ˈbɪt.ər/",
        "sentence":  "He felt bitter about losing his job after working there for ten years.",
        "sentenceTranslation":  "เขารู้สึกขมขื่นใจที่ต้องตกงานหลังจากทำงานที่นั่นมาสิบปี"
    },
    {
        "id":  "pdf-1416",
        "word":  "Bored",
        "translation":  "เบื่อ",
        "category":  "Emotions",
        "ipa":  "/bɔːrd/",
        "sentence":  "The students got bored during the long and dry lecture.",
        "sentenceTranslation":  "นักเรียนรู้สึกเบื่อระหว่างการบรรยายที่ยาวนานและน่าเบื่อหน่าย"
    },
    {
        "id":  "pdf-1417",
        "word":  "Brave",
        "translation":  "กล้าหาญ",
        "category":  "Emotions",
        "ipa":  "/breɪv/",
        "sentence":  "The brave firefighter rescued the cat from the tall tree.",
        "sentenceTranslation":  "นักดับเพลิงผู้กล้าหาญช่วยแมวลงมาจากต้นไม้สูง"
    },
    {
        "id":  "pdf-1418",
        "word":  "Calm",
        "translation":  "สงบ / เยือกเย็น",
        "category":  "Emotions",
        "ipa":  "/kɑːm/",
        "sentence":  "She remained calm during the difficult exam.",
        "sentenceTranslation":  "เธอยังคงสงบสติอารมณ์ได้ในระหว่างการสอบที่ยากลำบาก"
    },
    {
        "id":  "pdf-1419",
        "word":  "Cheerful",
        "translation":  "ร่าเริงเบิกบาน",
        "category":  "Emotions",
        "ipa":  "/ˈtʃɪə.fəl/",
        "sentence":  "He gave me a cheerful smile to brighten my day.",
        "sentenceTranslation":  "เขายิ้มอย่างร่าเริงให้ฉันเพื่อทำให้วันของฉันสดใสขึ้น"
    },
    {
        "id":  "pdf-1420",
        "word":  "Confused",
        "translation":  "สับสน",
        "category":  "Emotions",
        "ipa":  "/kənˈfjuːzd/",
        "sentence":  "I was confused by the complicated directions.",
        "sentenceTranslation":  "ฉันรู้สึกสับสนกับเส้นทางที่ซับซ้อน"
    },
    {
        "id":  "pdf-1421",
        "word":  "Content",
        "translation":  "พึงพอใจในสิ่งที่ตนมี",
        "category":  "Emotions",
        "ipa":  "/kənˈtent/",
        "sentence":  "They were content with their simple life in the countryside.",
        "sentenceTranslation":  "พวกเขารู้สึกพึงพอใจกับชีวิตที่เรียบง่ายในต่างจังหวัด"
    },
    {
        "id":  "pdf-1422",
        "word":  "Cynical",
        "translation":  "มองโลกในแง่ร้าย / ประชดประชัน",
        "category":  "Emotions",
        "ipa":  "/ˈsɪn.ɪ.kəl/",
        "sentence":  "He is cynical about the politician\u0027s promises.",
        "sentenceTranslation":  "เขารู้สึกไม่เชื่อและมองโลกในแง่ร้ายต่อคำสัญญาของนักการเมือง"
    },
    {
        "id":  "pdf-1423",
        "word":  "Delighted",
        "translation":  "ยินดีมาก / ปลื้มปีติ",
        "category":  "Emotions",
        "ipa":  "/dɪˈlaɪ.tɪd/",
        "sentence":  "She was delighted to receive the unexpected gift.",
        "sentenceTranslation":  "เธอยินดีเป็นอย่างยิ่งที่ได้รับของขวัญที่คาดไม่ถึง"
    },
    {
        "id":  "pdf-1424",
        "word":  "Depressed",
        "translation":  "หดหู่ / ซึมเศร้า",
        "category":  "Emotions",
        "ipa":  "/dɪˈprest/",
        "sentence":  "The continuous rainy weather made him feel depressed.",
        "sentenceTranslation":  "สภาพอากาศที่มีฝนตกอย่างต่อเนื่องทำให้เขารู้สึกหดหู่ใจ"
    },
    {
        "id":  "pdf-1425",
        "word":  "Desperate",
        "translation":  "สิ้นหวัง / จนตรอก",
        "category":  "Emotions",
        "ipa":  "/ˈdes.pər.ət/",
        "sentence":  "They made a desperate attempt to fix the leaking roof.",
        "sentenceTranslation":  "พวกเขาพยายามอย่างสิ้นหวังที่จะซ่อมแซมหลังคาที่รั่ว"
    },
    {
        "id":  "pdf-1426",
        "word":  "Devastated",
        "translation":  "ใจสลาย / สิ้นเนื้อประดาตัว",
        "category":  "Emotions",
        "ipa":  "/ˈdev.ə.steɪ.tɪd/",
        "sentence":  "She was devastated by the loss of her pet dog.",
        "sentenceTranslation":  "เธอรู้สึกใจสลายกับการสูญเสียสุนัขสัตว์เลี้ยงของเธอ"
    },
    {
        "id":  "pdf-1427",
        "word":  "Disappointed",
        "translation":  "ผิดหวัง",
        "category":  "Emotions",
        "ipa":  "/ˌdɪs.əˈpɔɪn.tɪd/",
        "sentence":  "We were disappointed that the concert was canceled.",
        "sentenceTranslation":  "พวกเราผิดหวังที่คอนเสิร์ตถูกยกเลิก"
    },
    {
        "id":  "pdf-1428",
        "word":  "Disgusted",
        "translation":  "ขยะแขยง / รังเกียจ",
        "category":  "Emotions",
        "ipa":  "/dɪsˈɡʌs.tɪd/",
        "sentence":  "He was disgusted by the dirty state of the kitchen.",
        "sentenceTranslation":  "เขารู้สึกสะอิดสะเอียนกับสภาพที่สกปรกของห้องครัว"
    },
    {
        "id":  "pdf-1429",
        "word":  "Disheartened",
        "translation":  "ท้อแท้ใจ / หมดกำลังใจ",
        "category":  "Emotions",
        "ipa":  "/dɪsˈhɑː.tənd/",
        "sentence":  "The team felt disheartened after losing the match.",
        "sentenceTranslation":  "ทีมรู้สึกท้อแท้หลังจากพ่ายแพ้ในการแข่งขัน"
    },
    {
        "id":  "pdf-1430",
        "word":  "Dismayed",
        "translation":  "ท้อแท้ / ใจเสีย",
        "category":  "Emotions",
        "ipa":  "/dɪsˈmeɪd/",
        "sentence":  "She was dismayed to find her car keys missing.",
        "sentenceTranslation":  "เธอรู้สึกใจเสียเมื่อพบว่ากุญแจรถของเธอหายไป"
    },
    {
        "id":  "pdf-1431",
        "word":  "Distracted",
        "translation":  "วอกแวก / จิตใจไม่อยู่กับเนื้อกับตัว",
        "category":  "Emotions",
        "ipa":  "/dɪˈstræk.tɪd/",
        "sentence":  "The loud noise distracted him from his studies.",
        "sentenceTranslation":  "เสียงดังทำให้เขาเสียสมาธิจากการเรียน"
    },
    {
        "id":  "pdf-1432",
        "word":  "Distressed",
        "translation":  "เป็นทุกข์อย่างหนัก",
        "category":  "Emotions",
        "ipa":  "/dɪˈstrest/",
        "sentence":  "She was deeply distressed by the news of the accident.",
        "sentenceTranslation":  "เธอรู้สึกเป็นทุกข์อย่างยิ่งกับข่าวอุบัติเหตุนั้น"
    },
    {
        "id":  "pdf-1433",
        "word":  "Dread",
        "translation":  "พรั่นพรึง / กลัวมาก",
        "category":  "Emotions",
        "ipa":  "/dred/",
        "sentence":  "I dread the thought of public speaking.",
        "sentenceTranslation":  "ฉันกลัวความคิดที่จะต้องพูดในที่สาธารณะ"
    },
    {
        "id":  "pdf-1434",
        "word":  "Eager",
        "translation":  "กระตือรือร้น / กระหายที่จะทำ",
        "category":  "Emotions",
        "ipa":  "/ˈiː.ɡər/",
        "sentence":  "The children were eager to open their presents.",
        "sentenceTranslation":  "พวกเด็กๆ กระตือรือร้นที่จะเปิดของขวัญของพวกเขา"
    },
    {
        "id":  "pdf-1435",
        "word":  "Ecstatic",
        "translation":  "ดีใจอย่างเหลือล้น / ปลื้มปีติสุดขีด",
        "category":  "Emotions",
        "ipa":  "/ɪkˈstæt.ɪk/",
        "sentence":  "He was ecstatic when he won the lottery.",
        "sentenceTranslation":  "เขาดีใจอย่างเหลือล้นเมื่อเขาถูกลอตเตอรี"
    },
    {
        "id":  "pdf-1436",
        "word":  "Embarrassed",
        "translation":  "อับอาย / ขายหน้า",
        "category":  "Emotions",
        "ipa":  "/ɪmˈbær.əst/",
        "sentence":  "I felt embarrassed when I spilled coffee on my shirt.",
        "sentenceTranslation":  "ฉันรู้สึกอับอายเมื่อทำกาแฟหกใส่เสื้อของฉัน"
    },
    {
        "id":  "pdf-1437",
        "word":  "Emotion",
        "translation":  "อารมณ์",
        "category":  "Emotions",
        "ipa":  "/ɪˈmoʊ.ʃən/",
        "sentence":  "Love is a very powerful emotion.",
        "sentenceTranslation":  "ความรักเป็นอารมณ์ที่มีพลังมาก"
    },
    {
        "id":  "pdf-1438",
        "word":  "Energetic",
        "translation":  "กระฉับกระเฉง / มีพลัง",
        "category":  "Emotions",
        "ipa":  "/ˌen.əˈdʒet.ɪk/",
        "sentence":  "She is an energetic person who loves to exercise.",
        "sentenceTranslation":  "เธอเป็นคนที่มีพลังงานล้นเหลือที่ชอบออกกำลังกาย"
    },
    {
        "id":  "pdf-1439",
        "word":  "Enthusiastic",
        "translation":  "กระตือรือร้นอย่างมาก",
        "category":  "Emotions",
        "ipa":  "/ɪnˌθuː.ziˈæs.tɪk/",
        "sentence":  "The team was enthusiastic about the new project.",
        "sentenceTranslation":  "ทีมงานรู้สึกกระตือรือร้นกับโครงการใหม่นี้"
    },
    {
        "id":  "pdf-1440",
        "word":  "Envious",
        "translation":  "อิจฉาริษยา",
        "category":  "Emotions",
        "ipa":  "/ˈen.vi.əs/",
        "sentence":  "He was envious of his brother\u0027s success.",
        "sentenceTranslation":  "เขาอิจฉาในความสำเร็จของพี่ชาย"
    },
    {
        "id":  "pdf-1441",
        "word":  "Excited",
        "translation":  "ตื่นเต้น",
        "category":  "Emotions",
        "ipa":  "/ɪkˈsaɪ.tɪd/",
        "sentence":  "She was excited to go on her first trip abroad.",
        "sentenceTranslation":  "เธอรู้สึกตื่นเต้นที่จะได้ไปเที่ยวต่างประเทศครั้งแรก"
    },
    {
        "id":  "pdf-1442",
        "word":  "Exhausted",
        "translation":  "เหนื่อยล้าอ่อนเพลียอย่างมาก",
        "category":  "Emotions",
        "ipa":  "/ɪɡˈzɔː.stɪd/",
        "sentence":  "After the long run, he felt completely exhausted.",
        "sentenceTranslation":  "หลังจากวิ่งระยะไกล เขารู้สึกเหนื่อยล้าอย่างที่สุด"
    },
    {
        "id":  "pdf-1443",
        "word":  "Fearful",
        "translation":  "น่ากลัว / รู้สึกกลัว",
        "category":  "Emotions",
        "ipa":  "/ˈfɪə.fəl/",
        "sentence":  "She was fearful of walking alone in the dark.",
        "sentenceTranslation":  "เธอกลัวที่จะเดินคนเดียวในความมืด"
    },
    {
        "id":  "pdf-1444",
        "word":  "Feeling",
        "translation":  "ความรู้สึก",
        "category":  "Emotions",
        "ipa":  "/ˈfiː.lɪŋ/",
        "sentence":  "A feeling of joy washed over her.",
        "sentenceTranslation":  "ความรู้สึกยินดีเอ่อล้นเข้ามาในตัวเธอ"
    },
    {
        "id":  "pdf-1445",
        "word":  "Fierce",
        "translation":  "ดุร้าย / เกรียวกราด",
        "category":  "Emotions",
        "ipa":  "/fɪəs/",
        "sentence":  "The competition was fierce, but they managed to win.",
        "sentenceTranslation":  "การแข่งขันนั้นดุเดือดมาก แต่พวกเขาก็จัดการจนชนะได้"
    },
    {
        "id":  "pdf-1446",
        "word":  "Frustrated",
        "translation":  "หงุดหงิดใจ (เพราะทำไม่สำเร็จตามหวัง)",
        "category":  "Emotions",
        "ipa":  "/frʌsˈtreɪ.tɪd/",
        "sentence":  "He got frustrated when the computer stopped working.",
        "sentenceTranslation":  "เขารู้สึกหงุดหงิดเมื่อคอมพิวเตอร์หยุดทำงาน"
    },
    {
        "id":  "pdf-1447",
        "word":  "Furious",
        "translation":  "โกรธจัด / เป็นฟืนเป็นไฟ",
        "category":  "Emotions",
        "ipa":  "/ˈfjʊə.ri.əs/",
        "sentence":  "He was furious when he heard the news.",
        "sentenceTranslation":  "เขาโกรธจัดเมื่อได้ยินข่าวนี้"
    },
    {
        "id":  "pdf-1448",
        "word":  "Glad",
        "translation":  "ดีใจ / ยินดี",
        "category":  "Emotions",
        "ipa":  "/ɡlæd/",
        "sentence":  "I am glad to see you today.",
        "sentenceTranslation":  "ฉันดีใจที่ได้พบคุณวันนี้"
    },
    {
        "id":  "pdf-1449",
        "word":  "Gloomy",
        "translation":  "เศร้าหมอง / มืดมน",
        "category":  "Emotions",
        "ipa":  "/ˈɡluː.mi/",
        "sentence":  "The weather was gloomy and rainy.",
        "sentenceTranslation":  "อากาศดูหม่นหมองและมีฝนตก"
    },
    {
        "id":  "pdf-1450",
        "word":  "Grateful",
        "translation":  "รู้สึกขอบคุณ / สำนึกในบุญคุณ",
        "category":  "Emotions",
        "ipa":  "/ˈɡreɪt.fəl/",
        "sentence":  "I am grateful for your help.",
        "sentenceTranslation":  "ฉันรู้สึกขอบคุณสำหรับความช่วยเหลือของคุณ"
    },
    {
        "id":  "pdf-1451",
        "word":  "Grief",
        "translation":  "ความโศกเศร้าอย่างสุดซึ้ง",
        "category":  "Emotions",
        "ipa":  "/ɡriːf/",
        "sentence":  "She was filled with grief after the loss.",
        "sentenceTranslation":  "เธอเต็มไปด้วยความโศกเศร้าหลังจากการสูญเสีย"
    },
    {
        "id":  "pdf-1452",
        "word":  "Guilty",
        "translation":  "รู้สึกผิด",
        "category":  "Emotions",
        "ipa":  "/ˈɡɪlti/",
        "sentence":  "He felt guilty about lying to his friend.",
        "sentenceTranslation":  "เขารู้สึกผิดที่โกหกเพื่อนของเขา"
    },
    {
        "id":  "pdf-1453",
        "word":  "Happy",
        "translation":  "มีความสุข",
        "category":  "Emotions",
        "ipa":  "/ˈhæpi/",
        "sentence":  "She is very happy with her new job.",
        "sentenceTranslation":  "เธอมีความสุขมากกับงานใหม่ของเธอ"
    },
    {
        "id":  "pdf-1454",
        "word":  "Heartbroken",
        "translation":  "อกหัก / เสียใจอย่างรุนแรง",
        "category":  "Emotions",
        "ipa":  "/ˈhɑːrtbroʊkən/",
        "sentence":  "He was heartbroken when they broke up.",
        "sentenceTranslation":  "เขาใจสลายตอนที่พวกเขาเลิกกัน"
    },
    {
        "id":  "pdf-1455",
        "word":  "Helpless",
        "translation":  "ไร้ที่พึ่ง / ไร้หนทาง",
        "category":  "Emotions",
        "ipa":  "/ˈhelpləs/",
        "sentence":  "I felt helpless watching the disaster happen.",
        "sentenceTranslation":  "ฉันรู้สึกไร้หนทางเมื่อเห็นหายนะเกิดขึ้น"
    },
    {
        "id":  "pdf-1456",
        "word":  "Homesick",
        "translation":  "คิดถึงบ้าน",
        "category":  "Emotions",
        "ipa":  "/ˈhoʊmsɪk/",
        "sentence":  "She felt homesick during her first week abroad.",
        "sentenceTranslation":  "เธอรู้สึกคิดถึงบ้านในช่วงสัปดาห์แรกที่อยู่ต่างประเทศ"
    },
    {
        "id":  "pdf-1457",
        "word":  "Hopeful",
        "translation":  "เต็มไปด้วยความหวัง",
        "category":  "Emotions",
        "ipa":  "/ˈhoʊpfəl/",
        "sentence":  "We are hopeful for a positive outcome.",
        "sentenceTranslation":  "เรามีความหวังว่าผลลัพธ์จะเป็นไปในทางที่ดี"
    },
    {
        "id":  "pdf-1458",
        "word":  "Hopeless",
        "translation":  "สิ้นหวัง / ไม่มีหวัง",
        "category":  "Emotions",
        "ipa":  "/ˈhoʊpləs/",
        "sentence":  "He felt hopeless about ever finding a job.",
        "sentenceTranslation":  "เขารู้สึกหมดหวังที่จะได้งานทำ"
    },
    {
        "id":  "pdf-1459",
        "word":  "Horrified",
        "translation":  "ตกใจกลัวสุดขีด",
        "category":  "Emotions",
        "ipa":  "/ˈhɔːrəfaɪd/",
        "sentence":  "She was horrified by the sight of the accident.",
        "sentenceTranslation":  "เธอรู้สึกหวาดกลัวเมื่อเห็นภาพอุบัติเหตุนั้น"
    },
    {
        "id":  "pdf-1460",
        "word":  "Hostile",
        "translation":  "เป็นศัตรู / ไม่เป็นมิตร",
        "category":  "Emotions",
        "ipa":  "/ˈhɑːstl/",
        "sentence":  "The crowd became hostile towards the police.",
        "sentenceTranslation":  "ฝูงชนเริ่มมีท่าทีเป็นศัตรูต่อเจ้าหน้าที่ตำรวจ"
    },
    {
        "id":  "pdf-1461",
        "word":  "Hurt",
        "translation":  "เจ็บปวด (ร่างกายหรือจิตใจ)",
        "category":  "Emotions",
        "ipa":  "/hɜːrt/",
        "sentence":  "His unkind words really hurt her feelings.",
        "sentenceTranslation":  "คำพูดที่ไม่ดีของเขาทำให้เธอเสียความรู้สึกจริงๆ"
    },
    {
        "id":  "pdf-1462",
        "word":  "Impatient",
        "translation":  "ใจร้อน / ไม่อดทน",
        "category":  "Emotions",
        "ipa":  "/ɪmˈpeɪʃənt/",
        "sentence":  "He became impatient waiting in the long line.",
        "sentenceTranslation":  "เขารู้สึกไม่อดทนขณะรอคิวที่ยาวเหยียด"
    },
    {
        "id":  "pdf-1463",
        "word":  "Indifferent",
        "translation":  "เมินเฉย / ไม่แยแส",
        "category":  "Emotions",
        "ipa":  "/ɪnˈdɪfrənt/",
        "sentence":  "She remained indifferent to his constant complaints.",
        "sentenceTranslation":  "เธอยังคงเฉยเมยต่อคำบ่นของเขาที่พูดอยู่ตลอด"
    },
    {
        "id":  "pdf-1464",
        "word":  "Insecure",
        "translation":  "ไม่มั่นใจในตัวเอง / รู้สึกไม่ปลอดภัย",
        "category":  "Emotions",
        "ipa":  "/ˌɪnsɪˈkjʊr/",
        "sentence":  "He felt insecure about his performance at work.",
        "sentenceTranslation":  "เขารู้สึกไม่มั่นคงเกี่ยวกับผลงานของเขาที่ทำงาน"
    },
    {
        "id":  "pdf-1465",
        "word":  "Inspired",
        "translation":  "มีแรงบันดาลใจ",
        "category":  "Emotions",
        "ipa":  "/ɪnˈspaɪərd/",
        "sentence":  "I was inspired by her courage and dedication.",
        "sentenceTranslation":  "ฉันได้รับแรงบันดาลใจจากความกล้าหาญและความทุ่มเทของเธอ"
    },
    {
        "id":  "pdf-1466",
        "word":  "Insulted",
        "translation":  "รู้สึกถูกดูหมิ่น / เหยียดหยาม",
        "category":  "Emotions",
        "ipa":  "/ɪnˈsʌltɪd/",
        "sentence":  "He felt insulted by the rude comment.",
        "sentenceTranslation":  "เขารู้สึกถูกดูหมิ่นจากความคิดเห็นที่หยาบคายนั้น"
    },
    {
        "id":  "pdf-1467",
        "word":  "Irritated",
        "translation":  "ระคายเคือง / หงุดหงิดฉุนเฉียว",
        "category":  "Emotions",
        "ipa":  "/ˈɪr.ɪ.teɪ.tɪd/",
        "sentence":  "She felt irritated by his constant interruptions.",
        "sentenceTranslation":  "เธอรู้สึกหงุดหงิดที่เขาขัดจังหวะอยู่ตลอดเวลา"
    },
    {
        "id":  "pdf-1468",
        "word":  "Jealous",
        "translation":  "หึงหวง / อิจฉา",
        "category":  "Emotions",
        "ipa":  "/ˈdʒel.əs/",
        "sentence":  "He was jealous of his brother\u0027s success.",
        "sentenceTranslation":  "เขาอิจฉาความสำเร็จของพี่ชาย"
    },
    {
        "id":  "pdf-1469",
        "word":  "Joyful",
        "translation":  "มีความสุขสำราญ",
        "category":  "Emotions",
        "ipa":  "/ˈdʒɔɪ.fəl/",
        "sentence":  "It was a joyful reunion with her old friends.",
        "sentenceTranslation":  "มันเป็นการกลับมาพบกันอย่างมีความสุขกับเพื่อนเก่าของเธอ"
    },
    {
        "id":  "pdf-1470",
        "word":  "Lonely",
        "translation":  "เหงา",
        "category":  "Emotions",
        "ipa":  "/ˈləʊn.li/",
        "sentence":  "He felt lonely living in a big city by himself.",
        "sentenceTranslation":  "เขารู้สึกเหงาที่ต้องอาศัยอยู่ในเมืองใหญ่เพียงลำพัง"
    },
    {
        "id":  "pdf-1471",
        "word":  "Miserable",
        "translation":  "เป็นทุกข์ระทม / ทุกข์ยาก",
        "category":  "Emotions",
        "ipa":  "/ˈmɪz.ər.ə.bəl/",
        "sentence":  "They spent a miserable weekend in the rain.",
        "sentenceTranslation":  "พวกเขาใช้เวลาช่วงวันหยุดสุดสัปดาห์อย่างทุกข์ทรมานท่ามกลางสายฝน"
    },
    {
        "id":  "pdf-1472",
        "word":  "Moody",
        "translation":  "อารมณ์แปรปรวนง่าย",
        "category":  "Emotions",
        "ipa":  "/ˈmuː.di/",
        "sentence":  "He is a moody person who changes his mind frequently.",
        "sentenceTranslation":  "เขาเป็นคนเจ้าอารมณ์ที่เปลี่ยนใจบ่อยครั้ง"
    },
    {
        "id":  "pdf-1473",
        "word":  "Nervous",
        "translation":  "ประหม่า / ตื่นเต้นกระวนกระวาย",
        "category":  "Emotions",
        "ipa":  "/ˈnɜː.vəs/",
        "sentence":  "She was nervous before her job interview.",
        "sentenceTranslation":  "เธอรู้สึกประหม่าก่อนการสัมภาษณ์งาน"
    },
    {
        "id":  "pdf-1474",
        "word":  "Nostalgic",
        "translation":  "อาลัยอาวรณ์ / คิดถึงความหลัง",
        "category":  "Emotions",
        "ipa":  "/nɒsˈtæl.dʒɪk/",
        "sentence":  "Looking at the old photos made me feel nostalgic.",
        "sentenceTranslation":  "การได้ดูรูปถ่ายเก่าๆ ทำให้ฉันรู้สึกโหยหาอดีต"
    },
    {
        "id":  "pdf-1475",
        "word":  "Offended",
        "translation":  "รู้สึกถูกลบหลู่ / เคืองใจ",
        "category":  "Emotions",
        "ipa":  "/əˈfen.dɪd/",
        "sentence":  "I was offended by his rude comments.",
        "sentenceTranslation":  "ฉันรู้สึกขุ่นเคืองกับคำวิจารณ์ที่หยาบคายของเขา"
    },
    {
        "id":  "pdf-1476",
        "word":  "Optimistic",
        "translation":  "มองโลกในแง่ดี",
        "category":  "Emotions",
        "ipa":  "/ˌɒp.tɪˈmɪs.tɪk/",
        "sentence":  "She is optimistic about the future of the company.",
        "sentenceTranslation":  "เธอรู้สึกมองโลกในแง่ดีเกี่ยวกับอนาคตของบริษัท"
    },
    {
        "id":  "pdf-1477",
        "word":  "Outraged",
        "translation":  "โกรธแค้นอย่างรุนแรง",
        "category":  "Emotions",
        "ipa":  "/ˈaʊtreɪdʒd/",
        "sentence":  "She was outraged by the unfair treatment of the workers.",
        "sentenceTranslation":  "เธอรู้สึกโกรธแค้นกับการปฏิบัติที่ไม่เป็นธรรมต่อคนงาน"
    },
    {
        "id":  "pdf-1478",
        "word":  "Overwhelmed",
        "translation":  "รู้สึกท่วมท้น / รับไม่ไหว (จากอารมณ์)",
        "category":  "Emotions",
        "ipa":  "/ˌoʊvərˈwelmd/",
        "sentence":  "He felt overwhelmed by the amount of work he had to do.",
        "sentenceTranslation":  "เขารู้สึกท่วมท้นและรับมือไม่ไหวกับปริมาณงานที่เขาต้องทำ"
    },
    {
        "id":  "pdf-1479",
        "word":  "Paranoid",
        "translation":  "ระแวง / วิตกจริตเกินเหตุ",
        "category":  "Emotions",
        "ipa":  "/ˈpærənɔɪd/",
        "sentence":  "After watching the horror movie, she felt paranoid about every little noise.",
        "sentenceTranslation":  "หลังจากดูภาพยนตร์สยองขวัญ เธอรู้สึกหวาดระแวงกับทุกๆ เสียงเล็กๆ น้อยๆ"
    },
    {
        "id":  "pdf-1480",
        "word":  "Passionate",
        "translation":  "เต็มไปด้วยความหลงใหล / คลั่งไคล้",
        "category":  "Emotions",
        "ipa":  "/ˈpæʃənət/",
        "sentence":  "The young artist is very passionate about painting.",
        "sentenceTranslation":  "ศิลปินหนุ่มคนนี้มีความหลงใหลในการวาดภาพเป็นอย่างมาก"
    },
    {
        "id":  "pdf-1481",
        "word":  "Pessimistic",
        "translation":  "มองโลกในแง่ร้าย",
        "category":  "Emotions",
        "ipa":  "/ˌpesɪˈmɪstɪk/",
        "sentence":  "He has a pessimistic view of the company\u0027s future.",
        "sentenceTranslation":  "เขามีมุมมองในแง่ร้ายเกี่ยวกับอนาคตของบริษัท"
    },
    {
        "id":  "pdf-1482",
        "word":  "Proud",
        "translation":  "ภูมิใจ",
        "category":  "Emotions",
        "ipa":  "/praʊd/",
        "sentence":  "Her parents were very proud of her graduation.",
        "sentenceTranslation":  "พ่อแม่ของเธอภูมิใจในตัวเธอมากที่เธอเรียนจบ"
    },
    {
        "id":  "pdf-1483",
        "word":  "Regretful",
        "translation":  "รู้สึกเสียใจภายหลัง",
        "category":  "Emotions",
        "ipa":  "/rɪˈɡretfl/",
        "sentence":  "He felt regretful about his harsh words during the argument.",
        "sentenceTranslation":  "เขารู้สึกเสียใจและนึกเสียดายเกี่ยวกับคำพูดที่รุนแรงของเขาในระหว่างการโต้เถียง"
    },
    {
        "id":  "pdf-1484",
        "word":  "Relieved",
        "translation":  "โล่งใจ / สบายใจขึ้น",
        "category":  "Emotions",
        "ipa":  "/rɪˈliːvd/",
        "sentence":  "She was relieved to hear that her family was safe.",
        "sentenceTranslation":  "เธอรู้สึกโล่งอกเมื่อได้ยินว่าครอบครัวของเธอปลอดภัย"
    },
    {
        "id":  "pdf-1485",
        "word":  "Reluctant",
        "translation":  "ไม่เต็มใจ / ลังเลใจ",
        "category":  "Emotions",
        "ipa":  "/rɪˈlʌktənt/",
        "sentence":  "She was reluctant to lend him her favorite book.",
        "sentenceTranslation":  "เธอลังเลและไม่เต็มใจที่จะให้เขายืมหนังสือเล่มโปรดของเธอ"
    },
    {
        "id":  "pdf-1486",
        "word":  "Resentful",
        "translation":  "ขุ่นเคืองใจ / เจ็บแค้นใจ",
        "category":  "Emotions",
        "ipa":  "/rɪˈzentfl/",
        "sentence":  "She felt resentful about being passed over for the promotion.",
        "sentenceTranslation":  "เธอรู้สึกขุ่นเคืองใจและไม่พอใจที่ถูกข้ามขั้นในการเลื่อนตำแหน่ง"
    },
    {
        "id":  "pdf-1487",
        "word":  "Sad",
        "translation":  "เศร้า",
        "category":  "Emotions",
        "ipa":  "/sæd/",
        "sentence":  "The sad movie made everyone in the theater cry.",
        "sentenceTranslation":  "ภาพยนตร์ที่แสนเศร้าเรื่องนี้ทำให้ทุกคนในโรงภาพยนตร์ร้องไห้"
    },
    {
        "id":  "pdf-1488",
        "word":  "Scared",
        "translation":  "กลัว",
        "category":  "Emotions",
        "ipa":  "/skerd/",
        "sentence":  "The little boy was scared of the dark.",
        "sentenceTranslation":  "เด็กน้อยคนนั้นกลัวความมืด"
    },
    {
        "id":  "pdf-1489",
        "word":  "Shocked",
        "translation":  "ตกใจสุดขีด / ช็อก",
        "category":  "Emotions",
        "ipa":  "/ʃɑːkt/",
        "sentence":  "We were shocked by the sudden news of his departure.",
        "sentenceTranslation":  "พวกเราตกใจและตกตะลึงกับข่าวการจากไปอย่างกะทันหันของเขา"
    },
    {
        "id":  "pdf-1490",
        "word":  "Shy",
        "translation":  "ขี้อาย",
        "category":  "Emotions",
        "ipa":  "/ʃaɪ/",
        "sentence":  "The shy girl hid behind her mother when guests arrived.",
        "sentenceTranslation":  "เด็กหญิงขี้อายแอบอยู่ข้างหลังแม่ของเธอเมื่อมีแขกมาถึง"
    },
    {
        "id":  "pdf-1491",
        "word":  "Skeptical",
        "translation":  "สงสัย / ไม่ปักใจเชื่อ",
        "category":  "Emotions",
        "ipa":  "/ˈskeptɪkl/",
        "sentence":  "Many scientists remain skeptical about the new discovery.",
        "sentenceTranslation":  "นักวิทยาศาสตร์หลายคนยังคงสงสัยและไม่เชื่อเกี่ยวกับข้อค้นพบใหม่นี้"
    },
    {
        "id":  "pdf-1492",
        "word":  "Sorrowful",
        "translation":  "เต็มไปด้วยความทุกข์โศก",
        "category":  "Emotions",
        "ipa":  "/ˈsɒrəʊfʊl/",
        "sentence":  "She had a sorrowful expression on her face.",
        "sentenceTranslation":  "เธอมีสีหน้าที่โศกเศร้า"
    },
    {
        "id":  "pdf-1493",
        "word":  "Stressed",
        "translation":  "เครียด",
        "category":  "Emotions",
        "ipa":  "/strest/",
        "sentence":  "He feels stressed about his upcoming exams.",
        "sentenceTranslation":  "เขารู้สึกเครียดเกี่ยวกับการสอบที่กำลังจะมาถึง"
    },
    {
        "id":  "pdf-1494",
        "word":  "Surprised",
        "translation":  "ประหลาดใจ",
        "category":  "Emotions",
        "ipa":  "/səˈpraɪzd/",
        "sentence":  "I was surprised by the unexpected gift.",
        "sentenceTranslation":  "ฉันประหลาดใจกับของขวัญที่ไม่ได้คาดคิด"
    },
    {
        "id":  "pdf-1495",
        "word":  "Suspicious",
        "translation":  "ระแวง / น่าสงสัย",
        "category":  "Emotions",
        "ipa":  "/səˈspɪʃəs/",
        "sentence":  "The police found a suspicious package in the park.",
        "sentenceTranslation":  "ตำรวจพบกล่องที่น่าสงสัยในสวนสาธารณะ"
    },
    {
        "id":  "pdf-1496",
        "word":  "Sympathetic",
        "translation":  "เห็นอกเห็นใจคนอื่น",
        "category":  "Emotions",
        "ipa":  "/ˌsɪmpəˈθetɪk/",
        "sentence":  "She was very sympathetic to his problems.",
        "sentenceTranslation":  "เธอเห็นอกเห็นใจกับปัญหาของเขามาก"
    },
    {
        "id":  "pdf-1497",
        "word":  "Terrified",
        "translation":  "หวาดกลัวสุดขีด",
        "category":  "Emotions",
        "ipa":  "/ˈterɪfaɪd/",
        "sentence":  "The little boy was terrified of the dark.",
        "sentenceTranslation":  "เด็กน้อยหวาดกลัวความมืดเป็นอย่างมาก"
    },
    {
        "id":  "pdf-1498",
        "word":  "Uneasy",
        "translation":  "กระสับกระส่าย / ไม่สบายใจ",
        "category":  "Emotions",
        "ipa":  "/ʌnˈiːzi/",
        "sentence":  "I had an uneasy feeling about the decision.",
        "sentenceTranslation":  "ฉันมีความรู้สึกไม่สบายใจเกี่ยวกับการตัดสินใจนั้น"
    },
    {
        "id":  "pdf-1499",
        "word":  "Weary",
        "translation":  "เหนื่อยหน่าย / อ่อนล้า",
        "category":  "Emotions",
        "ipa":  "/ˈwɪəri/",
        "sentence":  "The travelers were weary after their long journey.",
        "sentenceTranslation":  "นักเดินทางรู้สึกเหนื่อยล้าหลังจากการเดินทางอันยาวนาน"
    },
    {
        "id":  "pdf-1500",
        "word":  "Worried",
        "translation":  "เป็นกังวล",
        "category":  "Emotions",
        "ipa":  "/ˈwʌrid/",
        "sentence":  "She is worried about her dog\u0027s health.",
        "sentenceTranslation":  "เธอกังวลเกี่ยวกับสุขภาพของสุนัขของเธอ"
    },
    {
        "id":  "pdf-1501",
        "word":  "Beige",
        "translation":  "สีเบจ / สีน้ำตาลอ่อน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/beɪʒ/",
        "sentence":  "He wore a beige suit to the wedding.",
        "sentenceTranslation":  "เขาสวมสูทสีเบจไปงานแต่งงาน"
    },
    {
        "id":  "pdf-1502",
        "word":  "Black",
        "translation":  "สีดำ",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/blæk/",
        "sentence":  "She drove a shiny black car.",
        "sentenceTranslation":  "เธอขับรถสีดำที่เป็นมันเงา"
    },
    {
        "id":  "pdf-1503",
        "word":  "Blue",
        "translation":  "สีน้ำเงิน / สีฟ้า",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/bluː/",
        "sentence":  "The sky was bright blue today.",
        "sentenceTranslation":  "วันนี้ท้องฟ้าเป็นสีฟ้าสดใส"
    },
    {
        "id":  "pdf-1504",
        "word":  "Bronze",
        "translation":  "สีทองแดง / สีสัมฤทธิ์",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/brɒnz/",
        "sentence":  "He won a bronze medal in the competition.",
        "sentenceTranslation":  "เขาได้รับเหรียญทองแดงในการแข่งขัน"
    },
    {
        "id":  "pdf-1505",
        "word":  "Brown",
        "translation":  "สีน้ำตาล",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/braʊn/",
        "sentence":  "The dry leaves turned brown in autumn.",
        "sentenceTranslation":  "ใบไม้แห้งกลายเป็นสีน้ำตาลในฤดูใบไม้ร่วง"
    },
    {
        "id":  "pdf-1506",
        "word":  "Bright",
        "translation":  "ฉูดฉาด / สว่างจ้า",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/braɪt/",
        "sentence":  "The stars are very bright tonight.",
        "sentenceTranslation":  "คืนนี้ดวงดาวส่องแสงสว่างไสวมาก"
    },
    {
        "id":  "pdf-1507",
        "word":  "Checkered",
        "translation":  "ลายตารางหมากรุก",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈtʃek.ərd/",
        "sentence":  "He wore a black and white checkered shirt.",
        "sentenceTranslation":  "เขาใส่เสื้อเชิ้ตลายตารางหมากรุกสีดำและสีขาว"
    },
    {
        "id":  "pdf-1508",
        "word":  "Circle",
        "translation":  "วงกลม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsɜː.kəl/",
        "sentence":  "Draw a circle on the paper.",
        "sentenceTranslation":  "วาดวงกลมลงบนกระดาษ"
    },
    {
        "id":  "pdf-1509",
        "word":  "Circular",
        "translation":  "ที่มีลักษณะเป็นวงกลม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsɜː.kjə.lər/",
        "sentence":  "The table has a circular shape.",
        "sentenceTranslation":  "โต๊ะตัวนี้มีรูปทรงกลม"
    },
    {
        "id":  "pdf-1510",
        "word":  "Colorful",
        "translation":  "ที่มีสีสันสดใส",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkʌl.ə.fəl/",
        "sentence":  "The garden was filled with colorful flowers.",
        "sentenceTranslation":  "สวนแห่งนี้เต็มไปด้วยดอกไม้ที่มีสีสันสดใส"
    },
    {
        "id":  "pdf-1511",
        "word":  "Cone",
        "translation":  "รูปกรวย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/koʊn/",
        "sentence":  "The ice cream was served in a waffle cone.",
        "sentenceTranslation":  "ไอศกรีมถูกเสิร์ฟในกรวยวาฟเฟิล"
    },
    {
        "id":  "pdf-1512",
        "word":  "Conical",
        "translation":  "ที่มีลักษณะเป็นรูปกรวย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkɒn.ɪ.kəl/",
        "sentence":  "The mountain has a conical peak.",
        "sentenceTranslation":  "ภูเขาลูกนี้มียอดเป็นรูปทรงกรวย"
    },
    {
        "id":  "pdf-1513",
        "word":  "Cream",
        "translation":  "สีครีม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/kriːm/",
        "sentence":  "Would you like some cream in your coffee?",
        "sentenceTranslation":  "คุณต้องการใส่ครีมในกาแฟไหม"
    },
    {
        "id":  "pdf-1514",
        "word":  "Crimson",
        "translation":  "สีแดงเข้ม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkrɪm.zən/",
        "sentence":  "The autumn leaves turned a deep crimson.",
        "sentenceTranslation":  "ใบไม้ในฤดูใบไม้ร่วงเปลี่ยนเป็นสีแดงเข้ม"
    },
    {
        "id":  "pdf-1515",
        "word":  "Cube",
        "translation":  "ลูกบาศก์ / ทรงสี่เหลี่ยมจัตุรัส",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/kjuːb/",
        "sentence":  "Add one ice cube to the glass.",
        "sentenceTranslation":  "ใส่น้ำแข็งหนึ่งก้อนลงในแก้ว"
    },
    {
        "id":  "pdf-1516",
        "word":  "Cubic",
        "translation":  "ที่มีลักษณะเป็นลูกบาศก์",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkjuː.bɪk/",
        "sentence":  "The box has a volume of one cubic meter.",
        "sentenceTranslation":  "กล่องใบนี้มีความจุหนึ่งลูกบาศก์เมตร"
    },
    {
        "id":  "pdf-1517",
        "word":  "Curve",
        "translation":  "เส้นโค้ง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/kɜːv/",
        "sentence":  "The road has a sharp curve ahead.",
        "sentenceTranslation":  "ถนนมีทางโค้งหักศอกข้างหน้า"
    },
    {
        "id":  "pdf-1518",
        "word":  "Curved",
        "translation":  "ที่มีลักษณะโค้ง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/kɜːvd/",
        "sentence":  "The banana has a curved shape.",
        "sentenceTranslation":  "กล้วยมีรูปทรงโค้ง"
    },
    {
        "id":  "pdf-1519",
        "word":  "Cylinder",
        "translation":  "ทรงกระบอก",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsɪl.ɪn.dər/",
        "sentence":  "The gas is stored in a metal cylinder.",
        "sentenceTranslation":  "แก๊สถูกเก็บไว้ในถังทรงกระบอกโลหะ"
    },
    {
        "id":  "pdf-1520",
        "word":  "Cylindrical",
        "translation":  "ที่มีลักษณะเป็นทรงกระบอก",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/sɪˈlɪn.drɪ.kəl/",
        "sentence":  "The pillars of the building are cylindrical.",
        "sentenceTranslation":  "เสาของอาคารมีลักษณะเป็นทรงกระบอก"
    },
    {
        "id":  "pdf-1521",
        "word":  "Dark",
        "translation":  "สีเข้ม / มืด",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/dɑːk/",
        "sentence":  "The room was completely dark.",
        "sentenceTranslation":  "ห้องนี้มืดสนิท"
    },
    {
        "id":  "pdf-1522",
        "word":  "Diamond",
        "translation":  "รูปสี่เหลี่ยมขนมเปียกปูน / รูปเพชร",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈdaɪəmənd/",
        "sentence":  "She wore a beautiful diamond ring.",
        "sentenceTranslation":  "เธอสวมแหวนเพชรที่สวยงาม"
    },
    {
        "id":  "pdf-1523",
        "word":  "Dot",
        "translation":  "จุด",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/dɑːt/",
        "sentence":  "Put a dot at the end of the sentence.",
        "sentenceTranslation":  "ใส่จุดที่ท้ายประโยค"
    },
    {
        "id":  "pdf-1524",
        "word":  "Dotted",
        "translation":  "ลายจุด",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈdɑːtɪd/",
        "sentence":  "Sign your name on the dotted line.",
        "sentenceTranslation":  "เซ็นชื่อของคุณบนเส้นประ"
    },
    {
        "id":  "pdf-1525",
        "word":  "Emerald",
        "translation":  "สีเขียวมรกต",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈemərəld/",
        "sentence":  "The emerald has a deep green color.",
        "sentenceTranslation":  "มรกตมีสีเขียวเข้ม"
    },
    {
        "id":  "pdf-1526",
        "word":  "Gold / Golden",
        "translation":  "สีทอง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ɡoʊld/ / ˈɡoʊldən/",
        "sentence":  "She won a gold medal in the competition.",
        "sentenceTranslation":  "เธอได้รับรางวัลเหรียญทองในการแข่งขัน"
    },
    {
        "id":  "pdf-1527",
        "word":  "Gray / Grey",
        "translation":  "สีเทา",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ɡreɪ/",
        "sentence":  "The sky was gray and cloudy.",
        "sentenceTranslation":  "ท้องฟ้าเป็นสีเทาและมีเมฆมาก"
    },
    {
        "id":  "pdf-1528",
        "word":  "Green",
        "translation":  "สีเขียว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ɡriːn/",
        "sentence":  "The grass is very green after the rain.",
        "sentenceTranslation":  "หญ้ามีสีเขียวขจีมากหลังฝนตก"
    },
    {
        "id":  "pdf-1529",
        "word":  "Heart shape",
        "translation":  "รูปหัวใจ",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/hɑːrt ʃeɪp/",
        "sentence":  "She cut the paper into a heart shape.",
        "sentenceTranslation":  "เธอตัดกระดาษเป็นรูปหัวใจ"
    },
    {
        "id":  "pdf-1530",
        "word":  "Hexagon",
        "translation":  "รูปหกเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈheksəɡɑːn/",
        "sentence":  "A hexagon has six sides.",
        "sentenceTranslation":  "รูปหกเหลี่ยมมีหกด้าน"
    },
    {
        "id":  "pdf-1531",
        "word":  "Hexagonal",
        "translation":  "ที่มีลักษณะเป็นหกเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/hekˈsæɡənl/",
        "sentence":  "The bolts have a hexagonal head.",
        "sentenceTranslation":  "สลักเกลียวมีหัวเป็นรูปหกเหลี่ยม"
    },
    {
        "id":  "pdf-1532",
        "word":  "Horizontal",
        "translation":  "แนวนอน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˌhɔːrɪˈzɑːntl/",
        "sentence":  "Draw a horizontal line across the page.",
        "sentenceTranslation":  "ลากเส้นแนวนอนพาดผ่านหน้ากระดาษ"
    },
    {
        "id":  "pdf-1533",
        "word":  "Indigo",
        "translation":  "สีคราม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈɪndɪɡoʊ/",
        "sentence":  "The twilight sky was a deep indigo.",
        "sentenceTranslation":  "ท้องฟ้ายามพลบค่ำเป็นสีครามเข้ม"
    },
    {
        "id":  "pdf-1534",
        "word":  "Ivory",
        "translation":  "สีงาช้าง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈaɪvəri/",
        "sentence":  "The piano keys were made of ivory.",
        "sentenceTranslation":  "คีย์เปียโนทำมาจากงาช้าง"
    },
    {
        "id":  "pdf-1535",
        "word":  "Khaki",
        "translation":  "สีกากี",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkɑːki/",
        "sentence":  "He wore a khaki uniform to work.",
        "sentenceTranslation":  "เขาสวมชุดเครื่องแบบสีกากีไปทำงาน"
    },
    {
        "id":  "pdf-1536",
        "word":  "Lavender",
        "translation":  "สีม่วงลาเวนเดอร์",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈlævəndər/",
        "sentence":  "The field was filled with purple lavender.",
        "sentenceTranslation":  "ทุ่งนาเต็มไปด้วยดอกลาเวนเดอร์สีม่วง"
    },
    {
        "id":  "pdf-1537",
        "word":  "Light",
        "translation":  "สีอ่อน / สว่าง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/laɪt/",
        "sentence":  "The room is filled with bright light.",
        "sentenceTranslation":  "ห้องนี้เต็มไปด้วยแสงสว่าง"
    },
    {
        "id":  "pdf-1538",
        "word":  "Line",
        "translation":  "เส้น",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/laɪn/",
        "sentence":  "Please stand in line to buy your tickets.",
        "sentenceTranslation":  "กรุณาเข้าแถวเพื่อซื้อตั๋วของคุณ"
    },
    {
        "id":  "pdf-1539",
        "word":  "Linear",
        "translation":  "ที่เป็นเส้นตรง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈlɪn.i.ər/",
        "sentence":  "The plot of the movie follows a linear progression.",
        "sentenceTranslation":  "เนื้อเรื่องของภาพยนตร์ดำเนินไปตามลำดับเวลาที่เรียบง่าย"
    },
    {
        "id":  "pdf-1540",
        "word":  "Magenta",
        "translation":  "สีแดงอมม่วง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/məˈdʒen.tə/",
        "sentence":  "She wore a beautiful dress in a shade of magenta.",
        "sentenceTranslation":  "เธอสวมชุดสวยสีม่วงแดงสด"
    },
    {
        "id":  "pdf-1541",
        "word":  "Maroon",
        "translation":  "สีน้ำตาลแดง / สีแดงมะรูน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/məˈruːn/",
        "sentence":  "The team decided to use maroon for their uniforms.",
        "sentenceTranslation":  "ทีมตัดสินใจใช้สีน้ำตาลแดงสำหรับชุดยูนิฟอร์มของพวกเขา"
    },
    {
        "id":  "pdf-1542",
        "word":  "Matte",
        "translation":  "สีด้าน / ไม่เงางาม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/mæt/",
        "sentence":  "She prefers a matte finish for her lipstick.",
        "sentenceTranslation":  "เธอชอบลิปสติกที่มีเนื้อแบบแมตต์"
    },
    {
        "id":  "pdf-1543",
        "word":  "Metallic",
        "translation":  "สีเนื้อเมทัลลิก / มีประกายแบบโลหะ",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/məˈtælɪk/",
        "sentence":  "The car has a beautiful metallic blue paint.",
        "sentenceTranslation":  "รถคันนี้มีสีน้ำเงินเมทัลลิกที่สวยงาม"
    },
    {
        "id":  "pdf-1544",
        "word":  "Navy blue",
        "translation":  "สีน้ำเงินกรมท่า",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˌneɪvi ˈbluː/",
        "sentence":  "He wore a smart navy blue suit to the interview.",
        "sentenceTranslation":  "เขาสวมชุดสูทสีน้ำเงินกรมท่าที่ดูดีไปสัมภาษณ์งาน"
    },
    {
        "id":  "pdf-1545",
        "word":  "Neon",
        "translation":  "สีสะท้อนแสง / สีนีออน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈniːɒn/",
        "sentence":  "The sign glowed with bright neon colors.",
        "sentenceTranslation":  "ป้ายนั้นส่องสว่างด้วยสีนีออนสดใส"
    },
    {
        "id":  "pdf-1546",
        "word":  "Octagon",
        "translation":  "รูปแปดเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈɒktəɡən/",
        "sentence":  "The traffic sign is in the shape of an octagon.",
        "sentenceTranslation":  "ป้ายจราจรมีรูปทรงเป็นแปดเหลี่ยม"
    },
    {
        "id":  "pdf-1547",
        "word":  "Octagonal",
        "translation":  "ที่มีลักษณะเป็นแปดเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ɒkˈtæɡənl/",
        "sentence":  "We built an octagonal table for the dining room.",
        "sentenceTranslation":  "เราสร้างโต๊ะรูปทรงแปดเหลี่ยมสำหรับห้องอาหาร"
    },
    {
        "id":  "pdf-1548",
        "word":  "Orange",
        "translation":  "สีส้ม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈɒrɪndʒ/",
        "sentence":  "The sunset turned the sky a vibrant orange.",
        "sentenceTranslation":  "พระอาทิตย์ตกดินทำให้ท้องฟ้ากลายเป็นสีส้มสดใส"
    },
    {
        "id":  "pdf-1549",
        "word":  "Oval",
        "translation":  "รูปไข่ / วงรี",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈəʊvl/",
        "sentence":  "The dining table has an elegant oval shape.",
        "sentenceTranslation":  "โต๊ะอาหารมีรูปทรงรีที่สง่างาม"
    },
    {
        "id":  "pdf-1550",
        "word":  "Pale",
        "translation":  "สีซีด / สีจาง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/peɪl/",
        "sentence":  "She painted the walls a pale yellow color.",
        "sentenceTranslation":  "เธอทาผนังด้วยสีเหลืองอ่อน"
    },
    {
        "id":  "pdf-1551",
        "word":  "Parallel",
        "translation":  "เส้นขนาน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpærəlel/",
        "sentence":  "The two lines are parallel to each other.",
        "sentenceTranslation":  "เส้นสองเส้นนั้นขนานกัน"
    },
    {
        "id":  "pdf-1552",
        "word":  "Pastel",
        "translation":  "สีพาสเทล / สีอ่อนหวาน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/pæˈstel/",
        "sentence":  "The bedroom is decorated in soft pastel tones.",
        "sentenceTranslation":  "ห้องนอนถูกตกแต่งด้วยโทนสีพาสเทลอ่อนๆ"
    },
    {
        "id":  "pdf-1553",
        "word":  "Pattern",
        "translation":  "ลวดลาย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpætn/",
        "sentence":  "I like the floral pattern on this dress.",
        "sentenceTranslation":  "ฉันชอบลวดลายดอกไม้บนชุดนี้"
    },
    {
        "id":  "pdf-1554",
        "word":  "Peach",
        "translation":  "สีพีช / สีส้มอมชมพู",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/piːtʃ/",
        "sentence":  "She wore a lovely peach dress to the party.",
        "sentenceTranslation":  "เธอสวมชุดสีพีชที่น่ารักไปงานปาร์ตี้"
    },
    {
        "id":  "pdf-1555",
        "word":  "Pentagon",
        "translation":  "รูปห้าเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpentəɡən/",
        "sentence":  "The park was designed in the shape of a pentagon.",
        "sentenceTranslation":  "สวนสาธารณะถูกออกแบบให้มีรูปทรงเป็นห้าเหลี่ยม"
    },
    {
        "id":  "pdf-1556",
        "word":  "Pentagonal",
        "translation":  "ที่มีลักษณะเป็นห้าเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/penˈtæɡənl/",
        "sentence":  "The building features a unique pentagonal structure.",
        "sentenceTranslation":  "อาคารนี้มีโครงสร้างรูปทรงห้าเหลี่ยมที่ไม่เหมือนใคร"
    },
    {
        "id":  "pdf-1557",
        "word":  "Pink",
        "translation":  "สีชมพู",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/pɪŋk/",
        "sentence":  "She wore a beautiful pink dress.",
        "sentenceTranslation":  "เธอสวมชุดสีชมพูที่สวยงาม"
    },
    {
        "id":  "pdf-1558",
        "word":  "Plain",
        "translation":  "เรียบๆ / ไม่มีลวดลาย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/pleɪn/",
        "sentence":  "He prefers wearing a plain white shirt.",
        "sentenceTranslation":  "เขาชอบใส่เสื้อสีขาวเรียบๆ"
    },
    {
        "id":  "pdf-1559",
        "word":  "Plaid",
        "translation":  "ลายสก็อต",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/plæd/",
        "sentence":  "The man is wearing a plaid shirt.",
        "sentenceTranslation":  "ผู้ชายคนนั้นกำลังสวมเสื้อลายสก๊อต"
    },
    {
        "id":  "pdf-1560",
        "word":  "Polka dot",
        "translation":  "ลายจุดกลมใหญ่ (พอลกาด็อต)",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpoʊlkə dɒt/",
        "sentence":  "She has a blue dress with white polka dots.",
        "sentenceTranslation":  "เธอมีชุดสีน้ำเงินลายจุดสีขาว"
    },
    {
        "id":  "pdf-1561",
        "word":  "Purple",
        "translation":  "สีม่วง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpɜːrpl/",
        "sentence":  "The flowers in the garden are purple.",
        "sentenceTranslation":  "ดอกไม้ในสวนมีสีม่วง"
    },
    {
        "id":  "pdf-1562",
        "word":  "Pyramid",
        "translation":  "รูปทรงพีระมิด",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈpɪrəmɪd/",
        "sentence":  "The pyramid was built a long time ago.",
        "sentenceTranslation":  "พีระมิดถูกสร้างขึ้นมานานมากแล้ว"
    },
    {
        "id":  "pdf-1563",
        "word":  "Rectangle",
        "translation":  "รูปสี่เหลี่ยมผืนผ้า",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈrektæŋɡl/",
        "sentence":  "The table top is a rectangle.",
        "sentenceTranslation":  "ท็อปโต๊ะมีรูปทรงเป็นสี่เหลี่ยมผืนผ้า"
    },
    {
        "id":  "pdf-1564",
        "word":  "Rectangular",
        "translation":  "ที่มีลักษณะเป็นสี่เหลี่ยมผืนผ้า",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/rekˈtæŋɡjələr/",
        "sentence":  "They bought a large rectangular rug.",
        "sentenceTranslation":  "พวกเขาซื้อพรมรูปสี่เหลี่ยมผืนผ้าผืนใหญ่"
    },
    {
        "id":  "pdf-1565",
        "word":  "Red",
        "translation":  "สีแดง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/red/",
        "sentence":  "The apple on the table is red.",
        "sentenceTranslation":  "แอปเปิลบนโต๊ะมีสีแดง"
    },
    {
        "id":  "pdf-1566",
        "word":  "Ruby",
        "translation":  "สีแดงทับทิม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈruːbi/",
        "sentence":  "Her ring features a brilliant ruby.",
        "sentenceTranslation":  "แหวนของเธอมีทับทิมที่ส่องประกาย"
    },
    {
        "id":  "pdf-1567",
        "word":  "Scarlet",
        "translation":  "สีแดงสด",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈskɑːrlət/",
        "sentence":  "She wore a beautiful scarlet dress to the party.",
        "sentenceTranslation":  "เธอสวมชุดเดรสสีแดงสดที่สวยงามไปร่วมงานปาร์ตี้"
    },
    {
        "id":  "pdf-1568",
        "word":  "Semi-circle",
        "translation":  "ครึ่งวงกลม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsemiˌsɜːrkl/",
        "sentence":  "The children sat in a semi-circle around the teacher.",
        "sentenceTranslation":  "เด็กๆ นั่งเป็นรูปครึ่งวงกลมรอบตัวคุณครู"
    },
    {
        "id":  "pdf-1569",
        "word":  "Shade",
        "translation":  "เฉดสี / เงา",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ʃeɪd/",
        "sentence":  "We sat under the tree to get some shade.",
        "sentenceTranslation":  "พวกเรานั่งใต้ต้นไม้เพื่อให้ได้ร่มเงา"
    },
    {
        "id":  "pdf-1570",
        "word":  "Shiny",
        "translation":  "เงางาม / เป็นประกาย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈʃaɪni/",
        "sentence":  "She polished the silver until it was shiny.",
        "sentenceTranslation":  "เธอขัดเครื่องเงินจนกระทั่งมันเงางาม"
    },
    {
        "id":  "pdf-1571",
        "word":  "Silver",
        "translation":  "สีเงิน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsɪlvər/",
        "sentence":  "He wore a silver ring on his finger.",
        "sentenceTranslation":  "เขาสวมแหวนเงินที่นิ้วของเขา"
    },
    {
        "id":  "pdf-1572",
        "word":  "Solid",
        "translation":  "สีพื้น / เนื้อแน่นทรงตัน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsɑːlɪd/",
        "sentence":  "Ice is water in a solid state.",
        "sentenceTranslation":  "น้ำแข็งคือน้ำในสถานะของแข็ง"
    },
    {
        "id":  "pdf-1573",
        "word":  "Sphere",
        "translation":  "ทรงกลม (สามมิติเช่นลูกบอล)",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/sfɪr/",
        "sentence":  "The earth is not a perfect sphere.",
        "sentenceTranslation":  "โลกไม่ได้เป็นทรงกลมที่สมบูรณ์แบบ"
    },
    {
        "id":  "pdf-1574",
        "word":  "Spherical",
        "translation":  "ที่มีลักษณะเป็นทรงกลม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈsferɪkl/",
        "sentence":  "The soap bubbles were perfectly spherical.",
        "sentenceTranslation":  "ฟองสบู่มีลักษณะเป็นทรงกลมอย่างสมบูรณ์แบบ"
    },
    {
        "id":  "pdf-1575",
        "word":  "Spiral",
        "translation":  "รูปเกลียว / เส้นก้นหอย",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈspaɪrəl/",
        "sentence":  "The notebook has a metal spiral binding.",
        "sentenceTranslation":  "สมุดบันทึกมีสันห่วงแบบเกลียวโลหะ"
    },
    {
        "id":  "pdf-1576",
        "word":  "Square",
        "translation":  "รูปสี่เหลี่ยมจัตุรัส",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/skwer/",
        "sentence":  "Draw a square on the piece of paper.",
        "sentenceTranslation":  "วาดรูปสี่เหลี่ยมจัตุรัสบนกระดาษแผ่นนั้น"
    },
    {
        "id":  "pdf-1577",
        "word":  "Star shape",
        "translation":  "รูปดาว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/stɑːr ʃeɪp/",
        "sentence":  "She cut the cookie dough into a star shape.",
        "sentenceTranslation":  "เธอตัดแป้งโดคุกกี้ให้เป็นรูปดาว"
    },
    {
        "id":  "pdf-1578",
        "word":  "Straight",
        "translation":  "ตรง / เส้นตรง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/streɪt/",
        "sentence":  "The road ahead is straight for miles.",
        "sentenceTranslation":  "ถนนข้างหน้าเป็นทางตรงยาวหลายไมล์"
    },
    {
        "id":  "pdf-1579",
        "word":  "Stripe",
        "translation":  "ลายทาง / ลายเส้นยาว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/straɪp/",
        "sentence":  "A zebra has black and white stripes.",
        "sentenceTranslation":  "ม้าลายมีริ้วลายสีดำและขาว"
    },
    {
        "id":  "pdf-1580",
        "word":  "Striped",
        "translation":  "ที่มีลวดลายเป็นเส้นทางยาว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/straɪpt/",
        "sentence":  "He wore a blue and white striped shirt.",
        "sentenceTranslation":  "เขาสวมเสื้อเชิ้ตลายทางสีน้ำเงินและขาว"
    },
    {
        "id":  "pdf-1581",
        "word":  "Teal",
        "translation":  "สีเขียวอมน้ำเงิน",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/tiːl/",
        "sentence":  "The bedroom walls were painted a dark teal.",
        "sentenceTranslation":  "ผนังห้องนอนถูกทาด้วยสีเขียวนกเป็ดน้ำเข้ม"
    },
    {
        "id":  "pdf-1582",
        "word":  "Texture",
        "translation":  "พื้นผิว (ของวัสดุหรือรูปทรง)",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈtekstʃər/",
        "sentence":  "The texture of this fabric is very soft.",
        "sentenceTranslation":  "ผิวสัมผัสของผ้าผืนนี้นุ่มมาก"
    },
    {
        "id":  "pdf-1583",
        "word":  "Tint",
        "translation":  "สีอ่อนที่ผสมสีขาวเพิ่มเข้าไป",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/tɪnt/",
        "sentence":  "The window glass has a light green tint.",
        "sentenceTranslation":  "กระจกหน้าต่างมีสีเขียวจางๆ"
    },
    {
        "id":  "pdf-1584",
        "word":  "Transparent",
        "translation":  "โปร่งใส / มองทะลุได้",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/trænsˈpærənt/",
        "sentence":  "The glass is completely transparent.",
        "sentenceTranslation":  "กระจกนี้มีความโปร่งใสอย่างสมบูรณ์"
    },
    {
        "id":  "pdf-1585",
        "word":  "Triangle",
        "translation":  "รูปสามเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈtraɪæŋɡl/",
        "sentence":  "Draw a triangle on the paper.",
        "sentenceTranslation":  "วาดรูปสามเหลี่ยมบนกระดาษ"
    },
    {
        "id":  "pdf-1586",
        "word":  "Triangular",
        "translation":  "ที่มีลักษณะเป็นสามเหลี่ยม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/traɪˈæŋɡjələr/",
        "sentence":  "The building has a unique triangular shape.",
        "sentenceTranslation":  "อาคารนี้มีรูปทรงสามเหลี่ยมที่ไม่เหมือนใคร"
    },
    {
        "id":  "pdf-1587",
        "word":  "Turquoise",
        "translation":  "สีฟ้าเทอร์ควอยซ์ / สีฟ้าอมเขียว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈtɜːrkwɔɪz/",
        "sentence":  "She wore a beautiful turquoise dress.",
        "sentenceTranslation":  "เธอสวมชุดเดรสสีเทอร์ควอยซ์ที่สวยงาม"
    },
    {
        "id":  "pdf-1588",
        "word":  "Vertical",
        "translation":  "แนวตั้ง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈvɜːrtɪkl/",
        "sentence":  "Draw a vertical line on the paper.",
        "sentenceTranslation":  "วาดเส้นแนวตั้งลงบนกระดาษ"
    },
    {
        "id":  "pdf-1589",
        "word":  "Violet",
        "translation":  "สีม่วงอมน้ำเงิน / สีดอกไวโอเลต",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈvaɪələt/",
        "sentence":  "The flowers are a lovely shade of violet.",
        "sentenceTranslation":  "ดอกไม้เหล่านั้นมีเฉดสีม่วงที่งดงาม"
    },
    {
        "id":  "pdf-1590",
        "word":  "Wave",
        "translation":  "เส้นลอนคลื่น",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/weɪv/",
        "sentence":  "The ocean wave crashed against the shore.",
        "sentenceTranslation":  "คลื่นทะเลซัดเข้าหาฝั่ง"
    },
    {
        "id":  "pdf-1591",
        "word":  "Wavy",
        "translation":  "ที่มีลักษณะเป็นลอนคลื่น",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈweɪvi/",
        "sentence":  "She has long, wavy brown hair.",
        "sentenceTranslation":  "เธอมีผมยาวหยักศกสีน้ำตาล"
    },
    {
        "id":  "pdf-1592",
        "word":  "White",
        "translation":  "สีขาว",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/waɪt/",
        "sentence":  "The walls of the room are painted white.",
        "sentenceTranslation":  "ผนังห้องถูกทาด้วยสีขาว"
    },
    {
        "id":  "pdf-1593",
        "word":  "Yellow",
        "translation":  "สีเหลือง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈjeloʊ/",
        "sentence":  "The sun is bright yellow today.",
        "sentenceTranslation":  "ดวงอาทิตย์มีสีเหลืองสดใสในวันนี้"
    },
    {
        "id":  "pdf-1594",
        "word":  "Zigzag",
        "translation":  "ซิกแซก / ลายฟันปลา",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈzɪɡzæɡ/",
        "sentence":  "The path followed a zigzag pattern up the hill.",
        "sentenceTranslation":  "ทางเดินเป็นเส้นซิกแซกขึ้นไปบนเนินเขา"
    },
    {
        "id":  "pdf-1595",
        "word":  "Amber",
        "translation":  "สีอำพัน / สีเหลืองอมส้ม",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈæmbər/",
        "sentence":  "The streetlights glowed with an amber light.",
        "sentenceTranslation":  "ไฟถนนส่องแสงสีเหลืองอำพันออกมา"
    },
    {
        "id":  "pdf-1596",
        "word":  "Coral",
        "translation":  "สีส้มปะการัง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈkɔːrəl/",
        "sentence":  "She painted her nails a bright coral color.",
        "sentenceTranslation":  "เธอทาเล็บด้วยสีส้มปะการังสดใส"
    },
    {
        "id":  "pdf-1597",
        "word":  "Mint",
        "translation":  "สีเขียวมิ้นต์",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/mɪnt/",
        "sentence":  "The room was decorated in shades of mint green.",
        "sentenceTranslation":  "ห้องนี้ถูกตกแต่งด้วยเฉดสีเขียวมินต์"
    },
    {
        "id":  "pdf-1598",
        "word":  "Olive",
        "translation":  "สีเขียวมะกอก",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/ˈɑːlɪv/",
        "sentence":  "He wore an olive green jacket.",
        "sentenceTranslation":  "เขาสวมเสื้อแจ็คเก็ตสีเขียวมะกอก"
    },
    {
        "id":  "pdf-1599",
        "word":  "Opaque",
        "translation":  "ทึบแสง / มองทะลุไม่ได้",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/oʊˈpeɪk/",
        "sentence":  "The glass was opaque, so we could not see through it.",
        "sentenceTranslation":  "กระจกมีความทึบแสง เราจึงมองทะลุผ่านไปไม่ได้"
    },
    {
        "id":  "pdf-1600",
        "word":  "Fluorescent",
        "translation":  "สีสะท้อนแสง / เรืองแสง",
        "category":  "Colors \u0026 Shapes",
        "ipa":  "/flɔːˈresnt/",
        "sentence":  "The office was lit by fluorescent lights.",
        "sentenceTranslation":  "ออฟฟิศนี้ได้รับแสงสว่างจากหลอดไฟฟลูออเรสเซนต์"
    },
    {
        "id":  "pdf-1601",
        "word":  "Bakery",
        "translation":  "ขนมอบ / ร้านขนมปัง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbeɪkəri/",
        "sentence":  "I bought a fresh loaf of bread at the bakery.",
        "sentenceTranslation":  "ฉันซื้อขนมปังสดใหม่มาจากร้านเบเกอรี่"
    },
    {
        "id":  "pdf-1602",
        "word":  "Baked",
        "translation":  "ที่อบจนสุก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/beɪkt/",
        "sentence":  "She baked a fresh batch of cookies.",
        "sentenceTranslation":  "เธออบคุกกี้สดใหม่หนึ่งถาด"
    },
    {
        "id":  "pdf-1603",
        "word":  "Beef",
        "translation":  "เนื้อวัว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/biːf/",
        "sentence":  "They served a delicious beef steak for dinner.",
        "sentenceTranslation":  "พวกเขาเสิร์ฟสเต็กเนื้อแสนอร่อยสำหรับมื้อเย็น"
    },
    {
        "id":  "pdf-1604",
        "word":  "Beverage",
        "translation":  "เครื่องดื่ม (คำเป็นทางการ)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbevərɪdʒ/",
        "sentence":  "Please choose a beverage to go with your meal.",
        "sentenceTranslation":  "กรุณาเลือกเครื่องดื่มสำหรับทานคู่กับมื้ออาหารของคุณ"
    },
    {
        "id":  "pdf-1605",
        "word":  "Bitter",
        "translation":  "มีรสขม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbɪtər/",
        "sentence":  "The medicine had a very bitter taste.",
        "sentenceTranslation":  "ยานั้นมีรสขมมาก"
    },
    {
        "id":  "pdf-1606",
        "word":  "Blend",
        "translation":  "ผสม / คลุกเคล้าให้เข้ากัน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/blend/",
        "sentence":  "You should blend the ingredients until smooth.",
        "sentenceTranslation":  "คุณควรปั่นส่วนผสมให้เข้ากันจนเนียนละเอียด"
    },
    {
        "id":  "pdf-1607",
        "word":  "Boil",
        "translation":  "ต้มจนเดือด / ต้ม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/bɔɪl/",
        "sentence":  "You need to boil the water before making tea.",
        "sentenceTranslation":  "คุณต้องต้มน้ำให้เดือดก่อนชงชา"
    },
    {
        "id":  "pdf-1608",
        "word":  "Boiled",
        "translation":  "ที่ต้มสุกแล้ว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/bɔɪld/",
        "sentence":  "He ate a boiled egg for breakfast.",
        "sentenceTranslation":  "เขาทานไข่ต้มสำหรับมื้อเช้า"
    },
    {
        "id":  "pdf-1609",
        "word":  "Bottle",
        "translation":  "ขวด",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbɑːtl/",
        "sentence":  "Can you pass me that bottle of water?",
        "sentenceTranslation":  "คุณช่วยหยิบน้ำขวดนั้นให้ฉันหน่อยได้ไหม"
    },
    {
        "id":  "pdf-1610",
        "word":  "Bread",
        "translation":  "ขนมปัง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/bred/",
        "sentence":  "I bought a loaf of bread from the bakery.",
        "sentenceTranslation":  "ฉันซื้อขนมปังหนึ่งแถวมาจากร้านเบเกอรี่"
    },
    {
        "id":  "pdf-1611",
        "word":  "Breakfast",
        "translation":  "อาหารเช้า",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbrekfəst/",
        "sentence":  "What would you like to have for breakfast?",
        "sentenceTranslation":  "คุณอยากทานอะไรเป็นมื้อเช้าดี"
    },
    {
        "id":  "pdf-1612",
        "word":  "Brunch",
        "translation":  "อาหารควบมื้อเช้าและมื้อเที่ยง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/brʌntʃ/",
        "sentence":  "We are planning to meet for brunch this Sunday.",
        "sentenceTranslation":  "พวกเราวางแผนจะไปทานมื้อสายด้วยกันในวันอาทิตย์นี้"
    },
    {
        "id":  "pdf-1613",
        "word":  "Butter",
        "translation":  "เนย",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈbʌtər/",
        "sentence":  "Spread some butter on your toast.",
        "sentenceTranslation":  "ทาเนยบนขนมปังปิ้งของคุณสิ"
    },
    {
        "id":  "pdf-1614",
        "word":  "Cake",
        "translation":  "เค้ก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/keɪk/",
        "sentence":  "She baked a chocolate cake for his birthday.",
        "sentenceTranslation":  "เธออบเค้กช็อกโกแลตสำหรับวันเกิดของเขา"
    },
    {
        "id":  "pdf-1615",
        "word":  "Candy",
        "translation":  "ลูกอม / ลูกกวาด",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈkændi/",
        "sentence":  "The child asked for a piece of candy.",
        "sentenceTranslation":  "เด็กคนนั้นขอขนมหนึ่งชิ้น"
    },
    {
        "id":  "pdf-1616",
        "word":  "Canned food",
        "translation":  "อาหารกระป๋อง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/kænd fuːd/",
        "sentence":  "We should keep some canned food in the pantry for emergencies.",
        "sentenceTranslation":  "เราควรเก็บอาหารกระป๋องไว้ในตู้สำหรับสถานการณ์ฉุกเฉิน"
    },
    {
        "id":  "pdf-1617",
        "word":  "Cheese",
        "translation":  "ชีส / เนยแข็ง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/tʃiːz/",
        "sentence":  "I like to eat cheese with my crackers.",
        "sentenceTranslation":  "ฉันชอบกินชีสกับแครกเกอร์"
    },
    {
        "id":  "pdf-1618",
        "word":  "Chop",
        "translation":  "สับ (เนื้อหรือผัก)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/tʃɒp/",
        "sentence":  "Please chop the vegetables for the soup.",
        "sentenceTranslation":  "กรุณาหั่นผักสำหรับทำซุป"
    },
    {
        "id":  "pdf-1619",
        "word":  "Coffee",
        "translation":  "กาแฟ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈkɒfi/",
        "sentence":  "I drink a cup of coffee every morning.",
        "sentenceTranslation":  "ฉันดื่มกาแฟหนึ่งแก้วทุกเช้า"
    },
    {
        "id":  "pdf-1620",
        "word":  "Condiment",
        "translation":  "เครื่องปรุงรส (เช่น ซอส พริกไทย)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈkɒndɪmənt/",
        "sentence":  "Ketchup is a popular condiment for fries.",
        "sentenceTranslation":  "ซอสมะเขือเทศเป็นเครื่องปรุงยอดนิยมสำหรับเฟรนช์ฟรายส์"
    },
    {
        "id":  "pdf-1621",
        "word":  "Cook",
        "translation":  "ปรุงอาหาร / คนครัว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/kʊk/",
        "sentence":  "My father likes to cook dinner on weekends.",
        "sentenceTranslation":  "พ่อของฉันชอบทำอาหารเย็นในช่วงวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1622",
        "word":  "Crispy",
        "translation":  "กรอบ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈkrɪspi/",
        "sentence":  "The fried chicken is very crispy.",
        "sentenceTranslation":  "ไก่ทอดกรอบมาก"
    },
    {
        "id":  "pdf-1623",
        "word":  "Dairy product",
        "translation":  "ผลิตภัณฑ์จากนม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈdeəri ˌprɒdʌkt/",
        "sentence":  "Milk is a common dairy product.",
        "sentenceTranslation":  "นมเป็นผลิตภัณฑ์จากนมที่พบบ่อย"
    },
    {
        "id":  "pdf-1624",
        "word":  "Decaf",
        "translation":  "กาแฟสกัดคาเฟอีนออก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈdiːkæf/",
        "sentence":  "I prefer decaf coffee in the evening.",
        "sentenceTranslation":  "ฉันชอบดื่มกาแฟไม่มีคาเฟอีนในตอนเย็น"
    },
    {
        "id":  "pdf-1625",
        "word":  "Delicious",
        "translation":  "อร่อย",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/dɪˈlɪʃəs/",
        "sentence":  "This cake is absolutely delicious.",
        "sentenceTranslation":  "เค้กชิ้นนี้อร่อยมาก"
    },
    {
        "id":  "pdf-1626",
        "word":  "Diet",
        "translation":  "อาหารควบคุมน้ำหนัก / อาหารประจำ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈdaɪət/",
        "sentence":  "She is on a healthy diet to lose weight.",
        "sentenceTranslation":  "เธอกำลังควบคุมอาหารเพื่อลดน้ำหนัก"
    },
    {
        "id":  "pdf-1627",
        "word":  "Dinner",
        "translation":  "อาหารมื้อค่ำ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈdɪnər/",
        "sentence":  "We had dinner at a fancy restaurant.",
        "sentenceTranslation":  "พวกเราไปทานมื้อเย็นที่ร้านอาหารหรูแห่งหนึ่ง"
    },
    {
        "id":  "pdf-1628",
        "word":  "Dough",
        "translation":  "แป้งนวด (สำหรับทำขนมปังหรือพิซซ่า)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/dəʊ/",
        "sentence":  "The baker is kneading the dough for the bread.",
        "sentenceTranslation":  "คนทำขนมปังกำลังนวดแป้งสำหรับทำขนมปัง"
    },
    {
        "id":  "pdf-1629",
        "word":  "Dresssing",
        "translation":  "น้ำสลัด",
        "category":  "Food \u0026 Beverage",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-1630",
        "word":  "Drink",
        "translation":  "ดื่ม / เครื่องดื่ม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/drɪŋk/",
        "sentence":  "Make sure to drink enough water every day.",
        "sentenceTranslation":  "อย่าลืมดื่มน้ำให้เพียงพอในแต่ละวัน"
    },
    {
        "id":  "pdf-1631",
        "word":  "Egg",
        "translation":  "ไข่",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/eɡ/",
        "sentence":  "I like a boiled egg for breakfast.",
        "sentenceTranslation":  "ฉันชอบกินไข่ต้มสำหรับมื้อเช้า"
    },
    {
        "id":  "pdf-1632",
        "word":  "Fast food",
        "translation":  "อาหารจานด่วน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fæst fuːd/",
        "sentence":  "I try to avoid eating fast food for my health.",
        "sentenceTranslation":  "ฉันพยายามหลีกเลี่ยงการกินอาหารฟาสต์ฟู้ดเพื่อสุขภาพของฉัน"
    },
    {
        "id":  "pdf-1633",
        "word":  "Ferment",
        "translation":  "หมัก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fərˈment/",
        "sentence":  "You need to ferment the cabbage to make kimchi.",
        "sentenceTranslation":  "คุณต้องหมักผักกาดขาวเพื่อทำกิมจิ"
    },
    {
        "id":  "pdf-1634",
        "word":  "Flavor / Flavour",
        "translation":  "รสชาติ / กลิ่นอาย",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈfleɪvər/",
        "sentence":  "This soup has a very rich flavor.",
        "sentenceTranslation":  "ซุปชามนี้มีรสชาติที่เข้มข้นมาก"
    },
    {
        "id":  "pdf-1635",
        "word":  "Flour",
        "translation":  "แป้งทำอาหาร (เช่นแป้งสาลี)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈflaʊər/",
        "sentence":  "She used wheat flour to bake the bread.",
        "sentenceTranslation":  "เธอใช้แป้งสาลีในการอบขนมปัง"
    },
    {
        "id":  "pdf-1636",
        "word":  "Food",
        "translation":  "อาหาร",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fuːd/",
        "sentence":  "There is plenty of food for everyone at the party.",
        "sentenceTranslation":  "มีอาหารมากมายสำหรับทุกคนในงานปาร์ตี้"
    },
    {
        "id":  "pdf-1637",
        "word":  "Fresh",
        "translation":  "สดใหม่",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/freʃ/",
        "sentence":  "These vegetables are very fresh.",
        "sentenceTranslation":  "ผักเหล่านี้สดมาก"
    },
    {
        "id":  "pdf-1638",
        "word":  "Fried",
        "translation":  "ที่ทอดด้วยน้ำมัน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fraɪd/",
        "sentence":  "He likes eating fried chicken for dinner.",
        "sentenceTranslation":  "เขาชอบกินไก่ทอดเป็นมื้อเย็น"
    },
    {
        "id":  "pdf-1639",
        "word":  "Fruit",
        "translation":  "ผลไม้",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fruːt/",
        "sentence":  "It is important to eat fresh fruit every day.",
        "sentenceTranslation":  "มันสำคัญมากที่จะต้องกินผลไม้สดทุกวัน"
    },
    {
        "id":  "pdf-1640",
        "word":  "Fry",
        "translation":  "ทอด",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/fraɪ/",
        "sentence":  "Heat the oil before you fry the fish.",
        "sentenceTranslation":  "ทำให้น้ำมันร้อนก่อนที่คุณจะทอดปลา"
    },
    {
        "id":  "pdf-1641",
        "word":  "Garlic",
        "translation":  "กระเทียม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈɡɑːrlɪk/",
        "sentence":  "Add some garlic to the pan for extra aroma.",
        "sentenceTranslation":  "ใส่กระเทียมลงในกระทะเพื่อเพิ่มกลิ่นหอม"
    },
    {
        "id":  "pdf-1642",
        "word":  "Glass",
        "translation":  "แก้วน้ำ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɡlæs/",
        "sentence":  "Can I have a glass of water, please?",
        "sentenceTranslation":  "ขอน้ำเปล่าหนึ่งแก้วได้ไหมครับ/คะ"
    },
    {
        "id":  "pdf-1643",
        "word":  "Grain",
        "translation":  "เมล็ดธัญพืช",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɡreɪn/",
        "sentence":  "Whole grain bread is healthier than white bread.",
        "sentenceTranslation":  "ขนมปังโฮลเกรนดีต่อสุขภาพมากกว่าขนมปังขาว"
    },
    {
        "id":  "pdf-1644",
        "word":  "Gravy",
        "translation":  "น้ำซอสเกรวี (น้ำราดเนื้อ)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈɡreɪvi/",
        "sentence":  "The turkey was served with a delicious brown gravy.",
        "sentenceTranslation":  "ไก่งวงเสิร์ฟพร้อมกับน้ำเกรวี่สีน้ำตาลแสนอร่อย"
    },
    {
        "id":  "pdf-1645",
        "word":  "Grill",
        "translation":  "ย่าง (บนตะแกรง)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɡrɪl/",
        "sentence":  "We are going to grill some burgers in the backyard.",
        "sentenceTranslation":  "พวกเราจะย่างเบอร์เกอร์กันที่สวนหลังบ้าน"
    },
    {
        "id":  "pdf-1646",
        "word":  "Grilled",
        "translation":  "ที่ย่างจนสุกแล้ว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɡrɪld/",
        "sentence":  "I prefer grilled fish over fried fish.",
        "sentenceTranslation":  "ฉันชอบปลาเผา/ปลาย่างมากกว่าปลาทอด"
    },
    {
        "id":  "pdf-1647",
        "word":  "Grocery",
        "translation":  "ของสดและของชำที่ซื้อเข้าบ้าน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈɡroʊ.sər.i/",
        "sentence":  "I need to go to the grocery store to buy some bread.",
        "sentenceTranslation":  "ฉันต้องไปที่ร้านขายของชำเพื่อซื้อขนมปัง"
    },
    {
        "id":  "pdf-1648",
        "word":  "Honey",
        "translation":  "น้ำผึ้ง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈhʌn.i/",
        "sentence":  "She likes to add a little honey to her tea.",
        "sentenceTranslation":  "เธอชอบเติมน้ำผึ้งลงในชาของเธอเล็กน้อย"
    },
    {
        "id":  "pdf-1649",
        "word":  "Hot",
        "translation":  "เผ็ด / ร้อน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/hɒt/",
        "sentence":  "Be careful, the soup is very hot.",
        "sentenceTranslation":  "ระวังหน่อยนะ ซุปร้อนมาก"
    },
    {
        "id":  "pdf-1650",
        "word":  "Ice",
        "translation":  "น้ำแข็ง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/aɪs/",
        "sentence":  "Would you like some ice in your drink?",
        "sentenceTranslation":  "คุณต้องการน้ำแข็งในเครื่องดื่มของคุณไหม"
    },
    {
        "id":  "pdf-1651",
        "word":  "Ingredient",
        "translation":  "ส่วนผสม / วัตถุดิบปรุงอาหาร",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɪnˈɡriː.di.ənt/",
        "sentence":  "The secret ingredient in this cake is cinnamon.",
        "sentenceTranslation":  "ส่วนผสมลับในเค้กชิ้นนี้คืออบเชย"
    },
    {
        "id":  "pdf-1652",
        "word":  "Juice",
        "translation":  "น้ำผลไม้",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/dʒuːs/",
        "sentence":  "He drinks fresh orange juice every morning.",
        "sentenceTranslation":  "เขาดื่มน้ำส้มคั้นสดทุกเช้า"
    },
    {
        "id":  "pdf-1653",
        "word":  "Leftover",
        "translation":  "อาหารที่เหลือจากมื้อก่อน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈlef.təʊ.vər/",
        "sentence":  "I am eating the leftover pizza for dinner.",
        "sentenceTranslation":  "ฉันกำลังกินพิซซ่าที่เหลือสำหรับมื้อเย็น"
    },
    {
        "id":  "pdf-1654",
        "word":  "Lemon",
        "translation":  "มะนาวเหลือง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈlem.ən/",
        "sentence":  "Squeeze a lemon over the fish for better flavor.",
        "sentenceTranslation":  "บีบมะนาวลงบนเนื้อปลาเพื่อรสชาติที่ดีขึ้น"
    },
    {
        "id":  "pdf-1655",
        "word":  "Lunch",
        "translation":  "อาหารกลางวัน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/lʌntʃ/",
        "sentence":  "What are you having for lunch today?",
        "sentenceTranslation":  "วันนี้คุณจะกินอะไรเป็นมื้อเที่ยง"
    },
    {
        "id":  "pdf-1656",
        "word":  "Meat",
        "translation":  "เนื้อสัตว์",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/miːt/",
        "sentence":  "Some people prefer not to eat any meat.",
        "sentenceTranslation":  "บางคนชอบที่จะไม่กินเนื้อสัตว์เลย"
    },
    {
        "id":  "pdf-1657",
        "word":  "Milk",
        "translation":  "นม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/mɪlk/",
        "sentence":  "Children should drink milk to grow strong.",
        "sentenceTranslation":  "เด็กๆ ควรดื่มนมเพื่อการเจริญเติบโตที่แข็งแรง"
    },
    {
        "id":  "pdf-1658",
        "word":  "Mix",
        "translation":  "ผสม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/mɪks/",
        "sentence":  "You need to mix the flour and eggs well.",
        "sentenceTranslation":  "คุณต้องผสมแป้งและไข่ให้เข้ากันดี"
    },
    {
        "id":  "pdf-1659",
        "word":  "Noodle",
        "translation":  "ก๋วยเตี๋ยว / บะหมี่",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈnuː.dəl/",
        "sentence":  "I ordered a bowl of spicy beef noodles.",
        "sentenceTranslation":  "ฉันสั่งก๋วยเตี๋ยวเนื้อรสเผ็ดมาหนึ่งชาม"
    },
    {
        "id":  "pdf-1660",
        "word":  "Nutrient",
        "translation":  "สารอาหาร",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈnjuː.tri.ənt/",
        "sentence":  "Vegetables provide every essential nutrient for the body.",
        "sentenceTranslation":  "ผักมอบสารอาหารที่จำเป็นทุกอย่างให้แก่ร่างกาย"
    },
    {
        "id":  "pdf-1661",
        "word":  "Nutrition",
        "translation":  "โภชนาการ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/njuːˈtrɪʃ.ən/",
        "sentence":  "Good nutrition is important for a healthy life.",
        "sentenceTranslation":  "โภชนาการที่ดีเป็นสิ่งสำคัญสำหรับการมีสุขภาพที่แข็งแรง"
    },
    {
        "id":  "pdf-1662",
        "word":  "Oil",
        "translation":  "น้ำมันสำหรับทำอาหาร",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ɔɪl/",
        "sentence":  "Heat the oil in a pan before adding the onions.",
        "sentenceTranslation":  "อุ่นน้ำมันในกระทะก่อนใส่หัวหอมลงไป"
    },
    {
        "id":  "pdf-1663",
        "word":  "Onion",
        "translation":  "หัวหอม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈʌn.jən/",
        "sentence":  "She chopped an onion for the salad.",
        "sentenceTranslation":  "เธอหั่นหัวหอมสำหรับทำสลัด"
    },
    {
        "id":  "pdf-1664",
        "word":  "Pasta",
        "translation":  "พาสต้า",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈpæs.tə/",
        "sentence":  "We are having pasta for dinner tonight.",
        "sentenceTranslation":  "คืนนี้เราจะกินพาสต้าเป็นอาหารเย็น"
    },
    {
        "id":  "pdf-1665",
        "word":  "Pastry",
        "translation":  "ขนมอบประเภทพายหรือพัฟฟ์",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈpeɪ.stri/",
        "sentence":  "The bakery sells delicious flaky pastry.",
        "sentenceTranslation":  "ร้านเบเกอรี่ขายขนมเพสตรี้ที่กรอบอร่อย"
    },
    {
        "id":  "pdf-1666",
        "word":  "Pepper",
        "translation":  "พริกไทย / พริกหยวก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈpep.ər/",
        "sentence":  "Add a pinch of black pepper to the soup.",
        "sentenceTranslation":  "เติมพริกไทยดำลงไปในซุปเล็กน้อย"
    },
    {
        "id":  "pdf-1667",
        "word":  "Pork",
        "translation":  "เนื้อหมู",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/pɔːk/",
        "sentence":  "He ordered a grilled pork chop.",
        "sentenceTranslation":  "เขาสั่งพอร์คชอปย่าง"
    },
    {
        "id":  "pdf-1668",
        "word":  "Poultry",
        "translation":  "เนื้อสัตว์ปีก (เช่นไก่เป็ด)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈpəʊl.tri/",
        "sentence":  "The farm specializes in raising poultry.",
        "sentenceTranslation":  "ฟาร์มแห่งนี้เชี่ยวชาญด้านการเลี้ยงสัตว์ปีก"
    },
    {
        "id":  "pdf-1669",
        "word":  "Raw",
        "translation":  "ดิบ (ยังไม่สุก)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/rɔː/",
        "sentence":  "Some people like to eat raw fish.",
        "sentenceTranslation":  "บางคนชอบกินปลาดิบ"
    },
    {
        "id":  "pdf-1670",
        "word":  "Recipe",
        "translation":  "สูตรอาหาร",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈres.ɪ.pi/",
        "sentence":  "This chocolate cake recipe is very easy.",
        "sentenceTranslation":  "สูตรเค้กช็อกโกแลตนี้ทำง่ายมาก"
    },
    {
        "id":  "pdf-1671",
        "word":  "Rice",
        "translation":  "ข้าว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/raɪs/",
        "sentence":  "I eat steamed rice every day.",
        "sentenceTranslation":  "ฉันกินข้าวสวยทุกวัน"
    },
    {
        "id":  "pdf-1672",
        "word":  "Roast",
        "translation":  "อบเนื้อสัตว์ในเตาอบ / คั่ว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/rəʊst/",
        "sentence":  "We will roast a chicken for the party.",
        "sentenceTranslation":  "เราจะอบไก่สำหรับงานปาร์ตี้"
    },
    {
        "id":  "pdf-1673",
        "word":  "Salty",
        "translation":  "มีรสเค็ม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈsɔːl.ti/",
        "sentence":  "This soup is too salty for me.",
        "sentenceTranslation":  "ซุปนี้เค็มเกินไปสำหรับฉัน"
    },
    {
        "id":  "pdf-1674",
        "word":  "Sauce",
        "translation":  "ซอสปรุงรส",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/sɔːs/",
        "sentence":  "The tomato sauce tastes fresh.",
        "sentenceTranslation":  "ซอสมะเขือเทศมีรสชาติสดใหม่"
    },
    {
        "id":  "pdf-1675",
        "word":  "Seafood",
        "translation":  "อาหารทะเล",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈsiː.fuːd/",
        "sentence":  "They love eating fresh seafood by the beach.",
        "sentenceTranslation":  "พวกเขาชอบกินอาหารทะเลสดริมชายหาด"
    },
    {
        "id":  "pdf-1676",
        "word":  "Seasoning",
        "translation":  "เครื่องเทศหรือเครื่องปรุงรส",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈsiː.zən.ɪŋ/",
        "sentence":  "Check the seasoning before serving the food.",
        "sentenceTranslation":  "ตรวจสอบรสชาติของเครื่องปรุงก่อนเสิร์ฟอาหาร"
    },
    {
        "id":  "pdf-1677",
        "word":  "Slice",
        "translation":  "หั่นเป็นชิ้นบางๆ / ชิ้นบาง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/slaɪs/",
        "sentence":  "Could you cut me a slice of bread?",
        "sentenceTranslation":  "คุณช่วยหั่นขนมปังให้ฉันสักชิ้นได้ไหม"
    },
    {
        "id":  "pdf-1678",
        "word":  "Snack",
        "translation":  "ขนมขบเคี้ยว / อาหารว่าง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/snæk/",
        "sentence":  "I usually have a light snack in the afternoon.",
        "sentenceTranslation":  "ฉันมักจะทานของว่างเบาๆ ในช่วงบ่าย"
    },
    {
        "id":  "pdf-1679",
        "word":  "Soft drink",
        "translation":  "น้ำอัดลม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/sɒft drɪŋk/",
        "sentence":  "Would you like a soft drink with your meal?",
        "sentenceTranslation":  "คุณต้องการรับน้ำอัดลมทานคู่กับมื้ออาหารไหม"
    },
    {
        "id":  "pdf-1680",
        "word":  "Soup",
        "translation":  "ซุป / น้ำแกง",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/suːp/",
        "sentence":  "The hot soup tasted delicious.",
        "sentenceTranslation":  "ซุปร้อนๆ ชามนี้รสชาติอร่อยมาก"
    },
    {
        "id":  "pdf-1681",
        "word":  "Sour",
        "translation":  "มีรสเปรี้ยว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈsaʊər/",
        "sentence":  "Lemons have a very sour taste.",
        "sentenceTranslation":  "มะนาวมีรสชาติเปรี้ยวมาก"
    },
    {
        "id":  "pdf-1682",
        "word":  "Soy sauce",
        "translation":  "ซอสถั่วเหลือง / ซีอิ๊ว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/sɔɪ sɔːs/",
        "sentence":  "Please add a little soy sauce to the stir-fry.",
        "sentenceTranslation":  "ช่วยเติมซีอิ๊วลงไปในผัดสักหน่อย"
    },
    {
        "id":  "pdf-1683",
        "word":  "Spicy",
        "translation":  "มีรสเผ็ดร้อน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈspaɪsi/",
        "sentence":  "I love eating spicy food.",
        "sentenceTranslation":  "ฉันชอบทานอาหารเผ็ด"
    },
    {
        "id":  "pdf-1684",
        "word":  "Steam",
        "translation":  "นึ่งด้วยไอน้ำ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/stiːm/",
        "sentence":  "Steam the vegetables until they are tender.",
        "sentenceTranslation":  "นำผักไปนึ่งจนกว่าจะนิ่ม"
    },
    {
        "id":  "pdf-1685",
        "word":  "Steamed",
        "translation":  "ที่นึ่งจนสุกแล้ว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/stiːmd/",
        "sentence":  "We ordered some steamed fish for dinner.",
        "sentenceTranslation":  "เราสั่งปลานึ่งมาทานเป็นมื้อเย็น"
    },
    {
        "id":  "pdf-1686",
        "word":  "Stew",
        "translation":  "ตุ๋น / เนื้อเคี่ยว",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/stjuː/",
        "sentence":  "She made a hearty beef stew for dinner.",
        "sentenceTranslation":  "เธอทำสตูเนื้อรสเข้มข้นสำหรับมื้อเย็น"
    },
    {
        "id":  "pdf-1687",
        "word":  "Stir-fry",
        "translation":  "ผัด (ไฟแรงด้วยน้ำมันน้อย)",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈstɜːr fraɪ/",
        "sentence":  "It is quick and easy to stir-fry vegetables.",
        "sentenceTranslation":  "การทำผักผัดเป็นเรื่องรวดเร็วและง่ายดาย"
    },
    {
        "id":  "pdf-1688",
        "word":  "Straw",
        "translation":  "หลอดดูดน้ำ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/strɔː/",
        "sentence":  "Do you need a straw for your juice?",
        "sentenceTranslation":  "คุณต้องการหลอดสำหรับน้ำผลไม้ไหม"
    },
    {
        "id":  "pdf-1689",
        "word":  "Sugar",
        "translation":  "น้ำตาล",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈʃʊɡər/",
        "sentence":  "I don\u0027t put sugar in my coffee.",
        "sentenceTranslation":  "ฉันไม่ใส่น้ำตาลในกาแฟของฉัน"
    },
    {
        "id":  "pdf-1690",
        "word":  "Sweet",
        "translation":  "มีรสหวาน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/swiːt/",
        "sentence":  "This cake is very sweet and tasty.",
        "sentenceTranslation":  "เค้กชิ้นนี้หวานและอร่อยมาก"
    },
    {
        "id":  "pdf-1691",
        "word":  "Syrup",
        "translation":  "น้ำเชื่อม",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈsɪrəp/",
        "sentence":  "Pour some maple syrup over your pancakes.",
        "sentenceTranslation":  "ราดน้ำเชื่อมเมเปิ้ลลงบนแพนเค้กของคุณ"
    },
    {
        "id":  "pdf-1692",
        "word":  "Takeaway",
        "translation":  "อาหารสั่งกลับบ้าน",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈteɪk.ə.weɪ/",
        "sentence":  "Let\u0027s order a takeaway for dinner tonight.",
        "sentenceTranslation":  "คืนนี้เราสั่งอาหารกลับบ้านไปกินกันเถอะ"
    },
    {
        "id":  "pdf-1693",
        "word":  "Taste",
        "translation":  "ชิมรส / รสชาติ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/teɪst/",
        "sentence":  "This soup has a salty taste.",
        "sentenceTranslation":  "ซุปชามนี้มีรสชาติเค็ม"
    },
    {
        "id":  "pdf-1694",
        "word":  "Tasty",
        "translation":  "รสชาติดี / อร่อย",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈteɪ.sti/",
        "sentence":  "The cake you baked is very tasty.",
        "sentenceTranslation":  "เค้กที่คุณอบอร่อยมาก"
    },
    {
        "id":  "pdf-1695",
        "word":  "Tea",
        "translation":  "ชา",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/tiː/",
        "sentence":  "Would you like a cup of hot tea?",
        "sentenceTranslation":  "คุณรับชาอุ่นๆ สักแก้วไหม"
    },
    {
        "id":  "pdf-1696",
        "word":  "Vegetable",
        "translation":  "ผัก",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈvedʒ.tə.bəl/",
        "sentence":  "You should eat more fresh vegetables.",
        "sentenceTranslation":  "คุณควรกินผักสดให้มากขึ้น"
    },
    {
        "id":  "pdf-1697",
        "word":  "Vegetarian",
        "translation":  "อาหารเจ / มังสวิรัติ",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˌvedʒ.əˈteə.ri.ən/",
        "sentence":  "My brother has been a vegetarian for five years.",
        "sentenceTranslation":  "พี่ชายของฉันกินมังสวิรัติมาห้าปีแล้ว"
    },
    {
        "id":  "pdf-1698",
        "word":  "Vinegar",
        "translation":  "น้ำส้มสายชู",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈvɪn.ɪ.ɡər/",
        "sentence":  "Add a little vinegar to the salad dressing.",
        "sentenceTranslation":  "เติมน้ำส้มสายชูลงในน้ำสลัดนิดหน่อย"
    },
    {
        "id":  "pdf-1699",
        "word":  "Water",
        "translation":  "น้ำเปล่า",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/ˈwɔː.tər/",
        "sentence":  "Please drink plenty of water every day.",
        "sentenceTranslation":  "กรุณาดื่มน้ำให้เพียงพอในแต่ละวัน"
    },
    {
        "id":  "pdf-1700",
        "word":  "Wine",
        "translation":  "ไวน์ / เหล้าองุ่น",
        "category":  "Food \u0026 Beverage",
        "ipa":  "/waɪn/",
        "sentence":  "We enjoyed a glass of red wine with dinner.",
        "sentenceTranslation":  "เราดื่มไวน์แดงหนึ่งแก้วระหว่างมื้อค่ำ"
    },
    {
        "id":  "pdf-1701",
        "word":  "Animation",
        "translation":  "การสร้างการ์ตูนแอนิเมชัน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌæn.ɪˈmeɪ.ʃən/",
        "sentence":  "The children love watching Japanese animation.",
        "sentenceTranslation":  "เด็กๆ ชอบดูแอนิเมชันญี่ปุ่น"
    },
    {
        "id":  "pdf-1702",
        "word":  "Aquarium",
        "translation":  "การเลี้ยงปลาตู้ / สถานแสดงพันธุ์สัตว์น้ำ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/əˈkweə.ri.əm/",
        "sentence":  "We saw many colorful fish at the aquarium.",
        "sentenceTranslation":  "เราเห็นปลาหลากสีสันมากมายที่พิพิธภัณฑ์สัตว์น้ำ"
    },
    {
        "id":  "pdf-1703",
        "word":  "Arcade",
        "translation":  "ร้านเกมตู้ / ศูนย์เกม",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ɑːˈkeɪd/",
        "sentence":  "The teenagers spent their afternoon at the video game arcade.",
        "sentenceTranslation":  "พวกวัยรุ่นใช้เวลาช่วงบ่ายที่ร้านเกมตู้"
    },
    {
        "id":  "pdf-1704",
        "word":  "Archery",
        "translation":  "การยิงธนู",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈɑː.tʃər.i/",
        "sentence":  "She is practicing archery at the sports club.",
        "sentenceTranslation":  "เธอกำลังฝึกยิงธนูอยู่ที่สโมสรกีฬา"
    },
    {
        "id":  "pdf-1705",
        "word":  "Astronomy",
        "translation":  "ดาราศาสตร์ (การดูดาวเป็นงานอดิเรก)",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/əˈstrɒn.ə.mi/",
        "sentence":  "He has a great interest in astronomy and the stars.",
        "sentenceTranslation":  "เขามีความสนใจอย่างมากในวิชาดาราศาสตร์และดวงดาว"
    },
    {
        "id":  "pdf-1706",
        "word":  "Backpacking",
        "translation":  "การเที่ยวสะพายเป้ลุยๆ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbæk.pæk.ɪŋ/",
        "sentence":  "They are going backpacking across Europe this summer.",
        "sentenceTranslation":  "พวกเขากำลังจะไปเที่ยวแบ็กแพ็กทั่วยุโรปในฤดูร้อนนี้"
    },
    {
        "id":  "pdf-1707",
        "word":  "Baking",
        "translation":  "การทำขนมอบ (เบเกอรี)",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbeɪ.kɪŋ/",
        "sentence":  "I enjoy baking cookies on weekends.",
        "sentenceTranslation":  "ฉันสนุกกับการอบคุกกี้ในวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1708",
        "word":  "Ballet",
        "translation":  "การเต้นบัลเลต์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbæl.eɪ/",
        "sentence":  "She has been practicing ballet since she was a child.",
        "sentenceTranslation":  "เธอฝึกบัลเลต์มาตั้งแต่เธอยังเป็นเด็ก"
    },
    {
        "id":  "pdf-1709",
        "word":  "Billiards",
        "translation":  "กีฬาสนุกเกอร์ / บิลเลียด",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbɪl.jədz/",
        "sentence":  "We played a game of billiards at the club.",
        "sentenceTranslation":  "พวกเราเล่นบิลเลียดกันที่สโมสร"
    },
    {
        "id":  "pdf-1710",
        "word":  "Birdwatching",
        "translation":  "การส่องนก / ดูนก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbɜːdˌwɒtʃ.ɪŋ/",
        "sentence":  "He took his binoculars for birdwatching in the forest.",
        "sentenceTranslation":  "เขานำกล้องส่องทางไกลไปดูนกในป่า"
    },
    {
        "id":  "pdf-1711",
        "word":  "Blogging",
        "translation":  "การเขียนบล็อกออนไลน์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈblɒɡ.ɪŋ/",
        "sentence":  "She started blogging about her travel experiences.",
        "sentenceTranslation":  "เธอเริ่มเขียนบล็อกเกี่ยวกับประสบการณ์การท่องเที่ยวของเธอ"
    },
    {
        "id":  "pdf-1712",
        "word":  "Board game",
        "translation":  "เกมกระดาน (เช่น เกมเศรษฐี)",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/bɔːd ɡeɪm/",
        "sentence":  "We spent the evening playing a board game together.",
        "sentenceTranslation":  "พวกเราใช้เวลาช่วงเย็นเล่นบอร์ดเกมด้วยกัน"
    },
    {
        "id":  "pdf-1713",
        "word":  "Boating",
        "translation":  "การล่องเรือเล่น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbəʊ.tɪŋ/",
        "sentence":  "They went boating on the lake during the summer.",
        "sentenceTranslation":  "พวกเขาไปพายเรือเล่นในทะเลสาบช่วงฤดูร้อน"
    },
    {
        "id":  "pdf-1714",
        "word":  "Bowling",
        "translation":  "การโยนโบว์ลิ่ง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbəʊ.lɪŋ/",
        "sentence":  "My friends and I go bowling every Friday night.",
        "sentenceTranslation":  "ฉันและเพื่อนๆ ไปเล่นโบว์ลิ่งกันทุกคืนวันศุกร์"
    },
    {
        "id":  "pdf-1715",
        "word":  "Boxing",
        "translation":  "การต่อยมวย",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈbɒk.sɪŋ/",
        "sentence":  "He trains in boxing to stay fit and disciplined.",
        "sentenceTranslation":  "เขาฝึกมวยเพื่อรักษาสุขภาพและสร้างวินัย"
    },
    {
        "id":  "pdf-1716",
        "word":  "Camping",
        "translation":  "การตั้งแคมป์ / กางเต็นท์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈkæm.pɪŋ/",
        "sentence":  "We went camping in the mountains last month.",
        "sentenceTranslation":  "พวกเราไปตั้งแคมป์บนภูเขาเมื่อเดือนที่แล้ว"
    },
    {
        "id":  "pdf-1717",
        "word":  "Card game",
        "translation":  "เกมไพ่",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/kɑːd ɡeɪm/",
        "sentence":  "Learning a new card game is fun for the whole family.",
        "sentenceTranslation":  "การเรียนรู้เกมไพ่ใหม่ๆ เป็นเรื่องสนุกสำหรับทั้งครอบครัว"
    },
    {
        "id":  "pdf-1718",
        "word":  "Ceramics",
        "translation":  "การทำเครื่องปั้นดินเผา / เซรามิก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/səˈræm.ɪks/",
        "sentence":  "She creates beautiful ceramics in her studio.",
        "sentenceTranslation":  "เธอสร้างผลงานเซรามิกที่สวยงามในสตูดิโอของเธอ"
    },
    {
        "id":  "pdf-1719",
        "word":  "Chess",
        "translation":  "หมากรุก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/tʃes/",
        "sentence":  "Playing chess helps improve your strategic thinking.",
        "sentenceTranslation":  "การเล่นหมากรุกช่วยพัฒนาการคิดเชิงกลยุทธ์ของคุณ"
    },
    {
        "id":  "pdf-1720",
        "word":  "Cinema / Theater",
        "translation":  "การไปดูหนังที่โรงภาพยนตร์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsɪn.ə.mə/ /ˈθɪə.tər/",
        "sentence":  "We are going to the cinema to watch the latest movie.",
        "sentenceTranslation":  "พวกเรากำลังจะไปโรงภาพยนตร์เพื่อดูหนังเรื่องล่าสุด"
    },
    {
        "id":  "pdf-1721",
        "word":  "Collecting",
        "translation":  "การสะสมของเก่า / ของเล่น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/kəˈlek.tɪŋ/",
        "sentence":  "Collecting stamps is a popular hobby among many people.",
        "sentenceTranslation":  "การสะสมแสตมป์เป็นงานอดิเรกยอดนิยมของใครหลายคน"
    },
    {
        "id":  "pdf-1722",
        "word":  "Comic book",
        "translation":  "การอ่านหนังสือการ์ตูน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈkɒmɪk bʊk/",
        "sentence":  "I bought a new comic book at the store.",
        "sentenceTranslation":  "ฉันซื้อหนังสือการ์ตูนเล่มใหม่ที่ร้าน"
    },
    {
        "id":  "pdf-1723",
        "word":  "Concert",
        "translation":  "การไปดูคอนเสิร์ต",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈkɒnsərt/",
        "sentence":  "We are going to a music concert tonight.",
        "sentenceTranslation":  "พวกเราจะไปดูคอนเสิร์ตดนตรีคืนนี้"
    },
    {
        "id":  "pdf-1724",
        "word":  "Cooking class",
        "translation":  "การลงเรียนทำอาหาร",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈkʊkɪŋ klæs/",
        "sentence":  "She signed up for a Thai cooking class.",
        "sentenceTranslation":  "เธอสมัครเรียนคลาสทำอาหารไทย"
    },
    {
        "id":  "pdf-1725",
        "word":  "Cosplay",
        "translation":  "การแต่งตัวคอสเพลย์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈkɒspleɪ/",
        "sentence":  "He loves to do cosplay as his favorite hero.",
        "sentenceTranslation":  "เขาชอบแต่งคอสเพลย์เป็นฮีโร่คนโปรดของเขา"
    },
    {
        "id":  "pdf-1726",
        "word":  "Craft",
        "translation":  "งานฝีมือ / งานประดิษฐ์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/krɑːft/",
        "sentence":  "They spent the afternoon doing some paper craft.",
        "sentenceTranslation":  "พวกเขาใช้เวลาช่วงบ่ายทำงานประดิษฐ์จากกระดาษ"
    },
    {
        "id":  "pdf-1727",
        "word":  "Cycling",
        "translation":  "การปั่นจักรยาน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsaɪklɪŋ/",
        "sentence":  "Cycling is a great way to stay healthy.",
        "sentenceTranslation":  "การปั่นจักรยานเป็นวิธีที่ดีในการรักษาสุขภาพ"
    },
    {
        "id":  "pdf-1728",
        "word":  "Dancing",
        "translation":  "การเต้นรำ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈdænsɪŋ/",
        "sentence":  "She enjoys dancing to pop music.",
        "sentenceTranslation":  "เธอสนุกกับการเต้นตามเพลงป๊อป"
    },
    {
        "id":  "pdf-1729",
        "word":  "Diving",
        "translation":  "การดำน้ำ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈdaɪvɪŋ/",
        "sentence":  "They went scuba diving in the ocean.",
        "sentenceTranslation":  "พวกเขาไปดำน้ำลึกในมหาสมุทร"
    },
    {
        "id":  "pdf-1730",
        "word":  "DIY (Do It Yourself)",
        "translation":  "งานประดิษฐ์ทำด้วยตัวเอง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/diː aɪ waɪ/",
        "sentence":  "Building this shelf is a simple DIY project.",
        "sentenceTranslation":  "การสร้างชั้นวางของนี้เป็นโปรเจกต์ทำเองง่ายๆ"
    },
    {
        "id":  "pdf-1731",
        "word":  "Drawing",
        "translation":  "การวาดเส้น / ภาพลายเส้น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈdrɔːɪŋ/",
        "sentence":  "Drawing helps me relax after work.",
        "sentenceTranslation":  "การวาดรูปช่วยให้ฉันผ่อนคลายหลังเลิกงาน"
    },
    {
        "id":  "pdf-1732",
        "word":  "Embroidery",
        "translation":  "การปักผ้า",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ɪmˈbrɔɪdəri/",
        "sentence":  "She practices embroidery in her spare time.",
        "sentenceTranslation":  "เธอฝึกปักผ้าในเวลาว่าง"
    },
    {
        "id":  "pdf-1733",
        "word":  "Entertainment",
        "translation":  "ความบันเทิง / สิ่งรื่นเริง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌentəˈteɪnmənt/",
        "sentence":  "Television is a popular form of entertainment.",
        "sentenceTranslation":  "โทรทัศน์เป็นรูปแบบความบันเทิงที่ได้รับความนิยม"
    },
    {
        "id":  "pdf-1734",
        "word":  "Exercise",
        "translation":  "การออกกำลังกาย",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈeksəsaɪz/",
        "sentence":  "Regular exercise is important for everyone.",
        "sentenceTranslation":  "การออกกำลังกายอย่างสม่ำเสมอเป็นสิ่งสำคัญสำหรับทุกคน"
    },
    {
        "id":  "pdf-1735",
        "word":  "Exhibition",
        "translation":  "การเดินชมงานนิทรรศการ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌeksɪˈbɪʃn/",
        "sentence":  "There is a new art exhibition at the gallery.",
        "sentenceTranslation":  "มีนิทรรศการศิลปะชุดใหม่ที่แกลเลอรี"
    },
    {
        "id":  "pdf-1736",
        "word":  "Fishing",
        "translation":  "การตกปลา",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈfɪʃɪŋ/",
        "sentence":  "They went fishing at the lake this morning.",
        "sentenceTranslation":  "พวกเขาไปตกปลากันที่ทะเลสาบเมื่อเช้านี้"
    },
    {
        "id":  "pdf-1737",
        "word":  "Fitness",
        "translation":  "การเล่นฟิตเนส",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈfɪtnəs/",
        "sentence":  "She goes to the gym to improve her fitness.",
        "sentenceTranslation":  "เธอไปที่ยิมเพื่อพัฒนาสมรรถภาพทางกายของเธอ"
    },
    {
        "id":  "pdf-1738",
        "word":  "Free time / Leisure",
        "translation":  "เวลาว่าง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/friː taɪm / ˈleʒər/",
        "sentence":  "I like to read books in my free time.",
        "sentenceTranslation":  "ฉันชอบอ่านหนังสือในเวลาว่าง"
    },
    {
        "id":  "pdf-1739",
        "word":  "Gambling",
        "translation":  "การเล่นพนัน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈɡæmblɪŋ/",
        "sentence":  "He lost a lot of money because of gambling.",
        "sentenceTranslation":  "เขาเสียเงินไปจำนวนมากเพราะการพนัน"
    },
    {
        "id":  "pdf-1740",
        "word":  "Gardening",
        "translation":  "การทำสวน / ปลูกต้นไม้",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈɡɑːrdnɪŋ/",
        "sentence":  "Gardening is a very relaxing hobby for me.",
        "sentenceTranslation":  "การทำสวนเป็นงานอดิเรกที่ผ่อนคลายมากสำหรับฉัน"
    },
    {
        "id":  "pdf-1741",
        "word":  "Golfing",
        "translation":  "การเล่นกอล์ฟ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈɡɑːlfɪŋ/",
        "sentence":  "They enjoy golfing on the weekend.",
        "sentenceTranslation":  "พวกเขาเพลิดเพลินกับการเล่นกอล์ฟในช่วงวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1742",
        "word":  "Gym",
        "translation":  "การเข้าโรงยิมออกกำลังกาย",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/dʒɪm/",
        "sentence":  "I workout at the gym every morning.",
        "sentenceTranslation":  "ฉันออกกำลังกายที่ยิมทุกเช้า"
    },
    {
        "id":  "pdf-1743",
        "word":  "Hiking",
        "translation":  "การเดินป่า",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈhaɪkɪŋ/",
        "sentence":  "We are planning on hiking up the mountain tomorrow.",
        "sentenceTranslation":  "พวกเราวางแผนว่าจะไปปีนเขาในวันพรุ่งนี้"
    },
    {
        "id":  "pdf-1744",
        "word":  "Hobby",
        "translation":  "งานอดิเรก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈhɑːbi/",
        "sentence":  "Photography is my favorite hobby.",
        "sentenceTranslation":  "การถ่ายภาพคืองานอดิเรกที่ฉันโปรดปราน"
    },
    {
        "id":  "pdf-1745",
        "word":  "Hunting",
        "translation":  "การล่าสัตว์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈhʌntɪŋ/",
        "sentence":  "Hunting is strictly prohibited in this forest.",
        "sentenceTranslation":  "การล่าสัตว์เป็นสิ่งต้องห้ามอย่างเคร่งครัดในป่าแห่งนี้"
    },
    {
        "id":  "pdf-1746",
        "word":  "Ice skating",
        "translation":  "การเล่นไอซ์สเกต",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/aɪs ˈskeɪtɪŋ/",
        "sentence":  "Ice skating is fun but it can be difficult to learn.",
        "sentenceTranslation":  "การเล่นไอซ์สเก็ตนั้นสนุกแต่อาจจะเรียนรู้ได้ยาก"
    },
    {
        "id":  "pdf-1747",
        "word":  "Instrument",
        "translation":  "การเล่นเครื่องดนตรี",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈɪnstrəmənt/",
        "sentence":  "Do you play any musical instrument?",
        "sentenceTranslation":  "คุณเล่นเครื่องดนตรีชนิดใดเป็นบ้างไหม"
    },
    {
        "id":  "pdf-1748",
        "word":  "Jogging",
        "translation":  "การวิ่งจ๊อกกิ้ง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈdʒɑːɡɪŋ/",
        "sentence":  "Jogging in the park helps me clear my mind.",
        "sentenceTranslation":  "การวิ่งจ็อกกิ้งในสวนช่วยให้ฉันรู้สึกปลอดโปร่งขึ้น"
    },
    {
        "id":  "pdf-1749",
        "word":  "Journaling",
        "translation":  "การเขียนไดอารี / บันทึกประจำวัน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈdʒɜːrnəlɪŋ/",
        "sentence":  "Journaling helps me reflect on my day.",
        "sentenceTranslation":  "การเขียนบันทึกช่วยให้ฉันได้ทบทวนเรื่องราวในแต่ละวัน"
    },
    {
        "id":  "pdf-1750",
        "word":  "Karaoke",
        "translation":  "การร้องเพลงคาราโอเกะ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌkæriˈoʊki/",
        "sentence":  "We went out for karaoke after dinner.",
        "sentenceTranslation":  "พวกเราออกไปร้องคาราโอเกะหลังจากทานมื้อเย็น"
    },
    {
        "id":  "pdf-1751",
        "word":  "Knitting",
        "translation":  "การถักไหมพรม",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈnɪtɪŋ/",
        "sentence":  "She is knitting a scarf for her friend.",
        "sentenceTranslation":  "เธอกำลังถักผ้าพันคอให้เพื่อนของเธอ"
    },
    {
        "id":  "pdf-1752",
        "word":  "Live streaming",
        "translation":  "การไลฟ์สดสตรีมมิง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/laɪv ˈstriːmɪŋ/",
        "sentence":  "They are live streaming the concert online.",
        "sentenceTranslation":  "พวกเขากำลังถ่ายทอดสดคอนเสิร์ตผ่านทางออนไลน์"
    },
    {
        "id":  "pdf-1753",
        "word":  "Magazine",
        "translation":  "การอ่านนิตยสาร",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌmæɡəˈziːn/",
        "sentence":  "I bought a fashion magazine at the shop.",
        "sentenceTranslation":  "ฉันซื้อนิตยสารแฟชั่นที่ร้าน"
    },
    {
        "id":  "pdf-1754",
        "word":  "Magic trick",
        "translation":  "การเล่นมายากล",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈmædʒɪk trɪk/",
        "sentence":  "He performed a magic trick for the children.",
        "sentenceTranslation":  "เขาแสดงกลให้เด็กๆ ดู"
    },
    {
        "id":  "pdf-1755",
        "word":  "Meditation",
        "translation":  "การนั่งสมาธิ / ทำจิตใจให้สงบ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌmedɪˈteɪʃn/",
        "sentence":  "She practices meditation every morning.",
        "sentenceTranslation":  "เธอฝึกสมาธิทุกเช้า"
    },
    {
        "id":  "pdf-1756",
        "word":  "Movie night",
        "translation":  "คืนดูภาพยนตร์กับครอบครัวหรือเพื่อน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈmuːvi naɪt/",
        "sentence":  "We are planning a movie night this Friday.",
        "sentenceTranslation":  "พวกเราวางแผนจะจัดคืนดูหนังกันในวันศุกร์นี้"
    },
    {
        "id":  "pdf-1757",
        "word":  "Museum",
        "translation":  "การเดินเที่ยวพิพิธภัณฑ์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/mjuˈziːəm/",
        "sentence":  "We visited the art museum yesterday.",
        "sentenceTranslation":  "พวกเราไปเยี่ยมชมพิพิธภัณฑ์ศิลปะเมื่อวานนี้"
    },
    {
        "id":  "pdf-1758",
        "word":  "Musical",
        "translation":  "ละครเวทีเพลง / มิวสิคัล",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈmjuːzɪkl/",
        "sentence":  "They went to see a musical in the city.",
        "sentenceTranslation":  "พวกเขาไปดูละครเพลงในเมือง"
    },
    {
        "id":  "pdf-1759",
        "word":  "Newspaper",
        "translation":  "การอ่านหนังสือพิมพ์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈnjuːzpeɪpər/",
        "sentence":  "My father reads the newspaper every day.",
        "sentenceTranslation":  "พ่อของฉันอ่านหนังสือพิมพ์ทุกวัน"
    },
    {
        "id":  "pdf-1760",
        "word":  "Origami",
        "translation":  "การพับกระดาษแบบญี่ปุ่น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌɒrɪˈɡɑːmi/",
        "sentence":  "She enjoys making origami cranes.",
        "sentenceTranslation":  "เธอสนุกกับการพับกระดาษโอริกามิเป็นรูปนกกระเรียน"
    },
    {
        "id":  "pdf-1761",
        "word":  "Painting",
        "translation":  "การวาดภาพระบายสี",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpeɪntɪŋ/",
        "sentence":  "He is working on a new landscape painting.",
        "sentenceTranslation":  "เขากำลังวาดภาพทิวทัศน์ภาพใหม่"
    },
    {
        "id":  "pdf-1762",
        "word":  "Pets",
        "translation":  "การเลี้ยงและเล่นกับสัตว์เลี้ยง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/pets/",
        "sentence":  "They have two pets, a cat and a dog.",
        "sentenceTranslation":  "พวกเขามีสัตว์เลี้ยงสองตัว คือแมวหนึ่งตัวและสุนัขหนึ่งตัว"
    },
    {
        "id":  "pdf-1763",
        "word":  "Photography",
        "translation":  "การถ่ายภาพ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/fəˈtɒɡrəfi/",
        "sentence":  "She has a passion for wildlife photography.",
        "sentenceTranslation":  "เธอมีความหลงใหลในการถ่ายภาพสัตว์ป่า"
    },
    {
        "id":  "pdf-1764",
        "word":  "Pilates",
        "translation":  "การเล่นพิลาทิส",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/pəˈlɑːtiːz/",
        "sentence":  "I started doing Pilates to improve my posture.",
        "sentenceTranslation":  "ฉันเริ่มเล่นพิลาทิสเพื่อปรับปรุงบุคลิกภาพ"
    },
    {
        "id":  "pdf-1765",
        "word":  "Picnic",
        "translation":  "การไปปิกนิกนอกสถานที่",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpɪknɪk/",
        "sentence":  "We had a picnic in the park yesterday.",
        "sentenceTranslation":  "พวกเราไปปิกนิกกันที่สวนสาธารณะเมื่อวานนี้"
    },
    {
        "id":  "pdf-1766",
        "word":  "Podcast",
        "translation":  "การฟังพอดแคสต์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpɒdkɑːst/",
        "sentence":  "I like to listen to a podcast while driving.",
        "sentenceTranslation":  "ฉันชอบฟังพอดแคสต์ระหว่างขับรถ"
    },
    {
        "id":  "pdf-1767",
        "word":  "Poetry",
        "translation":  "การแต่งบทกวี",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpoʊ.ə.tri/",
        "sentence":  "She enjoys writing beautiful poetry in her free time.",
        "sentenceTranslation":  "เธอสนุกกับการเขียนบทกวีที่สวยงามในเวลาว่าง"
    },
    {
        "id":  "pdf-1768",
        "word":  "Pottery",
        "translation":  "การทำเครื่องปั้นดินเผา",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpɑː.t̬ɚ.i/",
        "sentence":  "He took a pottery class to learn how to make vases.",
        "sentenceTranslation":  "เขาลงเรียนคลาสปั้นเครื่องปั้นดินเผาเพื่อเรียนรู้วิธีทำแจกัน"
    },
    {
        "id":  "pdf-1769",
        "word":  "Puzzle",
        "translation":  "เกมปริศนา / จิกซอว์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈpʌz.əl/",
        "sentence":  "Solving this jigsaw puzzle is quite challenging.",
        "sentenceTranslation":  "การต่อจิ๊กซอว์อันนี้ค่อนข้างท้าทายมาก"
    },
    {
        "id":  "pdf-1770",
        "word":  "Reading",
        "translation":  "การอ่านหนังสือ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈriː.dɪŋ/",
        "sentence":  "Reading books helps improve your vocabulary.",
        "sentenceTranslation":  "การอ่านหนังสือช่วยพัฒนาคำศัพท์ของคุณ"
    },
    {
        "id":  "pdf-1771",
        "word":  "Recreation",
        "translation":  "การพักผ่อนหย่อนใจ / สันทนาการ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌrek.riˈeɪ.ʃən/",
        "sentence":  "The park provides a space for outdoor recreation.",
        "sentenceTranslation":  "สวนสาธารณะแห่งนี้มีพื้นที่สำหรับกิจกรรมนันทนาการกลางแจ้ง"
    },
    {
        "id":  "pdf-1772",
        "word":  "Relax",
        "translation":  "การผ่อนคลายความเครียด",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/rɪˈlæks/",
        "sentence":  "I like to relax on the beach during the weekend.",
        "sentenceTranslation":  "ฉันชอบไปพักผ่อนหย่อนใจที่ชายหาดในช่วงวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1773",
        "word":  "Running",
        "translation":  "การวิ่ง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈrʌn.ɪŋ/",
        "sentence":  "Running in the morning keeps me fit and healthy.",
        "sentenceTranslation":  "การวิ่งในตอนเช้าช่วยให้ฉันฟิตและสุขภาพดี"
    },
    {
        "id":  "pdf-1774",
        "word":  "Scrapbooking",
        "translation":  "การทำสมุดภาพสะสม",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈskræpˌbʊk.ɪŋ/",
        "sentence":  "She has a passion for scrapbooking her travel memories.",
        "sentenceTranslation":  "เธอมีความหลงใหลในการทำสมุดภาพบันทึกความทรงจำจากการเดินทางของเธอ"
    },
    {
        "id":  "pdf-1775",
        "word":  "Shopping mall",
        "translation":  "การเดินเที่ยวห้างสรรพสินค้า",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈʃɑː.pɪŋ ˌmɑːl/",
        "sentence":  "We went to the shopping mall to buy some new clothes.",
        "sentenceTranslation":  "พวกเราไปห้างสรรพสินค้าเพื่อซื้อเสื้อผ้าใหม่"
    },
    {
        "id":  "pdf-1776",
        "word":  "Sightseeing",
        "translation":  "การเที่ยวชมทิวทัศน์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsaɪtˌsiː.ɪŋ/",
        "sentence":  "We spent the whole day sightseeing in the city center.",
        "sentenceTranslation":  "พวกเราใช้เวลาทั้งวันไปกับการเที่ยวชมสถานที่ต่างๆ ในตัวเมือง"
    },
    {
        "id":  "pdf-1777",
        "word":  "Singing",
        "translation":  "การร้องเพลง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsɪŋ.ɪŋ/",
        "sentence":  "Singing is one of her favorite hobbies.",
        "sentenceTranslation":  "การร้องเพลงเป็นหนึ่งในงานอดิเรกที่เธอชื่นชอบ"
    },
    {
        "id":  "pdf-1778",
        "word":  "Skateboarding",
        "translation":  "การเล่นสเกตบอร์ด",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈskeɪtˌbɔːr.dɪŋ/",
        "sentence":  "He practices skateboarding at the park every evening.",
        "sentenceTranslation":  "เขาฝึกเล่นสเก็ตบอร์ดที่สวนสาธารณะทุกเย็น"
    },
    {
        "id":  "pdf-1779",
        "word":  "Sketching",
        "translation":  "การร่างภาพคร่าวๆ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsketʃ.ɪŋ/",
        "sentence":  "She enjoys sketching portraits of people in the cafe.",
        "sentenceTranslation":  "เธอชอบวาดภาพร่างใบหน้าของผู้คนในร้านกาแฟ"
    },
    {
        "id":  "pdf-1780",
        "word":  "Skiing",
        "translation":  "การเล่นสกี",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈskiː.ɪŋ/",
        "sentence":  "They are planning to go skiing in Switzerland this winter.",
        "sentenceTranslation":  "พวกเขาวางแผนที่จะไปเล่นสกีที่ประเทศสวิตเซอร์แลนด์ในฤดูหนาวนี้"
    },
    {
        "id":  "pdf-1781",
        "word":  "Social media",
        "translation":  "การเล่นโซเชียลมีเดีย",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌsoʊ.ʃəl ˈmiː.di.ə/",
        "sentence":  "Many people spend too much time on social media.",
        "sentenceTranslation":  "ผู้คนจำนวนมากใช้เวลาบนสื่อสังคมออนไลน์มากเกินไป"
    },
    {
        "id":  "pdf-1782",
        "word":  "Souvenir",
        "translation":  "การเลือกซื้อของฝากของที่ระลึก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌsuːvəˈnɪər/",
        "sentence":  "I bought a small souvenir from my trip to Japan.",
        "sentenceTranslation":  "ฉันซื้อของที่ระลึกชิ้นเล็กๆ มาจากการไปเที่ยวญี่ปุ่นของฉัน"
    },
    {
        "id":  "pdf-1783",
        "word":  "Souvenir hunting",
        "translation":  "การตามหาของสะสมแปลกๆ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌsuːvəˈnɪər ˈhʌntɪŋ/",
        "sentence":  "We spent the whole afternoon souvenir hunting in the local market.",
        "sentenceTranslation":  "พวกเราใช้เวลาทั้งบ่ายไปกับการเดินหาซื้อของที่ระลึกในตลาดท้องถิ่น"
    },
    {
        "id":  "pdf-1784",
        "word":  "Sports",
        "translation":  "การเล่นกีฬา",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/spɔːrts/",
        "sentence":  "She enjoys playing various sports like tennis and badminton.",
        "sentenceTranslation":  "เธอสนุกกับการเล่นกีฬาหลายประเภท เช่น เทนนิสและแบดมินตัน"
    },
    {
        "id":  "pdf-1785",
        "word":  "Stamp collecting",
        "translation":  "การสะสมแสตมป์",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/stæmp kəˈlɛktɪŋ/",
        "sentence":  "My grandfather has a great passion for stamp collecting.",
        "sentenceTranslation":  "คุณปู่ของฉันมีความหลงใหลอย่างมากในการสะสมแสตมป์"
    },
    {
        "id":  "pdf-1786",
        "word":  "Surfing",
        "translation":  "การเล่นกระดานโต้คลื่น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈsɜːrfɪŋ/",
        "sentence":  "Surfing requires a good sense of balance.",
        "sentenceTranslation":  "การเล่นกระดานโต้คลื่นต้องอาศัยการทรงตัวที่ดี"
    },
    {
        "id":  "pdf-1787",
        "word":  "Swimming",
        "translation":  "การว่ายน้ำ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈswɪmɪŋ/",
        "sentence":  "Swimming is a great way to stay in shape.",
        "sentenceTranslation":  "การว่ายน้ำเป็นวิธีที่ดีในการรักษารูปร่างให้ฟิตอยู่เสมอ"
    },
    {
        "id":  "pdf-1788",
        "word":  "Texting",
        "translation":  "การพิมพ์ข้อความคุยกับเพื่อน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈtɛkstɪŋ/",
        "sentence":  "Please stop texting while you are driving.",
        "sentenceTranslation":  "โปรดหยุดส่งข้อความในขณะที่คุณกำลังขับรถ"
    },
    {
        "id":  "pdf-1789",
        "word":  "Theatre / Theater",
        "translation":  "ละครเวที / โรงละคร",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈθiːətər/",
        "sentence":  "We are going to the theatre to watch a play tonight.",
        "sentenceTranslation":  "พวกเรากำลังจะไปโรงละครเพื่อดูละครเวทีคืนนี้"
    },
    {
        "id":  "pdf-1790",
        "word":  "Traveling",
        "translation":  "การท่องเที่ยวเดินทาง",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈtrævəlɪŋ/",
        "sentence":  "Traveling helps broaden your perspective of the world.",
        "sentenceTranslation":  "การเดินทางช่วยเปิดมุมมองของคุณให้กว้างขึ้นเกี่ยวกับโลกใบนี้"
    },
    {
        "id":  "pdf-1791",
        "word":  "Video editing",
        "translation":  "การตัดต่อวิดีโอ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈvɪdioʊ ˈɛdɪtɪŋ/",
        "sentence":  "He is very skilled at professional video editing.",
        "sentenceTranslation":  "เขามีทักษะที่เชี่ยวชาญมากในการตัดต่อวิดีโอระดับมืออาชีพ"
    },
    {
        "id":  "pdf-1792",
        "word":  "Video game",
        "translation":  "การเล่นวิดีโอเกม",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈvɪdioʊ ɡeɪm/",
        "sentence":  "Playing video games can improve your hand-eye coordination.",
        "sentenceTranslation":  "การเล่นวิดีโอเกมสามารถช่วยพัฒนาการประสานงานระหว่างมือและตาของคุณ"
    },
    {
        "id":  "pdf-1793",
        "word":  "Vlog",
        "translation":  "การทำวิดีโอบล็อกบันทึกชีวิต",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/vlɒɡ/",
        "sentence":  "She started a travel vlog to share her experiences.",
        "sentenceTranslation":  "เธอเริ่มทำวิดีโอบล็อกท่องเที่ยวเพื่อแบ่งปันประสบการณ์ของเธอ"
    },
    {
        "id":  "pdf-1794",
        "word":  "Volunteer",
        "translation":  "การทำงานจิตอาสา / อาสาสมัคร",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˌvɒlənˈtɪər/",
        "sentence":  "Many people choose to volunteer at the animal shelter.",
        "sentenceTranslation":  "ผู้คนจำนวนมากเลือกที่จะเป็นอาสาสมัครที่สถานพักพิงสัตว์"
    },
    {
        "id":  "pdf-1795",
        "word":  "Walking",
        "translation":  "การเดินเล่น",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈwɔːkɪŋ/",
        "sentence":  "Walking for thirty minutes a day is good for your health.",
        "sentenceTranslation":  "การเดินวันละสามสิบนาทีส่งผลดีต่อสุขภาพของคุณ"
    },
    {
        "id":  "pdf-1796",
        "word":  "Watching TV",
        "translation":  "การดูทีวี",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈwɒtʃɪŋ tiːviː/",
        "sentence":  "He likes watching TV after a long day at work.",
        "sentenceTranslation":  "เขาชอบดูโทรทัศน์หลังจากวันที่เหน็ดเหนื่อยจากการทำงาน"
    },
    {
        "id":  "pdf-1797",
        "word":  "Weaving",
        "translation":  "การทอผ้า",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈwiːvɪŋ/",
        "sentence":  "She is weaving a beautiful traditional basket.",
        "sentenceTranslation":  "เธอกำลังสานตะกร้าแบบดั้งเดิมที่สวยงาม"
    },
    {
        "id":  "pdf-1798",
        "word":  "Weightlifting",
        "translation":  "การยกน้ำหนัก",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈweɪtlɪftɪŋ/",
        "sentence":  "He practices weightlifting every single morning.",
        "sentenceTranslation":  "เขาฝึกยกน้ำหนักทุกเช้า"
    },
    {
        "id":  "pdf-1799",
        "word":  "Writing",
        "translation":  "การเขียนหนังสือ / งานเขียน",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈraɪtɪŋ/",
        "sentence":  "Writing a journal helps me organize my thoughts.",
        "sentenceTranslation":  "การเขียนบันทึกช่วยให้ฉันจัดระเบียบความคิดของตัวเองได้"
    },
    {
        "id":  "pdf-1800",
        "word":  "Yoga",
        "translation":  "การเล่นโยคะ",
        "category":  "Hobbies \u0026 Leisure",
        "ipa":  "/ˈjoʊɡə/",
        "sentence":  "Doing yoga helps improve your flexibility.",
        "sentenceTranslation":  "การเล่นโยคะช่วยปรับปรุงความยืดหยุ่นของร่างกายคุณ"
    },
    {
        "id":  "pdf-1801",
        "word":  "Aircraft",
        "translation":  "เครื่องบิน / อากาศยาน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈerkræft/",
        "sentence":  "The military aircraft flew over the city.",
        "sentenceTranslation":  "อากาศยานทางทหารบินผ่านเหนือเมือง"
    },
    {
        "id":  "pdf-1802",
        "word":  "Airplane / Plane",
        "translation":  "เครื่องบิน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈerpleɪn/",
        "sentence":  "The airplane arrived at the airport on time.",
        "sentenceTranslation":  "เครื่องบินมาถึงสนามบินตรงเวลา"
    },
    {
        "id":  "pdf-1803",
        "word":  "Ambulance",
        "translation":  "รถพยาบาล",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈæmbjələns/",
        "sentence":  "The ambulance rushed the patient to the hospital.",
        "sentenceTranslation":  "รถพยาบาลรีบนำตัวผู้ป่วยส่งโรงพยาบาล"
    },
    {
        "id":  "pdf-1804",
        "word":  "Anchor",
        "translation":  "สมอเรือ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈæŋkər/",
        "sentence":  "The captain dropped the anchor to stop the boat.",
        "sentenceTranslation":  "กัปตันปล่อยสมอเรือเพื่อหยุดเรือ"
    },
    {
        "id":  "pdf-1805",
        "word":  "Automobile / Auto",
        "translation":  "รถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈɔːtəməbiːl/",
        "sentence":  "The automobile industry is growing rapidly.",
        "sentenceTranslation":  "อุตสาหกรรมรถยนต์กำลังเติบโตอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-1806",
        "word":  "Bicycle / Bike",
        "translation":  "จักรยาน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈbaɪsɪkl/",
        "sentence":  "I ride my bicycle to work every day.",
        "sentenceTranslation":  "ฉันขี่จักรยานไปทำงานทุกวัน"
    },
    {
        "id":  "pdf-1807",
        "word":  "Boat",
        "translation":  "เรือขนาดเล็ก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/boʊt/",
        "sentence":  "They rented a small boat to explore the lake.",
        "sentenceTranslation":  "พวกเขาเช่าเรือลำเล็กเพื่อสำรวจทะเลสาบ"
    },
    {
        "id":  "pdf-1808",
        "word":  "Brake",
        "translation":  "เบรก / ห้ามล้อ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/breɪk/",
        "sentence":  "You need to press the brake to stop the car.",
        "sentenceTranslation":  "คุณต้องเหยียบเบรกเพื่อหยุดรถ"
    },
    {
        "id":  "pdf-1809",
        "word":  "Bulldozer",
        "translation":  "รถแทรกเตอร์ตีนตะขาบ / รถเกลี่ยดิน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈbʊldoʊzər/",
        "sentence":  "The bulldozer cleared the land for construction.",
        "sentenceTranslation":  "รถแทรกเตอร์เกรดดินเคลียร์พื้นที่สำหรับการก่อสร้าง"
    },
    {
        "id":  "pdf-1810",
        "word":  "Bumper",
        "translation":  "กันชนรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈbʌmpər/",
        "sentence":  "The car\u0027s front bumper was damaged in the accident.",
        "sentenceTranslation":  "กันชนหน้ารถได้รับความเสียหายจากอุบัติเหตุ"
    },
    {
        "id":  "pdf-1811",
        "word":  "Cabin",
        "translation":  "ห้องโดยสาร (ในเครื่องบินหรือเรือ)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkæbɪn/",
        "sentence":  "The flight attendant greeted us at the cabin door.",
        "sentenceTranslation":  "พนักงานต้อนรับบนเครื่องบินทักทายพวกเราที่ประตูห้องโดยสาร"
    },
    {
        "id":  "pdf-1812",
        "word":  "Cable car",
        "translation":  "รถกระเช้า / รถเคเบิล",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkeɪbəl kɑːr/",
        "sentence":  "We took the cable car to the top of the mountain.",
        "sentenceTranslation":  "พวกเรานั่งกระเช้าไฟฟ้าขึ้นไปบนยอดเขา"
    },
    {
        "id":  "pdf-1813",
        "word":  "Canoe",
        "translation":  "เรือแคนู",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kəˈnuː/",
        "sentence":  "They went for a canoe trip down the river.",
        "sentenceTranslation":  "พวกเขาไปพายเรือแคนูตามแม่น้ำ"
    },
    {
        "id":  "pdf-1814",
        "word":  "Car",
        "translation":  "รถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kɑːr/",
        "sentence":  "I drive my car to work every morning.",
        "sentenceTranslation":  "ฉันขับรถไปทำงานทุกเช้า"
    },
    {
        "id":  "pdf-1815",
        "word":  "Caravan / Campervan",
        "translation":  "รถบ้าน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkærəvæn / ˈkæmpərvæn/",
        "sentence":  "We are going on a road trip in a campervan.",
        "sentenceTranslation":  "พวกเรากำลังจะไปเที่ยวด้วยรถบ้าน"
    },
    {
        "id":  "pdf-1816",
        "word":  "Carriage",
        "translation":  "รถม้า / ตู้โดยสารรถไฟ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkærɪdʒ/",
        "sentence":  "The train has six passenger carriages.",
        "sentenceTranslation":  "รถไฟขบวนนี้มีตู้โดยสารหกตู้"
    },
    {
        "id":  "pdf-1817",
        "word":  "Cart",
        "translation":  "รถเข็น / เกวียน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kɑːrt/",
        "sentence":  "The farmer uses a cart to transport his vegetables.",
        "sentenceTranslation":  "ชาวนาใช้เกวียนเพื่อขนส่งผักของเขา"
    },
    {
        "id":  "pdf-1818",
        "word":  "Chauffeur",
        "translation":  "คนขับรถส่วนตัว (ตำแหน่งหรู)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈʃoʊfər/",
        "sentence":  "The CEO has a chauffeur to drive him to the office.",
        "sentenceTranslation":  "ซีอีโอมีคนขับรถส่วนตัวพาไปที่ออฟฟิศ"
    },
    {
        "id":  "pdf-1819",
        "word":  "Cockpit",
        "translation":  "ห้องนักบิน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkɒkpɪt/",
        "sentence":  "The pilot entered the cockpit to prepare for takeoff.",
        "sentenceTranslation":  "นักบินเข้าไปในห้องนักบินเพื่อเตรียมตัวขึ้นบิน"
    },
    {
        "id":  "pdf-1820",
        "word":  "Convertible",
        "translation":  "รถเปิดประทุน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kənˈvɜːrtəbəl/",
        "sentence":  "She loves driving her convertible with the top down.",
        "sentenceTranslation":  "เธอชอบขับรถเปิดประทุนโดยเปิดหลังคาออก"
    },
    {
        "id":  "pdf-1821",
        "word":  "Crane",
        "translation":  "รถเครน / ปั้นจั่น",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kreɪn/",
        "sentence":  "The crane is lifting heavy steel beams to the top floor.",
        "sentenceTranslation":  "รถเครนกำลังยกคานเหล็กหนักๆ ขึ้นไปที่ชั้นบนสุด"
    },
    {
        "id":  "pdf-1822",
        "word":  "Cruise ship",
        "translation":  "เรือสำราญ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/kruːz ʃɪp/",
        "sentence":  "We spent a week on a luxury cruise ship.",
        "sentenceTranslation":  "พวกเราใช้เวลาหนึ่งสัปดาห์บนเรือสำราญสุดหรู"
    },
    {
        "id":  "pdf-1823",
        "word":  "Dashboard",
        "translation":  "แผงหน้าปัดรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈdæʃbɔːrd/",
        "sentence":  "He checked the speed on the dashboard.",
        "sentenceTranslation":  "เขาดูความเร็วที่หน้าปัดรถยนต์"
    },
    {
        "id":  "pdf-1824",
        "word":  "Driver",
        "translation":  "คนขับรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈdraɪvər/",
        "sentence":  "The driver stopped the bus at the station.",
        "sentenceTranslation":  "คนขับรถจอดรถบัสที่สถานี"
    },
    {
        "id":  "pdf-1825",
        "word":  "Engine",
        "translation":  "เครื่องยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈendʒɪn/",
        "sentence":  "The engine started making a strange noise.",
        "sentenceTranslation":  "เครื่องยนต์เริ่มส่งเสียงแปลกๆ"
    },
    {
        "id":  "pdf-1826",
        "word":  "Fast train",
        "translation":  "รถไฟความเร็วสูง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/fæst treɪn/",
        "sentence":  "The fast train takes only two hours to reach the city.",
        "sentenceTranslation":  "รถไฟความเร็วสูงใช้เวลาเพียงสองชั่วโมงเพื่อถึงตัวเมือง"
    },
    {
        "id":  "pdf-1827",
        "word":  "Fender",
        "translation":  "บังโคลนรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈfɛndər/",
        "sentence":  "The car\u0027s fender was dented during the minor accident.",
        "sentenceTranslation":  "บังโคลนรถยนต์บุบไประหว่างเกิดอุบัติเหตุเล็กน้อย"
    },
    {
        "id":  "pdf-1828",
        "word":  "Ferry",
        "translation":  "เรือข้ามฟาก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈfɛri/",
        "sentence":  "We took a ferry to cross the river.",
        "sentenceTranslation":  "พวกเรานั่งเรือข้ามฟากเพื่อข้ามแม่น้ำ"
    },
    {
        "id":  "pdf-1829",
        "word":  "Fire engine / Fire truck",
        "translation":  "รถดับเพลิง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈfaɪər ˌɛndʒɪn / ˈfaɪər trʌk/",
        "sentence":  "The fire engine rushed to the scene of the blaze.",
        "sentenceTranslation":  "รถดับเพลิงรีบรุดไปยังสถานที่เกิดเหตุเพลิงไหม้"
    },
    {
        "id":  "pdf-1830",
        "word":  "Forklift",
        "translation":  "รถยกของในคลังสินค้า",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈfɔːrklɪft/",
        "sentence":  "The warehouse worker used a forklift to move the heavy boxes.",
        "sentenceTranslation":  "พนักงานคลังสินค้าใช้รถยกเพื่อเคลื่อนย้ายกล่องหนัก"
    },
    {
        "id":  "pdf-1831",
        "word":  "Freight train",
        "translation":  "รถไฟบรรทุกสินค้า",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/freɪt treɪn/",
        "sentence":  "A long freight train passed through the station.",
        "sentenceTranslation":  "รถไฟขนส่งสินค้าขบวนยาววิ่งผ่านสถานีไป"
    },
    {
        "id":  "pdf-1832",
        "word":  "Fuel / Gas / Petrol",
        "translation":  "น้ำมันเชื้อเพลิง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/fjuːəl / ɡæs / ˈpɛtrəl/",
        "sentence":  "We need to stop at the station to get more fuel.",
        "sentenceTranslation":  "เราต้องแวะที่สถานีเพื่อเติมน้ำมันเพิ่ม"
    },
    {
        "id":  "pdf-1833",
        "word":  "Garbage truck",
        "translation":  "รถเก็บขยะ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈɡɑːrbɪdʒ trʌk/",
        "sentence":  "The garbage truck comes to our street every Tuesday.",
        "sentenceTranslation":  "รถเก็บขยะมาที่ถนนของเราทุกวันอังคาร"
    },
    {
        "id":  "pdf-1834",
        "word":  "Gear",
        "translation":  "เกียร์รถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ɡɪər/",
        "sentence":  "He shifted the gear into first to drive up the hill.",
        "sentenceTranslation":  "เขาเปลี่ยนเกียร์เป็นเกียร์หนึ่งเพื่อขับรถขึ้นเนิน"
    },
    {
        "id":  "pdf-1835",
        "word":  "Golf cart",
        "translation":  "รถกอล์ฟ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ɡɒlf kɑːrt/",
        "sentence":  "We drove a golf cart around the resort.",
        "sentenceTranslation":  "พวกเราขับรถกอล์ฟไปรอบๆ รีสอร์ท"
    },
    {
        "id":  "pdf-1836",
        "word":  "GPS Navigation",
        "translation":  "ระบบนำทางจีพีเอส",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˌdʒiː piː ˈɛs ˌnævɪˈɡeɪʃən/",
        "sentence":  "I used GPS navigation to find the best route.",
        "sentenceTranslation":  "ฉันใช้ระบบนำทาง GPS เพื่อหาเส้นทางที่ดีที่สุด"
    },
    {
        "id":  "pdf-1837",
        "word":  "Handlebar",
        "translation":  "แฮนด์จักรยานหรือมอเตอร์ไซค์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhændəlbɑːr/",
        "sentence":  "She held onto the handlebar tightly while riding her bike.",
        "sentenceTranslation":  "เธอจับแฮนด์จักรยานไว้แน่นขณะปั่นจักรยาน"
    },
    {
        "id":  "pdf-1838",
        "word":  "Hatchback",
        "translation":  "รถยนต์ท้ายตัด (5 ประตู)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhætʃbæk/",
        "sentence":  "A hatchback is a practical car for city driving.",
        "sentenceTranslation":  "รถยนต์แบบแฮทช์แบ็กเป็นรถที่เหมาะกับการใช้งานในเมือง"
    },
    {
        "id":  "pdf-1839",
        "word":  "Headlight",
        "translation":  "ไฟหน้ารถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhɛdlaɪt/",
        "sentence":  "One of the headlights on his car was broken.",
        "sentenceTranslation":  "ไฟหน้าข้างหนึ่งของรถเขาแตก"
    },
    {
        "id":  "pdf-1840",
        "word":  "Helicopter",
        "translation":  "เฮลิคอปเตอร์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhɛlɪkɒptər/",
        "sentence":  "The helicopter landed safely on the rooftop.",
        "sentenceTranslation":  "เฮลิคอปเตอร์ลงจอดอย่างปลอดภัยบนดาดฟ้า"
    },
    {
        "id":  "pdf-1841",
        "word":  "Helmet",
        "translation":  "หมวกกันน็อก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhɛlmɪt/",
        "sentence":  "Always wear a helmet when riding a motorcycle.",
        "sentenceTranslation":  "ควรสวมหมวกกันน็อกเสมอเวลาขี่รถจักรยานยนต์"
    },
    {
        "id":  "pdf-1842",
        "word":  "Hood / Bonnet",
        "translation":  "ฝากระโปรงหน้ารถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/hʊd/ /ˈbɒn.ɪt/",
        "sentence":  "He opened the hood to check the engine.",
        "sentenceTranslation":  "เขาเปิดฝากระโปรงรถเพื่อตรวจสอบเครื่องยนต์"
    },
    {
        "id":  "pdf-1843",
        "word":  "Horn",
        "translation":  "แตร",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/hɔːrn/",
        "sentence":  "The driver honked the horn to warn the pedestrian.",
        "sentenceTranslation":  "คนขับรถบีบแตรเพื่อเตือนคนเดินถนน"
    },
    {
        "id":  "pdf-1844",
        "word":  "Hot-air balloon",
        "translation":  "บอลลูนลมร้อน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˌhɒt.eər bəˈluːn/",
        "sentence":  "We watched the hot-air balloon drift across the sky.",
        "sentenceTranslation":  "พวกเราเฝ้ามองบอลลูนลมร้อนลอยข้ามท้องฟ้าไป"
    },
    {
        "id":  "pdf-1845",
        "word":  "Hovercraft",
        "translation":  "เรือโฮเวอร์คราฟต์ / เรือสะเทินน้ำสะเทินบก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhʌv.ə.krɑːft/",
        "sentence":  "The hovercraft glided smoothly over the water.",
        "sentenceTranslation":  "เรือโฮเวอร์คราฟต์แล่นไปบนผิวน้ำได้อย่างนุ่มนวล"
    },
    {
        "id":  "pdf-1846",
        "word":  "Hybrid car",
        "translation":  "รถยนต์ระบบไฮบริด",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈhaɪ.brɪd kɑːr/",
        "sentence":  "A hybrid car is more fuel-efficient than a standard one.",
        "sentenceTranslation":  "รถยนต์ไฮบริดประหยัดน้ำมันได้มากกว่ารถยนต์ทั่วไป"
    },
    {
        "id":  "pdf-1847",
        "word":  "Ignition",
        "translation":  "สวิตช์กุญแจสตาร์ทรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ɪɡˈnɪʃ.ən/",
        "sentence":  "Turn the key in the ignition to start the car.",
        "sentenceTranslation":  "บิดกุญแจที่ช่องเสียบกุญแจเพื่อสตาร์ทรถ"
    },
    {
        "id":  "pdf-1848",
        "word":  "Indicator / Turn signal",
        "translation":  "ไฟเลี้ยว",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈɪn.dɪ.keɪ.tər/ /tɜːn ˈsɪɡ.nəl/",
        "sentence":  "Remember to use your indicator before turning.",
        "sentenceTranslation":  "อย่าลืมเปิดไฟเลี้ยวก่อนที่จะเลี้ยวรถ"
    },
    {
        "id":  "pdf-1849",
        "word":  "Jet",
        "translation":  "เครื่องบินไอพ่น",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/dʒet/",
        "sentence":  "The private jet took off from the runway.",
        "sentenceTranslation":  "เครื่องบินเจ็ตส่วนตัวทะยานขึ้นจากรันเวย์"
    },
    {
        "id":  "pdf-1850",
        "word":  "Jet ski",
        "translation":  "เจ็ตสกี",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/dʒet skiː/",
        "sentence":  "They went for a ride on a jet ski at the beach.",
        "sentenceTranslation":  "พวกเขาไปขี่เจ็ตสกีที่ชายหาด"
    },
    {
        "id":  "pdf-1851",
        "word":  "Kayak",
        "translation":  "เรือคายัค",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈkaɪ.æk/",
        "sentence":  "We paddled our kayak down the calm river.",
        "sentenceTranslation":  "เราพายเรือคายัคไปตามแม่น้ำที่เงียบสงบ"
    },
    {
        "id":  "pdf-1852",
        "word":  "License plate",
        "translation":  "ป้ายทะเบียนรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈlaɪ.səns pleɪt/",
        "sentence":  "The witness remembered the last three digits of the license plate.",
        "sentenceTranslation":  "พยานจำตัวเลขสามหลักสุดท้ายของป้ายทะเบียนรถได้"
    },
    {
        "id":  "pdf-1853",
        "word":  "Locomotive",
        "translation":  "หัวรถจักร",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˌləʊ.kəˈməʊ.tɪv/",
        "sentence":  "The steam locomotive pulled the train into the station.",
        "sentenceTranslation":  "หัวรถจักรไอน้ำลากรถไฟเข้ามาในสถานี"
    },
    {
        "id":  "pdf-1854",
        "word":  "Lorry / Truck",
        "translation":  "รถบรรทุก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈlɒr.i/ /trʌk/",
        "sentence":  "The lorry delivered goods to the warehouse.",
        "sentenceTranslation":  "รถบรรทุกขนส่งสินค้าไปยังคลังสินค้า"
    },
    {
        "id":  "pdf-1855",
        "word":  "Minivan / Minibus",
        "translation":  "รถตู้ / รถบัสขนาดเล็ก",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈmɪn.i.væn/ /ˈmɪn.i.bʌs/",
        "sentence":  "A minibus picked up all the passengers at the hotel.",
        "sentenceTranslation":  "รถมินิบัสรับผู้โดยสารทุกคนที่โรงแรม"
    },
    {
        "id":  "pdf-1856",
        "word":  "Moped",
        "translation":  "รถจักรยานยนต์ขนาดเล็ก / รถป๊อป",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈməʊ.ped/",
        "sentence":  "He rides his moped to work every morning.",
        "sentenceTranslation":  "เขาขี่รถมอเตอร์ไซค์คันเล็กไปทำงานทุกเช้า"
    },
    {
        "id":  "pdf-1857",
        "word":  "Motorboat",
        "translation":  "เรือยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈmoʊtərbəʊt/",
        "sentence":  "The motorboat sped across the lake.",
        "sentenceTranslation":  "เรือยนต์แล่นข้ามทะเลสาบด้วยความเร็ว"
    },
    {
        "id":  "pdf-1858",
        "word":  "Motorcycle / Motorbike",
        "translation":  "รถจักรยานยนต์ / มอเตอร์ไซค์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈmoʊtərsɑɪkəl / ˈmoʊtərbɑɪk/",
        "sentence":  "He rides his motorcycle to work every day.",
        "sentenceTranslation":  "เขาขี่รถจักรยานยนต์ไปทำงานทุกวัน"
    },
    {
        "id":  "pdf-1859",
        "word":  "Oar",
        "translation":  "ไม้พาย",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ɔːr/",
        "sentence":  "She lost her oar in the river.",
        "sentenceTranslation":  "เธอทำพายหล่นหายไปในแม่น้ำ"
    },
    {
        "id":  "pdf-1860",
        "word":  "Odometer",
        "translation":  "มาตรวัดระยะทางรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/oʊˈdɑːmɪtər/",
        "sentence":  "The odometer shows that the car has traveled 50,000 kilometers.",
        "sentenceTranslation":  "มาตรวัดระยะทางแสดงให้เห็นว่ารถวิ่งมาแล้ว 50,000 กิโลเมตร"
    },
    {
        "id":  "pdf-1861",
        "word":  "Paddle",
        "translation":  "พาย / พายเรือ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈpædəl/",
        "sentence":  "We need a paddle to steer the canoe.",
        "sentenceTranslation":  "เราต้องใช้ไม้พายเพื่อบังคับทิศทางเรือแคนู"
    },
    {
        "id":  "pdf-1862",
        "word":  "Pedicab / Tricycle",
        "translation":  "รถสามล้อ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈpɛdɪkæb / ˈtrɑɪsɪkəl/",
        "sentence":  "The tourist took a pedicab to see the old town.",
        "sentenceTranslation":  "นักท่องเที่ยวขึ้นรถสามล้อเพื่อชมเมืองเก่า"
    },
    {
        "id":  "pdf-1863",
        "word":  "Pickup truck",
        "translation":  "รถกระบะ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈpɪkʌp trʌk/",
        "sentence":  "He uses his pickup truck to carry heavy loads.",
        "sentenceTranslation":  "เขาใช้รถกระบะเพื่อขนของหนัก"
    },
    {
        "id":  "pdf-1864",
        "word":  "Pilot",
        "translation":  "นักบิน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈpɑɪlət/",
        "sentence":  "The pilot announced that we will be landing soon.",
        "sentenceTranslation":  "นักบินประกาศว่าเรากำลังจะลงจอดในไม่ช้า"
    },
    {
        "id":  "pdf-1865",
        "word":  "Propeller",
        "translation":  "ใบพัด (เครื่องบินหรือเรือ)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/prəˈpɛlər/",
        "sentence":  "The airplane\u0027s propeller began to spin rapidly.",
        "sentenceTranslation":  "ใบพัดของเครื่องบินเริ่มหมุนอย่างรวดเร็ว"
    },
    {
        "id":  "pdf-1866",
        "word":  "Public bus",
        "translation":  "รถเมล์ / รถโดยสารประจำทาง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈpʌblɪk bʌs/",
        "sentence":  "I take the public bus to get to the city center.",
        "sentenceTranslation":  "ฉันขึ้นรถประจำทางเพื่อเข้าสู่ใจกลางเมือง"
    },
    {
        "id":  "pdf-1867",
        "word":  "Radiator",
        "translation":  "หม้อน้ำรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈreɪdieɪtər/",
        "sentence":  "The car overheated because of a leaking radiator.",
        "sentenceTranslation":  "รถร้อนจัดเพราะหม้อน้ำรั่ว"
    },
    {
        "id":  "pdf-1868",
        "word":  "Raft",
        "translation":  "แพ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ræft/",
        "sentence":  "They went on a raft trip down the river.",
        "sentenceTranslation":  "พวกเขาไปล่องแพกันในแม่น้ำ"
    },
    {
        "id":  "pdf-1869",
        "word":  "Rearview mirror",
        "translation":  "กระจกมองหลัง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈrɪrvjuː ˈmɪrər/",
        "sentence":  "Check the rearview mirror before changing lanes.",
        "sentenceTranslation":  "ตรวจสอบกระจกมองหลังก่อนเปลี่ยนเลน"
    },
    {
        "id":  "pdf-1870",
        "word":  "Rowboat",
        "translation":  "เรือพาย",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈroʊboʊt/",
        "sentence":  "We rented a small rowboat for the afternoon.",
        "sentenceTranslation":  "พวกเราเช่าเรือพายลำเล็กในช่วงบ่าย"
    },
    {
        "id":  "pdf-1871",
        "word":  "Sailboat",
        "translation":  "เรือใบ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈseɪlboʊt/",
        "sentence":  "The sailboat glided gracefully across the bay.",
        "sentenceTranslation":  "เรือใบแล่นไปอย่างสง่างามข้ามอ่าว"
    },
    {
        "id":  "pdf-1872",
        "word":  "Scooter",
        "translation":  "สกู๊ตเตอร์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈskuːtər/",
        "sentence":  "He rides his scooter to school every day.",
        "sentenceTranslation":  "เขาขี่สกู๊ตเตอร์ไปโรงเรียนทุกวัน"
    },
    {
        "id":  "pdf-1873",
        "word":  "Sedan",
        "translation":  "รถยนต์นั่งส่วนบุคคล (4 ประตู)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/sɪˈdæn/",
        "sentence":  "They bought a new blue sedan for the family.",
        "sentenceTranslation":  "พวกเขาซื้อรถเก๋งสีน้ำเงินคันใหม่สำหรับครอบครัว"
    },
    {
        "id":  "pdf-1874",
        "word":  "Ship",
        "translation":  "เรือขนาดใหญ่ (เช่น เรือสินค้า เรือรบ)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ʃɪp/",
        "sentence":  "The large ship sailed across the ocean.",
        "sentenceTranslation":  "เรือลำใหญ่นั้นล่องข้ามมหาสมุทรไป"
    },
    {
        "id":  "pdf-1875",
        "word":  "Side mirror",
        "translation":  "กระจกมองข้าง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/saɪd ˈmɪrər/",
        "sentence":  "Check your side mirror before changing lanes.",
        "sentenceTranslation":  "เช็คกระจกข้างของคุณก่อนเปลี่ยนเลน"
    },
    {
        "id":  "pdf-1876",
        "word":  "Skateboard",
        "translation":  "สเกตบอร์ด",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈskeɪtbɔːrd/",
        "sentence":  "She likes to practice on her skateboard at the park.",
        "sentenceTranslation":  "เธอชอบฝึกเล่นสเกตบอร์ดที่สวนสาธารณะ"
    },
    {
        "id":  "pdf-1877",
        "word":  "Speedboat",
        "translation":  "เรือเร็ว / สปีดโบ๊ท",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈspiːdbəʊt/",
        "sentence":  "We took a speedboat to the island.",
        "sentenceTranslation":  "พวกเรานั่งเรือเร็วไปยังเกาะ"
    },
    {
        "id":  "pdf-1878",
        "word":  "Speedometer",
        "translation":  "มาตรวัดความเร็วรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/spiːˈdɒmɪtər/",
        "sentence":  "The speedometer showed that we were going too fast.",
        "sentenceTranslation":  "มาตรวัดความเร็วแสดงให้เห็นว่าเรากำลังขับรถเร็วเกินไป"
    },
    {
        "id":  "pdf-1879",
        "word":  "Sports car",
        "translation":  "รถสปอร์ต",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/spɔːrts kɑːr/",
        "sentence":  "He dreams of driving a red sports car.",
        "sentenceTranslation":  "เขาฝันที่จะได้ขับรถสปอร์ตสีแดง"
    },
    {
        "id":  "pdf-1880",
        "word":  "Steering wheel",
        "translation":  "พวงมาลัยรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈstɪərɪŋ wiːl/",
        "sentence":  "She kept both hands on the steering wheel.",
        "sentenceTranslation":  "เธอวางมือทั้งสองข้างไว้บนพวงมาลัย"
    },
    {
        "id":  "pdf-1881",
        "word":  "Submarine",
        "translation":  "เรือดำน้ำ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˌsʌbməˈriːn/",
        "sentence":  "The submarine dived deep under the water.",
        "sentenceTranslation":  "เรือดำน้ำดำลงไปลึกใต้ผิวน้ำ"
    },
    {
        "id":  "pdf-1882",
        "word":  "SUV",
        "translation":  "รถยนต์อเนกประสงค์ (SUV)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˌes juː ˈviː/",
        "sentence":  "An SUV is perfect for family road trips.",
        "sentenceTranslation":  "รถเอสยูวีเหมาะมากสำหรับการขับรถเที่ยวกับครอบครัว"
    },
    {
        "id":  "pdf-1883",
        "word":  "Taillight",
        "translation":  "ไฟท้ายรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈteɪllaɪt/",
        "sentence":  "One of the taillights on the car is broken.",
        "sentenceTranslation":  "ไฟท้ายรถดวงหนึ่งเสีย"
    },
    {
        "id":  "pdf-1884",
        "word":  "Tanker",
        "translation":  "เรือบรรทุกน้ำมัน / รถบรรทุกน้ำมัน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtæŋkər/",
        "sentence":  "The oil tanker arrived at the port this morning.",
        "sentenceTranslation":  "เรือบรรทุกน้ำมันมาถึงท่าเรือเมื่อเช้านี้"
    },
    {
        "id":  "pdf-1885",
        "word":  "Taxi / Cab",
        "translation":  "รถแท็กซี่",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtæksi/ /kæb/",
        "sentence":  "It is easier to take a taxi to the airport.",
        "sentenceTranslation":  "การนั่งแท็กซี่ไปสนามบินสะดวกกว่า"
    },
    {
        "id":  "pdf-1886",
        "word":  "Tire / Tyre",
        "translation":  "ยางรถยนต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtaɪər/",
        "sentence":  "I need to change the flat tire on my car.",
        "sentenceTranslation":  "ฉันต้องเปลี่ยนยางแบนที่รถของฉัน"
    },
    {
        "id":  "pdf-1887",
        "word":  "Tractor",
        "translation":  "รถแทรกเตอร์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtræktər/",
        "sentence":  "The farmer used his tractor to plow the field.",
        "sentenceTranslation":  "เกษตรกรใช้รถแทรกเตอร์ของเขาเพื่อไถนา"
    },
    {
        "id":  "pdf-1888",
        "word":  "Traffic",
        "translation":  "การจราจร",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtræfɪk/",
        "sentence":  "The traffic is very heavy this morning.",
        "sentenceTranslation":  "การจราจรติดขัดมากในเช้านี้"
    },
    {
        "id":  "pdf-1889",
        "word":  "Train",
        "translation":  "รถไฟ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/treɪn/",
        "sentence":  "I take the train to work every day.",
        "sentenceTranslation":  "ฉันนั่งรถไฟไปทำงานทุกวัน"
    },
    {
        "id":  "pdf-1890",
        "word":  "Tram / Streetcar",
        "translation":  "รถราง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/træm/",
        "sentence":  "We rode the tram through the city center.",
        "sentenceTranslation":  "พวกเรานั่งรถรางผ่านใจกลางเมือง"
    },
    {
        "id":  "pdf-1891",
        "word":  "Transmission",
        "translation":  "ระบบเกียร์ / ระบบส่งกำลัง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/trænsˈmɪʃən/",
        "sentence":  "The car needs a repair for its transmission.",
        "sentenceTranslation":  "รถคันนี้จำเป็นต้องซ่อมระบบเกียร์"
    },
    {
        "id":  "pdf-1892",
        "word":  "Truck",
        "translation":  "รถบรรทุกขนาดใหญ่",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/trʌk/",
        "sentence":  "The delivery truck is parked outside.",
        "sentenceTranslation":  "รถบรรทุกขนส่งจอดอยู่ข้างนอก"
    },
    {
        "id":  "pdf-1893",
        "word":  "Trunk / Boot",
        "translation":  "ที่เก็บสัมภาระท้ายรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/trʌŋk/",
        "sentence":  "Please put your bags in the trunk.",
        "sentenceTranslation":  "กรุณาเก็บกระเป๋าของคุณไว้ในกระโปรงหลังรถ"
    },
    {
        "id":  "pdf-1894",
        "word":  "Tugboat",
        "translation":  "เรือลากจูง",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈtʌɡboʊt/",
        "sentence":  "The tugboat helped guide the large ship into the harbor.",
        "sentenceTranslation":  "เรือลากจูงช่วยนำทางเรือลำใหญ่เข้าสู่ท่าเรือ"
    },
    {
        "id":  "pdf-1895",
        "word":  "Van",
        "translation":  "รถตู้",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/væn/",
        "sentence":  "They moved all their furniture using a large van.",
        "sentenceTranslation":  "พวกเขาย้ายเฟอร์นิเจอร์ทั้งหมดโดยใช้รถตู้คันใหญ่"
    },
    {
        "id":  "pdf-1896",
        "word":  "Vehicle",
        "translation":  "ยานพาหนะ (คำรวม)",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈviːəkl/",
        "sentence":  "You must register your vehicle every year.",
        "sentenceTranslation":  "คุณต้องต่อทะเบียนรถของคุณทุกปี"
    },
    {
        "id":  "pdf-1897",
        "word":  "Wheel",
        "translation":  "ล้อรถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/wiːl/",
        "sentence":  "The front wheel of my bicycle is flat.",
        "sentenceTranslation":  "ล้อหน้าจักรยานของฉันแบน"
    },
    {
        "id":  "pdf-1898",
        "word":  "Windshield / Windscreenกระจกบังลมหน",
        "translation":  "้ารถ",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "",
        "sentence":  "",
        "sentenceTranslation":  ""
    },
    {
        "id":  "pdf-1899",
        "word":  "Wiper",
        "translation":  "ที่ปัดน้ำฝน",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/ˈwaɪpər/",
        "sentence":  "I turned on the wiper because it started to rain.",
        "sentenceTranslation":  "ฉันเปิดที่ปัดน้ำฝนเพราะฝนเริ่มตก"
    },
    {
        "id":  "pdf-1900",
        "word":  "Yacht",
        "translation":  "เรือยอชต์",
        "category":  "Vehicles \u0026 Transport",
        "ipa":  "/jɒt/",
        "sentence":  "They sailed their yacht across the ocean.",
        "sentenceTranslation":  "พวกเขาล่องเรือยอชต์ข้ามมหาสมุทร"
    },
    {
        "id":  "pdf-1901",
        "word":  "Accessories",
        "translation":  "เครื่องประดับ / อุปกรณ์ตกแต่ง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/əkˈsɛsəriz/",
        "sentence":  "The shop sells various car accessories.",
        "sentenceTranslation":  "ร้านนี้ขายอุปกรณ์เสริมสำหรับรถยนต์หลากหลายชนิด"
    },
    {
        "id":  "pdf-1902",
        "word":  "Apron",
        "translation":  "ผ้ากันเปื้อน",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈeɪ.prən/",
        "sentence":  "She wore an apron while cooking dinner.",
        "sentenceTranslation":  "เธอสวมผ้ากันเปื้อนขณะทำอาหารมื้อเย็น"
    },
    {
        "id":  "pdf-1903",
        "word":  "Backpack",
        "translation":  "กระเป๋าเป้สะพายหลัง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈbæk.pæk/",
        "sentence":  "He carries his books in a backpack.",
        "sentenceTranslation":  "เขาใส่หนังสือไว้ในกระเป๋าเป้"
    },
    {
        "id":  "pdf-1904",
        "word":  "Badge",
        "translation":  "เข็มกลัด / ตราสัญลักษณ์",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/bædʒ/",
        "sentence":  "The police officer showed his badge.",
        "sentenceTranslation":  "เจ้าหน้าที่ตำรวจแสดงตราประจำตัวของเขา"
    },
    {
        "id":  "pdf-1905",
        "word":  "Bathrobe",
        "translation":  "ชุดคลุมอาบน้ำ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈbæθ.roʊb/",
        "sentence":  "I put on a warm bathrobe after my shower.",
        "sentenceTranslation":  "ฉันสวมเสื้อคลุมอาบน้ำอุ่นๆ หลังจากอาบน้ำเสร็จ"
    },
    {
        "id":  "pdf-1906",
        "word":  "Belt",
        "translation":  "เข็มขัด",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/belt/",
        "sentence":  "His belt is too loose.",
        "sentenceTranslation":  "เข็มขัดของเขาหลวมเกินไป"
    },
    {
        "id":  "pdf-1907",
        "word":  "Beret",
        "translation":  "หมวกเบเร่ต์",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈber.eɪ/",
        "sentence":  "She looks stylish in her red beret.",
        "sentenceTranslation":  "เธอดูมีสไตล์เมื่อสวมหมวกเบเร่ต์สีแดง"
    },
    {
        "id":  "pdf-1908",
        "word":  "Blazer",
        "translation":  "เสื้อสูทแบบลำลอง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈbleɪ.zər/",
        "sentence":  "He wore a navy blue blazer to the interview.",
        "sentenceTranslation":  "เขาสวมเสื้อเบลเซอร์สีน้ำเงินกรมท่าไปสัมภาษณ์งาน"
    },
    {
        "id":  "pdf-1909",
        "word":  "Blouse",
        "translation":  "เสื้อสตรี (มักเป็นผ้านิ่มมีระบาย)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/blaʊz/",
        "sentence":  "She bought a new silk blouse.",
        "sentenceTranslation":  "เธอซื้อเสื้อเชิ้ตสตรีตัวใหม่ทำจากผ้าไหม"
    },
    {
        "id":  "pdf-1910",
        "word":  "Boots",
        "translation":  "รองเท้าบูท",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/buːts/",
        "sentence":  "These leather boots are very comfortable.",
        "sentenceTranslation":  "รองเท้าบูทหนังคู่นี้ใส่สบายมาก"
    },
    {
        "id":  "pdf-1911",
        "word":  "Bow tie",
        "translation":  "หูกระต่าย (โบว์ผูกคอเสื้อ)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈboʊ ˌtaɪ/",
        "sentence":  "He wore a black bow tie with his tuxedo.",
        "sentenceTranslation":  "เขาผูกหูกระต่ายสีดำคู่กับชุดทักซิโด"
    },
    {
        "id":  "pdf-1912",
        "word":  "Bracelet",
        "translation":  "สร้อยข้อมือ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈbreɪ.slət/",
        "sentence":  "She wears a gold bracelet on her wrist.",
        "sentenceTranslation":  "เธอสวมสร้อยข้อมือทองคำไว้ที่ข้อมือ"
    },
    {
        "id":  "pdf-1913",
        "word":  "Bra",
        "translation":  "เสื้อชั้นในสตรี",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/brɑː/",
        "sentence":  "She went to the shop to buy a new bra.",
        "sentenceTranslation":  "เธอไปที่ร้านเพื่อซื้อชุดชั้นในตัวใหม่"
    },
    {
        "id":  "pdf-1914",
        "word":  "Brooch",
        "translation":  "เข็มกลัดประดับเพชรหรือพลอย",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/broʊtʃ/",
        "sentence":  "She pinned a beautiful brooch to her jacket.",
        "sentenceTranslation":  "เธอติดเข็มกลัดสวยๆ ไว้ที่เสื้อแจ็คเก็ตของเธอ"
    },
    {
        "id":  "pdf-1915",
        "word":  "Cap",
        "translation":  "หมวกแก๊ป / หมวกมีปีกด้านหน้า",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/kæp/",
        "sentence":  "He wore a baseball cap to keep the sun out of his eyes.",
        "sentenceTranslation":  "เขาสวมหมวกแก๊ปเพื่อกันแดดเข้าตา"
    },
    {
        "id":  "pdf-1916",
        "word":  "Cardigan",
        "translation":  "เสื้อไหมพรมถักผ่าหน้า (มีกระดุม)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈkɑːr.dɪ.ɡən/",
        "sentence":  "It is cold, so I will wear a cardigan.",
        "sentenceTranslation":  "อากาศหนาว ฉันเลยจะสวมเสื้อคาร์ดิแกน"
    },
    {
        "id":  "pdf-1917",
        "word":  "Casual wear",
        "translation":  "เสื้อผ้าชุดลำลอง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈkæʒuəl wɛər/",
        "sentence":  "He prefers wearing casual wear on weekends.",
        "sentenceTranslation":  "เขาชอบสวมใส่ชุดลำลองในช่วงวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1918",
        "word":  "Clothes / Clothing",
        "translation":  "เสื้อผ้า / เครื่องนุ่งห่ม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/kloʊðz/ /kloʊðɪŋ/",
        "sentence":  "She bought some new clothes for the trip.",
        "sentenceTranslation":  "เธอซื้อเสื้อผ้าใหม่สำหรับทริปนี้"
    },
    {
        "id":  "pdf-1919",
        "word":  "Coat",
        "translation":  "เสื้อโค้ทตัวยาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/koʊt/",
        "sentence":  "It is cold outside, so please put on your coat.",
        "sentenceTranslation":  "ข้างนอกอากาศหนาว โปรดสวมเสื้อโค้ทของคุณด้วย"
    },
    {
        "id":  "pdf-1920",
        "word":  "Collar",
        "translation":  "ปกคอเสื้อ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈkɒlər/",
        "sentence":  "The collar of his shirt was starched stiffly.",
        "sentenceTranslation":  "ปกเสื้อของเขาถูกอัดแป้งจนแข็ง"
    },
    {
        "id":  "pdf-1921",
        "word":  "Cufflinks",
        "translation":  "กระดุมข้อมือเสื้อเชิ้ต",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈkʌflɪŋks/",
        "sentence":  "He wore elegant gold cufflinks with his tuxedo.",
        "sentenceTranslation":  "เขาสวมกระดุมข้อมือทองคำที่ดูหรูหราคู่กับชุดทักซิโด้"
    },
    {
        "id":  "pdf-1922",
        "word":  "Denim",
        "translation":  "ผ้าเดนิม / ผ้ายีนส์",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdɛnɪm/",
        "sentence":  "Denim jeans are very popular all over the world.",
        "sentenceTranslation":  "กางเกงยีนส์ผ้าเดนิมได้รับความนิยมมากไปทั่วโลก"
    },
    {
        "id":  "pdf-1923",
        "word":  "Dress",
        "translation":  "ชุดกระโปรงสตรีชุดยาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/drɛs/",
        "sentence":  "She wore a beautiful blue dress to the party.",
        "sentenceTranslation":  "เธอสวมชุดเดรสสีน้ำเงินสวยไปงานปาร์ตี้"
    },
    {
        "id":  "pdf-1924",
        "word":  "Dressing gown",
        "translation":  "ชุดคลุมยาว (ใส่ในบ้านหลังตื่นนอน)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdrɛsɪŋ ɡaʊn/",
        "sentence":  "He put on his dressing gown after taking a shower.",
        "sentenceTranslation":  "เขาสวมเสื้อคลุมอาบน้ำหลังจากอาบน้ำเสร็จ"
    },
    {
        "id":  "pdf-1925",
        "word":  "Earrings",
        "translation":  "ต่างหู",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈɪərɪŋz/",
        "sentence":  "Those silver earrings look lovely on you.",
        "sentenceTranslation":  "ต่างหูเงินคู่นั้นดูสวยเหมาะกับคุณมาก"
    },
    {
        "id":  "pdf-1926",
        "word":  "Fabric",
        "translation":  "ผืนผ้า / สิ่งทอ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈfæbrɪk/",
        "sentence":  "This fabric feels very soft against the skin.",
        "sentenceTranslation":  "ผ้าชนิดนี้ให้ความรู้สึกนุ่มมากเมื่อสัมผัสผิว"
    },
    {
        "id":  "pdf-1927",
        "word":  "Fashion",
        "translation":  "แฟชั่น",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈfæʃən/",
        "sentence":  "She keeps up with the latest fashion trends.",
        "sentenceTranslation":  "เธอคอยติดตามเทรนด์แฟชั่นล่าสุดอยู่เสมอ"
    },
    {
        "id":  "pdf-1928",
        "word":  "Flip-flops",
        "translation":  "รองเท้าแตะหูหนีบ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈflɪp.flɒps/",
        "sentence":  "It is comfortable to wear flip-flops at the beach.",
        "sentenceTranslation":  "การสวมรองเท้าแตะที่ชายหาดนั้นรู้สึกสบายมาก"
    },
    {
        "id":  "pdf-1929",
        "word":  "Formal wear",
        "translation":  "ชุดแต่งกายเป็นทางการ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈfɔːrməl wɛər/",
        "sentence":  "The invitation stated that formal wear is required.",
        "sentenceTranslation":  "ในบัตรเชิญระบุว่าจำเป็นต้องแต่งกายด้วยชุดทางการ"
    },
    {
        "id":  "pdf-1930",
        "word":  "Garment",
        "translation":  "เสื้อผ้า / เครื่องแต่งกาย",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈɡɑːrmənt/",
        "sentence":  "The garment was made of high-quality silk.",
        "sentenceTranslation":  "เสื้อผ้านี้ตัดเย็บมาจากผ้าไหมคุณภาพสูง"
    },
    {
        "id":  "pdf-1931",
        "word":  "Glasses / Eyeglasses",
        "translation":  "แว่นตา",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈɡlæsɪz/ /ˈaɪˌɡlæsɪz/",
        "sentence":  "I need to wear glasses to read small print.",
        "sentenceTranslation":  "ฉันจำเป็นต้องสวมแว่นตาเพื่ออ่านตัวหนังสือขนาดเล็ก"
    },
    {
        "id":  "pdf-1932",
        "word":  "Gloves",
        "translation":  "ถุงมือ (แบบแยกนิ้ว)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ɡlʌvz/",
        "sentence":  "She wore gloves to keep her hands warm.",
        "sentenceTranslation":  "เธอสวมถุงมือเพื่อรักษาความอบอุ่นให้มือของเธอ"
    },
    {
        "id":  "pdf-1933",
        "word":  "Gown",
        "translation":  "ชุดราตรียาว / ชุดครุย",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ɡaʊn/",
        "sentence":  "She wore a beautiful evening gown to the party.",
        "sentenceTranslation":  "เธอสวมชุดราตรียาวแสนสวยไปงานเลี้ยง"
    },
    {
        "id":  "pdf-1934",
        "word":  "Handbag",
        "translation":  "กระเป๋าถือสตรี",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈhænd.bæɡ/",
        "sentence":  "She put her wallet inside her handbag.",
        "sentenceTranslation":  "เธอใส่กระเป๋าสตางค์ไว้ในกระเป๋าถือของเธอ"
    },
    {
        "id":  "pdf-1935",
        "word":  "Handkerchief",
        "translation":  "ผ้าเช็ดหน้า",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈhæŋ.kə.tʃɪf/",
        "sentence":  "He used a handkerchief to wipe his nose.",
        "sentenceTranslation":  "เขาใช้ผ้าเช็ดหน้าเช็ดจมูกของเขา"
    },
    {
        "id":  "pdf-1936",
        "word":  "Hat",
        "translation":  "หมวก (แบบมีปีกรอบขอบ)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/hæt/",
        "sentence":  "He wore a hat to protect himself from the sun.",
        "sentenceTranslation":  "เขาสวมหมวกเพื่อป้องกันตัวเองจากแสงแดด"
    },
    {
        "id":  "pdf-1937",
        "word":  "High heels",
        "translation":  "รองเท้าส้นสูง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˌhaɪ ˈhiːlz/",
        "sentence":  "It is difficult to walk in high heels.",
        "sentenceTranslation":  "มันเป็นเรื่องยากที่จะเดินบนรองเท้าส้นสูง"
    },
    {
        "id":  "pdf-1938",
        "word":  "Hoodie",
        "translation":  "เสื้อกันหนาวแบบมีหมวกคลุม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈhʊd.i/",
        "sentence":  "I like wearing a comfortable hoodie on weekends.",
        "sentenceTranslation":  "ฉันชอบสวมเสื้อฮู้ดที่ใส่สบายในวันหยุดสุดสัปดาห์"
    },
    {
        "id":  "pdf-1939",
        "word":  "Jacket",
        "translation":  "เสื้อแจ็กเก็ตตัวสั้น",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdʒæk.ɪt/",
        "sentence":  "Please put on your jacket, it\u0027s cold outside.",
        "sentenceTranslation":  "กรุณาสวมเสื้อแจ็กเก็ตของคุณ ข้างนอกอากาศหนาว"
    },
    {
        "id":  "pdf-1940",
        "word":  "Jeans",
        "translation":  "กางเกงยีนส์",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/dʒiːnz/",
        "sentence":  "These jeans are very comfortable.",
        "sentenceTranslation":  "กางเกงยีนส์ตัวนี้ใส่สบายมาก"
    },
    {
        "id":  "pdf-1941",
        "word":  "Jewelry / Jewellery",
        "translation":  "เครื่องเพชรพลอย / อัญมณี",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdʒuːəlri/",
        "sentence":  "She loves wearing expensive jewelry.",
        "sentenceTranslation":  "เธอชอบสวมใส่เครื่องประดับราคาแพง"
    },
    {
        "id":  "pdf-1942",
        "word":  "Jumper / Sweater",
        "translation":  "เสื้อแขนยาวไหมพรม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdʒʌmpə/ /ˈswetə/",
        "sentence":  "It is cold outside, so put on your jumper.",
        "sentenceTranslation":  "ข้างนอกอากาศหนาว ให้สวมเสื้อกันหนาวของคุณซะ"
    },
    {
        "id":  "pdf-1943",
        "word":  "Jumpsuit",
        "translation":  "ชุดเสื้อกางเกงติดกัน (ชุดหมีสตรี)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈdʒʌmp.suːt/",
        "sentence":  "She looks stylish in her new jumpsuit.",
        "sentenceTranslation":  "เธอดูมีสไตล์ในชุดจัมพ์สูทตัวใหม่ของเธอ"
    },
    {
        "id":  "pdf-1944",
        "word":  "Leather",
        "translation":  "หนังแท้ / ผลิตภัณฑ์ทำจากหนัง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈleð.ər/",
        "sentence":  "He bought a high-quality leather belt.",
        "sentenceTranslation":  "เขาซื้อเข็มขัดหนังคุณภาพสูง"
    },
    {
        "id":  "pdf-1945",
        "word":  "Leggings",
        "translation":  "กางเกงรัดรูป / กางเกงเลกกิ้ง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈleɡ.ɪŋz/",
        "sentence":  "Leggings are perfect for doing yoga.",
        "sentenceTranslation":  "กางเกงเลกกิ้งเหมาะอย่างยิ่งสำหรับการเล่นโยคะ"
    },
    {
        "id":  "pdf-1946",
        "word":  "Lingerie",
        "translation":  "ชุดชั้นในสตรีแบบแฟชั่นสวยงาม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈlæn.ʒər.i/",
        "sentence":  "She shopped for some new lingerie.",
        "sentenceTranslation":  "เธอไปเลือกซื้อชุดชั้นในตัวใหม่"
    },
    {
        "id":  "pdf-1947",
        "word":  "Loafers",
        "translation":  "รองเท้าคัทชูส้นแบนแบบสวมง่าย",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈloʊfərz/",
        "sentence":  "He wore brown leather loafers to the party.",
        "sentenceTranslation":  "เขาสวมรองเท้าโลฟเฟอร์หนังสีน้ำตาลไปงานปาร์ตี้"
    },
    {
        "id":  "pdf-1948",
        "word":  "Mittens",
        "translation":  "ถุงมือแบบไม่มีแยกนิ้ว (แยกเฉพาะนิ้วโป้ง)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈmɪtənz/",
        "sentence":  "She wore warm wool mittens during the winter.",
        "sentenceTranslation":  "เธอสวมถุงมือแบบนิ้วเดียวทำจากขนสัตว์ในช่วงฤดูหนาว"
    },
    {
        "id":  "pdf-1949",
        "word":  "Necklace",
        "translation":  "สร้อยคอ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈnɛklɪs/",
        "sentence":  "She bought a beautiful gold necklace.",
        "sentenceTranslation":  "เธอซื้อสร้อยคอทองคำที่สวยงาม"
    },
    {
        "id":  "pdf-1950",
        "word":  "Necktie / Tie",
        "translation":  "เนคไท",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈnɛktaɪ/",
        "sentence":  "He always wears a necktie to the office.",
        "sentenceTranslation":  "เขาสวมเน็คไทไปทำงานที่ออฟฟิศเสมอ"
    },
    {
        "id":  "pdf-1951",
        "word":  "Nightdress / Nightgown",
        "translation":  "ชุดนอนกระโปรง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈnaɪtdrɛs/",
        "sentence":  "She put on her silk nightdress before going to bed.",
        "sentenceTranslation":  "เธอสวมชุดนอนกระโปรงผ้าไหมก่อนเข้านอน"
    },
    {
        "id":  "pdf-1952",
        "word":  "Outfit",
        "translation":  "ชุดเสื้อผ้าที่แต่งกายครบเซต",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈaʊtfɪt/",
        "sentence":  "That is a very stylish outfit.",
        "sentenceTranslation":  "นั่นเป็นชุดที่ดูดีและมีสไตล์มาก"
    },
    {
        "id":  "pdf-1953",
        "word":  "Overalls",
        "translation":  "กางเกงเอี๊ยมมีสายพาดไหล่",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈoʊvərɔːlz/",
        "sentence":  "The farmer wore denim overalls to work in the field.",
        "sentenceTranslation":  "ชาวนาสวมชุดเอี๊ยมยีนส์เพื่อทำงานในไร่"
    },
    {
        "id":  "pdf-1954",
        "word":  "Overcoat",
        "translation":  "เสื้อโค้ทตัวใหญ่หนาพิเศษ (ใส่ทับชุด)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈoʊvərkoʊt/",
        "sentence":  "He put on his heavy overcoat because it was freezing outside.",
        "sentenceTranslation":  "เขาสวมเสื้อโค้ทตัวหนาเพราะข้างนอกหนาวจัด"
    },
    {
        "id":  "pdf-1955",
        "word":  "Pajamas / Pyjamas",
        "translation":  "ชุดนอน (เสื้อกางเกงเข้าชุด)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/pəˈdʒɑːməz/",
        "sentence":  "I changed into my pajamas after dinner.",
        "sentenceTranslation":  "ฉันเปลี่ยนเป็นชุดนอนหลังจากทานมื้อเย็นเสร็จ"
    },
    {
        "id":  "pdf-1956",
        "word":  "Panties / Underwear",
        "translation":  "กางเกงในสตรี",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈpæntiz/",
        "sentence":  "She went to the store to buy new underwear.",
        "sentenceTranslation":  "เธอไปที่ร้านเพื่อซื้อชุดชั้นในใหม่"
    },
    {
        "id":  "pdf-1957",
        "word":  "Pants / Trousers",
        "translation":  "กางเกงขายาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/pænts/",
        "sentence":  "These pants are too long for me.",
        "sentenceTranslation":  "กางเกงตัวนี้ยาวเกินไปสำหรับฉัน"
    },
    {
        "id":  "pdf-1958",
        "word":  "Pocket",
        "translation":  "กระเป๋าเสื้อ / กระเป๋ากางเกง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈpɒkɪt/",
        "sentence":  "I found a coin in my pocket.",
        "sentenceTranslation":  "ฉันเจอเหรียญในกระเป๋ากางเกงของฉัน"
    },
    {
        "id":  "pdf-1959",
        "word":  "Polo shirt",
        "translation":  "เสื้อโปโล / เสื้อยืดมีปกคอและกระดุม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈpoʊloʊ ʃɜːrt/",
        "sentence":  "He looks great in his blue polo shirt.",
        "sentenceTranslation":  "เขาดูดีมากในชุดเสื้อโปโลสีน้ำเงิน"
    },
    {
        "id":  "pdf-1960",
        "word":  "Purse",
        "translation":  "กระเป๋าเงินสตรีใบเล็ก",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/pɜːrs/",
        "sentence":  "She kept her lipstick inside her purse.",
        "sentenceTranslation":  "เธอเก็บลิปสติกไว้ในกระเป๋าถือของเธอ"
    },
    {
        "id":  "pdf-1961",
        "word":  "Raincoat",
        "translation":  "เสื้อกันฝน",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈreɪnkoʊt/",
        "sentence":  "Don\u0027t forget your raincoat, it is starting to rain.",
        "sentenceTranslation":  "อย่าลืมเสื้อกันฝนนะ ฝนกำลังจะตกแล้ว"
    },
    {
        "id":  "pdf-1962",
        "word":  "Ring",
        "translation":  "แหวน",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/rɪŋ/",
        "sentence":  "She wears a gold ring on her finger.",
        "sentenceTranslation":  "เธอสวมแหวนทองที่นิ้วของเธอ"
    },
    {
        "id":  "pdf-1963",
        "word":  "Robe",
        "translation":  "เสื้อคลุมตัวยาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/roʊb/",
        "sentence":  "He put on his bathrobe after the shower.",
        "sentenceTranslation":  "เขาสวมชุดคลุมอาบน้ำหลังจากอาบน้ำเสร็จ"
    },
    {
        "id":  "pdf-1964",
        "word":  "Sandals",
        "translation":  "รองเท้าแตะแบบรัดส้น",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈsændlz/",
        "sentence":  "I like wearing sandals at the beach.",
        "sentenceTranslation":  "ฉันชอบใส่รองเท้าแตะไปที่ชายหาด"
    },
    {
        "id":  "pdf-1965",
        "word":  "Scarf",
        "translation":  "ผ้าพันคอ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/skɑːrf/",
        "sentence":  "She wrapped a warm scarf around her neck.",
        "sentenceTranslation":  "เธอพันผ้าพันคออุ่นๆ ไว้รอบคอของเธอ"
    },
    {
        "id":  "pdf-1966",
        "word":  "Shawl",
        "translation":  "ผ้าคลุมไหล่",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ʃɔːl/",
        "sentence":  "She draped a lace shawl over her shoulders.",
        "sentenceTranslation":  "เธอคลุมไหล่ด้วยผ้าคลุมไหล่ลูกไม้"
    },
    {
        "id":  "pdf-1967",
        "word":  "Shorts",
        "translation":  "กางเกงขาสั้น",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ʃɔːrts/",
        "sentence":  "It is very hot today, so I am wearing shorts.",
        "sentenceTranslation":  "วันนี้อากาศร้อนมาก ฉันเลยใส่กางเกงขาสั้น"
    },
    {
        "id":  "pdf-1968",
        "word":  "Silk",
        "translation":  "ผ้าไหม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/sɪlk/",
        "sentence":  "This dress is made of pure silk.",
        "sentenceTranslation":  "ชุดนี้ทำจากผ้าไหมแท้"
    },
    {
        "id":  "pdf-1969",
        "word":  "Size",
        "translation":  "ขนาดเสื้อผ้า",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/saɪz/",
        "sentence":  "Do you have this shirt in a larger size?",
        "sentenceTranslation":  "คุณมีเสื้อเชิ้ตตัวนี้ในขนาดที่ใหญ่กว่านี้ไหม"
    },
    {
        "id":  "pdf-1970",
        "word":  "Skirt",
        "translation":  "กระโปรง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/skɜːrt/",
        "sentence":  "She is wearing a blue skirt today.",
        "sentenceTranslation":  "วันนี้เธอใส่กระโปรงสีน้ำเงิน"
    },
    {
        "id":  "pdf-1971",
        "word":  "Slacks",
        "translation":  "กางเกงขายาวลำลอง (ผ้ายืดหยุ่น)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/slæks/",
        "sentence":  "He wore formal slacks to the meeting.",
        "sentenceTranslation":  "เขาสวมกางเกงสแล็คแบบเป็นทางการไปประชุม"
    },
    {
        "id":  "pdf-1972",
        "word":  "Sleeve",
        "translation":  "แขนเสื้อ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/sliːv/",
        "sentence":  "The long sleeve of the shirt got dirty.",
        "sentenceTranslation":  "แขนเสื้อยาวของเสื้อเชิ้ตเลอะเทอะ"
    },
    {
        "id":  "pdf-1973",
        "word":  "Slippers",
        "translation":  "รองเท้าใส่เดินในบ้าน",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈslɪpərz/",
        "sentence":  "I always wear my slippers at home.",
        "sentenceTranslation":  "ฉันใส่รองเท้าใส่ในบ้านตลอดเวลา"
    },
    {
        "id":  "pdf-1974",
        "word":  "Sneakers / Trainers",
        "translation":  "รองเท้าผ้าใบ / รองเท้ากีฬา",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈsniːkərz / ˈtreɪnərz/",
        "sentence":  "I need new sneakers for running.",
        "sentenceTranslation":  "ฉันต้องการรองเท้าผ้าใบใหม่สำหรับการวิ่ง"
    },
    {
        "id":  "pdf-1975",
        "word":  "Socks",
        "translation":  "ถุงเท้า",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/sɒks/",
        "sentence":  "Don\u0027t forget to put on your socks.",
        "sentenceTranslation":  "อย่าลืมใส่ถุงเท้าของคุณนะ"
    },
    {
        "id":  "pdf-1976",
        "word":  "Sportswear",
        "translation":  "ชุดกีฬา",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈspɔːrtswer/",
        "sentence":  "She works in a shop that sells sportswear.",
        "sentenceTranslation":  "เธอทำงานในร้านที่ขายชุดกีฬา"
    },
    {
        "id":  "pdf-1977",
        "word":  "Stockings / Tights",
        "translation":  "ถุงน่องยาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈstɒkɪŋz / taɪts/",
        "sentence":  "She wore black tights under her skirt.",
        "sentenceTranslation":  "เธอสวมถุงน่องสีดำไว้ใต้กระโปรงของเธอ"
    },
    {
        "id":  "pdf-1978",
        "word":  "Suit",
        "translation":  "ชุดสูทสากล (เสื้อและกางเกงเข้าชุด)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/suːt/",
        "sentence":  "He looks very professional in his business suit.",
        "sentenceTranslation":  "เขาดูเป็นมืออาชีพมากในชุดสูทธุรกิจของเขา"
    },
    {
        "id":  "pdf-1979",
        "word":  "Sunglasses",
        "translation":  "แว่นตากันแดด",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈsʌnˌɡlæsɪz/",
        "sentence":  "I always wear sunglasses when it is sunny outside.",
        "sentenceTranslation":  "ฉันสวมแว่นกันแดดเสมอเวลาข้างนอกแดดจ้า"
    },
    {
        "id":  "pdf-1980",
        "word":  "Suspender",
        "translation":  "สายเอี๊ยมรั้งกางเกง",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/səˈspendər/",
        "sentence":  "He uses a pair of suspenders to hold up his trousers.",
        "sentenceTranslation":  "เขาใช้สายเอี๊ยมช่วยพยุงกางเกงของเขาไว้"
    },
    {
        "id":  "pdf-1981",
        "word":  "Sweatpants",
        "translation":  "กางเกงวอร์มขายาว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈswetˌpænts/",
        "sentence":  "I prefer wearing comfortable sweatpants at home.",
        "sentenceTranslation":  "ฉันชอบสวมกางเกงวอร์มใส่สบายๆ อยู่ที่บ้าน"
    },
    {
        "id":  "pdf-1982",
        "word":  "Sweatshirt",
        "translation":  "เสื้อแขนยาวผ้านุ่ม (ไม่มีหมวก)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈswetˌʃɜːrt/",
        "sentence":  "It was cold, so she put on a warm sweatshirt.",
        "sentenceTranslation":  "อากาศหนาวเย็น เธอจึงสวมเสื้อสเวตเชิ้ตอุ่นๆ"
    },
    {
        "id":  "pdf-1983",
        "word":  "Swimwear / Swimsuit",
        "translation":  "ชุดว่ายน้ำ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈswɪmwer / ˈswɪmsuːt/",
        "sentence":  "Don\u0027t forget to pack your swimsuit for the beach trip.",
        "sentenceTranslation":  "อย่าลืมเก็บชุดว่ายน้ำไปทริปเที่ยวทะเลด้วยนะ"
    },
    {
        "id":  "pdf-1984",
        "word":  "T-shirt",
        "translation":  "เสื้อยืดคอกลมคอวี",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈtiːˌʃɜːrt/",
        "sentence":  "He bought a simple white T-shirt.",
        "sentenceTranslation":  "เขาซื้อเสื้อยืดสีขาวเรียบๆ มาตัวหนึ่ง"
    },
    {
        "id":  "pdf-1985",
        "word":  "Tailor",
        "translation":  "ช่างตัดเสื้อ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈteɪlər/",
        "sentence":  "The tailor measured him for a custom-made jacket.",
        "sentenceTranslation":  "ช่างตัดเสื้อวัดตัวเขาเพื่อตัดเสื้อแจ็คเก็ตสั่งทำพิเศษ"
    },
    {
        "id":  "pdf-1986",
        "word":  "Tank top",
        "translation":  "เสื้อกล้าม / เสื้อสายเดี่ยว",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈtæŋk ˌtɒp/",
        "sentence":  "It is very hot, so I will wear a tank top.",
        "sentenceTranslation":  "อากาศร้อนมาก ฉันจะใส่เสื้อกล้าม"
    },
    {
        "id":  "pdf-1987",
        "word":  "Textile",
        "translation":  "สิ่งทอ / วัสดุผ้า",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈtekstail/",
        "sentence":  "The factory produces high-quality textile materials.",
        "sentenceTranslation":  "โรงงานนี้ผลิตวัสดุสิ่งทอคุณภาพสูง"
    },
    {
        "id":  "pdf-1988",
        "word":  "Thread",
        "translation":  "ด้าย / เส้นด้าย",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/θred/",
        "sentence":  "I need a needle and thread to fix my button.",
        "sentenceTranslation":  "ฉันต้องการเข็มและด้ายเพื่อซ่อมกระดุมของฉัน"
    },
    {
        "id":  "pdf-1989",
        "word":  "Tracksuit",
        "translation":  "ชุดวอร์ม (เสื้อและกางเกง)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈtrækˌsuːt/",
        "sentence":  "Athletes often wear a tracksuit before the competition.",
        "sentenceTranslation":  "นักกีฬามักจะสวมชุดวอร์มก่อนเริ่มการแข่งขัน"
    },
    {
        "id":  "pdf-1990",
        "word":  "Tunic",
        "translation":  "เสื้อตัวยาวคลุมสะโพก",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈtuːnɪk/",
        "sentence":  "She wore a loose linen tunic over her jeans.",
        "sentenceTranslation":  "เธอสวมเสื้อทูนิคผ้าลินินทรงหลวมทับกางเกงยีนส์ของเธอ"
    },
    {
        "id":  "pdf-1991",
        "word":  "Tuxedo",
        "translation":  "ชุดทักซิโด้ (ชุดราตรีสโมสรสำหรับผู้ชาย)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/tʌkˈsiːdəʊ/",
        "sentence":  "He wore a black tuxedo to the formal gala.",
        "sentenceTranslation":  "เขาสวมชุดทักซิโด้สีดำไปงานเลี้ยงกาล่าที่เป็นทางการ"
    },
    {
        "id":  "pdf-1992",
        "word":  "Umbrella",
        "translation":  "ร่ม",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ʌmˈbrɛlə/",
        "sentence":  "Please take an umbrella because it is raining.",
        "sentenceTranslation":  "กรุณาพกร่มไปด้วยเพราะฝนกำลังตก"
    },
    {
        "id":  "pdf-1993",
        "word":  "Underwear",
        "translation":  "ชุดชั้นใน (ชาย-หญิง)",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈʌndərwɛər/",
        "sentence":  "I need to buy some new underwear.",
        "sentenceTranslation":  "ฉันต้องการซื้อชุดชั้นในใหม่"
    },
    {
        "id":  "pdf-1994",
        "word":  "Uniform",
        "translation":  "ชุดเครื่องแบบ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈjuːnɪfɔːrm/",
        "sentence":  "Students must wear their school uniform.",
        "sentenceTranslation":  "นักเรียนต้องสวมเครื่องแบบนักเรียน"
    },
    {
        "id":  "pdf-1995",
        "word":  "Vest / Waistcoat",
        "translation":  "เสื้อกั๊ก",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/vɛst / ˈweɪskəʊt/",
        "sentence":  "He wore a formal waistcoat for the wedding.",
        "sentenceTranslation":  "เขาสวมเสื้อกั๊กที่เป็นทางการสำหรับงานแต่งงาน"
    },
    {
        "id":  "pdf-1996",
        "word":  "Wallet",
        "translation":  "กระเป๋าเงินพกพา",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈwɒlɪt/",
        "sentence":  "I accidentally left my wallet at home.",
        "sentenceTranslation":  "ฉันลืมกระเป๋าสตางค์ไว้ที่บ้านโดยไม่ได้ตั้งใจ"
    },
    {
        "id":  "pdf-1997",
        "word":  "Watch / Wristwatch",
        "translation":  "นาฬิกาข้อมือ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/wɒtʃ / ˈrɪstwɒtʃ/",
        "sentence":  "She received a beautiful wristwatch as a gift.",
        "sentenceTranslation":  "เธอได้รับนาฬิกาข้อมือเรือนสวยเป็นของขวัญ"
    },
    {
        "id":  "pdf-1998",
        "word":  "Wool",
        "translation":  "ผ้าขนสัตว์ / ไหมพรมขนแกะ",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/wʊl/",
        "sentence":  "This sweater is made of pure wool.",
        "sentenceTranslation":  "เสื้อสเวตเตอร์ตัวนี้ทำมาจากขนสัตว์แท้"
    },
    {
        "id":  "pdf-1999",
        "word":  "Woolen",
        "translation":  "ที่ทำจากขนสัตว์",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈwʊlən/",
        "sentence":  "She wore a thick woolen scarf to stay warm.",
        "sentenceTranslation":  "เธอสวมผ้าพันคอทำจากขนสัตว์ผืนหนาเพื่อให้ร่างกายอบอุ่น"
    },
    {
        "id":  "pdf-2000",
        "word":  "Zipper / Zip",
        "translation":  "ซิป",
        "category":  "Clothing \u0026 Accessories",
        "ipa":  "/ˈzɪpər / zɪp/",
        "sentence":  "The zipper on my jacket is broken.",
        "sentenceTranslation":  "ซิปเสื้อแจ็คเก็ตของฉันเสีย"
    }
];