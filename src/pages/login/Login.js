import styles from "./Login.module.css";

import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email, password)
  }
  return (
    <form className={styles['login-form']}onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          placeholder="ded"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          placeholder="ded"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </label>
      <button className="btn">Login</button>
    </form>
  );
}
