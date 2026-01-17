import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import CollegeInfoModal from "./CollegeInfoModal/CollegeInfoModel";
import { saveCollegeInfo } from '../Service.js/APIService';
import "./Layout.css";
import CommonHeader from "./CommonComponsnts/Header/CommonHeader";

function Layout() {
  const [openCollegeModal, setOpenCollegeModal] = useState(false);

  return (
    <>
      <Topbar onSettingsClick={() => setOpenCollegeModal(true)} />

      {/* <div
      
        style={{
          height: "2.7rem",
          backgroundColor: "green",
          display: "flex",
          alignItems: "flex-end",
          width:"100%",
          marginTop: "3.7rem"
        }}
      >
        <h1 style={{ paddingLeft: "5rem", fontSize:"25px"}}>
          Dashboard
        </h1>
      </div>  */}

      <CommonHeader title={"Dashboard"}/>

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
