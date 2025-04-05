import React, { createContext, useState, useContext, ReactNode } from "react";
import { message, AuthContextType } from "../types/diretorType"; 


export const Context = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [diretor, setDiretor] = useState<message | null>(null);

  const login = (userData: message) => {
    setDiretor(userData);
  };

  const logout = () => {
    setDiretor(null);
  };

  return (
    <Context.Provider value={{ diretor, login, logout }}>
      {children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Há um erro no seu Provider!");
  }
  return context;
};
