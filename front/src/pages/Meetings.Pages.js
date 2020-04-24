import React, { useState, useEffect } from "react";
import { getMeeting } from "../../lib/meeting.api";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonCreatedMeetings } from "../components/Formularios/ButtonCreatedMetting";
import moment from "moment";
import { withProtected } from "../../lib/protectRoute.hoc";

const Page = (props) => {
  const [meetings, setMeeting] = useState([]);

  useEffect(() => {
    getMeeting(props).then((meeting) => setMeeting(meeting));
  }, []);
  return (
    <>
      <div className=" flex-meetings">
        {meetings.map((meeting, index) => {
          return (
            <div className="container" key={index}>
              <div className="row">
                {/* <div className="col-xs-12 col-sm-6 col-md-4"> */}
                <div className="format-w">
                  <div
                    className="image-flip"
                    // ontouchstart="this.classList.toggle('hover');"
                  >
                    <div className="mainflip">
                      <div className="frontside">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid"
                                src={meeting.image?.url}
                                alt="card image"
                              ></img>
                            </p>
                            <h4 className="card-title">
                              {meeting.nameMeeting}
                            </h4>
                            <p className="card-text">{meeting.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">
                              {meeting.nameMeeting}
                            </h4>
                            <p className="card-text">{meeting.description}</p>
                            <p className="card-text">
                              <span className="span-color">
                                Fecha de la reunión:
                              </span>{" "}
                              {moment().format("MMMM Do YYYY", meeting.date)}
                            </p>
                            <p className="card-text">
                              <span className="span-color">
                                {" "}
                                Número de participantes:
                              </span>{" "}
                              {meeting.participants}
                            </p>
                            <p className="card-text">
                              <span className="span-color">
                                {" "}
                                Hora de la reunión:
                              </span>{" "}
                              {meeting.time}
                            </p>
                          </div>
                        </div>
                      </div>
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
            <ButtonCreatedMeetings>
              <Link to="/create_meeting" className="Button-meeting">
                Crear reunion
              </Link>
            </ButtonCreatedMeetings>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export const MeetingsPages = withProtected(Page);
