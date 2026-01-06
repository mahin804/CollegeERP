import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { saveCollegeInfo } from "../../Service.js/APIService";

const CollegeInfoModal = ({ isOpen, onClose }) => {
  const [college, setCollege] = useState({
    id: 0,
    colName: "",
    colNickname: "",
    colAddres1: "",
    colAddres2: "",
    colAddres3: "",
    colEmail: "",
    colPhone: "",
    colTelephone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollege({ ...college, [name]: value });
  };

  const handleSave = async () => {
    try {
      await saveCollegeInfo(college);
      alert("College info saved successfully");
      onClose();
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save college info");
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered size="lg">
      <Modal.Header style={{ backgroundColor: "#0d6efd", color: "white" }} closeButton>
        <Modal.Title>College Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Row with three fields */}
        <div className="row mb-2">
          <div className="col">
          <label><b>College Name</b></label>
            <input
              name="colName"
              value={college.colName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
          <label><b>Short Name</b></label>
            <input
              name="colNickname"
              value={college.colNickname}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
          <label><b>Email ID</b></label>
            <input
              name="colEmail"
              value={college.colEmail}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Another row for phone and addresses */}
        <div className="row mb-2">
          <div className="col">
          <label><b>Phone</b></label>
            <input
              name="colPhone"
              value={college.colPhone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
          <label><b>Telephone</b></label>
            <input
              name="colTelephone"
              value={college.colTelephone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
          <label><b>Address</b></label>
            <input
              name="colAddres1"
              value={college.colAddres1}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <label><b>City</b></label>
            <input
              name="colAddres2"
              value={college.colAddres2}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <label><b>State</b></label>
            <input
              name="colAddres3"
              value={college.colAddres3}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* You can add more rows as needed */}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CollegeInfoModal;
