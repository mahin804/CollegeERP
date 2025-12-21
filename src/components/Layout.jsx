import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

function Layout() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Topbar />

      <div className="layout">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="content">
          <Outlet /> {/* Pages will load here */}
        </div>
      </div>
    </>
  );
}

export default Layout;
