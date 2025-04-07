const URL_NOTAS = "https://escola-prisma.vercel.app/api/notas";

export const FetchNotas = async (options: RequestInit) => {
    const response = await fetch(URL_NOTAS, options);
    const data = await response.json();
    return data;
}