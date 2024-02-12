import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const Events = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];


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
    { "field": "accountName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Name", "body": "HyperLinkTemplate" },
    { "field": "accountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Number", "body": "HyperLinkTemplate" },
    { "field": "transactionDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Date"},
    { "field": "transactionDetails", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Details"},
    { "field": "chequeRefNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Cheque Reference Number"  },
    { "field": "valueDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Value Date"  },
    { "field": "amountDebit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Amount Debit"  },
    { "field": "amountCredit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Amount Credit"  },
    { "field": "transactionType", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Type"  },
    { "field": "reportingDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Reporting Date" },
    { "field": "CRN", "sortable": true, "filter": true, "showFilterMenu": false, "header": "CRN",   },
    { "field": "instructionNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Instruction Number",   },
    { "field": "CCY", "sortable": true, "filter": true, "showFilterMenu": false, "header": "CCY",   },
    { "field": "UTRSerialNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "UTR Serial Number"   },
    { "field": "beneficiaryName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Name"  },
    { "field": "beneficiaryAccountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Account Number",   },
    { "field": "beneficiaryBank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Bank"  },
    { "field": "beneficiaryBranch", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Branch"   },
    { "field": "beneficiaryCity", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary City"   },
    { "field": "beneficiaryIFSCCode", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary IFSC Code"  },
    { "field": "beneficiaryAccountType", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Beneficiary Account Type"   },
    { "field": "dataAsOn", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Data As On"   },
    { "field": "bank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Bank"   },
    { "field": "transactionFor", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction For",   },
    { "field": "FMSUniqueId", "sortable": true, "filter": true, "showFilterMenu": false, "header": "FMS Unique ID"   }
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

  return (
    <div>
      <div className="row">
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
        <div className="p-2 tableDiv">

          {/* <Box sx={{ height: 400, width: "100%" }}>
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
          </Box> */}
          {/* <DataTable
                value={eventTableData}
                removableSort
                filterDisplay="row"
                showGridlines
                tableStyle={{ maxWidth: '200px' }}
              >
                {columns.map((col) => (
                  <Column
                    key={col.field}
                    field={col.field}
                    sortable
                    filter
                    filterPlaceholder="Search"
                    filterMatchMode="contains"
                    showGridlines
                    header={col.header}
                    style={{ maxWidth: '200px', whiteSpace: 'normal' }}
                    body={col.body}
                    className= {col.class}
                  />
                ))}
    </DataTable> */}
    <GenericDataTable 
            data={eventTableData} 
            columns={columns}    
              />


        </div>
      </div>      
    </div>
  );
};

export default Events;
