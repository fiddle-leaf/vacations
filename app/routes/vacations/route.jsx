import { Outlet } from "@remix-run/react";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/Sidebar";

export default function Landing() {
  return (
    <Layout>
      <div className="columns">
        <Sidebar />
        <Outlet />
      </div>
    </Layout>
  );
}
