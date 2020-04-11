import React, { useState, useContext } from "react";
import { FormContext, useForm } from "react-hook-form";
import { InputBox } from "../components/Input";

export const Button_dog = () => {
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
          <button className="button is-link" onClick={() => showForm()}>
            Add Dog
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <div className="control">
            <button className="button is-danger" onClick={() => showForm()}>
              Cancel
            </button>
          </div>
        </div>
        <div className="field">
          <label className="label">dogName</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Food name"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            />
          </div>
        </div>
      </>
    );
  }
};
