import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

import pumpkinSpiceLatte from '../images/pumpkin-spice-latte.png';
import goldenMilk from '../images/golden-milk.png';
import chaiLatte from '../images/chai-latte.png';
import hotChocolate from '../images/hot-chocolate.png';
import peppermintMocha from '../images/peppermint-mocha.png';
import matchaLatte from '../images/matcha-latte.png';

const questions = [
  {
    question: "Before you settle in, pick a pastry to enjoy with your drink. It's on the house!",
    options: [
      { text: "A delicate macaron with just the right amount of sweetness.", drink: "Matcha Latte" },
      { text: "A warm, spiced muffin that feels like a hug in every bite.", drink: "Golden Milk" },
      { text: "A soft and chewy cookie with chocolate chips throughout.", drink: "Hot Chocolate" }
    ]
  },
  {
    question: "As you head toward the seating area, you spot a friend! Who is it?",
    options: [
      { text: "Blizzard: A playful polar bear who always knows how to cheer you up.", drink: "Peppermint Mocha" },
      { text: "Maple: A warm-hearted fox who loves reminiscing on cozy winter days.", drink: "Pumpkin Spice Latte" },
      { text: "Aspen: A curious and adventurous owl with exciting stories to share.", drink: "Chai Latte" }
    ]
  },
  {
    question: "Your friend hands you a present! You carefully unwrap it and find...",
    options: [
      { text: "A fluffy scarf to keep you cozy in the freezing cold.", drink: "Pumpkin Spice Latte" },
      { text: "A handmade mug with a charming design, perfect for a sip of something warm.", drink: "Hot Chocolate" },
      { text: "A shiny snow globe with sparkles to bring the winter cheer.", drink: "Peppermint Mocha" }
    ]
  },
  {
    question: "Time to find a seat in the cafe! Which do you choose?",
    options: [
      { text: "A spot by the fireplace, where the warmth and festive cheer are irresistible.", drink: "Peppermint Mocha" },
      { text: "A cozy corner with a big, comfy chair and a stack of books for browsing.", drink: "Matcha Latte" },
      { text: "A window seat, where you can watch the snow fall and dream of new adventures.", drink: "Chai Latte" }
    ]
  },
  {
    question: "While you wait, a musician begins to play in the café! What tune fills the air?",
    options: [
      { text: "A soft melody on an acoustic guitar, soothing and soulful.", drink: "Golden Milk" },
      { text: "A cheerful piano tune, like the soundtrack to a classic winter movie.", drink: "Hot Chocolate" },
      { text: "A lively fiddle piece that makes you want to get up and dance!", drink: "Chai Latte" }
    ]
  },
  {
    question: "The scene is set: snacks, music, and cozy vibes. You reach into your bag for a finishing touch. What do you pull out?",
    options: [
      { text: "A well-loved journal, perfect for jotting down your thoughts and dreams.", drink: "Pumpkin Spice Latte" },
      { text: "A beautifully illustrated book, ready to whisk you away to another world.", drink: "Matcha Latte" },
      { text: "A soft-knit blanket, perfect for wrapping yourself up in comfort.", drink: "Golden Milk" }
    ]
  },
];

const drinks = {
  "Pumpkin Spice Latte": { 
    image: pumpkinSpiceLatte, 
    compatible: "Golden Milk", 
    description: "You are cozy, warm, and delightfully nostalgic. You cherish traditions and the little things that make life sweet, like the scent of cinnamon and crisp autumn air. Your approachable, down-to-earth nature makes you the perfect companion for those cozy afternoons and good times with friends!" 
  },
  "Golden Milk": { 
    image: goldenMilk, 
    compatible: "Pumpkin Spice Latte", 
    description: "You are radiant, kind-hearted, and full of positive energy. You love creating warmth and comfort for others, always offering care and wisdom. Your nurturing spirit lights up any room, and your joyful outlook spreads peace and happiness wherever you go!" 
  },
  "Chai Latte": { 
    image: chaiLatte, 
    compatible: "Matcha Latte", 
    description: "You are vibrant, adventurous, and always ready for a good time! You dive into life with energy and enthusiasm, seeking out new challenges and flavors to experience. Your curiosity makes every day an adventure, and you're always ready to tackle what comes next!" 
  },
  "Hot Chocolate": { 
    image: hotChocolate, 
    compatible: "Peppermint Mocha", 
    description: "You are sweet, comforting, and a dependable friend. You find joy in simple pleasures, like sharing cozy moments and making everyone feel appreciated. You're the heart of any gathering, and you make people smile wherever you go!" 
  },
  "Peppermint Mocha": { 
    image: peppermintMocha, 
    compatible: "Hot Chocolate", 
    description: "You are lively, energetic, and ready to make every moment unforgettable! You thrive in the hustle and bustle of the season, bringing excitement and cheer wherever you are. With your perfect mix of fun and warmth, you're the life of the party!" 
  },
  "Matcha Latte": { 
    image: matchaLatte, 
    compatible: "Chai Latte", 
    description: "You are serene, thoughtful, and have a natural calmness that others admire. You embrace the beauty in life's quiet moments and enjoy reflecting on what truly matters. Your personality radiates creativity and balance, making every day feel just a little brighter and more meaningful." 
  }
};

function Quiz() {
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
        description={drinks[result].description}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        restartQuiz={restartQuiz}
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

      <button className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        Next &gt;
      </button>
    </div>
);
}

export default Quiz;
