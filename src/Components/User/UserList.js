import React, { useEffect, useState } from "react";
//import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; //, useParams
import TablesDataChecker from "../Checker/fieldData";
import { UserService } from "../../Service/UserService";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
import {
  getCheckValueByName,
  getCookie,
  useGetReduxData,
} from "../HtmlComponents/CommonFunction";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
import { toast } from "react-toastify";
const UserList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [is, setIs] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [userList, setUserList] = useState([]);
  //-----------------------------------------------------------------
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //-----------------------------------------------------------------
  //User Data
  // var jsonData = TablesDataChecker.find((item) => item.type === "User_list");
  //const data = jsonData.data;

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
    const isAddUser = getCheckValueByName("", "User", "Add");
    const isShowUser = getCheckValueByName("", "User", "View");
    const isUpdateUser = getCheckValueByName("", "User", "Update");
    const isDeleteUser = getCheckValueByName("", "User", "Delete");
    setIs(isAddUser);
    setIsShow(isShowUser);
    setIsUpdate(isUpdateUser);
    setIsDelete(isDeleteUser);
  }, []);

  // const columns = [
  //   {
  //     Header: <div className="float-center">User Full Name</div>,
  //     accessor: "fullName",
  //   },
  //   { Header: <div className="float-center">User ID</div>, accessor: "userId" },
  //   {
  //     Header: <div className="float-center">User Type</div>,
  //     accessor: "userType",
  //   },
  //   { Header: <div className="float-center">Role</div>, accessor: "userRole" },
  //   {
  //     Header: "Is Active",
  //     accessor: "isActive",
  //   },
  //   {
  //     Header: "Action",
  //     accessor: "id",
  //     Cell: ({ row }) => {
  //       return row.values.id;
  //     },
  //   },
  // ];

  const columns = [
    {
      field: "id",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "ID",
    },
    {
      field: "fullName",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Name",
    },
    {
      field: "userRole",
      ortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Role",
    },
    {
      field: "isActive",
      sortable: true,
      filter: true,
      showFilterMenu: false,
      header: "Is Active",
      className: "text-center p-0",
      body: "switchTemplate",
    },
    {
      field: "",
      header: "Action",
      className: "text-center",
      body: "buttonsTemplate",
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
        userName: USER.userName || "",
      },
      (res) => {
        if (res.status === 200) {
          UserList = res.data.data.users;
          setUserList(UserList);
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
    console.log("UserList->", UserList);

    return UserList;
  }

  //function handleAction(id) {}

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
            <div className="p-2 tableDiv">
              {/* <div className="col-md-11 mx-auto flex"> */}
              {/* <DataTable
                columns={columns}
                data={data} //{userList}
                // customClass="ULTable"
                detailpage="UserDetails"
                editpage="EditUser"
                deletepage="DeleteUser"
              /> */}
              <GenericDataTable
                data={userList} //{data} //
                columns={columns}
                detailpage={isShow ? "UserDetails" : ""}
                editpage={isUpdate ? "EditUser" : ""}
                deletepage={isDelete ? "DeleteUser" : ""}
                enablePagination={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
