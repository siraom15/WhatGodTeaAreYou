import React, { useState } from "react";
import Quiz from "./components/Quiz";
import theCabin from "./images/the-cabin.png";
import "./App.css";

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page itim-regular">
            <img src={theCabin} height={800}  alt="The Cozy Cabin Cafe" />

            <h1>ถ้าคุณอยู่ใน The Odyssey... คุณคือ "ชา" แบบไหน?</h1>

            <p>
              คำแนะนำ:
              เลือกตัวเลือกที่ตรงกับความรู้สึกหรือพฤติกรรมของคุณมากที่สุด
            </p>
            <button onClick={handleStartQuiz}>เริ่มกันเลย !</button>
          </div>
        ) : (
          <Quiz onRestart={() => setShowStartPage(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
