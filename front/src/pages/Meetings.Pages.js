import React, { useState, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { getDogs } from "../../lib/dog.api";
import { ApiContext } from "../../context/ApiContext";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export const MeetingsPages = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as="div">
          <Link to="/create_meeting">Crear reunion</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
