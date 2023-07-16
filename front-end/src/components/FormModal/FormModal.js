import React from "react";
import "./FormModal.css";
import Form from "../Form/Form";
const FormModal = (props) => {
  const close = props.closeModal;

  const handleCloseModal = () => {
    close();
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // Perform form submission logic here
    // console.log(formData);
    handleCloseModal();
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h2>
            Almost There!{" "}
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
          </h2>
          <Form OnSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
