import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ProfileService } from "../../Service/ProfileService";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";
import { getCheckValueByName } from "../HtmlComponents/CommonFunction";
import sideBarDataChecker from "../Checker/sideBarData";
import GenericDataTable from "../HtmlComponents/GenericDataTable";
const UserList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileList, setProfileList] = useState([]);
  const [is, setIs] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const data = [
    {
      id: 1,
      profileName: "Admin",
      profileDescription: "Admin Profile",
      isActive: true,
    },
    {
      id: 2,
      profileName: "PD",
      profileDescription: "PD Profile",
      isActive: true,
    },
    {
      id: 3,
      profileName: "Bank",
      profileDescription: "Bank Profile",
      isActive: true,
    },
    {
      id: 4,
      profileName: "NHAIHD",
      profileDescription: "NHAIHD Profile",
      isActive: false,
    },
  ];

  useEffect(() => {
    const isAddUser = getCheckValueByName("", "User Profile", "Add");
    const isShowUser = getCheckValueByName("", "User Profile", "View");
    const isUpdateUser = getCheckValueByName("", "User Profile", "Update");
    const isDeleteUser = getCheckValueByName("", "User Profile", "Delete");
    setIs(isAddUser);
    setIsShow(isShowUser);
    setIsUpdate(isUpdateUser);
    setIsDelete(isDeleteUser);
  }, []);

  // const columns = [
  //   { Header: "Profile Name", accessor: "profileName" },
  //   { Header: "Profile Description", accessor: "profileDescription" },
  //   {
  //     Header: "Is Active",
  //     accessor: "isActive",
  //     Cell: ({ value }) => (
  //       <input
  //         className="form-check-input"
  //         type="checkbox"
  //         id="flexSwitchCheckChecked"
  //         checked={value}
  //       />
  //     ),
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
      filterPlaceholder: "Search",
      showGridlines: true,
      showFilterMenu: false,
      header: "ID",
    },
    {
      field: "profileName",
      sortable: true,
      filter: true,
      filterPlaceholder: "Search",
      showFilterMenu: false,
      header: "Profile Name",
    },
    {
      field: "profileDescription",
      sortable: true,
      filter: true,
      filterPlaceholder: "Search",
      showFilterMenu: false,
      header: "Profile Description",
    },
    {
      field: "isActive",
      sortable: true,
      filter: true,
      filterPlaceholder: "Search",
      showFilterMenu: false,
      header: "Is Active",
      className: "text-center p-0",
      body: "switchTemplate",
    },
    {
      field: "",
      header: "Action",
      body: "buttonsTemplate",
      className: "text-center",
    },
  ];

  // //Side bar Data
  // var sidejsonData = sideBarDataChecker.find(
  //   (item) => item.type === "menuData"
  // );
  // const sidebarMockData = sidejsonData.data;
  // const isAddProfile = getCheckValueByName(
  //   sidebarMockData,
  //   "User Profile",
  //   "Add"
  // );

  useEffect(() => {
    setIsLoading(true);
    fetchProfileList();
  }, []);

  function fetchProfileList() {
    var ProfileList = [];
    ProfileService.getProfileList(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          ProfileList = res.data.data.profiles;
          // console.log("UserList->", UserList);
          setProfileList(ProfileList);
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
        console.error("error->", error);
        setIsLoading(false);
      }
    );
    return ProfileList;
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
              <h2 className="mb-3 mt-3 pageTitle">Profile Listing</h2>
              <div className="addUserBtnDiv  mt-3">
                {is ? (
                  <button
                    className="btn addUser"
                    type="button"
                    onClick={() => {
                      // setIsOpen(true);
                      navigate("/NHAI/AddProfile");
                    }}
                  >
                    <FontAwesomeIcon icon={faPlusCircle} className="plusIcon" />
                    Add New Profile
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2 tableDiv">
              {/* col-md-11 mx-auto flex */}
              {/* <DataTable
                columns={columns}
                data={profileList} //{data}
                // customClass="ULTable"
                detailpage="ProfileDetails"
                editpage="EditProfile"
                deletepage="DeleteProfile"
              /> */}
              <GenericDataTable
                data={profileList} //{data}
                columns={columns}
                detailpage={isShow ? "ProfileDetails" : ""}
                editpage={isUpdate ? "EditProfile" : ""}
                deletepage={isDelete ? "DeleteProfile" : ""}
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
