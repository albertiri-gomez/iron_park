import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getMeeting } from "../../lib/meeting.api";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  cardRow,
  cardHeader,
  cardDate,
  cardContent,
} from "../components/Cards/cardsMeeting";

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
              {/* <ul class="menu-content">
                      <li>
                        <a href="#" class="fa fa-bookmark-o"></a>
                      </li>
                      <li>
                        <a href="#" class="fa fa-heart-o">
                          <span>18</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="fa fa-comment-o">
                          <span>3</span>
                        </a>
                      </li>
                    </ul> */}
              <Card.Img variant="top" src={meeting.image} />
              <Card.Body>
                <Card.Title>{meeting.nameMeeting}</Card.Title>
                <Card.Text>{meeting.description}</Card.Text>
                <Card.Text>{meeting.date}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
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
