export const translations = {
  th: {
    title: "ถ้าคุณอยู่ใน The Odyssey... คุณคือ \"ชา\" แบบไหน?",
    instructions: "คำแนะนำ: เลือกตัวเลือกที่ตรงกับความรู้สึกหรือพฤติกรรมของคุณมากที่สุด",
    startButton: "เริ่มกันเลย !",
    restartButton: "เริ่มใหม่",
    language: "ภาษา",
    next: "ถัดไป >",
    resultTitle: "เครื่องดื่มพิเศษของคุณ",
    resultLike: "คุณเปรียบเสมือน",
    teaForYou: "ชาที่เหมาะกับคุณ",
    teaDescription: "คำอธิบาย",
    retest: "ทำแบบทดสอบอีกครั้ง",
  },
  en: {
    title: "If you were in The Odyssey... what kind of \"tea\" would you be?",
    instructions: "Instructions: Choose the option that best matches your feelings or behavior",
    startButton: "Let's Start!",
    restartButton: "Start Over",
    language: "Language",
    next: "Next > ",
    resultTitle: "Your Special Drink",
    resultLike: "You are like",
    teaForYou: "Tea for you",
    teaDescription: "Description",
    retest: "Retest",
  }
}; 

export const getText = (key, lang) => {
  return translations[lang][key] || translations["th"][key];
}