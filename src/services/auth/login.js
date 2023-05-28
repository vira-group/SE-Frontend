import axios from "axios";
import { makeURL } from "src/Utils/common";
import URLS from "src/assets/References.json";

export default async function login(email, password) {
  const url = makeURL(URLS.url_login);
  return axios
    .post(url, {
      email: email,
      password: password,
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
