import React from "react";
import "./AllOutBound.css"; // Import your custom CSS file
import SuperAdminLayout from "./Layouts/SuperAdminLayout";

export default function AllOutBound() {
  // Sample data for demonstration
  const tableData = [
    {
      srNo: 1,
      invoiceId: "INV001",
      companyName: "Company A",
      outboundTimestamp: "2022-01-01",
      outboundMethod: "Air",
      trackingId: "123456",
      outboundStatus: "Shipped",
    },
    // Add more data as needed
  ];

  return (
    <>
      <SuperAdminLayout />
      <div className="all-outbound-container">
        <h1>All OutBound</h1>

        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Table */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Invoice ID</th>
              <th>Company Name</th>
              <th>Outbound Timestamp</th>
              <th>Outbound Method</th>
              <th>Tracking ID</th>
              <th>Outbound Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.srNo}</td>
                <td>{row.invoiceId}</td>
                <td>{row.companyName}</td>
                <td>{row.outboundTimestamp}</td>
                <td>{row.outboundMethod}</td>
                <td>{row.trackingId}</td>
                <td>{row.outboundStatus}</td>
                <td>
                  {/* Add your custom actions/buttons here */}
                  <button>Edit</button>
                  <button style={{ backgroundColor: "red" }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className="pagination">
          <span>Items per page:</span>
          <select>
            <option>5</option>
            {/* Add more options as needed */}
          </select>
          <span>0 of 0</span>
        </div>
      </div>
    </>
  );
}
