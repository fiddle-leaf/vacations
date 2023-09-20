import SignupForm from "../components/forms/SignupForm";
import LoginForm from "../components/forms/LoginForm";
import Hero from "../components/hero/Hero";
import styles from "./AuthPage.module.sass";
import { useState } from "react";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <article className={styles.auth}>
      <Hero />
      {!showLogin ? (
        <SignupForm setUser={setUser} setLogin={setShowLogin} />
      ) : (
        <LoginForm setUser={setUser} setLogin={setShowLogin} />
      )}
    </article>
  );
}
