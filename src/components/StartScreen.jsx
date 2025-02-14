import React from "react";
import "../styles.css";

const StartScreen = ({ next }) => {
  return (
    <div className="container">
      <h1>Welcome, Records Manager!</h1>
      <p>
        Your organization is upgrading its record-keeping system. Your choices will determine efficiency and security.
      </p>
      <button onClick={next}>Start Decision-Making 🚀</button>
    </div>
  );
};

export default StartScreen;
