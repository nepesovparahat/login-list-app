import axios from "axios";

const authentication = (email, password) => {
  let data = new FormData();
  data.append("mail", email);
  data.append("password", password);
  const headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const userLogin = axios
    .post("https://api.ziyuno.com/api/auth/login/en", data, {
      headers: headers,
    })
    .then((res) => res.data.result)
    .catch((error) => {
      console.log(error);
    });
  return userLogin;
};
export default authentication;
