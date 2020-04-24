import React, { useContext, useState } from "react";
import { useForm, FormContext } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { CommentsCreate } from "../../lib/comments.api";
import { InputComment } from "../components/Formularios/InputComment";
import { ApiContext } from "../../context/ApiContext";
import {
  Formulario,
  Titulo,
  ButtonForm,
} from "../components/Formularios/Formulario";

export const Comments = ({ park, setPark }) => {
  const { user, setUser } = useContext(ApiContext);
  // console.log("esto es parque", park);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      author: user?.username,
      comment: "",
    },
  });
  const { register, handleSubmit, reset } = methods;
  // const idPark = park.park;
  const onSubmit = async (data, e) => {
    // console.log("esto es data de comment_info", data);
    const commentInfo = {
      data,
      user,
      idPark: park,
    };
    const newParks = await CommentsCreate(commentInfo);
    // console.log("que es ", newParks);
    setPark(newParks);
    e.target.reset();
  };
  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Titulo className="">Añadir comentario</Titulo>
          </div>
          <div>
            <InputComment
              name="author"
              placeholder="Autor"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputComment
              name="content"
              placeholder="Contenido"
              ref={register({ required: true })}
            />
          </div>
          <ButtonForm type="submit">Comentario</ButtonForm>
        </Formulario>
      </>
    </FormContext>
  );
};
