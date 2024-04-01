import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { IconContext } from "react-icons";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FiMapPin } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { Layout, Menu, Button } from "antd";
import { FaTruckFast } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
  // Fallback values for colorBgContainer and borderRadiusLG
  const colorBgContainer = "#ffffff"; // Replace with your default color
    const borderRadiusLG = "8px"; // Replace with your default border radius
 const openNotification = () => {
   const currentDate = new Date();
   const day = currentDate.getDate();
   const month = currentDate.getMonth() + 1; // Month is zero-based
   const year = currentDate.getFullYear();

   const formattedDate = `${day}/${month}/${year}`;

   alert(`Today's date is: ${formattedDate} and this is the top notification !!`);
    };
    
    const handlesignout = () =>{
        navigate("/");
    }



  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <br></br>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="dashboard"
            icon={<RxDashboard />}
            onClick={() => navigate("/superadmin")}
          >
            DashBoard
          </Menu.Item>
          <Menu.Item
            key="reports"
            icon={<UploadOutlined />}
            onClick={() => navigate("/superadmin/reports")}
          >
            Reports
          </Menu.Item>
          <Menu.Item
            key="dispatchmanagement"
            icon={<VideoCameraOutlined />}
            onClick={() => navigate("/superadmin/dispatchmanagement")}
          >
            Dispatch Management
          </Menu.Item>
          <Menu.Item
            key="companies"
            icon={<UploadOutlined />}
            onClick={() => navigate("/superadmin/companies")}
          >
            Companies
          </Menu.Item>

          <Menu.Item
            key="maps"
            icon={<FiMapPin />}
            onClick={() => navigate("/superadmin/maps")}
          >
            Maps
          </Menu.Item>
          <Menu.Item
            key="signin"
            icon={<UserOutlined />}
            onClick={() => navigate("/superadmin/signin")}
          >
            Accounts
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between", // Align items horizontally
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <IconContext.Provider
              value={{
                color: "darkblue",
                className: "global-class-name",
                margin: "10px",
                fontSize: "24px", // Increase the font size
              }}
            >
              {" "}
              <h1 style={{ margin: "10px" }}>
                {" "}
                <FaTruckFast />
              </h1>
            </IconContext.Provider>
            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                <h1>Logistics</h1>
              </span>

              <h6
                style={{
                  fontWeight: "normal",
                  marginRight: "10px",
                  textAlign: "start",
                }}
              >
                Make and send Logistic Request.
              </h6>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconContext.Provider
              value={{
                color: "darkblue",
                className: "global-class-name",
                margin: "10px",
                fontSize: "20px", // Increase the font size
              }}
            >
              {" "}
              <h1 onClick={openNotification}>
                <IoIosNotifications />
              </h1>{" "}
            </IconContext.Provider>
            <span
              style={{ fontSize: "small", marginRight: "10px", margin: "10px" }}
            >
              <img src=" " alt="signinimage" />
            </span>
            <DropdownButton
              id="dropdown-basic-button"
              title="Divyanshu"
              variant="light" // Set the variant to dark
            >
              <Dropdown.Item onClick={handlesignout}>signout</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
            </DropdownButton>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
