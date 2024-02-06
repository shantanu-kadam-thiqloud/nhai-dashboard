import React from "react";

const Error404 = () => {
  return (
    <div>
      <h1>404 Data Not Found..!</h1>
      <button
        className="btn BackBtn me-2"
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Error404;
