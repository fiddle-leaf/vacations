import { useState } from "react";
import styles from "./Form.module.sass";

export default function SignupForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (e) => {
    setUserData({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handleSubmit = (e) => {
    //create async function to submit data to db
    e.preventDefault();
  };
  const handleReset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      confirm: "",
      error: "",
    });
  };
  return (
    <>
      <div className={styles.signupForm}>
        {/*<h3 className={styles.subtitle}>Plan Your Vacations</h3>*/}
        <p>Sign Up to save your data!</p>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className={styles.signup}
        >
          <div className={styles.name}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.email}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.password}>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Confirm</label>
              <input
                type="password"
                name="confirm"
                value={userData.confirm}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <button type="submit" disabled>
              SIGN UP
            </button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
      <p>{userData.error}</p>
    </>
  );
}
