import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LayoutAuth } from "../components/layout";
import { signUp } from "../redux/slice/authSlice";

const Register = () => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("");

  const setValue = (key, value) => {
    setAlertMessage("");
    setForm({ ...form, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(signUp(users, form, (message) => setAlertMessage(message), () => {
      alert("success register, please login !")
      push("/login")
    }));
  };

  return (
    <LayoutAuth>
      <form data-testId="register-form" onSubmit={(e) => submit(e)}>
        <div></div>
        <h2>Create new Account</h2>
        <div className={`${!alertMessage && "hidden"}`}>
          <p>{alertMessage}</p>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Contoh: johndee@gmail.com"
              required
              value={form.email}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="6+ karakter"
              required
              value={form.password}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
        <small>
          Already have account?{" "}
          <Link to="/login">
            <b>Login</b>
          </Link>
        </small>
      </form>
    </LayoutAuth>
  );
};

export default Register;
