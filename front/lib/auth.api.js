import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true,
});

export const doSignup = async ({
  username,
  password,
  email,
  dogName,
  hasDog,
}) => {
  const res = await api.post("/signup", {
    username,
    password,
    email,
    hasDog,
    dogName,
  });
  console.log("Respuesta del server", res.data);
  console.log("Usuario Creado");

  return res.data;
};

export const doLogin = async ({ username, password }) => {
  console.log("Login usuario...", username, password);
  const res = await api.post("/login", {
    username,
    password,
  });
  console.log("Respuesta del server", res);
  console.log("Respuesta del server", res.data);
  return res.data;
};

export const doLogout = async () => {
  console.log("loggin out!");
  const res = await api.post("/logout");
  console.log(" logout", res);
};

export const whoUser = async () => {
  console.log("whoUser");
  const res = await api.post("/whoami");
  console.log("whami", res.data);
  return res.data;
};

export const doEdit = async ({ username, email, password }) => {
  console.log("edit!");
  const res = await api.put("/:id", {
    username,
    password,
    email,
  });
  console.log("edit", res);
};