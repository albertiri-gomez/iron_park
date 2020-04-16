import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 50px;
  }
`;

export const Loading = () => (
  <LoadingWrapper>
    <img src="https://media1.tenor.com/images/85d269dc9595a7bcf87fd0fa4039dd9f/tenor.gif?itemid=8647480" />
  </LoadingWrapper>
);
