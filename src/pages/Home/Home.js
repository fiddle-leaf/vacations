import { Outlet } from "react-router-dom";
import styles from "./Home.module.sass";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h2>Vacations Overview</h2>
      <Outlet />
    </div>
  );
}
