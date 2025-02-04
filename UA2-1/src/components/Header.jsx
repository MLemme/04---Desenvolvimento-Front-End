import React from 'react'
import styles from './Header.module.css'
//utilizando CSS Modules
export default function Header() {
  {/*<div className='container_Header'>Conflito resolvido pela troca do nome da classe de container par container_Header*/}
  return (
    <div className={styles.container}>
        <span>Cabeçalho</span>
    </div>
  )
}
