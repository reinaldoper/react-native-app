const URL_ALUNO = "https://escola-prisma.vercel.app/api/aluno"


export const FetchAluno = async (options: RequestInit) => {
    const response = await fetch(URL_ALUNO, options);
    const data = await response.json();
    return data;
}
export const GetAlunos = async (options: RequestInit) => {
    const response = await fetch(`${URL_ALUNO}`, options);
    const data = await response.json();
    return data;
}