import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import DecisionPoint from "./components/DecisionPoint";
import OutcomeScreen from "./components/OutcomeScreen";
import "./styles.css";

function App() {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState({});

  const nextStep = (choice) => {
    setChoices({ ...choices, [`step${step}`]: choice });
    setStep(step + 1);
  };

  const restartSimulation = () => {
    setChoices({});
    setStep(0);
  };

  return (
    <div className="app">
      {step === 0 && <StartScreen next={() => setStep(1)} />}
      {step === 1 && (
        <DecisionPoint
          question="Choose a record-keeping system:"
          options={[
            { label: "📂 Centralized System", value: "centralized" },
            { label: "📁 Decentralized System", value: "decentralized" },
          ]}
          next={nextStep}
        />
      )}
      {step === 2 && (
        <DecisionPoint
          question={
            choices.step1 === "centralized"
              ? "How will you ensure quick access?"
              : "How will you maintain consistency?"
          }
          options={
            choices.step1 === "centralized"
              ? [
                  { label: "🔒 Grant restricted access", value: "restricted" },
                  { label: "⚠️ Allow open access", value: "open" },
                ]
              : [
                  { label: "📝 Set up strict guidelines", value: "guidelines" },
                  { label: "⚠️ Allow full autonomy", value: "autonomy" },
                ]
          }
          next={nextStep}
        />
      )}
      {step === 3 && (
        <DecisionPoint
          question="A cyberattack/data loss event occurs! How do you respond?"
          options={
            choices.step1 === "centralized"
              ? [
                  { label: "🛡️ Implement a strong backup & cybersecurity framework", value: "secure_backup" },
                ]
              : [
                  { label: "📜 Ensure departments follow a common disaster recovery plan", value: "disaster_plan" },
                ]
          }
          next={nextStep}
        />
      )}
      {step === 4 && <OutcomeScreen choices={choices} restart={restartSimulation} />}
    </div>
  );
}

export default App;
