import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Home() {
  const {user}=useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.id}/>
      </div>
    </div>
  )
}
