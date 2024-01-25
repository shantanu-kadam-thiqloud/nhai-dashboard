import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { UserService } from "../../Service/UserService";

const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();
  const users = [
    {
      id: 1,
      fullName: "Sumit Bajrang Kadam",
      userId: "2697",
      userType: "Admin",
      role: "Admin",
      isActive: true,
      employeeNumber: "EMP202",
      domainName: "example.com",
      gender: "Male",
      email: "Sumit@gmail.com",
      mobileNumber: "999-333-4400",
      workNo: "W123",
      createdDate: "15-01-2024", //"2023-08-08",
      createdBy: "Admin",
    },
    {
      id: 2,
      fullName: "Mandar Milind Naphad",
      userId: "2698",
      userType: "User",
      role: "Member",
      isActive: true,
      employeeNumber: "EMP203",
      domainName: "example.com",
      gender: "Male",
      email: "Mandar@gmail.com",
      mobileNumber: "999-333-4400",
      workNo: "W123",
      createdDate: "15-01-2024", //"2023-08-08",
      createdBy: "Admin",
    },
    {
      id: 3,
      fullName: "Ajay Dilip Sharma",
      userId: "2699",
      userType: "User",
      role: "Member",
      isActive: true,
      employeeNumber: "EMP202",
      domainName: "example.com",
      gender: "Male",
      email: "Ajay@gmail.com",
      mobileNumber: "999-333-4400",
      workNo: "W123",
      createdDate: "15-01-2024", //"2023-08-08",
      createdBy: "Admin",
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isEdit = path.includes("EditUser") ? true : false;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    userName: Yup.string().required("User Name is required"),
    // userType: Yup.string().required("User Type is required"),
    employeeNumber: Yup.string().required("Employee Number is required"),
    // gender: Yup.string().required("Gender is required"),
    // password: Yup.string().required("Password is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    // userDomainName: Yup.string("User Domain Name is invalid"),
    // workPhone: Yup.string("Work Phone is invalid"),
    userId: Yup.string("User ID is invalid"),
    role: Yup.string("Role is invalid"),
    mobile: Yup.string("Mobile Number is invalid"),
  });

  function AddUser() {
    UserService.addUser(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567", //uuid
        },
        requsterUserId: "201",
        userName: "Shantanu",
        fullName: "Shanatnu",
        userType: "Admin",
        employeeNumber: "12345",
        domainName: "example.com",
        userRole: "Administrator",
        gender: "Male",
        email: "shantanu@example.com",
        mobileNumber: "123-456-7890",
        workNo: "W123",
        isActive: true,
        createdDate: "28-08-2023",
        createdBy: "Admin User",
        requestType: "Add",
        status: "Initiated",
        profileId: 901,
      },
      (res) => {}
    );
  }

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
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
                  email: user ? user.email : "",
                  userId: user ? user.userId : "",
                  employeeNumber: user ? user.employeeNumber : "",
                  role: user ? user.userRole : "",
                  mobile: user ? user.mobileNumber : "",
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
                            <option value="NHAIHO">NHAIHO</option>
                            <option value="Bank">Bank</option>
                            <option value="RO">RO</option>
                            <option value="Admin">Admin</option>
                            {/* Add more role options */}
                          </Field>
                          <ErrorMessage
                            name="role"
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
                      className="btn BackBtn me-2"
                      type="submit"
                      onClick={() => {
                        navigate("/NHAI/Users");
                      }}
                    >
                      Back to List
                    </button>
                    <button
                      className="btn addUser min me-2"
                      type="submit"
                      onClick={() => {
                        setIsLoading(true);
                        toast.success("Request raised successfully!", {
                          position: "top-right",
                          autoClose: 3000,
                        });
                        setTimeout(() => {
                          setIsLoading(false);
                          navigate("/NHAI/Users");
                        }, 1000);
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
