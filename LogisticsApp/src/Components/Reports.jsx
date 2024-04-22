import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCar } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { RiBaseStationLine } from "react-icons/ri";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaWeightScale } from "react-icons/fa6";
import { CiTempHigh } from "react-icons/ci";
import DrivingRoute from "../Reports/DrivingReports/DrivingRoute";
import { useNavigate } from "react-router-dom";
function Reports() {

  const navigate = useNavigate()

  return (
    <>
      <div className="top" style={{ display: "flex" }}>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <FaCar />
            </h2>
            <Card.Title text="secondary">Driving Reports</Card.Title>

            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
              onClick={() => {
                navigate("/superadmin/drivingreportroute");
              }}
            >
              Route Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
              onClick={() => {
                navigate("/superadmin/MilageReports");
              }}
            >
              Milage Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
              onClick={() => {
                navigate("/superadmin/RouteDeviated");
              }}
            >
              Route Deviated Record
            </Button>
            <Button
              variant="none"
              DriverReport
              style={{ margin: "10px", fontSize: "small" }}
              onClick={() => {
                navigate("/superadmin/DriverReport");
              }}
            >
              Driver Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
        
        
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <GiAlarmClock />
            </h2>
            <Card.Title text="secondary">Alarm Reports</Card.Title>

            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <RiBaseStationLine />
            </h2>
            <Card.Title text="secondary">Online Reports</Card.Title>

            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <BsFillFuelPumpDieselFill />
            </h2>
            <Card.Title text="secondary">Fuel Reports</Card.Title>

            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <FaWeightScale />
            </h2>
            <Card.Title text="secondary">Weight Reports</Card.Title>

            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px", border: "none" }}>
          <Card.Body>
            <h2>
              <CiTempHigh />
            </h2>
            <Card.Title text="secondary">Temp Reports</Card.Title>

            <Button
              variant="flush"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
            <Button
              variant="none"
              style={{ margin: "10px", fontSize: "small" }}
            >
              Driving Report Record
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Reports;
