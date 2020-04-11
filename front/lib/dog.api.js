import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/dogs",
  withCredentials: true,
});

export const getDogs = async ({ dogName, race, description, image }) => {
  const res = await api.get("/", { dogName, race, description, image });
  console.log("Respuesta del server", res.data);
  console.log("perros Mostrados");
  return res.data;
};

export const createDogs = async ({ dogName, race, description, image }) => {
  const res = await api.post("/", { dogName, race, description, image });
  console.log("Respuesta del server", res.data);
  console.log("perros Creado");
  return res.data;
};
