import styles from "./Layout.module.sass";

export default function Layout({ children }) {
  return (
    <div className={styles.App}>
      <main>{children}</main>
    </div>
  );
}
