import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css";

import A from "../images/Odysseus.jpg";
import B from "../images/penelope.jpg";
import C from "../images/Nausicaa.jpg";
import D from "../images/Athena.jpg";
import E from "../images/Circe.jpg";
import F from "../images/Telemachus.jpg";
import MatchLatte from "../images/matcha-latte.png";

const questions = [
  {
    question: "คุณเริ่มต้นวันใหม่อย่างไร?",
    options: [
      { text: "ลุกขึ้นพร้อมวางแผนเต็มหัว", drink: "A" },
      { text: "ค่อย ๆ ทำทุกอย่างด้วยจังหวะที่มั่นคง", drink: "B" },
      { text: "รีบออกไปสัมผัสแสงแดด หาแรงบันดาลใจ", drink: "C" },
    ],
  },
  {
    question: "เมื่อเจอปัญหายาก ๆ คุณ...",
    options: [
      { text: "ใช้ไหวพริบแก้ปัญหา หาทางออกหลายทาง", drink: "A" },
      { text: "เชื่อในความอดทนและความดี", drink: "B" },
      { text: "ปรับตัวไว พยายามทำให้ทุกคนรู้สึกดี", drink: "C" },
    ],
  },
  {
    question: "ถ้าได้เดินทางไกล คุณอยากเป็นคนแบบไหนในกลุ่ม?",
    options: [
      { text: "ผู้นำ มีแผน ลุยได้ทุกสถานการณ์", drink: "A" },
      { text: "คนที่คอยดูแลทุกคนให้ปลอดภัย", drink: "B" },
      { text: "คนที่ทำให้บรรยากาศสดใสและเบิกบาน", drink: "C" },
    ],
  },
  {
    question: "เมื่อมีคนที่คุณรักต้องเจอเรื่องหนักใจ คุณจะ...",
    options: [
      { text: "พยายามหาวิธีช่วยเขาให้รอด", drink: "A" },
      { text: "อยู่เคียงข้างอย่างเงียบ ๆ พร้อมสนับสนุนเสมอ", drink: "B" },
      { text: "ดึงเขาออกไปสู่อะไรสดใหม่ให้ลืมความเครียด", drink: "C" },
    ],
  },
  {
    question: "คุณให้ความสำคัญกับสิ่งใดมากที่สุด?",
    options: [
      { text: "ปัญญาและไหวพริบ", drink: "A" },
      { text: "ความซื่อสัตย์และความรัก", drink: "B" },
      { text: "อิสระและความสุขในปัจจุบัน", drink: "C" },
    ],
  },
  {
    question: "ถ้ามีโอกาสเลือกบทบาทในเรื่องราว คุณอยากเป็น...",
    options: [
      { text: "วีรบุรุษผู้เดินทาง", drink: "A" },
      { text: "คนที่ทุกคนกลับมาหา", drink: "B" },
      { text: "คนที่ช่วยให้ผู้อื่นเปล่งประกาย", drink: "C" },
    ],
  },
  {
    question: "เมื่อเจอสถานการณ์ล่อแหลม คุณ...",
    options: [
      { text: "ประเมินสถานการณ์ก่อนลงมือ", drink: "A" },
      { text: "ฟังหัวใจและคุณธรรม", drink: "B" },
      { text: "ใช้เสน่ห์และท่าทีอ่อนโยนจัดการ", drink: "C" },
    ],
  },
  {
    question: "เวลาโกรธหรือผิดหวัง คุณมักจะ...",
    options: [
      { text: "คิดก่อนแสดงออก ควบคุมตัวเอง", drink: "A" },
      { text: "เงียบและเก็บไว้", drink: "B" },
      { text: "ปล่อยผ่านไว ยิ้มแล้วเดินต่อ", drink: "C" },
    ],
  },
  {
    question: "เมื่อคุณรู้สึกเหนื่อยล้า คุณต้องการ...",
    options: [
      { text: "เวลาเงียบ ๆ ทบทวนตัวเอง", drink: "A" },
      { text: "คนที่เข้าใจมาอยู่ข้าง ๆ", drink: "B" },
      { text: "อากาศสดชื่น ทะเล หรือแสงแดด", drink: "C" },
    ],
  },
  {
    question: "คุณคิดว่าความสำเร็จในชีวิตคืออะไร?",
    options: [
      { text: "การเอาชนะอุปสรรคด้วยมันสมอง", drink: "A" },
      { text: "ความสัมพันธ์มั่นคงและการได้กลับบ้าน", drink: "B" },
      { text: "การมีชีวิตที่เบิกบานและช่วยคนอื่นได้", drink: "C" },
    ],
  },
];

