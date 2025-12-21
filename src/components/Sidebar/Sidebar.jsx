import { Link } from "react-router-dom";
import { FaChartBar, FaHome, FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-user">
        <FaUserCircle className="user-icon" />
        <p className="user-name">John Doe</p>
      </div>

      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" />
            <span className="text">Home</span>
          </Link>
        </li>

        <li>
          <Link to="/dashboard">
            <FaChartBar className="icon" />
            <span className="text">Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
