
const URL_LOGIN_DIRETOR = "https://escola-prisma.vercel.app/api/diretor/login"
const URL_DIRETOR = "https://escola-prisma.vercel.app/api/diretor"

export const FetchDiretor = async (options : RequestInit ) => {
    const response = await fetch(URL_DIRETOR, options);
    const data = response.json();
    return data;
}

export const LoginDiretor = async (options : RequestInit ) => {
    const response = await fetch(URL_LOGIN_DIRETOR, options);
    const data = response.json();
    return data;
}


