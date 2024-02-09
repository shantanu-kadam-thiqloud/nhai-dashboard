import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddGroup from "./AddGroup";
import { GroupService } from "../../Service/GroupService";
import { ConvertFormat } from "../HtmlComponents/CommonFunction";
import Spinner from "../HtmlComponents/Spinner";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
function GroupDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [group, setGroup] = useState({});

  // const groups = [
  //   {
  //     id: 1,
  //     groupName: "Admin Group",
  //     groupDescription: "Admin Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser1",
  //     createdDate: "2023-08-10",
  //   },
  //   {
  //     id: 2,
  //     groupName: "Finance Group",
  //     groupDescription: "Finance Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser2",
  //     createdDate: "2023-08-09",
  //   },
  //   {
  //     id: 3,
  //     groupName: "HR Group",
  //     groupDescription: "HR Group Description",
  //     isActive: true,
  //     createdBy: "AdminUser3",
  //     createdDate: "2023-08-08",
  //   },
  //   {
  //     id: 4,
  //     groupName: "IT Group",
  //     groupDescription: "IT Group Description",
  //     isActive: false,
  //     createdBy: "AdminUser4",
  //     createdDate: "2023-08-07",
  //   },
  // ];

  useEffect(() => {
    fetchGroupById();
  }, []);

  //const group = groups.find((g) => g.id.toString() === userId);
  const path = window.location.pathname;
  const isDelete = path.includes("DeleteGroup") ? true : false;
  if (!group) {
    return <p>Group not found.</p>;
  }

  //-----------Get Group Function-----------------------------------------------
  function fetchGroupById() {
    var group = {};
    GroupService.getGroupById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        id: Number(userId),
        userName: "nhai",
      },
      (res) => {
        //meta data issue
        if (res.status == 200) {
          group = res.data;
          setGroup(group);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error...!");
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
    console.log("group->", group);
    return group;
  }

  //-----------Delete Group Function-----------------------------------------------
  function DeleteGroupById() {
    GroupService.deleteGroup(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        requsterUserId: "6789",
        id: Number(userId),
        userName: "nhai",
        requestType: "Delete",
        status: "Initiated",
        //------------------------
        groupName: group.groupName, //"Backend Developer",
        groupDescription: group.groupDescription, //"Developer Group",
        isActive: Boolean(group.isActive),
        createdDate: ConvertFormat(group.createdDate),
        createdBy: group.createdBy,
      },
      (res) => {
        if (res.status == 200) {
          toast.success(res.data.responseMetaData.message, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Groups");
        } else if (res.status == 404) {
          toast.error("404 Not found !", {
            position: "top-right",
            autoClose: 3000,
          });
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          toast.error("Request failed 500. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
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
    <div className="container UDContainer">
      <Spinner isLoading={isLoading} />
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
            <div className="col-md-6 UDCoulmns">
              {ConvertFormat(group.createdDate)}
            </div>
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
                if (isDelete) {
                  DeleteGroupById();
                }
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
