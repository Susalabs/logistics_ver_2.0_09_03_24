import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function SuperAdminLayout({ children }) {
  return (
    <div style={{ position: "relative", zIndex: "2" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <span style={{ fontSize: "2.25rem", marginLeft: "10px" }}>
            Logistic App
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ fontSize: "1.50rem" }}>
            <Nav.Link href="/superadmin/companies">Companies</Nav.Link>
            <Nav.Link href="/superadmin/alloutbound">All Outbound</Nav.Link>
            <Nav.Link href="/superadmin/dispatchmanagement">
              Dispatch Management
            </Nav.Link>
            <Nav.Link href="/usertype">UserType</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-4">
        {/* Display the route-specific content */}
        {children}
      </div>
    </div>
  );
}
