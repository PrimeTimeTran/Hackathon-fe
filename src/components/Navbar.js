import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";

import { useTranslation } from "react-i18next";
import "../translations/i18n";

export default function Navbarr() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">{t("codevid_relief")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/map">{t("map")}</Nav.Link>
              <Nav.Link href="/">{t("activity")}</Nav.Link>
              <Nav.Link href="/donations">{t("requests")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
