export interface message {
  id: string,
  nome: string,
  role: string,
  disciplina: string,
  email: string,
}


export interface ProfessorContext {
  professor: message | null;
  login: (userData: message) => void;
  logout: () => void;
}