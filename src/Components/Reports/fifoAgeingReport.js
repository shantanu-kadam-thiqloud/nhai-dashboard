import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { ReportService } from "../../Service/ReportService";
import { useNavigate } from "react-router-dom";

const FifoAgeingReport = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      Header: "PIU Name",
      accessor: "piu",
    },
    {
      Header: "RO Name",
      accessor: "ro",
    },
    {
      Header: "Account No",
      accessor: "accNum",
    },
    {
      Header: "Account Name",
      accessor: "accName",
    },

    {
      Header: "Value",
      accessor: "value",
    },
    {
      Header: "Date of Request",
      accessor: "requestDate",
    },
    {
      Header: "Sanction Limit",
      accessor: "sanctionLimit",
    },
    {
      Header: "Utilized Limit",
      accessor: "utilizedlimit",
    },
    {
      Header: "Un Utilized Limit",
      accessor: "unUtilizedLimit",
    },
    {
      Header: `FIFO Amount`,
      accessor: "fifoAmount",
    },
    {
      Header: `Current Date`,
      accessor: "currentDate",
    },
    {
      Header: `No of Days`,
      accessor: "days",
    },
    {
      Header: `Ageing`,
      accessor: "ageing",
    },
  ];
  const data = [
    {
      id: 0,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
    {
      id: 1,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
    {
      id: 2,
      piu: "Agra",
      ro: "Lucknow(U.P West)",
      accNum: "2312026853",
      accName: "CALA ADM ETAWAH AND PD NHAI AGRA",
      value: "1105812151.00",
      requestDate: "7/4/2017",
      sanctionLimit: "5948106913.00",
      utilizedlimit: "4756267359.00",
      unUtilizedLimit: "1191839554.00",
      fifoAmount: "0.00",
      currentDate: "5/21/2020",
      days: "",
      ageing: "",
    },
  ];
  const [rows, setRows] = useState(data);

  function DownloadFifoAgeingReport() {
    ReportService.downloadFIFOReport(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status == 200) {
          debugger;
          data = res.data;
          console.log("UserList->", data);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error...!");
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
  }

  return (
    <>
      <div className="wrapper">
        <div className="row p-2">
          <div className="border border-dark rounded-1 bg-white p-2">
            {" "}
            <div className="col">
              {/* <div className="p-2"> */}
              <div className="float-start p-2">
                <label className="statusOn  ms-3">As On Date : </label>
                {"  "}
                <input
                  id="dateInput"
                  className="inputDate"
                  type="date"
                  value={asOnDate || ""}
                  onChange={(e) => {
                    setAsOnDate(e.target.value);
                    console.log("->", ConvertFormat(e.target.value));
                  }}
                />{" "}
              </div>
              <div className="float-end p-2">
                <button
                  className="btn addUser dashbutton  ms-5"
                  type="button"
                  onClick={() => {
                    DownloadFifoAgeingReport();
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

export default FifoAgeingReport;
