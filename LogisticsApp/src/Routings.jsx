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

        <Route path="/superadmin/">
          <Route path="companies" element={<Companies />} />
          <Route path="alloutbound" element={<AllOutBound />} />
          <Route path="dispatchmanagement" element={<DispatchManagement />} />
        </Route>

        <Route path="/dispatcher/" >
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
        <Route
          path="/transportershome/dashboard"
          element={<TransportersHome />}
        />
        <Route path="/transportershome/:id" element={<TransportersHome />} />
      </Routes>
    </BrowserRouter>
  );
}

function DispatcherRoutes() {
  return (
    <>
 
    </>
  );
}
