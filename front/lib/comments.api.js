import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/comments",
  withCredentials: true,
});

export const CommentsCreate = async (commentInfo) => {
  const res = await api.post(
    "/addCommentPark",
    commentInfo
    // content,
    // author,
    // user: req.user.id,
  );
  console.log("eeee_coment infodddddddddddddddddd", commentInfo);
  console.log("esto es res", res);
  console.log("Respuesta del server", res.data);

  return res.data;
};
