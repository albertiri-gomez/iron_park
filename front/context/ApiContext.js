import React, { createContext, useState, useEffect } from "react";
import { whoami } from "../lib/auth.api";
import { getDogs } from "../lib/dog.api";

export const ApiContext = createContext();

export const ApiContextProvider = (props) => {
  const [user, setUser] = useState();
  console.log("usuario actual", user);

  useEffect(() => {
    (async () => {
      try {
        const user = await whoami();
        console.log("is logged", user);
        setUser(user);
        getDogs();
      } catch (error) {
        console.log("error", error);
        setUser(null);
      }
    })();
  }, []);

  return (
    <ApiContext.Provider value={{ user, setUser }}>
      {props.children}
    </ApiContext.Provider>
  );
};
