import React, { useEffect, useState } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import Box from "@mui/material/Box";
import GenericDataTable from "../HtmlComponents/GenericDataTable";

const AccountLevel = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const cdate = formatDate(currentDate);
  const [dynamicDate, setDate] = useState(cdate);
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [Decimal, setDecimal] = useState(true);
   const columns =[
    { "field": "bank", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Bank", "width": 150, "editable": false, "type": "string" },
    { "field": "piu", "sortable": true, "filter": true, "showFilterMenu": false, "header": "PIU", "width": 150, "editable": false, "type": "string", "body": "HyperLinkTemplate" },
    { "field": "regionalOffice", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Regional Office", "width": 150, "editable": false, "type": "string" },
    { "field": "zone", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Zone", "width": 150, "editable": false, "type": "string" },
    { "field": "accNum", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Number", "width": 150, "editable": false, "type": "string", "body": "HyperLinkTemplate", "class": "text-end" },
    { "field": "projectName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Project Name", "width": 150, "editable": false, "type": "string", "body": "HyperLinkTemplate" },
    { "field": "accountOpeningData", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Account Opening Date", "width": 150, "editable": false, "type": "date" },
    { "field": "limitSancationDate", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Limit Sanction Date", "width": 150, "editable": false, "type": "date" },
    { "field": "crore.sanctionLimit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Sanction Limit (Crore)", "width": 150, "editable": false, "type": "number" },
    { "field": "crore.utilizedLimit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Utilized Limit (Crore)", "width": 150, "editable": false, "type": "number" },
    { "field": "crore.unUtilizedLimit", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Unutilized Limit (Crore)", "width": 150, "editable": false, "type": "number" },
    { "field": "crore.utilizedPercent", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Utilized Percentage", "width": 150, "editable": false, "type": "string" },
    { "field": "status", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Status", "width": 150, "editable": false, "type": "boolean" },
    { "field": "directorName", "sortable": true, "filter": true, "showFilterMenu": false, "header": "Director Name", "width": 150, "editable": false, "type": "string" },
    { "field": "pmisCode", "sortable": true, "filter": true, "showFilterMenu": false, "header": "PMIS Code", "width": 150, "editable": false, "type": "string" }
  ];
   

  // const columns = [
  //   {
  //     Header: "Bank",
  //     accessor: "bank",
  //   },
  //   {
  //     Header: "PIU",
  //     accessor: "piu",

  //     // Cell: ({ row }) => (
  //     //   <a
  //     //     href="#"
  //     //     onClick={() => {
  //     //       setRData(row.values);
  //     //       setIsOpen(true);
  //     //     }}
  //     //     style={{ color: "black" }}
  //     //   >
  //     //     {row.values.piu}
  //     //   </a>
  //     // ),
  //   },
  //   {
  //     Header: "Regional Office",
  //     accessor: "regionalOffice",
  //   },
  //   {
  //     Header: "Zone",
  //     accessor: "zone",
  //   },
  //   {
  //     Header: "Account Number",
  //     accessor: "accNum",
  //     // Cell: ({ row }) => (
  //     //   <a
  //     //     href="#"
  //     //     onClick={() => {
  //     //       setRData(row.values);
  //     //       setIsOpen(true);
  //     //     }}
  //     //     style={{ color: "black", float: "right" }}
  //     //   >
  //     //     {row.values.accNum}
  //     //   </a>
  //     // ),
  //   },
  //   {
  //     Header: "Project Name",
  //     accessor: "projectName",
  //     // Cell: ({ row }) => (
  //     //   <a
  //     //     href="#"
  //     //     onClick={() => {
  //     //       setRData(row.values);
  //     //       setIsOpen(true);
  //     //     }}
  //     //     style={{ color: "black" }}
  //     //   >
  //     //     {row.values.projectName}
  //     //   </a>
  //     // ),
  //   },
  //   {
  //     Header: "Account Open Date",
  //     accessor: "accountOpeningData",
  //   },
  //   {
  //     Header: "Limit Sanction Date",
  //     accessor: "limitSancationDate",
  //   },
  //   {
  //     Header: "Sanction Limit",
  //     accessor: "crore.sanctionLimit", // Decimal ? "decimal.sanctionLimit" :
  //     // Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  //   {
  //     Header: "Utilized Limit",
  //     accessor: "crore.utilizedLimit", //Decimal ? "decimal.utilizedLimit" :
  //     // Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  //   {
  //     Header: "Un-Utilized Limit",
  //     accessor: "crore.unUtilizedLimit", // Decimal ? "decimal.unUtilizedLimit" :
  //     // Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  //   {
  //     Header: "Utilization %",
  //     accessor: "crore.utilizedPercent", // Decimal ? "decimal.utilizedPercent" :
  //     // Cell: ({ value }) => <div style={{ float: "right" }}>{value}</div>,
  //   },
  //   {
  //     Header: "Active/Inactive",
  //     accessor: "status",
  //     // Cell: ({ value }) => (
  //     //   <div style={{ float: "center" }}>
  //     //     <input
  //     //       class="form-check-input"
  //     //       type="checkbox"
  //     //       value=""
  //     //       id="flexCheckIndeterminate"
  //     //       checked={value}
  //     //     />
  //     //   </div>
  //     // ),
  //   },
  //   {
  //     Header: "Project Director(PD) Name",
  //     accessor: "directorName",
  //   },
  //   {
  //     Header: "PMIS Code",
  //     accessor: "pmisCode",
  //   },
  // ];
  const data = [
    {
      bank: "Kotak",
      piu: "Total",
	  regionalOffice: "Bhubaneswar",      
      zone: "",
	  accNum: "0715750979",
	  projectName: "CALA KHURDHA AND PD NHAI PIU BALASORE",
      accountOpeningData: "04-03-2020",
        limitSancationDate: "",
        crore: {
          sanctionLimit: "39,430.72",
          utilizedLimit: "29,297.98",
          unUtilizedLimit: "10,132.74",
          utilizedPercent: "74.30%",
        },
        status: true,
        directorName: "Mr.Kotak",
        pmisCode: "1A02D4",
    },
    {
      bank: "Kotak",
      piu: "Balasore",      
      zone: "East",
	  accNum: "0715750979",
	  projectName: "CALA KHURDHA AND PD NHAI PIU BALASORE",
      accountOpeningData: "04-03-2020",
        limitSancationDate: "",
        crore: {
          sanctionLimit: "39,430.72",
          utilizedLimit: "29,297.98",
          unUtilizedLimit: "10,132.74",
          utilizedPercent: "74.30%",
        },
        status: true,
        directorName: "Mr.Kotak",
        pmisCode: "1A02D4",
    },    
  ];
  useEffect(() => {
    const d = formatDate(dateValue);
    setDate(d);
  }, [dateValue]);
  useEffect(() => {
    console.log("reqBody-->", reqBody);
  }, [dynamicDate]);

  //Mock----------------------------------------------------------------------
  function formatDate(inputDate) {
    // Parse the input date string into a Date object
    const dateParts = inputDate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // JavaScript months are zero-based
    const day = parseInt(dateParts[2]);
    const formattedDate = new Date(year, month, day);

    // Extract day, month, and year components
    const dd = String(formattedDate.getDate()).padStart(2, "0");
    const mm = String(formattedDate.getMonth() + 1).padStart(2, "0"); // Add 1 to the month (zero-based)
    const yyyy = formattedDate.getFullYear();

    // Format the date in "dd-mm-yyyy" format
    return `${dd}-${mm}-${yyyy}`;
  }

  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    statusAsOn: dynamicDate, //"28-09-2023",
    bank: bankD, //"All", //Kotak,
  };

  const mockRes = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    accWiseData: [
      {
        bank: "Kotak",
        piu: "Balasore",
        regionalOffice: "Bhubaneswar",
        zone: "East",
        accNum: "0715750979",
        projectName: "CALA KHURDHA AND PD NHAI PIU BALASORE",
        accountOpeningData: "04-03-2020",
        limitSancationDate: "",
        crore: {
          sanctionLimit: "39,430.72",
          utilizedLimit: "29,297.98",
          unUtilizedLimit: "10,132.74",
          utilizedPercent: "74.30%",
        },
        status: true,
        directorName: "Mr.Kotak",
        pmisCode: "1A02D4",
      },
      {
        bank: "Kotak",
        piu: "Balasore",
        regionalOffice: "Bhubaneswar",
        zone: "East",
        accNum: "0714835882",
        projectName: "CALA KHURDHA AND PD NHAI PIU BALASORE",
        accountOpeningData: "14-02-2020",
        limitSancationDate: "",
        crore: {
          sanctionLimit: "394.00",
          utilizedLimit: "324.81",
          unUtilizedLimit: "69.19",
          utilizedPercent: "82.44%",
        },
        status: false,
        directorName: "Mr.Kotak",
        pmisCode: "1A02D4",
      },
    ],
  };
  const [rows, setRows] = useState(mockRes.accWiseData);
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Account Level</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Status As On : </label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                value={dateValue || ""}
                onChange={(e) => {
                  const E = e.target.value;
                  console.log("----->", E);
                  setDateValue(E);
                }}
              />{" "}
              <label className="statusOn">Bank : </label>{" "}
              <select
                name="bank"
                className="inputDate"
                onChange={(e) => {
                  setBank(e.target.value);
                }}
              >
                <option value="All">All</option>
                <option value="Kotak">Kotak</option>
              </select>
              {"  "}
            </div>
            <div className="float-end dashboardLabels">
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
        <div className="p-2 tableDiv">
          {/* <DataTable
            columns={columns}
            data={rows} //{data}
            customClass="AccLevelable"
            showSearchBar={false}
          />{" "} */}
        {/* <DataTable
                value={rows}
                removableSort
                filterDisplay="row"
                showGridlines
                tableStyle={{ width: '150px' }}
              >
                {columns.map((col) => (
                  <Column
                  key={col.field}
                  field={col.field}
                  sortable
                  filter
                  filterPlaceholder="Search"
                  filterMatchMode="contains"
                  showGridlines
                  header={col.header}
                  style={{ width: '150px', whiteSpace: 'normal' }}
                  body={col.body}
                  className= {col.class}
                  />
                ))}
    </DataTable> */}

            <GenericDataTable 
            data={rows} 
            columns={columns}    
              />

        </div>
      </div>      
    </div>
  );
};

export default AccountLevel;
