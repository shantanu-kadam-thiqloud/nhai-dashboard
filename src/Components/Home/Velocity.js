import React, { useEffect, useState } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const Velocity = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const cdate = formatDate(currentDate);
  const [dynamicDate, setDate] = useState(cdate);
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [piuD, setPiu] = useState("");
  const [accNo, setAccNo] = useState("");
  const [Decimal, setDecimal] = useState(true);



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
  //     Cell: ({ row }) => (
  //       <a
  //         href="#"
  //         //  target="_blank"
  //         onClick={() => {
  //           setRData(row.values);
  //           setIsOpen(true);
  //           //  navigate("/NHAI/Hyperlink");
  //           //window.open("/NHAI/Hyperlink", "_blank");
  //         }}
  //         style={{ color: "black" }}
  //       >
  //         {row.values.PIU}
  //       </a>
  //     ),
  //   },

  //   {
  //     Header: "Account Number",
  //     accessor: "accountNumber",
  //     Cell: ({ row }) => (
  //       <a
  //         href="#"
  //         onClick={() => {
  //           //  navigate("/NHAI/Hyperlink");
  //           setRData(row.values);
  //           setIsOpen(true);
  //         }}
  //         style={{ color: "black", float: "right" }}
  //       >
  //         {row.values.accountNumber}
  //       </a>
  //     ),
  //   },
  //   {
  //     Header: "Date",
  //     accessor: "date",
  //   },
  //   {
  //     Header: "Limit Utilization %",
  //     accessor: "limitUtilization",
  //     Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  //   {
  //     Header: "Velocity %",
  //     accessor: "velocity",
  //     Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  // ];

  const columns = [
    { "field": "bank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Bank" },
    { "field": "zone", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Zone" },
    { "field": "ro", "sortable": true, "filter": true, "showFilterMenu": false, "header": "RO" },
    { "field": "PIU", "sortable": true, "filter": true, "showFilterMenu": false, "header": "PIU", "body": "HyperLinkTemplate" },
    { "field": "accountNumber", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Number", "body": "HyperLinkTemplate" },
    { "field": "date", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Date" },
    { "field": "limitUtilization", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Utilization %" },
    { "field": "velocity", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Velocity %"},
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
    const d = formatDate(dateValue);
    setDate(d);
  }, [dateValue]);
  useEffect(() => {
    console.log("reqBody-->", reqBody);
  }, [dynamicDate]);

  //Mock----------------------------------------------------------------------
  function formatDate(inputDate) {
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);

    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();

    // Format the date in "dd-mm-yyyy" format
    return `${dd}-${mm}-${yyyy}`;
  }

  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    asOnDate: dynamicDate, //"28-09-2023",
    bank: bankD, //"All", //Kotak,
    ro: roD, //"All", // Bhubaneswar
    zone: zoneD, //"All", //East,West,North South
    piu: piuD,
    accountNumber: accNo,
  };

  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    velocityDetails: [
      {
        bank: "Kotak",
        zone: "North",
        ro: "Lucknow (U.P West)",
        PIU: "Agra",
        accountNumber: "2312026853",
        date: "21-05-2020",
        limitUtilization: "79.96",
        velocity: "69.18",
      },
      {
        bank: "Kotak",
        zone: "South",
        ro: "Vijayawada",
        PIU: "Anantapur",
        accountNumber: "1612042457",
        date: "21-05-2020",
        limitUtilization: "100.00",
        velocity: "1.14",
      },
    ],
  };
  const [rows, setRows] = useState(mockRes.velocityDetails);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="float-end">
            <label className="statusOn">As On Date :</label>
            {"  "}
            <input
              id="dateInput"
              className="inputDate"
              type="date"
              value={dateValue || ""}
              onChange={(e) => {
                const E = e.target.value;
                console.log("----->", E);
                setDateValue(E);
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
            {/* style={{ paddingLeft: "35px" }} */}
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
            {/* style={{ paddingLeft: "18px" }} */}
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
            {/* style={{ paddingRight: "30px" }} */}
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
        <hr />
        <div className="row">
          <div className="p-2 tableDiv">
            {/* <DataTable
              columns={columns}
              data={rows} //{data} //
              customClass="velocityTable"
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

export default Velocity;
