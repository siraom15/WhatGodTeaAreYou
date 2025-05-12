import React from "react";
import theCabin from '../images/the-cabin.png';
import "../styles/question.css"

function Question({ question, options, onAnswer, selectedAnswer, language }) {
  return (
    <div className="question-page">
      <img src={theCabin} alt="The Cozy Cabin Cafe"/>
      <h1>{ language === 'en' ? question.questionEng : question.questionTH}</h1>
      {options.map((option, index) => (
        <button key={index} 
                onClick={() => onAnswer(option.drink)}
                className={selectedAnswer === option.drink ? "selected" : ""}>
          { language === 'en' ? option.textEng : option.textTH}
        </button>
      ))}
    </div>
  );
}

export default Question;
