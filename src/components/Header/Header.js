import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

// import { useHistory } from "react-router-dom";
// import RequestForm from "../RequestFrom";

import logo from "./logo.png";

const Header = () => {
  // const [open, setOpen] = useState(false);

  // const history = useHistory();

  // const HandleClickOpen = () => {
  //   console.log(typeof localStorage.getItem("isLoggedIn"));
  //   if (localStorage.getItem("isLoggedIn") === "true") {
  //     console.log("if");
  //     setOpen(true);
  //   } else {
  //     console.log("else");
  //     alert("Please log in to use this function.");
  //     history.push("/login");
  //   }
  // };

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
            style={{ textDecoration: "none", flexBasis: "32%" }}
            as={Link}
            to={`/`}
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
            {/* <div className=" justify-content-md-center">
            <Nav className="mr-auto justify-content-end">
              <Button
                variant="outlined"
                color="danger"
                onClick={HandleClickOpen}
              >
                Make a request
              </Button>
            </Nav>
          </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <RequestForm open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Header;
