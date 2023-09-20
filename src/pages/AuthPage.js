import SignupForm from "../components/forms/SignupForm";
import LoginForm from "../components/forms/LoginForm";
import Hero from "../components/hero/Hero";
export default function AuthPage({ setUser }) {
  return (
    <>
      <Hero />
      <SignupForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </>
  );
}
