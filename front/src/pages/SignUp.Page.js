import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { InputBox } from "../components/Input";
import { doSignup } from "../../lib/auth.api";
import { ApiContext } from "../../context/ApiContext";
import { Button_dog } from "../components/Button_dog";

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

    const responseServer = await doSignup(data);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username</label>
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
          <Button_dog></Button_dog>
          {/* <div>
            <label>dogName</label>
            <InputBox
              // className={hasError(errors, "username")}
              name="dogName"
              ref={register({ required: true })}
            />
          </div> */}
          {/* <Button_dog /> */}
          <button type="submit">Login</button>
        </form>
      </>
    </FormContext>
  );
});
