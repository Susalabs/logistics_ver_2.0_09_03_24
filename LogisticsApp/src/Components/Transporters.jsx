import React, { useState } from "react";
import {
  Container,
  Table,
  Pagination,
  Button,
  Collapse,
} from "react-bootstrap";
import DispatcherLayout from "./Layouts/DispatcherLayout";

const ManageTransporters = () => {
  const [unassignedOutboundsOpen, setUnassignedOutboundsOpen] = useState(false);
  const [assignedOutboundsOpen, setAssignedOutboundsOpen] = useState(false);

  const toggleUnassignedOutbounds = () =>
    setUnassignedOutboundsOpen(!unassignedOutboundsOpen);
  const toggleAssignedOutbounds = () =>
    setAssignedOutboundsOpen(!assignedOutboundsOpen);

  return (
    <div>
      <DispatcherLayout />

      <Container className="mt-4">
        <h2>Transporters</h2>

        {/* Unassigned Outbounds */}
        <h4>
          <Button
            variant="link"
            onClick={toggleUnassignedOutbounds}
            aria-controls="unassigned-outbounds"
            aria-expanded={unassignedOutboundsOpen}
            
          >
            Unassigned Outbounds
          </Button>
        </h4>
        <Collapse in={unassignedOutboundsOpen}>
          <div id="unassigned-outbounds">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Company Name</th>
                  <th>Warehouse Name</th>
                  <th>Tracking ID#</th>
                  <th>Items Quantity</th>
                  <th>Outbound Method</th>
                  <th>Outbound Timestamp</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through unassigned outbounds data */}
                {/* Example row */}
                <tr>
                  <td>1</td>
                  <td>Company A</td>
                  <td>Warehouse X</td>
                  <td>123456789</td>
                  <td>5</td>
                  <td>Standard</td>
                  <td>2022-03-09 12:00 PM</td>
                  <td>
                    {/* Add actions buttons or links */}
                    <button className="btn btn-primary">Assign</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </div>
        </Collapse>

        {/* Assigned Outbounds */}
        <h4>
          <Button
            variant="link"
            onClick={toggleAssignedOutbounds}
            aria-controls="assigned-outbounds"
            aria-expanded={assignedOutboundsOpen}
          >
            Assigned Outbounds
          </Button>
        </h4>
        <Collapse in={assignedOutboundsOpen}>
          <div id="assigned-outbounds">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Company Name</th>
                  <th>Warehouse Name</th>
                  <th>Tracking ID#</th>
                  <th>Items Quantity</th>
                  <th>Outbound Method</th>
                  <th>Outbound Timestamp</th>
                  <th>Transporter Name</th>
                  <th>Vehicle Number</th>
                  <th>Outbound Status</th>
                  <th>Items Photo</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through assigned outbounds data */}
                {/* Example row */}
                <tr>
                  <td>1</td>
                  <td>Company B</td>
                  <td>Warehouse Y</td>
                  <td>987654321</td>
                  <td>8</td>
                  <td>Express</td>
                  <td>2022-03-10 03:30 PM</td>
                  <td>Transporter ABC</td>
                  <td>XYZ 123</td>
                  <td>Delivered</td>
                  <td>
                    {/* Add items photo or relevant content */}
                    <img
                      src="example.jpg"
                      alt="Item"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </div>
        </Collapse>

        {/* Pagination */}
        <Pagination className="mt-3">
          {/* ... pagination structure */}
        </Pagination>
      </Container>
    </div>
  );
};

export default ManageTransporters;
