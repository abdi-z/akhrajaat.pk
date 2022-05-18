import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./OnlyNavbar.css";
import moneylogo from "./moneylogo.png";
import "animate.css";

// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar animate__animated animate__bounce">
      <ul>
        <img src={moneylogo} width="40" />
        <li className={styles.title} style={{ paddingLeft: "10px" }}>
          Akhrajaat.pk
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
            <li>Salam! {user.displayName}</li>
            <li>
              <button
                className="btn animate__animated animate__rubberBand"
                onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
