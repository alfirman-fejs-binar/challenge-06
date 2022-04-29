import { LayoutAuth } from "../components/layout";

const Login = () => {
  return (
    <LayoutAuth>
      <form onSubmit={(e) => e.preventDefault(e)}>
        <div></div>
        <h2>Welcome, Admin BCR</h2>
        <div className="hidden">
          <p>message</p>
        </div>
        <div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Contoh: johndee@gmail.com"
              required
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="6+ karakter"
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
