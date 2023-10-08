import { Link } from "@remix-run/react";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  return (
    <div className="page">
      <header className="top-bar">
        <div>
          <h1>Vacation Planner</h1>
        </div>
        <nav>
          <ul className="links">
            <li>
              <Link to={`/vacations`}>Home</Link>
            </li>
            <li>
              <Link to={`/vacations/new`}>New Vacation</Link>
            </li>
            <li>
              <Link to={`/vacations/history`}>Vacation History</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="body">{children}</main>
      <footer className="foo-bar">
        <p>fiddle-leaf &copy; 2023</p>
      </footer>
    </div>
  );
}
