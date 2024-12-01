import React from "react";

function Question({ question, options, onAnswer }) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option.drink)}>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
