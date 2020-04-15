import styled from "styled-components";

export const Formulario = styled.form`
  * {
    transition: 0.4s;
    box-sizing: border-box;
    font-family: "arial";
  }
  ::selection {
    background: rgba(219, 68, 55, 0.3);
  }
  ::placeholder {
    color: blue;
    font-size: 1.5em;
  }
  body {
    background: rgba(0, 0, 0, 0.8);
  }
  width: 50%;
  margin: auto;
  text-align: center;
  background: #fff;
  padding-top: 30px;
  border-radius: 10px;
`;

export const Titulo = styled.div`
  color: #444;
  font-size: 1.6em;
  font-weight: bold;
  margin: 0px 0 30px 0;
  border-bottom: 1px solid #ccc;
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
  text-align: left;
`;

export const ButtonForm = styled.button`box-sizing: border-box;
appearance: none;
background-color: transparent;
border: 2px solid #33A2FF;
border-radius: 0.6em;
color: #33A2FF;
cursor: pointer;
display: flex;
align-self: center;
font-size: 1rem;
font-weight: 400;
line-height: 1;
margin: auto;
padding: 1.2em 2.8em;
text-decoration: none;
text-align: center;
text-transform: uppercase;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
margin-top:25px;

&:hover,
&:focus {
  color: #33A2FF;
  outline: 0;
}
}
.first {
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
&:hover {
  box-shadow: 0 0 40px 40px $red inset;
}
`;
