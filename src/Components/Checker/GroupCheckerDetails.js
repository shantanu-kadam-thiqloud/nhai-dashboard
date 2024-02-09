import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerGroupService } from "../../Service/CheckerService/CheckerGroupService";
import {
  ConvertFormat,
  DateFormatFunction,
} from "../HtmlComponents/CommonFunction";
import { v4 as uuid } from "uuid";
const GroupCheckerDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [group, setGroup] = useState({});
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
    if (path.includes("groupUpdateRequestDetails")) {
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
  // const groups = [
  //   {
  //     id: 1,
  //     groupName: "Admin Group",
  //     groupDescription: "Admin Group Description",
  //     isActive: true,
  //   },
  //   {
  //     id: 2,
  //     groupName: "Finance Group",
  //     groupDescription: "Finance Group Description",
  //     isActive: true,
  //   },
  //   {
  //     id: 3,
  //     groupName: "HR Group",
  //     groupDescription: "HR Group Description",
  //     isActive: true,
  //   },
  //   {
  //     id: 4,
  //     groupName: "IT Group",
  //     groupDescription: "IT Group Description",
  //     isActive: false,
  //   },
  // ];
  // const data = [
  //   {
  //     id: 1,
  //     requestName: "Add group1",
  //     requestId: "JD001",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Add group2",
  //     requestId: "JS002",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Add group3",
  //     requestId: "BJ003",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Add group4",
  //     requestId: "AB004",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Add group5",
  //     requestId: "EA005",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  // ];
  // const user = groups.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  // const req = data.find((u) => u.id.toString() === userId);
  if (!group) {
    return <p>Group not found.</p>;
  }

  //-------------------Group Add Delete Request Details--------------------------------------------------------
  function FetchAddDeleteDetails() {
    CheckerGroupService.getGroupAddDeleteDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
        requestId: userId, //"1697eece-b424-4fb4-95e6-03f946871c38000",
        requestType: path.includes("groupAddRequestDetails") ? "Add" : "Delete",
      },
      (res) => {
        if (res.status === 200) {
          setReq(res.data);
          setGroup(res.data.responseData);
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
  //-------------------Group Update Request Details------------------------------------------------------------
  function FetchUpdateDetails() {
    CheckerGroupService.getGroupUpdateDetails(
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
          setOldValue(res.data.requestData.oldVlaue);
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
    CheckerGroupService.checkerGroupApproval(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        requestId: userId,
        requestType: path.includes("groupAddRequestDetails")
          ? "Add"
          : path.includes("groupUpdateRequestDetails")
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
          navigate("/NHAI/groupRequests");
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
              {path.includes("groupAddRequestDetails")
                ? "Add "
                : path.includes("groupUpdateRequestDetails")
                ? "Update "
                : "Delete "}
              Group Details
            </h2>
          </div>
        </div>

        {!path.includes("groupUpdateRequestDetails") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>Group Name:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{group.groupName}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Group Description:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{group.groupDescription}</div>
              <div className="col-md-6 UDCoulmns">
                <strong>Created Date:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                {ConvertFormat(group.createdDate)}
              </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="col-md-5">
              {/* <div className="col-md-6 UDCoulmns">
                <strong>Group:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{user.group}</div> */}
              <div className="col-md-6 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">
                <input
                  readOnly
                  className="form-check-input"
                  type="checkbox"
                  id="submenu"
                  checked={group.isActive}
                />
              </div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created By:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{group.createdBy}</div>
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
                <strong>Group Name:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">{currentValue.groupName}</div>
              <div className="col-md-4 UDCoulmns">{oldValue.groupName}</div>
              <div className="col-md-4 UDCoulmns">
                <strong>Group Description:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {currentValue.groupDescription}
              </div>
              <div className="col-md-4 UDCoulmns">
                {oldValue.groupDescription}
              </div>
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
              <div className="col-md-4 UDCoulmns">
                <strong>Active:</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {" "}
                <input
                  readOnly
                  className="form-check-input"
                  type="checkbox"
                  id="submenu"
                  checked={currentValue.isActive}
                />
              </div>
              <div className="col-md-4 UDCoulmns">
                {" "}
                <input
                  readOnly
                  className="form-check-input"
                  type="checkbox"
                  id="submenu"
                  checked={oldValue.isActive}
                />
              </div>
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/groupRequests");
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

export default GroupCheckerDetails;
