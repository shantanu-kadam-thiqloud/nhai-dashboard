import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const MenuManagementCheckerList = () => {
  const navigate = useNavigate();
  const [menuRequest, setMenuRequest] = useState("Add");
  const [submenuRequest, setSubMenuRequest] = useState("Add");
  const [actionRequest, setActionRequest] = useState("Add");

  const data = [
    {
      id: 1,
      requestName: "Add Menu 1",
      requestId: "JD001",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 2,
      requestName: "Add Menu 2",
      requestId: "JS002",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 3,
      requestName: "Add  Menu 3",
      requestId: "BJ003",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 4,
      requestName: "Add  Menu 4",
      requestId: "AB004",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 5,
      requestName: "Add Menu 5",
      requestId: "EA005",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
  ];
  const updatedData = [
    {
      id: 1,
      requestName: "Update Menu 1",
      requestId: "JD001",
      requestDetails: "Update Menu in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Update Menu 2",
      requestId: "JS002",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 3,
      requestName: "Update Menu 3",
      requestId: "BJ003",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 4,
      requestName: "Update Menu 4",
      requestId: "AB004",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 5,
      requestName: "Update Menu 5",
      requestId: "EA005",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
  ];
  const DeletedData = [
    {
      id: 1,
      requestName: "Delete Menu 1",
      requestId: "JD001",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 2,
      requestName: "Delete Menu 2",
      requestId: "JS002",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 3,
      requestName: "Delete Menu 3",
      requestId: "BJ003",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 4,
      requestName: "Delete Menu 4",
      requestId: "AB004",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 5,
      requestName: "Delete Menu 5",
      requestId: "EA005",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
  ];
  const [rows, setRows] = useState(data);
  const menuColumns = [
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
              navigate(`/NHAI/MenuRequestDetails/${menuRequest}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];
  const submenuColumns = [
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
              navigate(`/NHAI/SubmenuRequestDetails/${submenuRequest}`);
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];
  const actionColumns = [
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
              navigate(`/NHAI/ActionRequestDetails/${actionRequest}`);
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
              <h2 className="mb-3 mt-3 pageTitle">Menu Management Requests</h2>
            </div>
          </div>
          {/* --------------------------------------Accordian-------------------------------------------- */}
          <div className="row mb-3">
            <div className="col-md-11 mx-auto flex">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h6 className="pageTitle mb-0">Menu</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          setRows(data);
                          setMenuRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Menu
                      </label>{" "}
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Update"
                        onClick={() => {
                          setRows(updatedData);
                          setMenuRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Menu
                      </label>{" "}
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Delete"
                        onClick={() => {
                          setRows(DeletedData);
                          setMenuRequest("Delete");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Menu
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={menuColumns}
                      data={rows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h6 className="pageTitle mb-0">Submenu</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          setRows(data);
                          setSubMenuRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Submenu
                      </label>{" "}
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Update"
                        onClick={() => {
                          setRows(updatedData);
                          setSubMenuRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Submenu
                      </label>{" "}
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Delete"
                        onClick={() => {
                          setRows(DeletedData);
                          setSubMenuRequest("Delete Submenu");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Submenu
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={submenuColumns}
                      data={rows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h6 className="pageTitle mb-0">Action</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          setRows(data);
                          setActionRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Action
                      </label>{" "}
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Update"
                        onClick={() => {
                          setRows(updatedData);
                          setActionRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Action
                      </label>{" "}
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Delete"
                        onClick={() => {
                          setRows(DeletedData);
                          setActionRequest("Delete");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Action
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={actionColumns}
                      data={rows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagementCheckerList;
