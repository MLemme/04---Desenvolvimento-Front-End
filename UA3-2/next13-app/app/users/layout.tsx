import React from 'react'
//Layout para a rota users
export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <div>UserLayout</div>
        {children}
    </>
  )
}
