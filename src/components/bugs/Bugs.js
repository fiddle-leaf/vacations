import styles from "./Bugs.module.sass";
export default function Bugs() {
  return (
    <fieldset className={styles.bugs}>
      <legend className={styles.title}>
        <h3>Having issues?</h3>
      </legend>
      <div>
        <form>
          <label>Leave a comment with a bug: </label>
          <div>
            <label>
              <input type="radio" />
              <span role="img" aria-label="spider">
                🐛
              </span>
            </label>
            <label>
              <input type="radio" />
              <span role="img" aria-label="spider">
                🕷
              </span>
            </label>
            <label>
              <input type="radio" />
              <span role="img" aria-label="spider">
                🦋
              </span>
            </label>
            <label>
              <input type="radio" />
              <span role="img" aria-label="spider">
                🐞
              </span>
            </label>
          </div>
          <textarea name="bugs" rows="5" cols="30" form></textarea>
          <button>Submit me!</button>
        </form>
      </div>
    </fieldset>
  );
}
