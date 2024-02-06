import React from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddGroup = ({ isOpen, setModal }) => {
  const customStyles = {
    content: {
      width: "500px",
      height: "300px",
      margin: "auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  const validationSchema = Yup.object({
    groupName: Yup.string().required("Group Name is required"),
    groupDescription: Yup.string().required("Group Description is required"),
  });

  return (
    <Formik
      initialValues={{
        groupName: "",
        groupDescription: "",
        isActive: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        setModal(false);
      }}
    >
      <ReactModal isOpen={isOpen} style={customStyles}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Group</h5>
              <button
                type="button"
                className="close"
                style={{ display: "contents" }}
                onClick={() => {
                  setModal(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{ cursor: "pointer", marginRight: "8px" }}
                />
              </button>
            </div>
            <hr />
            <Form>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="groupName" className="form-label">
                        Group Name
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="groupName"
                        name="groupName"
                        placeholder="Enter group name"
                      />
                      <ErrorMessage
                        name="groupName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="groupDescription"
                        className="form-label"
                      >
                        Group Description
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="groupDescription"
                        name="groupDescription"
                        placeholder="Enter group description"
                      />
                      <ErrorMessage
                        name="groupDescription"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <Field
                        type="checkbox"
                        className="form-check-input"
                        id="isActive"
                        name="isActive"
                      />
                      <label
                        htmlFor="isActive"
                        className="form-check-label"
                      >
                        Active
                      </label>
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
                >
                  Submit
                </button>{" "}
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

export default AddGroup;
