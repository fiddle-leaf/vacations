import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Vacation Planner</h1>
      <ul className={styles.info}>
        <li>
          <h4 className={styles.details}>Input flight details</h4>
        </li>
        <li>
          <h4 className={styles.details}>See forecast for destination</h4>
        </li>
        <li>
          <h4 className={styles.details}>
            Save notes and other vacation details
          </h4>
        </li>
        <li>
          <h4 className={styles.details}>
            Make to-do lists for must-have items
          </h4>
        </li>
      </ul>
    </div>
  );
}
