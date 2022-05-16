import React from "react";
import "./Navbar.css";
import coins from "./coins.svg";
import { useLogout } from "../hooks/useLogout";
import "animate.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="animate__animated animate__bounce nav">
      <div className="title">
        <img src={coins} width="40" />
        <h1>Akhrajaat.pk</h1>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>{user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
