import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/park",
  withCredentials: true,
});

export const getParks = async ({
  name,
  address,
  description,
  location,
  image,
  comments,
  user,
}) => {
  const res = await api.get("/", {
    name,
    address,
    description,
    location,
    image,
    comments,
    user,
  });
  console.log("Respuesta del server", res.data);
  console.log("parques Mostrados");
  return res.data;
};

export const getParksOne = async ({
  name,
  address,
  description,
  location,
  image,
  comments,
  user,
}) => {
  const res = await api.get("/:id", {
    name,
    address,
    description,
    location,
    image,
    comments,
    user,
  });
  console.log("Respuesta del server", res.data);
  console.log("parques Mostrados");
  return res.data;
};

export const parkEdit = async ({
  name,
  address,
  description,
  location,
  image,
  comments,
  user,
}) => {
  console.log("edit!");
  const res = await api.put("/:id", {
    name,
    address,
    description,
    location,
    image,
    comments,
    user,
  });
  console.log("edit park", res);
};

export const whoUser = async () => {
  console.log("whoUser");
  const res = await api.post("/whoami");
  console.log("whami", res.data);
  return res.data;
};
