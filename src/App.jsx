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
    title: "🍫 Chocolate Day",
    message: "Life is sweeter with you in it 😋💖"
  },
  "2026-02-10": {
    title: "🧸 Teddy Day",
    message: "Sending you the warmest hug in teddy form 🤍"
  },
  "2026-02-11": {
    title: "🤞 Promise Day",
    message: "I promise to stand by you, always 🌈"
  },
  "2026-02-12": {
    title: "🤗 Hug Day",
    message: "If I were there, I’d hug you so tight right now 💞"
  },
  "2026-02-13": {
    title: "💋 Kiss Day",
    message: "One kiss to seal all my love for you 😘"
  },
  "2026-02-14": {
    title: "❤️ Valentine’s Day",
    message: "Happy Valentine’s Day, my favorite person forever 💘"
  }
};

function App() {
  const today = new Date().toISOString().split("T")[0];
  //const today='2026-02-09'
  const data = valentineWeek[today] || {
    title: "💌 Valentine Week",
    message: "Something special is coming… check back tomorrow 😉"
  };

  // States for special days
  const [proposeStep, setProposeStep] = useState(0); // 0: initial, 1: animating, 2: message
  const [chocoShowForm, setChocoShowForm] = useState(false);
  const [chocoAddress, setChocoAddress] = useState("");
  const [teddyStep, setTeddyStep] = useState(0); // 0: initial, 1: running, 2: hugging
  const [promiseStep, setPromiseStep] = useState(0); // 0: initial, 1: falling, 2: final
  const [hugStep, setHugStep] = useState(0); // 0: initial, 1: show
  const [kissStep, setKissStep] = useState(0); // 0: initial, 1: show
  const [valentineStep, setValentineStep] = useState(0); // 0: initial, 1: first ask, 2: second ask, 3: schedule
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (today === "2026-02-08") {
      // Propose Day: Start animation after mount
      setTimeout(() => setProposeStep(1), 1000);
      setTimeout(() => setProposeStep(2), 4000);
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

  const handleChocoSubmit = (e) => {
    e.preventDefault();
    // Simulate email sending (in real app, use EmailJS or backend)
    alert(`Address "${chocoAddress}" mailed to your email!`);
    setChocoShowForm(false);
    setChocoAddress("");
  };

  const handleValentineYes = () => {
    if (valentineStep === 1) {
      setValentineStep(2);
    } else if (valentineStep === 2) {
      setValentineStep(3);
    }
  };

  const handleValentineSchedule = (e) => {
    e.preventDefault();
    alert(`Meet scheduled for ${selectedDate}!`);
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
      <div className="container chocolate-container">
        <div className="chocolate-spill"></div>
        <h1 className="chocolate-title">{data.title}</h1>
        <p className="chocolate-message">{data.message}</p>
        <button className="chocolate-button" onClick={() => setChocoShowForm(true)}>
          🍫 Send Chocolate
        </button>
        {chocoShowForm && (
          <form onSubmit={handleChocoSubmit} className="address-form">
            <input
              type="text"
              placeholder="Enter your address"
              value={chocoAddress}
              onChange={(e) => setChocoAddress(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }

  if (today === "2026-02-10") {
    // Teddy Day
    return (
      <div className="container teddy-container">
        <div className={`teddy ${teddyStep === 1 ? "run" : teddyStep === 2 ? "hug" : ""}`}>🧸</div>
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
            <img src="https://via.placeholder.com/300x200?text=Hugging" alt="Hugging" className="hug-image" />
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
              <span className="kiss">💋</span>
              <span className="kiss">😘</span>
              <span className="kiss">💕</span>
              <span className="kiss">❤️</span>
            </div>
            <div className="kiss-message">
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
        {valentineStep === 1 && (
          <div className="valentine-ask">
            <p>Will you be my Valentine?</p>
            <button onClick={handleValentineYes}>Yes</button>
            <button disabled>No</button>
          </div>
        )}
        {valentineStep === 2 && (
          <div className="valentine-ask">
            <p>Are you sure? Will you be my Valentine?</p>
            <button onClick={handleValentineYes}>Yes</button>
            <button disabled>No</button>
          </div>
        )}
        {valentineStep === 3 && (
          <form onSubmit={handleValentineSchedule} className="schedule-form">
            <p>Let's schedule a meet!</p>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
            <button type="submit">Schedule</button>
          </form>
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