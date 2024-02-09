import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerProfileService } from "../../Service/CheckerService/CheckerProfileService";
import {
  ConvertFormat,
  DateFormatFunction,
} from "../HtmlComponents/CommonFunction";
import { v4 as uuid } from "uuid";
const ProfilleCheckerDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [mapping, setMapping] = useState([]);
  const [currentValue, setCurrentValue] = useState({});
  const [oldValue, setOldValue] = useState({});
  const [req, setReq] = useState({});
  const [remark, setRemark] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      //boxShadow: "1px 2px #888888",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    if (path.includes("profileUpdateRequestDetails")) {
      FetchUpdateDetails();
    } else {
      FetchAddDeleteDetails();
    }
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  // const profiles = [
  //   {
  //     id: 1,
  //     profileName: "Admin",
  //     profileDescription: "Admin Profile",
  //     group: "Admin",
  //     isActive: true,
  //   },
  //   {
  //     id: 2,
  //     profileName: "PD",
  //     profileDescription: "PD Profile",
  //     group: "PD",
  //     isActive: true,
  //   },
  //   {
  //     id: 3,
  //     profileName: "Bank",
  //     profileDescription: "Bank Profile",
  //     group: "Bank",
  //     isActive: true,
  //   },
  //   {
  //     id: 4,
  //     profileName: "NHAIHD",
  //     profileDescription: "NHAIHD Profile",
  //     group: "NHAI",
  //     isActive: false,
  //   },
  // ];
  // const data = [
  //   {
  //     id: 1,
  //     requestName: "Add Profile1",
  //     requestId: "JD001",
  //     requestDetails: "Add Profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Add Profile2",
  //     requestId: "JS002",
  //     requestDetails: "Add Profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Add Profile3",
  //     requestId: "BJ003",
  //     requestDetails: "Add Profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Add Profile4",
  //     requestId: "AB004",
  //     requestDetails: "Add Profile in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Add Profile5",
  //     requestId: "EA005",
  //     requestDetails: "Add Profile in appilication",
  //     requestType: "Add",
  //   },
  // ];
  const sidebarData = [
    {
      id: 1,
      menuName: "Home",
      url: "/NHAI/Dashboard",
      subMenu: [
        { id: 1, name: "Snapshot", check: true, oldCheck: true, action: [] },
        { id: 2, name: "Financial", check: false, oldCheck: true, action: [] },
        {
          id: 3,
          name: "Financial(D)",
          check: false,
          oldCheck: true,
          action: [],
        },
        { id: 4, name: "Bank", check: true, oldCheck: true, action: [] },
        { id: 5, name: "Zone", check: true, oldCheck: true, action: [] },
        { id: 6, name: "RO", check: true, oldCheck: true, action: [] },
        { id: 7, name: "PIU", check: true, oldCheck: true, action: [] },
        {
          id: 8,
          name: "Account Level",
          check: true,
          oldCheck: true,
          action: [],
        },
        { id: 9, name: "Transaction", check: true, oldCheck: true, action: [] },
        { id: 10, name: "Ageing", check: true, oldCheck: true, action: [] },
        { id: 11, name: "Events", check: true, oldCheck: true, action: [] },
        {
          id: 12,
          name: "Limit Ledger",
          check: true,
          oldCheck: true,
          action: [],
        },
        { id: 13, name: "Velocity", check: true, oldCheck: true, action: [] },
      ],
    },
    {
      id: 2,
      menuName: "Admin",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User",
          url: "/NHAI/Users",
          check: false,
          action: [
            { id: 1, actionName: "List", check: true, oldCheck: true },
            { id: 2, actionName: "Modify", oldCheck: true, check: true },
            { id: 3, actionName: "Add", oldCheck: true, check: false },
            { id: 4, actionName: "View", oldCheck: true, check: false },
            { id: 5, actionName: "Delete", oldCheck: true, check: false },
          ],
        },
        {
          id: 2,
          name: "User Profile",
          url: "/NHAI/Profiles",
          check: false,
          action: [
            { id: 1, actionName: "List", oldCheck: true, check: true },
            { id: 2, actionName: "Modify", oldCheck: true, check: true },
            { id: 3, actionName: "Add", oldCheck: true, heck: false },
            { id: 4, actionName: "View", oldCheck: true, check: false },
            { id: 5, actionName: "Delete", oldCheck: true, check: false },
          ],
        },
        {
          id: 3,
          name: "User Group",
          url: "/NHAI/Groups",
          check: false,
          action: [
            { id: 1, actionName: "List", oldCheck: true, check: true },
            { id: 2, actionName: "Modify", oldCheck: true, check: true },
            { id: 3, actionName: "Add", oldCheck: true, check: false },
            { id: 4, actionName: "View", oldCheck: true, check: false },
            { id: 5, actionName: "Delete", oldCheck: true, check: false },
          ],
        },
        {
          id: 4,
          name: "Function Point",
          url: "/NHAI/FunctionPoint",
          check: false,
          action: [
            { id: 1, actionName: "List", oldCheck: true, check: true },
            { id: 2, actionName: "Modify", oldCheck: true, check: true },
            { id: 3, actionName: "Add", oldCheck: true, check: false },
            { id: 4, actionName: "View", oldCheck: true, check: false },
            { id: 5, actionName: "Delete", oldCheck: true, check: false },
          ],
        },
        {
          id: 5,
          name: "Assign Rights",
          url: "/NHAI/AssignRights",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 6,
          name: "Rule",
          url: "/NHAI/Rule",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 7,
          name: "File Upload",
          url: "/NHAI/FileUpload",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 8,
          name: "Mapping Master",
          url: "/NHAI/MappingMaster",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 9,
          name: "Job Execution Log",
          url: "/NHAI/JobLog",
          check: false,
          oldCheck: true,
          action: [],
        },
      ],
    },
    {
      id: 3,
      menuName: "Manage Password",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "Change Password",
          url: "/NHAI/ChangePassword",
          check: false,
          oldCheck: true,
          action: [],
        },
      ],
    },
    {
      id: 4,
      menuName: "Reports",

      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User Login Report",
          url: "/NHAI/UserLoginReport",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 2,
          name: "User Active/Inactive",
          url: "/NHAI/UserActiveInactiveReport",
          check: false,
          oldCheck: true,
          action: [],
        },
        {
          id: 3,
          name: "FIFO Ageing Report",
          url: "/NHAI/FIFOAgeingReport",
          check: false,
          oldCheck: true,
          action: [],
        },
      ],
    },
  ];
  //const user = profiles.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  //const req = data.find((u) => u.id.toString() === userId);
  if (!profile) {
    return <p>Profile not found.</p>;
  }

  //-------------------Profile Add Delete Request Details--------------------------------------------------------
  function FetchAddDeleteDetails() {
    CheckerProfileService.getProfileAddDeleteDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
        requestId: userId, //"1697eece-b424-4fb4-95e6-03f946871c38000",
        requestType: path.includes("profileAddRequestDetails")
          ? "Add"
          : "Delete",
      },
      (res) => {
        if (res.status === 200) {
          setReq(res.data);
          setMapping(res.data.mapping);
          setProfile(res.data.requestData);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
  //-------------------Profile Update Request Details------------------------------------------------------------
  function FetchUpdateDetails() {
    CheckerProfileService.getProfileUpdateDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
        requestId: userId, //"7ba67c86-aad4-4214-ba01-aca6955c2be8",
        requestType: "Update",
      },
      (res) => {
        if (res.status === 200) {
          setReq(res.data);
          setCurrentValue(res.data.requestData.existingValue);
          setOldValue(res.data.requestData.oldValue);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
  //----------------------------------------------------------------------------------------------------------
  function CheckerApproval(action) {
    CheckerProfileService.checkerProfileApproval(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        requestId: userId,
        requestType: path.includes("profileAddRequestDetails")
          ? "Add"
          : path.includes("profileUpdateRequestDetails")
          ? "Update"
          : "Delete",
        action: action, //"Approved",
        checkerRemark: action == "Declined" ? remark : "Approved", //"Test",
        checkerId: "35604", //"601",
        userName: "nhai", //path.includes("userUpdateRequestDetails")
        //   ? currentValue.userId
        //   : group.userId,
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/ProfileRequests");
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
  return (
    <div className="container UDContainer">
      <Spinner isLoading={isLoading} />
      <div className="ULContainer">
        {/* -----------Request Details------------------ */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">Request Details</h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Request Id:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestId}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Request Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestType}</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>Request Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {DateFormatFunction(req.requestRaisedTime)}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Raised by:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestRaisedBy}</div>
          </div>
        </div>
        {/* -----------User Details--------------------- */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {path.includes("profileAddRequestDetails")
                ? "Add "
                : path.includes("profileUpdateRequestDetails")
                ? "Update "
                : "Delete "}
              Profile Details
            </h2>
          </div>
        </div>

        {!path.includes("profileUpdateRequestDetails") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>Profile Name:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{profile.profileName}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Profile Description:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                {profile.profileDescription}
              </div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created Date:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{profile.createdDate}</div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="col-md-5">
              <div className="col-md-6 UDCoulmns">
                <strong>Group:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{profile.groupName}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                <input
                  readOnly
                  className="form-check-input"
                  type="checkbox"
                  id="submenu"
                  checked={profile.isActive}
                />
              </div>
              <div className="col-md-6 UDCoulmns">
                <strong>Created By:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{profile.createdBy}</div>
            </div>
          </div>
        ) : (
          <div className="row UserDetails mt-3">
            <div className="col-md-11 mx-auto">
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Field Name</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Updated Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Old Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>Profile Name:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.profileName}
              </div>
              <div className="col-md-4 UDCoulmns">{oldValue.profileName}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Profile Description:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.profileDescription}
              </div>
              <div className="col-md-4 UDCoulmns">
                {oldValue.profileDescription}
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>Group:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.group}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.group}</div>
              {/* <div className="col-md-4 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.isActive}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.isActive}</div> */}
              <div className="col-md-4 UDCoulmns">
                <strong>Updated By:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.updatedBy}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.updatedBy}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Updated Date:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.updatedDate}
              </div>
              <div className="col-md-4 UDCoulmns">{oldValue.updatedDate}</div>
            </div>
          </div>
        )}

        {/* -----------Mapping Details------------------ */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className=" mt-3 pageTitle">Profile Mapping Details</h2>
          </div>
        </div>
        <div className="row UserDetails ">
          <div className="col-md-11 mx-5 flex p-4">
            {path.includes("profileUpdateRequestDetails") && (
              <div className="row p-1">
                <div className="row menuColor">
                  <div className="col-4 "></div>
                  <div className="col-4 "></div>
                  <div className="col-2  "></div>
                  <div className="col-1 ">Updated </div>
                  <div className="col-1 ">Old </div>
                </div>
              </div>
            )}
            {(mapping || []).map((m, mindex) => {
              //sidebarData
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
                          <div className="col-2 submenuColor"></div>
                          {s.action.length == 0 ? (
                            <>
                              {" "}
                              <div className="col-1 submenuColor" key={s.id}>
                                {" "}
                                <input
                                  readOnly
                                  className="form-check-input"
                                  type="checkbox"
                                  id="submenu"
                                  checked={s.check}
                                  //checked={s.check || isAllCheck}
                                  // onChange={() =>
                                  //   handleCheckboxChange(mindex, sindex)
                                  // }
                                  onClick={(e) => {
                                    console.log("Submenu -> ", s);
                                  }}
                                />
                              </div>
                              <div className="col-1 submenuColor" key={s.id}>
                                {" "}
                                {path.includes(
                                  "profileUpdateRequestDetails"
                                ) && (
                                  <input
                                    readOnly
                                    className="form-check-input"
                                    type="checkbox"
                                    id="submenu"
                                    checked={s.oldCheck}
                                    //checked={s.check || isAllCheck}
                                    // onChange={() =>
                                    //   handleCheckboxChange(mindex, sindex)
                                    // }
                                    onClick={(e) => {
                                      console.log("Submenu -> ", s);
                                    }}
                                  />
                                )}
                              </div>
                            </>
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
                              <div className="col-2  submenuColor">
                                {a.actionName}
                              </div>
                              <div className="col-1 submenuColor" key={a.id}>
                                {" "}
                                <input
                                  readOnly
                                  className="form-check-input"
                                  type="checkbox"
                                  id="submenu"
                                  checked={a.check}
                                  //  checked={a.check || isAllCheck}
                                  onClick={(e) => {
                                    console.log("Action -> ", s, a);
                                  }}
                                  // onChange={() =>
                                  //   handleCheckboxChange(mindex, sindex, aindex)
                                  // }
                                />
                              </div>
                              <div className="col-1 submenuColor" key={a.id}>
                                {" "}
                                {path.includes(
                                  "profileUpdateRequestDetails"
                                ) && (
                                  <input
                                    readOnly
                                    className="form-check-input"
                                    type="checkbox"
                                    id="submenu"
                                    checked={a.oldCheck}
                                    //  checked={a.check || isAllCheck}
                                    onClick={(e) => {
                                      console.log("Action -> ", s, a);
                                    }}
                                    // onChange={() =>
                                    //   handleCheckboxChange(mindex, sindex, aindex)
                                    // }
                                  />
                                )}
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

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/profileRequests");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser checkerAction"
              type="button"
              onClick={() => {
                setIsLoading(true);
                CheckerApproval("Approved");
              }}
            >
              Approve
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                //navigate();
                openModal();
              }}
            >
              Decline
            </button>
          </div>
        </div>
        {/* ----------Decline Pop------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="float-end mt-2">
              <FontAwesomeIcon
                icon={faTimes}
                className="closeIconPopup"
                onClick={() => {
                  closeModal();
                }}
              />
            </div>
            <h3 className="text-left">Please add Request decline reason</h3>
            <div className="">
              <textarea
                rows="4"
                name="remark"
                className="form-control"
                placeholder="Enter your remark here"
                onChange={(e) => {
                  setRemark(e.target.value);
                }}
              />
              <div className="p-2"></div>
              <div className="text-center">
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {
                    setIsLoading(true);
                    CheckerApproval("Declined");
                  }}
                >
                  Decline
                </button>
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProfilleCheckerDetails;
