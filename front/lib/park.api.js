import axios from "axios";
import _ from "lodash";

const api = axios.create({
  baseURL: "http://localhost:3000/parks",
  withCredentials: true,
});

// export const getParks = async ({
//   name,
//   address,
//   description,
//   location,
//   image,
//   comments,
//   user,
// }) => {
//   const res = await api.get("/", {
//     name,
//     address,
//     description,
//     location,
//     image,
//     comments,
//     user,
//   });
//   console.log("Respuesta del server", res.data);
//   console.log("parques Mostrados");
//   return res.data;
// };
export const getParks = async () => {
  const res = await api.get("/");
  console.log(res.data);
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

export const getParkID = async (idPark) => {
  const res = await api.get("/");

  // Filter for specific park
  const all = _.filter(res.data, { _id: idPark });
  console.log("llama al back", idPark);
  console.log("llama al res", res);
  console.log("llama al all", all);
  return all;
};
