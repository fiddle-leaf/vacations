import { Outlet } from "react-router-dom";
import FooBar from "../../components/FooBar";
import styles from "./Layout.module.sass";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";
export default function Layout({ user }) {
  return (
    <div className={styles.App}>
      {user ? <Header /> : false}
      <main>
        <Hero />
        <Outlet />
      </main>
      <FooBar />
    </div>
  );
}
