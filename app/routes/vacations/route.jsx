import { Outlet } from "@remix-run/react";
import Layout from "../../components/Layout";

//`loader` provides data to route component
export const loader = async () => {
  return { title: "Hi!" };
};

export default function Vacations() {
  return (
    <Layout>
      <h2>Plan_It</h2>
      <Outlet />
    </Layout>
  );
}
