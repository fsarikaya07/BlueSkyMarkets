import React, { useEffect } from "react";

const ToastComponent = ({ showAlert, setShowAlert }) => {
  useEffect(() => {}, []);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Message sent successfully!{" "}
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ToastComponent;
