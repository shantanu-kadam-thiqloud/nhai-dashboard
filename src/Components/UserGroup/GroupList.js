import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AddGroup from "./AddGroup";
import { useNavigate } from "react-router-dom";
import { GroupService } from "../../Service/GroupService";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
const GroupList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const data = [
    {
      id: 1,
      groupName: "Admin Group",
      groupDescription: "Admin Group Description",
      isActive: true,
    },
    {
      id: 2,
      groupName: "Finance Group",
      groupDescription: "Finance Group Description",
      isActive: true,
    },
    {
      id: 3,
      groupName: "HR Group",
      groupDescription: "HR Group Description",
      isActive: true,
    },
    {
      id: 4,
      groupName: "IT Group",
      groupDescription: "IT Group Description",
      isActive: false,
    },
  ];

  const columns = [
    { Header: "Group Name", accessor: "groupName" },
    { Header: "Group Description", accessor: "groupDescription" },
    {
      Header: "Is Active",
      accessor: "isActive",
      Cell: ({ value }) => (
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked={value}
        />
      ),
    },
    {
      Header: "Action",
      accessor: "id",
      Cell: ({ row }) => {
        return row.values.id;
      },
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    fetchGroupList();
  }, []);

  function fetchGroupList() {
    var GroupList = [];

    GroupService.getGroupList(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          GroupList = res.data.groups;
          // console.log("UserList->", UserList);
          setGroupList(GroupList);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error..!");
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
    return GroupList;
  }

  function handleAction(id) {
    // Implement your action logic here based on the id
  }

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Group Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setIsOpen(true);
                    navigate("/NHAI/AddGroup");
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                  Add New Group
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* col-md-11 mx-auto flex */}
              <DataTable
                columns={columns}
                data={groupList || data} //{groupList} //{data}
                //  customClass="ULTable"
                detailpage="GroupDetails"
                editpage="EditGroup"
                deletepage="DeleteGroup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
