export interface Professor {
  id: string,
  nome: string,
  role: string,
  disciplina: string,
  email: string,
}

export interface Nota {
  id: number,
  aluno: string,
  alunoId: number,
  valor: number,
  semestre: number,
}

export interface message {
  id?: string;
  nome: string;
  role: string;
  email: string;
  professor: Professor;
  createdAt?: string;
  notas: Nota[];
}

export interface AlunoContext {
  aluno: message | null;
  login: (userData: message) => void;
  logout: () => void;
}