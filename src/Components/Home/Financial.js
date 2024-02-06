import React, { useEffect, useState } from "react";
import axios from "axios";
import bg from "../../Assets/images/NHAI_bg.png";
import DataTable from "../HtmlComponents/DataTable";
import logo from "../../Assets/images/Kotak_logo.png";
import jsPDF from "jspdf";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";

const Financial = () => {
  const [dbdata, setDbdata] = useState([]);

  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [depositsTable, setdepositsTable] = useState([]);
  const [disbursementsTable, setDisbursementsTable] = useState([]);
  const [summaryTable, setSummaryTable] = useState([]);
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const apiUrl = "http://localhost:3007/api/secure/financial";
    const uuid = localStorage.getItem("UUID");
    const headers = {
      XUuid: uuid,
    };

    // Make the Axios GET request with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setDbdata(response.data.data);
        setApiData(response.data.data.deposits);
        //setDisbursementsTable(response.data.data.disbursements)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Only run this effect once when the component mounts

  // Transform dbdata into depositsTable when dbdata changes
  useEffect(() => {
    console.log("apiData", typeof apiData, apiData);
    if (apiData && Object.keys(apiData).length > 0) {
      const depositsData = Object.entries(dbdata.deposits).map(
        ([key, value]) => ({
          deposits: key,
          amount: value,
        })
      );
      setdepositsTable(depositsData);
      console.log("depositsData", depositsData);
      const disbursementsTableData = Object.entries(dbdata.disbursements).map(
        ([key, value]) => ({
          disbursements: key,
          amount: value,
        })
      );
      setDisbursementsTable(disbursementsTableData);
      console.log("disbursementsTableData", disbursementsTableData);
      const summaryTableData = Object.entries(dbdata.summary).map(
        ([key, value]) => ({
          summary: key,
          amount: value,
        })
      );
      setSummaryTable(summaryTableData);
      console.log("summaryTableData", summaryTableData);
    }
  }, [apiData]);

  const rowdata = {
    deposits: {
      cumulativeDeposits: "0.0",
      interestCredited: "0.0",
      totalBalance: "0.0",
    },
    disbursements: {
      cumulativeDisbursements: "0.0",
      paidtoBeneficiary: "0.0",
      paidforAdminExpenses: "0.0",
      paidforTDS: "0.0",
      otherDebits: "0.0",
      interestTransfer: "0.0",
      lastDaytransactionReturn: "0.0",
    },
    summary: {
      nodalAccountBalance: "10,360.07",
      cumulativeLimitAssigned: "39,430.72",
      returnCreditinPDAccount: "0.0",
      balanceLimittobeAssigned: "0.0",
      interestAccruedtillNow: "0.0",
      creditAdjustment: "0.0",
    },
  };

  // Define columns for your DataTable

  const columns = [
    {
      Header: "Deposits",
      accessor: "deposits",
    },
    {
      Header: "Amount",
      accessor: "amount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
  ];

  const columnsDisbusment = [
    {
      Header: "Disbursements",
      accessor: "disbursements",
    },
    {
      Header: "Amount",
      accessor: "amount",
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
  ];

  const columnsSummary = [
    {
      Header: "Summary",
      accessor: "summary",
    },
    {
      Header: "Amount",
      accessor: "amount",
      Cell: ({ value }) => <div className="amount float-end">{value}</div>,
    },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
    // Define your first logo image and position for the left side of the header
    const logoImage1 = new Image();
    logoImage1.src = logo; // Replace with the actual path to your first logo image
    const logoWidthMM1 = 128;
    const logoHeightMM1 = 32;

    // Convert dimensions from mm to jsPDF units (pixels) for the first logo
    const logoWidth1 = logoWidthMM1 / 3.77952756;
    const logoHeight1 = logoHeightMM1 / 3.77952756;

    // Define your second logo image and position for the right side of the header
    const logoImage2 = new Image();
    logoImage2.src = bg;
    const logoWidthMM2 = 78;
    const logoHeightMM2 = 52;

    // Convert dimensions from mm to jsPDF units (pixels) for the second logo
    const logoWidth2 = logoWidthMM2 / 3.77952756;
    const logoHeight2 = logoHeightMM2 / 3.77952756;

    // Add both logos to the header using beforePageContent
    doc.autoTable({
      beforePageContent: function (data) {
        // Add the first logo to the left side of the header
        doc.addImage(
          logoImage1,
          "PNG",
          10, // X-coordinate for the first logo in the header
          10, // Y-coordinate for the first logo in the header
          logoWidth1,
          logoHeight1
        );

        // Add the second logo to the right side of the header
        const pageWidth = doc.internal.pageSize.getWidth();
        const xPosition2 = pageWidth - logoWidth2 - 10; // Adjust as needed for spacing
        doc.addImage(
          logoImage2,
          "PNG",
          xPosition2, // X-coordinate for the second logo in the header
          10, // Y-coordinate for the second logo in the header
          logoWidth2,
          logoHeight2
        );
      },
    });

    // Set the font size and color for the title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Set the text color back to black

    // Add the title text
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.text("Financial Reports", pageWidth / 2, 40, { align: "center" });
    const fontSize = 10;
    doc.setFontSize(fontSize);
    const additionalInfo = `   From: ${currentDate}    To: ${currentDate}    Bank: Kotak`;
    doc.text(`Finacial Year: ${currentDate} ${additionalInfo}`, 15, 50, {
      fontSize: fontSize,
    });

    // Create a table for cardData
    const tableData = [];
    depositsTable.forEach((item) => {
      const formattedamount = parseFloat(
        item.amount.replace(/[^\d.-]/g, "")
      ).toLocaleString("en-IN");
      tableData.push([item.deposits, formattedamount]);
    });

    // Define table options
    const tableOptions = {
      head: [["Deposits", "Amount"]],
      body: tableData,
      startY: 55, // Adjust the Y-coordinate to leave space for the title
    };

    // Add the table to the PDF
    doc.autoTable(tableOptions);

    // Create a table for cardData
    const DisbursementstableData = [];
    disbursementsTable.forEach((item) => {
      const formattedamount = parseFloat(
        item.amount.replace(/[^\d.-]/g, "")
      ).toLocaleString("en-IN");
      DisbursementstableData.push([item.disbursements, formattedamount]);
    });

    // Define table options
    const DisbursementstableOptions = {
      head: [["Disbursements", "Amount"]],
      body: DisbursementstableData,
      startY: doc.autoTable.previous.finalY, // Adjust the Y-coordinate to leave space for the title
    };

    // Add the table to the PDF
    doc.autoTable(DisbursementstableOptions);

    // Create a table for cardData
    const summarytableData = [];
    summaryTable.forEach((item) => {
      const formattedamount = parseFloat(
        item.amount.replace(/[^\d.-]/g, "")
      ).toLocaleString("en-IN");
      summarytableData.push([item.summary, formattedamount]);
    });

    // Define table options
    const summarytableOptions = {
      head: [["Summary", "Amount"]],
      body: summarytableData,
      startY: doc.autoTable.previous.finalY, // Adjust the Y-coordinate to leave space for the title
    };

    // Add the table to the PDF
    doc.autoTable(summarytableOptions);

    // Save the PDF with a unique name
    const additionalText = "The file is for MIS purpose only.";
    doc.text(15, doc.autoTable.previous.finalY + 10, additionalText, {
      fontSize: fontSize,
    });

    const fileName = `Financial_${currentDate}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="">
      <div className="row">
        <div className="col">
          <div className="p-1">
            <div className="float-start dashboardLabels">
              <label className="statusOn">Financial Year : </label>
              <select id="financialYear" className="selectBoxDashbord">
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>{" "}
              <label className="statusOn">From : </label>{" "}
              <input
                id="fromDate"
                className="inputDate"
                type="date"
                value={fromDate || ""}
                onChange={(e) => {
                  setFromDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
              />{" "}
              <label className="statusOn">To : </label>{" "}
              <input
                id="toDate"
                className="inputDate"
                type="date"
                value={toDate || ""}
                onChange={(e) => {
                  setToDate(e.target.value);
                  console.log("->", ConvertFormat(e.target.value));
                }}
                // Add any necessary attributes or event handlers here
              />{" "}
            </div>
            <div className="float-end dashboardLabels">
              <button
                className="btn addUser dashbutton Cml-5"
                type="button"
                onClick={() => {}}
              >
                Crore
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
                onClick={generatePDF} // Call the generatePDF function on button click
              >
                PDF
              </button>
              <button
                className="btn addUser dashbutton Cml-5"
                type="button"
                // onClick={generateCSV} // Call the generateExcel function on button click
              >
                Excel
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row snapshotForm fBgColor">
        <div className="col-12">
          {depositsTable && (
            <div className="pt-2">
              <DataTable
                columns={columns}
                data={depositsTable}
                customClass="BankTable"
                showSearchBar={false}
              />{" "}
            </div>
          )}
          {disbursementsTable && (
            <div className="">
              <DataTable
                columns={columnsDisbusment}
                data={disbursementsTable}
                customClass="BankTable"
                showSearchBar={false}
              />{" "}
            </div>
          )}
          {disbursementsTable && (
            <div>
              <DataTable
                columns={columnsSummary}
                data={summaryTable}
                customClass="BankTable"
                showSearchBar={false}
              />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Financial;
