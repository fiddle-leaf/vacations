import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NewVacation from "./pages/NewVacation";
import VacationHistory from "./pages/VacationHistory";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewVacation />} />
          <Route path="history" element={<VacationHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
