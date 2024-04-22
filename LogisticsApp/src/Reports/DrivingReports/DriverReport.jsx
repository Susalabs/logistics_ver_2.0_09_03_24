import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default function DriverReport() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={2}>
          {/* Toggle button for side nav */}
          <Button variant="primary" onClick={toggleNav} className="mb-2">
            {showNav ? "Hide Nav" : "Show Nav"}
          </Button>

          {/* Side navigation */}
          {showNav && (
            <nav>
              {/* Add your side navigation content here */}
              <ul>
                <li>Best Performer</li>
                <li>Effective K.M.</li>
                <li>Dead K.M.</li>
              </ul>
            </nav>
          )}
        </Col>
        <Col md={showNav ? 10 : 12}>
          <Form>
            <Form.Group controlId="source">
              <Form.Label>Source</Form.Label>
              <Form.Control type="text" placeholder="Enter source location" />
            </Form.Group>

            <Form.Group controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination location"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Get Directions
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
