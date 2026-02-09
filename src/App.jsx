import React, { useState, useEffect } from "react";
import "./App.css";

const valentineWeek = {
  "2026-02-07": {
    title: "🌹 Rose Day",
    message: "A rose for the most beautiful part of my life 💕"
  },
  "2026-02-08": {
    title: "💍 Propose Day",
    message: "I don’t need a special day to choose you… but today feels perfect ❤️"
  },
  "2026-02-09": {
    title: "Chocolate Day",
    message: "Life is sweeter with you in it 😋💖"
  },
  "2026-02-10": {
    title: "Teddy Day",
    message: "Sending you the warmest hug in teddy form 🤍"
  },
  "2026-02-11": {
    title: "🤞 Promise Day",
    message: "I promise to stand by you, always...❤️"
  },
  "2026-02-12": {
    title: "Hug Day",
    message: "If I were there, I’d hug you so tight right now 💞"
  },
  "2026-02-13": {
    title: "Kiss Day",
    message: "One kiss to seal all my love for you 😘"
  },
  "2026-02-14": {
    title: "❤️ Valentine’s Day",
    message: "Happy Valentine’s Day, my favorite person forever 💘"
  }
};
const infinitePlans = [
  "Plan 1: Midnight picnic under the stars with champagne! 🌟🍾",
  "Plan 2: Spontaneous road trip to hidden beaches! 🏖️🚗",
  "Plan 3: Cooking exotic meals together in candlelight! 🕯️🍲",
  "Plan 4: Movie marathons non-stop! 🍿🎥",
  "Plan 5: Private concerts with your favorite songs! 🎶🎤",
  "Plan 6: Scuba diving in crystal-clear lagoons! 🤿🌊",
  "Plan 7: Stargazing evening! 🌟⭐",
  "Plan 8: Luxury spa days with massages and bubbles! 🛁💆‍♀️",
  "Plan 9: Coffee date in the morning! ☕😘",
  "Plan 10: Ice cream tasting adventures in quirky shops! 🍦🏪",
  "Plan 11: Karaoke nights singing duets loudly! 🎤😄",
  "Plan 12: Wine tasting in vineyards with sunsets! 🍷🌇",
  "Plan 13: Cuddles all day! 🛋️💑",
  "Plan 14: Dancing in the rain! 🌧️💃",
  "And endless more... Forever exciting! 💘"
];

