import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import TablesDataChecker from "../Checker/fieldData";
import sideBarDataChecker from "../Checker/sideBarData";
import { UserService } from "../../Service/UserService";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
import { getCheckValueByName } from "../HtmlComponents/CommonFunction";
const UserList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [is, setIs] = useState(false);
  const [userList, setUserList] = useState([]);
  //User Data
  var jsonData = TablesDataChecker.find((item) => item.type === "User_list");
  const data = jsonData.data;
  //Side bar Data
  var sidejsonData = sideBarDataChecker.find(
    (item) => item.type === "menuData"
  );
  const sidebarMockData = sidejsonData.data;

  const isAddUser = getCheckValueByName(sidebarMockData, "User", "Add");
  // (sidebarMockData || []).find((x) => {
  //   if (x.menuName === "Admin") {
  //     return (x.subMenu || []).find((s) => {
  //       if (s.name === "User") {
  //         return (s.action || []).find((a) => {
  //           if (a.actionName === "Add") {
  //             //console.log("Is add user ->", a.check);
  //             return a.check;
  //           }
  //         });
  //       }
  //     });
  //   }
  // }) !== undefined;

  useEffect(() => {
    setIs(isAddUser);
  }, []);

  const columns = [
    {
      Header: <div className="float-center">User Full Name</div>,
      accessor: "fullName",
    },
    { Header: <div className="float-center">User ID</div>, accessor: "userId" },
    {
      Header: <div className="float-center">User Type</div>,
      accessor: "userType",
    },
    { Header: <div className="float-center">Role</div>, accessor: "userRole" },
    {
      Header: "Is Active",
      accessor: "isActive",
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
    fetchUserList();
  }, []);

  function fetchUserList() {
    var UserList = [];
    UserService.getUserList(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          UserList = res.data.users;
          setUserList(UserList);
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
    console.log("UserList->", UserList);

    return UserList;
  }

  function handleAction(id) {}

  const HandleAddUser = () => {
    navigate("/NHAI/AddUser");
  };

  return (
    <div className="wrapper">
      <Spinner isLoading={isLoading} />
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">User Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                {is ? (
                  <button
                    className="btn addUser"
                    type="button"
                    onClick={HandleAddUser}
                  >
                    <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                    Add New User
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* <div className="col-md-11 mx-auto flex"> */}
              <DataTable
                columns={columns}
                data={userList} //{data}
                // customClass="ULTable"
                detailpage="UserDetails"
                editpage="EditUser"
                deletepage="DeleteUser"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
