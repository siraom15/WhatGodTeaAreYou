export const translations = {
  th: {
    title: "\"ชา\"แห่งเทพเจ้า: ค้นหารสชาที่เป็นตัวคุณ",
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
    title: "Discover Your \"Tea Soul\" in the World of Myths",
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