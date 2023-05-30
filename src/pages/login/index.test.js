import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import login from "src/services/auth/login";
import LoginPage from ".";

jest.mock("src/services/auth/login");

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "login",
      query: "",
      asPath: "login",
      push: jest.fn(),
    };
  },
}));

describe("Login Page", () => {
  it("renders Login Form", () => {
    const loginPage = render(<LoginPage />);

    expect(loginPage.getByRole("form")).toBeTruthy();
  });

  it("shows alert on login failure", async () => {
    const errorMessage = "Unable to login with provided credentials.";
    login.mockImplementation(async () => {
      throw errorMessage;
    });

    const user = userEvent.setup();
    const loginPage = render(<LoginPage />);
    let emailInput = loginPage.getByRole("textbox", {
      name: "Email Address",
    });
    let passwordInput = loginPage.getByRole("textbox", {
      name: "Password",
    });
    let submitButton = loginPage.getByRole("button", {
      name: "Login",
    });

    await user.type(emailInput, "valid@email.address");
    await user.type(passwordInput, "password");
    await user.click(submitButton);
    let alert = await loginPage.findByRole("presentation");
    expect(alert).toHaveTextContent(errorMessage);
  });
});
