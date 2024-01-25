import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const MappingMasterCheckerDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const users = [
    {
      id: 1,
      branch: "branch1",
      location: "location1",
      piu: "piu",
      ro: "ro",
      zone: "south",
      pd: "pd",
      email: "@xyz.com",
      mobile: "1234567890",
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 2,
      branch: "branch2",
      location: "location2",
      piu: "piu",
      ro: "ro",
      zone: "south",
      pd: "pd",
      email: "@xyz.com",
      mobile: "1234567890",
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 3,
      branch: "branch3",
      location: "location3",
      piu: "piu",
      ro: "ro",
      zone: "south",
      pd: "pd",
      email: "@xyz.com",
      mobile: "1234567890",
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 4,
      branch: "branch4",
      location: "location4",
      piu: "piu",
      ro: "ro",
      zone: "south",
      pd: "pd",
      email: "@xyz.com",
      mobile: "1234567890",
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 5,
      branch: "branch5",
      location: "location5",
      piu: "piu",
      ro: "ro",
      zone: "south",
      pd: "pd",
      email: "@xyz.com",
      mobile: "1234567890",
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
  ];

  const data = [
    {
      id: 1,
      requestName: "Add John Doe",
      requestId: "JD001",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Add Jane Smith",
      requestId: "JS002",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Add Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Add Alice Brown",
      requestId: "AB004",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Eve Anderson",
      requestId: "EA005",
      requestDetails: "Add user in appilication",
      requestType: "Add",
    },
  ];
  const user = users.find((u) => u.id.toString() === userId);
  const path = window.location.pathname;
  const req = data.find((u) => u.id.toString() === userId);
  if (!user) {
    return <p>User not found.</p>;
  }
  return (
    <div className="container UDContainer">
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
            <div className="col-md-6 UDCoulmns">{req.id}</div>

            {/* <div className="col-md-6 UDCoulmns">
              <strong>Request Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestDetails}</div> */}

            <div className="col-md-6 UDCoulmns">
              <strong>Raised by:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">Admin</div>
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
            <div className="col-md-6 UDCoulmns">{}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Request Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestType}</div>
          </div>
        </div>
        {/* -----------User Details--------------------- */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">Mapping Master Details</h2>
          </div>
        </div>

        <div className="row UserDetails mt-3">
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Branch:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.branch}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Location:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.location}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>PIU:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.piu}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdDate}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.createdBy}</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            <div className="col-md-6 UDCoulmns">
              <strong>RO:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.ro}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Zone:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.zone}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>PD:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.pd}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Email:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.email}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Mobile:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{user.mobile}</div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/MappingMasterRequests");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser checkerAction"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                navigate();
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
              />
              <div className="p-2"></div>
              <div className="text-center">
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {}}
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

export default MappingMasterCheckerDetails;
