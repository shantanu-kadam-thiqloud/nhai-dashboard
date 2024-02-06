import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../HtmlComponents/Spinner";
import { CheckerUserService } from "../../Service/CheckerService/CheckerUserService";
import { DateFormatFunction } from "../HtmlComponents/DateFunction";

const UserCheckerList = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("userAddRequestDetails");
  const [isLoading, setIsLoading] = useState(false);
  const [userRequests, setUserRequests] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchUserRequsts();
  }, []);

  // const data = [
  //   {
  //     id: 1,
  //     requestName: "Add Ajay Dilip Sharma",
  //     requestId: "RQ1001",
  //     requestDetails: "Add user in appilication",
  //     requestType: "Add",
  //     requestRaisedBy: "Admin",
  //   },
  // ];
  // const updatedData = [
  //   {
  //     id: 2,
  //     requestName: "Update Mandar Sutar",
  //     requestId: "RQ1002",
  //     requestDetails: "Update user in appilication",
  //     requestType: "Update",
  //     requestRaisedBy: "Admin",
  //   },
  // ];
  // const DeletedData = [
  //   {
  //     id: 3,
  //     requestName: "Delete Sumit Kadam",
  //     requestId: "RQ1003",
  //     requestDetails: "Delete user in appilication",
  //     requestType: "Delete",
  //     requestRaisedBy: "Admin",
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
  function fetchUserRequsts() {
    var reqList = [];
    CheckerUserService.getUserRequests(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          reqList = res.data.requests;
          setUserRequests(reqList);
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
                    const addList = (userRequests || []).filter((x) => {
                      if (x.requestType === "Add") return x;
                    });
                    setRows(addList);
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
                    const updateList = (userRequests || []).filter((x) => {
                      if (x.requestType === "Update") return x;
                    });
                    setRows(updateList);
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
                    const deleteList = (userRequests || []).filter((x) => {
                      if (x.requestType === "Delete") return x;
                    });
                    setRows(deleteList);
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
