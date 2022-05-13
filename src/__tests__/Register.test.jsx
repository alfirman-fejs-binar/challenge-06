import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
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

const RegisterComp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Register />
    </Provider>
  </BrowserRouter>
);

describe("Register render Page", () => {
  beforeEach(() => {
    render(<RegisterComp />);
  });

  it("renders the Login page", () => {
    const { getByText } = screen;
    expect(getByText("Create new Account")).toBeInTheDocument();
  });

  it("render 2 input components", () => {
    const { getByLabelText } = screen;
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = screen;
    expect(getByText("Sign Up")).toBeInTheDocument();
  });

  it("renders a login button", () => {
    const link = screen.getByText("Login").closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/login");
  });
});

describe("Form behaviour", () => {
  it("validate user inputs, and provides error messages", async () => {
    const { getByTestId, getByText } = render(<RegisterComp />);

    const authEvent = (email, password) => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: email },
      });

      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: password },
      });

      fireEvent.submit(getByTestId("register-form"));
    };

    authEvent("admin", "");

    expect(getByText("password required")).toBeInTheDocument();

    authEvent("", "");

    expect(getByText("email required")).toBeInTheDocument();

    authEvent("admin@admin", "11111");

    expect(getByText("invalid email")).toBeInTheDocument();
  });
});
