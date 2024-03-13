import React, { useEffect, useState } from "react";
import DataTable from "../HtmlComponents/DataTable";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { MenuService } from "../../Service/MenuService";
import Spinner from "../HtmlComponents/Spinner";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
const MenuManagementCheckerList = () => {
  const navigate = useNavigate();
  const [menuRequest, setMenuRequest] = useState("Add");
  const [submenuRequest, setSubMenuRequest] = useState("Add");
  const [actionRequest, setActionRequest] = useState("Add");
  const [isLoading, setIsLoading] = useState(false);
  const [menulist, setMenuList] = useState([]);
  const [submenulist, setSubmenuList] = useState([]);
  const [actionlist, setActionList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    FetchRequests("Menu");
    FetchRequests("Submenu");
    FetchRequests("Action");
  }, []);

  const data = [
    {
      id: 1,
      requestName: "Add Menu 1",
      requestId: "JD001",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 2,
      requestName: "Add Menu 2",
      requestId: "JS002",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 3,
      requestName: "Add  Menu 3",
      requestId: "BJ003",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 4,
      requestName: "Add  Menu 4",
      requestId: "AB004",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
    {
      id: 5,
      requestName: "Add Menu 5",
      requestId: "EA005",
      requestDetails: "Add Menu in appilication",
      requestType: "Add Menu",
    },
  ];
  const updatedData = [
    {
      id: 1,
      requestName: "Update Menu 1",
      requestId: "JD001",
      requestDetails: "Update Menu in appilication",
      requestType: "Update",
    },
    {
      id: 2,
      requestName: "Update Menu 2",
      requestId: "JS002",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 3,
      requestName: "Update Menu 3",
      requestId: "BJ003",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 4,
      requestName: "Update Menu 4",
      requestId: "AB004",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
    {
      id: 5,
      requestName: "Update Menu 5",
      requestId: "EA005",
      requestDetails: "Update Menu in appilication",
      requestType: "Update Menu",
    },
  ];
  const DeletedData = [
    {
      id: 1,
      requestName: "Delete Menu 1",
      requestId: "JD001",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 2,
      requestName: "Delete Menu 2",
      requestId: "JS002",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 3,
      requestName: "Delete Menu 3",
      requestId: "BJ003",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 4,
      requestName: "Delete Menu 4",
      requestId: "AB004",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
    {
      id: 5,
      requestName: "Delete Menu 5",
      requestId: "EA005",
      requestDetails: "Delete Menu in appilication",
      requestType: "Delete Menu",
    },
  ];
  const [menurows, setMenuRows] = useState([]);
  const [submenurows, setSubMenuRows] = useState([]);
  const [actionrows, setActionRows] = useState([]);

  const menuColumns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Type</div>,
      accessor: "requestType",
    },
    {
      Header: <div className="float-center">Request Date</div>,
      accessor: "requestedDate",
    },
    {
      Header: <div className="float-center">Raised By</div>,
      accessor: "requestRaisedBy",
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <div className="text-center">
          <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {
              navigate(`/NHAI/MenuRequestDetails/${menuRequest}`, {
                state: { requestId: row.values.requestId },
              });
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];
  const submenuColumns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Type</div>,
      accessor: "requestType",
    },
    {
      Header: <div className="float-center">Request Date</div>,
      accessor: "requestedDate",
    },
    {
      Header: <div className="float-center">Raised By</div>,
      accessor: "requestRaisedBy",
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <div className="text-center">
          <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {
              navigate(`/NHAI/SubmenuRequestDetails/${submenuRequest}`, {
                state: { requestId: row.values.requestId },
              });
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];
  const actionColumns = [
    {
      Header: <div className="float-center">Request Id</div>,
      accessor: "requestId",
    },
    {
      Header: <div className="float-center">Request Type</div>,
      accessor: "requestType",
    },
    {
      Header: <div className="float-center">Request Date</div>,
      accessor: "requestedDate",
    },
    {
      Header: <div className="float-center">Raised By</div>,
      accessor: "requestRaisedBy",
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <div className="text-center">
          <button
            className="btn addUser dashbutton"
            type="button"
            onClick={() => {
              navigate(`/NHAI/ActionRequestDetails/${actionRequest}`, {
                state: { requestId: row.values.requestId },
              });
            }}
          >
            Details
          </button>
        </div>
      ),
    },
  ];

  function FetchRequests(type) {
    MenuService.getMenu_Submenu_ActionRequests(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(), //"ere353535-456fdgfdg-4564fghfh-ghjg567",
        },
        menuType: type,
      },
      (res) => {
        if (res.status === 200) {
          var reqList = res.data.data.menus;
          console.log("request list->", reqList);

          // setRows(reqList);
          if (type === "Menu") {
            setMenuList(reqList);
            const list = (reqList || []).filter((x) => {
              if (x.requestType === "Add") return x;
            });
            setMenuRows(list);
            setMenuRequest("Add");
          } else if (type === "Submenu") {
            setSubmenuList(reqList);
            const list = (reqList || []).filter((x) => {
              if (x.requestType === "Add") return x;
            });
            setSubMenuRows(list);
            setSubMenuRequest("Add");
          } else {
            setActionList(reqList);
            const list = (reqList || []).filter((x) => {
              if (x.requestType === "Add") return x;
            });
            setActionRows(list);
            setActionRequest("Add");
          }
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

  return (
    <div className="wrapper">
      <div className="container">
        <Spinner isLoading={isLoading} />
        <div className="ULContainer">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 mt-3 pageTitle">Menu Management Requests</h2>
            </div>
          </div>
          {/* --------------------------------------Accordian-------------------------------------------- */}
          <div className="row mb-3">
            <div className="col-md-11 mx-auto flex">
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  eventKey="0"
                  onClick={() => {
                    //FetchRequests("Menu");
                  }}
                >
                  <Accordion.Header>
                    <h6 className="pageTitle mb-0">Menu</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          const list = (menulist || []).filter((x) => {
                            if (x.requestType == "Add") return x;
                          });
                          setMenuRows([]);
                          setMenuRows(list);
                          setMenuRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Menu
                      </label>{" "}
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Update"
                        onClick={() => {
                          const list = (menulist || []).filter((x) => {
                            if (x.requestType == "Update") return x;
                          });
                          setMenuRows([]);
                          setMenuRows(list);
                          setMenuRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Menu
                      </label>{" "}
                      <input
                        type="radio"
                        name="menuRequest"
                        value="Delete"
                        onClick={() => {
                          const list = (menulist || []).filter((x) => {
                            if (x.requestType == "Delete") return x;
                          });
                          setMenuRows([]);
                          setMenuRows(list);
                          setMenuRequest("Delete");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Menu
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={menuColumns}
                      data={menurows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                      enablePagination={false}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  onClick={() => {
                    // FetchRequests("Submenu");
                  }}
                >
                  <Accordion.Header>
                    {" "}
                    <h6 className="pageTitle mb-0">Submenu</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          const list = (submenulist || []).filter((x) => {
                            if (x.requestType == "Add") return x;
                          });
                          setSubMenuRows([]);
                          setSubMenuRows(list);
                          setSubMenuRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Submenu
                      </label>{" "}
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Update"
                        onClick={() => {
                          const list = (submenulist || []).filter((x) => {
                            if (x.requestType == "Update") return x;
                          });
                          setSubMenuRows([]);
                          setSubMenuRows(list);
                          setSubMenuRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Submenu
                      </label>{" "}
                      <input
                        type="radio"
                        name="submenuRequest"
                        value="Delete"
                        onClick={() => {
                          const list = (submenulist || []).filter((x) => {
                            if (x.requestType == "Delete") return x;
                          });
                          setSubMenuRows([]);
                          setSubMenuRows(list);
                          setSubMenuRequest("Delete");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Submenu
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={submenuColumns}
                      data={submenurows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                      enablePagination={false}
                    />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  onClick={() => {
                    // FetchRequests("Action");
                  }}
                >
                  <Accordion.Header>
                    <h6 className="pageTitle mb-0">Action</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    {" "}
                    <div className="mb-3">
                      {" "}
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        {" "}
                        Request Type :
                      </label>
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Add"
                        defaultChecked={true}
                        onClick={() => {
                          const list = (actionlist || []).filter((x) => {
                            if (x.requestType == "Add") return x;
                          });
                          setActionRows([]);
                          setActionRows(list);
                          setActionRequest("Add");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Add Action
                      </label>{" "}
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Update"
                        onClick={() => {
                          const list = (actionlist || []).filter((x) => {
                            if (x.requestType == "Update") return x;
                          });
                          setActionRows([]);
                          setActionRows(list);
                          setActionRequest("Update");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Update Action
                      </label>{" "}
                      <input
                        type="radio"
                        name="actionRequest"
                        value="Delete"
                        onClick={() => {
                          const list = (actionlist || []).filter((x) => {
                            if (x.requestType == "Delete") return x;
                          });
                          setActionRows([]);
                          setActionRows(list);
                          setActionRequest("Delete");
                        }}
                      />
                      <label
                        htmlFor="userName"
                        className="form-label checkerAction"
                      >
                        Delete Action
                      </label>{" "}
                    </div>
                    <DataTable
                      columns={actionColumns}
                      data={actionrows}
                      // customClass="ULTable"
                      // detailpage="UserDetails"
                      // editpage="EditUser"
                      //deletepage="DeleteUser"
                      enablePagination={false}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagementCheckerList;
