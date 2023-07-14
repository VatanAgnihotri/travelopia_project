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
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <h2>Form Modal</h2>
          {/* <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form> */}
          <Form OnSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
