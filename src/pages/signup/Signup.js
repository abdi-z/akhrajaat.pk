import styles from "./Signup.module.css";

import React from "react";

export default function Signup() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, email, password);
  }
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <label>
        <span>Name</span>
        <input
          type="name"
          placeholder="Ali Khan"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder="ali@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          placeholder="secretpasswd123"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className="btn"> Join !</button>
    </form>
  );
}
