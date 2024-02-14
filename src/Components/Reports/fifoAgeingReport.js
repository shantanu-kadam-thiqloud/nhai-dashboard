import React, { useState } from "react";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { ReportService } from "../../Service/ReportService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../HtmlComponents/Spinner";

const FifoAgeingReport = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      field: "piu",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "PIU Name",
    },
    {
      field: "ro",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "RO Name",
    },
    {
      field: "accNum",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account No",
    },
    {
      field: "accName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Name",
    },
    {
      field: "value",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Value",
    },
    {
      field: "requestDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Date of Request",
    },
    {
      field: "sanctionLimit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Sanction Limit",
    },
    {
      field: "utilizedlimit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Utilized Limit",
    },
    {
      field: "unUtilizedLimit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Un Utilized Limit",
    },
    {
      field: "fifoAmount",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "FIFO Amount",
    },
    {
      field: "currentDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Current Date",
    },
    {
      field: "days",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "No of Days",
    },
    {
      field: "ageing",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Ageing",
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

  useEffect(() => {
    setIsLoading(true);
    FetchFIFOReport();
  }, []);

  //-------------Fetch Report--------------------------------------------------
  function FetchFIFOReport() {
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
          data = res.data.responseObjectList;
          console.log("->", data);
          setRows(data);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
          data = res.data;
          console.log("->", data);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
          <div className="mt-2 tableDiv">
            {/* <DataTable
            columns={columns}
            data={rows} //{data} //
            customClass="LoginReportTable"
            showSearchBar={false}
          />{" "} */}
            <GenericDataTable data={rows} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifoAgeingReport;
