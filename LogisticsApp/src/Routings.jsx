import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Companyinfo from "./Components/Companyinfo";
import UserType from "./Components/UserType";
import Companies from "./Components/Companies";
import Outbound from "./Components/Outbound";
import AllOutBound from "./Components/AllOutBound";
import Rejections from "./Components/Rejections";
import DispatchManagement from "./Components/DispatchManagement";
import AllWareHouses from "./Components/AllWareHouses";
import Transporters from "./Components/Transporters";
import ManageTransporters from "./Components/ManageTransporters";
import Superadminlogin from "./Components/Superadminlogin";
import InventoryManagementDashboard from "./Components/DashBoard/InventoryManagementDashboard";
import ScrapManagementDashboard from "./Components/DashBoard/ScrapManagementDashboard";
import TransportersHome from "./Components/DashBoard/TransportersHome";
import NotFoundPage from "./Components/NotFoundPage";
import ForgetPassword from "./Components/ForgetPassword";
import SuperAdminLayout from "./Components/Layouts/SuperAdminLayout";
import MainLayout from "./Components/DashBoard/MainLayout";
import Reports from "./Components/Reports";
import Map from "./Components/DashBoard/Chart/Maps";
import DrivingRoute from "./Reports/DrivingReports/DrivingRoute";
import MilageReports from "./Reports/DrivingReports/MilageReports";
import RouteDeviated from "./Reports/DrivingReports/RouteDeviated";
import DriverReport from "./Reports/DrivingReports/DriverReport";

export default function Routings() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Superadminlogin />} />
    
        <Route path="/signup" element={<Signup />} />
        <Route path="/company-info" element={<Companyinfo />} />
        <Route path="/usertype" element={<UserType />} />

        <Route path="/outbound" element={<Outbound />} />

        <Route path="/superadmin" element={<MainLayout />}>
          <Route index element={<TransportersHome />} />
          <Route path="reports" element={<Reports />} />
          <Route path="companies" element={<Companies />} />
          <Route path="maps" element={<Map />} />
          <Route path="drivingreportroute" element={<DrivingRoute />} />
          <Route path="MilageReports" element={<MilageReports />} />
          <Route path="DriverReport" element={<DriverReport />} />

          <Route path="RouteDeviated" element={<RouteDeviated />} />
          <Route path="alloutbound" element={<AllOutBound />} />
          <Route path="dispatchmanagement" element={<DispatchManagement />} />
        </Route>

        <Route path="/dispatcher/">
          <Route path="allWarehouses" element={<AllWareHouses />} />
          <Route path="transporters" element={<Transporters />} />
          <Route path="managetransporters" element={<ManageTransporters />} />
        </Route>

        <Route path="/rejections" element={<Rejections />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/inventorymanagementdashboard"
          element={<InventoryManagementDashboard />}
        />
        <Route
          path="/scrapmanagementdashboard"
          element={<ScrapManagementDashboard />}
        />

        <Route path="/transportershome/:id" element={<TransportersHome />} />
      </Routes>
    </BrowserRouter>
  );
}
