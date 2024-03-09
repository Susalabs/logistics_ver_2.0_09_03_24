import React from "react";
import "./CompanyInfo.css"; // Import your custom CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <h2>Company Info</h2>
      <form>
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Company Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="gstn" className="form-label">
            GSTN:
          </label>
          <input
            type="text"
            className="form-control"
            id="gstn"
            name="gstn"
            required
          />
          <input
            type="file"
            className="form-control"
            id="uploadGSTN"
            name="uploadGSTN"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cin" className="form-label">
            CIN:
          </label>
          <input
            type="text"
            className="form-control"
            id="cin"
            name="cin"
            required
          />
          <input
            type="file"
            className="form-control"
            id="uploadCIN"
            name="uploadCIN"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pan" className="form-label">
            PAN:
          </label>
          <input
            type="text"
            className="form-control"
            id="pan"
            name="pan"
            required
          />
          <input
            type="file"
            className="form-control"
            id="uploadPAN"
            name="uploadPAN"
          />
        </div>

        <div className="form-group">
          <label htmlFor="msme" className="form-label">
            MSME:
          </label>
          <input
            type="text"
            className="form-control"
            id="msme"
            name="msme"
            required
          />
          <input
            type="file"
            className="form-control"
            id="uploadMSME"
            name="uploadMSME"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyInfo;
