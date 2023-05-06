import Login from ".";
import { Alert } from ".";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("renders Login button", () => {
    const loginPage = render(<Login />);
    expect(loginPage.getByRole("button", { text: "Login" })).toBeTruthy();
  });

  it("renders login fields", () => {
    const loginPage = render(<Login />);
    expect(
      loginPage.getByRole("textbox", { name: "Email Address" })
    ).toBeTruthy();
    expect(loginPage.getByRole("textbox", { name: "Password" })).toBeTruthy();
  });

  it("has editable login fields", async () => {
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });
    let passwordInput = await loginPage.findByRole("textbox", {
      name: "Password",
    });

    expect(emailInput.textContent).toBe("");
    expect(passwordInput.textContent).toBe("");

    const email = "email@example.com";
    const password = "example_password";

    await userEvent.type(emailInput, email);
    await userEvent.type(passwordInput, password);

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });
});

describe("Alert", () => {
  it("renders alert text", () => {
    const alertMessage = "Alert Message";
    const alert = render(<Alert>{alertMessage}</Alert>);
    expect(alert.getByText(alertMessage)).toBeTruthy();
  });

  it("shows success message properly", () => {
    const alertMessage = "Success Message";
    const alert = render(<Alert severity="success">{alertMessage}</Alert>);
    console.log(alert.getByRole("alert"));
    expect(alert.getByRole("alert")).toHaveClass("MuiAlert-filledSuccess");
  });

  it("shows error message properly", () => {
    const alertMessage = "Error Message";
    const alert = render(<Alert severity="error">{alertMessage}</Alert>);
    expect(alert.getByRole("alert")).toHaveClass("MuiAlert-filledError");
  });
});
