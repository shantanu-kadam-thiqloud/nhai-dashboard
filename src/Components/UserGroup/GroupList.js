import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddGroup from "./AddGroup";
import { useNavigate } from "react-router-dom";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const GroupList = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    {
      "field": "id",
      "sortable": true,
      "filter": true,
      "filterPlaceholder": "Search",
      "showGridlines": true,
      "showFilterMenu": false,
      "header": "ID"
    },
    {
      "field": "GroupName",
      "sortable": true,
      "filter": true,
      "filterPlaceholder": "Search",
      "showFilterMenu": false,
      "header": "Group Description"
    },
    {
      "field": "groupDescription",
      "sortable": true,
      "filter": true,
      "filterPlaceholder": "Search",
      "showFilterMenu": false,
      "header": "Profile Description"
    },
    {
      "field": "isActive",
      "sortable": true,
      "filter": true,
      "filterPlaceholder": "Search",
      "showFilterMenu": false,
      "header": "Is Active",
      "className": "text-center p-0",
      "body": "switchTemplate"
    },
    {
      "field": "",
      "header": "Action",
      "body": "buttonsTemplate",
      "className": "text-center"
    }
  ]
  
  const data = [
    {
      id: 1,
      groupName: "Admin Group",
      groupDescription: "Admin Group Description",
      isActive: true,
    },
    {
      id: 2,
      groupName: "Finance Group",
      groupDescription: "Finance Group Description",
      isActive: true,
    },
    {
      id: 3,
      groupName: "HR Group",
      groupDescription: "HR Group Description",
      isActive: true,
    },
    {
      id: 4,
      groupName: "IT Group",
      groupDescription: "IT Group Description",
      isActive: false,
    },
  ];

  // const columns = [
  //   { Header: "Group Name", accessor: "groupName" },
  //   { Header: "Group Description", accessor: "groupDescription" },
  //   {
  //     Header: "Is Active",
  //     accessor: "isActive",
  //     Cell: ({ value }) => (
  //       <input
  //         className="form-check-input"
  //         type="checkbox"
  //         id="flexSwitchCheckChecked"
  //         checked={value}
  //       />
  //     ),
  //   },
  //   {
  //     Header: "Action",
  //     accessor: "id",
  //   },
  // ];
  

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Group Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setIsOpen(true);
                    navigate("/NHAI/AddGroup");
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New Group
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2 tableDiv">
              {/* col-md-11 mx-auto flex */}
              {/* <DataTable
                columns={columns}
                data={data}
                //  customClass="ULTable"
                detailpage="GroupDetails"
                editpage="EditGroup"
                deletepage="DeleteGroup"
              /> */}

          {/* <DataTable value={data} removableSort filterDisplay="row" showGridlines tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" sortable filter filterPlaceholder="Search" showGridlines showFilterMenu={false} header="ID"></Column>
            <Column field="Group Name" sortable filter filterPlaceholder="Search" showFilterMenu={false} header="Group Description"></Column>
            <Column field="groupDescription" sortable filter filterPlaceholder="Search" showFilterMenu={false} header="Profile Description" ></Column>
            <Column field="isActive" sortable filter filterPlaceholder="Search" showFilterMenu={false} header="Is Active" className="text-center p-0" body={switchTemplate}></Column>
            <Column field=""  header="Action" body={buttonsTemplate} className="text-center"></Column>
          </DataTable> */}
          <GenericDataTable data={data} columns={columns}
              detailpage="GroupDetails"
              editpage="EditGroup"
              deletepage="DeleteGroup"       
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
