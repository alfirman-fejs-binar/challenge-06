import { Route, Routes as Router } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<p>home</p>} />
      <Route path="/register" element={<p>register</p>} />
      <Route path="/login" element={<p>login</p>} />
    </Router>
  );
}
