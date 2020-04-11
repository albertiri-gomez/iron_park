import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/dogs",
  withCredentials: true,
});

export const getDogs = async ({ dogName, race, description, image, user }) => {
  const res = await api.get("/", { dogName, race, description, image, user });
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

export const dogEdit = async ({ dogName, race, description, image }) => {
  console.log("edit!");
  const res = await api.put("/:id", {
    dogName,
    race,
    description,
    image,
  });
  console.log("edit dog", res);
};

export const whoUser = async () => {
  console.log("whoUser");
  const res = await api.post("/whoami");
  console.log("whami", res.data);
  return res.data;
};
