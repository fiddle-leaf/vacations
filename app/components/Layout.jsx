import { Link } from "@remix-run/react";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Vacation Planner</h1>
        <nav>
          <ul>
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
      {children}
      <footer>
        <p>coded by fiddle.leaf &copy; 2023</p>
      </footer>
    </>
  );
}
