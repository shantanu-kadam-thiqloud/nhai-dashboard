import React from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AddProfile = ({ isOpen, setModal }) => {
  const customStyles = {
    content: {
      width: "500px", // Set desired width
      height: "300px", // Set desired height
      margin: "auto", // Center the modal horizontally
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };
  const validationSchema = Yup.object({
    profileName: Yup.string().required("Profile Name is required"),
    profileDescription: Yup.string().required("Profile Description is required"),
  });

  return (
    <Formik
      initialValues={{
        profileName: "",
        profileDescription: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
        setModal(false);
      }}
    >
      <ReactModal isOpen={isOpen} style={customStyles}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add/Edit Profile</h5>
              <button
                type="button"
                className="close"
                style={{ display: "contents" }}
                onClick={() => {
                  setModal(false);
                }}
              >
                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', marginRight: '8px' }} />
              </button>
            </div>
            <hr />
            <Form>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="profileName" className="form-label">
                        Profile Name
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="profileName"
                        name="profileName"
                        placeholder="Enter profile name"
                      />
                      <ErrorMessage
                        name="profileName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profileDescription" className="form-label">
                        Profile Description
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="profileDescription"
                        name="profileDescription"
                        placeholder="Enter profile description"
                      />
                      <ErrorMessage
                        name="profileDescription"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                </div>
              </div>             
              <hr />
              <div className="modal-footer">
                <button
                  className="btn addUser min"
                  style={{ marginRight: "10px" }}
                  type="submit"
                  onClick={() => {
                     setModal(false);
                  }}
                >
                  Submit
                </button>
                {"  "}
                <button
                  className="btn addUser min"
                  type="button"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      </ReactModal>
    </Formik>
  );
};

export default AddProfile;
