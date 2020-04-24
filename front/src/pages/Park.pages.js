import React, { useState, useEffect } from "react";
import { getParks } from "../../lib/park.api";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { withProtected } from "../../lib/protectRoute.hoc";

export const ParkPages = (props) => {
  const [parks, setParks] = useState([]);
  useEffect(() => {
    getParks().then((park) => setParks(park));
  }, []);
  return (
    <>
      <div className="contenedor">
        {parks?.map((park, index) => {
          return (
            <CardGroup key={index} className="park-center-cards">
              <Card>
                <Card.Img
                  variant="top"
                  src={park.image}
                  className="foto-parks"
                />
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
                    Ir al parque
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          );
        })}
      </div>
    </>
  );
};

//  export const ParkPages = withProtected(Page);
