import React, { useEffect, useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css";

import Achilles from "../images/Achilles.jpg";
import Apollo from "../images/Apollo.jpg";
import Cassandra from "../images/Cassandra.jpg";
import Circe from "../images/Circe.jpg";
import Hercules from "../images/Hercules.jpg";
import Hermes from "../images/Hermes.jpg";
import Persephone from "../images/Persephone.jpg";
import Perseus from "../images/Perseus.jpg";

// Tea images
import Aunchun from "../images/aunchun.png";
import Baitoey from "../images/baitoey.png";
import Kajiab from "../images/kajiab.png";
import Lemon from "../images/lemo.png";
import Orange from "../images/orange.png";
import Rose from "../images/rose.png";
import Kekkuy from "../images/kekkuy.png";
import Lavender from "../images/lavender.png";
import { getText } from "../translations";

const questions = [
  {
    questionTH: "ถ้าคุณมีเวลาว่าง 1 วัน คุณจะ...",
    questionEng: "On your day off, you would rather...",
    options: [
      {
        textTH: "เดินทางออกนอกกรอบ สัมผัสสิ่งใหม่",
        textEng: "Go somewhere new and exciting",
        drink: "A",
      },
      {
        textTH: "ใช้เวลานั่งคิด เขียน หรืออยู่กับความคิดตัวเอง",
        textEng: "Stay in and reflect quietly",
        drink: "B",
      },
      {
        textTH: "ฝึกฝนร่างกาย หรือทำสิ่งที่ท้าทายตัวเอง",
        textEng: "Do something bold or physical",
        drink: "C",
      },
      {
        textTH: "สร้างหรือทดลองอะไรลึกลับ น่าค้นหา",
        textEng: "Try something magical or creative",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "ถ้ามีใครเข้าใจคุณผิด คุณจะ...",
    questionEng: "When someone misunderstands you, you...",
    options: [
      {
        textTH: "พูดคุยตรง ๆ และเคลียร์ให้เข้าใจ",
        textEng: "Talk it out clearly and directly",
        drink: "A",
      },
      {
        textTH: "ยอมรับอย่างเงียบ ๆ แม้ไม่มีใครฟัง",
        textEng: "Stay quiet and hope they’ll understand one day",
        drink: "B",
      },
      {
        textTH: "แสดงออกผ่านการกระทำมากกว่าคำพูด",
        textEng: "Show your actions instead of explaining",
        drink: "C",
      },
      {
        textTH: "ยิ้มไว้และปล่อยให้เวลาเป็นคำตอบ",
        textEng: "Smile and let time reveal the truth",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "ในกลุ่มเพื่อน คุณมักเป็นคนที่...",
    questionEng: "In your friend group, you are usually the one who...",
    options: [
      {
        textTH: "ชวนคุย ชวนขำ ทำให้วงไม่กร่อย",
        textEng: "Keeps the vibe fun and talks to everyone",
        drink: "A",
      },
      {
        textTH: "สังเกตทุกคนเงียบ ๆ แล้วเข้าใจลึกที่สุด",
        textEng: "Watches and listens carefully",
        drink: "B",
      },
      {
        textTH: "พร้อมลุย เป็นคนเริ่มก่อนทุกกิจกรรม",
        textEng: "Takes the lead and starts things",
        drink: "C",
      },
      {
        textTH: "ดูนิ่ง ๆ แต่มีเสน่ห์จนคนเข้าหาเอง",
        textEng: "Is quiet but somehow everyone notices",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "เวลามีความเครียด คุณจัดการอย่างไร?",
    questionEng: "When you feel stressed, you...",
    options: [
      {
        textTH: "หาทางออกหรือมุมมองใหม่ ๆ ทันที",
        textEng: "Try to find a new perspective",
        drink: "A",
      },
      {
        textTH: "อยู่กับมันและยอมรับให้ผ่านไปเอง",
        textEng: "Accept it and let it pass",
        drink: "B",
      },
      {
        textTH: "ทำอะไรบางอย่างให้เหงื่อออกหรือใจเต้น",
        textEng: "Work out or move your body",
        drink: "C",
      },
      {
        textTH: "เขียน วาด ฟังเพลง หรือทำอะไรคนเดียว",
        textEng: "Write, draw, or listen to music",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "ถ้าให้เลือกอาวุธประจำตัว คุณจะเลือก...",
    questionEng: "If you could pick a magical item, you'd choose...",
    options: [
      {
        textTH: "ปีกติดส้นเท้า – เดินทางรวดเร็ว ทันทุกสถานการณ์",
        textEng: "Winged sandals – move fast, go far",
        drink: "A",
      },
      {
        textTH: "หนังสือหรือคทาทำนาย – พลังแห่งการหยั่งรู้",
        textEng: "A prophecy scroll – know things others don’t",
        drink: "B",
      },
      {
        textTH: "ดาบหรือโล่ – ปกป้องและต่อสู้",
        textEng: "A sword or shield – protect what matters",
        drink: "C",
      },
      {
        textTH: "ขวดน้ำยาเวท – เสน่ห์ที่เปลี่ยนโลกได้",
        textEng: "A charm potion – win hearts with a glance",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "คุณอยากให้คนอื่นจำคุณว่าเป็นคนแบบไหน?",
    questionEng: "How do you want people to remember you?",
    options: [
      {
        textTH: "พูดเก่ง ฉลาด แก้ปัญหาเก่ง",
        textEng: "Clever and quick with words",
        drink: "A",
      },
      {
        textTH: "ลึกซึ้ง มีความคิดเป็นของตัวเอง",
        textEng: "Deep and thoughtful",
        drink: "B",
      },
      {
        textTH: "มั่นใจ กล้าหาญ นำคนได้",
        textEng: "Brave and determined",
        drink: "C",
      },
      {
        textTH: "รีน่าค้นหา มีเสน่ห์ในแบบของตัวเอง",
        textEng: "Mysterious and magnetic",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "ถ้ามีเวทมนตร์ได้ 1 อย่าง คุณจะเลือก...",
    questionEng: "If you had one magical power, it would be...",
    options: [
      {
        textTH: "พูดได้ทุกภาษาในโลก",
        textEng: "Speak all languages",
        drink: "A",
      },
      { textTH: "มองเห็นอนาคต", textEng: "See the future", drink: "B" },
      {
        textTH: "มีพละกำลังไร้ขีดจำกัด",
        textEng: "Endless strength",
        drink: "C",
      },
      {
        textTH: "ทำให้คนตกหลุมรักด้วยคำพูดเดียว",
        textEng: "Make people fall under your spell",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "เวลาอยู่กับคนหมู่มาก คุณมักจะ...",
    questionEng: "In a crowd, you tend to...",
    options: [
      {
        textTH: "เป็นคนที่พูดเก่ง ช่วยเชื่อมบทสนทนา",
        textEng: "Start conversations and bring people together",
        drink: "A",
      },
      {
        textTH: "เงียบ ๆ แต่สังเกตได้ทุกอย่าง",
        textEng: "Stay quiet but notice everything",
        drink: "B",
      },
      {
        textTH: "เป็นศูนย์กลางพลังบวก หรือพลังรบ",
        textEng: "Energize everyone or take charge",
        drink: "C",
      },
      {
        textTH: "ดึงดูดโดยที่ไม่ต้องพยายาม",
        textEng: "Attract attention without trying",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "สิ่งสำคัญที่สุดในชีวิตคุณคือ...",
    questionEng: "What matters most in life?",
    options: [
      {
        textTH: "เสรีภาพและการสื่อสาร",
        textEng: "Freedom and expression",
        drink: "A",
      },
      {
        textTH: "ความจริง ความรู้ และการเข้าใจตนเอง",
        textEng: "Truth and self-understanding",
        drink: "B",
      },
      {
        textTH: "ความกล้า ความสำเร็จ",
        textEng: "Courage and achievement",
        drink: "C",
      },
      {
        textTH: "ความงาม ความลุ่มลึก และอารมณ์",
        textEng: "Beauty and feeling",
        drink: "D",
      },
    ],
  },
  {
    questionTH: "ชีวิตในฝันของคุณคือ...",
    questionEng: "Your dream life would be...",
    options: [
      {
        textTH: "ได้เดินทาง ไม่มีกรอบ ไม่มีวันหยุด",
        textEng: "Traveling without limits",
        drink: "A",
      },
      {
        textTH: "ได้มีเวลาคิด เรียนรู้ และเติบโต",
        textEng: "Growing through calm and wisdom",
        drink: "B",
      },
      {
        textTH: "ได้ต่อสู้เพื่อเป้าหมายในชีวิต",
        textEng: "Facing challenges and conquering goals",
        drink: "C",
      },
      {
        textTH: "ได้ใช้ชีวิตอย่างสร้างสรรค์ เต็มไปด้วยแรงดึงดูด",
        textEng: "Living with mystery, creativity, and charm",
        drink: "D",
      },
    ],
  },
];

const drinks = {
  A: {
    nameTH: "🍋 ชาเลมอน",
    nameEng: "🍋 Lemon",
    descriptionTH:
      "คุณคือคนที่ชอบเคลื่อนไหวตลอดเวลา ฉลาดว่องไว ชอบความอิสระและการเชื่อมต่อกับผู้คน",
    descriptionEng:
      "You’re fast-thinking, witty, and love freedom. You enjoy movement, communication, and new adventures.",
    tea_image: Lemon,
    image: Hermes,
    god_name: "Hermes",
    god_descriptionTH:
      "เทพแห่งการเดินทางและการสื่อสาร ผู้เฉลียวฉลาด ว่องไว และมีเสน่ห์แบบขี้เล่น เป็นตัวแทนของอิสระ ความคิดเร็ว และความกล้าลอง",
    god_descriptionEng:
      "The god of travel and communication — quick-witted, swift, and playfully charming. He represents freedom, fast thinking, and the courage to explore.",
  },
  B: {
    nameTH: "💜 ชาลาเวนเดอร์",
    nameEng: "💜 Lavender",
    descriptionTH:
      "คุณเป็นผู้หยั่งรู้ เงียบลึก น่าค้นหา เข้าใจความเปลี่ยนแปลงและยอมรับได้เสมอ",
    descriptionEng:
      "You’re deep, quiet, and wise beyond your years. People may not always listen, but you're often right.",
    image: Cassandra,
    tea_image: Lavender,
    god_name: "Cassandra",
    god_descriptionTH:
      "ผู้หยั่งรู้อนาคตแต่ไม่มีใครเชื่อ เป็นหญิงที่มั่นคงในความคิด ลึกซึ้ง และโดดเดี่ยวในบางครั้ง สื่อถึงสัญชาตญาณและความจริงที่ซ่อนอยู่",
    god_descriptionEng:
      "A prophetess cursed to be unheard. Deep, steady, and at times solitary, she reflects instinct, truth, and quiet resilience.",
  },
  C: {
    nameTH: "🌺 ชากระเจี๊ยบ",
    nameEng: "🌺 Hibiscus",
    descriptionTH: "คุณแข็งแกร่ง มั่นคง มีพลังและพร้อมลุยเพื่อสิ่งที่เชื่อ",
    descriptionEng:
      "You are fierce, determined, and passionate. A true fighter with a heart full of fire.",
    image: Achilles,
    tea_image: Kajiab,
    god_name: "Achilles",
    god_descriptionTH:
      "ยอดนักรบผู้ไม่กลัวความตาย มีจิตใจเร่าร้อน จริงจัง และเต็มไปด้วยพลังดิบ สื่อถึงความกล้าหาญ ปกป้อง และความรักที่แรงกล้า",
    god_descriptionEng:
      "A fearless warrior with a fiery soul. Passionate and intense, he represents bravery, protection, and fierce love.",
  },
  D: {
    nameTH: "🌹 ชากุหลาบ",
    nameEng: "🌹 Rose",
    descriptionTH:
      "คุณมีเสน่ห์แบบไม่ต้องพยายาม สร้างพลังผ่านความงาม ความลึกลับ และความมั่นใจ",
    descriptionEng:
      "You’re enchanting, artistic, and mysterious. You turn quiet power into beauty and influence.",
    image: Circe,
    tea_image: Rose,
    god_name: "Circe",
    god_descriptionTH:
      "แม่มดผู้มากเสน่ห์และเปี่ยมอำนาจ มีความลึกลับ ดึงดูด และควบคุมสถานการณ์ด้วยสติปัญญา เป็นตัวแทนของพลังอ่อนโยนที่ควบคุมได้",
    god_descriptionEng:
      "A sorceress of beauty and power. Mysterious and magnetic, she controls her world with calm intelligence and soft strength.",
  },
  "A+B": {
    nameTH: "🌞 ชาเก็กฮวย",
    nameEng: "🌞 Chrysanthemum",
    descriptionTH: "คุณคือแสงสว่างที่เต็มไปด้วยปัญญาและความอ่อนโยน",
    descriptionEng: "You shine with both intelligence and kindness.",
    image: Apollo,
    tea_image: Kekkuy,
    god_name: "Apollo",
    god_descriptionTH:
      "เทพแห่งแสง องค์ความรู้ และดนตรี เป็นคนสุขุม มีพลังสงบแต่ส่องสว่าง สื่อถึงความสมดุลระหว่างเหตุผลกับความงาม",
    god_descriptionEng:
      "The god of light, wisdom, and music. Calm and radiant, he embodies the harmony between logic and beauty.",
  },
  "B+C": {
    nameTH: "💙 ชาอัญชัน",
    nameEng: "💙 Butterfly Pea",
    descriptionTH:
      "คุณเป็นคนที่มีความเข้มแข็ง สามารถรับมือกับการเปลี่ยนแปลงได้ดี และมีความเปล่งประกายในแบบของตัวเอง",
    descriptionEng:
      "You have inner strength, embrace change with grace, and radiate in your own way.",
    image: Persephone,
    tea_image: Aunchun,
    god_name: "Persephone",
    god_descriptionTH:
      "ราชินีแห่งโลกใต้พิภพและเทพแห่งฤดูใบไม้ผลิ มีสองด้านทั้งความบริสุทธิ์และความลึกซึ้ง สื่อถึงการเติบโต ความเปลี่ยนแปลง และความเข้มแข็งในใจ",
    god_descriptionEng:
      "Queen of the underworld and goddess of spring. She holds duality — innocence and depth — representing growth, change, and quiet inner power.",
  },
  "C+D": {
    nameTH: "🍊 ชาส้ม",
    nameEng: "🍊 Orange",
    descriptionTH:
      "คุณเป็นคนแข็งแกร่งแต่ไม่แข็งกระด้าง เด็ดเดี่ยวแต่เปี่ยมไปด้วยเสน่ห์",
    descriptionEng:
      "You are strong but never harsh — determined, yet full of charm.",
    image: Hercules,
    tea_image: Orange,
    god_name: "Hercules",
    god_descriptionTH:
      "นักรบผู้แข็งแกร่งที่สุดในตำนานกรีก เต็มไปด้วยพลังและหัวใจนักสู้ เป็นตัวแทนของความอดทน ความเสียสละ และความกล้าชนปัญหา",
    god_descriptionEng:
      "The strongest warrior in Greek myth — powerful with a fighter’s heart. He symbolizes endurance, sacrifice, and fearless strength.",
  },
  "A+D": {
    nameTH: "🌿 ชาใบเตย",
    nameEng: "🌿 Pandan",
    descriptionTH:
      "คุณคือคนที่มีไหวพริบและเสน่ห์นุ่มนวล มีความกล้าแบบเงียบๆ และรู้จักใช้คำพูดในเวลาที่เหมาะสม",
    descriptionEng:
      "You have subtle wit and charm, quiet bravery, and the wisdom to speak when it matters most.",
    image: Perseus,
    tea_image: Baitoey,
    god_name: "Perseus",
    god_descriptionTH:
      "วีรบุรุษผู้เอาชนะเมดูซ่า เป็นคนกล้าหาญ ซื่อสัตย์และจริงใจ เป็นตัวแทนของการใช้ไหวพริบและความมุ่งมั่นอย่างแน่วแน่",
    god_descriptionEng:
      "The hero who defeated Medusa — brave, sincere, and loyal. He stands for clever action and unwavering determination.",
  },
};

function Quiz({ onRestart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storedLanguage || "th");

  // is english
  const isEnglish = language === "en";

  function handleAnswer(drink) {
    setScores((prevScores) => {
      const newScores = { ...prevScores };

      // Decrease the score for the previously selected drink
      if (selectedAnswer) {
        newScores[selectedAnswer] -= 1;
      }

      // Increase the score for the newly selected drink
      newScores[drink] = (newScores[drink] || 0) + 1;

      return newScores;
    });

    setSelectedAnswer(drink); // Mark the new answer as selected
  }

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrinks = [];
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrinks = [drink];
        maxScore = score;
      } else if (score === maxScore) {
        maxDrinks.push(drink);
      }
    }
    let maxDrink = maxDrinks[0];
    if (maxDrinks.length > 1) {
      maxDrink = maxDrinks.sort().join("+");
      // we support only A+B, B+C, C+D, A+D // if not, we random from 2 of them
      if (!["A+B", "B+C", "C+D", "A+D"].includes(maxDrink)) {
        maxDrink = maxDrinks[Math.floor(Math.random() * maxDrinks.length)];
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
    if (onRestart) {
      onRestart();
    }
  }
  
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const testResult = urlParams.get("result");
  //   if (testResult) {
  //     console.log("Test Result: ", testResult);
  //     setResult(testResult);
  //   }
  // }, []);

  if (result) {
    return (
      <Result
        drink={result}
        language={language}
        name={isEnglish ? drinks[result].nameEng : drinks[result].nameTH}
        description={
          isEnglish
            ? drinks[result].descriptionEng
            : drinks[result].descriptionTH
        }
        restartQuiz={restartQuiz}
        godName={drinks[result].god_name}
        godImage={drinks[result].image}
        godDescription={
          isEnglish
            ? drinks[result].god_descriptionEng
            : drinks[result].god_descriptionTH
        }
        teaImage={drinks[result].tea_image}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
      <Question
        question={questions[currentQuestion]}
        language={language}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button
        className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        {getText("next", language)}
      </button>
    </div>
  );
}

export default Quiz;
