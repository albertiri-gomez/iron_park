import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { createMeeting } from "../../lib/meeting.api";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputBox } from "../components/Input";

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
    console.log("data", data);
    await createMeeting(data);
    setUser(data);
    history.push("/meeting");
  };

  return (
    <FormContext {...methods}>
      <>
        <form onSubmit={handleSubmit(onCreateMeetings)}>
          <div>
            <label>Usuario</label>
            <InputBox
              // className={hasError(errors, "username")}
              name="username"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Nombre de la reunión</label>
            <InputBox
              // className={hasError(errors, "password")}
              name="nameMeeting"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Participantes</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="participants"
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
            <label>Fecha de la reunión</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="date"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Hora de la reunión</label>
            <InputBox
              // className={hasError(errors, "course")}
              name="time"
              ref={register({ required: true })}
            />
          </div>
          <button type="submit">Crear Reunión</button>
        </form>
      </>
    </FormContext>
  );
});
