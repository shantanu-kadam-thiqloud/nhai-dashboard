import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
const UserCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("userAddRequestDetails");
  const data = [
    {
      id: 1,
      requestName: "Add Ajay Dilip Sharma",
      requestId: "RQ1001",
      requestDetails: "Add user in appilication",
      requestType: "Add",
      requestRaisedBy: "Admin",
    },
  ];
  const updatedData = [
    {
      id: 2,
      requestName: "Update Mandar Sutar",
      requestId: "RQ1002",
      requestDetails: "Update user in appilication",
      requestType: "Update",
      requestRaisedBy: "Admin",
    },
  ];
  const DeletedData = [
    {
      id: 3,
      requestName: "Delete Sumit Kadam",
      requestId: "RQ1003",
      requestDetails: "Delete user in appilication",
      requestType: "Delete",
      requestRaisedBy: "Admin",
    },
  ];
  const [rows, setRows] = useState(data);
  const columns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Type</div>,
      accessor: "requestType",
    },
    {
      Header: <div className="float-center">Request Raised By</div>,
      accessor: "requestRaisedBy",
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
              navigate(`/NHAI/${action}/${row.values.id}`);
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
              <h2 className="mb-3 mt-3 pageTitle">User Requests</h2>
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
                    setAction("userAddRequestDetails");
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
                    setAction("userUpdateRequestDetails");
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
                    setAction("userDeleteRequestDetails");
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

export default UserCheckerList;
