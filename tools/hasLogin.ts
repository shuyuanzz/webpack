import CookieManagement from "./cookieManagement";
import Http from "./http";

export default function hasLogin() {
  let loginStatus = true;
  const axios = new Http(
    "https://www.easy-mock.com/mock/5d4257ee7482bb7b59232d8f/shuyuanzz"
  );
  axios
    .get("./hasLogin", {
      headers: {
        Authorization: new CookieManagement().getItem("userID")
      }
    })
    .then(res => {
      if(res && res.data) {
       loginStatus = res.data.hasLogin;
      }
    })
    .catch(err => {
      console.error(err);
    });
  return loginStatus
}
