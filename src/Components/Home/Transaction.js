import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
//import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const Transaction = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  // const [dbdata, setDbdata] = useState([]);
  // const [transactionTable, settransactionTable] = useState([]);

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
    { "field": "accountName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Name", "width": 150, "editable": false, "type": "string" },
    { "field": "accountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Number", "width": 100, "editable": false, "type": "number" },
    { "field": "transactionDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Date", "width": 120, "editable": false, "type": "string" },
    { "field": "transactionDetails", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Details", "width": 160, "editable": false, "type": "string" },
    { "field": "chequeRefNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Cheque Reference Number", "width": 150, "editable": false, "type": "string" },
    { "field": "valueDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Value Date", "width": 100, "editable": false, "type": "string" },
    { "field": "amountDebit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Amount Debit", "width": 100, "editable": false, "type": "number" },
    { "field": "amountCredit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Amount Credit", "width": 100, "editable": false, "type": "number" },
    { "field": "transactionType", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Type", "width": 120, "editable": false, "type": "string" },
    { "field": "reportingDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Reporting Date", "width": 100, "editable": false, "type": "string" },
    { "field": "CRN", "sortable": true, "filter": true, "showFilterMenu": false, "header": "CRN", "width": 100, "editable": false, "type": "number" },
    { "field": "instructionNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Instruction Number", "width": 100, "editable": false, "type": "string" },
    { "field": "CCY", "sortable": true, "filter": true, "showFilterMenu": false, "header": "CCY", "width": 100, "editable": false, "type": "number" },
    { "field": "UTRSerialNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "UTR Serial Number", "width": 100, "editable": false, "type": "number" },
    { "field": "beneficiaryName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Name", "width": 100, "editable": false, "type": "string" },
    { "field": "beneficiaryAccountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Account Number", "width": 100, "editable": false, "type": "number" },
    { "field": "beneficiaryBank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Bank", "width": 100, "editable": false, "type": "string" },
    { "field": "beneficiaryBranch", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Branch", "width": 100, "editable": false, "type": "string" },
    { "field": "beneficiaryCity", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary City", "width": 100, "editable": false, "type": "string" },
    { "field": "beneficiaryIFSCCode", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary IFSC Code", "width": 100, "editable": false, "type": "string" },
    { "field": "beneficiaryAccountType", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Account Type", "width": 100, "editable": false, "type": "string" },
    { "field": "dataAsOn", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Data As On", "width": 100, "editable": false, "type": "date" },
    { "field": "bank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Bank", "width": 100, "editable": false, "type": "string" },
    { "field": "transactionFor", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction For", "width": 100, "editable": false, "type": "string" },
    { "field": "FMSUniqueId", "sortable": true, "filter": true, "showFilterMenu": false, "header": "FMS Unique ID", "width": 100, "editable": false, "type": "string" }
  ];
  const transactionTableData = [
    {
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
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Transaction</label> */}
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
        <div className="p-2 tableDiv">
          {/* <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "} */}
          <Box sx={{ height: 400, width: "100%" }}>
            {/* <DataGrid
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
            /> */}
             <GenericDataTable 
            data={transactionTableData} 
            columns={columns}    
              />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
