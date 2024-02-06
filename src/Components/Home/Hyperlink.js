import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import NHAILogo from "../../Assets/images/NHAI-Logo-VECTOR.png";

import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Hyperlink = ({ isOpen, setModal, row }) => {
  const customStyles = {
    content: {
      width: "90%",
      height: "90%",
      margin: "auto",
      //   borderRadius: "8px",
      //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#325b84",
    },
  };

  const columns = [
    {
      Header: "Bank",
      accessor: "bank",
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "RO",
      accessor: "ro",
    },
    {
      Header: "PIU",
      accessor: "PIU",
    },

    {
      Header: "Account Number",
      accessor: "accountNumber",
    },
    {
      Header: "Account Name",
      accessor: "accountName",
    },
    {
      Header: "Account Opening Date",
      accessor: "accountOpenDate",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "PARTICULAR",
      accessor: "particular",
    },
    {
      Header: "Limit Loaded Amount",
      accessor: "limitLoadedAmount",
    },
    {
      Header: "Limit Reduced",
      accessor: "limitReduced",
    },

    {
      Header: "Limit Utilized",
      accessor: "limitUtilized",
    },
    {
      Header: "Returns",
      accessor: "returns",
    },
    {
      Header: "Limit Balance",
      accessor: "limitBalance",
    },
    {
      Header: "Transaction Type",
      accessor: "transactionType",
    },
  ];
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

  useEffect(() => {
    console.log("rdata->", row);
  }, [row]);

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="modal-dialog" role="document">
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
                    Account Number: {row.accNum}
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
                <div className="p-2">
                  <DataTable
                    columns={columns}
                    data={rows} //{data} //
                    customClass="LimitTable"
                    showSearchBar={false}
                  />{" "}
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
