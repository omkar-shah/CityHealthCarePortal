import axios from "axios";

 const ADMIN_API_BASE_URL = "http://localhost:9090/admin";
  const USER_API_BASE_URL = "http://localhost:9090/user";
class AdminServiceApi {
  addHospital(hospital) {
    console.log(hospital);
    return axios.post(ADMIN_API_BASE_URL + "/addhospital", hospital);
  }

  fetchAllHospitals() {
    return axios.get(ADMIN_API_BASE_URL + "/allhospitals");
  }
  fetchAllUsers() {
    return axios.get(ADMIN_API_BASE_URL + "/allusers");
  }

  logoutAdmin() {
    localStorage.removeItem("admin");
  }

  deleteUser(email) {
    console.log(email);
    return axios.delete(USER_API_BASE_URL + "/deleteuser/" + email);
  }

  
}

export default new AdminServiceApi();
