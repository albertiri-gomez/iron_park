import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { doLogin } from "../../lib/auth.api";
import { InputBox } from "../components/Input";
import { ApiContext } from "../../context/ApiContext";
import styled from "styled-components";
import { ButtonForm } from "../components/ButtonForm";

const Formulario = styled.form`
  * {
    transition: 0.4s;
    box-sizing: border-box;
    font-family: "arial";
  }
  ::selection {
    background: rgba(219, 68, 55, 0.3);
  }
  body {
    background: rgba(0, 0, 0, 0.8);
  }
  width: 50%;
  margin: auto;
  text-align: center;
  background: #fff;
  padding-top: 30px;
  border-radius: 10px;
`;

const Titulo = styled.div`
  color: #444;
  font-size: 1.6em;
  font-weight: bold;
  margin: 0px 0 30px 0;
  border-bottom: 1px solid #ccc;
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
  text-align: left;
`;

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
              defaultValues="Username"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Password</label> */}
            <InputBox
              // className={hasError(errors, "password")}
              name="password"
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
