import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { getDogs } from "../../lib/dog.api";
import { ApiContext } from "../../context/ApiContext";
import { withRouter } from "react-router-dom";

export const DogPages = withRouter(({ history }) => {
  console.log(getDogs);
  const { dog, setDog } = useState(getDogs);
  const { user, setUser } = useContext(ApiContext);

  const onClick = async (e) => {
    e.preventDefault();
    await getDogs();
    setUser(null);
    history.push("/dog");
  };

  return (
    <Card style={{ width: "18rem" }}>
      {dog.map((dogs) => {
        return (
          <>
            <Card.Img variant="top" src={dogs.image} />
            <Card.Body>
              <Card.Title>{dogs.dogName}</Card.Title>
              <Card.Text>{dogs.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </>
        );
      })}
    </Card>
  );
});

// dogName, race, description, image
