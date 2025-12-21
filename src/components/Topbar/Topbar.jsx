import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      {/* Left */}
      <div className="topbar-left">
        <h3>DemoReact</h3>
      </div>

      {/* Right */}
      <div className="topbar-right">
        <span className="admin-name">Admin</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Topbar;
