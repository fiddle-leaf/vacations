import NavBar from "./NavBar";

export default function Header({ user }) {
  return (
    <header>
      {user ? <NavBar /> : false}
      <h1 class="title">Vacation Planner</h1>
    </header>
  );
}
