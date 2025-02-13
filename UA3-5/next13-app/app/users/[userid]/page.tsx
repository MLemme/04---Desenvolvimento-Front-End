import React, { Suspense } from 'react'
import User from './User'

//função adaptada para ser uma rota dinâmica
// async function getUsers(userId : string) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
//     const users = await response.json();
//     return users;
// }

// async function createUser() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }

export default async function Page({params} : any) {
//export default async function Page(  {params} : {params : {userid : string}}){
    // const user : User = await getUsers(params.userid);
    //console.log(params.userid);
    return (
        // <div>
        // <p>Nome: {user.name}</p>
        // <p>E-mail: {user.email}</p>
        // </div>
        //Exemplo de execução paralela uma vez que cada compoente vai levar seu tempo próprio e só ao final será renderizado para o usuário
        //Suspense irá fazer com que o loading apareça em paralelo as buscas
        <>
            <Suspense fallback={<div>Loading User 1...</div>}>
                <User userId={params.userid} />
            </Suspense>
            <Suspense fallback={<div>Loading User 2...</div>}>
                <User userId={params.userid} />
            </Suspense>
            <Suspense fallback={<div>Loading User 3...</div>}>
                <User userId={params.userid} />
            </Suspense>
        </>
    )
}

// //inclusão de função assincrona que torna a rota estatica, ou parametros estaticos durante o processo de construção buscando todos os dados de usuario antes de tudo
// export async function generateStaticParams (){
//     const users: User[] = await createUser();
//     return users.map(user => ({
//         params: {
//             userId: user.id.toString()
//         }
//     })) //a estrutura de parenteses garante que o retorno é um objeto, rejeitando uso de return na arrow func
// }
