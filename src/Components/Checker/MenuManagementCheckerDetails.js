import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MenuService } from "../../Service/MenuService";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { getCookie, useGetReduxData } from "../HtmlComponents/CommonFunction";
const MenuManagementCheckerDetails = () => {
  //----------------------------------------------
  const location = useLocation();
  const userId = location.state ? location.state.requestId : ""; //useParams();
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = reduxUser === "" ? cookieUser : reduxUser;
  //----------------------------------------------
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);
  //------------------------------------------------------------------
  const [selectedMenuName, setSelectedMenuName] = useState("");
  const [selectedSubmenuName, setSelectedSubmenuName] = useState("");
  const [selectedActionName, setSelectedActionName] = useState("");
  //------------------------------------------------------------------
  const [jsonMenuData, setJsonMenuData] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [obj, setObj] = useState("");
  const [oldObj, setOldObj] = useState("");
  const [req, setReq] = useState("");
  //-------------------------------------------------------------------
  const [remark, setRemark] = useState("");
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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsLoading(true);
    FetchMenuJson();
    if (path.includes("/Update")) {
      FetchUpdateDetails();
    } else {
      FetchAddDeleteDetails();
    }
  }, []);

  const users = [
    {
      id: 1,
      fullName: "John Doe",
      userId: "JD001",
      userType: "Admin",
      employeeNumber: "12345",
      domainName: "example.com",
      userRole: "Administrator",
      gender: "Male",
      email: "johndoe@example.com",
      mobileNumber: "123-456-7890",
      workNo: "W123",
      isActive: true,
      createdDate: "2023-08-08",
      createdBy: "Admin User",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userId: "JS002",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userId: "BJ003",
      userType: "User",
      role: "Member",
      isActive: true,
    },
    {
      id: 4,
      fullName: "Alice Brown",
      userId: "AB004",
      userType: "User",
      role: "Member",
      isActive: false,
    },
    {
      id: 5,
      fullName: "Eve Anderson",
      userId: "EA005",
      userType: "User",
      role: "Guest",
      isActive: false,
    },
  ];

  const dataM = [
    {
      id: 1,
      requestName: "Add John Doe",
      requestId: "JD001",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Add Jane Smith",
      requestId: "JS002",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 3,
      requestName: "Add Bob Johnson",
      requestId: "BJ003",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 4,
      requestName: "Add Alice Brown",
      requestId: "AB004",
      requestDetails: "Add user in appilication",
      requestType: "Update",
    },
    {
      id: 5,
      requestName: "Eve Anderson",
      requestId: "EA005",
      requestDetails: "Add user in appilication",
      requestType: "Add",
    },
  ];
  const user = users.find((u) => u.id === 1);
  const path = window.location.pathname;
  //const req = dataM.find((u) => u.id === 2);
  if (!user) {
    return <p>User not found.</p>;
  }

  function FetchAddDeleteDetails() {
    MenuService.getMenu_Submenu_ActionAddDeleteDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requestId: userId, //"de253364-5b36-4173-aebe-52389b16b3fe",
      },
      (res) => {
        if (res.status === 200) {
          var details = res.data.data;
          setReq(details);
          console.log("details->", details);
          var json = res.data.data.object;
          var jsonObject = JSON.parse(json);
          setObj(jsonObject);
          //-------------------------------------------
          if (details.menuType == "Menu") {
            setSelectedMenuName(jsonObject.menuName);
            setName(jsonObject.menuName);
            setUrl(jsonObject.url);
          } else if (details.menuType == "Submenu") {
            setSelectedMenuName(jsonObject.menuName);
            setSelectedSubmenuName(jsonObject.subMenuObj.name);
            setName(jsonObject.subMenuObj.name);
            setUrl(jsonObject.subMenuObj.url);
          } else {
            setSelectedMenuName(jsonObject.menuName);
            setSelectedSubmenuName(jsonObject.subMenuName);
            setSelectedActionName(jsonObject.actionObj.name);
            setName(jsonObject.actionObj.name);
          }
          //--------------------------------------------------
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

  function FetchUpdateDetails() {
    MenuService.getMenu_Submenu_ActionUpdateDetails(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requestId: userId, //"de253364-5b36-4173-aebe-52389b16b3fe",
      },
      (res) => {
        if (res.status === 200) {
          var details = res.data.data;
          setReq(details);
          console.log("details->", details);
          var json = res.data.data.object;
          var jsonObject = JSON.parse(json);
          setObj(jsonObject);
          var oldJson = res.data.data.oldObject;
          var jsonOldObject = JSON.parse(oldJson);
          setOldObj(jsonOldObject);
          //------------------------------------------------------------
          if (details.menuType == "Menu") {
            setSelectedMenuName(jsonOldObject.menuName);
            setName(jsonObject.menuName);
            setUrl(jsonObject.url || "");
          } else if (details.menuType == "Submenu") {
            setSelectedMenuName(jsonObject.menuName || "");
            setSelectedSubmenuName(jsonOldObject.subMenuObj.name);
            setName(jsonObject.subMenuObj.name);
            setUrl(jsonObject.subMenuObj.url);
          } else {
            setSelectedMenuName(jsonObject.menuName);
            setSelectedSubmenuName(jsonObject.subMenuName);
            setSelectedActionName(jsonOldObject.actionObj.name);
            setName(jsonObject.actionObj.name);
          }
          //--------------------------------------------------------
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

  function ApprovalMenu(isApprove) {
    MenuService.checkerMenu_Submenu_ActionApproval(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requestId: userId, //"de253364-5b36-4173-aebe-52389b16b3fe",
        userName: USER.userName, //"Sumit",
        chekerId: USER.userId, //"123",
        status: isApprove ? "Approved" : "Declined",
        remark: isApprove ? "Approved" : remark,
      },
      (res) => {
        if (res.status === 200) {
          var details = res.data.data;
          console.log("details->", details);
          chooseOperation(details.menuType, details.requestType);
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
          setJsonMenuData(jsonObject);
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

  function UpdateMenuJson(jsonMenuData) {
    //const jsonData = keysToString(jsonMenuData);

    MenuService.updateMenu_Json_Data(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        requestId: userId, //"3420f7e1-1351-47bf-9d32-eec41df9583c",
        chekerId: USER.userId, //"checker1234",
        userName: USER.userName, //"John Deoooo",
        jsonMenuData: jsonMenuData, //jsonData || [],
      },
      (res) => {
        if (res.status === 200) {
          var details = res.data.data;
          console.log("details->", details);

          var details = `Request approved successfully`;

          console.log("details->", res.data.data.responseMetaData.message);

          toast.success(details, {
            //"Request raised successful!", {
            position: "top-right",
            autoClose: 3000,
          });

          navigate("/NHAI/MappingMasterRequests");
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

  //-Final-Functions---------------------------------------------------------------------------------------------------------------
  //const [data, setData] = useState(menuData);
  // Function to add a menu
  function addMenu(data, newMenu) {
    data.push(newMenu);
    setData(data);
    UpdateMenuJson(data);
    return data;
  }

  // Function to add a submenu to a specific menu
  function addSubMenu(data, menuName, newSubMenu) {
    const menu = data.find((item) => item.menuName === menuName);
    if (menu) {
      if (!menu.subMenu) {
        menu.subMenu = [];
      }
      menu.subMenu.push(newSubMenu);
    }
    setData(data);
    UpdateMenuJson(data);
    return data;
  }

  // Function to add an action to a specific submenu
  function addAction(data, menuName, subMenuName, newAction) {
    const menu = data.find((item) => item.menuName === menuName);
    if (menu) {
      const subMenu = menu.subMenu.find(
        (subItem) => subItem.name === subMenuName
      );
      if (subMenu) {
        if (!subMenu.action) {
          subMenu.action = [];
        }
        subMenu.action.push(newAction);
      }
    }
    setData(data);
    UpdateMenuJson(data);
    return data;
  }
  //-Edit function---------------------------------------------------------------------------------
  // Function to edit a menu
  function editMenu(data, menuName, updatedMenu) {
    const index = data.findIndex((item) => item.menuName === menuName);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedMenu };
    }
    setData(data);
    UpdateMenuJson(data);
    return data;
  }

  // Function to edit a submenu in a specific menu
  function editSubMenu(data, menuName, subMenuName, updatedSubMenu) {
    const menu = data.find((item) => item.menuName === menuName);
    if (menu && menu.subMenu) {
      const subMenuIndex = menu.subMenu.findIndex(
        (subItem) => subItem.name === subMenuName
      );
      if (subMenuIndex !== -1) {
        menu.subMenu[subMenuIndex] = {
          ...menu.subMenu[subMenuIndex],
          ...updatedSubMenu,
        };
      }
    }
    setData(data);
    UpdateMenuJson(data);
    return data;
  }

  // Function to edit an action in a specific submenu
  function editAction(data, menuName, subMenuName, actionName, updatedAction) {
    const menu = data.find((item) => item.menuName === menuName);
    if (menu && menu.subMenu) {
      const subMenu = menu.subMenu.find(
        (subItem) => subItem.name === subMenuName
      );
      if (subMenu && subMenu.action) {
        const actionIndex = subMenu.action.findIndex(
          (action) => action.actionName === actionName
        );
        if (actionIndex !== -1) {
          subMenu.action[actionIndex] = {
            ...subMenu.action[actionIndex],
            ...updatedAction,
          };
        }
      }
    }
    setData(data);
    UpdateMenuJson(data);
    return data;
  }
  //-Delete Function----------------------------------------------------------------------------------
  // Function to delete a menu by its name
  function deleteMenu(data, menuName) {
    var d = data.filter((menu) => menu.menuName !== menuName);
    UpdateMenuJson(d);
    return d;
  }

  // Function to delete a submenu by its name inside a specific menu
  function deleteSubMenu(data, menuName, subMenuName) {
    var d = data.map((menu) => {
      if (menu.menuName === menuName && menu.subMenu) {
        menu.subMenu = menu.subMenu.filter(
          (subMenu) => subMenu.name !== subMenuName
        );
      }
      return menu;
    });
    UpdateMenuJson(d);
    return d;
  }

  // Function to delete an action by its ID inside a specific submenu
  function deleteAction(data, menuName, subMenuName, actionName) {
    var d = data.map((menu) => {
      if (menu.menuName === menuName && menu.subMenu) {
        menu.subMenu = menu.subMenu.map((subMenu) => {
          if (subMenu.name === subMenuName && subMenu.action) {
            subMenu.action = subMenu.action.filter(
              (action) => action.actionName !== actionName
            );
          }
          return subMenu;
        });
      }
      return menu;
    });
    UpdateMenuJson(d);
    return d;
  }
  //-----------------------------------------------------------------------------------------------------------------
  function chooseOperation(menuType, operation) {
    if (menuType === "Menu") {
      //for menu
      if (operation === "Add") {
        const newDataWithMenu = addMenu(jsonMenuData, {
          id: obj?.id, //uuid(),
          menuName: name, //"New Menu",
          url: url, //"/NHAI/NewMenu",
          subMenu: [],
        });
        console.log("Added Menu->", newDataWithMenu);
      } else if (operation === "Update") {
        const newDataWithEditedMenu = editMenu(jsonMenuData, selectedMenuName, {
          menuName: name,
          url: url,
        });
        console.log("Edited Menu->", newDataWithEditedMenu);
      } else {
        const newDataWithoutMenu = deleteMenu(jsonMenuData, selectedMenuName);
        setData(newDataWithoutMenu);
        console.log("Deleted Menu->", newDataWithoutMenu);
      }
    } else if (menuType === "Submenu") {
      //for submenu
      if (operation === "Add") {
        const newDataWithSubMenu = addSubMenu(jsonMenuData, selectedMenuName, {
          id: obj.subMenuObj?.id, //uuid(),
          name: name, //"New Submenu",
          url: url, //"/NHAI/NewSubMenu",
          check: false,
          oldCheck: false,
          action: [],
        });
        console.log("Added Submenu->", newDataWithSubMenu);
      } else if (operation === "Update") {
        // Editing an existing submenu in a specific menu (e.g., Admin)
        const newDataWithEditedSubMenu = editSubMenu(
          jsonMenuData,
          selectedMenuName,
          selectedSubmenuName,
          {
            name: name,
            url: url,
            check: false,
            oldCheck: false,
          }
        );
        console.log("Edited Submenu->", newDataWithEditedSubMenu);
      } else {
        const newDataWithoutSubMenu = deleteSubMenu(
          jsonMenuData,
          selectedMenuName,
          selectedSubmenuName
        );
        setData(newDataWithoutSubMenu);
        console.log("Deleted Submenu->", newDataWithoutSubMenu);
      }
    } else {
      //for action
      if (operation === "Add") {
        const newDataWithAction = addAction(
          jsonMenuData,
          selectedMenuName,
          selectedSubmenuName,
          {
            id: obj.actionObj?.id, //uuid(),
            actionName: name, //"New Action",
            check: false,
            oldCheck: false,
          }
        );
        console.log("Added Action->", newDataWithAction);
      } else if (operation === "Update") {
        const newDataWithEditedAction = editAction(
          jsonMenuData,
          selectedMenuName,
          selectedSubmenuName,
          selectedActionName,
          {
            actionName: name,
            check: false,
            oldCheck: false,
          }
        );
        console.log("Edited Action->", newDataWithEditedAction);
      } else {
        const newDataWithoutAction = deleteAction(
          jsonMenuData,
          selectedMenuName,
          selectedSubmenuName,
          selectedActionName
        );
        setData(newDataWithoutAction);
        console.log("Deleted Action->", newDataWithoutAction);
      }
    }
  }
  return (
    <div className="container UDContainer">
      <div className="ULContainer">
        {/* -----------Request Details------------------ */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">Request Details</h2>
          </div>
        </div>
        <div className="row UserDetails mt-3">
          <div className="col-md-6 mx-auto">
            <div className="col-md-6 UDCoulmns">
              <strong>Request Id:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestId}</div>

            {/* <div className="col-md-6 UDCoulmns">
              <strong>Request Description:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestDetails}</div> */}

            <div className="col-md-6 UDCoulmns">
              <strong>Raised by:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.raisedBy}</div>
          </div>
          {/* -------------------------------------------------------- */}
          <div className="col-md-5">
            {/* <div className="col-md-6 UDCoulmns">
              <strong>Request Name:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestName}</div> */}
            <div className="col-md-6 UDCoulmns">
              <strong>Request Date:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestedDate}</div>
            <div className="col-md-6 UDCoulmns">
              <strong>Request Type:</strong>
            </div>
            <div className="col-md-6 UDCoulmns">{req.requestType}</div>
          </div>
        </div>
        {/* -----------User Details--------------------- */}
        <div className="row">
          <div className="col-md-12 ">
            <h2 className="mb-3 mt-3 pageTitle">
              {path.includes("/Add")
                ? "Add "
                : path.includes("/Update")
                ? "Update "
                : "Delete "}
              {path.includes("/MenuRequestDetails")
                ? "Menu"
                : path.includes("/SubmenuRequestDetails")
                ? "Submenu"
                : "Action"}{" "}
              Details
            </h2>
          </div>
        </div>
        {
          <div className="row">
            <div className="col-md-12 ">
              <strong>
                {" "}
                {path.includes("/MenuRequestDetails")
                  ? " "
                  : path.includes("/SubmenuRequestDetails")
                  ? `Menu Name :- ${selectedMenuName || ""}`
                  : `Menu Name :- ${selectedMenuName || ""} Submenu Name :- ${
                      selectedSubmenuName || ""
                    }`}
              </strong>
            </div>
          </div>
        }
        {!path.includes("/Update") ? (
          <div className="row UserDetails mt-3">
            <div className="col-md-6 mx-auto">
              <div className="col-md-6 UDCoulmns">
                <strong>
                  {" "}
                  {path.includes("/MenuRequestDetails")
                    ? "Menu "
                    : path.includes("/SubmenuRequestDetails")
                    ? "Submenu "
                    : "Action "}
                  Name:
                </strong>
              </div>
              <div className="col-md-6 UDCoulmns">{name}</div>

              <div className="col-md-6 UDCoulmns">
                <strong>Created Date:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{req.makerTimestamp}</div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="col-md-5">
              {!path.includes("/ActionRequestDetails") ? (
                <>
                  <div className="col-md-6 UDCoulmns">
                    <strong>Url:</strong>
                  </div>
                  <div className="col-md-6 UDCoulmns">{url}</div>
                </>
              ) : (
                ""
              )}

              <div className="col-md-6 UDCoulmns">
                <strong>Created By:</strong>
              </div>
              <div className="col-md-6 UDCoulmns">{req.makerName}</div>
            </div>
          </div>
        ) : (
          <div className="row UserDetails mt-3">
            <div className="col-md-11 mx-auto">
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Field Name</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Updated Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns submenuColor p-1">
                <strong>Old Value</strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                <strong>
                  {" "}
                  {path.includes("/MenuRequestDetails")
                    ? "Menu "
                    : path.includes("/SubmenuRequestDetails")
                    ? "Submenu "
                    : "Action "}
                  Name:
                </strong>
              </div>
              <div className="col-md-4 UDCoulmns">
                {" "}
                {req.menuType == "Menu"
                  ? obj.menuName
                  : req.menuType == "Submenu"
                  ? obj.subMenuObj?.name
                  : obj.actionObj?.name}
              </div>
              <div className="col-md-4 UDCoulmns">
                {" "}
                {req.menuType == "Menu"
                  ? oldObj.menuName
                  : req.menuType == "Submenu"
                  ? oldObj.subMenuObj?.name
                  : oldObj.actionObj?.name}
              </div>

              {!path.includes("/ActionRequestDetails") ? (
                <>
                  {" "}
                  <div className="col-md-4 UDCoulmns">
                    <strong>Url:</strong>
                  </div>
                  <div className="col-md-4 UDCoulmns">
                    {req.menuType == "Menu" ? obj.url : obj.subMenuObj?.url}
                  </div>
                  <div className="col-md-4 UDCoulmns">
                    {" "}
                    {req.menuType == "Menu"
                      ? oldObj.url
                      : oldObj.subMenuObj?.url}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        )}

        <div className="row mt-4">
          <div className="addUserBtnDiv col-md-10 text-end">
            <button
              className="btn BackBtn"
              type="button"
              onClick={() => {
                navigate("/NHAI/MenuManagementRequests");
              }}
            >
              Back to List
            </button>
            <button
              className="btn addUser checkerAction"
              type="button"
              onClick={() => {
                //setIsOpen(true);

                ApprovalMenu(true);
              }}
            >
              Approve
            </button>
            <button
              className="btn addUser"
              type="button"
              onClick={() => {
                //setIsOpen(true);
                //navigate();

                openModal();
              }}
            >
              Decline
            </button>
          </div>
        </div>
        {/* ----------Decline Pop------------------- */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="float-end mt-2">
              <FontAwesomeIcon
                icon={faTimes}
                className="closeIconPopup"
                onClick={() => {
                  closeModal();
                }}
              />
            </div>
            <h3 className="text-left">Please add Request decline reason</h3>
            <div className="">
              <textarea
                rows="4"
                name="remark"
                className="form-control"
                placeholder="Enter your remark here"
                required
                onChange={(e) => {
                  setRemark(e.target.value);
                }}
              />
              <div className="p-2"></div>
              <div className="text-center">
                <button
                  className="btn addUser checkerAction"
                  type="button"
                  onClick={() => {
                    ApprovalMenu(false);
                  }}
                >
                  Decline
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
        </Modal>
      </div>
    </div>
  );
};

export default MenuManagementCheckerDetails;
