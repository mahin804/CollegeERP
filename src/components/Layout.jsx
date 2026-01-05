import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Topbar />
      <div style={{height:"8rem",backgroundColor:"green",display:"flex",justifyContent:"start",alignItems:"end"}}>
        <h1 style={{color:"black",paddingLeft:"5rem",paddingBottom:".5rem"}}>DashBoard</h1>
      </div>
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
