import React, { useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Switch from "@mui/material/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const DataTable = ({
  columns,
  data,
  customClass,
  detailpage,
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
    // navigate(`/NHAI/UserDetails/${user.userId}`);
    navigate(`/NHAI/${detailpage}/${user.id}`);
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
      <table
        {...getTableProps()}
        className={customClass}
        style={{ border: "1px solid black" }}
      >
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
              <tr
                {...row.getRowProps()}
                style={{ borderBottom: "1px solid black" }}
              >
                {row.cells.map((cell) => {
                  if (cell.column.Header === "Is Active") {
                    const rowId = row.original.id;
                    return (
                      <td {...cell.getCellProps()}>
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
                      <td {...cell.getCellProps()}>
                        {/* Add icons for eye, edit, and delete actions */}
                        {/* <FontAwesomeIcon icon={faEye} onClick={() => handleEyeAction(cell.row.original)} style={{ cursor: 'pointer', marginRight: '8px' }} /> */}
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => handleEyeAction(cell.row.original)}
                          style={{ cursor: "pointer", marginRight: "8px" }}
                        />
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ cursor: "pointer", marginRight: "8px" }}
                        />
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
