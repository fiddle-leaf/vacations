import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h3>Vacation Planner</h3>
      <nav>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="vacations/new">New Vacation</NavLink>
          </li>
          <li>
            <NavLink to="vacations">Vacation History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
