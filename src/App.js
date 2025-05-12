import React, { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import theCabin from "./images/the-cabin.png";
import "./App.css";
import { getText } from "./translations";

const App = () => {
  // Set language from localStorage or default to 'th'
  const storedLanguage = localStorage.getItem("language");
  const defaultLanguage = storedLanguage || "th";
  const [language, setLanguage] = useState(defaultLanguage);

  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  // for testing we will recieve result from query params, load once

  // and set showStartPage to false
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const testResult = urlParams.get("result");
  //   if (testResult) {
  //     console.log("Test Result: ", testResult);
  //     setShowStartPage(false);
  //   }
  // }, []);

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page itim-regular">
            <img src={theCabin} height={800} alt="The Cozy Cabin Cafe" />

            <h1>{getText("title", language)}</h1>

            <p>{getText("instructions", language)}</p>
            <button onClick={handleStartQuiz}>
              {getText("startButton", language)}
            </button>
            <div className="language-selection itim-regular">
              {getText("language", language)}:
              <select
                value={language}
                onChange={(e) => {
                  const selectedLanguage = e.target.value;
                  setLanguage(selectedLanguage);
                  localStorage.setItem("language", selectedLanguage);
                }}
              >
                <option value="th">ภาษาไทย</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        ) : (
          <Quiz onRestart={() => setShowStartPage(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
