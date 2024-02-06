import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddUser = () => {
  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    userType: Yup.string().required("User Type is required"),
    userDomainName: Yup.string().required("User Domain Name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    workPhone: Yup.string().required("Work Phone is required"),
    userId: Yup.string().required("User ID is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    role: Yup.string().required("Role is required"),
    mobile: Yup.string().required("Mobile Number is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="wrapper">
      <div className="container">
        <div className='ULContainer'>
            <div className='row'>
              <div className="col-md-11 mx-auto"> 
                <h2 className="mb-3 mt-3 pageTitle">Add/Edit User</h2>               
              </div>              
            </div>
            <div className='row'>
              <div className='col-md-11 mx-auto flex'>  
          <Formik
                initialValues={{
                  userName: "",
                  userType: "",
                  userDomainName: "",
                  gender: "",
                  email: "",
                  workPhone: "",
                  userId: "",
                  employeeNumber: "",
                  role: "",
                  mobile: "",
                  password: "",
                }}
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
                                  User Name
                                </label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="userName"
                                  name="userName"
                                  placeholder="Enter user name"
                                />
                                <ErrorMessage
                                  name="userName"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="userType" className="form-label">
                                  User Type
                                </label>
                                <Field
                                  as="select"
                                  className="form-control"
                                  id="userType"
                                  name="userType"
                                >
                                  <option value="">Select user type</option>
                                  <option value="NHAI">NHAI</option>
                                  <option value="BANK">BANK</option>
                                  <option value="PD">PD</option>
                                  <option value="RO">RO</option>
                                </Field>
                                <ErrorMessage
                                  name="userType"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="userDomainName" className="form-label">
                                  User Domain Name
                                </label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="userDomainName"
                                  name="userDomainName"
                                  placeholder="Enter user domain name"
                                />
                                <ErrorMessage
                                  name="userDomainName"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="gender" className="form-label">
                                  Gender
                                </label>
                                <Field
                                  as="select"
                                  className="form-control"
                                  id="gender"
                                  name="gender"
                                >
                                  <option value="">Select gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </Field>
                                <ErrorMessage
                                  name="gender"
                                  component="div"
                                  className="error"
                                />
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
                                <label htmlFor="workPhone" className="form-label">
                                  Work Phone
                                </label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="workPhone"
                                  name="workPhone"
                                  placeholder="Enter work phone"
                                />
                                <ErrorMessage
                                  name="workPhone"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label htmlFor="userId" className="form-label">
                                  User ID
                                </label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="userId"
                                  name="userId"
                                  placeholder="Enter user ID"
                                />
                                <ErrorMessage
                                  name="userId"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="employeeNumber" className="form-label">
                                  Employee Number
                                </label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  id="employeeNumber"
                                  name="employeeNumber"
                                  placeholder="Enter employee number"
                                />
                                <ErrorMessage
                                  name="employeeNumber"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="role" className="form-label">
                                  Role
                                </label>
                                <Field
                                  as="select"
                                  className="form-control"
                                  id="role"
                                  name="role"
                                >
                                  <option value="">Select role</option>
                                  <option value="AdminRole">AdminRole</option>
                                  <option value="Role">Role</option>
                                  {/* Add more role options */}
                                </Field>
                                <ErrorMessage
                                  name="role"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">
                                  Mobile Number
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
                              <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                  Password
                                </label>
                                <Field
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="Enter password"
                                />
                                <ErrorMessage
                                  name="password"
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
                              // setModal(false);
                            }}
                          >
                            Submit
                          </button>
                          {"  "}
                          <button
                            className="btn addUser min"
                            type="button"                  
                          >
                            Cancel
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

export default AddUser;
