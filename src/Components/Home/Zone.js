import React, { useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
const Zone = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const columns = [
    {
      Header: "Parameters",
      accessor: "parameter",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: "Total",
      accessor: "total",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "East Zone",
      accessor: "eastZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "North Zone",
      accessor: "northZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "South Zone",
      accessor: "southZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "West Zone",
      accessor: "westZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "MoRTH Zone",
      accessor: "morthZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "North East Zone",
      accessor: "northEastZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Un Mapped Zone",
      accessor: "unMappedZone",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
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
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            <label className="float-start pageTitle">Zone</label>
            <div className="float-end">
              <label className="statusOn">As on Date :</label>
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
            customClass="ZoneTable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Zone;
