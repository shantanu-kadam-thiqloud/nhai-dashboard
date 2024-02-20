import React, { useState, useEffect } from "react";
import DataTable from "../HtmlComponents/DataTable";
import "../../Assets/Css/Dashboard.css";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {
  DateFormatFunction,
  ConvertFormat,
  useZoneDataList,
} from "../HtmlComponents/CommonFunction";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";
import { useNavigate } from "react-router-dom";

const RO = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [zoneD, setZoneD] = useState("All");
  const [reginoalTable, setReginoalTable] = useState([]);
  const [Decimal, setDecimal] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  //---------------------------------------------------------------------------------------
  const zoneList = useZoneDataList("");

  useEffect(() => {
    setIsLoading(true);
    FetchRO();
    // Initialize the data to "Core" when the component mounts
    // fetchCoreData("crore");
  }, []);

  // const fetchCoreData = (type) => {
  //   const apiUrl = "http://localhost:3007/api/secure/reginolOffice";
  //   const uuid = localStorage.getItem("UUID");
  //   const headers = {
  //     XUuid: uuid,
  //   };

  //   // Make the Axios GET request with the headers
  //   axios
  //     .get(apiUrl, { headers })
  //     .then((response) => {
  //       //   setDbdata(response.data.data.regionWiseData);
  //       if (type ) {
  //         setDecimal("crore");
  //       } else {
  //         setDecimal("decimal");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  // useEffect(() => {
  //   if (dbdata && Object.keys(dbdata).length > 0) {
  //     // const reginoalTable = Object.entries(dbdata).map(([key, value]) => ({
  //     //   parameters: key,
  //     //   total: value,
  //     //   kotak: value
  //     // }));
  //     const reginaolData = dbdata.map((item, index) => ({
  //       id: index + 1,
  //       office: item.regionalOffice,
  //       zone: item.zone,
  //       piu: item.countOfPIU,
  //       subsidiaryAccounts: item.countOfSubsidiaryAccounts,
  //       sanctionLimit:
  //         Decimal
  //           ? item.crore.sanctionLimit
  //           : item.decimal.sanctionLimit,
  //       utilizedLimit:
  //         Decimal
  //           ? item.crore.utilizedLimit
  //           : item.decimal.utilizedLimit,
  //       unutilizedLimit:
  //         Decimal
  //           ? item.crore.unutilizedLimit
  //           : item.decimal.unutilizedLimit,
  //       percentage:
  //         Decimal
  //           ? item.crore.utilizationPercentage
  //           : item.decimal.utilizationPercentage,
  //     }));
  //     setReginoalTable(reginaolData);
  //     console.log("reginoalTable", reginaolData);
  //   }
  // }, [dbdata]);

  // const columns = [
  //   { field: "id", headerName: "Sr no", width: 90 },
  //   {
  //     field: "office",
  //     headerName: "Regional Office",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "zone",
  //     headerName: "Zone",
  //     width: 150,
  //     editable: true,
  //   },
  //   {
  //     field: "piu",
  //     headerName: "No. of PIU",
  //     type: "number",
  //     width: 110,
  //     editable: true,
  //   },
  //   {
  //     field: "subsidiaryAccounts",
  //     headerName: "No. of Subsidiary Accounts",
  //     sortable: true,
  //     width: 160,
  //   },
  //   // Extra fields
  //   {
  //     field: "sanctionLimit",
  //     headerName: "Sanction Limit",
  //     type: "number",
  //     width: 120,
  //     editable: true,
  //   },
  //   {
  //     field: "utilizedLimit",
  //     headerName: "Utilized Limit",
  //     type: "number",
  //     width: 120,
  //     editable: true,
  //   },
  //   {
  //     field: "unutilizedLimit", // Field for "Un-Utilized Limit"
  //     headerName: "Un-Utilized Limit",
  //     type: "number",
  //     width: 120,
  //     editable: true,
  //   },
  //   {
  //     field: "percentage", // Field for "Utilized Percentage"
  //     headerName: "Utilized Percentage",
  //     type: "number",
  //     width: 120,
  //     editable: true,
  //   },
  // ];

  //---------------------------------------------------------------------------------------

  const columns = [
    {
      accessor: "regionalOffice",
      Header: "Regional Office",
    },
    {
      accessor: "zone",
      Header: "Zone",
    },
    {
      accessor: "countOfPIU",
      Header: "No. of PIU",
    },
    {
      accessor: "countOfSubsidiaryAccounts",
      Header: "No. of Subsidiary Accounts",
    },
    // Extra accessors
    {
      accessor: !Decimal ? "crore.sanctionLimit" : "decimal.sanctionLimit",
      Header: "Sanction Limit",
    },
    {
      accessor: !Decimal ? "crore.utilizedLimit" : "decimal.utilizedLimit",
      Header: "Utilized Limit",
    },
    {
      accessor: !Decimal ? "crore.unutilizedLimit" : "decimal.unutilizedLimit", // accessor for "Un-Utilized Limit"
      Header: "Un-Utilized Limit",
    },
    {
      accessor: !Decimal
        ? "crore.utilizationPercentage"
        : "decimal.utilizationPercentage", // accessor for "Utilized Percentage"
      Header: "Utilized Percentage",
    },
  ];
  function FetchRO() {
    DashboardService.getRO(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: "NHAI",
        statusAsOn: ConvertFormat(asOnDate), //"21-05-2020", //
        zone: zoneD, //"All",
      },
      (res) => {
        if (res.status === 200) {
          var d = res.data.data.regionWiseData;
          //   setRows(d);
          setReginoalTable(d);
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
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
            {/* <label className="float-start pageTitle">RO</label> */}
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
                  setZoneD(e.target.value);
                }}
              >
                <option value="All">All</option>
                {(zoneList || []).map((x) => {
                  return <option value={x.zoneName}>{x.zoneName}</option>;
                })}
              </select>
              {"  "}
            </div>
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => setDecimal(false)}
              >
                Crore
              </button>{" "}
              <button
                className="btn addUser dashbutton"
                type="button"
                onClick={() => setDecimal(true)}
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
            data={reginoalTable}
            customClass="ROTable"
            showSearchBar={false}
          />{" "}
          {/* <Box sx={{ height: 400, width: "100%" }}>
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
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default RO;
