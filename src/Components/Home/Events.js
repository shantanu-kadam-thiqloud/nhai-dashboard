import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const [dbdata, setDbdata] = useState([]);
  // const [eventTable, setEventTable] = useState([]);

  // useEffect(() => {
  //   // Initialize the data to "Core" when the component mounts
  //   fetchCoreData('crore');
  // }, []);

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
  const columns = [
    { field: "id", headerName: "Sr no", width: 50 },
    {
      field: "accountName",
      headerName: "Account Name",
      width: 150,
      editable: false,
      type: "string",
    },
    {
      field: "accountNumber",
      headerName: "Account Number",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "transactionDate",
      headerName: "Transaction Date",
      width: 120,
      editable: false,
      type: "string",
    },
    {
      field: "transactionDetails",
      headerName: "Transaction Details",
      width: 160,
      editable: false,
      type: "string",
    },
    {
      field: "chequeRefNumber",
      headerName: "Cheque Reference Number",
      width: 150,
      editable: false,
      type: "string",
    },
    {
      field: "valueDate",
      headerName: "Value Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "amountDebit",
      headerName: "Amount Debit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "amountCredit",
      headerName: "Amount Credit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "transactionType",
      headerName: "Transaction Type",
      width: 120,
      editable: false,
      type: "string",
    },
    {
      field: "reportingDate",
      headerName: "Reporting Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "CRN",
      headerName: "CRN",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "instructionNumber",
      headerName: "Instruction Number",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "CCY",
      headerName: "CCY",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "UTRSerialNumber",
      headerName: "UTR Serial Number",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "beneficiaryName",
      headerName: "Beneficiary Name",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryAccountNumber",
      headerName: "Beneficiary Account Number",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "beneficiaryBank",
      headerName: "Beneficiary Bank",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryBranch",
      headerName: "Beneficiary Branch",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryCity",
      headerName: "Beneficiary City",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryIFSCCode",
      headerName: "Beneficiary IFSC Code",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "beneficiaryAccountType",
      headerName: "Beneficiary Account Type",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "dataAsOn",
      headerName: "Data As On",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "bank",
      headerName: "Bank",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "transactionFor",
      headerName: "Transaction For",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "FMSUniqueId",
      headerName: "FMS Unique ID",
      width: 100,
      editable: false,
      type: "string",
    },
  ];
  const eventTableData = [
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

  //---------------------------------------------------------------------------------------
  function FetchEvents() {
    DashboardService.getBankAndEvents(
      {},
      (res) => {
        if (res.status === 200) {
          // setRows(res.data);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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

  return (
    <div>
      <div className="row">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Events</label> */}
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
              >
                Download
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="p-2">
          {/* <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "} */}
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={eventTableData}
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
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Events;
