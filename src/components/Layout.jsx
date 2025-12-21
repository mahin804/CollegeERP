import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

function Layout() {
  return (
    <div className="layout">
      
      <Sidebar />

      <div className="content">
        <Outlet /> {/* Dashboard will load here */}
      </div>
    </div>
  );
}

export default Layout;
