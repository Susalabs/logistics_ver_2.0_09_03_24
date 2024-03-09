import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import DispatcherLayout from "./Layouts/DispatcherLayout";

const ManageTransporters = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [transporters, setTransporters] = useState([
    {
      id: 1,
      name: "airbus",
      vehicleNumber: "dl2cau544",
      transporterProof: "pic",
      vehicleProof: "pic",
    },
  ]);
  const [newTransporter, setNewTransporter] = useState({
    name: "",
    vehicleNumber: "",
    transporterProof: "",
    vehicleProof: "",
  });

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleAddTransporter = () => {
    setTransporters((prevTransporters) => [
      ...prevTransporters,
      {
        id: prevTransporters.length + 1,
        ...newTransporter,
      },
    ]);
    handleCloseAddModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransporter((prevTransporter) => ({
      ...prevTransporter,
      [name]: value,
    }));
  };

  return (
    <div>
      <DispatcherLayout />
      <Container className="mt-4">
        <h2>Transporters of Company</h2>

        {/* Add New Transporter Button */}
        <Button variant="success" onClick={handleShowAddModal} className="mb-3">
          Add New Transporter
        </Button>

        {/* Transporters Table */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Transporter Name</th>
              <th>Vehicle Number</th>
              <th>Transporter Proof</th>
              <th>Vehicle Proof</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transporters.map((transporter) => (
              <tr key={transporter.id}>
                <td>{transporter.id}</td>
                <td>{transporter.name}</td>
                <td>{transporter.vehicleNumber}</td>
                <td>
                  <a
                    href={transporter.transporterProof}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Proof
                  </a>
                </td>
                <td>
                  <a
                    href={transporter.vehicleProof}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Proof
                  </a>
                </td>
                <td>
                  <Button variant="primary" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Add New Transporter Modal */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Transporter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formTransporterName">
                <Form.Label>Transporter Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Transporter Name"
                  name="name"
                  value={newTransporter.name}
                  onChange={handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  Transporter Name is Required!
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formVehicleNumber">
                <Form.Label>Vehicle Number (Full) *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Vehicle Number"
                  name="vehicleNumber"
                  value={newTransporter.vehicleNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTransporterProof">
                <Form.Label>Transporter Proof</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Transporter Proof"
                  name="transporterProof"
                  value={newTransporter.transporterProof}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formVehicleProof">
                <Form.Label>Vehicle Proof</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Vehicle Proof"
                  name="vehicleProof"
                  value={newTransporter.vehicleProof}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddTransporter}>
              Add Transporter
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default ManageTransporters;
