import React, { useContext } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { CommentsCreate } from "../../lib/comments.api";
import { InputBox } from "../components/Input";
import { ApiContext } from "../../context/ApiContext";
import {
  Formulario,
  Titulo,
  ButtonForm,
} from "../components/Formularios/Formulario";

export const Comments = (park) => {
  const { user, setUser } = useContext(ApiContext);
  console.log("esto es parque", park);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      comment: "",
    },
  });

  const { register, handleSubmit, errors } = methods;
  const idPark = park.park;
  const onSubmit = async (data) => {
    const commentInfo = {
      data,
      user,
      idPark,
    };
    await CommentsCreate(commentInfo);

    // console.log("Data is");
    // console.log("data", data);
    // const commentInfo = { data, park };
    // await CommentsCreate(commentInfo);
    // // if (!responseServer.status) {
    // //   setUser(data);
    // //   // history.push("/ParkDetail/:id");
    // // } else {
    // //   console.log(`fallo ${responseServer.message}`);
    // //   // return history.push("/ParkDetail/:id");
    // // }
  };
  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Titulo>añadir comentario</Titulo>
            {/* <label>Username</label> */}
            {/* <InputBox
              // className={hasError(errors, "username")}
              name="author"
              defaultValues=""
              placeholder="autor"
              ref={register({ required: true })}
            /> */}
          </div>
          <div>
            {/* <label>Password</label> */}
            <InputBox
              // className={hasError(errors, "password")}
              name="content"
              placeholder="contenido"
              ref={register({ required: true })}
            />
          </div>
          <ButtonForm type="submit">comments</ButtonForm>
        </Formulario>
      </>
    </FormContext>
  );
};
