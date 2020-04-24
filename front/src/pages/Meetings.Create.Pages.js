import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { createMeetingsImage } from "../../lib/meeting.api";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputMeetings } from "../components/Formularios/InputMeetings";
import { Formulario, Titulo } from "../components/Formularios/Formulario";
import { ButtonCreatedMeetings } from "../components/Formularios/ButtonCreatedMetting";
import { withProtected } from "../../lib/protectRoute.hoc";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "meeting" });

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

  // console.log(user);
  const { register, handleSubmit, errors } = methods;

  const onCreateMeetings = async (data) => {
    // console.log(data);
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
          <Titulo>Crear Reunión</Titulo>
          <div>
            <InputMeetings
              name="nameMeeting"
              placeholder="nameMeeting"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputMeetings
              name="participants"
              placeholder="participants"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputMeetings
              name="description"
              placeholder="description"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputMeetings
              name="date"
              placeholder="date"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <InputMeetings
              name="time"
              placeholder="time"
              ref={register({ required: true })}
            />
          </div>
          <input
            className="image-margin"
            name="image"
            type="file"
            ref={register()}
          />
          <ButtonCreatedMeetings type="submit">
            Crear Reunión
          </ButtonCreatedMeetings>
        </Formulario>
      </>
    </FormContext>
  );
});

export const MeetingsCreate = withProtected(Page);
