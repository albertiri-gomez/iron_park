import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonLogin } from "../components/Index/ButtonLogin";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://s1.1zoom.me/big0/135/Parks_Spain_Madrid_472373.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  margin: 0%;
  padding: 0;
  height: 100%;
`;

export const Index = () => (
  <Container>
    <ButtonLogin>
      {" "}
      <Link to="login" className="login-color">
        LOGIN
      </Link>
    </ButtonLogin>
    <ButtonLogin>
      <Link to="signUp" className="login-color">
        REGISTRATE
      </Link>
    </ButtonLogin>
  </Container>
);
