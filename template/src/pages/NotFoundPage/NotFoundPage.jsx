import React from 'react'
import styles from './NotFoundPage.module.scss'

export default function NotFoundPage() {
   return (
      <main className={styles.container}>
         <h1>Oops!</h1>
         <h2>404 Page not found {':('}</h2>
      </main>
   )
}
