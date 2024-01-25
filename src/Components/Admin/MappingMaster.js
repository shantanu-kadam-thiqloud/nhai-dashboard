import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const MappingMaster = () => {
  const navigate = useNavigate();
  const [isLocation, setLocation] = useState(false);
  const [isPIU, setPIU] = useState(false);
  const [isPD, setPD] = useState(false);
  const [isZone, setZone] = useState(false);
  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    location: Yup.string().required("Location is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    //non mandatory
    userDomainName: Yup.string("User Domain Name is invalid"),
    workPhone: Yup.string("Work Phone is invalid"),
    userId: Yup.string("User ID is invalid"),
    role: Yup.string("Role is invalid"),
    mobile: Yup.string("Mobile Number is invalid"),
  });
  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Overall Mapping</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="userName" className="form-label">
                            Select Branch
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select"
                            id="branch"
                            name="branch"
                          >
                            {" "}
                            <option value="">--Select Branch--</option>
                            <option value=""></option>
                          </Field>
                          <ErrorMessage
                            name="branch"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="location" className="form-label">
                            {isLocation ? "Add" : "Select"} Location
                          </label>
                          <div className="row">
                            <div className="col-md-9">
                              {" "}
                              {!isLocation ? (
                                <Field
                                  as="select"
                                  className="form-control form-select"
                                  id="location"
                                  name="location"
                                >
                                  <option value="">--Select Location--</option>
                                  <option value=""></option>
                                </Field>
                              ) : (
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="location"
                                  name="location"
                                />
                              )}
                              <ErrorMessage
                                name="location"
                                component="div"
                                className="error"
                              />{" "}
                            </div>
                            <div className="col-md-2 p-0">
                              {" "}
                              <button
                                className="btn addUser min min-width-110px"
                                onClick={() => {
                                  setLocation(!isLocation);
                                }}
                              >
                                {!isLocation ? "Add New" : "Cancel"}
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="userDomainName"
                            className="form-label"
                          >
                            {isPIU ? "Add" : "Select"} PIU
                          </label>
                          <div className="row">
                            <div className="col-md-9">
                              {isPIU ? (
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="piu"
                                  name="piu"
                                />
                              ) : (
                                <Field
                                  as="select"
                                  className="form-control form-select"
                                  id="piu"
                                  name="piu"
                                >
                                  <option value="">--Select PIU--</option>
                                  <option value=""></option>
                                </Field>
                              )}
                              <ErrorMessage
                                name="piu"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-md-2 p-0">
                              <button
                                className="btn addUser min min-width-110px"
                                onClick={() => {
                                  setPIU(!isPIU);
                                }}
                              >
                                {!isPIU ? "Add New" : "Cancel"}
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="gender" className="form-label">
                            Select RO
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select "
                            id="gender"
                            name="gender"
                          >
                            <option value="">--Select RO--</option>
                            <option value=""></option>
                            <option value=""></option>
                          </Field>
                          <ErrorMessage
                            name="gender"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            {isZone ? "Add" : "Select"} Zone
                          </label>
                          <div className="row">
                            <div className="col-md-9">
                              {isZone ? (
                                <Field
                                  type="text"
                                  className="form-control "
                                  id="zone"
                                  name="zone"
                                />
                              ) : (
                                <Field
                                  as="select"
                                  className="form-control form-select"
                                  id="zone"
                                  name="zone"
                                >
                                  <option value="">--Select Zone--</option>
                                  <option value=""></option>
                                </Field>
                              )}
                              <ErrorMessage
                                name="zone"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-md-2 p-0">
                              <button
                                className="btn addUser min min-width-110px"
                                onClick={() => {
                                  setZone(!isZone);
                                }}
                              >
                                {isZone ? "Cancel" : "Add New"}
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="role" className="form-label">
                            {!isPD ? " Select" : "Add"} PD
                          </label>

                          <div className="row">
                            <div className="col-md-9">
                              {isPD ? (
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="pd"
                                  name="pd"
                                />
                              ) : (
                                <Field
                                  as="select"
                                  className="form-control form-select"
                                  id="pd"
                                  name="pd"
                                >
                                  <option value="">--Select PD--</option>
                                  <option value=""></option>
                                </Field>
                              )}
                              <ErrorMessage
                                name="pd"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-md-2 p-0">
                              <button
                                className="btn addUser min min-width-110px"
                                onClick={() => {
                                  setPD(!isPD);
                                }}
                              >
                                {isPD ? "Cancel" : "Add New"}
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobile" className="form-label">
                            Mobile
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter mobile no."
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button className="btn BackBtn me-2" onClick={() => {}}>
                      Reset
                    </button>
                    <button
                      className="btn addUser min me-2"
                      type="submit"
                      onClick={() => {}}
                    >
                      Save
                    </button>
                    {"  "}
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

export default MappingMaster;
