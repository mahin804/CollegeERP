import { useNavigate } from "react-router-dom";
import CommonButton from "./CommonComponsnts/Button/CommonButton";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Students", value: 1138, bgColor: "#ec4899", icon: "👤", path: "/students" },
    { title: "Employees", value: 74, bgColor: "#22c55e", icon: "🧑‍💼", path: "/employees" },
    { title: "Courses", value: 12, bgColor: "#8b5cf6", icon: "📚", path: "/courses" },
    { title: "Sections", value: 33, bgColor: "#f97316", icon: "☀️", path: "/sections" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        
        <h2 className="dashboard-heading">Dashboard</h2>

        <div className="summary-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="summary-card"
              style={{ backgroundColor: card.bgColor }}
              onClick={() => handleCardClick(card.path)}
            >
              <div>
                <h3>{card.value}</h3>

                {/* stopPropagation prevents double click */}
                <CommonButton
                  label={card.title}
                  onClinckStatus={(e) => {
                    e.stopPropagation();
                    handleCardClick(card.path);
                  }}
                />
              </div>

              <span className="icon">{card.icon}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
