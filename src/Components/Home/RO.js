import React, { useState, useEffect } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const RO = () => {
  const [dynamicDate, setDate] = useState(new Date());
  const currentDate = new Date().toISOString().split("T")[0];
  const [dbdata, setDbdata] = useState([]);
  const [reginoalTable, setReginoalTable] = useState([]);
  const [corDecimalType, setcoreDecimalType] = useState("");

  useEffect(() => {
    // Initialize the data to "Core" when the component mounts
    fetchCoreData("crore");
  }, []);

  const fetchCoreData = (type) => {
    const apiUrl = "http://localhost:3007/api/secure/reginolOffice";
    const uuid = localStorage.getItem("UUID");
    const headers = {
      XUuid: uuid,
    };

    // Make the Axios GET request with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setDbdata(response.data.data.regionWiseData);
        if (type === "crore") {
          setcoreDecimalType("crore");
        } else {
          setcoreDecimalType("decimal");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (dbdata && Object.keys(dbdata).length > 0) {
      // const reginoalTable = Object.entries(dbdata).map(([key, value]) => ({
      //   parameters: key,
      //   total: value,
      //   kotak: value
      // }));
      const reginaolData = dbdata.map((item, index) => ({
        id: index + 1,
        office: item.regionalOffice,
        zone: item.zone,
        piu: item.countOfPIU,
        subsidiaryAccounts: item.countOfSubsidiaryAccounts,
        sanctionLimit:
          corDecimalType === "crore"
            ? item.crore.sanctionLimit
            : item.decimal.sanctionLimit,
        utilizedLimit:
          corDecimalType === "crore"
            ? item.crore.utilizedLimit
            : item.decimal.utilizedLimit,
        unutilizedLimit:
          corDecimalType === "crore"
            ? item.crore.unUtilizedLimit
            : item.decimal.unUtilizedLimit,
        percentage:
          corDecimalType === "crore"
            ? item.crore.utilizedPercent
            : item.decimal.utilizedPercent,
      }));
      setReginoalTable(reginaolData);
      console.log("reginoalTable", reginaolData);
    }
  }, [dbdata]);
  const columns = [
    { field: "id", headerName: "Sr no", width: 90 },
    {
      field: "office",
      headerName: "Regional Office",
      width: 150,
      editable: true,
    },
    {
      field: "zone",
      headerName: "Zone",
      width: 150,
      editable: true,
    },
    {
      field: "piu",
      headerName: "No. of PIU",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "subsidiaryAccounts",
      headerName: "No. of Subsidiary Accounts",
      sortable: true,
      width: 160,
    },
    // Extra fields
    {
      field: "sanctionLimit",
      headerName: "Sanction Limit",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "utilizedLimit",
      headerName: "Utilized Limit",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "unutilizedLimit", // Field for "Un-Utilized Limit"
      headerName: "Un-Utilized Limit",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "percentage", // Field for "Utilized Percentage"
      headerName: "Utilized Percentage",
      type: "number",
      width: 120,
      editable: true,
    },
  ];

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">RO</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Status As On : </label>
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
              <label className="statusOn">Bank : </label>{" "}
              <select name="bank" className="inputDate">
                <option value="Kotak">Kotak</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              {"  "}
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
                onClick={() => fetchCoreData("crore")}
              >
                Crore
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => fetchCoreData("decimal")}
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
          {/* <DataTable
            columns={columns}
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "} */}
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={reginoalTable}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              disableSelectionOnClick={true}
              className="custom-datagrid"
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default RO;
