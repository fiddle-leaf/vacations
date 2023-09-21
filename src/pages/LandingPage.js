import { info, images } from "../images/landing";
import styles from "./Landing.module.sass";

export default function LandingPage() {
  const random = Math.floor(Math.random() * 4);
  //console.log(images, random);
  info.map((artist) => {
    return images.filter((img) => {
      return img.split("-").some((val) => {
        return val === artist.id ? (artist["path"] = img) : false;
      });
    });
  });

  //console.log(info);
  return (
    <article className={styles.landing}>
      <div className={styles.titles}>
        <h2 className={styles.title}>Getting Started</h2>
        <h3 className={styles.subtitle}>
          Planning and budgeting your vacation
        </h3>
      </div>
      <div className={styles.header}>
        <figure>
          <img src={info[random].path} alt={`Art by ${info[random].photog}`} />
          <figcaption className={styles.caption}>
            Photo by <a href={info[random].link}>{info[random].photog}</a> on{" "}
            <a href={info[random].url}>Unsplash</a>
          </figcaption>
        </figure>
      </div>
      <ul className={styles.intro}>
        <li>
          <strong>Set Flight Fetails:</strong>Save time, date, airport, and
          airline information for your flight, destination, and return.
        </li>
        <li>
          <strong>Destination Forecast:</strong> estimated weather for arrival
          at destination is automatically generated for each flight accroding to
          date and time.
        </li>
        <li>
          <strong>Packing list:</strong> (or other lists) can be saved for each
          flight.
        </li>
        <li>
          <strong>Add-ons:</strong> Save small budgeting details like extra
          costs in rentals, hotels, or trickets.
        </li>
      </ul>
    </article>
  );
}
