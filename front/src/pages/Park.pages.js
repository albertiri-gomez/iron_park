import React, { useState, useEffect } from "react";
import { getParks } from "../../lib/park.api";
import { Link, Route, Switch } from "react-router-dom";
import { ParkDetail } from "../pages/ParkDetail.pages";
import { ApiContext } from "../../context/ApiContext";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ParkPages = (props) => {
  const [parks, setParks] = useState([]);
  // console.log(parks);
  useEffect(() => {
    getParks().then((park) => setParks(park));
  }, []);

  // console.log(getParks());

  return (
    <>
      {/* <Card style={{ width: "18rem" }}> */}
      <div className="contenedor">
        {parks?.map((park, index) => {
          return (
            <>
              <CardGroup key={index} className="park-center-cards">
                <Card>
                  <Card.Img variant="top" src={park.image} />
                  <Card.Body>
                    <Card.Title className="park-text-center">
                      {park.name}
                    </Card.Title>
                    <Card.Text>
                      {park.address.locality}, {park.address.postalCode}
                    </Card.Text>
                    <Card.Text>{park.address.streetAddress}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link
                      to={`/ParkDetail/${park._id}`}
                      className="park-text-center"
                    >
                      ir al parque
                    </Link>
                  </Card.Footer>
                </Card>
              </CardGroup>
            </>
          );
        })}
      </div>
    </>
  );
};
