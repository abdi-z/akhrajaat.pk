import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}
