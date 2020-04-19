import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
import { getDogs } from "../../lib/dog.api";
import { Nav } from "react-bootstrap";
import { ButtonCreatedDogs } from "../components/Formularios/ButtonCreatedDogs";

export const DogPages = (props) => {
  const [dogs, setDogs] = useState([]);
  console.log();

  useEffect(() => {
    getDogs().then((dog) => setDogs(dog));
  }, []);

  return (
    <>
      <div className="contenedor">
        {dogs?.map((dog) => {
          return (
            <>
              <div className="contenedor-cards">
                <div className="contenedor-card-item">
                  <div className="contenedor-card-item-wrapper">
                    <img src={dog.image?.url}></img>
                    <div className="contenedor-info">
                      <div className="info">
                        <p className="titulo">{dog.dogName}</p>
                        <p className="titulo">{dog.race}</p>
                        <p className="titulo">{dog.description}</p>
                        {/* <span className="categoria">{dog.description}</span> */}
                      </div>
                      <div className="fondo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <Nav defaultActiveKey="/home" as="ul">
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

// <Card style={{ width: "18rem" }}>
//       {dogs?.map((dog) => {
//         return (
//           <>
//             <Card.Body>
//               <Card.Img variant="top" src={dog.image?.url} />
//               <Card.Title>{dog.dogName}</Card.Title>
//               <Card.Text>{dog.description}</Card.Text>
//               <Card.Text>{dog.race}</Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//           </>
//         );
//       })}
//     </Card>
