import axios from "axios";

const USER_LOGIN_BASE_URL = "http://localhost:9090/login";
//const USER_LOGIN_BASE_URL = "/login";

class LoginApi {
  loginUser(user) {
    return axios.post(USER_LOGIN_BASE_URL + "/userlogin", user);
  }

  generateotp(email) {
    console.log(email);
    return axios.post(USER_LOGIN_BASE_URL + "/generateotp/" + email);
  }

}



export default new LoginApi();