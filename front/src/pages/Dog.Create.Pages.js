import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputDogs } from "../components/Formularios/InputDogs";
import { Formulario, Titulo } from "../components/Formularios/Formulario";
import { ButtonCreatedDogs } from "../components/Formularios/ButtonCreatedDogs";
import { createDogsImage } from "../../lib/dog.api";
import { withProtected } from "../../lib/protectRoute.hoc";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "dogs" });

const Page = withRouter(({ history }) => {
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
    console.log(data);
    const myDog = data.image[0];
    data.image = myDog;
    console.log("data", data);
    await createDogsImage(data);
    setUser(data);
    history.push("/dog");
  };

  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onCreateDogs)}>
          <div>
            <InputDogs
              name="dogName"
              placeholder="Nombre del perro"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputDogs
              name="race"
              placeholder="Raza"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputDogs
              name="description"
              placeholder="Descripción"
              ref={register({ required: true })}
            />
          </div>
          <div className="padding-image">
            <input name="image" type="file" ref={register()} />
          </div>
          <ButtonCreatedDogs type="submit">Crear Perro</ButtonCreatedDogs>
        </Formulario>
      </>
    </FormContext>
  );
});

export const DogsCreate = withProtected(Page);
