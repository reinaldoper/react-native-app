const URL_ALUNO = "https://escola-prisma.vercel.app/api/aluno"
const URL_ALUNO_EMAIL = "https://escola-prisma.vercel.app/api/aluno/email"


export const FetchAluno = async (options: RequestInit) => {
    const response = await fetch(URL_ALUNO, options);
    const data = await response.json();
    return data;
}

export const GetAlunos = async (options: RequestInit, id: number) => {
    if (id > 0) {
        const response = await fetch(`${URL_ALUNO}/${id}`, options);
        const data = await response.json();
        return data;
    } else {
        const response = await fetch(URL_ALUNO, options);
        const data = await response.json();
        return data;
    }
    
}

export const GetAlunoByEmail = async (options: RequestInit) => {
    const response = await fetch(`${URL_ALUNO_EMAIL}`, options);
    const data = await response.json();
    return data;
}

