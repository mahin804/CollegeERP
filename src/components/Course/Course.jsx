import { useEffect, useState } from "react";
import { SaveCourse, GetCourses } from "../../Service.js/APIService";

const initialState = {
  courseId: 0,
  courseCode: "",
  courseName: "",
  description: "",
  credits: "",        // string for controlled input
  departmentId: "",   // string
  semester: "",       // string
  createdBy: "admin"
};

const Courses = () => {
  const [course, setCourse] = useState(initialState);
  const [courseList, setCourseList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  // Load all courses safely
  const loadCourses = async () => {
  try {
    const res = await GetCourses();

    // courses are inside res.data.data
    const data = Array.isArray(res.data.data) ? res.data.data : [];
    setCourseList(data);
  } catch (err) {
    console.error("Error loading courses:", err);
    setCourseList([]);
  }
};

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert string inputs back to numbers before sending
    const payload = {
      ...course,
      credits: Number(course.credits),
      departmentId: Number(course.departmentId),
      semester: Number(course.semester)
    };

    try {
      await SaveCourse(payload);
      loadCourses();
      resetForm();
    } catch (err) {
      console.error("Error saving course:", err);
    }
  };

  // Edit button clicked
  const handleEdit = (data) => {
    setCourse({
      courseId: data.courseId ?? 0,
      courseCode: data.courseCode ?? "",
      courseName: data.courseName ?? "",
      description: data.description ?? "",
      credits: data.credits?.toString() ?? "",
      departmentId: data.departmentId?.toString() ?? "",
      semester: data.semester?.toString() ?? "",
      createdBy: data.createdBy ?? "admin"
    });
    setIsEdit(true);
  };

  // Reset form to initial state
  const resetForm = () => {
    setCourse(initialState);
    setIsEdit(false);
  };

  return (
    <div className="dashboard-content">

      {/* ================= FORM CARD ================= */}
      <div className="card p-3 mb-4">
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-md-3">
        <input
          className="form-control"
          placeholder="Course Code"
          name="courseCode"
          value={course.courseCode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <input
          className="form-control"
          placeholder="Course Name"
          name="courseName"
          value={course.courseName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3">
        <input
          className="form-control"
          placeholder="Credits"
          type="number"
          name="credits"
          value={course.credits}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-3">
        <input
          className="form-control"
          placeholder="Semester"
          type="number"
          name="semester"
          value={course.semester}
          onChange={handleChange}
        />
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md-6">
        <textarea
          className="form-control"
          placeholder="Description"
          name="description"
          value={course.description}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-3">
        <input
          className="form-control"
          placeholder="Department Id"
          type="number"
          name="departmentId"
          value={course.departmentId}
          onChange={handleChange}
        />
      </div>
    </div>

    {/* ================= BUTTONS IN FOOTER ================= */}
    <div className="card-footer d-flex gap-2 justify-content-end mt-3">

      <button className="btn btn-secondary"
        onClick={resetForm}>
        {"Cancel"}
      </button>

      <button className="btn btn-success">
        {isEdit ? "Update" : "Save"}
      </button>
    </div>
  </form>
</div>

      {/* ================= TABLE CARD ================= */}
      <div className="card p-3">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "50px" }}>SiNo</th>
              <th>Code</th>
              <th>Name</th>
              <th>Credits</th>
              <th>Semester</th>
              <th style={{ width: "80px" }}></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courseList) && courseList.length > 0 ? (
              courseList.map((item, index) => (
                <tr key={item.courseId}>
                  <td>{index + 1}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.courseName}</td>
                  <td>{item.credits}</td>
                  <td>{item.semester}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No courses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Courses;
