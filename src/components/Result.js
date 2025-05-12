import React from "react";
import "../styles/result.css";
import { getText } from "../translations";

function Result({
  drink,
  description,
  restartQuiz,
  name,
  godName,
  godImage,
  godDescription,
  teaImage,
  language,
}) {
  return (
    <div className="borderedArea">
      <div className="resultContainer">
        <div className="resultHeader">
          <h3>˙⋆❅ {getText("resultTitle", language)} ❅˙⋆</h3>
        </div>

        <div className="resultDrink">
          <h1>
            {getText("resultLike", language)} "{godName}"
          </h1>
          <img src={godImage} alt={drink} />
          <p>{godDescription}</p>
        </div>

        <div className="resultPair">
          <div className="pairLeft">
            <h4>{getText("teaForYou", language)}</h4>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <div className="pairRight">
            <img src={teaImage} alt={drink} />
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
        {getText("retest", language)} &gt;
      </button>
    </div>
  );
}

export default Result;
