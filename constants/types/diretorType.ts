export interface message {
  id: string;
  role: string;
  createdAt: string;
  nome: string;
  email: string;
}

export interface AuthContextType {
  diretor: message | null;
  login: (userData: message) => void;
  logout: () => void;
}