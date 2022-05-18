import { useFirestore } from "../../hooks/useFirestore";

// styles
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul className={styles.transactions}>
      <h3>Transactions:</h3>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>Rs.{transaction.amount}</p>
          <p className={styles.date}>{transaction.date}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
