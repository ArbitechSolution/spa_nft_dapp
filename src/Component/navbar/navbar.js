import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../asset/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function ShowNavbar({ changeRouteFalse, changeRouteTrue }) {
  let history = useHistory();
  return (
    <div className="fluid-container">
      {/* <div className="container"> */}
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ background: "black" }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="">
            <Link to="/">
              <img
                alt=""
                src={logo}
                // width="70"
                onClick={() => {
                  changeRouteTrue();
                }}
                className="d-inline-block align-top offset-md-12 navbarlogo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" variant="white" />
          <Navbar.Collapse className="justify-content-start">
            <Navbar.Text variant="white" style={{ color: "white", border: "" }}>
              <a href="" width="40px">
                <FaTwitter size={30} className="m-3" />
              </a>
            </Navbar.Text>
            <Navbar.Text
              variant="white"
              style={{ color: "white" }}
              className="m-3"
            >
              <a href="">
                <AiFillInstagram size={30} />
              </a>
            </Navbar.Text>
            <Navbar.Text
              variant="white"
              style={{ color: "white" }}
              className="m-3"
            >
              <a href="" width="40px">
                <FaDiscord size={30} />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
            // style={{ border: "2px solid red" }}
          >
            <Nav className="me-auto offset-md-1">
              <Nav.Link
                href="#story"
                className="px-4 navbarcol"
                style={{ color: "white" }}
              >
                {/* <Link to="/" style={{ color: "white", textDecoration: "none" }}> */}
                <b
                  onClick={() => {
                    changeRouteTrue();
                  }}
                >
                  {" "}
                  STORY
                </b>
                {/* </Link> */}
              </Nav.Link>
              <Nav.Link
                href="#roadmap"
                className="px-4 navbarcol"
                style={{ color: "white" }}
              >
                {/* <Link to="" style={{ color: "white", textDecoration: "none" }}> */}{" "}
                <b
                  onClick={() => {
                    changeRouteTrue();
                  }}
                >
                  {" "}
                  ROADMAP
                </b>
                {/* </Link> */}
              </Nav.Link>
              <Nav.Link
                href="#membership"
                className="px-4 navbarcol"
                style={{ color: "white" }}
              >
                <b
                  onClick={() => {
                    changeRouteTrue();
                  }}
                >
                  MEMBERSHIP
                </b>
              </Nav.Link>
              <Nav.Link
                href="#membership"
                className="px-4 navbarcol"
                style={{ color: "white" }}
              >
                <b
                  onClick={() => {
                    window.scrollTo(0, 0);
                    changeRouteFalse();
                  }}
                >
                  MINT
                </b>
              </Nav.Link>
              {/* <Nav.Link
                
                className="px-4 navbarcol"
                style={{ color: "white" }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  changeRouteFalse();
                }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                <b>MINT</b>
                </Link>
              </Nav.Link> */}
              <Nav.Link
                href="#link"
                className=" navbarcol"
                style={{ color: "white" }}
              >
                <Button variant="primary" size="sm">
                  CONNECT METAMASK
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* </div> */}
    </div>
  );
}

export default ShowNavbar;
