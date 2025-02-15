import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"; //provedores sendo selecionado o GitHub
//Implementação da rota de autenticação
const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
};
const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST };
//métodos a serem servidos pela rota