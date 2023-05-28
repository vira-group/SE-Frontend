import "@testing-library/jest-dom/extend-expect";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-test-renderer";
import Login from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/login",
      pathname: "login",
      query: "",
      asPath: "/login",
    };
  },
}));

describe("Login Page", () => {
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
    const user = userEvent.setup();
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

    await user.type(emailInput, email);
    await user.type(passwordInput, password);

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });
});

describe("Login Validation", () => {
  it("ignores the email validation if email input is not onfocused", async () => {
    const user = userEvent.setup();
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });

    act(() => {
      emailInput.focus();
    });
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    await user.type(emailInput, "invalid@email");

    expect(loginPage.queryByText("Please enter your email address")).toBeNull();
  });

  it("ignores the password validation if password input is not onfocused", async () => {
    const loginPage = render(<Login />);
    let passwordInput = await loginPage.findByRole("textbox", {
      name: "Password",
    });

    act(() => {
      passwordInput.focus();
    });
    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });

    expect(loginPage.queryByText("Please enter your password")).toBeNull();
  });

  it("fails the email validation if email is empty", async () => {
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });

    act(() => {
      emailInput.focus();
    });
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    await act(async () => {
      emailInput.blur();
      await waitFor(() => {
        expect(emailInput).not.toHaveFocus();
      });
    });

    expect(
      loginPage.queryByText("Please enter your email address")
    ).toBeTruthy();
  });

  it("fails the email validation if email is invalid", async () => {
    const user = userEvent.setup();
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });

    act(() => {
      emailInput.focus();
    });
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    await user.type(emailInput, "invalid@email");
    act(() => {
      emailInput.blur();
    });
    await waitFor(() => {
      expect(emailInput).not.toHaveFocus();
    });

    expect(
      loginPage.queryByText("Please enter a valid email address")
    ).toBeTruthy();
  });

  it("fails the password validation if password is empty", async () => {
    const loginPage = render(<Login />);
    let passwordInput = await loginPage.findByRole("textbox", {
      name: "Password",
    });

    act(() => {
      passwordInput.focus();
    });
    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });
    await act(async () => {
      passwordInput.blur();
      await waitFor(() => {
        expect(passwordInput).not.toHaveFocus();
      });
    });

    expect(loginPage.queryByText("Please enter your password")).toBeTruthy();
  });

  it("ignores password validation if email is validated", async () => {
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });

    act(() => {
      emailInput.focus();
    });
    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
    act(() => {
      emailInput.blur();
    });
    await waitFor(() => {
      expect(emailInput).not.toHaveFocus();
    });

    expect(loginPage.queryByText("Please enter your password")).toBeNull();
  });

  it("accepts valid inputs", async () => {
    const user = userEvent.setup();
    const loginPage = render(<Login />);
    let emailInput = await loginPage.findByRole("textbox", {
      name: "Email Address",
    });
    let passwordInput = await loginPage.findByRole("textbox", {
      name: "Password",
    });

    await user.type(emailInput, "valid@email.address");
    await user.type(passwordInput, "password");
    act(() => {
      passwordInput.blur();
    });
    await waitFor(() => {
      expect(passwordInput).not.toHaveFocus();
    });

    expect(loginPage.queryByText("Please enter your email address")).toBeNull();
    expect(
      loginPage.queryByText("Please enter a valid email address")
    ).toBeNull();
    expect(loginPage.queryByText("Please enter your password")).toBeNull();
  });
});
