import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import { MenuService } from "../../Service/MenuService";
import { getCookie, useGetReduxData } from "../HtmlComponents/CommonFunction";
import { toast } from "react-toastify";

const MenuManagement = () => {
  const navigate = useNavigate();
  const [isMenu, setMenu] = useState(false);
  const [isSubmenu, setSubmenu] = useState(false);
  const [isAction, setAction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //----------------------------------------------
  const location = useLocation();
  const userId = location.state ? location.state.requestId : ""; //useParams();
  //-----------------------------------------------------------------
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //-----------------------------------------------------------------
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMenuId, setSelectedMenuId] = useState("");
  const [selectedSubmenuList, setSelectedSubmenuList] = useState([]);
  const [selectedSubmenu, setSelectedSubmenu] = useState("");
  const [selectedSubmenuId, setSelectedSubmenuId] = useState("");
  const [selectedActionList, setSelectedActionList] = useState([]);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedActionObject, setSelectedActionObject] = useState([]);
  const [selectedActionId, setSelectedActionId] = useState("");
  //------------------------------------------------------------
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const validationSchema = yup.object({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z0-9\s.,/_:-]*$/,
        "Name should not contain special characters"
      )
      .required("Name is required"),
    url: yup
      .string()
      .matches(
        /^[a-zA-Z0-9\s.,/_:-]*$/,
        "Url should not contain special characters"
      )
      .required("Url is required"),
  });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      //boxShadow: "1px 2px #888888",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    setIsLoading(true);
    FetchMenuJson();
  }, []);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [editmodalIsOpen, setIsEditOpen] = React.useState(false);
  function openEditModal() {
    setIsEditOpen(true);
  }
  function closeEditModal() {
    setIsEditOpen(false);
  }
  const [deletemodalIsOpen, setIsDeleteOpen] = React.useState(false);
  function openDeleteModal() {
    setIsDeleteOpen(true);
  }
  function closeDeleteModal() {
    setIsDeleteOpen(false);
  }

  const menuData = [
    {
      id: 1,
      menuName: "Home",
      url: "/NHAI/Dashboard",
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
    },
    {
      id: 2,
      menuName: "Admin",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User",
          url: "/NHAI/Users",
          check: true,
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
          check: true,
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
          check: true,
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
          name: "Menu Management",
          url: "/NHAI/MenuManagement",
          check: true,
          action: [],
        },
        {
          id: 5,
          name: "Assign Rights",
          url: "/NHAI/AssignRights",
          check: false,
          action: [],
        },
        {
          id: 6,
          name: "Rule",
          url: "/NHAI/Rule",
          check: false,
          action: [],
        },
        {
          id: 7,
          name: "File Upload",
          url: "/NHAI/FileUpload",
          check: true,
          action: [],
        },
        {
          id: 8,
          name: "Mapping Master",
          url: "/NHAI/MappingMaster",
          check: true,
          action: [],
        },
        {
          id: 9,
          name: "Job Execution Log",
          url: "/NHAI/JobExecutionLog",
          check: true,
          action: [],
        },
      ],
    },
    {
      id: 3,
      menuName: "Manage Password",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "Change Password",
          url: "/NHAI/ChangePassword",
          check: true,
          action: [],
        },
      ],
    },
    {
      id: 4,
      menuName: "Reports",
      url: "#",
      subMenu: [
        {
          id: 1,
          name: "User Login Report",
          url: "/NHAI/UserLoginReport",
          check: true,
          action: [],
        },
        {
          id: 2,
          name: "User Active/Inactive",
          url: "/NHAI/UserActiveInactiveReport",
          check: true,
          action: [],
        },
        {
          id: 3,
          name: "FIFO Ageing Report",
          url: "/NHAI/FIFOAgeingReport",
          check: true,
          action: [],
        },
      ],
    },
  ];
  const [data, setData] = useState([]);
  function FetchMenuJson() {
    MenuService.getMenu_Json_Data(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER.userName, //"Sumit",
      },
      (res) => {
        if (res.status === 200) {
          var json = res.data.data.jsonData;
          var jsonObject = JSON.parse(json);
          console.log("details->", jsonObject);
          setData(jsonObject || menuData);
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //--API Call-----------------------------------------------------------------------------------
  function AddDeleteMenu(obj, operation) {
    MenuService.addMenu_Submenu_Action(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER.userName, //"first",
        requsterUserId: USER.userId, //"6789",
        requestType: operation === "Add" ? "Add" : "Delete",
        status: "Initiated",
        menuType: isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action",
        requestObject: obj,
      },
      (res) => {
        if (res.status === 200) {
          var details = `Successfully requested for ${operation} a ${
            isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"
          }.`;
          console.log("details->", res.data.data.responseMetaData.message);

          toast.success(details, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });

          closeModal();
          closeDeleteModal();

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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }

  function UpdateMenu(obj, oldObj) {
    MenuService.updateMenu_Submenu_Action(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        userName: USER.userName, //"first",
        requsterUserId: USER.userId, //"6789",
        requestType: "Update",
        status: "Initiated",
        menuType: isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action",
        requestObject: obj,
        requestOldObject: oldObj,
      },
      (res) => {
        if (res.status === 200) {
          var details = `Successfully requested for Update a ${
            isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"
          }.`;
          console.log("details->", res.data.data.responseMetaData.message);
          toast.success(details, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });
          closeEditModal();
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
        toast.error(error, {
          position: "top-right",
          autoClose: 3000,
        });
        setIsLoading(false);
        console.error("Error->", error);
      }
    );
  }
  //----------------------------------------------------------------------------------------------------------------
  function getNextMenuId(data) {
    if (data.length === 0) {
      return 1; // If data is empty, return a default starting ID
    }
    return Math.max(...data.map((item) => item.id)) + 1;
  }

  function getNextSubMenuId(subMenu) {
    if (subMenu.length === 0) {
      return 1; // If subMenu is empty, return a default starting ID
    }
    return Math.max(...subMenu.map((item) => item.id)) + 1;
  }

  function getNextActionId(actions) {
    if (actions.length === 0) {
      return 1; // If actions is empty, return a default starting ID
    }
    return Math.max(...actions.map((item) => item.id)) + 1;
  }
  //---Modal-onSubmit------------------------------------------------------------------------------------------------
  const handleAddSubmit = (values, { resetForm, setSubmitting }, actions) => {
    if (isMenu && values.name !== "" && values.url !== "") {
      const nextId = getNextMenuId(data);
      AddDeleteMenu(
        {
          id: Number(nextId + 1), //uuid(),
          menuName: values.name, //"New Menu",
          url: values.url, //"/NHAI/NewMenu",
          subMenu: [],
        },
        "Add"
      );
      // closeModal();
    } else if (isSubmenu && values.name !== "" && values.url !== "") {
      const menu = data.find((item) => item.id === selectedMenuId);
      const nextId = getNextSubMenuId(menu.subMenu);
      AddDeleteMenu(
        {
          menuName: selectedMenu,
          subMenuObj: {
            id: Number(nextId + 1), //uuid(),
            name: values.name, //"New Submenu",
            url: values.url, //"/NHAI/NewSubMenu",
            check: false,
            oldCheck: false,
            action: [],
          },
        },
        "Add"
      );
      // closeModal();
    } else if (isAction) {
      if (values.name !== "") {
        const menu = data.find((item) => item.id === selectedMenuId);
        const subMenu = menu.subMenu.find(
          (sub) => sub.id === selectedSubmenuId
        );
        const nextId = getNextActionId(subMenu.action);
        AddDeleteMenu(
          {
            menuName: selectedMenu,
            subMenuName: selectedSubmenu,
            actionObj: {
              id: Number(nextId + 1), //uuid(),
              name: values.name,
              // url:values.url,
              check: false,
              oldCheck: false,
            },
          },
          "Add"
        );
      }
      // closeModal();
    } else {
      return;
    }
    setIsLoading(false);
  };
  const handleUpdateSubmit = (
    values,
    { resetForm, setSubmitting },
    actions
  ) => {
    if (isMenu && values.name !== "" && values.url !== "") {
      UpdateMenu(
        {
          id: selectedMenuId, //uuid(),
          menuName: values.name, //"New Menu",
          url: values.url, //"/NHAI/NewMenu",
          subMenu: selectedSubmenuList.subMenu, //[],
        },
        {
          id: selectedMenuId, //uuid(),
          menuName: name, //"New Menu",
          url: url, //"/NHAI/NewMenu",
          subMenu: selectedSubmenuList.subMenu, //[],
        }
      );
      // closeEditModal();
    } else if (isSubmenu && values.name !== "" && values.url !== "") {
      UpdateMenu(
        {
          menuName: selectedMenu,
          subMenuObj: {
            id: selectedSubmenuId, //uuid(),
            name: values.name, //"New Submenu",
            url: values.url, //"/NHAI/NewSubMenu",
            check: false,
            oldCheck: false,
            action: selectedActionList.action, //[],
          },
        },
        {
          menuName: selectedMenu,
          subMenuObj: {
            id: selectedSubmenuId, //uuid(),
            name: name, //"New Submenu",
            url: url, //"/NHAI/NewSubMenu",
            check: false,
            oldCheck: false,
            action: selectedActionList.action, //[],
          },
        }
      );
      // closeEditModal();
    } else {
      // Editing an existing action in a specific submenu (e.g., User Profile)
      if (values.name !== "") {
        debugger;
        UpdateMenu(
          {
            menuName: selectedMenu,
            subMenuName: selectedSubmenu,
            actionObj: {
              id: selectedActionId, //uuid(),
              name: values.name,
              // url: values.url,
              check: false,
              oldCheck: false,
            },
          },
          {
            menuName: selectedMenu,
            subMenuName: selectedSubmenu,
            actionObj: {
              id: selectedActionId, //uuid(),
              name: name,
              // url: url,
              check: false,
              oldCheck: false,
            },
          }
        );
      }
      // closeEditModal();
    }
    setIsLoading(false);
  };
  const handleDeleteSubmit = (
    values,
    { resetForm, setSubmitting },
    actions
  ) => {
    if (isMenu) {
      AddDeleteMenu(
        {
          id: selectedMenuId, //uuid(),
          menuName: name, //"New Menu",
          url: url, //"/NHAI/NewMenu",
          subMenu: selectedSubmenuList.subMenu, //[],
        },
        "Delete"
      );
      closeDeleteModal();
    } else if (isSubmenu) {
      AddDeleteMenu(
        {
          menuName: selectedMenu,
          subMenuObj: {
            id: selectedSubmenuId, //uuid(),
            name: name, //"New Submenu",
            url: url, //"/NHAI/NewSubMenu",
            check: false,
            oldCheck: false,
            action: selectedActionList.action, //[],
          },
        },
        "Delete"
      );
      closeDeleteModal();
    } else {
      AddDeleteMenu(
        {
          menuName: selectedMenu,
          subMenuName: selectedSubmenu,
          actionObj: {
            id: selectedActionId, //uuid(),
            name: name,
            //  url: url,
            check: false,
            oldCheck: false,
          },
        },
        "Delete"
      );
      closeDeleteModal();
    }
    setIsLoading(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Menu Management</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 mx-auto flex">
              <Formik
                initialValues={{}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  // Handle form submission here
                  console.log(values);
                }}
              >
                {/* ----------------------------------------Drop Down Form--------------------------------- */}
                <Form>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        {/* -----------------------------------Menu----------------------------------------- */}
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="menu" className="form-label">
                                Menu
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                                onChange={(e) => {
                                  setSelectedMenu(e.target.value);
                                  let list = (data || []).find((x) => {
                                    if (x.menuName === e.target.value) {
                                      setSelectedMenuId(x.id);
                                      return x;
                                    }
                                  });
                                  setSelectedSubmenuList([]);
                                  setSelectedSubmenuList(list);
                                  console.log(
                                    "-->",
                                    e.target.value,
                                    "-->",
                                    list
                                  );
                                }}
                              >
                                <option value="">--Select Menu--</option>
                                {(data || []).map((x) => {
                                  return (
                                    <option value={x.menuName}>
                                      {x.menuName}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                name="menu"
                                component="div"
                                className="error"
                              />{" "}
                            </div>
                            <div className="col-md-2 p-0 mt-auto">
                              <div className="button-container">
                                <button
                                  className="btn addUser min min-width-110px"
                                  onClick={() => {
                                    setName("");
                                    setUrl("");
                                    setMenu(true);
                                    setSubmenu(false);
                                    setAction(false);
                                    openModal();
                                  }}
                                >
                                  Add Menu
                                </button>{" "}
                                {/* <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className={
                                    selectedSubmenuList.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedSubmenuList.length != 0) {
                                      setName(selectedSubmenuList.menuName);
                                      setUrl(selectedSubmenuList.url);
                                      setMenu(true);
                                      setSubmenu(false);
                                      setAction(false);
                                      openEditModal();
                                    }
                                  }}
                                />
                                {/* </button>
                                <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}{" "}
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className={
                                    selectedSubmenuList.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedSubmenuList.length != 0) {
                                      setMenu(true);
                                      setName(selectedSubmenuList.menuName);
                                      setUrl(selectedSubmenuList.url);
                                      setSubmenu(false);
                                      setAction(false);
                                      openDeleteModal();
                                    }
                                  }}
                                />
                                {/* </button>{" "} */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* -----------------------------------SubMenu----------------------------------------- */}
                        <div className=" mb-3">
                          <div className="row">
                            <div className="col-md-3">
                              <label
                                htmlFor="userDomainName"
                                className="form-label"
                              >
                                Menu
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                              >
                                {/* <option value="">--Select Menu--</option> */}
                                <option value={selectedMenu}>
                                  {selectedMenu}
                                </option>
                              </Field>
                            </div>
                            <div className="col-md-3">
                              <label
                                htmlFor="userDomainName"
                                className="form-label"
                              >
                                Submenu
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="submenu"
                                name="submenu"
                                value={selectedSubmenu}
                                onChange={(e) => {
                                  setSelectedSubmenu(e.target.value);
                                  let list = (
                                    selectedSubmenuList.subMenu || []
                                  ).find((x) => {
                                    if (x.name === e.target.value) {
                                      setSelectedSubmenuId(x.id);
                                      return x;
                                    }
                                  });
                                  setSelectedActionList([]);
                                  setSelectedActionList(list);
                                  console.log(
                                    "-->",
                                    e.target.value,
                                    "--action list>",
                                    list.action
                                  );
                                }}
                              >
                                <option value="">--Select Submenu--</option>
                                {(selectedSubmenuList.subMenu || []).map(
                                  (x) => {
                                    return (
                                      <option value={x.name}>{x.name}</option>
                                    );
                                  }
                                )}
                              </Field>
                              <ErrorMessage
                                name="submenu"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-2 p-0 mt-auto">
                              <div className="button-container">
                                <button
                                  className="btn addUser min min-width-110px"
                                  disabled={
                                    selectedSubmenuList.length != 0
                                      ? false
                                      : true
                                  }
                                  onClick={() => {
                                    setName("");
                                    setUrl("");
                                    setSubmenu(true);
                                    setMenu(false);
                                    setAction(false);
                                    openModal();
                                  }}
                                >
                                  Add Submenu
                                </button>{" "}
                                {/* <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className={
                                    selectedActionList.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedActionList.length != 0) {
                                      setName(selectedActionList.name);
                                      setUrl(selectedActionList.url);
                                      setSubmenu(true);
                                      setMenu(false);
                                      setAction(false);
                                      openEditModal();
                                    }
                                  }}
                                />
                                {/* </button>
                                <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className={
                                    selectedActionList.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedActionList.length != 0) {
                                      setName(selectedActionList.name);
                                      setUrl(selectedActionList.url);
                                      setSubmenu(true);
                                      setMenu(false);
                                      setAction(false);
                                      openDeleteModal();
                                    }
                                  }}
                                />
                                {/* </button>{" "} */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* -----------------------------------Action----------------------------------------- */}
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-md-3">
                              <label htmlFor="email" className="form-label">
                                Menu
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="menu"
                                name="menu"
                                value={selectedMenu}
                              >
                                <option value={selectedMenu}>
                                  {selectedMenu}
                                </option>
                              </Field>
                            </div>{" "}
                            <div className="col-md-3">
                              <label htmlFor="email" className="form-label">
                                Submenu
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="submenu"
                                name="submenu"
                                value={selectedSubmenu}
                              >
                                <option value={selectedSubmenu}>
                                  {selectedSubmenu}
                                </option>
                              </Field>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="email" className="form-label">
                                Action
                              </label>
                              <Field
                                as="select"
                                className="form-control form-select"
                                id="action"
                                name="action"
                                value={selectedAction}
                                onChange={(e) => {
                                  let list = (
                                    selectedActionList.action || []
                                  ).find((x) => {
                                    if (x.actionName === e.target.value) {
                                      setSelectedActionObject([x]);
                                      setSelectedActionId(x.id);
                                      return x;
                                    }
                                  });
                                  console.log("Selected Action->", list);
                                  setSelectedActionObject([list]);
                                  setSelectedAction(e.target.value);
                                }}
                              >
                                <option value="">--Select Action--</option>
                                {(selectedActionList.action || []).map((x) => {
                                  return (
                                    <option value={x.actionName}>
                                      {x.actionName}
                                    </option>
                                  );
                                })}
                              </Field>
                              <ErrorMessage
                                name="action"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="col-2 p-0 mt-auto">
                              <div className="button-container">
                                <button
                                  className="btn addUser min min-width-110px"
                                  disabled={
                                    selectedActionList.length != 0
                                      ? false
                                      : true
                                  }
                                  onClick={() => {
                                    setName("");
                                    setUrl("");
                                    setAction(true);
                                    setMenu(false);
                                    setSubmenu(false);
                                    openModal();
                                  }}
                                >
                                  Add Action
                                </button>{" "}
                                {/* <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  className={
                                    selectedActionObject.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedActionObject.length != 0) {
                                      setName(selectedAction);
                                      setAction(true);
                                      setMenu(false);
                                      setSubmenu(false);
                                      openEditModal();
                                    }
                                  }}
                                />
                                {/* </button>
                                <button
                                  className="btn smallBtn"
                                  onClick={() => {}}
                                > */}
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className={
                                    selectedActionObject.length != 0
                                      ? "activeIcon"
                                      : "disableIcon"
                                  }
                                  onClick={() => {
                                    if (selectedActionObject.length != 0) {
                                      setName(selectedAction);
                                      setAction(true);
                                      setMenu(false);
                                      setSubmenu(false);
                                      openDeleteModal();
                                    }
                                  }}
                                />
                                {/* </button>{" "} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="modal-footer">
                    <button
                      className="btn BackBtn me-2"
                      onClick={() => {
                        setSelectedAction("");
                        setSelectedSubmenuList([]);
                        setSelectedActionList([]);
                        setSelectedMenu("");
                        setSelectedSubmenu("");
                      }}
                    >
                      Reset
                    </button>

                    {"  "}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        {/* ----------Add Pop------------------------------------------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Formik
            initialValues={{
              name: name,
              url: isAction ? "#" : url,
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleAddSubmit}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className="float-end mt-2">
                    <FontAwesomeIcon
                      className="closeIconPopup"
                      icon={faTimes}
                      onClick={() => {
                        closeModal();
                      }}
                    />
                  </div>
                  <h2 className="mb-3 mt-3 pageTitle">
                    Add {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"}
                  </h2>
                  <div className="">
                    <label htmlFor="name" className="form-label">
                      {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"} Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                    <label htmlFor="name" className="form-label">
                      {isMenu ? "Menu Url" : isSubmenu ? "Submenu Url" : ""}
                    </label>
                    {!isAction ? (
                      <>
                        <Field
                          type="text"
                          className="form-control"
                          id="url"
                          name="url"
                          value={isAction ? "#" : url}
                          onChange={(e) => {
                            setUrl(e.target.value);
                          }}
                        ></Field>
                        <ErrorMessage
                          name="url"
                          component="div"
                          className="error"
                        />
                      </>
                    ) : (
                      ""
                    )}
                    <div className="p-2"></div>
                    <div className="text-center">
                      <button
                        className="btn addUser checkerAction"
                        type="submit"
                      >
                        Add
                      </button>
                      <button
                        className="btn addUser checkerAction"
                        type="button"
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
        {/* ----------Edit Pop------------------------------------------------------- */}
        <Modal
          isOpen={editmodalIsOpen}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Formik
            initialValues={{
              name: name,
              url: isAction ? "#" : url,
            }}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={handleUpdateSubmit}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className="float-end mt-2">
                    <FontAwesomeIcon
                      className="closeIconPopup"
                      icon={faTimes}
                      onClick={() => {
                        closeEditModal();
                      }}
                    />
                  </div>
                  <h2 className="mb-3 mt-3 pageTitle">
                    Edit {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"}
                  </h2>
                  <div className="">
                    <label htmlFor="name" className="form-label">
                      {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"} Name
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      // value={name}
                      // onChange={(e) => {
                      //   setName(e.target.value);
                      // }}
                    ></Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                    <label htmlFor="url" className="form-label">
                      {isMenu ? "Menu Url" : isSubmenu ? "Submenu Url" : ""}
                    </label>
                    {!isAction ? (
                      <>
                        <Field
                          type="text"
                          className="form-control"
                          id="url"
                          name="url"
                          // value={url}
                          // onChange={(e) => {
                          //   setUrl(e.target.value);
                          // }}
                        ></Field>
                        <ErrorMessage
                          name="url"
                          component="div"
                          className="error"
                        />
                      </>
                    ) : (
                      ""
                    )}
                    <div className="p-2"></div>
                    <div className="text-center">
                      <button
                        className="btn addUser checkerAction"
                        type="submit"
                      >
                        Edit
                      </button>
                      <button
                        className="btn addUser checkerAction"
                        type="button"
                        onClick={() => {
                          closeEditModal();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
        {/* -----------Delete Popup-------------------------------------------------- */}
        <Modal
          isOpen={deletemodalIsOpen}
          onRequestClose={closeDeleteModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Formik
            initialValues={{
              name: name,
              url: isAction ? "#" : url,
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleDeleteSubmit}
          >
            {({ values }) => (
              <Form>
                <div>
                  <div className="float-end mt-2">
                    <FontAwesomeIcon
                      className="closeIconPopup"
                      icon={faTimes}
                      onClick={() => {
                        closeDeleteModal();
                      }}
                    />
                  </div>
                  <h2 className="mb-3 mt-3 pageTitle">
                    Delete {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"}
                  </h2>

                  <h5 className="mb-4">
                    Are you sure you want to delete the{" "}
                    {isMenu
                      ? "Menu ? This action will also delete respective submenus and their actions."
                      : isSubmenu
                      ? "Submenu ? This action will delete submenu and their actions."
                      : "Action ?"}
                  </h5>
                  <div className="row">
                    <div className="col-md-6 ">
                      <div className="col-md-6 UDCoulmns">
                        <strong>
                          {isMenu ? "Menu" : isSubmenu ? "Submenu" : "Action"}{" "}
                          Name:
                        </strong>
                      </div>
                      <div className="col-md-6 UDCoulmns">{name}</div>

                      <div className="col-md-6 UDCoulmns">
                        <strong>
                          {" "}
                          {isMenu
                            ? "Menu Url :"
                            : isSubmenu
                            ? "Submenu Url :"
                            : ""}
                        </strong>
                      </div>
                      {!isAction ? (
                        <div className="col-md-6 UDCoulmns">{url}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="p-2"></div>
                    <div className="text-center">
                      <button
                        className="btn addUser checkerAction"
                        type="submit"
                      >
                        Delete
                      </button>
                      <button
                        className="btn addUser checkerAction"
                        type="button"
                        onClick={() => {
                          closeDeleteModal();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
        {/* ------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default MenuManagement;
