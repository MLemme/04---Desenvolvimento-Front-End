import React from 'react'
//Layout para a rota users
export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
      
        <div className='p-10 bg-blue-200 text-black text-center'>Usuários</div>
        {children}
      
    </>
  )
}