function App() {
  //const today = new Date().toISOString().split("T")[0];
  const today='2026-02-14'
  const data = valentineWeek[today] || {
    title: "💌 Valentine Week",
    message: "Something special is coming… check back tomorrow 😉"
  };

  // States for special days
  const [proposeStep, setProposeStep] = useState(0); // 0: initial, 1: animating, 2: message
  const [chocoStep, setChocoStep] = useState(0); // 0: initial, 1: drop falling, 2: background change, 3: message pop, 4: button
  const [chocoShowForm, setChocoShowForm] = useState(false);
  const [chocoAddress, setChocoAddress] = useState("");
  const [teddyStep, setTeddyStep] = useState(0); // 0: initial, 1: running, 2: hugging
  const [promiseStep, setPromiseStep] = useState(0); // 0: initial, 1: falling, 2: final
  const [hugStep, setHugStep] = useState(0); // 0: initial, 1: show
  const [currentHugGif, setCurrentHugGif] = useState(0);
  const [kissStep, setKissStep] = useState(0); // 0: initial, 1: show
  const [valentineStep, setValentineStep] = useState(0); // 0: initial, 1: first ask, 2: second ask, 3: schedule
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0); // Index for cycling plans
  const [isPaused, setIsPaused] = useState(false); // Pause state for plans


  useEffect(() => {
    if (today === "2026-02-08") {
      // Propose Day: Start animation after mount
      setTimeout(() => setProposeStep(1), 1000);
      setTimeout(() => setProposeStep(2), 4000);
    } else if (today === "2026-02-09") {
      // Chocolate Day: Drop falls, background changes, message pops, button appears
      setTimeout(() => setChocoStep(1), 1000); // Drop starts falling
      setTimeout(() => setChocoStep(2), 3000); // Background changes after drop
      setTimeout(() => setChocoStep(3), 4000); // Message pops
      setTimeout(() => setChocoStep(4), 6000); // Button appears
    } else if (today === "2026-02-10") {
      // Teddy Day: Start animation
      setTimeout(() => setTeddyStep(1), 1000);
      setTimeout(() => setTeddyStep(2), 3000);
    } else if (today === "2026-02-11") {
      // Promise Day: Start falling
      setTimeout(() => setPromiseStep(1), 1000);
      setTimeout(() => setPromiseStep(2), 5000);
    } else if (today === "2026-02-12") {
      // Hug Day: Show dramatically
      setTimeout(() => setHugStep(1), 1000);
    } else if (today === "2026-02-13") {
      // Kiss Day: Show with transitions
      setTimeout(() => setKissStep(1), 1000);
    } else if (today === "2026-02-14") {
      // Valentine’s Day: Start ask
      setValentineStep(1);
    }
  }, [today]);

  useEffect(() => {
    if (valentineStep === 3) {
      const interval = setInterval(() => {
        setCurrentPlanIndex((prev) => (prev + 1) % infinitePlans.length);
      }, 50); // Change plan every 50ms (very fast)
      return () => clearInterval(interval);
    }
  }, [valentineStep]);

    const handleValentineYes = () => {
    if (valentineStep === 1) {
      setValentineStep(2);
    } else if (valentineStep === 2) {
      setValentineStep(3);
    }
  };
    const handleValentineNo = () => {
    alert("It's not allowed!");
  };

  if (today === "2026-02-08") {
    // Propose Day
    return (
      <div className="container propose-container">
        {proposeStep >= 1 && (
          <>
            <div className={`ring ${proposeStep === 1 ? "animate-ring" : ""}`}>💍</div>
            <div className={`hand ${proposeStep === 1 ? "animate-hand" : ""}`}>🤚</div>
          </>
        )}
        {proposeStep === 2 && (
          <div className="propose-message ">
            <h1 className="drop-in ">{data.title}</h1>
            <p className="drop-in-2 ">{data.message} <br></br>I LOVE YOU THE MOST!</p>
            
          </div>
        )}
      </div>
    );
  }

  if (today === "2026-02-09") {
    // Chocolate Day
    return (
      <div className={`container chocolate-container ${chocoStep >= 2 ? "chocolate-bg" : ""}`}>
        <div className="pulse1"></div>
        {chocoStep >= 1 && (
          <div className="chocolate-drop" >🍫</div>
          
          
        )}
        {chocoStep >= 3 && (
          <>
            <h1 className="chocolate-title pop-up">{data.title}</h1>
            <p className="chocolate-message pop-up">{data.message}</p>
          </>
        )}
        
      </div>
    );
  }

  if (today === "2026-02-10") {
    // Teddy Day
    return (
      <div className="container teddy-container">
        {teddyStep >= 1 && (
          <div className={`teddy ${teddyStep === 1 ? "zoom-in" : teddyStep === 2 ? "disappear" : ""}`}>🧸</div>
        )}
        {teddyStep >= 1 && (
          <div className="teddy-message">
            <h1>{data.title}</h1>
            <p>{data.message}</p>
          </div>
        )}
      </div>
    );
  }

  if (today === "2026-02-11") {
    // Promise Day
    return (
      <div className="container promise-container">
        {promiseStep >= 1 && (
          <>
            <div className="falling-promises">
              <div className="promise">I promise to love you</div>
              <div className="promise">I promise to care</div>
              <div className="promise">I promise to be there</div>
              <div className="promise final">I will be with you forever and I love you</div>
            </div>
            {promiseStep === 2 && (
              <div className="final-promise">
                <h1>{data.title}</h1>
                <p>{data.message}</p>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  if (today === "2026-02-12") {
    // Hug Day
    return (
      <div className="container hug-container">
        {hugStep === 1 && (
          <>
            <img src={"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGN1YmwyMHNhbjRnMWNpbjJjaGJsZmZrYjViM3l6Z2lyYzlveXpodSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif"} alt="Hugging" className="hug-image" />
            <div className="hug-message dramatic">
              <h1>{data.title}</h1>
              <p>{data.message}</p>
            </div>
          </>
        )}
      </div>
    );
  }

  if (today === "2026-02-13") {
    // Kiss Day
    return (
      <div className="container kiss-container">
        {kissStep === 1 && (
          <>
            <div className="kisses">
              {Array.from({ length: 50 }, (_, i) => (
                <span key={i} className="kiss" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}>
                  💋
                </span>
              ))}
            </div>
            <div className="kiss-message pop-up">
              <h1>{data.title}</h1>
              <p>{data.message}</p>
            </div>
          </>
        )}
      </div>
    );
  }

  if (today === "2026-02-14") {
    // Valentine’s Day
      return (
      <div className="container valentine-container">
        <div className="hearts-bg">
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className="floating-heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }}>
              ❤️
            </span>
          ))}
        </div>
        {valentineStep === 1 && (
          <div className="valentine-ask slide-in">
            <h2>💖 Will you be my Valentine? 💖</h2>
            <button className="yes-btn" onClick={handleValentineYes}>Yes! 💕</button>
            <button className="no-btn" onClick={handleValentineNo}>No 😢</button>
          </div>
        )}
        {valentineStep === 2 && (
          <div className="valentine-ask slide-in">
            <h2>🌹 Are you sure? Will you be my Valentine? 🌹</h2>
            <button className="yes-btn" onClick={handleValentineYes}>Absolutely Yes! 💖</button>
            <button className="no-btn" onClick={handleValentineNo}>No 😔</button>
          </div>
        )}
        {valentineStep === 3 && (
          <div className="infinite-plan slide-in">
            <h2>🎉 Our Date Plans! 🎉</h2>
            <p className="fast-plan">{infinitePlans[currentPlanIndex]}</p>
            <p>Send me the screenshot of the plan! 📸❤️</p>
          </div>
        )}
      </div>
    );
  }

  // Default for other days
  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p>{data.message}</p>
    </div>
  );
}

export default App;