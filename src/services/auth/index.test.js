const { cookies, set_cookie } = require("src/Utils/common");
const { default: login } = require("./login");
const { default: axios } = require("axios");
const { useRouter } = require("next/router");

jest.mock("axios");

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/login",
      pathname: "login",
      query: "",
      asPath: "login",
      push: jest.fn(),
    };
  },
}));

beforeEach(() => {
  cookies.remove("Authorization");
});

describe("Login API call", () => {
  it("fails if authorization token already exists", async () => {
    set_cookie("Pre-existing_Token");

    const router = useRouter();

    const values = {
      email: "email@example.com",
      password: "password",
    };
    expect(async () => {
      await login(values, router);
    }).rejects.toEqual("Already logged in");
  });

  it("throws if the credentials are invalid", async () => {
    const errorMessage = "Unable to log in with provided credentials.";
    const error = {
      response: {
        data: {
          non_field_errors: [errorMessage],
        },
      },
    };

    axios.post.mockRejectedValueOnce(error);
    const router = useRouter();

    const values = {
      email: "email@example.com",
      password: "password",
    };
    expect(async () => {
      await login(values, router);
    }).rejects.toEqual(errorMessage);
  });

  it("successfully saves the token and redirects the router", async () => {
    const token = "Authorization_Token";
    const response = {
      data: {
        auth_token: token,
      },
    };

    axios.post.mockResolvedValueOnce(response);
    const router = useRouter();

    const values = {
      email: "email@example.com",
      password: "password",
    };
    await login(values, router);

    expect(cookies.get("Authorization")).toEqual(`token ${token}`);
    expect(router.push).toBeCalledWith("/");
  });
});
