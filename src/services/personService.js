import axios from "axios";

const baseUrl = "https://phonebook-backend-let6.onrender.com";

let token = null;

function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

function getPersons() {
  const config = {
    headers: { Authorization: token },
  };

  return axios.get(baseUrl, config).then((res) => res.data);
}

function createPerson(person) {
  const config = {
    headers: { Authorization: token },
  };

  return axios.post(baseUrl, person, config).then((res) => res.data);
}

function deletePerson(id) {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}

export default {
  getPersons,
  createPerson,
  deletePerson,
  setToken,
};
