import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "./logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        className="nav-bar justify-content-md-space-between justify-content-sm-space-around navpar"
        variant="light"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Link
            as={Link}
            to={`/`}
            style={{ textDecoration: "none", flexBasis: "32%" }}
          >
            <img
              src={logo}
              alt=""
              width="32"
              height="32"
              className="d-inline-block align-top"
            />
            <Navbar.Brand>SOS Map</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navHam" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Nav.Link as={Link} to="/funding">
                Quyên góp
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Về chúng tôi
              </Nav.Link>
              <Nav.Link as={Link} to="/stories">
                Câu chuyện
              </Nav.Link>
              <Nav.Link as={Link} to="/map">
                Bản đồ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
