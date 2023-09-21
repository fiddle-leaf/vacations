import styles from "./Home.module.sass";
import Header from "../../components/header/Header";
import FooBar from "../../components/footer/FooBar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Home({ user, setUser }) {
  return (
    <div className={styles.homepage}>
      <Header setUser={setUser} />

      <article className={styles.vacations}>
        <Sidebar user={user} setUser={setUser} />
        <article>
          <Outlet />
        </article>
      </article>
      <FooBar />
    </div>
  );
}
