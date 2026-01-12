import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { saveCollegeInfo, GetCollegeInfo } from "../../Service.js/APIService";

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

  const [loading, setLoading] = useState(false);

  // 🔹 Load data when modal opens
  useEffect(() => {
    if (isOpen) {
      loadCollegeInfo();
    }
  }, [isOpen]);

  const loadCollegeInfo = async () => {
    try {
      setLoading(true);

      const response = await GetCollegeInfo();

      if (
        response?.data?.isSuccess &&
        Array.isArray(response.data.data) &&
        response.data.data.length > 0
      ) {
        const d = response.data.data[0];

        setCollege({
          id: d.id || 0,
          colName: d.col_name || "",
          colNickname: d.col_nickname || "",
          colAddres1: d.col_addres1 || "",
          colAddres2: d.col_addres2 || "",
          colAddres3: d.col_addres3 || "",
          colEmail: d.col_email || "",
          colPhone: d.col_phone || "",
          colTelephone: d.col_telephone || ""
        });
      }
    } catch (error) {
      console.error("Failed to load college info:", error);
      alert("Failed to load college information");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollege((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await saveCollegeInfo(college);
      alert("College info saved successfully");
      onClose();
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save college info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered size="lg">
      <Modal.Header
        style={{ backgroundColor: "#0d6efd", color: "white" }}
        closeButton
      >
        <Modal.Title>College Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {loading && <p className="text-center">Loading...</p>}

        {/* Row 1 */}
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
            <label><b>Email</b></label>
            <input
              name="colEmail"
              value={college.colEmail}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        {/* Row 2 */}
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

        {/* Row 3 */}
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
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} disabled={loading}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={loading}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CollegeInfoModal;
