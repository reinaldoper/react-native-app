const URL_ALUNO = "https://escola-prisma.vercel.app/api/aluno"


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

