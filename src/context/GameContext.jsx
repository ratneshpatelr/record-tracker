import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [state, setState] = useState({
    decision1: null, 
    decision2: null, 
    finalDecision: null, 
  });

  const updateDecision = (step, choice) => {
    setState((prev) => ({ ...prev, [step]: choice }));
  };

  return (
    <GameContext.Provider value={{ state, updateDecision }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
