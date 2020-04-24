import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDogs } from "../../lib/dog.api";
import { Nav } from "react-bootstrap";
import { ButtonCreatedDogs } from "../components/Formularios/ButtonCreatedDogs";
import { withProtected } from "../../lib/protectRoute.hoc";

export const Page = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    getDogs().then((dog) => setDogs(dog));
  }, []);
  return (
    <>
      <div className="contenedor">
        {dogs?.map((dog, i) => {
          return (
            <div key={i}>
              <div className="contenedor-cards">
                <div className="contenedor-card-item">
                  <div className="contenedor-card-item-wrapper">
                    <img src={dog.image?.url}></img>
                    <div className="contenedor-info">
                      <div className="info">
                        <p className="titulo">
                          <span className="span-color-dog">Nombre:</span>{" "}
                          {dog.dogName}
                        </p>
                        <p className="titulo">
                          <span className="span-color-dog">Raza:</span>{" "}
                          {dog.race}
                        </p>
                        <p className="titulo">
                          <span className="span-color-dog">Descripción:</span>{" "}
                          {dog.description}
                        </p>
                      </div>
                      <div className="fondo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Nav defaultActiveKey="/home" as="ul" className="center-button">
        <Nav.Item as="li">
          <Nav.Link as="div">
            <ButtonCreatedDogs>
              <Link to="/create_dog" className="button-dog">
                Crear Perro
              </Link>
            </ButtonCreatedDogs>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export const DogPages = withProtected(Page);
