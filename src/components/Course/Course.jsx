import { useState } from "react";
import "../CommonStyle.css";

const CourseSession = () => {
  const [formData, setFormData] = useState({
    college: "",
    course: "",
    session: "",
  });

  const [rows, setRows] = useState([
    { id: 1, college: "mttc college", course: "B.Ed", session: "2021" },
    { id: 2, college: "mttc college", course: "D.El.Ed", session: "2021" },
    { id: 3, college: "AN College", course: "MBA", session: "2022" },
    { id: 4, college: "BS College", course: "BSC", session: "2023" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRow = {
      id: rows.length + 1,
      ...formData,
    };

    setRows([...rows, newRow]);
    setFormData({ college: "", course: "", session: "" });
  };

  const handleEdit = (row) => {
    setFormData(row);
  };

  return (
    <div className="page-wrapper">
      <h3 className="page-title">Course</h3>

      {/* FORM */}
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>College name</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
            >
              <option value="">--Select College--</option>
              <option value="mttc college">MTTC College</option>
              <option value="AN College">AN College</option>
              <option value="BS College">BS College</option>
            </select>
          </div>

          <div>
            <label>Course name</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">--Select Course--</option>
              <option value="B.Ed">B.Ed</option>
              <option value="D.El.Ed">D.El.Ed</option>
              <option value="MBA">MBA</option>
              <option value="BSC">BSC</option>
            </select>
          </div>

          <div>
            <label>Session</label>
            <input
              type="text"
              name="session"
              placeholder="Enter Session"
              value={formData.session}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="btn-row">
          <button type="submit" className="btn submit">SUBMIT</button>
          <button
            type="button"
            className="btn clear"
            onClick={() =>
              setFormData({ college: "", course: "", session: "" })
            }
          >
            CLEAR
          </button>
        </div>
      </form>

      {/* TABLE */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>ID</th>
            <th>College Name</th>
            <th>Course Name</th>
            <th>Session</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(row)}
                >
                  Edit
                </button>
              </td>
              <td>{row.id}</td>
              <td>{row.college}</td>
              <td>{row.course}</td>
              <td>{row.session}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSession;
