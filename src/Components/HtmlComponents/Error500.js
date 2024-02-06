import React from "react";

const Error500 = () => {
  return (
    <div>
      <h1>Internal Server Error</h1>
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

export default Error500;
