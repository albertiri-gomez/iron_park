import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Index = () => (
  <Container>
    <Link to="login">LOG IN</Link>
    <Link to="signUp">SING UP</Link>
  </Container>
);
