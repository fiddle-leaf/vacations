import { useState } from "react";
import * as usersService from "../../utilities/users-service";
import styles from "./Form.module.sass";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault(); //prevent form from being submit to server
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }
  return (
    <div className={styles.loginForm}>
      <h3 className="subtitle">Login</h3>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.login}>
        <div>
          <div className={styles.email}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.primary}>
            LOG IN
          </button>
        </div>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
