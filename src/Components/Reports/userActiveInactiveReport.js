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
const UserActiveInactiveReport = () => {
  const [fromDate, setFromDate] = useState(
    "2023-04-01" //  new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("ALL");
  const [rows, setRows] = useState([]); //data
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
      field: "status",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Status",
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
  //     status: "Active",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
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
  //     status: "Inactive",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
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
  //     status: "Active",
  //     role: "AdminRole",
  //     loggedTime: "27-10-2023 \n 09:53:30",
  //   },
  // ];

  useEffect(() => {
    setIsLoading(true);
    FetchUserStatusReport();
  }, [status, toDate]);

  //-------------Fetch Report--------------------------------------------------
  function FetchUserStatusReport() {
    ReportService.getUserStatusReport(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
        fromDate: "01-01-2017", //ConvertFormat(fromDate), //
        toDate: "31-12-2023", //ConvertFormat(toDate), //
        status: status, //"Inactive",
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
  function DownloadUserStatusReport() {
    ReportService.downloadUserStatusReport(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
        fromDate: "01-01-2017", //ConvertFormat(fromDate), //
        toDate: "31-12-2023", //ConvertFormat(toDate), //
        status: status, //"Inactive",
      },
      (res) => {
        if (res.status === 200) {
          var d = res.data.data;
          console.log("->", d);
          setIsLoading(false);
          DownloadByteArray("User_Status_Report", d);
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
                <label className="statusOn  ms-5">Status :</label>{" "}
                <select
                  name="userStatus"
                  className="inputDate"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
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
                  onClick={() => {
                    setIsLoading(true);
                    DownloadUserStatusReport();
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
            customClass="LoginReportTable"
            showSearchBar={false}
          />{" "} */}
            <GenericDataTable
              data={rows}
              columns={columns}
              enablePagination={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserActiveInactiveReport;
