import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import DataTable from "../HtmlComponents/DataTable";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerGroupService } from "../../Service/CheckerService/CheckerGroupService";
import { DateFormatFunction } from "../HtmlComponents/DateFunction";
const GroupCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("groupAddRequestDetails");
  const [isLoading, setIsLoading] = useState(false);
  const [groupRequests, setGroupRequests] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchGroupRequests();
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     requestName: "Add group1",
  //     requestId: "JD001",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Add group2",
  //     requestId: "JS002",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Add group3",
  //     requestId: "BJ003",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Add group4",
  //     requestId: "AB004",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Add group5",
  //     requestId: "EA005",
  //     requestDetails: "Add group in appilication",
  //     requestType: "Add",
  //   },
  // ];
  // const updatedData = [
  //   {
  //     id: 1,
  //     requestName: "Update group1",
  //     requestId: "JD001",
  //     requestDetails: "Update group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Update group2",
  //     requestId: "JS002",
  //     requestDetails: "Update group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Update group3",
  //     requestId: "BJ003",
  //     requestDetails: "Update group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Update group4",
  //     requestId: "AB004",
  //     requestDetails: "Update group in appilication",
  //     requestType: "Update",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Update group5",
  //     requestId: "EA005",
  //     requestDetails: "Update group in appilication",
  //     requestType: "Update",
  //   },
  // ];
  // const DeletedData = [
  //   {
  //     id: 1,
  //     requestName: "Delete group1",
  //     requestId: "JD001",
  //     requestDetails: "Delete group in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 2,
  //     requestName: "Delete group2",
  //     requestId: "JS002",
  //     requestDetails: "Delete group in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 3,
  //     requestName: "Delete group3",
  //     requestId: "BJ003",
  //     requestDetails: "Delete group in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 4,
  //     requestName: "Delete group4",
  //     requestId: "AB004",
  //     requestDetails: "Delete group in appilication",
  //     requestType: "Delete",
  //   },
  //   {
  //     id: 5,
  //     requestName: "Delete group5",
  //     requestId: "EA005",
  //     requestDetails: "Delete group in appilication",
  //     requestType: "Delete",
  //   },
  // ];

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
      Header: <div className="float-center">Request Date</div>,
      accessor: "requestRaisedTime",
      Cell: ({ row }) => (
        <div>{DateFormatFunction(row.values.requestRaisedTime)}</div>
      ),
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
              navigate(`/NHAI/${action}/${row.values.requestId}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];

  //-------------------User Request List--------------------------------------------------------
  function fetchGroupRequests() {
    CheckerGroupService.getGroupRequests(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          var reqList = res.data.requests;
          setGroupRequests(reqList);
          const addList = (reqList || []).filter((x) => {
            if (x.requestType === "Add") return x;
          });
          setRows(addList);
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
  //--------------------------------------------------------------------------------------------
  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
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
                    const addList = (groupRequests || []).filter((x) => {
                      if (x.requestType === "Add") return x;
                    });
                    setRows(addList);
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
                    const updateList = (groupRequests || []).filter((x) => {
                      if (x.requestType === "Update") return x;
                    });
                    setRows(updateList);
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
                    const deleteList = (groupRequests || []).filter((x) => {
                      if (x.requestType === "Delete") return x;
                    });
                    setRows(deleteList);
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
