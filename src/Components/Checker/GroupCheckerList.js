import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../HtmlComponents/DataTable";

const GroupCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("groupAddRequestDetails");
  const data = [
    {
      id: 1,
      requestName: "Add group1",
      requestId: "JD001",
      requestDetails: "Add group in appilication",
      requestType: "Add",
    },
    {
      id: 2,
      requestName: "Add group2",
      requestId: "JS002",
      requestDetails: "Add group in appilication",
      requestType: "Add",
    },
    {
      id: 3,
      requestName: "Add group3",
      requestId: "BJ003",
      requestDetails: "Add group in appilication",
      requestType: "Add",
    },
    {
      id: 4,
      requestName: "Add group4",
      requestId: "AB004",
      requestDetails: "Add group in appilication",
      requestType: "Add",
    },
    {
      id: 5,
      requestName: "Add group5",
      requestId: "EA005",
      requestDetails: "Add group in appilication",
      requestType: "Add",
    },
  ];
  const updatedData = [
    {
      id: 1,
      requestName: "Update group1",
      requestId: "JD001",
      requestDetails: "Update group in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Update group2",
      requestId: "JS002",
      requestDetails: "Update group in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Update group3",
      requestId: "BJ003",
      requestDetails: "Update group in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Update group4",
      requestId: "AB004",
      requestDetails: "Update group in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Update group5",
      requestId: "EA005",
      requestDetails: "Update group in appilication",
      requestType: "Update",
    },
  ];
  const DeletedData = [
    {
      id: 1,
      requestName: "Delete group1",
      requestId: "JD001",
      requestDetails: "Delete group in appilication",
      requestType: "Delete",
    },
    {
      id: 2,
      requestName: "Delete group2",
      requestId: "JS002",
      requestDetails: "Delete group in appilication",
      requestType: "Delete",
    },
    {
      id: 3,
      requestName: "Delete group3",
      requestId: "BJ003",
      requestDetails: "Delete group in appilication",
      requestType: "Delete",
    },
    {
      id: 4,
      requestName: "Delete group4",
      requestId: "AB004",
      requestDetails: "Delete group in appilication",
      requestType: "Delete",
    },
    {
      id: 5,
      requestName: "Delete group5",
      requestId: "EA005",
      requestDetails: "Delete group in appilication",
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
              <h2 className="mb-3 mt-3 pageTitle">Group Requests</h2>
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
                    setAction("groupAddRequestDetails");
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
                    setAction("groupUpdateRequestDetails");
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
                    setAction("groupDeleteRequestDetails");
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

export default GroupCheckerList;
