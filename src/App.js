import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AuthPage from "./pages/AuthPage";
import NewVacation from "./pages/NewVacation";
import VacationHistory from "./pages/VacationHistory";
import { useState } from "react";
import { getUser } from "./utilities/users-service";
import Header from "./components/header/Header";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <Layout>
      {user ? (
        <>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/vacations" element={<VacationHistory />} />
            <Route path="/vacations/new" element={<NewVacation />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </Layout>
  );
}

export default App;
