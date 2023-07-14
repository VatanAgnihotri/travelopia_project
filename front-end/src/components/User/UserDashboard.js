import React, { useState } from "react";
import travel from "../../assets/travel.jpg";
import FormModal from "../FormModal/FormModal";
const mainDivStyles = {
  background: `url(${travel})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "600px",
  /* Additional styles for the component */
};

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const titleStyles = {
  fontSize: "46px",
  fontWeight: "bold",
  marginBottom: "16px",
  color: "White",
  lineHeight: "10px",
};

const subtitleStyles = {
  fontSize: "24px",
  marginBottom: "32px",
  color: "White",
};

const buttonStyles = {
  padding: "10px 20px",
  fontSize: "20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
};

const UserDashboard = () => {
  const [modal, changeModalState] = useState(false);

  const switchModal = () => {
    changeModalState((res) => !res);
  };

  return (
    <div style={mainDivStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>We Care, So You Can Travel Carefree</h1>
        <h2 style={subtitleStyles}>
          Let our experts plan your private, tailor-made and secure tour in 70+
          inspiring destinations
        </h2>
        <button onClick={switchModal} style={buttonStyles}>
          Create My Trip Now
        </button>
        {modal && <FormModal closeModal={switchModal} />}
      </div>
    </div>
  );
};

export default UserDashboard;
