import React from 'react'
import Link from 'next/link'

//busca de dados de uma api com fecth com uma constante que obtém os dados da resposta
async function getUsers() {
  //por fetcj ser assincrono, tem que estar em uma função assync e usar await na resposta
  //atua no lado do servidor
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

//Rota criada com App Router
//como está pagina esta renderizando do lado do servidor, permite o uso de componentes assincronos para tal essa rfc recebe async e await
export default async function index() {
  const users: User[] = await getUsers(); //porque o retorno é um array por isso any[] trocado para o tipo de dado criado em type.d.ts
  return (
    // component react tem que ter pelo menos um fragmento pai
    <div className='text-center flex flex-col'>
      <div>Users (Next 13):</div>
      {
        //tornei a lista de nomes de usarios links navegaveis para as rotas dinamicas por id
        users.map(user =><Link href={"/users/" + user.id} className='hover:text-blue-500' key={user.id}>{user.name}</Link>)
        //users.map(user => <p>{user.name}</p>)
      }
    </div>
  )
}
