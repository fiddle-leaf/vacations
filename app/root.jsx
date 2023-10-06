import * as React from "react";
import { Link, Links, LiveReload, Meta, Outlet } from "@remix-run/react";
import mainStylesheet from "./app.css";
import favicon from "./favicon.ico";

export const meta = () => {
  return [
    { title: "Plan Your Vacations" },
    {
      name: "description",
      content:
        "Save transportation, budgeting, and forecast details for your next vacation.",
    },
    { name: "keywords", content: "remix, javascript, react" },
  ];
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: mainStylesheet,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>My First Remix App</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Vacation Planner</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/vacations`}>Home</Link>
            </li>
            <li>
              <Link to={`/vacations/new`}>New Vacation</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
