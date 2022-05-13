import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutAuth } from "../components/layout";
import { signIn, signInWithGoole } from "../redux/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState("");

  const setValue = (key, value) => {
    setAlert("");
    setForm({ ...form, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(signIn(users, form, (message) => setAlert(message)));
  };

  return (
    <LayoutAuth>
      <form data-testid="login-form" onSubmit={(e) => submit(e)}>
        <div></div>
        <h2>Welcome, Admin BCR</h2>
        <div className={`${!alert && "hidden"}`}>
          <p>{alert}</p>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Contoh: johndee@gmail.com"
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
              value={form.password}
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={() => dispatch(signInWithGoole())}>
          Sign in with google
        </button>
      </form>
    </LayoutAuth>
  );
};

export default Login;
