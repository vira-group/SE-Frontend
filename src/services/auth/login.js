import axios from "axios";
import { cookies, makeURL, set_cookie } from "src/Utils/common";
import URLS from "src/assets/References.json";

export default async function login(values, router) {
  if (cookies.get("Authorization") != undefined) {
    throw "Already logged in";
  }
  const url = makeURL(URLS.url_login);
  return axios
    .post(url, values)
    .then((response) => {
      set_cookie(response.data.auth_token);
      router.push("/");
    })
    .catch((error) => {
      let message = "";
      if (error.response) {
        message = error.response.data.non_field_errors[0];
      } else if (error.request) {
        message = "An error occured while connecting the server";
      } else {
        message = error.message;
      }
      throw message;
    });
}
