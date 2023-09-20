import { NavLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function Header({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <header>
      <h3>Welcome, {user.name}</h3>
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
          <li>
            <NavLink to="" onClick={handleLogOut}>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
