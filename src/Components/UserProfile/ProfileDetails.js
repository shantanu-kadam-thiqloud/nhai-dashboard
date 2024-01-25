import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileService } from "../../Service/ProfileService";

function UserDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const [mapping, setMapping] = useState([]);

  // const profiles = [
  //   {
  //     id: 1,
  //     profileName: "Admin",
  //     profileDescription: "Admin Profile",
  //     group: "",
  //     isActive: true,
  //     createdBy: "AdminUser1",
  //     createdDate: "2023-08-10",
  //   },
  //   {
  //     id: 2,
  //     profileName: "PD",
  //     profileDescription: "PD Profile",
  //     group: "",
  //     isActive: true,
  //     createdBy: "AdminUser2",
  //     createdDate: "2023-08-09",
  //   },
  //   {
  //     id: 3,
  //     profileName: "Bank",
  //     profileDescription: "Bank Profile",
  //     group: "",
  //     isActive: true,
  //     createdBy: "AdminUser3",
  //     createdDate: "2023-08-08",
  //   },
  //   {
  //     id: 4,
  //     profileName: "NHAIHD",
  //     profileDescription: "NHAIHD Profile",
  //     group: "",
  //     isActive: false,
  //     createdBy: "AdminUser4",
  //     createdDate: "2023-08-07",
  //   },
  // ];
  // const data = [
  //   {
  //     id: 1,
  //     menuName: "Home",
  //     url: "/NHAI/Dashboard",
  //     subMenu: [
  //       { id: 1, name: "Snapshot", check: true, action: [] },
  //       { id: 2, name: "Financial", check: false, action: [] },
  //       { id: 3, name: "Financial(D)", check: false, action: [] },
  //       { id: 4, name: "Bank", check: true, action: [] },
  //       { id: 5, name: "Zone", check: true, action: [] },
  //       { id: 6, name: "RO", check: true, action: [] },
  //       { id: 7, name: "PIU", check: true, action: [] },
  //       { id: 8, name: "Account Level", check: true, action: [] },
  //       { id: 9, name: "Transaction", check: true, action: [] },
  //       { id: 10, name: "Ageing", check: true, action: [] },
  //       { id: 11, name: "Events", check: true, action: [] },
  //       { id: 12, name: "Limit Ledger", check: true, action: [] },
  //       { id: 13, name: "Velocity", check: true, action: [] },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     menuName: "Admin",
  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "User",
  //         url: "/NHAI/Users",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         name: "User Profile",
  //         url: "/NHAI/Profiles",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 3,
  //         name: "User Group",
  //         url: "/NHAI/Groups",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 4,
  //         name: "Function Point",
  //         url: "/NHAI/FunctionPoint",
  //         check: false,
  //         action: [
  //           { id: 1, actionName: "List", check: true },
  //           { id: 2, actionName: "Modify", check: true },
  //           { id: 3, actionName: "Add", check: false },
  //           { id: 4, actionName: "View", check: false },
  //           { id: 5, actionName: "Delete", check: false },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         name: "Assign Rights",
  //         url: "/NHAI/AssignRights",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 6,
  //         name: "Rule",
  //         url: "/NHAI/Rule",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 7,
  //         name: "File Upload",
  //         url: "/NHAI/FileUpload",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 8,
  //         name: "Mapping Master",
  //         url: "/NHAI/MappingMaster",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 9,
  //         name: "Job Execution Log",
  //         url: "/NHAI/JobLog",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     menuName: "Manage Password",
  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "Change Password",
  //         url: "/NHAI/ChangePassword",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     menuName: "Reports",

  //     url: "#",
  //     subMenu: [
  //       {
  //         id: 1,
  //         name: "User Login Report",
  //         url: "/NHAI/UserLoginReport",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 2,
  //         name: "User Active/Inactive",
  //         url: "/NHAI/UserActiveInactiveReport",
  //         check: false,
  //         action: [],
  //       },
  //       {
  //         id: 3,
  //         name: "FIFO Ageing Report",
  //         url: "/NHAI/FIFOAgeingReport",
  //         check: false,
  //         action: [],
  //       },
  //     ],
  //   },
  // ];
  //const profile = profiles.find((u) => u.id.toString() === userId);

  useEffect(() => {
    fetchProfileById();
  }, []);

  function fetchProfileById() {
    var profile = {};
    var profileId = parseInt("47", 10);
    ProfileService.getProfileById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: "ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        id: profileId,
        userName: "nhai",
      },
      (res) => {
        if (res.data.responseMetaData.status === "200") {
          profile = res.data;
          // console.log("UserList->", UserList);
          setMapping(res.data.mapping);
          setProfile(profile);
        }
        //   return data;
      }
    );
    console.log("profile->", profile);
    return profile;
  }

  const path = window.location.pathname;
  const isDelete = path.includes("DeleteProfile") ? true : false;
  if (!profile) {
    return <p>Function not found.</p>;
  }

  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-3 mt-3 pageTitle">
              {isDelete ? "Delete Profile" : "Profile Details"}
            </h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          {isDelete ? (
            <h4 className="mb-4 mx-5">
              {isDelete ? "Are you sure you want to delete this?" : ""}
            </h4>
          ) : (
            ""
          )}
          <div className="col-md-11 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Profile Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.profileName}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Profile Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {profile.profileDescription}
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Is Active:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">
              {/* {profile.isActive ? "Yes" : "No"} */}
              <input
                name="isActive"
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={profile.isActive}
                readOnly
              />
            </div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created By:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.createdBy}</div>

            <div className="col-md-6 UDCoulmns">
              <strong>Created Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{profile.createdDate}</div>
          </div>
        </div>

        {/* -----------------Profile Mapping--------------------------------------------------------- */}
        <div className="row ">
          {/* border border-dark rounded-2 m-2 */}
          {/* ---------------------Title------------------------------------------------------------- */}
          {/* <div className="row "> */}
          <div className="col-md-12">
            <h2 className="mb-3 mt-3 pageTitle">Profile Mapping</h2>
          </div>
          {/* </div> */}
          {/* -------------------------------------------------------------------------------------- */}
          <div className="col-md-11 mx-5 flex p-4">
            {(mapping || []).map((m, mindex) => {
              //data
              return (
                <div className="row p-1" key={m.id}>
                  <div className="row menuColor">
                    <div className="col ">{m.menuName}</div>
                  </div>
                  {(m.subMenu || []).map((s, sindex) => {
                    return (
                      <>
                        <div className="row p-1">
                          <div className="col-4 submenuColor"></div>
                          <div className="col-4 submenuColor ">{s.name}</div>
                          <div className="col-3 submenuColor"></div>
                          {s.action.length == 0 ? (
                            <div className="col-1 submenuColor" key={s.id}>
                              {" "}
                              <input
                                readOnly
                                className="form-check-input"
                                type="checkbox"
                                id="submenu"
                                checked={s.check}
                                //checked={s.check || isAllCheck}

                                onClick={(e) => {
                                  console.log("Submenu -> ", s);
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              className="col-1 submenuColor"
                              key={s.id}
                            ></div>
                          )}
                        </div>
                        {(s.action || []).map((a, aindex) => {
                          return (
                            <div className="row p-1" key={a.id}>
                              <div className="col-4 submenuColor"></div>
                              <div className="col-4 submenuColor"></div>
                              <div className="col-3  submenuColor">
                                {a.actionName}
                              </div>
                              <div className="col-1 submenuColor" key={a.id}>
                                {" "}
                                <input
                                  readOnly
                                  className="form-check-input"
                                  type="checkbox"
                                  id="submenu"
                                  checked={a.check}
                                  //  checked={a.check || isAllCheck}
                                  onClick={(e) => {
                                    console.log("Action -> ", s, a);
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------------------------------------------------------------------------------------------------------- */}
        <div className="row">
          <div className="addUserBtnDiv col-md-10 text-end mt-3">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/Profiles");
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
                  `/NHAI/${
                    isDelete ? "DeleteProfile" : "EditProfile"
                  }/${userId}`
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

export default UserDetails;
