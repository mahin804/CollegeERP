import "./Topbar.css";
import { useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // clear login data (if stored)
    localStorage.clear(); // or remove specific key

    // redirect to home / login page
    navigate("/", { replace: true });
  };

  return (
    <div className="topbar">
      {/* Left */}
      <div className="topbar-left">
        <h3>DemoReact</h3>
      </div>

      {/* Right */}
      <div className="topbar-right">
        <span className="admin-name">Admin</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
