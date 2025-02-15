// https://next-auth.js.org/configuration/nextjs#middleware
export { default } from "next-auth/middleware";

export const config = { 
  matcher: [
    "/tasks/:path*", 
    "/api/tasks/:path*"
  ]
};

//vai interceptar quando não autenticado nas rotas do matcher e redirecionar