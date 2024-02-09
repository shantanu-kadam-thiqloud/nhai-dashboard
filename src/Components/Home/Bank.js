import React, { useState, useEffect } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import PieChart from "../Charts/PieChart";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";
import { DashboardService } from "../../Service/DashboardService";
import { useNavigate } from "react-router-dom";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
const Bank = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  // const [dbdata, setDbdata] = useState([]);
  //const [bankTable, setBankTable] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Decimal, setDecimal] = useState(true);

  const data = {
    decimal: {
      nodalAccountBalance: "10,360.07",
      subsidiaryAccountsCount: 619,
      sanctionLimit: "39,430.72",
      utilizedLimit: "29,297.98",
      unutilizedLimit: "10,132.74",
      utilizationPercentage: "74.30%",
      qtdAccruedInterest: "0.00",
    },
    crore: {
      nodalAccountBalance: "10,360.07",
      subsidiaryAccountsCount: 618,
      sanctionLimit: "39,430.72",
      utilizedLimit: "29,297.98",
      unutilizedLimit: "10,132.74",
      utilizationPercentage: "74.30%",
      qtdAccruedInterest: "0.00",
    },
  };
  const chartData = [
    { category: "Kotak", value: 100, color: "#d4af37" },
    // Add more data points as needed
  ];

  useEffect(() => {
    // setIsLoading(true);
    // FetchBank();
    //-----------------------------------------------------------------
    // Initialize the data to "Core" when the component mounts
    //fetchCoreData("crore");
  }, [asOnDate]);

  // const fetchCoreData = (type) => {
  // setDbdata(data.decimal);
  // const apiUrl = "http://localhost:3007/api/secure/bank";
  // const uuid = localStorage.getItem("UUID");
  // const headers = {
  //   XUuid: uuid,
  // };
  // // Make the Axios GET request with the headers
  // axios
  //   .get(apiUrl, { headers })
  //   .then((response) => {
  //     if (type === "crore") {
  //       setDbdata(response.data.data.crore);
  //     } else {
  //       setDbdata(response.data.data.decimal);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  //};

  // useEffect(() => {
  //   if (dbdata && Object.keys(dbdata).length > 0) {
  //     const bankData = Object.entries(dbdata).map(([key, value]) => ({
  //       parameters: key,
  //       total: value,
  //       kotak: value,
  //     }));
  //     //  setBankTable(bankData);
  //     console.log("bankData", bankData);
  //   }
  // }, [dbdata]);

  const columns = [
    {
      Header: "Parameters",
      accessor: "parameter",
    },
    {
      Header: "Total",
      accessor: Decimal ? "decimal.total" : "crore.total",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Kotak",
      accessor: Decimal ? "decimal.kotak" : "crore.kotak",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
  ];

  const bankTable = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    bankItem: [
      {
        parameter: "Nodal Account Balance",
        decimal: {
          total: "0.00",
          kotak: "0.00",
        },
        crore: {
          total: "0.00",
          kotak: "0.00",
        },
      },
      {
        parameter: "No. of Subsidiary Accounts",
        decimal: {
          total: "71",
          kotak: "71",
        },
        crore: {
          total: "71",
          kotak: "71",
        },
      },
      {
        parameter: "Sanction limit",
        decimal: {
          total: "82,83,05,96,948.49",
          kotak: "82,83,05,96,948.49",
        },
        crore: {
          total: "8,283.06",
          kotak: "8,283.06",
        },
      },
      {
        parameter: "Utilized Limit",
        decimal: {
          total: "57,86,30,56,581.49",
          kotak: "57,86,30,56,581.49",
        },
        crore: {
          total: "5,786.31",
          kotak: "5,786.31",
        },
      },
      {
        parameter: "Un-Utilized Limit",
        decimal: {
          total: "24,96,75,40,367.00",
          kotak: "24,96,75,40,367.00",
        },
        crore: {
          total: "2,496.75",
          kotak: "2,496.75",
        },
      },
      {
        parameter: "Utilized Percentage",
        decimal: {
          total: "69.86",
          kotak: "69.86",
        },
        crore: {
          total: "69.86",
          kotak: "69.86",
        },
      },
      {
        parameter: "QTD Accrued Interest",
        decimal: {
          total: "",
          kotak: "",
        },
        crore: {
          total: "",
          kotak: "",
        },
      },
    ],
  };

  //---------------------------------------------------------------------------------------
  function FetchBank() {
    DashboardService.getBankAndEvents(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
        statusAsOn: ConvertFormat(asOnDate), //"21-05-2020",
        bank: "Kotak",
      },
      (res) => {
        if (res.status === 200) {
          console.log(res.data.bankItem);
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

  return (
    <div>
      <div className="row">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Bank</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">As On Date : </label>
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
              <select name="zone" className="inputDate">
                <option value="All">All</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="MoRTH">MoRTH</option>
                <option value="North East">North East</option>
                <option value="Unmapped">Unmapped</option>
              </select>
              {"  "}
            </div>
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  //fetchCoreData("crore")
                  setDecimal(false);
                }}
              >
                Core
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {
                  //fetchCoreData("decimal")
                  setDecimal(true);
                }}
              >
                Decimal
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <div className="p-2">
            <DataTable
              columns={columns}
              data={bankTable.bankItem}
              customClass="BankTable"
              showSearchBar={false}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
