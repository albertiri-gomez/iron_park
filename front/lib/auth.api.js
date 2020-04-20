import axios from "axios";
import React, { useContext } from "react";

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};

export const useUserSetter = () => {
  const userState = useContext(UserContext);
  return userState.setUser;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};

export const useUserLogout = () => {
  const userState = useContext(UserContext);

  // NOTE: This returned function is "handleLogout"
  return async () => {
    console.log("log out!");
    // Remove user from React User State context
    userState.setUser(null);
    // Remove cookie from backend and frontend
    return doLogout();
  };
};
const DBAPI = process.env.DBAPI;
// ${Model.collection.name}

const api = axios.create({
  baseURL: process.env.DBAPI,
  withCredentials: true,
});

export const doSignup = async ({
  username,
  password,
  email,
  dogName,
  hasDog,
}) => {
  const res = await api.post("/auth/signup", {
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
  const res = await api.post("/auth/login", {
    username,
    password,
  });
  console.log("Respuesta del server", res);
  console.log("Respuesta del server", res.data);
  return res.data;
};

export const doLogout = async () => {
  console.log("loggin out!");
  const res = await api.post("/auth/logout");
  console.log(" logout", res);
};

export const whoami = async () => {
  console.log("whoUser");
  const res = await api.post("/auth/whoami");
  console.log("whami", res.data);
  return res.data;
};

export const doEdit = async ({ username, email, password }) => {
  console.log("edit!");
  const res = await api.put("/auth/:id", {
    username,
    password,
    email,
  });
  console.log("edit", res);
};
