const URL_PROFESSOR = "https://escola-prisma.vercel.app/api/professor"
const LOGIN_URL = "https://escola-prisma.vercel.app/api/professor/login"

export const FetchProfessor = async (options: RequestInit) => {
  const response = await fetch(`${URL_PROFESSOR}`, options);
  const data = await response.json();
  return data;
}


export const DefaultProfessor = async (options: RequestInit, id: number) => {
  const response = await fetch(`${URL_PROFESSOR}/${id}`, options);
  const data = await response.json();
  return data;
}

export const LoginProfessor = async (options: RequestInit) => {
  const response = await fetch(`${LOGIN_URL}`, options);
  const data = await response.json();
  return data;
}

