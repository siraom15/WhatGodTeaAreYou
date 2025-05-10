import React from "react";
import "../styles/result.css";

function Result({
  drink,
  description,
  drinkImage,
  restartQuiz,
  name,
  godName,
  godImage,
  godDescription,
}) {
  return (
    <div className="borderedArea">
      <div className="resultContainer">
        <div className="resultHeader">
          <h3>˙⋆❅ Your Special Drink ❅˙⋆</h3>
        </div>

        <div className="resultDrink">
          <h1>คุณเปรียบเสมือน "{godName}"</h1>
          <img src={godImage} alt={drink} />
          <p>{godDescription}</p>
        </div>

        <div className="resultPair">
          <div className="pairLeft">
            <h4>ชาที่เหมาะกับคุณ</h4>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="pairRight">
            <img src={drinkImage} alt={drink} />
          </div>
        </div>
      </div>
      <div class="attribution">
        {/* <a
          href="https://instagram.com/notekating"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cozy Cabin Cafe Quiz by IG@notekating
        </a> */}
      </div>

      <button className="quizAgain" onClick={restartQuiz}>
        ทำแบบทดสอบอีกครั้ง &gt;
      </button>
    </div>
  );
}

export default Result;
