"use client"
import React, { useState } from 'react';

export default function Client() {
    const [count, setCount] = useState(0);
  return (
    <div className="p-5">
        <h1 className='p-10 bg-blue-200 text-black'>Componente Cliente</h1>
        <button className='bg-blue-900 text-white p-5 rounded' type="button" onClick={() => setCount(count + 1)}>Cliques: {count}</button>
    </div>
  )
}