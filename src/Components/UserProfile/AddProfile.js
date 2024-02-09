import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "../HtmlComponents/DataTable";
import Spinner from "../HtmlComponents/Spinner";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { ProfileService } from "../../Service/ProfileService";
import { toast } from "react-toastify";
import sideData from "../Checker/sideBarData";
import { GroupService } from "../../Service/GroupService";
import { v4 as uuid } from "uuid";
const AddProfile = () => {
  const [isAllCheck, setAllCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState("");
  const [profile, setProfile] = useState({});
  const [groupList, setGroupList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { userId } = useParams();
  // const profiles = [
  //   {
  //     id: 1,
  //     profileName: "Admin",
  //     profileDescription: "Admin Profile",
  //     isActive: true,
  //     createdBy: "AdminUser1",
  //     createdDate: "2023-08-10",
  //   },
  //   {
  //     id: 2,
  //     profileName: "PD",
  //     profileDescription: "PD Profile",
  //     isActive: true,
  //     createdBy: "AdminUser2",
  //     createdDate: "2023-08-09",
  //   },
  //   {
  //     id: 3,
  //     profileName: "Bank",
  //     profileDescription: "Bank Profile",
  //     isActive: true,
  //     createdBy: "AdminUser3",
  //     createdDate: "2023-08-08",
  //   },
  //   {
  //     id: 4,
  //     profileName: "NHAIHD",
  //     profileDescription: "NHAIHD Profile",
  //     isActive: false,
  //     createdBy: "AdminUser4",
  //     createdDate: "2023-08-07",
  //   },
  // ];
  //const profile = profiles.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const isEdit = path.includes("EditProfile") ? true : false;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    profileName: Yup.string().required("Profile Name is required"),
    profileDescription: Yup.string().required(
      "Profile Description is required"
    ),
    group: Yup.string().required("Group is required"),
  });

  useEffect(() => {
    fetchGroupList();
    if (isEdit) {
      setIsLoading(true);
      fetchProfileById();
    }
  }, [isEdit]);

  // const columns = [
  //   {
  //     accessor: "menu",
  //   },
  //   {
  //     accessor: "subMenu",
  //   },
  //   {
  //     accessor: "action",
  //   },
  //   {
  //     accessor: "check",
  //     Cell: ({ value }) => (
  //       <input
  //         // className="form-check-input"
  //         type="checkbox"
  //         id="flexSwitchCheckChecked"
  //         checked={value}
  //       />
  //     ),
  //   },
  // ];
  // const data = [
  //   {
  //     id: 1,
  //     menuName: "Home",
  //     url: "/NHAI/Dashboard",
  //     subMenu: [
  //       { id: 1, name: "Snapshot", check: true, action: [] },
  //       { id: 2, name: "Financial", check: false, action: [] },
  //       { id: 3, name: "Financial(D)", check: false, action: [] },
  //       { id: 4, name: "Bank", check: true, action: [] },
  //       { id: 5, name: "Zone", check: true, action: [] },
  //       { id: 6, name: "RO", check: true, action: [] },
  //       { id: 7, name: "PIU", check: true, action: [] },
  //       { id: 8, name: "Account Level", check: true, action: [] },
  //       { id: 9, name: "Transaction", check: true, action: [] },
  //       { id: 10, name: "Ageing", check: true, action: [] },
  //       { id: 11, name: "Events", check: true, action: [] },
  //       { id: 12, name: "Limit Ledger", check: true, action: [] },
  //       { id: 13, name: "Velocity", check: true, action: [] },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     menuName: "Admin",
  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "User",
  //         url: "/NHAI/Users",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "User Profile",
  //         url: "/NHAI/Profiles",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         name: "User Group",
  //         url: "/NHAI/Groups",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         name: "Function Point",
  //         url: "/NHAI/FunctionPoint",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         name: "Assign Rights",
  //         url: "/NHAI/AssignRights",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 6,
  //         name: "Rule",
  //         url: "/NHAI/Rule",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 7,
  //         name: "File Upload",
  //         url: "/NHAI/FileUpload",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 8,
  //         name: "Mapping Master",
  //         url: "/NHAI/MappingMaster",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 9,
  //         name: "Job Execution Log",
  //         url: "/NHAI/JobLog",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     menuName: "Manage Password",
  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "Change Password",
  //         url: "/NHAI/ChangePassword",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     menuName: "Reports",

  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "User Login Report",
  //         url: "/NHAI/UserLoginReport",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 2,
  //         name: "User Active/Inactive",
  //         url: "/NHAI/UserActiveInactiveReport",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 3,
  //         name: "FIFO Ageing Report",
  //         url: "/NHAI/FIFOAgeingReport",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  // ];
  // ---------------------------------------------------------------------------------
  const [menuData, setMenuData] = useState(sideData[0].data);

  // const handleCheckAll = () => {
  //   const updatedMenuData = menuData.map((menu) => ({
  //     ...menu,
  //     subMenu: menu.subMenu.map((subMenu) => ({
  //       ...subMenu,
  //       check: true,
  //       action: subMenu.action.map((action) => ({
  //         ...action,
  //         check: true,
  //       })),
  //     })),
  //   }));

  //   setMenuData(updatedMenuData);
  // };

  const handleCheckAll = () => {
    const updatedMenuData = menuData.map((menu) => ({
      ...menu,
      subMenu: menu.subMenu.map((subMenu) => ({
        ...subMenu,
        check: true,
        action: subMenu.action.map((action) => ({
          ...action,
          oldCheck: action.check, // Store old check value
          check: true,
        })),
      })),
    }));

    setMenuData(updatedMenuData);
  };

  // const handleUnCheckAll = () => {
  //   const updatedMenuData = menuData.map((menu) => ({
  //     ...menu,
  //     subMenu: menu.subMenu.map((subMenu) => ({
  //       ...subMenu,
  //       check: false,
  //       action: subMenu.action.map((action) => ({
  //         ...action,
  //         check: false,
  //       })),
  //     })),
  //   }));

  //   setMenuData(updatedMenuData);
  // };

  const handleUnCheckAll = () => {
    const updatedMenuData = menuData.map((menu) => ({
      ...menu,
      subMenu: menu.subMenu.map((subMenu) => ({
        ...subMenu,
        check: false,
        action: subMenu.action.map((action) => ({
          ...action,
          oldCheck: action.check, // Store old check value
          check: false,
        })),
      })),
    }));

    setMenuData(updatedMenuData);
  };

  // const handleCheckboxChange = (menuIndex, subMenuIndex, actionIndex) => {
  //   const updatedMenuData = [...menuData];

  //   if (
  //     updatedMenuData[menuIndex] &&
  //     updatedMenuData[menuIndex].subMenu &&
  //     subMenuIndex !== undefined &&
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex]
  //   ) {
  //     // Checkbox in submenu item clicked
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex].check =
  //       !updatedMenuData[menuIndex].subMenu[subMenuIndex].check;
  //   }

  //   if (
  //     actionIndex !== undefined &&
  //     updatedMenuData[menuIndex] &&
  //     updatedMenuData[menuIndex].subMenu &&
  //     subMenuIndex !== undefined &&
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex] &&
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex].action &&
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex]
  //   ) {
  //     // Checkbox in action item clicked
  //     updatedMenuData[menuIndex].subMenu[subMenuIndex].action[
  //       actionIndex
  //     ].check =
  //       !updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex]
  //         .check;
  //   }

  //   setMenuData(updatedMenuData);
  // };

  const handleCheckboxChange = (menuIndex, subMenuIndex, actionIndex) => {
    const updatedMenuData = [...menuData];

    if (
      updatedMenuData[menuIndex] &&
      updatedMenuData[menuIndex].subMenu &&
      subMenuIndex !== undefined &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex]
    ) {
      // Checkbox in submenu item clicked
      const currentSubMenu = updatedMenuData[menuIndex].subMenu[subMenuIndex];
      const oldCheckSubMenu = currentSubMenu.check;
      currentSubMenu.oldCheck = oldCheckSubMenu; // Store old check value
      currentSubMenu.check = !oldCheckSubMenu;
    }

    if (
      actionIndex !== undefined &&
      updatedMenuData[menuIndex] &&
      updatedMenuData[menuIndex].subMenu &&
      subMenuIndex !== undefined &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex] &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex].action &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex]
    ) {
      // Checkbox in action item clicked
      const currentAction =
        updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex];
      const oldCheckAction = currentAction.check;
      currentAction.oldCheck = oldCheckAction; // Store old check value
      currentAction.check = !oldCheckAction;
    }

    setMenuData(updatedMenuData);
  };

  //-------------Handle Submit---------------------------------------------
  const handleSubmit = (values, { resetForm, setSubmitting }, actions) => {
    console.log(values);
    setIsLoading(true);
    if (isEdit) {
      editProfile(values);
    } else {
      addProfile(values);
    }
  };
  //-------------Group Dropdown---------------------------------------------
  function fetchGroupList() {
    var GroupList = [];
    GroupService.getGroupList(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          GroupList = res.data.groups;
          // console.log("UserList->", UserList);
          setGroupList(GroupList);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error..!");
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (err) => {
        setIsLoading(false);
        console.error("Exception - >", err);
        navigate("/NHAI/Error/500");
      }
    );
    return GroupList;
  }
  //-----------Add Profile----------------------------------------------
  function addProfile(values) {
    ProfileService.addProfile(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
        requsterUserId: "35607",
        profileName: values.profileName,
        profileDescription: values.profileDescription,
        //group: values.group,
        groupId: Number(values.group),
        groupName: values.groupName,
        isActive: false,
        createdDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        createdBy: "Admin",
        requestType: "Add",
        status: "Initiated",
        mapping: menuData || [],
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Profiles");
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
  //-----------Get Profile----------------------------------------------
  function fetchProfileById() {
    var profile = {};
    var profileId = parseInt(userId, 10);
    ProfileService.getProfileById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        id: profileId, // 47, //
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          profile = res.data;
          setMenuData(res.data.mapping);
          setProfile(profile);
          //-------------------------------------
          setProfileName(profile.profileName);
          setProfileDescription(profile.profileDescription);
          setGroupId(profile.groupId);
          setIsActive(profile.isActive);
          setGroupName(profile.groupName);
          //-----------------------------------
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error...!");
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
    console.log("profile->", profile);
    return profile;
  }
  //------------Edit Profile--------------------------------------------
  function editProfile(values) {
    ProfileService.updateProfile(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        requsterUserId: "35607",
        id: Number(userId),
        profileName: values.profileName,
        profileDescription: values.profileDescription,
        //  group: values.group,
        groupId: Number(values.group),
        groupName: values.groupName,
        isActive: Boolean(values.isActive),
        updatedDate: DateFormatFunction(new Date().toISOString().split("T")[0]),
        updatedBy: "Admin",
        requestType: "Update",
        status: "Initiated",
        mapping: menuData || [],
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Profiles");
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
          <Formik
            initialValues={{
              profileName: isEdit ? profileName : "",
              profileDescription: isEdit ? profileDescription : "",
              group: isEdit ? groupId : "",
              isActive: isEdit ? isActive : "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values }) => (
              <Form>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="mb-3 mt-3 pageTitle">
                      {isEdit ? "Edit" : "Add"} Profile
                    </h2>
                    <div className="float-end mb-3 mt-3">
                      <button
                        className="btn BackBtn me-2"
                        type="submit"
                        onClick={() => {
                          navigate("/NHAI/Profiles");
                        }}
                      >
                        Back to List
                      </button>
                      <button className="btn addUser min me-2" type="submit">
                        Submit
                      </button>
                      {"  "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 mx-auto flex">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label
                              htmlFor="profileName"
                              className="form-label required"
                            >
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
                            <label
                              htmlFor="profileDescription"
                              className="form-label required"
                            >
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
                          <div className="mb-3">
                            <label
                              htmlFor="group"
                              className="form-label required"
                            >
                              Group
                            </label>
                            <Field
                              as="select"
                              className="form-control form-select"
                              id="profileDescription"
                              name="group"
                            >
                              <option value="">Select Group</option>
                              {(groupList || []).map((x) => {
                                setGroupName(x.groupName);
                                return (
                                  <option value={x.id}>{x.groupName}</option>
                                );
                              })}
                            </Field>
                            <ErrorMessage
                              name="profileDescription"
                              component="div"
                              className="error"
                            />
                          </div>
                          {isEdit ? (
                            <div className="mb-3">
                              <label htmlFor="IsActive" className="form-label ">
                                Is Active
                              </label>
                              <br />
                              <Field
                                name="isActive"
                                className="form-check-input box30"
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
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {/* -----------------Profile Mapping--------------------------------------------------------- */}
          <div className="row ">
            {/* border border-dark rounded-2 m-2 */}
            {/* ---------------------Title------------------------------------------------------------- */}
            {/* <div className="row "> */}
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Profile Mapping</h2>
              <div className="float-end mb-1 mt-4 mx-3">
                <button
                  className="btn addUser me-2 min-width-110px"
                  type="button"
                  onClick={() => {
                    // setAllCheck(true);

                    handleCheckAll();
                  }}
                >
                  Check All
                </button>{" "}
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setAllCheck(false);
                    handleUnCheckAll();
                  }}
                >
                  UnCheck All
                </button>{" "}
              </div>
            </div>
            {/* </div> */}
            {/* -------------------------------------------------------------------------------------- */}
            <div className="col-md-11 mx-5 flex p-4">
              {(menuData || []).map((m, mindex) => {
                return (
                  <div className="row p-1" key={m.id}>
                    <div className="row menuColor">
                      <div className="col ">{m.menuName}</div>
                    </div>
                    {(m.subMenu || []).map((s, sindex) => {
                      return (
                        <>
                          <div className="row p-1">
                            <div className="col-4 submenuColor"></div>
                            <div className="col-4 submenuColor ">{s.name}</div>
                            <div className="col-3 submenuColor"></div>
                            {s.action.length == 0 ? (
                              <div className="col-1 submenuColor" key={s.id}>
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="submenu"
                                  checked={s.check}
                                  //checked={s.check || isAllCheck}
                                  onChange={() =>
                                    handleCheckboxChange(mindex, sindex)
                                  }
                                  onClick={(e) => {
                                    console.log("Submenu -> ", s);
                                  }}
                                />
                              </div>
                            ) : (
                              <div
                                className="col-1 submenuColor"
                                key={s.id}
                              ></div>
                            )}
                          </div>
                          {(s.action || []).map((a, aindex) => {
                            return (
                              <div className="row p-1" key={a.id}>
                                <div className="col-4 submenuColor"></div>
                                <div className="col-4 submenuColor"></div>
                                <div className="col-3  submenuColor">
                                  {a.actionName}
                                </div>
                                <div className="col-1 submenuColor" key={a.id}>
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="submenu"
                                    checked={a.check}
                                    //  checked={a.check || isAllCheck}
                                    onClick={(e) => {
                                      console.log("Action -> ", s, a);
                                    }}
                                    onChange={() =>
                                      handleCheckboxChange(
                                        mindex,
                                        sindex,
                                        aindex
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
