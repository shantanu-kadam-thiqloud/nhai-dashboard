import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { UserService } from "../../Service/UserService";
import { DateFormatFunction } from "../HtmlComponents/CommonFunction";
import { ProfileService } from "../../Service/ProfileService";
import { v4 as uuid } from "uuid";
const AddUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useParams();
  // const users = [
  //   {
  //     id: 1,
  //     fullName: "Sumit Bajrang Kadam",
  //     userId: "2697",
  //     userType: "Admin",
  //     role: "Admin",
  //     isActive: true,
  //     employeeNumber: "EMP202",
  //     domainName: "example.com",
  //     gender: "Male",
  //     email: "Sumit@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  //   {
  //     id: 2,
  //     fullName: "Mandar Milind Naphad",
  //     userId: "2698",
  //     userType: "User",
  //     role: "Member",
  //     isActive: true,
  //     employeeNumber: "EMP203",
  //     domainName: "example.com",
  //     gender: "Male",
  //     email: "Mandar@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  //   {
  //     id: 3,
  //     fullName: "Ajay Dilip Sharma",
  //     userId: "2699",
  //     userType: "User",
  //     role: "Member",
  //     isActive: true,
  //     employeeNumber: "EMP202",
  //     domainName: "example.com",
  //     gender: "Male",
  //     email: "Ajay@gmail.com",
  //     mobileNumber: "999-333-4400",
  //     workNo: "W123",
  //     createdDate: "15-01-2024", //"2023-08-08",
  //     createdBy: "Admin",
  //   },
  // ];
  //const user = users.find((u) => u.id.toString() === userId);
  const [user, setUser] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userid, setUserid] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [role, setRole] = useState("");
  const [profileId, setProfileId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const path = window.location.pathname;
  const isEdit = path.includes("EditUser") ? true : false;
  const [profileList, setProfileList] = useState([]);
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

  useEffect(() => {
    if (isEdit) {
      setIsLoading(true);
      fetchUserById();
    }
    fetchProfileList();
  }, [isEdit]);
  //----------------------Handle submit----------------------------------------
  const handleSubmit = (values, { resetForm, setSubmitting }, actions) => {
    console.log(values);
    setIsLoading(true);
    if (isEdit) {
      EditUser(values);
    } else {
      AddUser(values);
    }
  };
  //----------------------Add User---------------------------------------------
  function AddUser(values) {
    UserService.addUser(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //uuid
        },
        requsterUserId: "35605",
        userName: values.userId, //"Shantanu",
        fullName: values.userName, //"Shanatnu",
        userType: "", //"Admin",
        employeeNumber: values.employeeNumber, //"12345",
        domainName: "", //"example.com",
        userRole: role, //"Administrator",
        gender: "", //"Male",
        email: values.email, //"shantanu@example.com",
        mobileNumber: values.mobile, //"123-456-7890",
        workNo: "", //"W123",
        isActive: false,
        createdDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        createdBy: "Admin",
        requestType: "Add",
        status: "Initiated",
        profileId: Number(values.role),
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Users");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //----------------------Get User--------------------------------------------
  function fetchUserById() {
    var user = {};
    UserService.getUserById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userId: userId,
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          user = res.data.responseObject;
          // console.log("UserList->", UserList);
          setUser(user);

          setEmail(user.email);
          setEmployeeNumber(user.employeeNumber);
          setFullName(user.fullName);
          setIsActive(user.isActive);
          setMobile(user.mobileNumber);
          setUserid(user.userId);
          setRole(user.userRole);
          setProfileId(user.profileId);

          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
    console.log("user->", user);
    return user;
  }
  //----------------------Edit User--------------------------------------------
  function EditUser(values) {
    UserService.updateUser(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //uuid
        },
        requsterUserId: "201",
        userName: values.userId, //"Shantanu",
        fullName: values.userName, //"Shanatnu",
        userType: "", //"Admin",
        employeeNumber: values.employeeNumber, //"12345",
        domainName: "", //"example.com",
        userRole: role, //"Administrator",
        gender: "", //"Male",
        email: values.email, //"shantanu@example.com",
        mobileNumber: values.mobile, //"123-456-7890",
        workNo: "", //"W123",
        isActive: Boolean(values.isActive),
        updatedDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        updatedBy: "Admin",
        requestType: "Update",
        status: "Initiated",
        profileId: Number(values.role),
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Users");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //--------------------Role Dropdown------------------------------------------
  function fetchProfileList() {
    var ProfileList = [];
    ProfileService.getProfileList(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          ProfileList = res.data.profiles;
          // console.log("UserList->", UserList);
          setProfileList(ProfileList);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      }
    );
    return ProfileList;
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
                  userName: isEdit ? fullName : "",
                  email: isEdit ? email : "",
                  userId: isEdit ? userid : "",
                  employeeNumber: isEdit ? employeeNumber : "",
                  role: isEdit ? profileId : "",
                  mobile: isEdit ? mobile : "",
                  isActive: isEdit ? isActive : "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                {({ values }) => (
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
                              //value={fullName}
                              // onChange={(e) => {
                              //   setFullName(e.target.value);
                              // }}
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
                              // onChange={(e) => {
                              //   setEmail(e.target.value);
                              // }}
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
                              // onChange={(e) => {
                              //   setMobile(e.target.value);
                              // }}
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
                                // onClick={(e) => {
                                //   setIsActive(e.target.value);
                                // }}
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
                              // onChange={(e) => {
                              //   setUserid(e.target.value);
                              // }}
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
                              // onChange={(e) => {
                              //   setEmployeeNumber(e.target.value);
                              // }}
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
                              // onChange={(e) => {
                              //   setRole(e.target.value);
                              // }}
                            >
                              {" "}
                              <option value="" className="greyText">
                                Select role
                              </option>
                              {(profileList || []).map((x) => {
                                setRole(x.profileName);
                                return (
                                  <option value={x.id}>{x.profileName}</option>
                                );
                              })}
                              {/* <option value="NHAIHO">NHAIHO</option>
                              <option value="Bank">Bank</option>
                              <option value="RO">RO</option>
                              <option value="Admin">Admin</option> */}
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
                        // onClick={() => {
                        //   setIsLoading(true);
                        //   toast.success("Request raised successfully!", {
                        //     position: "top-right",
                        //     autoClose: 3000,
                        //   });
                        //   setTimeout(() => {
                        //     setIsLoading(false);
                        //     navigate("/NHAI/Users");
                        //   }, 1000);
                        //   // setModal(false);
                        // }}
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
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
