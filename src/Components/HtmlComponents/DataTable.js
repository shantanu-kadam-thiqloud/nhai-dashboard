import React, { useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Switch from "@mui/material/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import AddUser from "../User/AddUser";

const DataTable = ({
  columns,
  data,
  customClass,
  detailpage,
  editpage,
  deletepage,
  showSearchBar,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      autoResetSortBy: false,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;
  const [switchStates, setSwitchStates] = useState({});
  const navigate = useNavigate();
  const handleEyeAction = (user) => {
    //navigate(`/NHAI/UserDetails/${user.userId}`);
    navigate(`/NHAI/${detailpage}/${user.id}`);
  };
  const handleEditAction = (user) => {
    // navigate(`/NHAI/UserDetails/${user.userId}`);
    navigate(`/NHAI/${editpage}/${user.id}`);
  };
  const handleTrashAction = (user) => {
    // navigate(`/NHAI/UserDetails/${user.userId}`);
    navigate(`/NHAI/${deletepage}/${user.id}`);
  };

  useEffect(() => {
    // Initialize the switch states based on the 'isActive' property in data
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

  return (
    <div className="tableDiv">
      {showSearchBar && (
        <input
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      )}
      <table {...getTableProps()} className={`${customClass} tableBorder`}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="tableBorder" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.Header === "Is Active") {
                    const rowId = row.original.id;
                    return (
                      <td
                        className="text-center"
                        {...cell.getCellProps()}
                        title={cell.value}
                      >
                        <Switch
                          id={`flexSwitchCheckChecked-${rowId}`}
                          checked={switchStates[rowId] || false}
                          onChange={() => handleSwitchToggle(rowId)}
                          color="primary"
                        />
                      </td>
                    );
                  } else if (cell.column.Header === "Action") {
                    return (
                      <td
                        className="text-center"
                        {...cell.getCellProps()}
                        title={cell.value}
                      >
                        {/* Add icons for eye, edit, and delete actions */}

                        <FontAwesomeIcon
                          className="tableIcon"
                          icon={faEye}
                          onClick={() => handleEyeAction(cell.row.original)}
                        />
                        <FontAwesomeIcon
                          className="tableIcon"
                          icon={faEdit}
                          onClick={() => handleEditAction(cell.row.original)}
                        />
                        <FontAwesomeIcon
                          className="tablePointer"
                          icon={faTrash}
                          onClick={() => handleTrashAction(cell.row.original)}
                        />
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()} title={cell.value}>
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