const drinks = {
  A: {
    name: "✨ ชาอัญชัน",
    description:
      "คุณคือผู้ใช้ปัญญา มีความลึกซึ้ง ช่างสังเกต และไม่หยุดอยู่กับที่",
    image: A,
    god_name: "Odysseus",
    god_description: "ชายผู้มีความคิดวิเคราะห์ดีเยี่ยม ไม่ยอมแพ้ต่ออุปสรรค ใช้ไหวพริบเอาตัวรอดจากสถานการณ์ต่าง ๆ เป็นตัวแทนของ “ความเพียร” และ “ความเฉลียวฉลาด”"
  },
  B: {
    name: "🌼 ชาใบเตย",
    description: "คุณคือหัวใจของบ้าน มีความรักมั่นคง และอดทนต่อสิ่งยากลำบาก",
    image: B,
    god_name: "Penelope",
    god_description: "หญิงที่มีความจงรักภักดี อดทน และมั่นคงในความรู้สึก เป็นตัวแทนของความมั่นใจในตนเอง ความเข้มแข็งทางใจ และศรัทธาในความรัก"
  },
  C: {
    name: "🍊 ชาส้มฝาน",
    description: "คุณคือความสดใสในโลกใบนี้ เต็มไปด้วยพลังเยียวยาและเปิดใจ",
    image: C,
    god_name: "Nausicaa",
    god_description: "หญิงสาวที่มีเมตตาและความสง่างาม มักถูกมองว่าเป็นแบบอย่างของความมีน้ำใจ ความกล้าหาญ และมารยาทอ่อนโยน เธอเป็นตัวแทนของ “การต้อนรับอย่างมีเกียรติ"
  },
  "A+B": {
    name: "🍋 ชาเลม่อน",
    description: "คุณฉลาดแต่มีจิตใจอ่อนโยน พร้อมช่วยเหลือเสมอ",
    image: D,
    god_name: "Athena",
    god_description: "เทพีที่เป็นสัญลักษณ์ของสติปัญญา ความยุติธรรม และการวางแผน เป็นตัวแทนของความฉลาดหลักแหลมและการแก้ปัญหาด้วยเหตุผล ไม่ใช่อารมณ์"
  },
  "A+C": {
    name: "🌹 ชากุหลาบ",
    description: "คุณลึกลับ มีเสน่ห์ และดึงดูดคนรอบข้าง",
    image: E,
    god_name: "Circe",
    god_description: "หญิงสาวผู้มีพลังเวทมนตร์ สามารถควบคุมธรรมชาติและเปลี่ยนรูปร่างของสิ่งมีชีวิตได้ มักถูกมองว่าเป็นตัวแทนของความลึกลับ เย้ายวน และอำนาจเหนือธรรมชาติที่ผูกโยงกับธรรมชาติและพลังเพศหญิง"
  },
  "B+C": {
    name: "🌺 ชากระเจี๊ยบ",
    description: "คุณมีจิตใจดี เติบโตไว และเต็มไปด้วยพลังของคนรุ่นใหม่",
    image: F,
    god_name: "Telemachus",
    god_description: "ชายหนุ่มที่อยู่ในช่วงการเติบโต เขาเป็นภาพแทนของ “การเปลี่ยนผ่าน” จากวัยเยาว์ไปสู่วุฒิภาวะ และการแสวงหาความหมายของชีวิตและตนเอง"
  },
};

function Quiz({ onRestart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

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

    let maxDrink = maxDrinks.sort().join("+");

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

  if (result) {
    return (
      <Result
        drink={result}
        name={drinks[result].name}
        description={drinks[result].description}
        drinkImage={MatchLatte}
        restartQuiz={restartQuiz}
        godName={drinks[result].god_name}
        godImage={drinks[result].image}
        godDescription={drinks[result].god_description}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button
        className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ถัดไป &gt;
      </button>
    </div>
  );
}

export default Quiz;
