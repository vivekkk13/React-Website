import React from "react";
import { Navbar } from "../common/Navbar";

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="mainDashBoardlayout">
        <div className="mainHeader">
          <Navbar />
        </div>
        <div className="mainBody">
          <div className="mainContent">{children}</div>
        </div>
      </div>
    </>
  );
};
