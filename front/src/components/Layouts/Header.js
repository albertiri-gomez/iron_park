import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as="div">
        <Link to="/">Home</Link>
      </Navbar.Brand>
      {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as="div">
            <Link to="/park">PARK</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/profile">Profile</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/dog">Dog</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/meeting">Metting</Link>
          </Nav.Link>

          {/* <Nav.Link href="/" onClick={handleLogout}>
            Logout
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
