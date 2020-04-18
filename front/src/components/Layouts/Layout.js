import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container">{children}</section>
      <Footer />
    </>
  );
};
