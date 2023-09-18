import { Outlet } from "react-router-dom";
import FooBar from "../components/FooBar";
import "./Layout.sass";
import Header from "../components/Header";
export default function Layout({ user }) {
  return (
    <div className="App">
      <Header user={user} />
      <main>
        <Outlet />
      </main>
      <FooBar />
    </div>
  );
}
