import React from "react";
import { useState } from "react";

export default function TransactionForm() {
  const [date, setDate] = useState('');
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

 const handleSubmit = (e) => {
     e.preventDefault()
     if(date==''){
        var todayDate = new Date().toISOString().slice(0, 10);
        setDate(todayDate)
     }
     console.log(date)
 }

  return (
    <>
      <h3>Add a transaction:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Date</span>
          <input
            type="date"
            placeholder="22-04-2022"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          <span>Name</span>
          <input
            type="text"
            placeholder="Ordered subway with Abdi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Amount(Rs)</span>
          <input
            type="number"
            placeholder="2500"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
          <button>Add transaction</button>
        </label>
      </form>
    </>
  );
}
