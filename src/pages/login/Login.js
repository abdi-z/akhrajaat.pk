import styles from "./Login.module.css";
import { useLogin } from "../../hooks/useLogin";

import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {login ,error, isPending}=useLogin()
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    login(email, password)
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
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error&& <p>Error occured:{error}</p>}
    </form>
  );
}
