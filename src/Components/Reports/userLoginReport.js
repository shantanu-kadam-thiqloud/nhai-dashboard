import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
  DownloadByteArray,
} from "../HtmlComponents/CommonFunction";
import { ReportService } from "../../Service/ReportService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../HtmlComponents/Spinner";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
const UserLoginReport = () => {
  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [userID, setUserID] = useState("");
  const [userType, setUserType] = useState("ALL");
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
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
  //     Header: "IsActive",
  //     accessor: "isActive",
  //   },
  //   {
  //     Header: "Role",
  //     accessor: "role",
  //   },
  //   {
  //     Header: `Logged in \n Date & Time`,
  //     accessor: "loggedTime",
  //   },
  //   {
  //     Header: `Login IP \n Address`,
  //     accessor: "ipAddress",
  //   },
  // ];

  const columns = [
    {
      field: "userId",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "User ID",
    },
    {
      field: "userType",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "User Type",
    },
    {
      field: "bankId",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Bank ID",
    },
    {
      field: "pdid",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "PDID",
    },
    {
      field: "roid",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "ROID",
    },
    {
      field: "domainUserName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Domain User Name",
    },
    {
      field: "fullName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "User Full Name",
    },
    {
      field: "isActive",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "In Active",
    },
    {
      field: "role",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Role",
    },
    {
      field: "loggedTime",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Logged in Date & Time",
    },
    {
      field: "ipAddress",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Login IP Address",
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     userId: "NHAI",
  //     userType: "NHAI",
  //     bankId: "",
  //     pdid: "",
  //     roid: "",
  //     domainUserName: "NHAI",
  //     fullName: "NHAI User",
  //     isActive: "Yes",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
  //     ipAddress: "10.53.80.21",
  //   },
  //   {
  //     id: 2,
  //     userId: "NHAI",
  //     userType: "NHAI",
  //     bankId: "",
  //     pdid: "",
  //     roid: "",
  //     domainUserName: "NHAI",
  //     fullName: "NHAI User",
  //     isActive: "No",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
  //     ipAddress: "10.53.80.21",
  //   },
  //   {
  //     id: 3,
  //     userId: "NHAI",
  //     userType: "NHAI",
  //     bankId: "",
  //     pdid: "",
  //     roid: "",
  //     domainUserName: "NHAI",
  //     fullName: "NHAI User",
  //     isActive: "Yes",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
  //     ipAddress: "10.53.80.21",
  //   },
  // ];

  useEffect(() => {
    setIsLoading(true);
    FetchUserLoginReport();
  }, [toDate, userID, userType]);
  //-------------Fetch Report--------------------------------------------------
  function FetchUserLoginReport() {
    ReportService.getUserLoginReport(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
        fromDate: "01-01-2017", //ConvertFormat(fromDate), //
        toDate: "31-12-2023", //ConvertFormat(toDate), //
        userType: userType, //"ALL",
        userId: userID, //"",
      },
      (res) => {
        if (res.status === 200) {
          var da = res.data.data.responseObjectList;
          setRows(da);
          console.log("->", da);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //-------------Download Report-----------------------------------------------
  function DownloadUserLoginReport() {
    ReportService.downloadUserLoginReport(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
        fromDate: "01-01-2017", //ConvertFormat(fromDate), //
        toDate: "31-12-2023", //ConvertFormat(toDate), //
        userType: userType, //"ALL",
        userId: userID, //"",
      },
      (res) => {
        if (res.status === 200) {
          var d = res.data.data;
          console.log("->", d);
          DownloadByteArray("User_Login_Report", d);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      },
      (error) => {
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }

  return (
    <>
      <div className="wrapper">
        {" "}
        <Spinner isLoading={isLoading} />
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
                {/* <label className="statusOn  ms-5">User Type :</label>{" "}
                <select
                  name="userType"
                  className="inputDate"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                >
                  <option value="">All</option>
                  <option value="Bank">Bank</option>
                  <option value="NHAI">NHAI</option>
                  <option value="PD">PD</option>
                  <option value="RO">RO</option>
                </select> */}
                {"  "}
                <label className="statusOn  ms-5">User Id : </label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="text"
                  onChange={(e) => {
                    const E = e.target.value;
                    setUserID(E);
                  }}
                />{" "}
              </div>
              <div className="float-end p-2">
                <button
                  className="btn addUser dashbutton  ms-5"
                  type="button"
                  onClick={() => {
                    setIsLoading(true);
                    DownloadUserLoginReport();
                  }}
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
            // customClass="LoginReportTable"
            showSearchBar={false}
          />{" "} */}
            <GenericDataTable data={rows} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLoginReport;
