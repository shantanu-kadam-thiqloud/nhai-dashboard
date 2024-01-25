import React from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const AddGroup = ({ isOpen, setModal }) => {
  const { userId } = useParams();
  const path = window.location.pathname;
  const isEdit = path.includes("EditGroup") ? true : false;
  const navigate = useNavigate();

  const groups = [
    {
      id: 1,
      groupName: "Admin Group",
      groupDescription: "Admin Group Description",
      isActive: true,
      createdBy: "AdminUser1",
      createdDate: "2023-08-10",
    },
    {
      id: 2,
      groupName: "Finance Group",
      groupDescription: "Finance Group Description",
      isActive: true,
      createdBy: "AdminUser2",
      createdDate: "2023-08-09",
    },
    {
      id: 3,
      groupName: "HR Group",
      groupDescription: "HR Group Description",
      isActive: true,
      createdBy: "AdminUser3",
      createdDate: "2023-08-08",
    },
    {
      id: 4,
      groupName: "IT Group",
      groupDescription: "IT Group Description",
      isActive: false,
      createdBy: "AdminUser4",
      createdDate: "2023-08-07",
    },
  ];

  const group = groups.find((g) => g.id.toString() === userId);
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
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">
                {isEdit ? "Edit" : "Add"} Group
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  groupName: group ? group.groupName : "",
                  groupDescription: group ? group.groupDescription : "",
                  isActive: group ? group.isActive : "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  setModal(false);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label
                            htmlFor="groupName"
                            className="form-label required"
                          >
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
                            className="form-label required"
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

                        {isEdit ? (
                          <div className="mb-3">
                            <label htmlFor="IsActive" className="form-label">
                              Is Active
                            </label>
                            <br />
                            <Field
                              name="isActive"
                              className="form-check-input form-control box30"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button
                      className="btn BackBtn me-2"
                      type="submit"
                      onClick={() => {
                        navigate("/NHAI/Groups");
                      }}
                    >
                      Back to List
                    </button>
                    <button
                      className="btn addUser min me-2"
                      type="submit"
                      onClick={() => {
                        // setModal(false);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
