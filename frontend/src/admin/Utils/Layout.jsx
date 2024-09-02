/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "./Sidebar";
import "./common.css";

const Layout = ({children}) => {
  return (
    <div className="dashboard-admin">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
