import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const { userId } = useParams();
  const users = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "NHAI",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "AdminRole",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
      password: "Secure@890",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userId: "JS002",
      userType: "Bank",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "Role",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
      password: "Secure@890",
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userId: "BJ003",
      userType: "PD",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "AdminRole",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
      password: "Secure@890",
    },
    {
      id: 4,
      fullName: "Alice Brown",
      userId: "AB004",
      userType: "RO",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "Role",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
      password: "Secure@890",
    },
    {
      id: 5,
      fullName: "Eve Anderson",
      userId: "EA005",
      userType: "Bank",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "AdminRole",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
      password: "Secure@890",
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isEdit = path.includes("EditUser") ? true : false;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    userType: Yup.string().required("User Type is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

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
              <h2 className="mb-3 mt-3 pageTitle">
                {isEdit ? "Edit" : "Add"} User
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  userName: user ? user.fullName : "",
                  userType: user ? user.userType : "",
                  userDomainName: user ? user.domainName : "",
                  gender: user ? user.gender : "",
                  email: user ? user.email : "",
                  workPhone: user ? user.workNo : "",
                  userId: user ? user.userId : "",
                  employeeNumber: user ? user.employeeNumber : "",
                  role: user ? user.userRole : "",
                  mobile: user ? user.mobileNumber : "",
                  password: user ? user.password : "",
                  isActive: user ? user.isActive : "",
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
                          <label
                            htmlFor="userName"
                            className="form-label required"
                          >
                            User Full Name
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
                          <label
                            htmlFor="userType"
                            className="form-label required"
                          >
                            User Type
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select"
                            id="userType"
                            name="userType"
                          >
                            <option value="" className="greyText">
                              Select user type
                            </option>
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
                          <label
                            htmlFor="userDomainName"
                            className="form-label"
                          >
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
                          <label
                            htmlFor="gender"
                            className="form-label required"
                          >
                            Gender
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select required"
                            id="gender"
                            name="gender"
                          >
                            <option value="" className="greyText">
                              Select gender
                            </option>
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
                          <label
                            htmlFor="email"
                            className="form-label required"
                          >
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
                        {isEdit ? (
                          <div className="mb-3">
                            <label htmlFor="IsActive" className="form-label">
                              Is Active
                            </label>
                            <br />
                            <Field
                              name="isActive"
                              className="form-check-input form-control"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              style={{ width: "30px", height: "30px" }}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label htmlFor="userId" className="form-label">
                            User Id
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
                          <label
                            htmlFor="employeeNumber"
                            className="form-label required"
                          >
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
                            className="form-control form-select"
                            id="role"
                            name="role"
                          >
                            <option value="" className="greyText">
                              Select role
                            </option>
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
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button
                      className="btn BackBtn"
                      style={{ marginRight: "10px" }}
                      type="submit"
                      onClick={() => {
                        navigate("/NHAI/Users");
                      }}
                    >
                      Back to List
                    </button>
                    <button
                      className="btn addUser min"
                      style={{
                        marginRight: "10px",
                      }}
                      type="submit"
                      onClick={() => {
                        // setModal(false);
                      }}
                    >
                      Submit
                    </button>
                    {"  "}
                    {isEdit ? (
                      <button
                        className="btn addUser min"
                        type="button"
                        onClick={() => {
                          //navigate("/NHAI/Users");
                        }}
                      >
                        Reset Password
                      </button>
                    ) : (
                      ""
                    )}
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
