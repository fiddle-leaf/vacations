import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
import styles from "./Home.module.sass";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <SignupForm />
      {/*<LoginForm />*/}
    </div>
  );
}
