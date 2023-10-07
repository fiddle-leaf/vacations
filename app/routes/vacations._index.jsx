import { Outlet } from "@remix-run/react";

//`loader` provides data to route component
export const loader = async () => {
  return { title: "Hi!" };
};

export default function Vacations() {
  return (
    <article>
      <h2>Route for Vacations</h2>
      <Outlet />
    </article>
  );
}
