import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerUserService } from "../../Service/CheckerService/CheckerUserService";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { UserService } from "../../Service/UserService";
import { v4 as uuid } from "uuid";
const UserCheckerDetails = () => {
  const path = window.location.pathname;
  const [isLoading, setIsLoading] = useState(false);
  const [remark, setRemark] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [currentValue, setCurrentValue] = useState({});
  const [oldValue, setOldValue] = useState({});
  const [req, setReq] = useState({});
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
  //-----------------------------------------------------------------------------
  // const currentDate = new Date();
  // const year = currentDate.getFullYear();
  // const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  // const day = String(currentDate.getDate()).padStart(2, "0");
  // const formattedDate = `${day}-${month}-${year}`;
  // console.log(formattedDate);

  useEffect(() => {
    if (path.includes("userUpdateRequestDetails")) {
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
  const users = [
    {
      id: 3,
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
      fullName: "Mandar Milind Sutar",
      userId: "2698",
      userType: "User",
      role: "Member",
      isActive: true,
      employeeNumber: "EMP202",
      domainName: "example.com",
      gender: "Male",
      email: "Mandar@gmail.com",
      mobileNumber: "999-333-4400",
      workNo: "W123",
      createdDate: "15-01-2024", //"2023-08-08",
      createdBy: "Admin",
    },
    {
      id: 1,
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
    //{
    //   id: 3,
    //   fullName: "Bob Johnson",
    //   userId: "BJ003",
    //   userType: "User",
    //   role: "Member",
    //   isActive: true,
    // },
    // {
    //   id: 4,
    //   fullName: "Alice Brown",
    //   userId: "AB004",
    //   userType: "User",
    //   role: "Member",
    //   isActive: false,
    // },
    // {
    //   id: 5,
    //   fullName: "Eve Anderson",
    //   userId: "EA005",
    //   userType: "User",
    //   role: "Guest",
    //   isActive: false,
    // },
    // {
    //   id: 6,
    //   fullName: "Tom Wilson",
    //   userId: "TW006",
    //   userType: "User",
    //   role: "Guest",
    //   isActive: true,
    // },
    // {
    //   id: 7,
    //   fullName: "Laura Lee",
    //   userId: "LL007",
    //   userType: "User",
    //   role: "Guest",
    //   isActive: true,
    // },
    // {
    //   id: 8,
    //   fullName: "Michael Johnson",
    //   userId: "MJ008",
    //   userType: "User",
    //   role: "Member",
    //   isActive: false,
    // },
    // {
    //   id: 9,
    //   fullName: "Olivia Brown",
    //   userId: "OB009",
    //   userType: "User",
    //   role: "Member",
    //   isActive: true,
    // },
    // {
    //   id: 10,
    //   fullName: "William Lee",
    //   userId: "WL010",
    //   userType: "User",
    //   role: "Member",
    //   isActive: true,
    // },
  ];

  const data = [
    {
      id: 1,
      requestName: "Add Ajay Dilip Sharma",
      requestId: "RQ1001",
      requestDetails: "Add user in appilication",
      requestType: "Add",
      requestRaisedBy: "Admin",
    },
    {
      id: 2,
      requestName: "Add Jane Smith",
      requestId: "JS002",
      requestDetails: "Add user in appilication",
      requestType: "Update",
      requestRaisedBy: "Admin",
    },
    {
      id: 3,
      requestName: "Add Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Add user in appilication",
      requestType: "Delete",
    },
  ];

  //const user = users.find((u) => u.id.toString() === userId.toString());
  //const req = data.find((u) => u.id.toString() === userId.toString());

  if (!user) {
    return <p>User not found.</p>;
  }
  //----------------------Get User--------------------------------------------
  function fetchUserById(id) {
    UserService.getUserById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userId: id,
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          const user = res.data.responseObject;
          // console.log("UserList->", UserList);
          setUser(user);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
    console.log("user->", user);
    return user;
  }
  //-------------------User Add Delete Request Details--------------------------------------------------------
  function FetchAddDeleteDetails() {
    CheckerUserService.getUserAddDeleteDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
        requestId: userId, //"1697eece-b424-4fb4-95e6-03f946871c38000",
        requestType: path.includes("userAddRequestDetails") ? "Add" : "Delete",
      },
      (res) => {
        if (res.status === 200) {
          setReq(res.data);
          setUser(res.data.requestData);
          if (path.includes("userDeleteRequestDetails")) {
            fetchUserById(res.data.requestData.id);
          }
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
  //-------------------User Update Request Details------------------------------------------------------------
  function FetchUpdateDetails() {
    CheckerUserService.getUserUpdateDetails(
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
          setCurrentValue(res.data.existingValue);
          setOldValue(res.data.oldValue);
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
    CheckerUserService.checkerUserApproval(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },

        requestId: userId,
        requestType: path.includes("userAddRequestDetails")
          ? "Add"
          : path.includes("userUpdateRequestDetails")
          ? "Update"
          : "Delete",
        action: action, //"Approved",
        checkerRemark: action == "Declined" ? remark : "Approved", //"Test",
        checkerId: "35604", //"601",
        userName: path.includes("userUpdateRequestDetails")
          ? currentValue.userId
          : user.userId,
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/UserRequests");
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

            {/* <div className="col-md-6 UDCoulmns">
              <strong>Request Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestDetails}</div> */}

            <div className="col-md-6 UDCoulmns">
              <strong>Raised by:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestRaisedBy}</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            {/* <div className="col-md-6 UDCoulmns">
              <strong>Request Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestName}</div> */}
            <div className="col-md-6 UDCoulmns">
              <strong>Request Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {DateFormatFunction(req.requestRaisedTime)}
            </div>
            <div className="col-md-6 UDCoulmns">
              <strong>Request Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestType}</div>
          </div>
        </div>
        {/* -----------User Details--------------------- */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {path.includes("userAddRequestDetails")
                ? "Add "
                : path.includes("userUpdateRequestDetails")
                ? "Update "
                : "Delete "}
              User Details
            </h2>
          </div>
        </div>

        {!path.includes("userUpdateRequestDetails") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>User Full Name:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.fullName}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Mobile Number:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.mobileNumber}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>EMail:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.email}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created Date:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                {ConvertFormat(user.createdDate)}
              </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="col-md-5">
              <div className="col-md-6 UDCoulmns">
                <strong>User ID:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.userId}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Employee Number:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.employeeNumber}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Role:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.userRole}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created By:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
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
                <strong>User Full Name:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.fullName}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.fullName}</div>

              <div className="col-md-4 UDCoulmns">
                <strong>Mobile No:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.mobileNumber}
              </div>
              <div className="col-md-4 UDCoulmns">{oldValue.mobileNumber}</div>

              <div className="col-md-4 UDCoulmns">
                <strong>EMail:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.email}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.email}</div>

              <div className="col-md-4 UDCoulmns">
                <strong>User Id:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.userId}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.userId}</div>

              <div className="col-md-4 UDCoulmns">
                <strong>Employee Number:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.employeeNumber}
              </div>
              <div className="col-md-4 UDCoulmns">
                {oldValue.employeeNumber}
              </div>

              <div className="col-md-4 UDCoulmns">
                <strong>Role:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.userRole}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.userRole}</div>
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/UserRequests");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser checkerAction"
              type="button"
              onClick={() => {
                setIsLoading(true);
                // toast.success("Request Approved successfully!", {
                //   position: "top-right",
                //   autoClose: 3000,
                // });
                // setTimeout(() => {
                //   navigate("/NHAI/UserRequests");
                // }, 1000);
                //setIsOpen(true);
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
                    // toast.success("Request Declined!", {
                    //   position: "top-right",
                    //   autoClose: 3000,
                    // });
                    // setTimeout(() => {
                    //   setIsLoading(false);
                    //   navigate("/NHAI/UserRequests");
                    // }, 1000);
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

export default UserCheckerDetails;
