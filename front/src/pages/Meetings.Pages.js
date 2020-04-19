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
              {/* <Card.Img variant="top" src={meeting.image.url} />
              <Card.Body>
                <Card.Title>{meeting.nameMeeting}</Card.Title>
                <Card.Text>{meeting.description}</Card.Text>
                <Card.Text>{meeting.date}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body> */}
              <div class="row">
                <div class="example-1 card">
                  <div class="wrapper">
                    <div class="date">{meeting.date}</div>
                    <div class="data">
                      <div class="content">
                        <span class="author">{meeting.nameMeeting}</span>
                        <h1 class="title">
                          <a href="#">{meeting.participants}</a>
                        </h1>
                        <p class="text">{meeting.description}</p>
                        <label for="show-menu" class="menu-button">
                          <span></span>
                        </label>
                      </div>
                      <input type="checkbox" id="show-menu" />
                      <ul class="menu-content">
                        <li>
                          <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li>
                          <a href="#" class="fa fa-heart-o">
                            <span>47</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" class="fa fa-comment-o">
                            <span>8</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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

{
  /* <div class="row">
  <div class="example-1 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <h1 class="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
          <p class="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
          <label for="show-menu" class="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-bookmark-o"></a>
          </li>
          <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
          <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
        </ul>
      </div>
    </div>
  </div> */
}
