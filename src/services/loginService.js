import axios from "axios";

const baseUrl = "https://phonebook-backend-let6.onrender.com";

function login(credentials) {
  return axios.post(baseUrl, credentials).then((res) => res.data);
}

export default { login };
