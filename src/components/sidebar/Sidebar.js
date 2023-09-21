import styles from "./Sidebar.module.sass";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Bugs from "../bugs/Bugs";

export default function Sidebar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Welcome, {user.name}</h2>
        <p>
          Signed in as {user.email}.
          <br />
          Not you?&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
          .
        </p>
      </div>
      <div className={styles.bugs}>
        <Bugs />
      </div>
    </aside>
  );
}
