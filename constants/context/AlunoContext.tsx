import React, { createContext, useState, useContext, ReactNode } from "react";
import { message, AlunoContext } from "../types/typeAluno";


export const Context = createContext<AlunoContext | null>(null);

export const AlunoProvider = ({ children }: { children: ReactNode }) => {
  const [aluno, setAluno] = useState<message | null>(null);

  const login = (userData: message) => {
    setAluno(userData);
  };

  const logout = () => {
    setAluno(null);
  };

  return (
    <Context.Provider value={{ aluno, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useAluno = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Há um erro no seu Provider!");
  }
  return context;
};
