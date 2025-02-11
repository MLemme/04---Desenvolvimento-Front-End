import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/users'}>Users</Link>
    </div>
  )
}
