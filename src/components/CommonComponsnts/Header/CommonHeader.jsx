import "./CommonHeader.css";

const CommonHeader = ({ title }) => {
  return (
    <div className="common-header">
      <h1>{title}</h1>
    </div>
  );
};

export default CommonHeader;