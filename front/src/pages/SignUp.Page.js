import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { InputBox } from "../components/Input";
import { doSignup } from "../../lib/auth.api";
import { ApiContext } from "../../context/ApiContext";
import { Button_dog } from "../components/Button_dog";
import {
  Formulario,
  Titulo,
  ButtonForm,
} from "../components/Formularios/Formulario";

export const SignUpPage = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      dogName: "",
      hasDog: true,
    },
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = async (data) => {
    console.log("data", data);
    // if (data.dogName === "")
    // {
    //   return false
    // }
    const responseServer = await doSignup({
      ...data,
      hasDog: data.dogName == "" ? false : true,
    });

    if (responseServer.status) {
      return history.push("/login");
    }

    setUser(data);

    history.push("/login");
  };

  console.log("error", errors);

  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Titulo>Registrate</Titulo>
            {/* <label>Username</label> */}
            <InputBox
              // className={hasError(errors, "username")}
              name="username"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <div>
              <label>Email</label>
              <InputBox
                // className={hasError(errors, "username")}
                name="email"
                ref={register({ required: true })}
              />
            </div>
            <label>Password</label>
            <InputBox
              // className={hasError(errors, "password")}
              name="password"
              ref={register({ required: true })}
            />
          </div>
          <Button_dog register={register}></Button_dog>
          {/* <div>
            <label>dogName</label>
            <InputBox
              // className={hasError(errors, "username")}
              name="dogName"
              ref={register({ required: true })}
            />
          </div> */}
          {/* <Button_dog /> */}
          <ButtonForm type="submit">Sign Up</ButtonForm>
        </Formulario>
      </>
    </FormContext>
  );
});
