import axios from "axios";
import mongoose from "mongoose";

const api = axios.create({
  baseURL: "http://localhost:3000/dogs",
  withCredentials: true,
});

// export const getDogs = async ({ dogName, race, description, image, user }) => {
//   const res = await api.get("/", {
//     dogName,
//     race,
//     description,
//     image,
//     user: mongoose.Types.ObjectId(req.user.id),
//   });
//   console.log("Respuesta del server", res.data);
//   console.log("perros Mostrados");
//   return res.data;
// };

export const getDogs = async () => {
  const res = await api.get("/");
  // console.log(res.data);
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

export const changeAvatar = async (avatarFile) => {
  const data = new FormData();
  data.append("avatar", avatarFile);
  return api.post("/", data);
};
