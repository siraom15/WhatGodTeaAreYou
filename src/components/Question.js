import React from "react";
import theCabin from '../images/the-cabin.png';
import "../styles/question.css"

function Question({ question, options, onAnswer, selectedAnswer }) {
  return (
    <div className="question-page">
      <img src={theCabin} alt="The Cozy Cabin Cafe"/>

      <h1>{question}</h1>
      {options.map((option, index) => (
        <button key={index} 
                onClick={() => onAnswer(option.drink)}
                className={selectedAnswer === option.drink ? "selected" : ""}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
