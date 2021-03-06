import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { doLogin } from "../../lib/auth.api";
import { InputBox } from "../components/Input";
import { ApiContext } from "../../context/ApiContext";

import {
  Formulario,
  Titulo,
  ButtonForm,
} from "../components/Formularios/Formulario";

export const LoginPage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = async (data) => {
    console.log("Data is");
    console.log("data", data);
    const responseServer = await doLogin(data);

    if (!responseServer.status) {
      setUser(data);
      history.push("/park");
    } else {
      console.log(`fallo ${responseServer.message}`);
      return history.push("/login");
    }
  };
  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Titulo>Iniciar Sesión</Titulo>
            {/* <label>Username</label> */}
            <InputBox
              // className={hasError(errors, "username")}
              name="username"
              placeholder="username"
              defaultValues="Username"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Password</label> */}
            <InputBox
              // className={hasError(errors, "password")}
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
          </div>
          <ButtonForm type="submit">Login</ButtonForm>
        </Formulario>
      </>
    </FormContext>
  );
});
