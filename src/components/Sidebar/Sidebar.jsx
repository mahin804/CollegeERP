import { Link } from "react-router-dom";
import { FaChartBar, FaHome } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">My App</h2>

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
