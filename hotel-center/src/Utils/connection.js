import references from "../assets/References.json"
import { makeURL } from "./common";
import axios from "axios";

export const AccountActivation = async (uid1,token1) => {
    let message = "";
    await axios
      .post(makeURL(references.url_AccountActivation), {
        uid: uid1,
        token: token1
      })
      .then((response) => {
        console.log(response);
        message = true
      })
      .catch((error) => {
          console.log(error)
        message=false
      });
    return message;
  };
