import React, { useState } from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "../HtmlComponents/DataTable";

const AddProfile = () => {
  const [isAllCheck, setAllCheck] = useState(false);
  const { userId } = useParams();
  const profiles = [
    {
      id: 1,
      profileName: "Admin",
      profileDescription: "Admin Profile",
      isActive: true,
      createdBy: "AdminUser1",
      createdDate: "2023-08-10",
    },
    {
      id: 2,
      profileName: "PD",
      profileDescription: "PD Profile",
      isActive: true,
      createdBy: "AdminUser2",
      createdDate: "2023-08-09",
    },
    {
      id: 3,
      profileName: "Bank",
      profileDescription: "Bank Profile",
      isActive: true,
      createdBy: "AdminUser3",
      createdDate: "2023-08-08",
    },
    {
      id: 4,
      profileName: "NHAIHD",
      profileDescription: "NHAIHD Profile",
      isActive: false,
      createdBy: "AdminUser4",
      createdDate: "2023-08-07",
    },
  ];

  const profile = profiles.find((u) => u.id.toString() === userId);

  const path = window.location.pathname;
  const isEdit = path.includes("EditProfile") ? true : false;
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    profileName: Yup.string().required("Profile Name is required"),
    profileDescription: Yup.string().required(
      "Profile Description is required"
    ),
  });

  const columns = [
    {
      accessor: "menu",
    },
    {
      accessor: "subMenu",
    },
    {
      accessor: "action",
    },
    {
      accessor: "check",
      Cell: ({ value }) => (
        <input
          // className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked={value}
        />
      ),
    },
  ];
  const data = [
    {
      id: 1,
      menuName: "Home",
      subMenu: [
        { id: 1, name: "Snapshot", check: true, action: [] },
        { id: 2, name: "Financial", check: false, action: [] },
        { id: 3, name: "Financial(D)", check: false, action: [] },
        { id: 4, name: "Bank", check: true, action: [] },
        { id: 5, name: "Zone", check: true, action: [] },
        { id: 6, name: "RO", check: true, action: [] },
        { id: 7, name: "PIU", check: true, action: [] },
        { id: 8, name: "Account Level", check: true, action: [] },
        { id: 9, name: "Transaction", check: true, action: [] },
        { id: 10, name: "Ageing", check: true, action: [] },
        { id: 11, name: "Events", check: true, action: [] },
        { id: 12, name: "Limit Ledger", check: true, action: [] },
        { id: 13, name: "Velocity", check: true, action: [] },
      ],
      url: "/NHAI/Dashboard",
    },
    {
      id: 2,
      menuName: "Admin",
      url: "",
      subMenu: [
        {
          id: 1,
          name: "User",
          url: "/NHAI/Users",
          check: "",
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 2,
          name: "User Profile",
          url: "/NHAI/Profiles",
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 3,
          name: "User Group",
          url: "/NHAI/Groups",
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
        {
          id: 4,
          name: "Function Point",
          url: "/NHAI/FunctionPoint",
          action: [
            { id: 1, actionName: "List", check: true },
            { id: 2, actionName: "Modify", check: true },
            { id: 3, actionName: "Add", check: false },
            { id: 4, actionName: "View", check: false },
            { id: 5, actionName: "Delete", check: false },
          ],
        },
      ],
    },
  ];
  // ---------------------------------------------------------------------------------
  const [menuData, setMenuData] = useState(data);

  const handleCheckAll = () => {
    const updatedMenuData = menuData.map((menu) => ({
      ...menu,
      subMenu: menu.subMenu.map((subMenu) => ({
        ...subMenu,
        check: true,
        action: subMenu.action.map((action) => ({
          ...action,
          check: true,
        })),
      })),
    }));

    setMenuData(updatedMenuData);
  };

  const handleUnCheckAll = () => {
    const updatedMenuData = menuData.map((menu) => ({
      ...menu,
      subMenu: menu.subMenu.map((subMenu) => ({
        ...subMenu,
        check: false,
        action: subMenu.action.map((action) => ({
          ...action,
          check: false,
        })),
      })),
    }));

    setMenuData(updatedMenuData);
  };

  const handleCheckboxChange = (menuIndex, subMenuIndex, actionIndex) => {
    const updatedMenuData = [...menuData];

    if (
      updatedMenuData[menuIndex] &&
      updatedMenuData[menuIndex].subMenu &&
      subMenuIndex !== undefined &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex]
    ) {
      // Checkbox in submenu item clicked
      updatedMenuData[menuIndex].subMenu[subMenuIndex].check =
        !updatedMenuData[menuIndex].subMenu[subMenuIndex].check;
    }

    if (
      actionIndex !== undefined &&
      updatedMenuData[menuIndex] &&
      updatedMenuData[menuIndex].subMenu &&
      subMenuIndex !== undefined &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex] &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex].action &&
      updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex]
    ) {
      // Checkbox in action item clicked
      updatedMenuData[menuIndex].subMenu[subMenuIndex].action[
        actionIndex
      ].check =
        !updatedMenuData[menuIndex].subMenu[subMenuIndex].action[actionIndex]
          .check;
    }

    setMenuData(updatedMenuData);
  };
  // ---------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">
                {isEdit ? "Edit" : "Add"} Profile
              </h2>
              <div className="float-end mb-3 mt-3">
                <button
                  className="btn BackBtn"
                  style={{ marginRight: "10px" }}
                  type="submit"
                  onClick={() => {
                    navigate("/NHAI/Profiles");
                  }}
                >
                  Back to List
                </button>
                <button
                  className="btn addUser min"
                  style={{ marginRight: "10px" }}
                  type="submit"
                  onClick={() => {
                    //setModal(false);
                  }}
                >
                  Submit
                </button>
                {"  "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{
                  profileName: profile ? profile.profileName : "",
                  profileDescription: profile ? profile.profileDescription : "",
                  isActive: profile ? profile.isActive : "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                  //setModal(false);
                }}
              >
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label
                            htmlFor="profileName"
                            className="form-label required"
                          >
                            Profile Name
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="profileName"
                            name="profileName"
                            placeholder="Enter profile name"
                          />
                          <ErrorMessage
                            name="profileName"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="profileDescription"
                            className="form-label required"
                          >
                            Profile Description
                          </label>
                          <Field
                            type="text"
                            className="form-control"
                            id="profileDescription"
                            name="profileDescription"
                            placeholder="Enter profile description"
                          />
                          <ErrorMessage
                            name="profileDescription"
                            component="div"
                            className="error"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="group"
                            className="form-label required"
                          >
                            Group
                          </label>
                          <Field
                            as="select"
                            className="form-control form-select"
                            id="profileDescription"
                            name="group"
                          >
                            <option value="">Select Group</option>
                            <option value=""></option>
                          </Field>
                          <ErrorMessage
                            name="profileDescription"
                            component="div"
                            className="error"
                          />
                        </div>
                        {isEdit ? (
                          <div className="mb-3">
                            <label htmlFor="IsActive" className="form-label ">
                              Is Active
                            </label>
                            <br />
                            <Field
                              name="isActive"
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              style={{ width: "30px", height: "30px" }}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

          {/* -----------------Profile Mapping--------------------------------------------------------- */}
          <div className="row ">
            {/* border border-dark rounded-2 m-2 */}
            {/* ---------------------Title------------------------------------------------------------- */}
            {/* <div className="row "> */}
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Profile Mapping</h2>
              <div className="float-end mb-1 mt-4 mx-3">
                <button
                  className="btn addUser"
                  type="button"
                  style={{ marginRight: "10px", minWidth: "110px" }}
                  onClick={() => {
                    // setAllCheck(true);

                    handleCheckAll();
                  }}
                >
                  Check All
                </button>{" "}
                <button
                  className="btn addUser"
                  type="button"
                  onClick={() => {
                    // setAllCheck(false);
                    handleUnCheckAll();
                  }}
                >
                  UnCheck All
                </button>{" "}
              </div>
            </div>
            {/* </div> */}
            {/* -------------------------------------------------------------------------------------- */}
            <div className="col-md-11 mx-5 flex p-4">
              {(menuData || []).map((m, mindex) => {
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
                                  className="form-check-input"
                                  type="checkbox"
                                  id="submenu"
                                  checked={s.check}
                                  //checked={s.check || isAllCheck}
                                  onChange={() =>
                                    handleCheckboxChange(mindex, sindex)
                                  }
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
                                    className="form-check-input"
                                    type="checkbox"
                                    id="submenu"
                                    checked={a.check}
                                    //  checked={a.check || isAllCheck}
                                    onClick={(e) => {
                                      console.log("Action -> ", s, a);
                                    }}
                                    onChange={() =>
                                      handleCheckboxChange(
                                        mindex,
                                        sindex,
                                        aindex
                                      )
                                    }
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
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
