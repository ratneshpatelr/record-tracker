import React from "react";
import "../styles.css";

const DecisionPoint = ({ question, options, next }) => {
  return (
    <div className="container">
      <h2>{question}</h2>
      {options.map(({ label, value }) => (
        <button key={value} className="decision-button" onClick={() => next(value)}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default DecisionPoint;
