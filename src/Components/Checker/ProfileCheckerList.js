import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";

const ProfileCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("profileAddRequestDetails");
  const data = [
    {
      id: 1,
      requestName: "Add profile1",
      requestId: "JD001",
      requestDetails: "Add profile in appilication",
      requestType: "Add",
    },
    {
      id: 2,
      requestName: "Add profile2",
      requestId: "JS002",
      requestDetails: "Add profile in appilication",
      requestType: "Add",
    },
    {
      id: 3,
      requestName: "Add profile3",
      requestId: "BJ003",
      requestDetails: "Add profile in appilication",
      requestType: "Add",
    },
    {
      id: 4,
      requestName: "Add profile4",
      requestId: "AB004",
      requestDetails: "Add profile in appilication",
      requestType: "Add",
    },
    {
      id: 5,
      requestName: "Add profile5",
      requestId: "EA005",
      requestDetails: "Add profile in appilication",
      requestType: "Add",
    },
  ];
  const updatedData = [
    {
      id: 1,
      requestName: "Update profile1",
      requestId: "JD001",
      requestDetails: "Update profile in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Update profile2",
      requestId: "JS002",
      requestDetails: "Update profile in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Update profile3",
      requestId: "BJ003",
      requestDetails: "Update profile in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Update profile4",
      requestId: "AB004",
      requestDetails: "Update profile in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Update profile5",
      requestId: "EA005",
      requestDetails: "Update profile in appilication",
      requestType: "Delete",
    },
  ];
  const DeletedData = [
    {
      id: 1,
      requestName: "Delete profile1",
      requestId: "JD001",
      requestDetails: "Delete profile in appilication",
      requestType: "Delete",
    },
    {
      id: 2,
      requestName: "Delete profile2",
      requestId: "JS002",
      requestDetails: "Delete profile in appilication",
      requestType: "Delete",
    },
    {
      id: 3,
      requestName: "Delete profile3",
      requestId: "BJ003",
      requestDetails: "Delete profile in appilication",
      requestType: "Delete",
    },
    {
      id: 4,
      requestName: "Delete profile4",
      requestId: "AB004",
      requestDetails: "Delete profile in appilication",
      requestType: "Delete",
    },
    {
      id: 5,
      requestName: "Delete profile5",
      requestId: "EA005",
      requestDetails: "Delete profile in appilication",
      requestType: "Delete",
    },
  ];
  const [rows, setRows] = useState(data);
  const columns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Name</div>,
      accessor: "requestName",
    },
    {
      Header: <div className="float-center">Request Details</div>,
      accessor: "requestDetails",
    },
    // { Header: <div className="float-center">Role</div>, accessor: "role" },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <div className="text-center">
          <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {
              navigate(`/NHAI/${action}/${row.id}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Profile Requests</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <div className="mb-3">
                {" "}
                <label htmlFor="userName" className="form-label checkerAction">
                  Type :
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Add"
                  defaultChecked={true}
                  onClick={() => {
                    setRows(data);
                    setAction("profileAddRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Add
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Update"
                  onClick={() => {
                    setRows(updatedData);
                    setAction("profileUpdateRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Update
                </label>{" "}
                <input
                  type="radio"
                  name="request"
                  value="Delete"
                  onClick={() => {
                    setRows(DeletedData);
                    setAction("profileDeleteRequestDetails");
                  }}
                />
                <label htmlFor="userName" className="form-label checkerAction">
                  Delete
                </label>{" "}
              </div>
              <DataTable
                columns={columns}
                data={rows}
                // customClass="ULTable"
                // detailpage="UserDetails"
                // editpage="EditUser"
                //deletepage="DeleteUser"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCheckerList;
