import { useState } from "react";
import { useDispatch } from "react-redux";
import { LayoutAuth } from "../components/layout";
import { login } from "../redux/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const setValue = (key, value) => setForm({ ...form, [key]: value });

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <LayoutAuth>
      <form onSubmit={(e) => submit(e)}>
        <div></div>
        <h2>Welcome, Admin BCR</h2>
        <div className="hidden">
          <p>message</p>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Contoh: johndee@gmail.com"
              value={form.email}
              onChange={(e) => setValue(e.target.name, e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="6+ karakter"
              value={form.password}
              onChange={(e) => setValue(e.target.name, e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </LayoutAuth>
  );
};

export default Login;
