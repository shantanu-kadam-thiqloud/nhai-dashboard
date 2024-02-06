import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { GroupService } from "../../Service/GroupService";
import { DateFormatFunction } from "../HtmlComponents/DateFunction";
import Spinner from "../HtmlComponents/Spinner";
import { toast } from "react-toastify";

const AddGroup = () => {
  const { userId } = useParams();
  const path = window.location.pathname;
  const isEdit = path.includes("EditGroup") ? true : false;
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      setIsLoading(true);
      fetchGroupById();
    }
  }, [isEdit]);

  // const groups = [
  //   {
  //     id: 1,
  //     groupName: "Admin Group",
  //     groupDescription: "Admin Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser1",
  //     createdDate: "2023-08-10",
  //   },
  //   {
  //     id: 2,
  //     groupName: "Finance Group",
  //     groupDescription: "Finance Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser2",
  //     createdDate: "2023-08-09",
  //   },
  //   {
  //     id: 3,
  //     groupName: "HR Group",
  //     groupDescription: "HR Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser3",
  //     createdDate: "2023-08-08",
  //   },
  //   {
  //     id: 4,
  //     groupName: "IT Group",
  //     groupDescription: "IT Group Description",
  //     isActive: false,
  //     createdBy: "AdminUser4",
  //     createdDate: "2023-08-07",
  //   },
  // ];

  // const group = groups.find((g) => g.id.toString() === userId);
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

  //--------HandleSubmit----------------------------------------------------------
  const handleSubmit = (values, { resetForm, setSubmitting }, actions) => {
    console.log(values);
    setIsLoading(true);
    if (isEdit) {
      editGroup(values);
    } else {
      addGroup(values);
    }
  };
  //-----------Add Group Function-----------------------------------------------
  function addGroup(values) {
    GroupService.addGroup(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requsterUserId: "35605",
        id: 903,
        groupName: values.groupName, //"Backend Developer",
        groupDescription: values.groupDescription, //"Developer Group",
        isActive: false,
        createdDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        requestType: "Add",
        status: "Initiated",
        createdBy: "Admin",
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Groups");
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
  //-----------Get Group Function-----------------------------------------------
  function fetchGroupById() {
    var group = {};
    GroupService.getGroupById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        id: Number(userId),
        userName: "nhai",
      },
      (res) => {
        //meta data issue
        if (res.status == 200) {
          group = res.data;
          setGroupName(group.groupName);
          setGroupDescription(group.groupDescription);
          setIsActive(group.isActive);
          setIsLoading(false);
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed. Please try again.", {
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
        navigate("/NHAI/Error/500");
      }
    );
    console.log("group->", group);
    return group;
  }
  //-----------Edit Group function-----------------------------------------------
  function editGroup(values) {
    GroupService.updateGroup(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requsterUserId: "35605",
        id: Number(userId),
        groupName: values.groupName, //"Backend Developer",
        groupDescription: values.groupDescription, //"Developer Group",
        isActive: Boolean(values.isActive),
        updatedDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        updatedBy: "Admin",
        requestType: "Update",
        status: "Initiated",
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Groups");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed. Please try again.", {
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
        navigate("/NHAI/Error/500");
      }
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
                {isEdit ? "Edit" : "Add"} Group
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  groupName: isEdit ? groupName : "", //group ? group.groupName : "",
                  groupDescription: isEdit ? groupDescription : "", //group ? group.groupDescription : "",
                  isActive: isEdit ? isActive : false, //group ? group.isActive : "",
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
                              // value={groupName} // value={groupName}
                              // onChange={(e) => {
                              //   setGroupName(e.target.value);
                              // }}
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
                              // value={groupDescription}
                              // onChange={(e) => {
                              //   setGroupDescription(e.target.value);
                              // }}
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
                                className="box30 form-check-input form-control"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                //    checked={isActive}
                                // onClick={(e) => {
                                //   console.log(e.target.value);
                                //   setIsActive(e.target.value);
                                // }}
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
                        onClick={() => {
                          navigate("/NHAI/Groups");
                        }}
                      >
                        Back to List
                      </button>
                      <button className="btn addUser min me-2" type="submit">
                        Submit
                      </button>
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

export default AddGroup;
