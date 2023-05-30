import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from ".";

describe("Login Form", () => {
  it("renders Login button", () => {
    const loginForm = render(<LoginForm />);

    expect(loginForm.getByRole("button", { text: "Login" })).toBeTruthy();
  });

  it("renders login fields", () => {
    const loginForm = render(<LoginForm />);

    expect(
      loginForm.getByRole("textbox", { name: "Email Address" })
    ).toBeTruthy();
    expect(loginForm.getByRole("textbox", { name: "Password" })).toBeTruthy();
  });

  it("has editable login fields", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);

    let emailInput = loginForm.getByRole("textbox", {
      name: "Email Address",
    });
    let passwordInput = loginForm.getByRole("textbox", {
      name: "Password",
    });

    expect(emailInput.textContent).toBe("");
    expect(passwordInput.textContent).toBe("");

    const email = "email@example.com";
    const password = "example_password";

    await user.type(emailInput, email);
    await user.type(passwordInput, password);

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });

  it("ignores the email validation if email input is not onfocused", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let emailInput = loginForm.getByRole("textbox", {
      name: "Email Address",
    });

    await user.type(emailInput, "invalid@email");

    expect(loginForm.queryByText("Please enter your email address")).toBeNull();
  });

  it("ignores the password validation if password input is not onfocused", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let passwordInput = loginForm.getByRole("textbox", {
      name: "Password",
    });

    await user.click(passwordInput);
    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });

    expect(loginForm.queryByText("Please enter your password")).toBeNull();
  });

  it("fails the email validation if email is empty", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let emailInput = loginForm.getByRole("textbox", {
      name: "Email Address",
    });

    user.click(emailInput);
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    emailInput.blur();
    await waitFor(() => {
      expect(emailInput).not.toHaveFocus();
    });

    expect(
      loginForm.findByText("Please enter your email address")
    ).toBeTruthy();
  });

  it("fails the email validation if email is invalid", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let emailInput = await loginForm.findByRole("textbox", {
      name: "Email Address",
    });

    await user.type(emailInput, "invalid@email");
    emailInput.blur();
    await waitFor(() => {
      expect(emailInput).not.toHaveFocus();
    });

    expect(
      loginForm.queryByText("Please enter a valid email address")
    ).toBeTruthy();
  });

  it("fails the password validation if password is empty", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let passwordInput = await loginForm.findByRole("textbox", {
      name: "Password",
    });

    user.click(passwordInput);
    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });
    passwordInput.blur();
    await waitFor(() => {
      expect(passwordInput).not.toHaveFocus();
    });

    expect(loginForm.queryByText("Please enter your password")).toBeTruthy();
  });

  it("ignores password validation if email is validated", async () => {
    const user = userEvent.setup();
    const loginForm = render(<LoginForm />);
    let emailInput = await loginForm.findByRole("textbox", {
      name: "Email Address",
    });

    user.click(emailInput);
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    emailInput.blur();
    await waitFor(() => {
      expect(emailInput).not.toHaveFocus();
    });

    expect(loginForm.queryByText("Please enter your password")).toBeNull();
  });

  it("submits valid inputs", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const loginForm = render(<LoginForm handleSubmit={handleSubmit} />);
    let emailInput = await loginForm.findByRole("textbox", {
      name: "Email Address",
    });
    let passwordInput = await loginForm.findByRole("textbox", {
      name: "Password",
    });
    let submitButton = await loginForm.findByRole("button", {
      name: "Login",
    });

    await user.type(emailInput, "valid@email.address");
    await user.type(passwordInput, "password");
    passwordInput.blur();
    await waitFor(() => {
      expect(passwordInput).not.toHaveFocus();
    });

    expect(loginForm.queryByText("Please enter your email address")).toBeNull();
    expect(
      loginForm.queryByText("Please enter a valid email address")
    ).toBeNull();
    expect(loginForm.queryByText("Please enter your password")).toBeNull();

    await user.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        email: "valid@email.address",
        password: "password",
      },
      expect.anything()
    );
  });
});
