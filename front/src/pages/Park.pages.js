import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getParks } from "../../lib/park.api";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ParkPages = (props) => {
  const [parks, setParks] = useState([]);
  console.log(parks);
  useEffect(() => {
    getParks().then((park) => setParks(park));
  }, []);

  // console.log(getParks());

  return (
    <>
      <Card style={{ width: "18rem" }}>
        {parks?.map((park) => {
          return (
            <>
              {/* <Card.Img variant="top" src={dogs.image} /> */}
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
                <Card.Text>{park.description}</Card.Text>
                {/* <Card.Text>{park.address}</Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
                {/* <Link to="/create_meeting">ir al parque</Link> */}
              </Card.Body>
            </>
          );
        })}
      </Card>
      {/* <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link as="div">
            <Link to="/create_meeting">Crear reunion</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
    </>
  );
};
