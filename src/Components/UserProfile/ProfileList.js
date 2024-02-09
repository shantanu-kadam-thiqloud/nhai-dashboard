import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ProfileService } from "../../Service/ProfileService";
import Spinner from "../HtmlComponents/Spinner";
import { v4 as uuid } from "uuid";

const UserList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profileList, setProfileList] = useState([]);
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

  const columns = [
    { Header: "Profile Name", accessor: "profileName" },
    { Header: "Profile Description", accessor: "profileDescription" },
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
        if (res.status == 200) {
          ProfileList = res.data.profiles;
          // console.log("UserList->", UserList);
          setProfileList(ProfileList);
          setIsLoading(false);
        } else if (res.status == 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status == 500) {
          prompt("500 Internal Server Error...!");
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="p-2">
              {/* col-md-11 mx-auto flex */}
              <DataTable
                columns={columns}
                data={profileList} //{data}
                // customClass="ULTable"
                detailpage="ProfileDetails"
                editpage="EditProfile"
                deletepage="DeleteProfile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
