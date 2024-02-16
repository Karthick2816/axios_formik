import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="md" className="bg-success">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            <b>Library</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/")}>
                <b>Book Details</b>
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/dashboard-author")}>
                <b>Authors Details</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
