import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../pages/Login";
import { store } from "../redux/store";
import validateEmail from "../utils/validateEmail";

describe("check validate function", () => {
  it("should validate email", () => {
    expect(validateEmail("admin")).toBeFalsy();
    expect(validateEmail("admin@")).toBeFalsy();
    expect(validateEmail("admin@admin")).toBeFalsy();
    expect(validateEmail("admin@admin.c")).toBeFalsy();
    expect(validateEmail("admin@admin.com")).toBeTruthy();
  });
});

const LoginComp = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

describe("Login render Page", () => {
  it("renders the Login page", () => {
    const { getByText } = render(<LoginComp />);
    expect(getByText("Welcome, Admin BCR")).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByLabelText } = render(<LoginComp />);
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<LoginComp />);
    expect(getByText("Sign In")).toBeInTheDocument();
  });
});

describe("Form behaviour", () => {
  it("validate user inputs, and provides error messages", async () => {
    const { getByTestId, getByText } = render(<LoginComp />);

    const authEvent = (email, password) => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: email },
      });

      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: password },
      });

      fireEvent.submit(getByTestId("form"));
    };

    authEvent("admin", "");

    expect(getByText("password required")).toBeInTheDocument();

    authEvent("", "");

    expect(getByText("email required")).toBeInTheDocument();

    authEvent("admin@admin", "11111");

    expect(getByText("invalid email")).toBeInTheDocument();

  });
});

describe("check auth API", () => {
  async function signInWithEmail(email, password) {
    const raw = JSON.stringify({ email, password });
    try {
      const result = await fetch(
        "https://rent-cars-api.herokuapp.com/auth/login",
        { method: "POST", body: raw }
      );
      const data = await result.json();
      return data;
    } catch (e) {
      return e;
    }
  }

  beforeEach(() => fetch.resetMocks());

  describe("success", () => {
    it("should be log in", async () => {
      const mockData = {
        name: "alfirman",
        email: "alfirman@admin.com",
        role: "admin",
      };
      const mockResponse = JSON.stringify(mockData);

      fetch.mockResponseOnce(mockResponse);

      const result = await signInWithEmail("admin@admin.com", "admin@admin");

      expect(result).toEqual(mockData);

      expect(fetch).toHaveBeenCalledTimes(1);
    });

    describe("failure", () => {
      it("returns null when exception", async () => {
        fetch.mockReject(() => Promise.reject("500 something went wrong"));

        const result = await signInWithEmail("admin@admin.com", "admin@admin");

        expect(result).toEqual("500 something went wrong");
      });
    });
  });
});
