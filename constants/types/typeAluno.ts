export interface Professor {
  id: string,
  nome: string,
  role: string,
  disciplina: string,
  email: string,
}

export interface message {
  id: string;
  nome: string;
  role: string;
  email: string;
  professor: Professor;
  createdAt: string;
  notas: string;
}