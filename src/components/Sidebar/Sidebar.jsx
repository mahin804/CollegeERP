import { Link } from "react-router-dom";
import { FaChartBar, FaHome, FaUserCircle } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
    
      <ul>
        <li>
          <Link to="/">
            <FaHome className="icon" />
            <span className="text">Home</span>
          </Link>
        </li>

      <li>
        <Link to="/Course/Course">
          <FaChartBar className="icon" />
          <span className="text">Course</span>
        </Link>
      </li>
      </ul>
    </div>
  );
}

export default Sidebar;
