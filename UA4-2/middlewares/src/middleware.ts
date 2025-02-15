import { NextRequest, NextResponse } from "next/server";

//funciona como uma caminho intermediario das rotas
export function middleware(req: NextRequest){
    //console.log(req);
    //return NextResponse.redirect(new URL("/mid",req.url)); //Executada pela interceptação baseada em padrão

    // //obtenção de cookies
    // console.log(req.cookies.get('nextjs'));
    // //definição de cookies
    // console.log(req.cookies.set('nextjs','true'));
    // //ou
    // //console.log(req.cookies.set({nextjs: 'true'}));
    // //exibir cookies
    // console.log(req.cookies.getAll());

    // const response = NextResponse.next();

    // response.cookies.set('nextjs','true');
    // //exibir cookies
    // console.log(response.cookies.getAll());

    const reqHeaders = new Headers(req.headers);
    reqHeaders.set('x-hello-from-middleware', 'hello');


    return NextResponse.redirect(new URL("/",req.url)); //Executada pela interceptação baseada em padrão
    
    //Interceptação condicional
    // if(req.nextUrl.pathname.startsWith("/about")){
    //     return NextResponse.redirect(new URL("/",req.url)); 
    // }
    //if(req.nextUrl.pathname.startsWith("/mid")){
    //    return NextResponse.redirect(new URL("/home",req.url));
    //}
    
    
}

//Sem está configuração, todas as rotas passam a ser interceptadas
//export const config = {
//    matcher: "/home"
//}

//Interceptação baseada em padrões
export const config = {
    matcher: "/about/:path*"
}