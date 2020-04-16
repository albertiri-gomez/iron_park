import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { useForm, FormContext } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { InputDogs } from "../components/Formularios/InputDogs";
import { createDogs } from "../../lib/dog.api";
import { Formulario, Titulo } from "../components/Formularios/Formulario";
import { ButtonCreatedDogs } from "../components/Formularios/ButtonCreatedDogs";
import { changeAvatar } from "../../lib/image.api";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "dogs" });

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
    console.log(data);
    // const myDog = data.image[0];
    // changeAvatar(myDog)
    //   .then((res) => {
    //     console.log("Changed File");
    //     setUser(res.data.user);
    //   })
    //   .catch((e) => {
    //     console.log("Error uploading file");
    //     console.log(e);
    //   });
    console.log("data", data);
    await createDogs(data);
    setUser(data);
    history.push("/dog");
  };

  // let imgPath;
  // if (user.profilePic) {
  //   // LOCAL FILE
  //   const localPath = _.get(user, "profilePic.path");
  //   if (localPath) {
  //     imgPath = `http://localhost:3000/${localPath}`;
  //   } else {
  //     // CLOUDINARY FILE
  //     //imgPath = _.get(user, "profilePic.url");
  //     const imgID = _.get(user, "profilePic.public_id");
  //     console.log("Generate image", imgID);
  //     imgPath = cl.url(imgID, { width: 200, crop: "fit" });
  //     console.log(imgPath);
  //   }
  // }

  return (
    <FormContext {...methods}>
      <>
        <Formulario onSubmit={handleSubmit(onCreateDogs)}>
          {/* <div>
            <label>Usuario</label>
            <InputDogs
              // className={hasError(errors, "username")}
              name="username"
              ref={register({ required: true })}
            />
          </div> */}
          <div>
            <label>Nombre del perro</label>
            <InputDogs
              // className={hasError(errors, "password")}
              name="dogName"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Raza</label>
            <InputDogs
              // className={hasError(errors, "course")}
              name="race"
              ref={register({ required: true })}
            />
          </div>
          <div>
            <label>Descripción</label>
            <InputDogs
              // className={hasError(errors, "course")}
              name="description"
              ref={register({ required: true })}
            />
          </div>
          {/* {imgPath && (
            <div>
              <img
                src={imgPath}
                width="200"
                style={{ border: "1px solid red" }}
              />
            </div>
          )} */}
          <input name="image" type="file" ref={register()} />

          {/* <div>
            <label>Imagen</label>
            <InputDogs
              // className={hasError(errors, "course")}
              name="image"
              ref={register({ required: true })}
            />
          </div> */}
          <ButtonCreatedDogs type="submit">Crear Perro</ButtonCreatedDogs>
        </Formulario>
      </>
    </FormContext>
  );
});
