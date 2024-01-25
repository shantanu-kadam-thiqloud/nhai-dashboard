import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";

const FinanacialD = () => {
  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);

  const [Decimal, setDecimal] = useState(true);
  const [bankD, setBank] = useState("");
  const [yearD, setYear] = useState("");

  // const generatePDF = () => {
  //   const doc = new jsPDF();
  //   doc.setFontSize(16);
  //   doc.text("Snapshot", 10, 10);

  //   // Create a table for cardData
  //   const tableData = [];
  //   cardData.forEach((item) => {
  //     tableData.push([item.title, item.count]);
  //   });

  //   doc.autoTable({
  //     head: [["Title", "Count"]],
  //     body: tableData,
  //     startY: 20,
  //   });

  //   // Save the PDF with a unique name
  //   const fileName = `snapshot_${currentDate}.pdf`;
  //   doc.save(fileName);
  // };

  // Function to generate and download the Excel file
  // const generateCSV = () => {
  //   // Prepare the data for CSV export
  //   const csvData = cardData.map((item) => [
  //     item.title,
  //     item.count.replace(/[^\d.-]/g, ""), // Remove non-numeric characters
  //   ]);

  //   // Create a CSV string
  //   const csvContent =
  //     "Title,Count\n" + csvData.map((row) => row.join(",")).join("\n");

  //   // Create a Blob object with the CSV data
  //   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  //   // Create a download link
  //   const link = document.createElement("a");
  //   link.href = window.URL.createObjectURL(blob);
  //   link.download = `snapshot_${currentDate}.csv`;

  //   // Trigger a click on the link to initiate the download
  //   link.click();
  // };

  //Mock----------------------------------------------------------------------

  const data = [
    {
      deposits: "Cumulative Deposit",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "Paid to Beneficary",
      disbursementsAmount: "0.00",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "Interest Credited",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "Less:Returns",
      disbursementsAmount: "(0.00)",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "Total Balance",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "Paid for Admin Expenses",
      disbursementsAmount: "0.00",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "Less:Returns",
      disbursementsAmount: "(0.00)",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "Paid for TDS",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "Other Credit",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "Other Debit",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "Suspense",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "- Debit",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "Less:Interest Transferred",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "- Credit",
      disbursementsAmount: "(0.00)",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "Surplus/Deficit",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "Nodal Account Balance",
      depositsAmount: "",
      finalDepositsAmount: "",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "- Opening Balance as on 01-Apr-2022",
      depositsAmount: "10,459.96",
      finalDepositsAmount: "",
      disbursements: "Available Limits",
      disbursementsAmount: "",
      finalDisbursementsAmount: "10,132.74",
    },
    {
      deposits: "- Surplus/Deficit for the period",
      depositsAmount: "0.00",
      finalDepositsAmount: "",
      disbursements: "Unassigned Limits",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "Closing Balance as on 08-Aug-2023",
      depositsAmount: "",
      finalDepositsAmount: "10,360.07",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
    {
      deposits: "",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "0.00",
    },
    {
      deposits: "Interest Accrued since Last Payment",
      depositsAmount: "",
      finalDepositsAmount: "0.00",
      disbursements: "",
      disbursementsAmount: "",
      finalDisbursementsAmount: "",
    },
  ];
  const columns = [
    {
      Header: "Deposits",
      accessor: "deposits",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: "Amount",
      accessor: "depositsAmount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Amount",
      accessor: "finalDepositsAmount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Disbursements",
      accessor: "disbursements",
      Cell: ({ value }) => <div className="float-start">{value}</div>,
    },
    {
      Header: "Amount",
      accessor: "disbursementsAmount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Amount",
      accessor: "finalDisbursementsAmount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
  ];

  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: "nhai",
    year: yearD, //"28-09-2023",
    bank: bankD, //"All", //Kotak,
    fromDate: fromDate, //"01-04-2017",
    toData: toDate, //"01-09-2023",
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="p-1">
            {/* <label className="float-start pageTitle">Snapshot</label> */}
            <div className="float-start dashboardLabels">
              <label className="statusOn">Financial Year : </label>
              {"  "}
              <select
                name="year"
                className="inputDate"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              >
                <option value="2018">2014</option>
                <option value="2019">2015</option>
                <option value="2020">2016</option>
                <option value="2021">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>{" "}
              <label className="statusOn">From : </label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                value={fromDate || ""}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
              />{" "}
              <label className="statusOn">To : </label>
              {"  "}
              <input
                id="dateInput"
                className="inputDate"
                type="date"
                value={toDate || ""}
                onChange={(e) => {
                  setToDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
              />{" "}
              {/* <label className="statusOn">Bank : </label>{" "}
              <select
                name="bank"
                className="inputDate"
                onChange={(e) => {
                  setBank(e.target.value);
                }}
              >
                <option value="Kotak">Kotak</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select> */}
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
              {/* <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {}}
          >
            PDF
          </button>{" "}              */}
              <button
                className="btn addUser dashbutton"
                type="button"
                //    onClick={generatePDF} // Call the generatePDF function on button click
              >
                PDF
              </button>
              {/* <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {}}
          >
            Excel
          </button> */}
              <button
                className="btn addUser dashbutton Cml-5"
                type="button"
                //    onClick={generateCSV} // Call the generateExcel function on button click
              >
                Excel
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-5">
        <div className="p-2">
          {/* <DataTable
            columns={columns}
            data={data}
            customClass="FDTable"
            showSearchBar={false}
          />{" "} */}
          {/* //-------------------------------------------------------------------------------------------------------------- */}
          <table className="">
            <tr>
              <th>Deposits</th>
              <th>Amount</th>
              <th>Amount</th>
              <th>Disbursements</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Cumulative Deposit</td>
              <td className="tright"></td>
              <td className="tright">0.00</td>
              <td>Paid to Beneficiary</td>
              <td className="tright">0.00</td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>Interest Credited</td>
              <td className="tright"></td>
              <td className="tright">0.00</td>
              <td>Less: Returns</td>
              <td className="tright">(0.00)</td>
              <td className="tright">0.00</td>
            </tr>
            <tr>
              <td>Total Balance</td>
              <td className="tright"></td>
              <td className="tright upperb">0.00</td>
              <td></td>
              <td className="tright upperb"></td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Paid for Admin Expenses</td>
              <td className="tright">0.00</td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Less: Returns</td>
              <td className="tright bottomb">(0.00)</td>
              <td className="tright">0.00</td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Paid for TDS</td>
              <td className="tright"></td>
              <td className="tright">0.00</td>
            </tr>
            <tr>
              <td>Other Credit</td>
              <td className="tright"></td>
              <td className="tright bottomb">0.00</td>
              <td>Other Debit</td>
              <td className="tright"></td>
              <td className="tright">0.00</td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Suspense</td>
              <td className="tright"></td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>- Debit</td>
              <td className="tright"></td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>Less: Interest Transferred</td>
              <td className="tright"></td>
              <td className="tright">0.00</td>
              <td>- Credit</td>
              <td className="tright bottomb">(0.00)</td>
              <td className="tright">0.00</td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright upperb bottomb">0.00</td>
              <td></td>
              <td className="tright"></td>
              <td className="tright upperb bottomb">0.00</td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright upperb"></td>
              <td>Surplus/Deficit</td>
              <td className="tright"></td>
              <td className="tright upperb">0.00</td>
            </tr>
            <tr>
              <td className="upperb">Nodal Account Balance</td>
              <td className="tright upperb"></td>
              <td className="tright upperb"></td>
              <td className="upperb"></td>
              <td className="tright upperb"></td>
              <td className="tright upperb"></td>
            </tr>
            <tr>
              <td>- Opening Balance as on 01-Apr-2022</td>
              <td className="tright">10,459.96</td>
              <td className="tright"></td>
              <td>Available Limits</td>
              <td className="tright">10,132.74</td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>- Surplus/Deficit for the period</td>
              <td className="tright">0.00</td>
              <td className="tright"></td>
              <td>Unassigned Limits</td>
              <td className="tright">0.00</td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>Closing Balance as on 08-Aug-2023</td>
              <td className="tright"></td>
              <td className="tright">10,360.07</td>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright upperb">0.00</td>
              <td></td>
              <td className="tright"></td>
              <td className="tright upperb">0.00</td>
            </tr>
            <tr>
              <td className="upperb">Interest Accrued since Last Payment</td>
              <td className="tright upperb"></td>
              <td className="tright upperb">0.00</td>
              <td className="upperb"></td>
              <td className="tright upperb"></td>
              <td className="tright upperb"></td>
            </tr>
          </table>
          {/* ------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default FinanacialD;
