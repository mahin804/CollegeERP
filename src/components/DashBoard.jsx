import { useNavigate } from "react-router-dom";
import CommonButton from "./CommonComponsnts/Button/CommonButton";
import "./Dashboard.css";

const Dashboard = () => {
  const Navigate = useNavigate()
  const cards = [
    { title: "Students", value: 1138, bgColor: "#ec4899", icon: "👤" }, // pink
    { title: "Employees", value: 74, bgColor: "#22c55e", icon: "🧑‍💼" }, // green
    { title: "Courses", value: 12, bgColor: "#8b5cf6", icon: "📚" }, // purple
    { title: "Sections", value: 33, bgColor: "#f97316", icon: "☀️" }, // orange
  ];

  const actionButton = [
    {label:"Appointment"},
    {label:"DashBord"},
    {label:"Billing"},
    {label:"Voucher"}
  ]
 const btnClick = (item) => {
  if(item == "Students"){
    Navigate("/Course/Course")
  }
 }
  return (
    <div className="dashboard-wrapper">
      {/* <div style={{display:"flex",gap:"1rem"}}>
        {actionButton?.map((item,index)=>(
        <CommonButton key={index} label={item?.label} onClinckStatus={btnClick}/>
        ))}
      </div> */}
      <h2 className="dashboard-heading">Dashboard</h2>

      <div className="summary-cards">
        {cards.map((card, index) => (
          <div
          //  onClick={}
            key={index}
            className="summary-card"
            style={{ backgroundColor: card.bgColor }}
          >
            <div>
              <h3>{card.value}</h3>
              <CommonButton label={card.title} onClinckStatus={btnClick} />
            </div>
            <span className="icon">{card.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
