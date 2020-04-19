import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/comments",
  withCredentials: true,
});

export const CommentsCreate = async (data) => {
  console.log("eeee", data);
  const res = await api.post("/addCommentPark", {
    // content,
    // author,
    // user: req.user.id,
    data,
  });
  console.log("Respuesta del server", res.data);
  console.log("perros Mostrados");
  return res.data;
};

// router.post("/:parkId", (req, res, next) => {
//     const newComment = new Comment(req.body);
//     console.log("esto es find", req.params.parkId);
//     newComment
//       .save()
//       .then((comment) => {
//         Park.findOneAndUpdate(
//           { _id: req.params.parkId },
//           { $push: { comments: comment._id } },
//           { new: true }
//         ).then((park) => {
//           res.json(park);
//         });
//       })
//       .catch((err) => res.status(500).json(err));
//   });

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
