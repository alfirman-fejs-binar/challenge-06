import { Route, Routes as Router } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Router>
  );
}
