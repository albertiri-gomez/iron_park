import axios from "axios";
require("dotenv").config();

const api = axios.create({
  baseURL: process.env.DBAPI,
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
  const res = await api.get("/dogs");
  // console.log(res.data);
  return res.data;
};

// export const createDogs = async ({ dogName, race, description, image }) => {
//   const res = await api.post("/", { dogName, race, description, image });
//   console.log("Respuesta del server", res.data);
//   console.log("perros Creado");
//   return res.data;
// };

export const dogEdit = async ({ dogName, race, description, image }) => {
  console.log("edit!");
  const res = await api.put("/dogs/:id", {
    dogName,
    race,
    description,
    image,
  });
  // console.log("edit dog", res);
};

// export const whoUser = async () => {
//   console.log("whoUser");
//   const res = await api.post("/whoami");
//   console.log("whami", res.data);
//   console.log("whoUser");
//   const res = await api.post("/dogs/whoami");
//   console.log("whami", res.data);

//   return res.data;
// };

export const createDogsImage = async (dogFile) => {
  // console.log("this is Datafile");
  // console.log(dogFile);
  const data = new FormData();
  data.append("image", dogFile.image);
  data.append("dogName", dogFile.dogName);
  data.append("race", dogFile.race);
  data.append("description", dogFile.description);
  // console.log("todos los campos con append");
  // console.log(data);
  const response = await api.post("/", data);
  console.log("todos los campos con append");
  console.log(data);
  const response = await api.post("/dogs", data);
  return response.data;
};
