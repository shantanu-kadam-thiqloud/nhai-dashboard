import React, { useEffect, useState } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const LimitLedger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const navigate = useNavigate();
  const [formDate, setFormDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateFromValue, setDateFromValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dateToValue, setDateToValue] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [piuD, setPiu] = useState("");
  const [accNo, setAccNo] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");

  
  const columns = [
    { "field": "bank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Bank" },
    { "field": "zone", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Zone" },
    { "field": "ro", "sortable": true, "filter": true, "showFilterMenu": false, "header": "RO" },
    { "field": "PIU", "sortable": true, "filter": true, "showFilterMenu": false, "header": "PIU", "body": "HyperLinkTemplate" },
    { "field": "accountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Number", "body": "HyperLinkTemplate" },
    { "field": "date", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Date" },
    { "field": "particular", "sortable": true, "filter": true, "showFilterMenu": false, "header": "PARTICULAR" },
    { "field": "limitLoadedAmount", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Loaded Amount", },
    { "field": "limitReduced", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Reduced", },
    { "field": "limitUtilized", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Utilized", },
    { "field": "returns", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Returns", },
    { "field": "limitBalance", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Balance", },
    { "field": "transactionType", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Transaction Type" }
  ]
  ;
  
  const data = [
    {
      id: 1,
      piu: "Total",
      office: "",
      zone: "",
      subsidiaryAccounts: "793",
      sanctionLimit: "64,251.97",
      utilizedLimit: "56,544.68",
      unutilizedLimit: "7,707.29",
      percentage: "88.00%",
    },
    {
      id: 2,
      piu: "Balasore",
      office: "Bhubaneswar",
      zone: "East",
      subsidiaryAccounts: "6",
      sanctionLimit: "10.58",
      utilizedLimit: "6.82",
      unutilizedLimit: "3.76",
      percentage: "64.43%",
    },
    {
      id: 3,
      piu: "Berhampur",
      office: "Bhubaneswar",
      zone: "East",
      subsidiaryAccounts: "2",
      sanctionLimit: "13.45",
      utilizedLimit: "13.45",
      unutilizedLimit: "0.00",
      percentage: "100.00%",
    },
    {
      id: 4,
      piu: "Bhubaneswar",
      office: "Bhubaneswar",
      zone: "East",
      subsidiaryAccounts: "9",
      sanctionLimit: "27.75",
      utilizedLimit: "4.20",
      unutilizedLimit: "23.55",
      percentage: "15.12%",
    },
    {
      id: 5,
      piu: "Dhenkanal",
      office: "Bhubaneswar",
      zone: "East",
      subsidiaryAccounts: "4",
      sanctionLimit: "142.47",
      utilizedLimit: "142.18",
      unutilizedLimit: "0.28",
      percentage: "99.80%",
    },
  ];

  useEffect(() => {
    console.log("reqBody-->", reqBody);
  }, [toDate]);

  //Mock----------------------------------------------------------------------
  function formatDate(inputDate) {
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }

  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    bank: bankD, //"All", //Kotak,
    ro: roD, //"All", // Bhubaneswar
    zone: zoneD, //"All", //East,West,North South
    piu: piuD,
    accountNumber: accNo,
    fromDate: formDate, //"01-04-2017",
    toData: toDate, //"01-09-2023",
    transactionType: typeTransaction, //"All",
  };

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
  return (
    <div>
      <div className="row p-1">
        <div className="col">
          <div className="float-end ">
            <label className="statusOn">From :</label>
            {"  "}
            <input
              id="dateInput"
              className="inputDate"
              type="date"
              value={dateFromValue || ""}
              onChange={(e) => {
                const E = formatDate(e.target.value);
                setDateFromValue(e.target.value);
                console.log("----->", E);
                setFormDate(E);
              }}
            />{" "}
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <label className="statusOn">To :</label>
            {"  "}
            <input
              id="dateInput"
              className="inputDate"
              type="date"
              value={dateToValue || ""}
              onChange={(e) => {
                setDateToValue(e.target.value);
                const E = formatDate(e.target.value);
                console.log("----->", E);
                setToDate(E);
              }}
            />{" "}
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <label className="statusOn">Bank :</label>{" "}
            <select
              name="bank"
              className="inputDate"
              onChange={(e) => {
                setBank(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="Kotak">Kotak</option>
            </select>
            {"  "}
          </div>
        </div>
        <div className="col">
          {" "}
          <div className="float-end">
            <button
              className="btn addUser dashbutton"
              type="button"
              onClick={() => {}}
            >
              Download
            </button>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="row p-1">
        <div className="col">
          <div className="float-end">
            <label className="statusOn">Zone :</label>{" "}
            <select
              name="zone"
              className="inputDate"
              onChange={(e) => {
                setZone(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
            {"  "}
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <label className="statusOn">RO :</label>{" "}
            <select
              name="ro"
              className="inputDate"
              onChange={(e) => {
                setRo(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value=""></option>
              <option value=""></option>
            </select>
            {"  "}
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <label className="statusOn">PIU :</label>{" "}
            <select
              name="piu"
              className="inputDate"
              onChange={(e) => {
                setPiu(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value=""></option>
            </select>
            {"  "}
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row p-1">
        <div className="col">
          <div className="float-end">
            <label className="statusOn">Account No.</label>
            {"  "}
            <input
              id="dateInput"
              className="inputDate"
              type="text"
              onChange={(e) => {
                const E = e.target.value;
                console.log("----->", E);
                setAccNo(E);
              }}
            />{" "}
            {/* </div> */}
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <label className="statusOn">Transaction Type :</label>{" "}
            <select
              name="bank"
              className="inputDate"
              onChange={(e) => {
                setTypeTransaction(e.target.value);
              }}
            >
              <option value="All">All</option>
              <option value="Kotak">Kotak</option>
            </select>
            {"  "}
          </div>
        </div>
        <div className="col"></div>
        <div className="col">{/* </div> */}</div> <hr />
        <div className="row">
          <div className="p-2 tableDiv">
            {/* <DataTable
              columns={columns}
              data={rows} //{data} //
              customClass="LimitTable"
              showSearchBar={false}
            />{" "} */}

            <GenericDataTable 
            data={rows} 
            columns={columns}    
              />
          </div>
        </div>       
      </div>
    </div>
  );
};

export default LimitLedger;
