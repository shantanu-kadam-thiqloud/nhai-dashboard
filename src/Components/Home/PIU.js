import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
const PIU = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const columns = [
    {
      Header: "PIU",
      accessor: "piu",
      //  Cell: ({ value }) => <div style={{ float: "left" }}>{value}</div>,
    },
    {
      Header: "Regional Office", //<div className="float-end fw-bold">Total</div>,
      accessor: "office",
      //Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "No. of Subsidiary Accounts",
      accessor: "subsidiaryAccounts",
    },
    {
      Header: "Sanction Limit",
      accessor: "sanctionLimit",
    },
    {
      Header: "Utilized Limit",
      accessor: "utilizedLimit",
    },
    {
      Header: "Un-Utilized Limit",
      accessor: "unutilizedLimit",
    },
    {
      Header: "Utilized Percentage",
      accessor: "percentage",
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
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            <label className="float-start pageTitle">PIU</label>
            <div className="float-end">
              <label className="statusOn">Status as on :</label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                // onChange={(e) => {
                //   setDate(e.target.value);
                // }}
                defaultValue={currentDate}
              />{" "}
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
            data={data}
            customClass="PIUTable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default PIU;
