import React, { useState, useContext } from "react";
import { ButtonForm } from "./Formularios/Formulario";
import { InputBox } from "./Input";
import { ButtonAddDog } from "./Formularios/ButtonAddDog";
import { ButtonCancel } from "./Formularios/ButtonCancel";

export const Button_dog = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [dogName, setDogName] = useState("");
  const [hasDog, setHasDog] = useState("");
  const onSubmit = async (data) => {
    console.log("data", data);

    const responseServer = await doSignup(data);

    if (responseServer.status) {
      return history.push("/login");
    }

    setUser(data);

    history.push("/login");
  };

  const cleanInput = () => {
    setDogName("");
  };
  const showForm = () => {
    setShowButton(!showButton);
    cleanInput();
  };

  if (!showButton) {
    return (
      <div className="field">
        <div className="control">
          <ButtonAddDog className="button is-link" onClick={() => showForm()}>
            Añade a tu perro
          </ButtonAddDog>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <div className="control">
            <ButtonCancel
              className="button is-danger"
              onClick={() => showForm()}
            >
              Cancelar
            </ButtonCancel>
          </div>
        </div>
        <div className="field">
          {/* <label className="label">dogName</label> */}
          <div className="control">
            <InputBox
              className="input"
              type="text"
              name="dogName"
              placeholder="dogName"
              // value={dogName}
              ref={props.register()}
              // onChange={(e) => setDogName(e.target.value)}
            />
          </div>
        </div>
      </>
    );
  }
};
