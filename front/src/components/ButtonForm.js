import React from "react";
import styled from "styled-components";

export const ButtonForm = styled.button`box-sizing: border-box;
appearance: none;
background-color: transparent;
border: 2px solid #db4437;
border-radius: 0.6em;
color: #db4437;
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
  color: #db4437;
  outline: 0;
}
}
.first {
transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
&:hover {
  box-shadow: 0 0 40px 40px $red inset;
}

`;
