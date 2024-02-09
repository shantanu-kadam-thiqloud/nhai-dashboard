import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import { v4 as uuid } from "uuid";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import { useNavigate } from "react-router-dom";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";

const Ageing = () => {
  const [Decimal, setDecimal] = useState(true);
  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("All");
  const [zoneD, setZone] = useState("All");
  const [piuD, setPiu] = useState("All");
  const title = "> 180 Days";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [mockRes, setMockRes] = useState("");
  const [rows, setRows] = useState([]); //mockRes.zones//data
  const columns = [
    {
      Header: "Parameters",
      id: "parameter",
      accessor: "parameter",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: <div className=" fw-bold">Total</div>,
      id: "total",
      accessor: (row) => {
        if (row.parameter === "No. of Subsidiary Accounts") {
          return (
            <a
              href="#"
              onClick={() => {
                console.log("click618");
              }}
              className="text-black"
            >
              {row.total}
            </a>
          );
        } else {
          return Decimal ? row.decimal.total : row.crore.total;
        }
      },
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className=" fw-bold">0-30 Days</div>,
      id: "belowThirtyDays",
      accessor: (row) => {
        if (row.parameter === "No. of Subsidiary Accounts") {
          return (
            <a href="#" onClick={() => {}} className="text-black">
              {row.belowThirtyDays}
            </a>
          );
        } else {
          return Decimal
            ? row.decimal.belowThirtyDays
            : row.crore.belowThirtyDays;
        }
      },
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className=" fw-bold">31-90 Days</div>,
      id: "belowNintyDays",
      accessor: (row) => {
        if (row.parameter === "No. of Subsidiary Accounts") {
          return (
            <a href="#" onClick={() => {}} className="text-black">
              {row.belowNintyDays}
            </a>
          );
        } else {
          return Decimal
            ? row.decimal.belowNintyDays
            : row.crore.belowNintyDays;
        }
      },
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className=" fw-bold">91-180 Days</div>,
      id: "belowOneEightyDays",
      accessor: (row) => {
        if (row.parameter === "No. of Subsidiary Accounts") {
          return (
            <a href="#" onClick={() => {}} className="text-black">
              {row.belowOneEightyDays}
            </a>
          );
        } else {
          return Decimal
            ? row.decimal.belowOneEightyDays
            : row.crore.belowOneEightyDays;
        }
      },
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className=" fw-bold">{title}</div>,
      id: "aboveOneEightyDays",
      accessor: (row) => {
        if (row.parameter === "No. of Subsidiary Accounts") {
          return (
            <a href="#" onClick={() => {}} className="text-black">
              {row.aboveOneEightyDays}
            </a>
          );
        } else {
          return Decimal
            ? row.decimal.aboveOneEightyDays
            : row.crore.aboveOneEightyDays;
        }
      },
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    // {
    //   Header: "Is Active",
    //   accessor: "isActive",
    // },
  ];

  const data = [
    {
      id: 1,
      parameter: "No of Subsidiary Accounts",
      total: "795",
      day30: "236",
      day90: "141",
      day180: "88",
      daymore: "329",
    },
    {
      id: 2,
      parameter: "Sanction Limit",
      total: "64,730.35",
      day30: "45,017.73",
      day90: "11,794.44",
      day180: "4,973.21",
      daymore: "2,944.97",
    },
    {
      id: 3,
      parameter: "Utilized Limit",
      total: "56,695.05",
      day30: "39,233.02",
      day90: "10,672.52",
      day180: "4,415.08",
      daymore: "2,374.44",
    },
    {
      id: 4,
      parameter: "Un-Utilized Limit",
      total: "8,035.30",
      day30: "5,784.72",
      day90: "1,121.92",
      day180: "558.13",
      daymore: "570.53",
    },
    {
      id: 5,
      parameter: "Utilization Percentage",
      total: "87.59%",
      day30: "87.15%",
      day90: "90.49%",
      day180: "88.78%",
      daymore: "80.63%",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    FetchAgeing();
  }, []);

  //Mock----------------------------------------------------------------------
  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "NHAI",
    date: "21-01-2020",
    bank: "All", //Kotak,
    zone: zoneD,
    ro: roD,
    piu: piuD,
  };

  // const mockRes = {
  //   responseMetaData: {
  //     status: "200",
  //     message: "Success",
  //   },
  //   ageingItem: [
  //     {
  //       parameter: "No. of Subsidiary Accounts",
  //       total: "618",
  //       belowThirtyDays: "130",
  //       belowNintyDays: "193",
  //       belowOneEightyDays: "101",
  //       aboveOneEightyDays: "193",
  //     },
  //     {
  //       parameter: "Sanction Limit",
  //       decimal: {
  //         total: "3,71,77,040.11",
  //         belowThirtyDays: "1,84,02,973.41",
  //         belowNintyDays: "4,58,97,059.47",
  //         belowOneEightyDays: "1,88,83,286.84",
  //         aboveOneEightyDays: "1,25,79,247.00",
  //       },
  //       crore: {
  //         total: "39,430.71",
  //         belowThirtyDays: "3,610.84",
  //         belowNintyDays: "11,644.58",
  //         belowOneEightyDays: "13,071.88",
  //         aboveOneEightyDays: "10,321.25",
  //       },
  //     },
  //     {
  //       parameter: "Utilized Limit",
  //       decimal: {
  //         total: "7,98,09,291.66",
  //         belowThirtyDays: "3,89,50,336.32",
  //         belowNintyDays: "7,13,16,033.40",
  //         belowOneEightyDays: "9,91,99,443.94",
  //         aboveOneEightyDays: "3,45,36,781.00",
  //       },
  //       crore: {
  //         total: "29,297.98",
  //         belowThirtyDays: "2,393.90",
  //         belowNintyDays: "8,6171.31",
  //         belowOneEightyDays: "9,569.91",
  //         aboveOneEightyDays: "7,993.45",
  //       },
  //     },
  //     {
  //       parameter: "Un-Utilized Limit",
  //       decimal: {
  //         total: "2,73,67,748.45",
  //         belowThirtyDays: "6,94,52,637.09",
  //         belowNintyDays: "7,45,81,026.07",
  //         belowOneEightyDays: "1,96,83,842.90",
  //         aboveOneEightyDays: "7,80,42,466.00",
  //       },
  //       crore: {
  //         total: "10,132.73",
  //         belowThirtyDays: "1,216.95",
  //         belowNintyDays: "3,027.45",
  //         belowOneEightyDays: "3,501.96",
  //         aboveOneEightyDays: "2,327.80",
  //       },
  //     },
  //     {
  //       parameter: "Utilized Percentage",
  //       decimal: {
  //         total: "74.30",
  //         belowThirtyDays: "66.30",
  //         belowNintyDays: "74.00",
  //         belowOneEightyDays: "73.21",
  //         aboveOneEightyDays: "77.45",
  //       },
  //       crore: {
  //         total: "66.30",
  //         belowThirtyDays: "66.30",
  //         belowNintyDays: "74.00",
  //         belowOneEightyDays: "73.21",
  //         aboveOneEightyDays: "77.45",
  //       },
  //     },
  //   ],
  // };

  //---------------------------------------------------------------------------------------
  function FetchAgeing() {
    DashboardService.getAgeing(
      reqBody,
      (res) => {
        if (res.status === 200) {
          setMockRes(res.data);
          setRows(res.data.ageingItem);
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

  function per(total, value) {
    if (total && value) {
      total = parseFloat(total.replace(/,/g, ""));
      value = parseFloat(value.replace(/,/g, ""));
      var per = 0;
      per = (value / total) * 100;
      console.log("Ans->", per);
      return per;
    } else {
      return 0;
    }
  }
  const utilizationPercentage =
    mockRes == "" ? "" : mockRes.ageingItem[4].decimal;
  const BarchartData = [
    {
      category: "Total",
      value: utilizationPercentage.total, //20,
      color: "#E41A1C",
    },
    {
      category: `0-30 \n Days`,
      value: utilizationPercentage.belowThirtyDays, //15,
      color: "#4DAF4A",
    },
    {
      category: "31-90 \n Days",
      value: utilizationPercentage.belowNintyDays, //8,
      color: "#377EB8",
    },
    {
      category: "91-180 \n Days",
      value: utilizationPercentage.belowOneEightyDays, //13,
      color: "#FF7F00",
    },
    {
      category: title,
      value: utilizationPercentage.aboveOneEightyDays, //10,
      color: "#984EA3",
    },
  ];
  const AccountPercentage = mockRes == "" ? "" : mockRes.ageingItem[0];
  const AccountchartData = [
    {
      category: "Total",
      value: per(AccountPercentage.total, AccountPercentage.total), //20,
      color: "#E41A1C",
    },
    {
      category: "0-30 Days",
      value: per(AccountPercentage.total, AccountPercentage.belowThirtyDays), //15,
      color: "#4DAF4A",
    },
    {
      category: "31-90 Days",
      value: per(AccountPercentage.total, AccountPercentage.belowNintyDays), //8,
      color: "#377EB8",
    },
    {
      category: "91-180 Days",
      value: per(AccountPercentage.total, AccountPercentage.belowOneEightyDays), //13,
      color: "#FF7F00",
    },
    {
      category: title,
      value: per(AccountPercentage.total, AccountPercentage.aboveOneEightyDays), //10,
      color: "#984EA3",
    },
  ];
  const AllocatedPercentage =
    mockRes == "" ? "" : mockRes.ageingItem[1].decimal;
  const AllocatedchartData = [
    {
      category: "Total",
      value: per(AllocatedPercentage.total, AllocatedPercentage.total), //20,
      color: "#E41A1C",
    },
    {
      category: "0-30 Days",
      value: per(
        AllocatedPercentage.total,
        AllocatedPercentage.belowThirtyDays
      ), //15,
      color: "#4DAF4A",
    },
    {
      category: "31-90 Days",
      value: per(AllocatedPercentage.total, AllocatedPercentage.belowNintyDays), //8,
      color: "#377EB8",
    },
    {
      category: "91-180 Days",
      value: per(
        AllocatedPercentage.total,
        AllocatedPercentage.belowOneEightyDays
      ), //13,
      color: "#FF7F00",
    },
    {
      category: title,
      value: per(
        AllocatedPercentage.total,
        AllocatedPercentage.aboveOneEightyDays
      ), //10,
      color: "#984EA3",
    },
  ];

  return (
    <div>
      <div className="row">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Ageing</label> */}
            <div className="float-start dashboardLabels">
              {"  "}
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
                <option value="MoRTH">MoRTH</option>
                <option value="North East">North East</option>
                <option value="Unmapped">Unmapped</option>
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
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
              <label className="statusOn">PIU : </label>{" "}
              <select
                name="piu"
                className="inputDate"
                onChange={(e) => {
                  setPiu(e.target.value);
                }}
              >
                <option value="All">All</option>
                <option value=""></option>
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
            customClass="AgeingTable"
            showSearchBar={false}
          />{" "}
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-4 mb-4 mt-4">
            <div className="statusOn">Utilization %</div>

            <BarChart
              chartdata={BarchartData}
              name="Ageing"
              chartid="account"
            />
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mt-4">
            <div classname="statusOn">No. of Account %</div>

            <PieChart data={AccountchartData} chartid="account" />
          </div>
          <div className="col-lg-4 col-md-4 mb-4 mt-4">
            <div classname="statusOn">Allocated Limit. %</div>

            <PieChart data={AllocatedchartData} chartid="allocated" />
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Ageing;
