import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

