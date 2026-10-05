'use strict';
const english = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n, el.innerHTML]));
const thai = {
  "aiDelivery": "จากคำขอเดียวถึงประตูบ้าน ไม่ต้องกดอะไรต่อ",
  "aiDeliveryLabel": "จัดส่งถึงประตูบ้าน",
  "aiLabel": "ให้ AI ค้นพบร้านคุณ",
  "aiComing": "วิสัยทัศน์ของเรา",
  "aiTitle": "ร้านอาหารของคุณ<br>ให้ AI เป็นคนค้นพบ",
  "aiDesc": "ออเดอร์ถัดไปอาจเริ่มจากบทสนทนา โดยไม่ต้องเปิดแอปมาร์เก็ตเพลส เช่นเดียวกับการถาม AI แทนการค้นหาใน Google ลูกค้าอาจแค่บอกผู้ช่วยส่วนตัวว่าอยากกินอะไร แล้วให้ AI ค้นพบร้านของคุณ เลือกเมนูที่ตรงกับรสนิยมและงบ พร้อมจัดการสั่ง ชำระเงิน และส่งถึงบ้าน",
  "aiExample": "บอกครั้งเดียว อาหารมาถึงบ้าน",
  "aiAskLabel": "ลูกค้าบอกผู้ช่วย AI",
  "aiRequest": "“หามื้อกลางวันที่ฉันน่าจะชอบ งบไม่เกิน ฿200 แล้วส่งมาให้ฉัน”",
  "aiFindLabel": "AI เลือกตามรสนิยมและความต้องการ ไม่ใช่โฆษณา",
  "aiMeal": "Signature Bowl · ฿100",
  "aiMatch": "รสนิยม · งบ · ความต้องการ",
  "aiOrderLabel": "AI สั่งและชำระเงินแทนลูกค้า",
  "aiOrder": "สั่งตรงกับร้าน ให้ AI จัดการชำระเงิน",

  "pausePartners": "หยุดโลโก้",
  "resumePartners": "เลื่อนโลโก้ต่อ",
  "partnersTitle": "พาร์ทเนอร์ของเรา",
  "partnersDesc": "ทั้งพาร์ทเนอร์ที่ร่วมทดลองใช้ และพาร์ทเนอร์ที่ใช้ผลิตภัณฑ์ DotDash รุ่นก่อน",
  "storiesTitle": "ฟังประสบการณ์จากเจ้าของร้าน",
  "storiesDesc": "พบพาร์ทเนอร์และฟังประสบการณ์จริงจากการใช้ระบบรับออเดอร์และเครื่องมือดูแลลูกค้าของ DotDash รุ่นก่อน",
  "storyTopicJingjai": "จริงใจดูได้ว่าใครเป็นลูกค้าใหม่ ใครกลับมา มาครั้งล่าสุดเมื่อไร และสั่งเมนูอะไรบ่อย นำข้อมูลเหล่านี้ไปวางแผนการตลาดได้ตรงกลุ่มขึ้น",
  "storyTopicLonmoh": "ล้นหม้อวัดผลแคมเปญและการกลับมาของลูกค้า เช่น โปรแต้มคูณสองวันจันทร์ พร้อมส่งข้อเสนอเฉพาะกลุ่ม แทนการหว่านโปรโมชันให้ทุกคน",
  "storyTopicBarakat": "บารอกัตเปลี่ยนจากรับออเดอร์ผ่านแชต LINE มาเป็นสแกนสั่งที่โต๊ะ ออเดอร์ส่งตรงเข้าครัว ช่วยรองรับหลายโต๊ะและลดปัญหาออเดอร์ตกหล่น",
  "storyOriginal": "เปิดวิดีโอต้นฉบับ ↗",
  "storiesLanguage": "วิดีโอภาษาไทยพร้อมคำบรรยายเดิม เป็นประสบการณ์จาก DotDash รุ่นก่อน ผลการทดลองรุ่นใหม่จะวัดแยกต่างหาก",
  "storiesCTA": "คุยกันว่าระบบจะช่วยร้านของคุณได้อย่างไร",

  "pilotPricing": "ดูรายละเอียดราคา",
  "pilotPrice": "แพ็กเกจเริ่ม ฿990/เดือน ค่าชำระเงินและค่าจัดส่งคิดแยก",
  "pilotStep3Desc": "ทบทวนออเดอร์ซ้ำและต้นทุนก่อนขยายต่อ",
  "pilotStep3": "ดูว่าใครกลับมาสั่งอีก",
  "pilotStep2Desc": "ชวนลูกค้าประจำที่หน้าร้านและบน LINE",
  "pilotStep2": "แชร์ลิงก์สั่งซื้อของร้าน",
  "pilotStep1Desc": "เริ่มกับลูกค้าที่รู้จักร้านคุณอยู่แล้ว",
  "pilotStep1": "เลือกหนึ่งสาขา",
  "pilotDesc": "ให้ลูกค้าประจำมีลิงก์สั่งตรง ลองดูว่าอะไรทำให้เขากลับมา",
  "pilotTitle": "เริ่มเล็ก ๆ<br>ดูว่าใครกลับมาสั่งซ้ำ",
  "pilotBook": "นัดพูดคุยกับเรา",
  "pilotShort": "เริ่มต้นกันเลย",
  "navPilot": "เริ่มต้นใช้งาน",
  "firstProviders": "ผู้ให้บริการกลุ่มแรก",
  "comingNext": "เร็ว ๆ นี้",
  "deliveryReference": "ภาพอ้างอิงชั่วคราวจาก Owner.com · ภาพจริงจะเปลี่ยนเป็น DotDash",
  "referenceSource": "ดูต้นฉบับ ↗",
  "skip": "ข้ามไปยังเนื้อหา",
  "navPlatform": "แพลตฟอร์ม",
  "navPricing": "ราคา",
  "navLaunch": "รายละเอียดแพ็กเกจ",
  "book": "เริ่มจากหนึ่งสาขา",
  "hero1": "ลูกค้าประจำของคุณ",
  "hero2": "สั่งตรงกับร้าน",
  "hero3": "ได้แล้วหรือยัง?",
  "heroDesc": "ให้ลูกค้าประจำมีช่องทางกลับมาสั่งตรง <strong class=\"hero-hook\">ลดค่า GP บนออเดอร์ซ้ำ</strong> เก็บรายได้จากแต่ละออเดอร์ได้มากขึ้น และสร้างความสัมพันธ์กับลูกค้าภายใต้แบรนด์ของคุณเอง เริ่มจากหนึ่งสาขา",
  "seeHow": "ดูวิธีเริ่มต้นใช้งาน",
  "heroNote": "เริ่มด้วยการนัดคุยเรื่องทดลองใช้ และใช้มาร์เก็ตเพลสเพื่อให้ลูกค้าใหม่รู้จักร้านต่อไป",
  "yourStore": "หน้าร้านของคุณเอง",
  "storeTitle": "อาหารดี ๆ<br>จากร้านใกล้บ้าน",
  "pickup": "รับที่ร้าน",
  "delivery": "จัดส่ง",
  "dineIn": "ทานที่ร้าน",
  "meal": "ชุดอร่อยด้วยกัน",
  "mealNote": "อาหารดี ๆ อร่อยยิ่งขึ้นเมื่อแบ่งกัน",
  "customerTitle": "เป็นลูกค้า ไม่ใช่แค่หนึ่งออเดอร์",
  "regular": "ลูกค้าประจำ · มาแล้ว 8 ครั้ง",
  "member": "สมาชิก",
  "nextVisit": "ให้เหตุผลดี ๆ ที่จะกลับมา",
  "reward": "พร้อมรับรางวัล",
  "illustration": "ภาพตัวอย่างผลิตภัณฑ์ · แบรนด์และข้อมูลสมมติ",
  "band": "มาร์เก็ตเพลสให้คุณเช่าการเข้าถึงลูกค้า<br><strong>DotDash ช่วยให้คุณเป็นเจ้าของความสัมพันธ์</strong>",
  "bandSmall": "สร้างเพื่อธุรกิจใกล้บ้าน",
  "bandSmall2": "เริ่มต้นที่ร้านอาหารของคุณ",
  "platformTitle": "หนึ่งออเดอร์คือยอดขาย<br>ความสัมพันธ์คือธุรกิจที่ยั่งยืน",
  "platformDesc": "ให้ลูกค้าประจำสั่งตรงได้ง่าย รู้ว่าใครกลับมา และทำให้ครั้งต่อไปคุ้มค่าที่จะกลับมาหาคุณ",
  "orderTitle": "ช่องทางของคุณ ตัวตนของคุณ",
  "orderDesc": "รับออเดอร์ผ่านช่องทางของร้าน แอปในชื่อแบรนด์รวมใน Pro หรือเพิ่มเป็นส่วนเสริมใน Entry และ Growth",
  "orderFoot": "รับที่ร้าน · จัดส่ง · ทานที่ร้าน",
  "dataTitle": "รู้จักคนที่อยู่เบื้องหลังทุกออเดอร์",
  "dataDesc": "ทุกแพ็กเกจรวม Basic CRM โปรไฟล์ลูกค้า และการแบ่งกลุ่ม RFM อัตโนมัติ เพิ่ม Advanced CRM ได้ทุกแพ็กเกจเพื่อใช้กลุ่มลูกค้าแบบกำหนดเอง แคมเปญตามเวลา และ AI",
  "dataFoot": "ข้อมูลลูกค้าเป็นของแบรนด์คุณ",
  "repeatTitle": "เปลี่ยนหนึ่งครั้งให้เป็นครั้งต่อไป",
  "repeatDesc": "รวมแต้ม ของรางวัล ระดับสมาชิก และแคมเปญพร้อมกัน 3 แคมเปญ Advanced CRM เพิ่มเป็น 10 แคมเปญ พร้อมบรอดแคสต์ LINE ตามกลุ่ม",
  "repeatFoot": "ระบบสมาชิกพื้นฐานรวมในทุกแพ็กเกจแบบเสียค่าสมาชิก",
  "deliveryTitle": "อาหารจากร้านคุณ<br>ส่งถึงหน้าบ้านลูกค้า",
  "deliveryDesc": "เข้าถึงลูกค้าได้ไกลกว่าหน้าร้าน ให้ออเดอร์และความสัมพันธ์กับลูกค้าอยู่กับร้าน พร้อมผู้ให้บริการในพื้นที่ที่คุ้นเคยดูแลการจัดส่ง",
  "loyaltyProgram": "สิทธิพิเศษ",
  "loyaltyTitle": "คำขอบคุณเล็ก ๆ<br>เหตุผลดี ๆ ที่จะกลับมา",
  "oneAway": "อีกเพียงหนึ่งครั้ง",
  "treat": "ก็รับของอร่อยพิเศษครั้งต่อไปได้",
  "sampleLoyalty": "ตัวอย่างโปรแกรมสะสมแต้ม",
  "relationshipTitle": "ให้ลูกค้าประจำ<br>รู้สึกว่าเขาคือคนสำคัญ",
  "relationshipDesc": "ให้ลูกค้ามีเหตุผลที่จะเลือกร้านคุณอีกครั้ง",
  "rel1": "ให้การสั่งครั้งต่อไปง่ายขึ้น",
  "rel2": "รู้ว่าใครกลับมา และควรชวนใครกลับมาซื้ออีก",
  "rel3": "ให้ลูกค้าประจำมีเหตุผลกลับมาหาคุณเร็วขึ้น",
  "showBrand": "เริ่มจากหนึ่งสาขา",
  "pricingTitle": "แพ็กเกจสำหรับทุกช่วงการเติบโต<br>ราคาที่เหมาะกับการทำงานของร้าน",
  "pricingDesc": "ทุกแพ็กเกจรวมออเดอร์ไม่จำกัดและ Basic CRM เลือกจ่ายรายเดือนคงที่หรือ 10% ของยอดออนไลน์ โดยมีเพดานตามแพ็กเกจและจำนวนสาขา",
  "entryFor": "ช่องทางสั่งตรงแรกของคุณ",
  "growthFor": "บริหารร้านที่กำลังเติบโตหลายสาขา",
  "proFor": "แบรนด์ แอป คีออสก์ และกองรถของคุณ",
  "perMonth": "/เดือน",
  "entryLoc": "1 สาขา เพิ่มสาขาไม่ได้",
  "growthLoc": "รวม 2 สาขา · สาขาเพิ่ม ฿990/เดือน",
  "proLoc": "รวม 4 สาขา · สาขาเพิ่ม ฿990/เดือน",
  "singleProvider": "ผู้ให้บริการจัดส่งหนึ่งราย",
  "everythingEntry": "ทุกอย่างใน Entry",
  "multipleDelivery": "ผู้ให้บริการจัดส่งหลายราย",
  "kiosk": "รับออเดอร์ผ่านคีออสก์",
  "everythingGrowth": "ทุกอย่างใน Growth",
  "brandedApp": "รวมแอปในชื่อแบรนด์ ไม่มีค่าติดตั้ง",
  "priority": "ซัพพอร์ต Priority",
  "gateway": "ใช้ Payment ของร้านเอง",
  "talkEntry": "ดูแพ็กเกจ Entry",
  "talkGrowth": "ดูแพ็กเกจ Growth",
  "talkPro": "ดูแพ็กเกจ Pro",
  "faqTitle": "เรื่องที่คุณอาจอยากรู้",
  "q1": "ต้องหยุดใช้มาร์เก็ตเพลสไหม?",
  "a1": "ไม่ต้อง ใช้ต่อได้เมื่อมาร์เก็ตเพลสช่วยสร้างยอดขายที่คุ้มค่า DotDash ให้ลูกค้าที่มีอยู่แล้วสั่งตรงกับคุณ และช่วยแบรนด์สร้างความสัมพันธ์เพื่อให้ลูกค้ากลับมาซื้อซ้ำ",
  "q2": "แพ็กเกจรวม CRM อะไรบ้าง?",
  "a2": "ทุกแพ็กเกจรวม Basic CRM: แต้ม ของรางวัล ระดับสมาชิก โปรไฟล์ลูกค้า RFM อัตโนมัติ 3 แคมเปญ วิเคราะห์และ ROI Advanced CRM เพิ่ม ฿1,290/บัญชี/เดือนทุกแพ็กเกจ พร้อมกลุ่มแบบกำหนดเอง 10 แคมเปญ ตั้งเวลา บรอดแคสต์ตามกลุ่ม และ AI",
  "q3": "ใช้ PoS เดิมต่อได้ไหม?",
  "a3": "ได้สำหรับระบบที่รองรับ โดยไม่มีค่าเชื่อมต่อเพิ่ม กรุณายืนยันความเข้ากันได้กับทีมงาน หรือเลือก Meri PoS ฿250/สาขา/เดือนเมื่อใช้กับแพ็กเกจสั่งอาหาร Stock และ Crew เป็นส่วนเสริมแยกของ Meri PoS",
  "q4": "สาขาเพิ่มเติมคิดราคาอย่างไร?",
  "a4": "Entry รวม 1 สาขาและเพิ่มไม่ได้ Growth รวม 2 สาขา Pro รวม 4 สาขา Growth/Pro เพิ่มสาขา ฿990/เดือน/สาขา CRM และแอปแบรนด์คิดต่อบัญชี ส่วน Meri PoS, Stock และ Crew คิดต่อสาขา",
  "q5": "จ่ายตามยอดแบบมีเพดานทำงานอย่างไร?",
  "a5": "จ่าย 10% ของยอดออนไลน์ไม่เกินราคาแพ็กเกจตามจำนวนสาขา ส่วนเสริมคิดแยก Payment รูปแบบนี้ 1.65%+ ต่อบิล จ่ายแบบปกติ Payment 0.35%+ ต่อบิล และแบบรายปีปกติลด 10% จากค่าบริการรายเดือน",
  "demoTitle": "เริ่มจากหนึ่งสาขา<br>เรียนรู้จากออเดอร์จริง",
  "demoDesc": "นัดพูดคุยเกี่ยวกับสาขา ช่องทางรับออเดอร์ปัจจุบัน และเป้าหมายการทดลอง ตกลงขอบเขต การช่วยเหลือ ราคา และวันทบทวนผลก่อนเริ่ม",
  "demoNote": "เลือกเวลาบน Calendly เป็นการนัดพูดคุยเบื้องต้น ยังไม่ใช่การสมัครแพ็กเกจ",
  "footerTag": "ธุรกิจใกล้บ้าน ความสัมพันธ์ระยะยาว",
  "entryOrders": "รับเอง เดลิเวอรี และทานที่ร้าน",
  "entryCrm": "Basic CRM และ 3 แคมเปญ",
  "entryRfm": "แบ่งกลุ่ม RFM อัตโนมัติ",
  "entryPos": "เชื่อม PoS ที่รองรับฟรี",
  "entrySupport": "ซัพพอร์ตช่องทางรวม",
  "growthShared": "เมนู แต้ม ลูกค้า และรายงานรวมทุกสาขา",
  "growthExtra": "สาขาเพิ่ม ฿990/เดือน/สาขา",
  "growthSupport": "ซัพพอร์ตมาตรฐาน / กลุ่มส่วนตัว",
  "ownFleet": "Own Fleet",
  "currentRates": "<strong>ค่าธรรมเนียม Payment คิดแยก:</strong> จ่ายแบบปกติ 0.35%+ ต่อบิล จ่ายตามยอดแบบมีเพดาน 1.65%+ ต่อบิล เครื่องหมาย “+” เป็นไปตามหน้าราคา กรุณายืนยันค่าธรรมเนียมเต็มตามวิธีชำระกับทีมงาน",
  "annualRates": "รายปีแบบปกติลด 10% จากค่าบริการรายเดือนทั้งหมด ไม่รวมค่าติดตั้งแอปและค่าธรรมเนียม Payment แบบรายปีใช้ไม่ได้กับจ่ายตามยอด",
  "rateSource": "ราคาอัปเดตกันยายน 2569 · หน่วยเป็นบาท · <a class=\"text-link\" href=\"https://factsblend-inc.github.io/dotdash-pricing/\" target=\"_blank\" rel=\"noopener\">ดูหน้าราคาที่เผยแพร่</a>",
  "planComparison": "เปรียบเทียบฟีเจอร์ทุกแพ็กเกจ",
  "planComparisonHead0": "ความสามารถ",
  "planComparisonHead1": "Entry",
  "planComparisonHead2": "Growth",
  "planComparisonHead3": "Pro",
  "planComparisonRow0Cell0": "สาขาที่รวม",
  "planComparisonRow0Cell1": "1",
  "planComparisonRow0Cell2": "2",
  "planComparisonRow0Cell3": "4",
  "planComparisonRow1Cell0": "สาขาเพิ่ม / เดือน",
  "planComparisonRow1Cell1": "ไม่รองรับ",
  "planComparisonRow1Cell2": "฿990",
  "planComparisonRow1Cell3": "฿990",
  "planComparisonRow2Cell0": "รับเอง เดลิเวอรี ทานที่ร้าน",
  "planComparisonRow2Cell1": "รวม",
  "planComparisonRow2Cell2": "รวม",
  "planComparisonRow2Cell3": "รวม",
  "planComparisonRow3Cell0": "ออเดอร์",
  "planComparisonRow3Cell1": "ไม่จำกัด",
  "planComparisonRow3Cell2": "ไม่จำกัด",
  "planComparisonRow3Cell3": "ไม่จำกัด",
  "planComparisonRow4Cell0": "เดลิเวอรี",
  "planComparisonRow4Cell1": "ผู้ให้บริการ 1 ราย",
  "planComparisonRow4Cell2": "หลายผู้ให้บริการ",
  "planComparisonRow4Cell3": "หลายผู้ให้บริการ + Own Fleet",
  "planComparisonRow5Cell0": "การจัดการข้ามสาขา",
  "planComparisonRow5Cell1": "ไม่รวม",
  "planComparisonRow5Cell2": "รวม",
  "planComparisonRow5Cell3": "รวม",
  "planComparisonRow6Cell0": "Basic CRM",
  "planComparisonRow6Cell1": "รวม",
  "planComparisonRow6Cell2": "รวม",
  "planComparisonRow6Cell3": "รวม",
  "planComparisonRow7Cell0": "Advanced CRM / บัญชี / เดือน",
  "planComparisonRow7Cell1": "ส่วนเสริม ฿1,290",
  "planComparisonRow7Cell2": "ส่วนเสริม ฿1,290",
  "planComparisonRow7Cell3": "ส่วนเสริม ฿1,290",
  "planComparisonRow8Cell0": "เชื่อม PoS ที่รองรับ",
  "planComparisonRow8Cell1": "ฟรี",
  "planComparisonRow8Cell2": "ฟรี",
  "planComparisonRow8Cell3": "ฟรี",
  "planComparisonRow9Cell0": "Meri PoS / สาขา / เดือน",
  "planComparisonRow9Cell1": "฿250",
  "planComparisonRow9Cell2": "฿250",
  "planComparisonRow9Cell3": "฿250",
  "planComparisonRow10Cell0": "Stock / สาขา / เดือน",
  "planComparisonRow10Cell1": "฿300",
  "planComparisonRow10Cell2": "฿300",
  "planComparisonRow10Cell3": "฿300",
  "planComparisonRow11Cell0": "Crew / สาขา / เดือน",
  "planComparisonRow11Cell1": "฿500",
  "planComparisonRow11Cell2": "฿500",
  "planComparisonRow11Cell3": "฿500",
  "planComparisonRow12Cell0": "Payment / จ่ายแบบปกติ",
  "planComparisonRow12Cell1": "0.35%+ / บิล",
  "planComparisonRow12Cell2": "0.35%+ / บิล",
  "planComparisonRow12Cell3": "0.35%+ / บิล",
  "planComparisonRow13Cell0": "Payment / จ่ายตามยอด",
  "planComparisonRow13Cell1": "1.65%+ / บิล",
  "planComparisonRow13Cell2": "1.65%+ / บิล",
  "planComparisonRow13Cell3": "1.65%+ / บิล",
  "planComparisonRow14Cell0": "ใช้ Payment ร้านเอง",
  "planComparisonRow14Cell1": "ไม่รวม",
  "planComparisonRow14Cell2": "ไม่รวม",
  "planComparisonRow14Cell3": "รวม",
  "planComparisonRow15Cell0": "แอปแบรนด์ / บัญชี / เดือน",
  "planComparisonRow15Cell1": "ส่วนเสริม ฿1,490",
  "planComparisonRow15Cell2": "ส่วนเสริม ฿1,490",
  "planComparisonRow15Cell3": "รวม",
  "planComparisonRow16Cell0": "ค่าติดตั้งแอป ครั้งเดียว",
  "planComparisonRow16Cell1": "฿25,000",
  "planComparisonRow16Cell2": "฿25,000",
  "planComparisonRow16Cell3": "ฟรี",
  "planComparisonRow17Cell0": "คีออสก์",
  "planComparisonRow17Cell1": "ไม่รวม",
  "planComparisonRow17Cell2": "ไม่รวม",
  "planComparisonRow17Cell3": "รวม",
  "planComparisonRow18Cell0": "ซัพพอร์ต",
  "planComparisonRow18Cell1": "ช่องทางรวม",
  "planComparisonRow18Cell2": "มาตรฐาน / กลุ่มส่วนตัว",
  "planComparisonRow18Cell3": "Priority",
  "crmComparison": "รายละเอียด Basic และ Advanced CRM",
  "crmComparisonHead0": "ความสามารถ",
  "crmComparisonHead1": "Basic CRM",
  "crmComparisonHead2": "Advanced CRM",
  "crmComparisonRow0Cell0": "ราคาต่อบัญชี / เดือน",
  "crmComparisonRow0Cell1": "รวมในแพ็กเกจ (ปกติ ฿369)",
  "crmComparisonRow0Cell2": "ส่วนเสริม ฿1,290",
  "crmComparisonRow1Cell0": "แต้ม ของรางวัล ระดับสมาชิก",
  "crmComparisonRow1Cell1": "รวม",
  "crmComparisonRow1Cell2": "รวม",
  "crmComparisonRow2Cell0": "แอดมินจัดการแต้มและสมาชิก",
  "crmComparisonRow2Cell1": "ไม่จำกัด",
  "crmComparisonRow2Cell2": "ไม่จำกัด",
  "crmComparisonRow3Cell0": "โปรไฟล์และแบ่งกลุ่ม RFM อัตโนมัติ",
  "crmComparisonRow3Cell1": "รวม",
  "crmComparisonRow3Cell2": "รวม",
  "crmComparisonRow4Cell0": "กำหนดกลุ่มลูกค้าเอง",
  "crmComparisonRow4Cell1": "ไม่รวม",
  "crmComparisonRow4Cell2": "รวม",
  "crmComparisonRow5Cell0": "แคมเปญที่ทำงานพร้อมกัน",
  "crmComparisonRow5Cell1": "3",
  "crmComparisonRow5Cell2": "10",
  "crmComparisonRow6Cell0": "แคมเปญตามเงื่อนไข / ส่งทันที",
  "crmComparisonRow6Cell1": "รวม",
  "crmComparisonRow6Cell2": "รวม",
  "crmComparisonRow7Cell0": "แคมเปญตามช่วงเวลา",
  "crmComparisonRow7Cell1": "ไม่รวม",
  "crmComparisonRow7Cell2": "รวม",
  "crmComparisonRow8Cell0": "บรอดแคสต์ LINE OA หาทุกคน",
  "crmComparisonRow8Cell1": "รวม",
  "crmComparisonRow8Cell2": "รวม",
  "crmComparisonRow9Cell0": "บรอดแคสต์ตาม RFM / Custom",
  "crmComparisonRow9Cell1": "ไม่รวม",
  "crmComparisonRow9Cell2": "รวม",
  "crmComparisonRow10Cell0": "วิเคราะห์และ ROI",
  "crmComparisonRow10Cell1": "รวม",
  "crmComparisonRow10Cell2": "รวม",
  "crmComparisonRow11Cell0": "รายงานเฉพาะร้าน / ทีมแนะนำ Automation",
  "crmComparisonRow11Cell1": "ไม่รวม",
  "crmComparisonRow11Cell2": "รวม",
  "crmComparisonRow12Cell0": "ที่นั่งทีมการตลาด",
  "crmComparisonRow12Cell1": "ไม่รวม",
  "crmComparisonRow12Cell2": "รวม 2 ที่นั่ง เพิ่ม ฿290/ที่นั่ง/เดือน",
  "crmComparisonRow13Cell0": "ที่นั่งดูรายงานอย่างเดียว",
  "crmComparisonRow13Cell1": "ไม่จำกัด",
  "crmComparisonRow13Cell2": "ไม่จำกัด",
  "crmComparisonRow14Cell0": "AI Credit / เดือน",
  "crmComparisonRow14Cell1": "ไม่รวม",
  "crmComparisonRow14Cell2": "รวม 1,000 เพิ่ม ฿290/1,000",
  "addonsTitle": "ส่วนเสริม PoS และแอปแบรนด์",
  "addonDetail0": "<strong>Advanced CRM:</strong> ฿1,290/บัญชี/เดือน เพิ่มได้ทุกแพ็กเกจ รวม 2 ที่นั่งการตลาดและ 1,000 AI Credit/เดือน เพิ่มที่นั่ง ฿290 และเพิ่ม 1,000 Credit ฿290 ดูรายงานอย่างเดียวฟรีไม่จำกัด",
  "addonDetail1": "<strong>Meri PoS:</strong> ฿250/สาขา/เดือนเมื่อใช้กับ Entry, Growth หรือ Pro (ปกติ ฿500) ใช้ PoS เดิมที่รองรับต่อได้โดยไม่มีค่าเชื่อมต่อเพิ่มเติม",
  "addonDetail2": "<strong>Stock:</strong> ฿300/สาขา/เดือน <strong>Crew:</strong> ฿500/สาขา/เดือน ทั้งสองส่วนเสริมต้องใช้ Meri PoS",
  "addonDetail3": "<strong>แอปแบรนด์:</strong> Entry/Growth เพิ่ม ฿1,490/บัญชี/เดือน และค่าติดตั้งครั้งเดียว ฿25,000 Pro รวมแอปโดยไม่มีค่าติดตั้ง พาร์ทเนอร์จ่ายค่าบัญชีนักพัฒนา Apple/Google เอง ใช้ดีไซน์มาตรฐานปรับตามแบรนด์ ฟีเจอร์พิเศษเสนอราคาแยก",
  "addonDetail4": "<strong>อัปเกรดเป็น Pro:</strong> แอปย้ายตามไป ไม่เสียค่าติดตั้งใหม่ และไม่มีค่าแอปรายเดือนอีก",
  "configTitle": "จัดแพ็กเกจของคุณ<br>เห็นค่าใช้จ่ายรายเดือนครบ",
  "configDesc": "เลือกสาขา รูปแบบการจ่าย และส่วนเสริม ยอดรวมเปลี่ยนตามตัวเลือกของคุณ",
  "configNote": "ประเมินจากหน้าราคาเดือนกันยายน 2569 ไม่คำนวณค่าธรรมเนียม Payment บัญชีนักพัฒนา ค่าจัดส่ง งานพิเศษ และภาษี กรุณายืนยันเงื่อนไขสุดท้ายกับทีมงาน",
  "quotePlan": "แพ็กเกจ",
  "quotePlanOptentry": "Entry",
  "quotePlanOptgrowth": "Growth",
  "quotePlanOptpro": "Pro",
  "quoteBranches": "สาขา",
  "quoteBilling": "รอบบิล",
  "quoteBillingOptmonthly": "รายเดือน",
  "quoteBillingOptannual": "รายปี · ลด 10%",
  "quoteMode": "รูปแบบการจ่าย",
  "quoteModeOptfixed": "จ่ายแบบปกติ",
  "quoteModeOptgp": "10% ของยอดออนไลน์แบบมีเพดาน",
  "quoteGmv": "ยอดออเดอร์ออนไลน์รายเดือน (บาท)",
  "quoteAddons": "ส่วนเสริม",
  "quoteAdvanced": "Advanced CRM · ฿1,290/บัญชี/เดือน",
  "quotePos": "Meri PoS · ฿250/สาขา/เดือน",
  "quoteStock": "Stock · ฿300/สาขา/เดือน (Meri PoS)",
  "quoteCrew": "Crew · ฿500/สาขา/เดือน (Meri PoS)",
  "quoteApp": "แอปแบรนด์ · รวมใน Pro",
  "quoteSeats": "ที่นั่งการตลาด (รวม 2)",
  "quoteCredits": "ชุด AI Credit เพิ่ม ชุดละ 1,000",
  "quoteTotal": "ค่าใช้จ่ายรายเดือนโดยประมาณ",
  "termsTitle": "รายละเอียดที่ควรรู้ก่อนเลือกแพ็กเกจ",
  "termTitle0": "สาขาและสิทธิ์การใช้งานบัญชี",
  "termBody0": "Entry มี 1 สาขาและ 1 บัญชีต่อนิติบุคคลหรือเลขผู้เสียภาษี เพิ่มสาขาไม่ได้ หากมีสาขาที่ 2 ให้อัปเกรดเป็น Growth ซึ่งรวม 2 สาขา Pro รวม 4 สาขา สาขาเพิ่มเติม ฿990/เดือน ทุกสาขาในบัญชีใช้เมนู แต้ม และข้อมูลลูกค้าร่วมกัน",
  "termTitle1": "ผู้ให้บริการเดลิเวอรี",
  "termBody1": "Growth และ Pro เชื่อมผู้ให้บริการหลายรายเพื่อเลือกตัวเลือกที่เร็วและคุ้มค่าต่อออเดอร์ เริ่มด้วย GrabExpress และ Lalamove ส่วน Skootar จะตามมาเร็ว ๆ นี้ Pro มี Own Fleet",
  "termTitle2": "CRM สมาชิก และข้อความ LINE",
  "termBody2": "Basic และ Advanced CRM คิดต่อบัญชี ไม่ใช่ต่อสาขา สมาชิกและแอดมินจัดการแต้มไม่จำกัด ลูกค้าที่เคยสมัครร้านใดใน DotDash สมัครร้านคุณได้ในคลิกเดียวภายใต้นโยบายการใช้งานที่เหมาะสม จำนวนข้อความบรอดแคสต์ตามแพ็กเกจ LINE OA ของร้าน DotDash ไม่คิดค่าข้อความเพิ่ม",
  "termTitle3": "AI Credit",
  "termBody3": "Advanced CRM รวม 1,000 Credit/เดือน ใช้ร่วมกันทุกสาขา รีเซ็ตทุกเดือน ไม่สะสม เพิ่มชุดละ 1,000 Credit ราคา ฿290",
  "termTitle4": "PoS เดิมและ Meri PoS",
  "termBody4": "ออเดอร์ออนไลน์เชื่อม PoS เดิมที่รองรับได้โดยไม่มีค่าเชื่อมต่อเพิ่มเติม สอบถามรายชื่อระบบที่รองรับจากทีมงาน Meri PoS ราคา ฿250/สาขา/เดือนเมื่อใช้คู่แพ็กเกจสั่งอาหาร ปกติ ฿500 ส่วน Stock และ Crew ต้องใช้ Meri PoS",
  "termTitle5": "แอปในชื่อแบรนด์",
  "termBody5": "Entry/Growth: ฿1,490/บัญชี/เดือนและค่าติดตั้ง ฿25,000 Pro: รวมในแพ็กเกจ ไม่มีค่าติดตั้ง แอปเผยแพร่ภายใต้บัญชีนักพัฒนา Apple และ Google ของพาร์ทเนอร์ ซึ่งพาร์ทเนอร์ชำระเอง ใช้ดีไซน์มาตรฐานปรับตามแบรนด์ ฟีเจอร์พิเศษเสนอราคาแยก อัปเกรดเป็น Pro แอปย้ายตาม ไม่มีค่าติดตั้งใหม่หรือค่าแอปรายเดือน",
  "termTitle6": "การจ่ายรายปี",
  "termBody6": "ลด 10% จากค่าบริการรายเดือนทั้งหมด ไม่รวมค่าติดตั้งแอปครั้งเดียวและค่าธรรมเนียม Payment รายปีใช้ได้กับการจ่ายแบบปกติเท่านั้น",
  "termTitle7": "จ่ายตามยอดแบบมีเพดานและค่าธรรมเนียม Payment",
  "termBody7": "ทุกแพ็กเกจเลือกจ่าย 10% ของยอดออนไลน์ไม่เกินราคาแพ็กเกจตามจำนวนสาขา หรือจ่ายแบบปกติ ส่วนเสริมยังเป็นค่าบริการรายเดือนแยก ตัวเลือกนี้ยังไม่มีวันสิ้นสุด หากเปลี่ยนแปลงจะแจ้งล่วงหน้าอย่างน้อย 60 วัน Payment แบบปกติ 0.35%+ ต่อบิล จ่ายตามยอด 1.65%+ ต่อบิล Pro ใช้ Payment ร้านเองได้ กรุณายืนยันเงื่อนไขที่เกี่ยวข้องกับทีมงาน",
  "quoteBase": "แพ็กเกจตามจำนวนสาขา",
  "quoteAdvancedLine": "Advanced CRM",
  "quotePosLine": "Meri PoS",
  "quoteStockLine": "Stock",
  "quoteCrewLine": "Crew",
  "quoteAppLine": "แอปแบรนด์",
  "quoteDiscount": "ส่วนลดรายปี 10%",
  "quoteCap": "เพดานแพ็กเกจ",
  "quoteAnnualPay": "ค่าบริการรายปี",
  "quoteSetupFee": "ค่าติดตั้งแอปครั้งเดียว",
  "quoteNoSetup": "ไม่มีค่าติดตั้งแอป",
  "quoteFixedFee": "Payment: 0.35%+ ต่อบิล คิดแยก",
  "quoteGpFee": "Payment: 1.65%+ ต่อบิล คิดแยก",
  "quoteEntrySwitch": "มากกว่า 1 สาขา ระบบเลือก Growth ให้โดยอัตโนมัติ",
  "quoteAnnualFixed": "รายปีใช้แบบปกติเท่านั้น ระบบเปลี่ยนรูปแบบการจ่ายให้แล้ว",
  "quoteIncludedApp": "แอปรวมใน Pro ไม่มีค่าติดตั้ง",
  "quoteAddonTotal": "ส่วนเสริมรายเดือน",
  "quoteNoGuarantee": "การประเมินนี้ไม่ใช่ใบเสนอราคา",
  "quoteSetupExcluded": "ค่าติดตั้งไม่รวมในยอดรายปีข้างต้น",
  "quoteInvalid": "ตรวจสอบตัวเลข: สาขา 1–50 ที่นั่ง 2–30 และชุด Credit 0–50 ใช้จำนวนเต็ม ยอดขายต้องเป็นศูนย์หรือมากกว่า"
};
Object.assign(english,{"quoteInvalid":"Check your numbers: 1–50 branches, 2–30 seats, and 0–50 credit packs, using whole numbers. Online sales must be zero or more.","quoteBase": "Branch-adjusted plan", "quoteAdvancedLine": "Advanced CRM", "quotePosLine": "Meri PoS", "quoteStockLine": "Stock", "quoteCrewLine": "Crew", "quoteAppLine": "Branded app", "quoteDiscount": "Annual discount: 10%", "quoteCap": "Plan cap", "quoteAnnualPay": "Annual recurring payment", "quoteSetupFee": "One-time app setup", "quoteNoSetup": "No app setup charge", "quoteFixedFee": "Payment: 0.35%+ per bill, charged separately", "quoteGpFee": "Payment: 1.65%+ per bill, charged separately", "quoteEntrySwitch": "More than one branch: Growth has been selected automatically.", "quoteAnnualFixed": "Annual billing uses fixed pricing only. The payment model has been updated.", "quoteIncludedApp": "App included with Pro; no setup fee", "quoteAddonTotal": "Recurring add-ons", "quoteNoGuarantee": "This estimate is not a quotation.", "quoteSetupExcluded": "Setup is separate from the annual recurring total above"});
Object.assign(english,{resumePartners:'Resume logos',quoteGpEstimate:'At your entered online order value: {amount}/month. The plan charge is zero with no orders; selected add-ons still apply.'});
Object.assign(thai,{quoteGpEstimate:'ตามยอดออเดอร์ออนไลน์ที่กรอก: {amount}/เดือน หากไม่มีออเดอร์ ค่าแพ็กเกจเป็นศูนย์ แต่ส่วนเสริมที่เลือกยังคิดค่าบริการ'});
let lang='en';
try {lang=localStorage.getItem('dotdash-language')==='th'?'th':'en';} catch {}
const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',lang==='th'?(open?'ปิดเมนู':'เปิดเมนู'):(open?'Close menu':'Open menu'));document.querySelector('#navigation').classList.toggle('open',open)});
document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.querySelector('#navigation').classList.remove('open')}));
function money(n){return new Intl.NumberFormat(lang==='th'?'th-TH':'en-US',{style:'currency',currency:'THB',currencyDisplay:'narrowSymbol',maximumFractionDigits:0,minimumFractionDigits:0}).format(n)}
function computeQuote(o){
 const branches=Math.max(1,Math.min(50,Math.floor(Number(o.branches)||1)));
 const plan=o.plan==='entry'&&branches>1?'growth':o.plan;
 const base=plan==='entry'?990:plan==='growth'?2350+990*Math.max(0,branches-2):4320+990*Math.max(0,branches-4);
 const advanced=o.advanced?1290+290*(Math.max(2,Math.min(30,Math.floor(Number(o.seats)||2)))-2)+290*Math.max(0,Math.min(50,Math.floor(Number(o.credits)||0))):0;
 const pos=o.pos?250*branches:0;
 const app=plan==='pro'?0:o.app?1490:0, setup=app?25000:0;
 const addons=advanced+pos+app, annual=o.billing==='annual',gp=!annual&&o.mode==='gp';
 const planCharge=gp?Math.min(base,Math.max(0,Number(o.gmv)||0)*.1):base;
 const discount=annual?(base+addons)*.1:0;
 return {plan,branches,base,advanced,pos,app,setup,addons,annual,gp,planCharge,discount,total:planCharge+addons-discount};
}
function phrase(k){return (lang==='th'?thai:english)[k]||k}
function calculate(){
 const form=document.getElementById('plan-builder');if(!form)return;
 const get=id=>document.getElementById('quote-'+id), notes=[];
 const numeric=[get('branches')];if(get('advanced').checked)numeric.push(get('seats'),get('credits'));if(get('mode').value==='gp'&&get('billing').value!=='annual')numeric.push(get('gmv'));
 const invalid=numeric.some(input=>input.value===''||!input.checkValidity());
 numeric.forEach(input=>input.setAttribute('aria-invalid',String(input.value===''||!input.checkValidity())));
 if(invalid){document.getElementById('quote-total').textContent='—';document.getElementById('quote-breakdown').replaceChildren();for(const id of ['quote-annual','quote-setup','quote-payment'])document.getElementById(id).textContent='';document.getElementById('quote-eligibility').textContent=phrase('quoteInvalid');return}
 if(get('plan').value==='entry'&&Number(get('branches').value)>1){get('plan').value='growth';notes.push(phrase('quoteEntrySwitch'))}
 const annual=get('billing').value==='annual';get('mode').querySelector('[value=gp]').disabled=annual;
 if(annual&&get('mode').value==='gp'){get('mode').value='fixed';notes.push(phrase('quoteAnnualFixed'))}
 const pro=get('plan').value==='pro',pos=get('pos').checked;
 if(pro)get('app').checked=true;get('app').disabled=pro;
 document.getElementById('quote-advanced-options').hidden=!get('advanced').checked;
 document.getElementById('quote-gmv-row').hidden=get('mode').value!=='gp';
 const q=computeQuote({plan:get('plan').value,branches:get('branches').value,billing:get('billing').value,mode:get('mode').value,advanced:get('advanced').checked,seats:get('seats').value,credits:get('credits').value,pos,app:get('app').checked,gmv:get('gmv').value});
 const rows=[[phrase('quoteBase'),q.planCharge]];
 if(q.gp)rows.push([phrase('quoteCap'),q.base]);
 for(const k of ['advanced','pos','app'])if(q[k])rows.push([phrase('quote'+k[0].toUpperCase()+k.slice(1)+'Line'),q[k]]);
 if(q.annual)rows.push([phrase('quoteDiscount'),-q.discount]);
 const box=document.getElementById('quote-breakdown');box.replaceChildren();for(const [name,value]of rows){const row=document.createElement('div'),label=document.createElement('span'),amount=document.createElement('strong');label.textContent=name;amount.textContent=money(value);row.append(label,amount);box.append(row)}
 document.getElementById('quote-total').textContent=q.gp?money(q.addons)+'–'+money(q.base+q.addons):money(q.total);
 document.getElementById('quote-annual').textContent=q.gp?phrase('quoteGpEstimate').replace('{amount}',money(q.total)):q.annual?phrase('quoteAnnualPay')+': '+money(q.total*12):'';
 document.getElementById('quote-setup').textContent=q.setup?phrase('quoteSetupFee')+': '+money(q.setup)+(q.annual?' · '+phrase('quoteSetupExcluded'):''):phrase('quoteNoSetup');
 document.getElementById('quote-payment').textContent=phrase(q.gp?'quoteGpFee':'quoteFixedFee');
 document.getElementById('quote-eligibility').textContent=notes.join(' ');
}
document.getElementById('plan-builder').addEventListener('input',calculate);
document.getElementById('plan-builder').addEventListener('submit',e=>e.preventDefault());
function translate(){document.documentElement.lang=lang;const copy=lang==='th'?thai:english;document.querySelectorAll('[data-i18n]').forEach(el=>{if(copy[el.dataset.i18n]!==undefined)el.innerHTML=copy[el.dataset.i18n]});document.querySelector('#language').innerHTML=lang==='en'?'<span class="active-language">EN</span><span aria-hidden="true">/</span><span>ไทย</span>':'<span>EN</span><span aria-hidden="true">/</span><span class="active-language">ไทย</span>';document.querySelector('#language').setAttribute('aria-label',lang==='en'?'Switch to Thai':'Switch to English');document.querySelector('nav').setAttribute('aria-label',lang==='th'?'เมนูหลัก':'Main navigation');menu.setAttribute('aria-label',lang==='th'?'เปิดเมนู':'Open menu');document.querySelector('.ordering-reference-image').alt=lang==='th'?'ลูกค้าถือโทรศัพท์ที่แสดงหน้าสั่งอาหารและสะสมแต้มของ SOOD’s บน DotDash':'A customer holding a phone with the SOOD’s DotDash ordering and rewards screen';document.title=lang==='th'?'DotDash แบรนด์ของคุณ ลูกค้าของคุณ กลับมาสั่งซ้ำมากขึ้น':'DotDash Your brand. Your customers. More repeat orders.';calculate()}
document.querySelector('#language').addEventListener('click',()=>{lang=lang==='en'?'th':'en';try{localStorage.setItem('dotdash-language',lang)}catch{}translate()});
// User-provided booking destination: introduction only, no automatic enrollment.
const PILOT_BOOKING_URL='https://calendly.com/auttawut-wir-factsblend/dotdash-introduction';
const pilotButton=document.getElementById('demo-destination');
pilotButton.href=PILOT_BOOKING_URL;
translate();

