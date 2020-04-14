import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getMeeting } from "../../lib/meeting.api";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const MeetingsPages = (props) => {
  const [meetings, setMeeting] = useState([]);

  useEffect(() => {
    getMeeting(props).then((meeting) => setMeeting(meeting));
  }, []);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {meetings.map((meeting) => {
          return (
            <>
              {/* <Card.Img variant="top" src={dogs.image} /> */}
              <Card.Body>
                <Card.Title>{meeting.nameMeeting}</Card.Title>
                <Card.Text>{meeting.description}</Card.Text>
                <Card.Text>{meeting.date}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </>
          );
        })}
      </Card>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link as="div">
            <Link to="/create_meeting">Crear reunion</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
