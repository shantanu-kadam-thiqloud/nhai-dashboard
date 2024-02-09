import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import { v4 as uuid } from "uuid";
import PieChart from "../Charts/PieChart";
import BarChart from "../Charts/BarChart";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/CommonFunction";

const Zone = ({ setTab }) => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [bankD, setBank] = useState("");
  const [Decimal, setDecimal] = useState(true);

  function columnClick(columnName) {
    if (columnName == "No. of Regional Offices") {
      setTab("RO");
    } else if (columnName === "No. of PIU") {
      setTab("PIU");
    } else {
      console.log("download");
    }
  }

  const columns = [
    {
      Header: "Parameters",
      accessor: "parameter",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: "Total",
      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              className="text-black float-end"
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
            >
              {row.total}
            </a>
          );
        } else {
          return Decimal ? row.decimal.total : row.crore.total;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "East Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              className="text-black float-end"
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
            >
              {row.eastZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.eastZone : row.crore.eastZone;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "North Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              className="text-black float-end"
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
            >
              {row.northZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.northZone : row.crore.northZone;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "South Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              className="text-black float-end"
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
            >
              {row.southZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.total : row.crore.southZone;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "West Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
              className="text-black float-end"
            >
              {row.westZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.westZone : row.crore.westZone;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "MoRTH Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
              className="text-black float-end"
            >
              {row.MoRTH}
            </a>
          );
        } else {
          return Decimal ? row.decimal.MoRTH : row.crore.MoRTH;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "North East Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
              className="text-black float-end"
            >
              {row.northEastZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.northEastZone : row.crore.northEastZone;
        }
      },
      Cell: ({ value }) => (
        <div className="float-end wrap-10-char">{value}</div>
      ),
    },
    {
      Header: "Un Mapped Zone",

      accessor: (row) => {
        if (
          row.parameter === "No. of Regional Offices" ||
          row.parameter === "No. of PIU" ||
          row.parameter === "No. of Subsidiary Accounts"
        ) {
          return (
            <a
              className="text-black float-end"
              href="#"
              onClick={() => {
                columnClick(row.parameter);
              }}
            >
              {row.unMappedZone}
            </a>
          );
        } else {
          return Decimal ? row.decimal.unMappedZone : row.crore.unMappedZone;
        }
      },
      Cell: ({ value }) => (
        <div className=" wrap-10-char float-end">{value}</div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      parameter: "No. of Regional Offices",
      total: "25",
      eastZone: "6",
      northZone: "8",
      southZone: "6",
      westZone: "3",
      morthZone: "1",
      northEastZone: "1",
      unMappedZone: "1",
    },
    {
      id: 2,
      parameter: "No. of PIU",
      total: "151",
      eastZone: "27",
      northZone: "58",
      southZone: "38",
      westZone: "23",
      morthZone: "3",
      northEastZone: "1",
      unMappedZone: "1",
    },
    {
      id: 3,
      parameter: "No. of Subsidiary Accounts",
      total: "793",
      eastZone: "97",
      northZone: "321",
      southZone: "233",
      westZone: "114",
      morthZone: "20",
      northEastZone: "1",
      unMappedZone: "7",
    },
    {
      id: 4,
      parameter: "Sanction Limit",
      total: "64,072.48",
      eastZone: "5,543.64",
      northZone: "18,805.72",
      southZone: "22,822.79",
      westZone: "16,082.14",
      morthZone: "776.05",
      northEastZone: "1.47",
      unMappedZone: "40.76",
    },
    {
      id: 5,
      parameter: "Utilized Limit",
      total: "56,500.77",
      eastZone: "4,460.04",
      northZone: "15,991.37",
      southZone: "20,487.66",
      westZone: "14,824.10",
      morthZone: "737.05",
      northEastZone: "0.55",
      unMappedZone: "0.00",
    },
    {
      id: 6,
      parameter: "Un-Utilized Limit",
      total: "7,571.71",
      eastZone: "1,083.60",
      northZone: "2,814.25",
      southZone: "2,335.13",
      westZone: "1,258.04",
      morthZone: "39.00",
      northEastZone: "0.92",
      unMappedZone: "40.76",
    },
    {
      id: 7,
      parameter: "Utilization Percentage",
      total: "88.18",
      eastZone: "80.45",
      northZone: "85.04",
      southZone: "89.77",
      westZone: "92.18",
      morthZone: "94.97",
      northEastZone: "37.23",
      unMappedZone: "0.00",
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
    statusAsOn: ConvertFormat(asOnDate), //"28-09-2023",
    bank: bankD, //"All", //Kotak,
  };

  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    zones: [
      {
        zone: "eastZone",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "36,10,84,02,973.41",
          utilizedLimit: "23,93,89,50,336.32",
          unUtilizedLimit: "12,16,94,52,637.09",
          utilizedPercentage: "66.30",
        },
        crore: {
          sanctionLimit: "3,610.84",
          utilizedLimit: "2,393.90",
          unUtilizedLimit: "1,216.95",
          utilizedPercentage: "66.30",
        },
      },
      {
        zone: "total",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "3,94,30,71,77,040.11",
          utilizedLimit: "2,92,97,98,09,291.66",
          unUtilizedLimit: "1,01,32,73,67,748.45",
          utilizedPercentage: "74.30",
        },
        crore: {
          sanctionLimit: "39,430.71",
          utilizedLimit: "29,297.98",
          unUtilizedLimit: "10,132.73",
          utilizedPercentage: "66.30",
        },
      },
      {
        zone: "northZone",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "1,16,44,58,97,059.47",
          utilizedLimit: "86,17,13,16,033.40",
          unUtilizedLimit: "30,27,45,81,026.07",
          utilizedPercentage: "74.00",
        },
        crore: {
          sanctionLimit: "11,644.58",
          utilizedLimit: "8,6171.31",
          unUtilizedLimit: "3,027.45",
          utilizedPercentage: "74.00",
        },
      },
      {
        zone: "southZone",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "1,30,71,88,83,286.84",
          utilizedLimit: "95,69,91,99,443.94",
          unUtilizedLimit: "35,01,96,83,842.90",
          utilizedPercentage: "73.21",
        },
        crore: {
          sanctionLimit: "13,071.88",
          utilizedLimit: "9,569.91",
          unUtilizedLimit: "3,501.96",
          utilizedPercentage: "73.21",
        },
      },
      {
        zone: "westZone",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "1,03,21,25,79,247.00",
          utilizedLimit: "79,93,45,36,781.00",
          unUtilizedLimit: "23,27,80,42,466.00",
          utilizedPercentage: "77.45",
        },
        crore: {
          sanctionLimit: "10,321.25",
          utilizedLimit: "7,993.45",
          unUtilizedLimit: "2,327.80",
          utilizedPercentage: "77.45",
        },
      },
      {
        zone: "MoRTH",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "7,80,67,03,535.39",
          utilizedLimit: "7,23,17,78,913.00",
          unUtilizedLimit: "57,49,24,622.39",
          utilizedPercentage: "92.64",
        },
        crore: {
          sanctionLimit: "78,067.03",
          utilizedLimit: "72,317.78",
          unUtilizedLimit: "5,749.24",
          utilizedPercentage: "92.64",
        },
      },
      {
        zone: "northEastZone",
        countofRegionalOffices: 7,
        countofPIU: 24,
        countofSubsidiaryAccounts: 82,
        decimal: {
          sanctionLimit: "1,47,10,938.00",
          utilizedLimit: "40,27,784.00",
          unUtilizedLimit: "1,06,83,154.00",
          utilizedPercentage: "27.38",
        },
        crore: {
          sanctionLimit: "1,471.09",
          utilizedLimit: "40,277.84",
          unUtilizedLimit: "1,216.95",
          utilizedPercentage: "27.38",
        },
      },
    ],
  };

  const zoneJson = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    zones: [
      {
        parameter: "No. of Regional Offices",
        total: "7",
        eastZone: "7",
        northZone: "7",
        southZone: "7",
        westZone: "7",
        MoRTH: "7",
        northEastZone: "7",
        unMappedZone: "7",
      },
      {
        parameter: "No. of PIU",
        total: "24",
        eastZone: "24",
        northZone: "24",
        southZone: "24",
        westZone: "24",
        MoRTH: "24",
        northEastZone: "24",
        unMappedZone: "24",
      },
      {
        parameter: "No. of Subsidiary Accounts",
        total: "618", //"82",
        eastZone: "82",
        northZone: "257", //"82",
        southZone: "156", //"82",
        westZone: "100", //"82",
        MoRTH: "22", //"82",
        northEastZone: "1", //"82",
        unMappedZone: "82",
      },
      {
        parameter: "Sanction Limit",
        decimal: {
          total: "30,71,77,040.11", //"39,430.72", //
          eastZone: "1,84,02,973.41", //"3,610.84", //
          northZone: "4,58,97,059.47", //"11,644.59", //
          southZone: "1,88,83,286.84", //"13,071.89", //
          westZone: "1,25,79,247.00", //"10,321.26", //
          MoRTH: "8,67,03,535.39", //"780.67", //
          northEastZone: "1,47,10,938.00", //"1.47", //
          unMappedZone: "1,47,10,938.00",
        },
        crore: {
          total: "39,430.71",
          eastZone: "3,610.84",
          northZone: "11,644.58",
          southZone: "13,071.88",
          westZone: "10,321.25",
          MoRTH: "78,067.03",
          northEastZone: "1,471.09",
          unMappedZone: "1,471.09",
        },
      },
      {
        parameter: "Utilized Limit",
        decimal: {
          total: "7,98,09,291.66",
          eastZone: "3,89,50,336.32",
          northZone: "7,13,16,033.40",
          southZone: "9,91,99,443.94",
          westZone: "3,45,36,781.00",
          MoRTH: "3,17,78,913.00",
          northEastZone: "40,27,784.00",
          unMappedZone: "40,27,784.00",
        },
        crore: {
          total: "29,297.98",
          eastZone: "2,393.90",
          northZone: "8,6171.31",
          southZone: "9,569.91",
          westZone: "7,993.45",
          MoRTH: "72,317.78",
          northEastZone: "40,277.84",
          unMappedZone: "40,277.84",
        },
      },
      {
        parameter: "Un-Utilized Limit",
        decimal: {
          total: "2,73,67,748.45",
          eastZone: "1,94,52,637.09",
          northZone: "27,45,81,026.07",
          southZone: "1,96,83,842.90",
          westZone: "7,80,42,466.00",
          MoRTH: "7,49,24,622.39",
          northEastZone: "1,06,83,154.00",
          unMappedZone: "1,06,83,154.00",
        },
        crore: {
          total: "10,132.73",
          eastZone: "1,216.95",
          northZone: "3,027.45",
          southZone: "3,501.96",
          westZone: "2,327.80",
          MoRTH: "5,749.24",
          northEastZone: "1,216.95",
          unMappedZone: "1,216.95",
        },
      },
      {
        parameter: "Utilization Percentage",
        decimal: {
          total: "74.30",
          eastZone: "66.30",
          northZone: "74.00",
          southZone: "73.21",
          westZone: "77.45",
          MoRTH: "92.64",
          northEastZone: "27.38",
          unMappedZone: "27.38",
        },
        crore: {
          total: "66.30",
          eastZone: "66.30",
          northZone: "74.00",
          southZone: "73.21",
          westZone: "77.45",
          MoRTH: "92.64",
          northEastZone: "27.38",
          unMappedZone: "27.38",
        },
      },
    ],
  };
  function per(total, value) {
    total = parseFloat(total.replace(/,/g, ""));
    value = parseFloat(value.replace(/,/g, ""));
    var per = 0;
    per = (value / total) * 100;
    console.log("Ans->", per);
    return per;
  }
  const chartData = [
    { category: "East", value: 20, color: "#E41A1C" },
    { category: "MoRth", value: 15, color: "#4DAF4A" },
    { category: "North \n East", value: 8, color: "#377EB8" },
    { category: "North", value: 13, color: "#FF7F00" },
    { category: "South", value: 10, color: "#FFFF33" },
    { category: "West", value: 7, color: "#984EA3" },
    // Add more data points as needed
  ];
  const utilizationPercentage = zoneJson.zones[6].decimal;
  const BarchartData = [
    {
      category: "East",
      value: utilizationPercentage.eastZone, //20,
      color: "#E41A1C",
    },
    {
      category: "MoRth",
      value: utilizationPercentage.MoRTH, //15,
      color: "#4DAF4A",
    },
    {
      category: "North \n East",
      value: utilizationPercentage.northEastZone, //8,
      color: "#377EB8",
    },
    {
      category: "North",
      value: utilizationPercentage.northZone, //13,
      color: "#FF7F00",
    },
    {
      category: "South",
      value: utilizationPercentage.southZone, //10,
      color: "#FFFF33",
    },
    {
      category: "West",
      value: utilizationPercentage.westZone, //7,
      color: "#984EA3",
    },
    // Add more data points as needed
  ];
  const AccountPercentage = zoneJson.zones[2];
  const AccountchartData = [
    {
      category: "East",
      value: per(AccountPercentage.total, AccountPercentage.eastZone), //20,
      color: "#E41A1C",
    },
    {
      category: "MoRth",
      value: per(AccountPercentage.total, AccountPercentage.MoRTH), //15,
      color: "#4DAF4A",
    },
    {
      category: "North \n East",
      value: per(AccountPercentage.total, AccountPercentage.northEastZone), //8,
      color: "#377EB8",
    },
    {
      category: "North",
      value: per(AccountPercentage.total, AccountPercentage.northZone), //13,
      color: "#FF7F00",
    },
    {
      category: "South",
      value: per(AccountPercentage.total, AccountPercentage.southZone), //10,
      color: "#FFFF33",
    },
    {
      category: "West",
      value: per(AccountPercentage.total, AccountPercentage.westZone), //7,
      color: "#984EA3",
    },
    // Add more data points as needed
  ];
  const AllocatedPercentage = zoneJson.zones[3].decimal;
  const AllocatedchartData = [
    {
      category: "East",
      value: per(AllocatedPercentage.total, AllocatedPercentage.eastZone), //20,
      color: "#E41A1C",
    },
    {
      category: "MoRth",
      value: per(AllocatedPercentage.total, AllocatedPercentage.MoRTH), //15,
      color: "#4DAF4A",
    },
    {
      category: "North \n East",
      value: per(AllocatedPercentage.total, AllocatedPercentage.northEastZone), //8,
      color: "#377EB8",
    },
    {
      category: "North",
      value: per(AllocatedPercentage.total, AllocatedPercentage.northZone), //13,
      color: "#FF7F00",
    },
    {
      category: "South",
      value: per(AllocatedPercentage.total, AllocatedPercentage.southZone), //10,
      color: "#FFFF33",
    },
    {
      category: "West",
      value: per(AllocatedPercentage.total, AllocatedPercentage.westZone), //7,
      color: "#984EA3",
    },
    // Add more data points as needed
  ];
  const [rows, setRows] = useState(zoneJson.zones); //mockRes.zones//data

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Zone</label> */}
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
                  console.log("-> ", ConvertFormat(e.target.value));
                }}
              />{" "}
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
            data={rows} //{data} //
            customClass="ZoneTable"
            showSearchBar={false}
          />{" "}
        </div>
        {/* -------------------------------------------------------------------------- */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-4 mb-4 mt-4">
            <div className="statusOn">Utilization %</div>

            <BarChart chartdata={BarchartData} name="Zone" chartid="account" />
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

export default Zone;
