import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddGroup from "./AddGroup";

function GroupDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const groups = [
    {
      id: 1,
      groupName: "Admin Group",
      groupDescription: "Admin Group Description",
      isActive: true,
      createdBy: "AdminUser1",
      createdDate: "2023-08-10",
    },
    {
      id: 2,
      groupName: "Finance Group",
      groupDescription: "Finance Group Description",
      isActive: true,
      createdBy: "AdminUser2",
      createdDate: "2023-08-09",
    },
    {
      id: 3,
      groupName: "HR Group",
      groupDescription: "HR Group Description",
      isActive: true,
      createdBy: "AdminUser3",
      createdDate: "2023-08-08",
    },
    {
      id: 4,
      groupName: "IT Group",
      groupDescription: "IT Group Description",
      isActive: false,
      createdBy: "AdminUser4",
      createdDate: "2023-08-07",
    },
  ];

  const group = groups.find((g) => g.id.toString() === userId);
  const path = window.location.pathname;
  const isDelete = path.includes("DeleteGroup") ? true : false;
  if (!group) {
    return <p>Group not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete Group" : "Group Details"}
            </h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          {isDelete ? (
            <h4 className="mb-4 mx-5">
              Are you sure you want to delete this ?
            </h4>
          ) : (
            ""
          )}
          <div className="col-md-11 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Group Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{group.groupName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Group Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{group.groupDescription}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={group.isActive}
                readOnly
              />
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{group.createdBy}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{group.createdDate}</div>
          </div>
        </div>
        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end mt-3">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/Groups");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                navigate(
                  `/NHAI/${isDelete ? "DeleteGroup" : "EditGroup"}/${group.id}`
                );
              }}
            >
              {isDelete ? "Delete" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails;
