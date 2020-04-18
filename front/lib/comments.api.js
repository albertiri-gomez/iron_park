import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/comments",
  withCredentials: true,
});

export const CommentsCreate = async ({ author, content }) => {
  const res = await api.post("/:parkId", {
    content,
    // user: req.user.id,
  });
  console.log("Respuesta del server", res.data);
  console.log("perros Mostrados");
  return res.data;
};

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
