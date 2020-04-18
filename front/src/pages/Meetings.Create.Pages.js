import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { createMeetingsImage } from "../../lib/meeting.api";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputMeetings } from "../components/Formularios/InputMeetings";
import { Formulario, Titulo } from "../components/Formularios/Formulario";
import { ButtonCreatedMeetings } from "../components/Formularios/ButtonCreatedMetting";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "meeting" });

export const MeetingsCreate = withRouter(({ history }) => {
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

  const onCreateMeetings = async (data) => {
    console.log(data);
    const myMeeting = data.image[0];
    data.image = myMeeting;
    createMeetingsImage(myMeeting)
      .then((res) => {
        console.log("Changed File");
        setUser(res.data.user);
      })
      .catch((e) => {
        console.log("Error uploading file");
        console.log(e);
      });
    console.log("data", data);
    await createMeetingsImage(data);
    setUser(data);
    history.push("/meeting");
  };

  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onCreateMeetings)}>
          {/* <div> */}
          <Titulo>Crear Reunión</Titulo>
          {/* <label>Usuario</label> */}
          {/* <InputMeetings
              // className={hasError(errors, "username")}
              name="username"
              ref={register({ required: true })}
            />
          </div> */}
          <div>
            {/* <label>Nombre de la reunión</label> */}
            <InputMeetings
              // className={hasError(errors, "password")}
              name="nameMeeting"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Participantes</label> */}
            <InputMeetings
              // className={hasError(errors, "course")}
              name="participants"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Descripción</label> */}
            <InputMeetings
              // className={hasError(errors, "course")}
              name="description"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Fecha de la reunión</label> */}
            <InputMeetings
              // className={hasError(errors, "course")}
              name="date"
              ref={register({ required: true })}
            />
          </div>
          <div>
            {/* <label>Hora de la reunión</label> */}
            <InputMeetings
              // className={hasError(errors, "course")}
              name="time"
              ref={register({ required: true })}
            />
          </div>
          <input name="image" type="file" ref={register()} />

          <ButtonCreatedMeetings type="submit">
            Crear Reunión
          </ButtonCreatedMeetings>
        </Formulario>
      </>
    </FormContext>
  );
});
