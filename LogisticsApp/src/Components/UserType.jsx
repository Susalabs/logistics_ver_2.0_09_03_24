import React, { useState } from "react";
import "./usertype.css"; // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link, useNavigate } from "react-router-dom";

const UserType = () => {
  const allUsers = [
    "SUPER-ADMIN",
    "DISPATCHER",
    "COURIER USER",
    "INBOUND USER",
    "REJECTION/SCRAP MANAGEMENT",
    "TRANSPORTERS/TRUCKERS",
    "INVENTORY MANAGEMENT",
    "COMPANY",
  ];

  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelected) =>
        prevSelected.filter((selectedType) => selectedType !== type)
      );
    } else {
      setSelectedTypes((prevSelected) => [...prevSelected, type]);
    }
  };

  const handleContinueClick = () => {
    if (selectedTypes.length > 0) {
      // Handle the continue button click, for example, navigate to the next page or perform an action.
      console.log("Selected User Types:", selectedTypes);
      const userType = selectedTypes[0];

      // Example: Navigating based on the selected user type
      switch (userType) {
        case "SUPER-ADMIN":
          navigate("/superadmin/");
          break;
        case "DISPATCHER":
          navigate("/dispatcher/transporters");
          break;
        // Add more cases for other user types as needed
        default:
          console.log("Invalid user type");
      }
    } else {
      // Provide user feedback, e.g., show an alert or a tooltip.
      console.log("Please select at least one user type.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="text-center mb-4 display-4">Welcome to Logistic App!</h1>
        <p className="lead">Select User-Type:</p>

        <ul className="list-group">
          {allUsers.map((userType) => (
            <li
              key={userType}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={userType}
                  checked={selectedTypes.includes(userType)}
                  onChange={() => handleCheckboxChange(userType)}
                />
                <label
                  className="form-check-label lead"
                  htmlFor={userType}
                  style={{ marginLeft: "20px" }}
                >
                  {userType}
                </label>
              </div>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary mt-4" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserType;
