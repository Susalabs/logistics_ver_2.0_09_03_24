import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default function Route() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as fetching directions or updating the map
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="source">
              <Form.Label>Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source location"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination location"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Get Directions
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          {/* Google Maps component or map space */}
          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundColor: "#f0f0f0",
            }}
          >
            {/* You can render Google Maps here */}
            {/* For now, it's just a placeholder with a gray background */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
