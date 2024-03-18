import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Spinner from "../HtmlComponents/Spinner";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { FileService } from "../../Service/FileService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  DownloadByteArray,
  getCookie,
  useGetReduxData,
} from "../HtmlComponents/CommonFunction";
import { v4 as uuid } from "uuid";
var id = [];
const transactionTableData = [
  {
    id: 1,
    accountName: "CALA  CUM SDM KOTA AND PD NHAI KOTA BRT PKG-14",
    accountNumber: "5712799006",
    transactionDate: "21-05-2020",
    transactionDetails: "BY CLG INST 15443/16-05-20/CBI/KOTA",
    chequeRefNumber: "",
    valueDate: "21-05-2020",
    amountDebit: "0.00",
    amountCredit: "2,66,493.00",
    transactionType: "SC",
    reportingDate: "21-05-2020",
    CRN: "357988051",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "21-05-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "146126",
  },
  {
    id: 2,
    accountName:
      "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
    accountNumber: "1612042464",
    transactionDate: "09-04-2020",
    transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
    chequeRefNumber: "RTGSINW-0030499511",
    valueDate: "09-04-2020",
    amountDebit: "0.00",
    amountCredit: "86,33,180.00",
    transactionType: "OCB",
    reportingDate: "09-04-2020",
    CRN: "216292252",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "09-04-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "143027",
  },
  {
    id: 3,
    accountName:
      "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
    accountNumber: "1612042464",
    transactionDate: "09-04-2020",
    transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
    chequeRefNumber: "RTGSINW-0030499511",
    valueDate: "09-04-2020",
    amountDebit: "0.00",
    amountCredit: "86,33,180.00",
    transactionType: "DOC",
    reportingDate: "09-04-2020",
    CRN: "216292252",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "09-04-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "143027",
  },
  {
    id: 4,
    accountName:
      "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
    accountNumber: "1612042464",
    transactionDate: "09-04-2020",
    transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
    chequeRefNumber: "RTGSINW-0030499511",
    valueDate: "09-04-2020",
    amountDebit: "0.00",
    amountCredit: "86,33,180.00",
    transactionType: "OC",
    reportingDate: "09-04-2020",
    CRN: "216292252",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "09-04-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "143027",
  },
  {
    id: 5,
    accountName:
      "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
    accountNumber: "1612042464",
    transactionDate: "09-04-2020",
    transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
    chequeRefNumber: "RTGSINW-0030499511",
    valueDate: "09-04-2020",
    amountDebit: "0.00",
    amountCredit: "86,33,180.00",
    transactionType: "DOC",
    reportingDate: "09-04-2020",
    CRN: "216292252",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "09-04-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "143027",
  },
  {
    id: 6,
    accountName:
      "CALA SPECIAL DRO (LA) NH 45 KANCHEEPURAM AND PROJECT DIRECTOR NHAI, CHENNAI",
    accountNumber: "1612042464",
    transactionDate: "09-04-2020",
    transactionDetails: "RTGS SYNBR52020040952361485 NATIONAL HIGHWAYS S",
    chequeRefNumber: "RTGSINW-0030499511",
    valueDate: "09-04-2020",
    amountDebit: "0.00",
    amountCredit: "86,33,180.00",
    transactionType: "OC",
    reportingDate: "09-04-2020",
    CRN: "216292252",
    instructionNumber: "",
    CCY: "INR",
    UTRSerialNumber: "",
    beneficiaryName: "",
    beneficiaryAccountNumber: "",
    beneficiaryBank: "",
    beneficiaryBranch: "",
    beneficiaryCity: "",
    beneficiaryIFSCCode: "",
    beneficiaryAccountType: "",
    dataAsOn: "09-04-2020",
    bank: "Kotak",
    transactonFor: "CALAPD",
    FMSUniqueId: "143027",
  },
];
const MainTransaction = () => {
  const [rows, setRows] = useState([]); //initial row
  const navigate = useNavigate();
  const [isProcess, setIsProcess] = useState(false);
  const [updatedRows, setUpdatedRows] = useState([]); //use updation
  const [editedRows, setEditedRows] = useState([]); //only edited row
  const [isLoading, setIsLoading] = useState(false);
  const [editedRowIndex, setEditedRowIndex] = useState({});
  //-----------------------------------------------------------------
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //-----------------------------------------------------------------

  const Tcolumns = [
    {
      field: "accountName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Name",
      width: 150,
      editable: false,
      type: "string",
      body: "HyperLinkTemplate",
    },
    {
      field: "accountNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Account Number",
      width: 100,
      editable: false,
      type: "number",
      body: "HyperLinkTemplate",
    },
    {
      field: "transactionDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Date",
      width: 120,
      editable: false,
      type: "string",
    },
    {
      field: "transactionDetails",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Details",
      width: 160,
      editable: false,
      type: "string",
    },
    {
      field: "chequeRefNo",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Cheque Reference Number",
      width: 150,
      editable: false,
      type: "string",
    },
    {
      field: "valueDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Value Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "amtDebited",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Amount Debit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "amtCredited",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Amount Credit",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "currentBalance",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Current Balance",
      width: 100,
      editable: false,
      type: "number",
    },
    {
      field: "transactionType",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction Type",
      width: 120,
      editable: true,
      type: "string",
      //editor: editorInputText,
    },
    {
      field: "reportingDate",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Reporting Date",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "instructionNumber",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Instruction Number",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "crn",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "CRN",
      width: 100,
      editable: false,
      type: "number",
    },

    {
      field: "ccy",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "CCY",
      width: 100,
      editable: false,
      type: "number",
    },

    {
      field: "dateAsOn",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Data As On",
      width: 100,
      editable: false,
      type: "date",
    },
    {
      field: "bank",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Bank",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "transactionFor",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Transaction For",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "fmsId",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "FMS ID",
      width: 100,
      editable: false,
      type: "string",
    },
    {
      field: "uniqueId",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Unique ID",
      width: 100,
      editable: false,
      type: "string",
    },
  ];

  useEffect(() => {
    setRows(transactionTableData);
    setUpdatedRows(transactionTableData);
  }, []);

  const isPositiveInteger = (val) => {
    let str = String(val);
    str = str.trim();
    if (!str) {
      return false;
    }
    str = str.replace(/^0+/, "") || "0";
    let n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
  };

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "quantity":
      case "price":
        if (isPositiveInteger(newValue)) rowData[field] = newValue;
        else event.preventDefault();
        break;

      default:
        if (newValue.trim().length > 0) rowData[field] = newValue;
        else event.preventDefault();
        break;
    }

    // Find the index of the edited product
    id.push({ id: rowData.id });

    const index = updatedRows.findIndex((product) => product.id === rowData.id);
    if (index !== -1) {
      // Update the product with edited values
      const updatedProducts = [...updatedRows];
      updatedProducts[index] = { ...rowData };

      setUpdatedRows(updatedProducts);
    }
  };

  function getEditedRows(rowData, editedRow) {
    const editedProducts = rowData.filter((item) =>
      editedRow.some((idItem) => idItem.id === item.id)
    );
    console.log(
      "Initial Row ->",
      transactionTableData,
      "Updated Rows ->",
      updatedRows,
      "Edited Row Index -> ",
      id,
      "Edited rows -> ",
      editedProducts
    );
    setEditedRows(editedProducts);
    UpdateMainTransaction();
    id = [];
    return editedProducts;
  }

  const cellEditor = (options) => {
    if (options.field === "price") return priceEditor(options);
    else return textEditor(options);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        // value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const priceEditor = (options) => {
    return (
      <InputNumber
        // value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const onSave = () => {
    getEditedRows(updatedRows, id);
  };

  function ProcessMainTransaction() {
    FileService.processMain(
      {},
      (res) => {
        if (res.status === 200) {
          toast.success(res.data.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          FetchMainTransaction();
          setIsProcess(true);
          setIsLoading(false);
        } else if (res.status === 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (err) => {
        setIsLoading(false);
        console.error("Exception - >", err);
        navigate("/NHAI/Error/500");
      }
    );
  }
  function FetchMainTransaction() {
    var List = [];
    FileService.getMainTransaction(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: USER.userName || "",
      },
      (res) => {
        if (res.status === 200) {
          List = res.data.data;
          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (err) => {
        setIsLoading(false);
        console.error("Exception - >", err);
        navigate("/NHAI/Error/500");
      }
    );
  }
  function UpdateMainTransaction() {
    FileService.updateMainTransaction(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        transactionUpdates: editedRows || [],
      },
      (res) => {
        if (res.status === 200) {
          toast.success(res.data.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
        } else if (res.status === 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (err) => {
        setIsLoading(false);
        console.error("Exception - >", err);
        navigate("/NHAI/Error/500");
      }
    );
  }
  function DownloadMainTransaction() {
    FileService.downloadMainTransaction(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: USER.userName || "",
      },
      (res) => {
        if (res.status === 200) {
          setIsLoading(false);
          DownloadByteArray(res.data.data);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
      },
      (err) => {
        setIsLoading(false);
        console.error("Exception - >", err);
        navigate("/NHAI/Error/500");
      }
    );
  }

  //------------------------------------------------------------------------------------------------------------------------------------------
  // const onEditorValueChange = (props, value) => {
  //   const { rowIndex, field } = props;
  //   setUpdatedRows((prevProducts) => {
  //     const updatedProducts = [...prevProducts];
  //     updatedProducts[rowIndex][field] = value;
  //     return updatedProducts;
  //   });
  //   setEditedRowIndex({ ...editedRowIndex, [rowIndex]: true });
  // };
  // const onSave = () => {
  //   const updatedProducts = rows.map((product, index) => {
  //     if (editedRowIndex[index]) {
  //       return product;
  //     }
  //     return product;
  //   });
  //   setUpdatedRows(updatedProducts);
  //   getEditedRows(updatedProducts, editedRowIndex);
  // };
  // //------------------------------------------------------------------------------------------
  // function getEditedRows(rowData, editedRow) {
  //   const editedIndices = Object.keys(editedRow).filter(
  //     (index) => editedRow[index]
  //   );
  //   const editedProducts = editedIndices.map((index) => rowData[index]);
  //   console.log(
  //     "Initial Row ->",
  //     rows,
  //     "Updated Rows ->",
  //     updatedRows,
  //     "Edited Row Index -> ",
  //     editedRowIndex,
  //     "Edited rows -> ",
  //     editedProducts
  //   );
  //   setEditedRows(editedProducts);
  //   setEditedRowIndex({});
  //   return editedProducts;
  // }
  // const editorInputText = (props) => {
  //   return (
  //     <input
  //       type="text"
  //       value={props.value}
  //       onChange={(e) => onEditorValueChange(props, e.target.value)}
  //     />
  //   );
  // };

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Main Transaction</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className=" btn addUser min me-2 mt-2 mb-4"
                  type="submit"
                  onClick={() => {
                    ProcessMainTransaction();
                  }}
                >
                  Process
                </button>
                <button
                  className=" btn addUser min me-2 mt-2 mb-4"
                  type="submit"
                  disabled={!isProcess}
                  onClick={() => {
                    onSave();
                  }}
                >
                  Update All
                </button>
                <button
                  className=" btn addUser min me-2 mt-2 mb-4"
                  type="submit"
                  disabled={!isProcess}
                  onClick={() => {
                    DownloadMainTransaction();
                  }}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2 tableDiv overflow-hidden">
              <DataTable
                value={updatedRows}
                // editMode="cell"
                removableSort
                filterDisplay="row"
                showGridlines
                tableStyle={{ minWidth: "50rem" }}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                // className="ui-datatable"
                paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate=" Page {currentPage} of  {totalRecords} "
              >
                {Tcolumns.map(({ field, header }) => {
                  return (
                    <Column
                      key={field}
                      field={field}
                      header={header}
                      editor={(options) =>
                        field === "transactionType" && cellEditor(options)
                      }
                      onCellEditComplete={onCellEditComplete}
                      filter
                      filterPlaceholder="Search"
                      sortable
                      showGridlines
                      showFilterMenu={false}
                    />
                  );
                })}
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTransaction;
