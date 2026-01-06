import "./Topbar.css";
import { useNavigate } from "react-router-dom";

const Topbar = ({ onSettingsClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div style={{zIndex:100}} className="topbar">
      {/* LEFT */}
      <div className="topbar-left">
        <h3>DemoReact</h3>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <button
          className="settings-btn"
          onClick={onSettingsClick}
          title="Settings"
        >
          ⚙️
        </button>

        <div className="profile-box">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="profile-img"
          />
          <span className="admin-name">Admin</span>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
