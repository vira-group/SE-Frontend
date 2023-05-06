import Login from ".";
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
