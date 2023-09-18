import styles from "./Hero.module.sass";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 class="title">Vacation Planner</h1>
      <ul className="info">
        <li>
          <h4 className="details">Input flight details</h4>
        </li>
        <li>
          <h4 className="details">See forecast for destination</h4>
        </li>
        <li>
          <h4 className="details">Save notes and other vacation details</h4>
        </li>
        <li>
          <h4 className="details">Make to-do lists for must-have items</h4>
        </li>
      </ul>
    </div>
  );
}
