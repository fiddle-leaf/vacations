import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="new">New Vacation</NavLink>
        </li>
        <li>
          <NavLink to="history">Vacation History</NavLink>
        </li>
      </ul>
    </nav>
  );
}
