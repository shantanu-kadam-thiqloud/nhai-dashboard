import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";

const MappingMasterCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("userAddRequestDetails");
  const data = [
    {
      id: 1,
      requestName: "Add Mapping 1",
      requestId: "JD001",
      requestDetails: "Add Mapping master in appilication",
      requestType: "Add",
    },
    {
      id: 2,
      requestName: "Add Mapping 2",
      requestId: "JS002",
      requestDetails: "Add Mapping master in appilication",
      requestType: "Add",
    },
    {
      id: 3,
      requestName: "Add Mapping 3",
      requestId: "BJ003",
      requestDetails: "Add Mapping master in appilication",
      requestType: "Add",
    },
    {
      id: 4,
      requestName: "Add Mapping 4",
      requestId: "AB004",
      requestDetails: "Add Mapping master in appilication",
      requestType: "Add",
    },
    {
      id: 5,
      requestName: "Add Mapping 5",
      requestId: "EA005",
      requestDetails: "Add Mapping master in appilication",
      requestType: "Add",
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
              navigate(`/NHAI/MappingMasterDetails/${row.values.id}`);
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
              <h2 className="mb-3 mt-3 pageTitle">Mapping Master Requests</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <div className="mb-3"></div>
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

export default MappingMasterCheckerList;
