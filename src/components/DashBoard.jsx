import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    { title: "Students", value: 1138, color: "pink", icon: "👤" },
    { title: "Employees", value: 74, color: "green", icon: "🧑‍💼" },
    { title: "Courses", value: 12, color: "purple", icon: "📚" },
    { title: "Sections", value: 33, color: "orange", icon: "☀️" },
  ];

  return (
    <div className="dashboard-content">
      <h2 className="dashboard-heading">Dashboard</h2>

      <div className="summary-cards">
        {cards.map((card, i) => (
          <div key={i} className={`summary-card ${card.color}`}>
            <div>
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>
            <span className="icon">{card.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
