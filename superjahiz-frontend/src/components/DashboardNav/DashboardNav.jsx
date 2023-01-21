import React from "react";
import "./DashboardNav.css";
import logo from "./../../assets/images/logo/testLogo2.png";
import DashboardNavSection from "../DashboardNavSection/DashboardNavSection";
import { Link, useNavigate } from "react-router-dom";
function DashboardNav(props) {
  const navigate=useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="DashboardNav">
      <div className="DashboardNav-top">
        <img src={logo} alt="" />
        <span
          style={{
            color: `${props?.contrastColor}`,
            backgroundColor: `${props?.accentColor}`,
            marginRight: "10px",
          }}
        >
          {user?.appuser?.toUpperCase()}
        </span>
        <span
          style={{
            color: `${props?.contrastColor}`,
            backgroundColor: `${props?.accentColor}`,
          }}
        >
          ADMIN
        </span>
      </div>
      <div className="DashboardNav-Menu">
        <DashboardNavSection title="Overview">
          <div class="DashboardNavSection-page">Statistics</div>
        </DashboardNavSection>
        <DashboardNavSection title="Products">
          <Link to="/dashboard/products">
            <div class="DashboardNavSection-page">Product List</div>
          </Link>
          <Link to="/dashboard/addProduct">
            <div class="DashboardNavSection-page">Add Products</div>
          </Link>
          <div class="DashboardNavSection-page">Warehouse</div>
        </DashboardNavSection>
        <DashboardNavSection title="Categories">
          <div class="DashboardNavSection-page">Category List</div>
          <Link to="/dashboard/addCategory">
            <div class="DashboardNavSection-page">Add Category</div>
          </Link>
        </DashboardNavSection>
        <Link to="/home">
          <DashboardNavSection title="Store">
            {/*
          <div class="DashboardNavSection-page">Status</div>
          <div class="DashboardNavSection-page">Configuration</div>
          */}
          </DashboardNavSection>
        </Link>
        <DashboardNavSection title="Profile">
          <div
            class="DashboardNavSection-page"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </div>
        </DashboardNavSection>
      </div>
    </div>
  );
}

export default DashboardNav;
