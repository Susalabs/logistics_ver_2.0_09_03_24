import React, { useState } from "react";
import DispatcherLayout from "./Layouts/DispatcherLayout";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

const AllWareHouses = () => {
  const [warehouses, setWarehouses] = useState([
    {
      id: 1,
      city: "City A",
      address: "123 Main St, City A",
      occupancy: 80,
    },
    {
      id: 2,
      city: "City B",
      address: "456 Oak St, City B",
      occupancy: 60,
    },
    // Add more warehouses as needed
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newWarehouse, setNewWarehouse] = useState({
    city: "",
    address: "",
    occupancy: 0,
  });

  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleAddWarehouse = () => {
    // Add logic to handle the addition of a new warehouse
    setWarehouses((prevWarehouses) => [
      ...prevWarehouses,
      {
        id: prevWarehouses.length + 1,
        ...newWarehouse,
      },
    ]);
    // Add any further actions or validations as needed
    handleCloseAddModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWarehouse((prevWarehouse) => ({
      ...prevWarehouse,
      [name]: value,
    }));
  };

  return (
    <div>
      <DispatcherLayout />
      <Container className="mt-4">
        <h2>All Warehouses</h2>

        {/* Add New Warehouse Button */}
        <Button variant="success" onClick={handleShowAddModal} className="mb-3">
          Add New Warehouse
        </Button>

        {/* Warehouses Table */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>City</th>
              <th>Address</th>
              <th>Occupancy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map((warehouse, index) => (
              <tr key={warehouse.id}>
                <td>{index + 1}</td>
                <td>{warehouse.city}</td>
                <td>{warehouse.address}</td>
                <td>{warehouse.occupancy}%</td>
                <td>
                  {/* Add actions buttons or links */}
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

        {/* Add New Warehouse Modal */}
        <Modal show={showAddModal} onHide={handleCloseAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Warehouse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formCity">
                <Form.Label>City *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  name="city"
                  value={newWarehouse.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  name="address"
                  value={newWarehouse.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formOccupancy">
                <Form.Label>Occupancy *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Occupancy"
                  name="occupancy"
                  value={newWarehouse.occupancy}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddWarehouse}>
              Add Warehouse
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default AllWareHouses;
