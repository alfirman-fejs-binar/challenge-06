import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Login from "../../pages/Login";
import { store } from "../../redux/store";

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

    const authEvent = async (email, password) => {
      await act(async () => {
        fireEvent.change(screen.getByLabelText("Email"), {
          target: { value: email },
        });

        fireEvent.change(screen.getByLabelText("Password"), {
          target: { value: password },
        });
      });

      await act(async () => {
        fireEvent.submit(getByTestId("form"));
      });
    };

    await authEvent("admin", "");

    expect(getByText("password required")).toBeInTheDocument();

    await authEvent("", "");

    expect(getByText("email required")).toBeInTheDocument();

    await authEvent("admin@admin", "11111");

    expect(getByText("invalid email")).toBeInTheDocument();

    await authEvent("admin@admin.com", "111111");

    expect(getByText("email is unregistered")).toBeInTheDocument();
  });

  it("should submit when form inputs contain text", async () => {
    const { getByTestId, queryByText } = render(<LoginComp />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "shaquille" },
      });

      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "oatmeal" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(queryByText("User Name is required")).not.toBeInTheDocument();
    expect(queryByText("Password is required")).not.toBeInTheDocument();
  });
});

// describe("user logs in successfully and token added to localstorage", () => {
//   it("allows the user to login successfully", async () => {
//     // mock window.fetch for the test
//     const UserResponse = { token: "user_token" };

//     jest.spyOn(window, "fetch").mockImplementationOnce(() => {
//       return Promise.resolve({
//         json: () => Promise.resolve(UserResponse),
//       });
//     });

//     // Render the Login component
//     const { getByTestId } = render(<Login />);

//     // fill out the form
//     await act(async () => {
//       fireEvent.change(screen.getByLabelText(/username/i), {
//         target: { value: "shaquille" },
//       });

//       fireEvent.change(screen.getByLabelText(/password/i), {
//         target: { value: "oatmeal" },
//       });
//     });

//     //Submit the form
//     await act(async () => {
//       fireEvent.submit(getByTestId("form"));
//     });

//     // alert to show up before continuing with our assertions.
//     // Expect alert to be success
//     const alert = await screen.findByRole("alert");
//     expect(alert).toHaveTextContent(/congrats/i);

//     // Expect local token to be set
//     expect(window.localStorage.getItem("token")).toEqual(UserResponse.token);
//   });
// });

// describe("<App/>", () => {
//   before(() => {
//     cy.visit("http://localhost:3000");
//   });
//   it("Renders without crashing", () => {
//     cy.get("h1").contains("Login");
//   });

//   it("Renders a button component", () => {
//     cy.get("button").should("have.length", 1);
//   });

//   it("Renders 2 input fields", () => {
//     cy.get("input").should("have.length", 2);
//   });
// });
