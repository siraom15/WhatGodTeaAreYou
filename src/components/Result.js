import React from "react";
import "../styles/result.css"

function Result({ drink, compatible, description, drinkImage, compatibleImage, restartQuiz }) {
  return (
    <div className='borderedArea'>
      <div className="resultContainer">
        <div className='resultHeader'>
          <h3>⋆˙⟡ Your special drink is ready! ✧˙⋆</h3>
        </div>
        
        <div className='resultDrink'>
          <h1>{drink}</h1>
            <img src={drinkImage} alt={drink} />
            <p>{description}</p>
        </div>

        <div className='resultPair'>

          <div className="pairLeft">
            <h4>Your perfect pair</h4>
            <h3>{compatible}</h3>
          </div>

          <div className='pairRight'>
            <img src={compatibleImage} alt={compatible} />
          </div>
        </div>
        <div className='attribution'><a href="https://instagram.com/notekating">Cozy Cabin Cafe Quiz by IG@notekating</a></div>
      </div>
      
      <button className='quizAgain' onClick={restartQuiz}>Take the Quiz Again &gt;</button>
    </div>
  );
}

export default Result;
