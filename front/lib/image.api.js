import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/dogs",
  withCredentials: true,
});

export const changeAvatar = async (avatarFile) => {
  const data = new FormData();
  data.append("image", avatarFile);
  return api.post("/", data);
};
