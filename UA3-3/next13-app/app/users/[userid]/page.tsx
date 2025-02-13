import React from 'react'

//função adaptada para ser uma rota dinâmica
async function getUsers(userId : string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const users = await response.json();
    return users;
  }

//export default async function user({params} : any) {
export default async function user(  {params} : {params : {userid : string}}){
    const user : User = await getUsers(params.userid);
    console.log(params.userid);
    return (
        <div>
        <p>Nome: {user.name}</p>
        <p>E-mail: {user.email}</p>
        </div>
    )
}
