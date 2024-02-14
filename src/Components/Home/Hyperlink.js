import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import NHAILogo from "../../Assets/images/NHAI-Logo-VECTOR.png";
import { v4 as uuid } from "uuid";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../HtmlComponents/Spinner";
import { DashboardService } from "../../Service/DashboardService";
import { useNavigate } from "react-router-dom";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
const Hyperlink = ({ isOpen, setModal, row, accountNumber, PIU }) => {
  const customStyles = {
    content: {
      width: "90%", // Set desired width
      height: "90%", // Set desired height
      margin: "auto", // Center the modal horizontally
      //   borderRadius: "8px",
      //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#325b84", //"#003366",
    },
  };
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      field: "bank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Bank",
    },
    {
      field: "zone",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Zone",
    },
    {
      field: "ro",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "RO",
    },
    {
      field: "PIU",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "PIU",
      //body: "HyperLinkTemplate",
    },
    {
      field: "accountNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Number",
      //body: "HyperLinkTemplate",
    },
    {
      field: "date",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Date",
    },
    {
      field: "particular",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "PARTICULAR",
    },
    {
      field: "limitLoadedAmount",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Limit Loaded Amount",
    },
    {
      field: "limitReduced",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Limit Reduced",
    },
    {
      field: "limitUtilized",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Limit Utilized",
    },
    {
      field: "returns",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Returns",
    },
    {
      field: "limitBalance",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Limit Balance",
    },
    {
      field: "transactionType",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Type",
    },
  ];
  // const columns = [
  //   {
  //     Header: "Bank",
  //     accessor: "bank",
  //   },
  //   {
  //     Header: "Zone",
  //     accessor: "zone",
  //   },
  //   {
  //     Header: "RO",
  //     accessor: "ro",
  //   },
  //   {
  //     Header: "PIU",
  //     accessor: "PIU",
  //   },

  //   {
  //     Header: "Account Number",
  //     accessor: "accountNumber",
  //   },
  //   {
  //     Header: "Account Name",
  //     accessor: "accountName",
  //   },
  //   {
  //     Header: "Account Opening Date",
  //     accessor: "accountOpenDate",
  //   },
  //   {
  //     Header: "Date",
  //     accessor: "date",
  //   },
  //   {
  //     Header: "PARTICULAR",
  //     accessor: "particular",
  //   },
  //   {
  //     Header: "Limit Loaded Amount",
  //     accessor: "limitLoadedAmount",
  //   },
  //   {
  //     Header: "Limit Reduced",
  //     accessor: "limitReduced",
  //   },

  //   {
  //     Header: "Limit Utilized",
  //     accessor: "limitUtilized",
  //   },
  //   {
  //     Header: "Returns",
  //     accessor: "returns",
  //   },
  //   {
  //     Header: "Limit Balance",
  //     accessor: "limitBalance",
  //   },
  //   {
  //     Header: "Transaction Type",
  //     accessor: "transactionType",
  //   },
  // ];
  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    limitLedgerDetails: [
      {
        bank: "Kotak",
        zone: "South",
        ro: "Chennai",
        PIU: "Bengaluru Expressway",
        accountNumber: "1612042389",
        date: "21-05-2020",
        particular: "Reduce",
        limitLoadedAmount: "0.00",
        limitReduced: "0.00",
        limitUtilized: " 63,28,490.00",
        returns: "0.00",
        limitBalance: "46,37,64,806.00",
        transactionType: "LP",
      },
      {
        bank: "Kotak",
        zone: "South",
        ro: "Hyderabad",
        PIU: "Hyderabad",
        accountNumber: "1612043997",
        date: "21-05-2020",
        particular: "Reduce",
        limitLoadedAmount: "0.00",
        limitReduced: "0.00",
        limitUtilized: "4,04,167.00",
        returns: "0.00",
        limitBalance: "4,54,14,000.00",
        transactionType: "LP",
      },
    ],
  };
  const [rows, setRows] = useState(mockRes.limitLedgerDetails);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("rdata->", row);
    //setIsLoading(true);
    // FetchLimitLedger();
  }, [row]);
  //---------------------------------------------------------------------------------------
  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "NHAI",
    bank: "All", //Kotak,
    ro: "All", // Bhubaneswar
    zone: "All", //East,West,North South
    piu: row.PIU ? row.PIU : "All",

    accountNumber: row.accountNumber ? row.accountNumber : "",

    fromDate: "21-05-2020", //ConvertFormat(fromDate), //"01-04-2017",
    toData: "21-05-2023", //ConvertFormat(toDate), //"01-09-2023",
    transactionType: "All",
    dateFilter: 0, //fromDate && toDate ? 1 : 0,
    isActive: "All",
  };
  function FetchLimitLedger() {
    DashboardService.getLimitledger(
      reqBody,
      (res) => {
        if (res.status === 200) {
          // setRows(res.data.limitLedgerDetails);
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
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="modal-dialog" role="document">
        <Spinner isLoading={isLoading} />
        <div className="modal-content">
          {/* <div className="modal-header"> */}
          <div className="float-end">
            <FontAwesomeIcon
              icon={faTimes}
              className="closeIconPopupWhite"
              onClick={() => {
                setModal(false);
              }}
            />
          </div>
          {/* </div> */}

          <div className="modal-body">
            <div className="hyperlink">
              {/*------------------------------------------------------------*/}
              <div className="row">
                <div className="col-4">
                  <a href="/">
                    {" "}
                    <img src={NHAILogo} alt="NHAILogo" className="NHAILogoHy" />
                  </a>
                </div>
                <div className="col-8">
                  <span className="NHAITextHy text-center">
                    National Highways Authority of India{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="row p-1">
                <div className="col ">
                  <label className="hyperTitle">
                    Account Number: {row.accountNumber}
                  </label>
                  <br />
                  <label className="hyperTitle">
                    Account Open Date: {row.accountOpeningData}
                  </label>
                  <br />
                  <label className="hyperTitle">Account Name: {row.bank}</label>
                  <button
                    className="btn addUser dashbutton ms-5 float-end p-2"
                    type="button"
                    onClick={() => {}}
                  >
                    Download
                  </button>{" "}
                </div>
              </div>{" "}
              <div className="row p-2">
                <div className="p-2 tableDiv">
                  {/* <DataTable
                    columns={columns}
                    data={rows} //{data} //
                    customClass="LimitTable"
                    showSearchBar={false}
                  />{" "} */}
                  <GenericDataTable data={rows} columns={columns} />
                </div>
              </div>
              {/*------------------------------------------------------------------------*/}
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Hyperlink;
