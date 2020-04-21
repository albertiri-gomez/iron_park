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
      {/* <Card style={{ width: "18rem" }}> */}
      <div class=" flex-meetings">
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
              {/* <div class="cards-list">
                <div class="card 1">
                  <div class="card_image">
                    {" "}
                    <img src={meeting.image?.url} />
                    <div>
                      <p>{meeting.date}</p>
                      <p>{meeting.participants}</p>
                    </div>
                  </div>
                  <div class="card_title title-white">
                    <p>{meeting.nameMeeting}</p>
                  </div>
                </div>
              </div> */}
              {/* <section id="team" class="pb-5"> */}
              <div class="container">
                <div class="row">
                  {/* <div class="col-xs-12 col-sm-6 col-md-4"> */}
                  <div class="format-w">
                    <div
                      class="image-flip"
                      ontouchstart="this.classList.toggle('hover');"
                    >
                      <div class="mainflip">
                        <div class="frontside">
                          <div class="card">
                            <div class="card-body text-center">
                              <p>
                                <img
                                  class=" img-fluid"
                                  src={meeting.image?.url}
                                  alt="card image"
                                ></img>
                              </p>
                              <h4 class="card-title">{meeting.nameMeeting}</h4>
                              <p class="card-text">{meeting.description}</p>
                            </div>
                          </div>
                        </div>
                        <div class="backside">
                          <div class="card">
                            <div class="card-body text-center mt-4">
                              <h4 class="card-title">{meeting.nameMeeting}</h4>
                              <p class="card-text">{meeting.description}</p>
                              <p class="card-text">
                                Fecha de la reunión: {meeting.date}
                              </p>
                              <p class="card-text">
                                Número de participantes: {meeting.participants}
                              </p>
                              <p class="card-text">
                                Hora de la reunión: {meeting.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </section> */}
            </>
          );
        })}
      </div>

      {/* </Card> */}

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

/* <div class="product-card">
<div class="badge">Hot</div>
<div class="product-tumb">
  <img src="https://i.imgur.com/xdbHo4E.png" alt="">
</div>
<div class="product-details">
  <span class="product-catagory">Women,bag</span>
  <h4><a href="">Women leather bag</a></h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
  <div class="product-bottom-details">
    <div class="product-price"><small>$96.00</small>$230.99</div>
    <div class="product-links">
      <a href=""><i class="fa fa-heart"></i></a>
      <a href=""><i class="fa fa-shopping-cart"></i></a>
    </div>
  </div>
</div>
</div> */

// <div class="cards-list">

//   <div class="card 1">
//     <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
//     <div class="card_title title-white">
//       <p>Card Title</p>
//     </div>
//   </div>
// }

// <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
// <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
// <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <!------ Include the above in your HEAD tag ---------->

// <!-- Team -->
// <section id="team" class="pb-5">
//     <div class="container">
//         <h5 class="section-title h1">OUR TEAM</h5>
//         <div class="row">
//             <!-- Team member -->
//             <div class="col-xs-12 col-sm-6 col-md-4">
//                 <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
//                     <div class="mainflip">
//                         <div class="frontside">
//                             <div class="card">
//                                 <div class="card-body text-center">
//                                     <p><img class=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image"></p>
//                                     <h4 class="card-title">Sunlimetech</h4>
//                                     <p class="card-text">This is basic card with image on top, title, description and button.</p>
//                                     <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
//                                 </div>
//                             </div>
//                         </div>
{
  /* <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Sunlimetech</h4>
                                    <p class="card-text">This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.</p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */
}

<section id="team" class="pb-5">
  <div class="container">
    <h5 class="section-title h1">OUR TEAM</h5>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
          <div class="mainflip">
            <div class="frontside">
              <div class="card">
                <div class="card-body text-center">
                  <p>
                    <img
                      class=" img-fluid"
                      src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
                      alt="card image"
                    ></img>
                  </p>
                  <h4 class="card-title">Sunlimetech</h4>
                  <p class="card-text">
                    This is basic card with image on top, title, description and
                    button.
                  </p>
                  <a href="#" class="btn btn-primary btn-sm">
                    <i class="fa fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="backside">
              <div class="card">
                <div class="card-body text-center mt-4">
                  <h4 class="card-title">Sunlimetech</h4>
                  <p class="card-text">
                    This is basic card with image on top, title, description and
                    button.This is basic card with image on top, title,
                    description and button.This is basic card with image on top,
                    title, description and button.
                  </p>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a
                        class="social-icon text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="fa fa-skype"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="social-icon text-xs-center"
                        target="_blank"
                        href="#"
                      >
                        <i class="fa fa-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
