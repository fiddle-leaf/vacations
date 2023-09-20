import styles from "./Layout.module.sass";
import FooBar from "../footer/FooBar";

export default function Layout({ children }) {
  return (
    <div className={styles.App}>
      <main>{children}</main>
      <FooBar />
    </div>
  );
}
