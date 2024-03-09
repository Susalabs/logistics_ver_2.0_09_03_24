import React from "react";
import "./Compaines.css";
import SuperAdminLayout from "./Layouts/SuperAdminLayout";


export default function Companies() {
   // Sample data for demonstration

  
  const tableData = [
    { srNo: 1, companyName: 'Company A' },
    { srNo: 2, companyName: 'Company B' },
    { srNo: 3, companyName: 'Company C' },
  ];

  return (
    <>
      <SuperAdminLayout />
      
      <div className="custom-table-container">
        <h1>Compaines</h1>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Company Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.srNo}</td>
                <td>{row.companyName}</td>
                <td>
                  {/* Add your custom actions/buttons here */}
                  <button>Edit</button>
                  <button style={{backgroundColor:"red"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};