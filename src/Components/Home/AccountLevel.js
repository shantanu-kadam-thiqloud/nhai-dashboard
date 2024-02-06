import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { v4 as uuid } from "uuid";
import Hyperlink from "./Hyperlink";
import {
  DateFormatFunction,
  ConvertFormat,
} from "../HtmlComponents/DateFunction";
import { DashboardService } from "../../Service/DashboardService";
import Spinner from "../HtmlComponents/Spinner";
import { useNavigate } from "react-router-dom";

const AccountLevel = () => {
  const [asOnDate, setAsOnDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const [bankD, setBank] = useState("");
  const [roD, setRo] = useState("");
  const [zoneD, setZone] = useState("");
  const [Decimal, setDecimal] = useState(true);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      Header: "Bank",
      accessor: "bank",
    },
    {
      Header: "PIU",
      accessor: "piu",

      Cell: ({ row }) => (
        <a
          href="#"
          onClick={() => {
            setRData(row.values);
            setIsOpen(true);
          }}
          className="text-black"
        >
          {row.values.piu}
        </a>
      ),
    },
    {
      Header: "Regional Office",
      accessor: "regionalOffice",
    },
    {
      Header: "Zone",
      accessor: "zone",
    },
    {
      Header: "Account Number",
      accessor: "accNum",
      Cell: ({ row }) => (
        <a
          href="#"
          onClick={() => {
            setRData(row.values);
            setIsOpen(true);
          }}
          className="text-black float-end"
        >
          {row.values.accNum}
        </a>
      ),
    },
    {
      Header: "Project Name",
      accessor: "projectName",
      Cell: ({ row }) => (
        <a
          href="#"
          onClick={() => {
            setRData(row.values);
            setIsOpen(true);
          }}
          className="text-black"
        >
          {row.values.projectName}
        </a>
      ),
    },
    {
      Header: "Account Open Date",
      accessor: "accountOpeningData",
    },
    {
      Header: "Limit Sanction Date",
      accessor: "limitSancationDate",
    },
    {
      Header: "Sanction Limit",
      accessor: "crore.sanctionLimit", // Decimal ? "decimal.sanctionLimit" :
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Utilized Limit",
      accessor: "crore.utilizedLimit", //Decimal ? "decimal.utilizedLimit" :
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Un-Utilized Limit",
      accessor: "crore.unUtilizedLimit", // Decimal ? "decimal.unUtilizedLimit" :
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Utilization %",
      accessor: "crore.utilizedPercent", // Decimal ? "decimal.utilizedPercent" :
      Cell: ({ value }) => <div className="float-end">{value}</div>,
    },
    {
      Header: "Active/Inactive",
      accessor: "status",
      Cell: ({ value }) => (
        <div className="mx-auto">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckIndeterminate"
            checked={value}
          />
        </div>
      ),
    },
    {
      Header: "Project Director(PD) Name",
      accessor: "directorName",
    },
    {
      Header: "PMIS Code",
      accessor: "pmisCode",
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

  //---------------------------------------------------------------------------------------
  function FetchAccountLevel() {
    DashboardService.getAccountLevel(
      reqBody,
      (res) => {
        if (res.status === 200) {
          // setRows(res.data);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
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
            {/* <label className="float-start pageTitle">Account Level</label> */}
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
        <div className="p-2">
          <DataTable
            columns={columns}
            data={rows} //{data}
            customClass="AccLevelable"
            showSearchBar={false}
          />{" "}
        </div>
      </div>
      <Hyperlink isOpen={isOpen} setModal={setIsOpen} row={rowdata} />
    </div>
  );
};

export default AccountLevel;
