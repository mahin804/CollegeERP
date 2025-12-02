import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetDashboardCountsApi } from "../Service.js/APIService";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [counts, setCounts] = useState({
    totalCourses: 0,
    totalBatches: 0,
    totalStudents: 0,
    totalStaff: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await GetDashboardCountsApi();
      console.log("Dashboard Data:", response.data);
      setCounts(response.data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  // Redirect functions
  const goToCourses = () => navigate("/Dashboard");
  const goToBatches = () => navigate("/Dashboard");
  const goToStudents = () => navigate("/Dashboard");
  const goToStaff = () => navigate("/Dashboard");

  const cards = [
    { title: "Total Courses", value: counts.totalCourses, color: "#4e73df", onClick: goToCourses },
    { title: "Total Batches", value: counts.totalBatches, color: "#1cc88a", onClick: goToBatches },
    { title: "Total Students", value: counts.totalStudents, color: "#36b9cc", onClick: goToStudents },
    { title: "Total Staff", value: counts.totalStaff, color: "#f6c23e", onClick: goToStaff },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="card-row">
        {cards.map((item, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{ backgroundColor: item.color, cursor: "pointer" }}
            onClick={item.onClick}
          >
            <h3 className="card-title">{item.title}</h3>
            <p className="card-value">{item.value}</p>

            {/* Button inside card */}
            <button className="view-btn">View List</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
