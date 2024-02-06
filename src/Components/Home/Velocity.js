import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import Hyperlink from "./Hyperlink";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";
import { useNavigate } from "react-router-dom";
import { DashboardService } from "../../Service/DashboardService";

const Velocity = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [piuD, setPiu] = useState("");
  const [accNo, setAccNo] = useState("");
  const [Decimal, setDecimal] = useState(true);
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
          //  target="_blank"
          onClick={() => {
            setRData(row.values);
            setIsOpen(true);
            //  navigate("/NHAI/Hyperlink");
            //window.open("/NHAI/Hyperlink", "_blank");
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
      Header: "Limit Utilization %",
      accessor: "limitUtilization",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Velocity %",
      accessor: "velocity",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
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
  }, [asOnDate]);

  //Mock----------------------------------------------------------------------

  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    asOnDate: ConvertFormat(asOnDate), //"28-09-2023",
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

  //---------------------------------------------------------------------------------------
  function FetchVelocity() {
    DashboardService.getVelocity(
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
              value={asOnDate || ""}
              onChange={(e) => {
                setAsOnDate(e.target.value);
                console.log("->", ConvertFormat(e.target.value));
              }}
            />{" "}
          </div>
        </div>
        <div className="col">
          <div className="float-end"></div>
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
        <hr />
        <div className="row">
          <div className="p-2">
            <DataTable
              columns={columns}
              data={rows} //{data} //
              customClass="velocityTable"
              showSearchBar={false}
            />{" "}
          </div>
        </div>
        <Hyperlink isOpen={isOpen} setModal={setIsOpen} row={rowdata} />
      </div>
    </div>
  );
};

export default Velocity;
