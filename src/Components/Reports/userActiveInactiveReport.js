import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";

const UserActiveInactiveReport = () => {
  const [fromDate, setFromDate] = useState(
    "2023-04-01" //  new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  const columns = [
    {
      Header: "User ID",
      accessor: "userId",
    },
    {
      Header: "User Type",
      accessor: "userType",
    },
    {
      Header: "Bank ID",
      accessor: "bankId",
    },
    {
      Header: "PDID",
      accessor: "pdid",
    },

    {
      Header: "ROID",
      accessor: "roid",
    },
    {
      Header: "Domain User Name",
      accessor: "domainUserName",
    },
    {
      Header: "User Full Name",
      accessor: "fullName",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Role",
      accessor: "role",
    },
    {
      Header: `Logged in \n Date & Time`,
      accessor: "loggedTime",
    },
  ];
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
      status: "Active",
      role: "AdminRole",
      loggedTime: "27-10-2023 \n 09:53:30",
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
                  value={fromDate || ""}
                  onChange={(e) => {
                    setFromDate(e.target.value);
                    console.log("->", ConvertFormat(e.target.value));
                  }}
                />{" "}
                <label className="statusOn ms-5">To :</label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="date"
                  value={toDate || ""}
                  onChange={(e) => {
                    setToDate(e.target.value);
                    console.log("->", ConvertFormat(e.target.value));
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
          <div className="mt-2"></div>
          <DataTable
            columns={columns}
            data={rows} //{data} //
            customClass="LoginReportTable"
            showSearchBar={false}
          />{" "}
          <div className="mt-2"></div>
        </div>
      </div>
    </>
  );
};

export default UserActiveInactiveReport;