import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import pumpkinSpiceLatte from '../images/pumpkin-spice-latte.png';
import goldenMilk from '../images/golden-milk.png';
import chaiLatte from '../images/chai-latte.png';
import hotChocolate from '../images/hot-chocolate.png';
import peppermintMocha from '../images/peppermint-mocha.png';
import matchaLatte from '../images/matcha-latte.png';
import theCabin from '../images/the-cabin.png';


const questions = [
  {
    question: "Before you settle in, pick a pastry to enjoy with your drink. It's on the house!",
    options: [
      { text: "A delicate pastry with a light texture and just the right touch of sweetness.", drink: "Matcha Latte" },
      { text: "A warm, spiced muffin that feels like a hug in every bite.", drink: "Golden Milk" },
      { text: "A soft, melty cookie that brings a smile to your face.", drink: "Hot Chocolate" }
    ]
  },
  {
    question: "As you head toward the tables, you spot your friend! Who is it?",
    options: [
      { text: "Blizzard the Polar Bear: A lively and playful bear who always knows how to make the season feel magical.", drink: "Peppermint Mocha" },
      { text: "Maple the Red Fox: A nostalgic and warm-hearted fox who loves reminiscing about cozy winter days.", drink: "Pumpkin Spice Latte" },
      { text: "Aspen the Snowy Owl: A curious and adventurous owl who always has exciting stories to share.", drink: "Chai Latte" }
    ]
  },
  {
    question: "Your friend has a winter gift for you! You carefully unwrap it and find...",
    options: [
      { text: "A cozy scarf in warm, earthy tones that feels like a big hug.", drink: "Pumpkin Spice Latte" },
      { text: "A handmade mug with a charming design, perfect for sipping something sweet.", drink: "Hot Chocolate" },
      { text: "A shiny snow globe that sparkles with festive magic.", drink: "Peppermint Mocha" }
    ]
  },
  {
    question: "You wish your friend a happy winter, then look for a place to settle in. Which do you choose?",
    options: [
      { text: "A spot by the fireplace, where the warmth and festive cheer are irresistible.", drink: "Peppermint Mocha" },
      { text: "A cozy corner with a big, comfy chair and a stack of books to browse.", drink: "Matcha Latte" },
      { text: "A window seat, where you can watch the snow fall and dream of new adventures.", drink: "Chai Latte" }
    ]
  },
  {
    question: "While you wait, a musician begins to play in the café! What tune fills the air?",
    options: [
      { text: "A soft, mellow melody on an acoustic guitar, soothing and soulful.", drink: "Golden Milk" },
      { text: "A cheerful piano tune that feels like the soundtrack to a cozy winter movie.", drink: "Hot Chocolate" },
      { text: "A lively violin piece that makes you want to twirl like snowflakes in the air.", drink: "Chai Latte" }
    ]
  },
  {
    question: "The scene is set: snacks, music, and cozy vibes. You reach into your bag to add the finishing touch. What do you pull out?",
    options: [
      { text: "A well-loved journal, perfect for jotting down your thoughts and dreams.", drink: "Pumpkin Spice Latte" },
      { text: "A beautifully illustrated book, ready to whisk you away to another world.", drink: "Matcha Latte" },
      { text: "A soft-knit blanket, perfect for wrapping yourself up in comfort.", drink: "Golden Milk" }
    ]
  },
  
  
  // Add more questions here
];

const drinks = {
  "Pumpkin Spice Latte": { 
    image: pumpkinSpiceLatte, 
    compatible: "Golden Milk", 
    description: "You are cozy, warm, and full of delightful nostalgia. You cherish traditions and the little things that make life sweet, like the scent of cinnamon and crisp autumn air. Your approachable, down-to-earth nature makes you the perfect companion for those cozy afternoons and good times with friends!" 
  },
  "Golden Milk": { 
    image: goldenMilk, 
    compatible: "Peppermint Mocha", 
    description: "You are radiant, kind-hearted, and full of positive energy. You thrive on creating warmth and comfort for others, always offering a sense of care and wisdom. Your nurturing spirit lights up any room, and your joyful outlook spreads peace and happiness wherever you go!" 
  },
  "Chai Latte": { 
    image: chaiLatte, 
    compatible: "Hot Chocolate", 
    description: "You are vibrant, adventurous, and always up for an exciting journey! You dive into life with energy and enthusiasm, seeking out new challenges and flavors to experience. Your fearless curiosity makes every day an adventure, and you're always ready for what comes next!" 
  },
  "Hot Chocolate": { 
    image: hotChocolate, 
    compatible: "Matcha Latte", 
    description: "You are sweet, comforting, and always a friend to turn to. You find joy in simple pleasures, like sharing cozy moments and making everyone feel special. Your kindness and warmth make you the heart of any gathering, and you love spreading smiles wherever you go!" 
  },
  "Peppermint Mocha": { 
    image: peppermintMocha, 
    compatible: "Pumpkin Spice Latte", 
    description: "You are lively, energetic, and ready to make every moment unforgettable! You thrive in the hustle and bustle of the season, bringing excitement and cheer wherever you are. With your perfect mix of fun and warmth, you're always the life of the party and the spark of every celebration!" 
  },
  "Matcha Latte": { 
    image: matchaLatte, 
    compatible: "Chai Latte", 
    description: "You are serene, thoughtful, and have a natural calmness that others admire. You embrace the beauty in life's quiet moments and enjoy reflecting on what truly matters. Your peaceful presence radiates creativity and balance, making every day feel just a little brighter and more meaningful." 
  }
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
        description={drinks[result].description}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <>
      <img src={theCabin} />
      
      <Question
      question={questions[currentQuestion].question}
      options={questions[currentQuestion].options}
      onAnswer={handleAnswer}
      />
    </>

  );
}

export default Quiz;
