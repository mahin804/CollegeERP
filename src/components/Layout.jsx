import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import CollegeInfoModal from "./CollegeInfoModal/CollegeInfoModel";
import { saveCollegeInfo } from '../Service.js/APIService';
import "./Layout.css";

function Layout() {
  const [openCollegeModal, setOpenCollegeModal] = useState(false);

  return (
    <>
      <Topbar onSettingsClick={() => setOpenCollegeModal(true)} />

      <div
        style={{
          height: "8rem",
          backgroundColor: "green",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <h1 style={{ paddingLeft: "5rem", paddingBottom: ".5rem" }}>
          Dashboard
        </h1>
      </div>

      <div className="layout">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>

      <CollegeInfoModal
        isOpen={openCollegeModal}
        onClose={() => setOpenCollegeModal(false)}
      />
    </>
  );
}

export default Layout;
