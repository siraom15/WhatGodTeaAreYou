import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import pumpkinSpiceLatte from '../images/pumpkin-spice-latte.png';
import goldenMilk from '../images/golden-milk.png';
import chaiLatte from '../images/chai-latte.png';
import hotChocolate from '../images/hot-chocolate.png';
import peppermintMocha from '../images/peppermint-mocha.png';
import matchaLatte from '../images/matcha-latte.png';


const questions = [
  {
    question: "You’ve just arrived at the cabin. What’s the view like outside?",
    options: [
      { text: "A misty forest with snow-dusted pines.", drink: "Matcha Latte" },
      { text: "A sunny mountain landscape glistening with snow.", drink: "Golden Milk" },
      { text: "A cozy clearing surrounded by snow-covered trees.", drink: "Hot Chocolate" }
    ]
  },
  // Add more questions here
];

const drinks = {
  "Pumpkin Spice Latte": { image: pumpkinSpiceLatte, compatible: "Golden Milk" },
  "Golden Milk": { image: goldenMilk, compatible: "Peppermint Mocha" },
  "Chai Latte": { image: chaiLatte, compatible: "Hot Chocolate" },
  "Hot Chocolate": { image: hotChocolate, compatible: "Matcha Latte" },
  "Peppermint Mocha": { image: peppermintMocha, compatible: "Pumpkin Spice Latte" },
  "Matcha Latte": { image: matchaLatte, compatible: "Chai Latte" }
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(drink) {
    setScores((prevScores) => ({
      ...prevScores,
      [drink]: (prevScores[drink] || 0) + 1
    }));

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrink = null;
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrink = drink;
        maxScore = score;
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  }

  if (result) {
    const compatible = drinks[result].compatible;
    return (
      <Result
        drink={result}
        compatible={compatible}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <Question
      question={questions[currentQuestion].question}
      options={questions[currentQuestion].options}
      onAnswer={handleAnswer}
    />
  );
}

export default Quiz;
