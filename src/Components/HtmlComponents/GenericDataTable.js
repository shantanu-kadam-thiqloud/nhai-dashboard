import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Hyperlink from "../Home/Hyperlink";

const GenericDataTable = ({ data, columns, detailpage, editpage, deletepage }) => {
  const [switchStates, setSwitchStates] = useState({});
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [rowdata, setRData] = useState("");

  const switchTemplate = (row) => (
    <Switch
      id={`flexSwitchCheckChecked-${row.id}`}
      checked={switchStates[row.id] || false}
      onChange={() => handleSwitchToggle(row.id)}
      className="ActiveSwitch"
    />
  );

  const buttonsTemplate = (row) => (
    <>
      <FontAwesomeIcon
        icon={faEye}
        onClick={() => handleEyeAction(row)}
        style={{ cursor: "pointer", marginRight: "8px" }}
      />
      <FontAwesomeIcon
        icon={faEdit}
        style={{ cursor: "pointer", marginRight: "8px" }}
        onClick={() => handleEditAction(row)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        style={{ cursor: "pointer" }}
        onClick={() => handleTrashAction(row)}
      />
    </>
  );

  useEffect(() => {
    const initialSwitchStates = data.reduce((acc, row) => {
      acc[row.id] = row.isActive;
      return acc;
    }, {});
    setSwitchStates(initialSwitchStates);
  }, [data]);

  const handleSwitchToggle = (rowId) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  const handleEyeAction = (user) => {
    navigate(`/NHAI/${detailpage}/${user.id}`);
  };
  const handleEditAction = (user) => {
    navigate(`/NHAI/${editpage}/${user.id}`);
  };
  const handleTrashAction = (user) => {
    navigate(`/NHAI/${deletepage}/${user.id}`);
  };

  const getTemplate = (field, template) => {
    if(field === "isActive"){
    return switchTemplate;
    }else if(field === ""){
        return buttonsTemplate;
    }else if(template === "HyperLinkTemplate"){
       return createTemplate(field)
    }
  }

  const createTemplate = (fieldName) => (row) => (
    <a
      href="#"
      onClick={() => {
        setRData(row);
        setIsOpen(true);
      }}
      style={{ color: "black" }}
    >
      {row[fieldName]}
    </a>
  );

  return (
    <>
    <DataTable value={data} removableSort filterDisplay="row" showGridlines tableStyle={{ minWidth: '50rem' }}>
      {columns.map((column) => (
        <Column
          key={column.field}
          field={column.field}
          sortable={column.sortable}
          filter={column.filter}
          filterPlaceholder="Search"
          showGridlines={column.showGridlines}
          showFilterMenu={column.showFilterMenu}
          header={column.header}
          className={column.className}
          body={getTemplate(column.field, column.body) }
        ></Column>
      ))}
    </DataTable>
    <Hyperlink isOpen={isOpen} setModal={setIsOpen} row={rowdata} />
    </>
  );
};

export default GenericDataTable;
