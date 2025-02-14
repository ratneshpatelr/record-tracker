import React from "react";
import "../styles.css";

const OutcomeScreen = ({ choices, restart }) => {
  const getFeedback = () => {
    if (choices.step1 === "centralized") {
      if (choices.step2 === "restricted" && choices.step3 === "secure_backup") {
        return "✅ Great job! Your centralized system maintains efficiency while ensuring controlled access and strong cybersecurity.";
      } else if (choices.step2 === "open") {
        return "⚠️ Your centralized system allowed open access, leading to a data breach. Implement better access control!";
      } else {
        return "⚠️ Your cybersecurity framework was weak, making your centralized system vulnerable.";
      }
    } else {
      if (choices.step2 === "guidelines" && choices.step3 === "disaster_plan") {
        return "✅ Well done! Your decentralized system follows structured guidelines and a solid disaster recovery plan.";
      } else if (choices.step2 === "autonomy") {
        return "⚠️ Your decentralized system lacked security, leading to data inconsistencies. Consider standardizing guidelines.";
      } else {
        return "⚠️ Your system was decentralized, but poor disaster planning led to major data loss.";
      }
    }
  };

  return (
    <div className="container">
      <h2>Simulation Completed 🎉</h2>
      <p>{getFeedback()}</p>
      <button onClick={restart}>Restart Simulation 🔄</button>
    </div>
  );
};

export default OutcomeScreen;
