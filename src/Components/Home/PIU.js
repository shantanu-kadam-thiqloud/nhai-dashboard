import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { DashboardService } from "../../Service/DashboardService";
import { useNavigate } from "react-router-dom";
import Spinner from "../HtmlComponents/Spinner";

const PIU = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [bankD, setBank] = useState("All");
  const [roD, setRo] = useState("All");
  const [zoneD, setZone] = useState("All");
  const [Decimal, setDecimal] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const columns = [
    {
      Header: "PIU",
      accessor: "piu",

      Cell: ({ row }) => (
        <a href="#" onClick={() => {}} className="text-black">
          {row.values.piu}
        </a>
      ),
    },
    {
      Header: "Regional Office",
      accessor: "regionalOffice",
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "No. of Subsidiary Accounts",
      accessor: "countOfSubsidiaryAccounts",
      Cell: ({ row }) => (
        <a href="#" onClick={() => {}} className="text-black float-end">
          {row.values.countOfSubsidiaryAccounts}
        </a>
      ),
    },
    {
      Header: "Sanction Limit",
      accessor: Decimal ? "decimal.sanctionLimit" : "crore.sanctionLimit",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Utilized Limit",
      accessor: Decimal ? "decimal.utilizedLimit" : "crore.utilizedLimit",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Un-Utilized Limit",
      accessor: Decimal ? "decimal.unutilizedLimit" : "crore.unutilizedLimit",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Utilized Percentage",
      accessor: Decimal
        ? "decimal.utilizationPercentage"
        : "crore.utilizationPercentage",
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
    setIsLoading(true);
    FetchPIU();
  }, [asOnDate, zoneD, roD]);

  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    regionWiseData: [
      {
        piu: "",
        regionalOffice: "Total",
        zone: "",
        countOfPIU: "130",
        countOfSubsidiaryAccounts: "168",
        crore: {
          sanctionLimit: "39,430.72",
          utilizedLimit: "29,297.98",
          unUtilizedLimit: "10,132.74",
          utilizedPercent: "74.30%",
        },
        decimal: {
          sanctionLimit: "30,71,77,040.11",
          utilizedLimit: "7,98,09,291.66",
          unUtilizedLimit: "2,73,67,748.45",
          utilizedPercent: "74.30%",
        },
      },
      {
        piu: "Balasore",
        regionalOffice: "Bhubaneswar",
        zone: "East",
        countOfPIU: "6",
        countOfSubsidiaryAccounts: "18",
        crore: {
          sanctionLimit: "394.00",
          utilizedLimit: "324.81",
          unUtilizedLimit: "69.19",
          utilizedPercent: "82.44%",
        },
        decimal: {
          sanctionLimit: "4,00,43,560.88",
          utilizedLimit: "4,81,40,501.00",
          unUtilizedLimit: "9,19,03,059.88",
          utilizedPercent: "82.44%",
        },
      },
    ],
  };

  //---------------------------------------------------------------------------------------
  function FetchPIU() {
    debugger;
    DashboardService.getPIU(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
        statusAsOn: ConvertFormat(asOnDate), //"21-05-2020", //
        ro: roD, //"All",
        bank: bankD, //"All",
        zone: zoneD, //"North",
      },
      (res) => {
        if (res.status === 200) {
          setRows(res.data.regionWiseData);
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
            {/* <label className="float-start pageTitle">PIU</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Status As On : </label>
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
              <label className="statusOn">Zone : </label>{" "}
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
              <label className="statusOn">RO : </label>{" "}
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
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  setDecimal(false);
                }}
              >
                Crore
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  setDecimal(true);
                }}
              >
                Decimal
              </button>{" "}
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
          <DataTable
            columns={columns}
            data={rows} //{data}
            customClass="PIUTable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default PIU;
