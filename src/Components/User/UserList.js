import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Spinner from "../HtmlComponents/Spinner";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const UserList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const data = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "Admin",
      role: "Admin",
      isActive: true,
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userId: "JS002",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userId: "BJ003",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 4,
      fullName: "Alice Brown",
      userId: "AB004",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 5,
      fullName: "Eve Anderson",
      userId: "EA005",
      userType: "User",
      role: "Guest",
      isActive: false,
    },
  ];

  const columns = [
    { field: "id", sortable:true, filter:true,showFilterMenu:false, header: "ID" },
    { field: "fullName", sortable:true, filter:true,showFilterMenu:false, header: "Name" },
    { field: "role", ortable:true, filter:true,showFilterMenu:false, header: "Role" },
    { field: "isActive", sortable:true, filter:true,showFilterMenu:false, header: "Is Active", className: "text-center p-0", body:"switchTemplate" },
    { field: "", header: "Action", className: "text-center", body: "buttonsTemplate"},
  ];

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">User Listing</h2>
              <div className="addUserBtnDiv mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => navigate("../NHAI/AddUser")}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New User
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2 tableDiv">
              <GenericDataTable data={data} columns={columns}
              detailpage="UserDetails"
              editpage="EditUser"
              deletepage="DeleteUser"       
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
