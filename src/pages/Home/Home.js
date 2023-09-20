import { Link, Outlet } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import styles from "./Home.module.sass";
import Header from "../../components/header/Header";
import FooBar from "../../components/footer/FooBar";

export default function Home({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className={styles.homepage}>
      <Header setUser={setUser} />

      <article className={styles.vacations}>
        <aside>
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
        </aside>
        <article>
          <Outlet />
        </article>
      </article>
      <FooBar />
    </div>
  );
}
