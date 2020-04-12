import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { createMeeting } from "../../lib/meeting.api";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputBox } from "../components/Input";
import { createDogs } from "../../lib/dog.api";

export const DogsCreate = withRouter(({ history }) => {
  const { user, setUser } = useContext(ApiContext);

  const methods = user
    ? useForm({
        mode: "onBlur",
        defaultValues: {
          username: user?.username,
        },
      })
    : useForm({
        mode: "onBlur",
      });

  console.log(user);
  const { register, handleSubmit, errors } = methods;

  const onCreateDogs = async (data) => {
    console.log("data", data);
    await createDogs(data);
    setUser(data);
    history.push("/dogs");
  };

  return (
    <FormContext {...methods}>
      <>
        <form onSubmit={handleSubmit(onCreateDogs)}>
          <div>
            <label>Usuario</label>
            <InputBox
              // className={hasError(errors, "username")}
              name="username"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Nombre del perro</label>
            <InputBox
              // className={hasError(errors, "password")}
              name="dogName"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Raza</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="race"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Descripción</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="description"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Imagen</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="image"
              ref={register({ required: true })}
            />
          </div>
          <button type="submit">Editar Perro</button>
        </form>
      </>
    </FormContext>
  );
});
