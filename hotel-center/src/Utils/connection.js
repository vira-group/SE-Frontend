import references from "../assets/References.json"

export const AccountActivation = async (uid,token) => {
    let message = "";
    await axios
      .post(makeURL(references.url_AccountActivation), {
        uid: uid,
        token: token
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, error.response.data);
        if (error.response.status == 401) {
          message = error.response.data.message;
        } else {
          message = error.response.data;
        }
      });
    return message;
  };