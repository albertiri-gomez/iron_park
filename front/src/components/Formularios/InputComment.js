import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return;
};

const InputText = styled.textarea`
  display: block;
  padding: 8px 8px;
  margin: auto;
  margin-bottom: 8px;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 2px;
  color: #444;
  font-size: 1.1em;

  :focus {
    outline: none;
    border: none;
    border-left: 13px solid #33a2ff;
    box-shadow: 1px 5px 10px #ccc;
    opacity: 1;
    left: 30px;
    transition: all 0.25s ease-out;
  }
`;

export const InputComment = React.forwardRef(
  ({ label, name, type, placeholder = "text" }, ref) => {
    const { errors } = useFormContext();
    return (
      <div>
        <label>{label}</label>
        <InputText
          type={type}
          className={hasError(errors, name)}
          name={name}
          ref={ref}
          placeholder={placeholder}
        />
        {errors[name]?.message && <div>{errors[name].message}</div>}
      </div>
    );
  }
);
