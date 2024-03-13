import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Hyperlink from "./Hyperlink";
import { DashboardDownloadService } from "../../Service/DashboardDownloadService";
import { DownloadByteArray } from "../HtmlComponents/CommonFunction";
import { toast } from "react-toastify";
const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [eventTable, setEventTable] = useState([]);
  // const [dbdata, setDbdata] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    FetchEvents();
    // Initialize the data to "Core" when the component mounts
    // fetchCoreData('crore');
  }, []);

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
    {
      field: "id",
      header: "Sr no",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "accountName",
      header: "Account Name",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      body: "HyperLinkTemplate",
    },
    {
      field: "accountNumber",
      header: "Account Number",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      body: "HyperLinkTemplate",
    },
    {
      field: "transactionDate",
      header: "Transaction Date",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "transactionDetails",
      header: "Transaction Details",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "chequeRefNumber",
      header: "Cheque Reference Number",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "valueDate",
      header: "Value Date",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "amountDebit",
      header: "Amount Debit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "amountCredit",
      header: "Amount Credit",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "transactionType",
      header: "Transaction Type",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "reportingDate",
      header: "Reporting Date",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "CRN",
      header: "CRN",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "instructionNumber",
      header: "Instruction Number",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "CCY",
      header: "CCY",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "UTRSerialNumber",
      header: "UTR Serial Number",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryName",
      header: "Beneficiary Name",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryAccountNumber",
      header: "Beneficiary Account Number",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryBank",
      header: "Beneficiary Bank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryBranch",
      header: "Beneficiary Branch",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryCity",
      header: "Beneficiary City",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryIFSCCode",
      header: "Beneficiary IFSC Code",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "beneficiaryAccountType",
      header: "Beneficiary Account Type",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "dataAsOn",
      header: "Data As On",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "bank",
      header: "Bank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "transactionFor",
      header: "Transaction For",
      sortable: true,
      filter: true,
      showFilterMenu: false,
    },
    {
      field: "FMSUniqueId",
      header: "FMS Unique ID",
      sortable: true,
      filter: true,
      showFilterMenu: false,
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
    DashboardService.getEvents(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
      },
      (res) => {
        if (res.status === 200) {
          setEventTable(res.data.data.events);
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    );
  }
  //----------------------------------------------------------------------------------
  function DownloadEvents() {
    DashboardDownloadService.downloadEvents(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
      },
      (res) => {
        if (res.status === 200) {
          var data = res.data.data;
          console.log("->", data);
          DownloadByteArray("Events", data);
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
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
                onClick={() => {
                  setIsLoading(true);
                  DownloadEvents();
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
        <div className="p-2 mt-2 tableDiv">
          {/* <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "} */}
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
          <GenericDataTable
            data={eventTableData}
            columns={columns}
            enablePagination={false}
          />
        </div>
        <Hyperlink
          isOpen={isOpen}
          setModal={setIsOpen}
          row={rowdata}
          // accNum={accNo}
          //piu={propPIU}
        />
      </div>
    </div>
  );
};

export default Events;
