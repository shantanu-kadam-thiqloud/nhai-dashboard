import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Hyperlink from "./Hyperlink";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";
const LimitLedger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [piuD, setPiu] = useState("");
  const [accNo, setAccNo] = useState("");
  const [typeTransaction, setTypeTransaction] = useState("");
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
      Cell: ({ row }) => (
        <a
          href="#"
          onClick={() => {
            setRData(row.values);
            setIsOpen(true);
          }}
          className="text-black"
        >
          {row.values.PIU}
        </a>
      ),
    },

    {
      Header: "Account Number",
      accessor: "accountNumber",
      Cell: ({ row }) => (
        <a
          href="#"
          onClick={() => {
            //  navigate("/NHAI/Hyperlink");
            setRData(row.values);
            setIsOpen(true);
          }}
          className="text-black float-end"
        >
          {row.values.accountNumber}
        </a>
      ),
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
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Limit Reduced",
      accessor: "limitReduced",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },

    {
      Header: "Limit Utilized",
      accessor: "limitUtilized",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Returns",
      accessor: "returns",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Limit Balance",
      accessor: "limitBalance",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Transaction Type",
      accessor: "transactionType",
    },
  ];
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
  }, [fromDate, toDate]);

  //Mock----------------------------------------------------------------------

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
    fromDate: ConvertFormat(fromDate), //"01-04-2017",
    toData: ConvertFormat(toDate), //"01-09-2023",
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
  //---------------------------------------------------------------------------------------
  function FetchEvents() {
    DashboardService.getLimitledger(
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
  const [rows, setRows] = useState(mockRes.limitLedgerDetails);
  return (
    <div>
      <div className="row p-1">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="float-end ">
            <label className="statusOn">From :</label>
            {"  "}
            <input
              id="dateInput"
              className="inputDate"
              type="date"
              value={fromDate || ""}
              onChange={(e) => {
                setFromDate(e.target.value);
                console.log("->", ConvertFormat(e.target.value));
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
              value={toDate || ""}
              onChange={(e) => {
                setToDate(e.target.value);
                console.log("->", ConvertFormat(e.target.value));
              }}
            />{" "}
          </div>
        </div>
        <div className="col">
          <div className="float-end">{"  "}</div>
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
          <div className="p-2">
            <DataTable
              columns={columns}
              data={rows} //{data} //
              customClass="LimitTable"
              showSearchBar={false}
            />{" "}
          </div>
        </div>
        <Hyperlink isOpen={isOpen} setModal={setIsOpen} row={rowdata} />
      </div>
    </div>
  );
};

export default LimitLedger;
