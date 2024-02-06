import React from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
const Ageing = () => {
  const title = "> 180 Days";
  const columns = [
    {
      Header: "Parameters",
      accessor: "parameter",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: <div className="float-end fw-bold">Total</div>,
      accessor: "total",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className="float-end fw-bold">0-30 Days</div>,
      accessor: "day30",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className="float-end fw-bold">31-90 Days</div>,
      accessor: "day90",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className="float-end fw-bold">91-180 Days</div>,
      accessor: "day180",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: <div className="float-end fw-bold">{title}</div>,
      accessor: "daymore",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
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
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            <label className="float-start pageTitle">Ageing</label>
            <div className="float-end">
              <label className="statusOn">Bank :</label>{" "}
              <select name="bank" className="inputDate">
                <option value="Kotak">Kotak</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
              <label className="statusOn">Zone :</label>{" "}
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
              <label className="statusOn">RO :</label>{" "}
              <select name="ro" className="inputDate">
                <option value="All">All</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
              <label className="statusOn">PIU :</label>{" "}
              <select name="piu" className="inputDate">
                <option value="All">All</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
              >
                Core
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => {}}
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
            data={data}
            customClass="AgeingTable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Ageing;
