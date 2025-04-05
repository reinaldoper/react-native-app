import React, { createContext, useState, useContext, ReactNode } from "react";
import { message, ProfessorContext } from "../types/typesProfessor"; 


export const Context = createContext<ProfessorContext | null>(null);

export const ProfessorProvider = ({ children }: { children: ReactNode }) => {
  const [professor, setProfessor] = useState<message | null>(null);

  const login = (userData: message) => {
    setProfessor(userData);
  };

  const logout = () => {
    setProfessor(null);
  };

  return (
    <Context.Provider value={{ professor, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useProfessor = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Há um erro no seu Provider!");
  }
  return context;
};
