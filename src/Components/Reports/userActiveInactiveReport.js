import React, { useState } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const UserActiveInactiveReport = () => {
  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateFromValue, setDateFromValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dateToValue, setDateToValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  function formatDate(inputDate) {
    // Parse the input date string into a Date object
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);

    // Extract day, month, and year components
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();

    // Format the date in "dd-mm-yyyy" format
    return `${dd}-${mm}-${yyyy}`;
  }
  // const columns = [
  //   {
  //     Header: "User ID",
  //     accessor: "userId",
  //   },
  //   {
  //     Header: "User Type",
  //     accessor: "userType",
  //   },
  //   {
  //     Header: "Bank ID",
  //     accessor: "bankId",
  //   },
  //   {
  //     Header: "PDID",
  //     accessor: "pdid",
  //   },

  //   {
  //     Header: "ROID",
  //     accessor: "roid",
  //   },
  //   {
  //     Header: "Domain User Name",
  //     accessor: "domainUserName",
  //   },
  //   {
  //     Header: "User Full Name",
  //     accessor: "fullName",
  //   },
  //   {
  //     Header: "Status",
  //     accessor: "status",
  //   },
  //   {
  //     Header: "Role",
  //     accessor: "role",
  //   },
  //   {
  //     Header: `Logged in \n Date & Time`,
  //     accessor: "loggedTime",
  //   },
  // ];
  
  const columns =  [
    { field: "userId", sortable: true, filter: true, showFilterMenu: false, header: "User ID" },
    { field: "userType", sortable: true, filter: true, showFilterMenu: false, header: "User Type" },
    { field: "bankId", sortable: true, filter: true, showFilterMenu: false, header: "Bank ID" },
    { field: "pdid", sortable: true, filter: true, showFilterMenu: false, header: "PDID" },
    { field: "roid", sortable: true, filter: true, showFilterMenu: false, header: "ROID" },
    { field: "domainUserName", sortable: true, filter: true, showFilterMenu: false, header: "Domain User Name" },
    { field: "fullName", sortable: true, filter: true, showFilterMenu: false, header: "User Full Name" },
    { field: "status", sortable: true, filter: true, showFilterMenu: false, header: "Status" },
    { field: "role", sortable: true, filter: true, showFilterMenu: false, header: "Role" },
    { field: "loggedTime", sortable: true, filter: true, showFilterMenu: false, header: "Logged in Date & Time" }
  ]
  
  const data = [
    {
      id: 1,
      userId: "NHAI",
      userType: "NHAI",
      bankId: "",
      pdid: "",
      roid: "",
      domainUserName: "NHAI",
      fullName: "NHAI User",
      status: "Active",
      role: "AdminRole",
      loggedTime: "27-10-2023 \n 09:53:30",
      ipAddress: "10.53.80.21",
    },
    {
      id: 2,
      userId: "NHAI",
      userType: "NHAI",
      bankId: "",
      pdid: "",
      roid: "",
      domainUserName: "NHAI",
      fullName: "NHAI User",
      status: "Inactive",
      role: "AdminRole",
      loggedTime: "27-10-2023 \n 09:53:30",
      ipAddress: "10.53.80.21",
    },
    {
      id: 3,
      userId: "NHAI",
      userType: "NHAI",
      bankId: "",
      pdid: "",
      roid: "",
      domainUserName: "NHAI",
      fullName: "NHAI User",
      status: "Inactive",
      role: "AdminRole",
      loggedTime: "27-10-2023 \n 09:53:30",
      ipAddress: "10.53.80.21",
    },
  ];
  const [rows, setRows] = useState(data);
  return (
    <>
      <div className="wrapper">
        <div className="row p-2">
          <div className="border border-dark rounded-1 bg-white p-2">
            {" "}
            <div className="col">
              {/* <div className="p-2"> */}
              <div className="float-start p-2">
                <label className="statusOn  ms-3">From :</label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="date"
                  value={dateFromValue || ""}
                  onChange={(e) => {
                    const E = formatDate(e.target.value);
                    setDateFromValue(e.target.value);
                    console.log("----->", E);
                    setFormDate(E);
                  }}
                />{" "}
                <label className="statusOn ms-5">To :</label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="date"
                  value={dateToValue || ""}
                  onChange={(e) => {
                    setDateToValue(e.target.value);
                    const E = formatDate(e.target.value);
                    console.log("----->", E);
                    setToDate(E);
                  }}
                />{" "}
                <label className="statusOn  ms-5">Status :</label>{" "}
                <select
                  name="userType"
                  className="inputDate"
                  onChange={(e) => {}}
                >
                  <option value="All">All</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {"  "}
              </div>
              <div className="float-end p-2">
                <button
                  className="btn addUser dashbutton  ms-5"
                  type="button"
                  onClick={() => {}}
                >
                  Download
                </button>{" "}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="mt-2 tableDiv">
          {/* <DataTable
            columns={columns}
            data={rows} //{data} //
            customClass="LoginReportTable"
            showSearchBar={false}
          />{" "} */}

          <GenericDataTable 
          data={rows} 
          columns={columns}                    
              />
              </div>
          <div className="mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default UserActiveInactiveReport;
