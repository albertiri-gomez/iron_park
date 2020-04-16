import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
import { getDogs } from "../../lib/dog.api";
import { Nav } from "react-bootstrap";

export const DogPages = (props) => {
  const [dogs, setDogs] = useState([]);
  console.log();

  useEffect(() => {
    getDogs().then((dog) => setDogs(dog));
  }, []);
  // const { user, setUser } = useContext(ApiContext);

  // const onClick = async (e) => {
  //   e.preventDefault();
  //   await getDogs();
  //   setUser(null);
  //   history.push("/");
  // };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {dogs?.map((dog) => {
          return (
            <>
              <Card.Body>
                <Card.Img variant="top" src={dog.image} />
                <Card.Title>{dog.dogName}</Card.Title>
                <Card.Text>{dog.description}</Card.Text>
                <Card.Text>{dog.race}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </>
          );
        })}
      </Card>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link as="div">
            <Link to="/create_dog">Crear Peroo</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

// dogName, race, description, image
