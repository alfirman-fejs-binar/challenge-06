import { Route, Routes as Router } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CarDetail from "./pages/[carId]";
import Admin from "./pages/Admin";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/:carId" element={<CarDetail/>} />
    </Router>
  );
}
