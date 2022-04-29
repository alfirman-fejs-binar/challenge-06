import { LayoutAuth } from "../components/layout";

const Register = () => {
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Contoh: johndee@gmail.com"
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
              required
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </LayoutAuth>
  );
};

export default Register;
