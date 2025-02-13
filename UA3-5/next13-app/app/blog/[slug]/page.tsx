import React from 'react'
//Criação de rota dinâmica
export default function page({params} : {params : {slug : string}}) {
  return (
    <div>Post: {params.slug}</div>//renderiza o parametro dinâmico que for recebido - será que poderia receber e mandar algo para o servidor BE?
  )
}