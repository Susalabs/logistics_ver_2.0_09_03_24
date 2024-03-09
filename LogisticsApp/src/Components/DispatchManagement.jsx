import React from "react";
import "./DispatchManagement.css"; // Import your custom CSS file
import SuperAdminLayout from "./Layouts/SuperAdminLayout";

export default function DispatchManagement() {
  // Sample data for demonstration
  const tableData = [
    {
      srNo: 1,
      invoiceId: "INV001",
      companyName: "Company A",
      rejectionTimestamp: "2022-01-15",
      outboundMethod: "Air",
      photo: "URL_to_photo",
    },
    // Add more data as needed
  ];

  return (
    <>
      <SuperAdminLayout />
      <div className="dispatch-management-container">
        <h1>Dispatch Management</h1>

        {/* Table */}
        <table className="custom-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Invoice ID</th>
              <th>Company Name</th>
              <th>Timestamp of Rejection</th>
              <th>Photo</th>
              <th>Outbound Method</th>
              <th>Send to Factory</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.srNo}</td>
                <td>{row.invoiceId}</td>
                <td>{row.companyName}</td>
                <td>{row.rejectionTimestamp}</td>
                <td>
                  <img src={row.photo} alt="Rejection Photo" />
                </td>
                <td>{row.outboundMethod}</td>
                <td>
                  {/* Add your custom actions/buttons here */}
                  <button>Send</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
