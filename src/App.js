import React, {useState} from "react";
import Quiz from "./components/Quiz";
import theCabin from './images/the-cabin.png';
import "./App.css"

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page">
            <img src={theCabin} alt="The Cozy Cabin Cafe"/>

            <h1>Welcome to the Cozy Cabin Cafe!</h1>
            
            <p>
              Season’s greetings, winter traveler!
              Sit back and relax while we brew something special for you!
            </p>
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
};

export default App;