// Keep owner stories quiet until a visitor chooses to play, and play one at a time.
const ownerVideos=[...document.querySelectorAll('.owner-story video')];
ownerVideos.forEach(video=>video.addEventListener('play',()=>ownerVideos.forEach(other=>{if(other!==video)other.pause()})));

// A two-row vertical partner ticker. Canonical names remain available to assistive tech.
const partnerMotion=document.querySelector('.partner-motion');
const partnerViewport=partnerMotion.querySelector('.partner-viewport');
const partnerList=partnerMotion.querySelector('.partner-logos');
const partnerItems=[...partnerList.children];
const partnerColumns=matchMedia('(max-width: 800px)');
const reducedPartnerMotion=matchMedia('(prefers-reduced-motion: reduce)');
let partnersVisible=true;
function updatePartnerPause(){partnerMotion.classList.toggle('paused',!partnersVisible||document.hidden)}
function buildPartnerTicker(){
 partnerMotion.querySelector('.partner-track')?.remove();
 if(reducedPartnerMotion.matches){partnerViewport.classList.remove('animated');return}
 const track=document.createElement('div');track.className='partner-track';track.setAttribute('aria-hidden','true');
 for(let repeat=0;repeat<2;repeat++){
  const loop=document.createElement('ul');loop.className='partner-loop';
  // Fill complete rows with visual repeats so the two loops join without a gap.
  const columns=partnerColumns.matches?4:5;
  const cellCount=Math.ceil(partnerItems.length/columns)*columns;
  for(let i=0;i<cellCount;i++){const cell=partnerItems[i%partnerItems.length].cloneNode(true);cell.querySelector('img').loading='eager';loop.append(cell)}
  track.append(loop)
 }
 partnerViewport.append(track);partnerViewport.classList.add('animated');updatePartnerPause();
}
reducedPartnerMotion.addEventListener('change',buildPartnerTicker);
partnerColumns.addEventListener('change',buildPartnerTicker);
new IntersectionObserver(entries=>{partnersVisible=entries[0].isIntersecting;updatePartnerPause()},{threshold:0}).observe(partnerMotion);
document.addEventListener('visibilitychange',updatePartnerPause);
buildPartnerTicker();
