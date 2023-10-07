import * as React from "react";
import { Links, LiveReload, Meta, Outlet } from "@remix-run/react";
import mainStylesheet from "./app.css";
import favicon from "./favicon.ico";
import Layout from "./components/Layout";

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
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
