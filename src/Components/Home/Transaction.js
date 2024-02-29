import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
import { DashboardService } from "../../Service/DashboardService";
import { useNavigate } from "react-router-dom";
import {
  ConvertFormat,
  DownloadByteArray,
} from "../HtmlComponents/CommonFunction";
import Spinner from "../HtmlComponents/Spinner";
import Hyperlink from "./Hyperlink";
import { v4 as uuid } from "uuid";
import { DashboardDownloadService } from "../../Service/DashboardDownloadService";
const Transaction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");
  const [propPIU, setPropPIU] = useState("");
  const [propAccNo, setPropAccNo] = useState("");
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [filter, setFilter] = useState("0");
  const [dataType, setDataType] = useState("Main");
  const [isLoading, setIsLoading] = useState(false);
  // const [dbdata, setDbdata] = useState([]);
  const [transactionTable, settransactionTable] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    FetchTransaction();
    //   // Initialize the data to "Core" when the component mounts
    //   fetchCoreData('crore');
  }, [dataType, toDate, filter]);

  // const fetchCoreData = (type) => {
  //   const apiUrl = 'http://localhost:3007/api/secure/reginolOffice';
  //   const uuid = localStorage.getItem('UUID');
  //   const headers = {
  //     'XUuid': uuid
  //   };

  //   // Make the Axios GET request with the headers
  //   axios.get(apiUrl, { headers })
  //     .then((response) => {
  //       setDbdata(response.data.data.regionWiseData);
  //       if(type === 'crore'){
  //         setcoreDecimalType('crore');
  //       } else{
  //         setcoreDecimalType('decimal');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  // useEffect(() => {
  //   if (dbdata && Object.keys(dbdata).length > 0) {
  //    const reginaolData = dbdata.map((item, index) => ({
  //       id: index + 1,
  //       office: item.regionalOffice,
  //       zone: item.zone,
  //       piu: item.countOfPIU,
  //       subsidiaryAccounts: item.countOfSubsidiaryAccounts,
  //       sanctionLimit: corDecimalType === 'crore' ? item.crore.sanctionLimit : item.decimal.sanctionLimit,
  //       utilizedLimit: corDecimalType === 'crore' ? item.crore.utilizedLimit : item.decimal.utilizedLimit,
  //       unutilizedLimit: corDecimalType === 'crore' ? item.crore.unUtilizedLimit : item.decimal.unUtilizedLimit,
  //       percentage: corDecimalType === 'crore' ? item.crore.utilizedPercent : item.decimal.utilizedPercent,
  //     }));
  //     setReginoalTable(reginaolData);
  //     console.log('reginoalTable', reginaolData);
  //   }

  // }, [dbdata]);
  // const columns = [
  //   { field: "id", headerName: "Sr no", width: 50 },
  //   {
  //     field: "accountName",
  //     headerName: "Account Name",
  //     width: 150,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "accountNumber",
  //     headerName: "Account Number",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "transactionDate",
  //     headerName: "Transaction Date",
  //     width: 120,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "transactionDetails",
  //     headerName: "Transaction Details",
  //     width: 160,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "chequeRefNumber",
  //     headerName: "Cheque Reference Number",
  //     width: 150,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "valueDate",
  //     headerName: "Value Date",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "amountDebit",
  //     headerName: "Amount Debit",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "amountCredit",
  //     headerName: "Amount Credit",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "transactionType",
  //     headerName: "Transaction Type",
  //     width: 120,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "reportingDate",
  //     headerName: "Reporting Date",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "CRN",
  //     headerName: "CRN",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "instructionNumber",
  //     headerName: "Instruction Number",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "CCY",
  //     headerName: "CCY",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "UTRSerialNumber",
  //     headerName: "UTR Serial Number",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "beneficiaryName",
  //     headerName: "Beneficiary Name",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "beneficiaryAccountNumber",
  //     headerName: "Beneficiary Account Number",
  //     width: 100,
  //     editable: false,
  //     type: "number",
  //   },
  //   {
  //     field: "beneficiaryBank",
  //     headerName: "Beneficiary Bank",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "beneficiaryBranch",
  //     headerName: "Beneficiary Branch",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "beneficiaryCity",
  //     headerName: "Beneficiary City",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "beneficiaryIFSCCode",
  //     headerName: "Beneficiary IFSC Code",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "beneficiaryAccountType",
  //     headerName: "Beneficiary Account Type",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "dataAsOn",
  //     headerName: "Data As On",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "bank",
  //     headerName: "Bank",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "transactionFor",
  //     headerName: "Transaction For",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  //   {
  //     field: "FMSUniqueId",
  //     headerName: "FMS Unique ID",
  //     width: 100,
  //     editable: false,
  //     type: "string",
  //   },
  // ];
  function FetchTransaction() {
    DashboardService.getTransaction(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
        filter: filter, //"0",
        dataType: dataType, //"CALAPD",
        fromDate: ConvertFormat(fromDate), //"",
        toData: ConvertFormat(toDate), //"",
      },
      (res) => {
        if (res.status === 200) {
          var d = res.data.data.regionWiseData;
          //   setRows(d);
          settransactionTable(d);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
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
  function DownloadTransaction() {
    DashboardDownloadService.downloadTransaction(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
        filter: filter, //"0",
        dataType: dataType, //"CALAPD",
        fromDate: "21-01-2020",
        toData: "21-01-2020",
        // fromDate: ConvertFormat(fromDate), //"",
        // toData:ConvertFormat(toDate), //"",
      },
      (res) => {
        if (res.status === 200) {
          var data = res.data.data;
          console.log("->", data);
          DownloadByteArray("Transaction", data);
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

  const columns = [
    {
      field: "accountName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Name",
      width: 150,
      editable: false,
      type: "string",
      body: "HyperLinkTemplate",
    },
    {
      field: "accountNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Number",
      width: 100,
      editable: false,
      type: "number",
      body: "HyperLinkTemplate",
    },
    {
      field: "transactionDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Date",
      width: 120,
      editable: false,
      type: "string",
    },
    {
      field: "transactionDetails",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Details",
      width: 160,
      editable: false,
      type: "string",
    },
    {
      field: "chequeRefNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Cheque Reference Number",
      width: 150,
      editable: false,
      type: "string",
    },
    {
      field: "valueDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Value Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "amountDebit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Amount Debit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "amountCredit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Amount Credit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "transactionType",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Type",
      width: 120,
      editable: false,
      type: "string",
    },
    {
      field: "reportingDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Reporting Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "CRN",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "CRN",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "instructionNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Instruction Number",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "CCY",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "CCY",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "UTRSerialNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "UTR Serial Number",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "beneficiaryName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary Name",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryAccountNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary Account Number",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "beneficiaryBank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary Bank",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryBranch",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary Branch",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryCity",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary City",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryIFSCCode",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary IFSC Code",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryAccountType",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Beneficiary Account Type",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "dataAsOn",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Data As On",
      width: 100,
      editable: false,
      type: "date",
    },
    {
      field: "bank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Bank",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "transactonFor",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction For",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "FMSUniqueId",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "FMS Unique ID",
      width: 100,
      editable: false,
      type: "string",
    },
  ];
  const transactionTableData = [
    {
      id: 1,
      accountName: "CALA  CUM SDM KOTA AND PD NHAI KOTA BRT PKG-14",
      accountNumber: "5712799006",
      transactionDate: "21-05-2020",
      transactionDetails: "BY CLG INST 15443/16-05-20/CBI/KOTA",
      chequeRefNumber: "",
      valueDate: "21-05-2020",
      amountDebit: "0.00",
      amountCredit: "2,66,493.00",
      transactionType: "SC",
      reportingDate: "21-05-2020",
      CRN: "357988051",
      instructionNumber: "",
      CCY: "INR",
      UTRSerialNumber: "",
      beneficiaryName: "",
      beneficiaryAccountNumber: "",
      beneficiaryBank: "",
      beneficiaryBranch: "",
      beneficiaryCity: "",
      beneficiaryIFSCCode: "",
      beneficiaryAccountType: "",
      dataAsOn: "21-05-2020",
      bank: "Kotak",
      transactonFor: "CALAPD",
      FMSUniqueId: "146126",
    },
    {
      id: 2,
      accountName:
        "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
      accountNumber: "1612042464",
      transactionDate: "09-04-2020",
      transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
      chequeRefNumber: "RTGSINW-0030499511",
      valueDate: "09-04-2020",
      amountDebit: "0.00",
      amountCredit: "86,33,180.00",
      transactionType: "OC",
      reportingDate: "09-04-2020",
      CRN: "216292252",
      instructionNumber: "",
      CCY: "INR",
      UTRSerialNumber: "",
      beneficiaryName: "",
      beneficiaryAccountNumber: "",
      beneficiaryBank: "",
      beneficiaryBranch: "",
      beneficiaryCity: "",
      beneficiaryIFSCCode: "",
      beneficiaryAccountType: "",
      dataAsOn: "09-04-2020",
      bank: "Kotak",
      transactonFor: "CALAPD",
      FMSUniqueId: "143027",
    },
  ];

  return (
    <div>
      <div className="row">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Transaction</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Filter : </label>
              <select
                id="financialYear"
                className="selectBoxDashbord"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="0">Transaction Date</option>
                <option value="1">Value Date</option>
                <option value="2">Reporting Date</option>
                <option value="3">Date as on</option>
              </select>{" "}
              <label className="statusOn">From : </label>{" "}
              <input
                id="fromDate"
                className="inputDate"
                type="date"
                value={fromDate || ""}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
              />{" "}
              <label className="statusOn">To : </label>{" "}
              <input
                id="toDate"
                className="inputDate"
                type="date"
                value={toDate || ""}
                onChange={(e) => {
                  setToDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
                // Add any necessary attributes or event handlers here
              />{" "}
              <label className="statusOn">Data Type : </label>{" "}
              <select
                id="financialYear"
                className="selectBoxDashbord"
                onChange={(e) => {
                  setDataType(e.target.value);
                }}
              >
                <option value="Main">Main</option>
                <option value="CALAPD">CALAPD</option>
              </select>{" "}
            </div>
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  DownloadTransaction();
                }}
              >
                Download
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="p-2 tableDiv">
          {/* <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "} */}
          {/* <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={transactionTableData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              getRowHeight={() => "auto"}
              getHeaderRowHeight={() => "auto"}
              disableRowSelectionOnClick
              disableSelectionOnClick={true}
              className="custom-datagrid"
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </Box> */}
          <GenericDataTable
            data={transactionTableData}
            columns={columns}
            enablePagination={false}
          />
        </div>
        <Hyperlink
          isOpen={isOpen}
          setModal={setIsOpen}
          row={rowdata}
          accNum={propAccNo}
          piu={propPIU}
        />
      </div>
    </div>
  );
};

export default Transaction;
