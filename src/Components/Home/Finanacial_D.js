import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import {
  DateFormatFunction,
  ConvertFormat,
  useGetReduxData,
  getCookie,
} from "../HtmlComponents/CommonFunction";
import { DashboardService } from "../../Service/DashboardService";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
const FinanacialD = () => {
  const [fromDate, setFromDate] = useState(
    "2023-04-01" // new Date().toISOString().split("T")[0]
  );
  const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
  const [Decimal, setDecimal] = useState(true);
  const [yearD, setYear] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  //-----------------------------------------------------------------
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //-----------------------------------------------------------------

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Financial(D)", 10, 10);

    // // Create a table for cardData
    // const tableData = [];
    // cardData.forEach((item) => {
    //   tableData.push([item.title, item.count]);
    // });

    // doc.autoTable({
    //   head: [["Title", "Count"]],
    //   body: tableData,
    //   startY: 20,
    // });
    doc.autoTable({ html: "#pdfTable" });
    // Get the HTML content of the table
    // const table = document.getElementById("pdfTable");
    // const tableHtml = table.outerHTML;

    // Generate PDF
    // doc.fromHTML(tableHtml, 10, 10);
    // doc.save('table.pdf');

    // Save the PDF with a unique name
    const fileName = `Financial(D)_${ConvertFormat(
      fromDate
    )}_to_${ConvertFormat(toDate)}.pdf`;
    doc.save(fileName);
  };

  useEffect(() => {
    setIsLoading(true);
    FetchFinancial_D();
  }, [yearD, toDate]);

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
  const fdata = {
    responseMetaData: {
      status: "200",
      message: "Success",
    },
    // deposits: {
    //   cumulativeDeposits: "649550736",
    //   interestCredited: "0",
    //   totalBalance: "649550736",
    //   OtherCredit: null,
    //   Less: "0",
    // },
    // disbursements: {
    //   paidtoBeneficiary: "369413128",
    //   Less_Return_Benfeciary: null,
    //   paidforAdminExpenses: null,
    //   Less_Return_Admin_Expense: null,
    //   paidforTDS: null,
    //   otherDebits: "0",
    //   suspense: null,
    //   suspense_Debit: null,
    //   suspense_Credit: null,
    //   Surplus_Deficit: null,
    // },
    // summary: {
    //   nodalAccountBalance: "4.733086465231E10",
    //   AssignedLimit: null,
    //   UnAssignedLimit: null,
    //   surplusDeficit: null,
    //   interestAccuredTillLP: null,
    //   closingBalance: null,
    // },
    deposits: {
      decimal: {
        cumulativeDeposits: "649550736",
        interestCredited: "0",
        totalBalance: "649550736",
        OtherCredit: null,
        Less: "0",
      },
      crore: {
        cumulativeDeposits: "649550736",
        interestCredited: "0",
        totalBalance: "649550736",
        OtherCredit: null,
        Less: "0",
      },
    },
    disbursements: {
      decimal: {
        paidtoBeneficiary: "369413128",
        Less_Return_Benfeciary: null,
        paidforAdminExpenses: null,
        Less_Return_Admin_Expense: null,
        paidforTDS: null,
        otherDebits: "0",
        suspense: null,
        suspense_Debit: null,
        suspense_Credit: null,
        Surplus_Deficit: null,
      },
      crore: {
        paidtoBeneficiary: "369413128",
        Less_Return_Benfeciary: null,
        paidforAdminExpenses: null,
        Less_Return_Admin_Expense: null,
        paidforTDS: null,
        otherDebits: "0",
        suspense: null,
        suspense_Debit: null,
        suspense_Credit: null,
        Surplus_Deficit: null,
      },
    },
    summary: {
      decimal: {
        nodalAccountBalance: "4.733086465231E10",
        AssignedLimit: null,
        UnAssignedLimit: null,
        surplusDeficit: null,
        interestAccuredTillLP: null,
        closingBalance: null,
      },
      crore: {
        nodalAccountBalance: "4.733086465231E10",
        AssignedLimit: null,
        UnAssignedLimit: null,
        surplusDeficit: null,
        interestAccuredTillLP: null,
        closingBalance: null,
      },
    },
  };
  const [fd_Data, setFd_data] = useState([]);
  const reqBody = {
    requestMetaData: {
      applicationId: "nhai-dashboard",
      correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567", //UUID
    },
    userName: USER.userName || "",
    financialYear: yearD || "", //"28-09-2023",
    //  bank: bankD, //"All", //Kotak,
    statusAsOnFrom: ConvertFormat(fromDate) || "", //"01-04-2017",
    statusAsOnTO: ConvertFormat(toDate) || "", //"01-09-2023",
  };

  function FetchFinancial_D() {
    DashboardService.getFinancialD(
      reqBody,
      (res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setFd_data(res.data.data);
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    );
  }

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
                onClick={generatePDF} // Call the generatePDF function on button click
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
              {/* <button
                className="btn addUser dashbutton Cml-5"
                type="button"
                //    onClick={generateCSV} // Call the generateExcel function on button click
              >
                Excel
              </button> */}
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
          <table id="pdfTable" className="">
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
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.deposits?.cumulativeDeposits
                  : fd_Data?.crore?.deposits?.cumulativeDeposits}
              </td>
              <td>Paid to Beneficiary</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.paidtoBeneficiary
                  : fd_Data?.crore?.disbursements?.paidtoBeneficiary}
              </td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>Interest Credited</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.deposits?.interestCredited
                  : fd_Data?.crore?.deposits?.interestCredited}
              </td>
              <td>Less: Returns</td>
              <td className="tright">(0.00)</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.Less_Return_Benfeciary
                  : fd_Data?.crore?.disbursements?.Less_Return_Benfeciary}
              </td>
            </tr>
            <tr>
              <td>Total Balance</td>
              <td className="tright"></td>
              <td className="tright upperb">
                {Decimal
                  ? fd_Data?.decimal?.deposits?.totalBalance
                  : fd_Data?.crore?.deposits?.totalBalance}
              </td>
              <td></td>
              <td className="tright upperb"></td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Paid for Admin Expenses</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.paidforAdminExpenses
                  : fd_Data?.crore?.disbursements?.paidforAdminExpenses}
              </td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Less: Returns</td>
              <td className="tright bottomb">(0.00)</td>
              <td className="tright">
                {" "}
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.Less_Return_Admin_Expense
                  : fd_Data?.crore?.Less_Return_Admin_Expense}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Paid for TDS</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.paidforTDS
                  : fd_Data?.crore?.disbursements?.paidforTDS}
              </td>
            </tr>
            <tr>
              <td>Other Credit</td>
              <td className="tright"></td>
              <td className="tright bottomb">
                {Decimal
                  ? fd_Data?.decimal?.deposits?.OtherCredit
                  : fd_Data?.crore?.deposits?.OtherCredit}
              </td>
              <td>Other Debit</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.otherDebits
                  : fd_Data?.crore?.disbursements?.otherDebits}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>Suspense</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements.suspense
                  : fd_Data?.crore?.disbursements.suspense}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="tright"></td>
              <td className="tright"></td>
              <td>- Debit</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements.suspense_Debit
                  : fd_Data?.crore?.disbursements.suspense_Debit}
              </td>
            </tr>
            <tr>
              <td>Less: Interest Transferred</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.deposits?.Less
                  : fd_Data?.crore?.deposits?.Less}
              </td>
              <td>- Credit</td>
              <td className="tright bottomb">(0.00)</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.suspense_Credit
                  : fd_Data?.crore?.disbursements?.suspense_Credit}
              </td>
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
              <td className="tright upperb">
                {Decimal
                  ? fd_Data?.decimal?.disbursements?.Surplus_Deficit
                  : fd_Data?.crore?.disbursements?.Surplus_Deficit}
              </td>
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
              <td className="tright">
                10,459.96
                {Decimal
                  ? fd_Data?.decimal?.summary?.nodalAccountBalance
                  : fd_Data?.crore?.summary?.nodalAccountBalance}
              </td>
              <td className="tright"></td>
              <td>Available Limits</td>
              <td className="tright">
                10,132.74
                {Decimal
                  ? fd_Data?.decimal?.summary?.AssignedLimit
                  : fd_Data?.crore?.summary?.AssignedLimit}
              </td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>- Surplus/Deficit for the period</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.summary?.surplusDeficit
                  : fd_Data?.crore?.summary?.surplusDeficit}
              </td>
              <td className="tright"></td>
              <td>Unassigned Limits</td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.summary?.UnAssignedLimit
                  : fd_Data?.crore?.summary?.UnAssignedLimit}
              </td>
              <td className="tright"></td>
            </tr>
            <tr>
              <td>Closing Balance as on 08-Aug-2023</td>
              <td className="tright"></td>
              <td className="tright">
                {Decimal
                  ? fd_Data?.decimal?.summary?.closingBalance
                  : fd_Data?.crore?.summary?.closingBalance}
              </td>
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
              <td className="tright upperb">
                {Decimal
                  ? fd_Data?.decimal?.summary?.interestAccuredTillLP
                  : fd_Data?.crore?.summary?.interestAccuredTillLP}
              </td>
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
