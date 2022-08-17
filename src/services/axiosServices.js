import axios from "axios";


export const Register = async (data) => {
  const response = axios
    .post("http://localhost:3000/auth/register", data)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return response;
};


export const userLogin = async (data) => {
  const response = axios
    .post("http://localhost:3000/auth/login", data)
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return response;
};

export const postPlant = async (data) => {
  const response = axios
    .post("http://localhost:3000/auth/plants", data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return response;
};

export const updatePlantsById = async (data, id) => {
  const response = axios
    .put(`http://localhost:3000/auth/plant/${id}`, data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return response;
};

export const getAllPlants = async (data) => {
  const response = axios
    .get("http://localhost:3000/auth/postplant", data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);

  return response;
};
