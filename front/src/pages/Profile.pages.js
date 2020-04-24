import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { doLogout, doEdit } from "../../lib/auth.api";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputBox } from "../components/Input";
import {
  Formulario,
  ButtonForm,
  Titulo,
} from "../components/Formularios/Formulario";
import { ButtonCancel } from "../components/Formularios/ButtonCancel";

export const ProfilePage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const onClickLogout = async (e) => {
    e.preventDefault();
    await doLogout();
    setUser(null);
    history.push("/");
  };

  const methods = user
    ? useForm({
        mode: "onBlur",
        defaultValues: {
          username: user?.username,
          email: user?.email,
        },
      })
    : useForm({
        mode: "onBlur",
      });

  // console.log(user);
  const { register, handleSubmit, errors } = methods;

  const onEdit = async (data) => {
    // console.log("data", data);
    await doEdit(data);
    setUser(data);
  };

  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onEdit)}>
          <Titulo>Editar Cuenta</Titulo>
          <div>
            {/* <label>Username</label> */}
            <InputBox
              // className={hasError(errors, "username")}
              name="username"
              placeholder="Username"
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
          <div>
            {/* <label>Email</label> */}
            <InputBox
              // className={hasError(errors, "course")}
              name="email"
              placeholder="Email"
              ref={register({ required: true })}
            />
          </div>
          <ButtonForm type="submit">Editar Profile</ButtonForm>
          <ButtonCancel onClick={(e) => onClickLogout(e)}>Logout</ButtonCancel>
        </Formulario>
      </>
    </FormContext>
  );
});
