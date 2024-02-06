import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../../Assets/Css/Sidebar.css";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFile,
  faKey,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home"); // Initialize with the default active item
  const [isToggleA, setToggleA] = useState(false);
  const [isToggleP, setToggleP] = useState(false);
  const [isToggleR, setToggleR] = useState(false);

  const simpleCss = "alink list-group-item list-group-item-action py-2 ripple";
  const activeCss =
    "alink list-group-item list-group-item-action py-2 ripple active";
  const menucss = "alink list-group-item list-group-item-action px-3";
  const amenucss =
    "alink list-group-item list-group-item-action px-3 border-0 active";
  // Handle changing the active item
  const handleSetActiveItem = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse"
      style={{ backgroundColor: "#003366" }}
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush">
          <Link
            to="/NHAI/Dashboard"
            className={activeItem === "home" ? activeCss : simpleCss}
            aria-current="true"
            onClick={() => handleSetActiveItem("home")}
          >
            <div className="navtitle">
              <FontAwesomeIcon icon={faHouse} className="MenuIcon" />{" "}
              <span>Home</span>
            </div>
          </Link>
          <Link
            className={activeItem.includes("admin") ? activeCss : simpleCss}
            onClick={() => {
              handleSetActiveItem("admin");
              setToggleA(!isToggleA);
            }}
          >
            {" "}
            <div className="navtitle">
              <FontAwesomeIcon icon={faUser} className="MenuIcon" />{" "}
              <span>Admin</span>
            </div>
            {isToggleA ? (
              <FontAwesomeIcon icon={faAngleDown} className="rside" />
            ) : (
              <FontAwesomeIcon icon={faAngleRight} className="rside" />
            )}
          </Link>
          {isToggleA ? (
            <div className="list-group list-group-light">
              <Link
                to="/NHAI/UserList"
                className={
                  activeItem.includes("adminUser") ? amenucss : menucss
                }
                onClick={() => handleSetActiveItem("adminUser")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} User
                </div>
              </Link>
              <Link
                to="/NHAI/ProfileList"
                className={activeItem.includes("adminUP") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminUP")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} User Profile
                </div>
              </Link>
              <Link
                to="/NHAI/GroupList"
                className={activeItem.includes("adminUG") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminUG")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} User Group
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminFP") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminFP")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Function Point
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminAR") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminAR")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Assign Rights
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminR") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminR")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Rule
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminFU") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminFU")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} File Upload
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminMM") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminMM")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Mapping Master
                </div>
              </Link>
              <Link
                className={activeItem.includes("adminJEL") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("adminJEL")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Job Execution Log
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}

          <Link
            className={activeItem.includes("password") ? activeCss : simpleCss}
            onClick={() => {
              handleSetActiveItem("password");
              setToggleP(!isToggleP);
            }}
          >
            {" "}
            <div className="navtitle">
              <FontAwesomeIcon icon={faKey} className="MenuIcon" />{" "}
              <span>Manage Password</span>
            </div>
            {isToggleP ? (
              <FontAwesomeIcon icon={faAngleDown} className="rside" />
            ) : (
              <FontAwesomeIcon icon={faAngleRight} className="rside" />
            )}
          </Link>
          {isToggleP ? (
            <div className="list-group list-group-light">
              <Link
                className={
                  activeItem.includes("passwordC") ? amenucss : menucss
                }
                onClick={() => handleSetActiveItem("passwordC")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} Change Password
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}
          <Link
            className={activeItem.includes("report") ? activeCss : simpleCss}
            onClick={() => {
              handleSetActiveItem("report");
              setToggleR(!isToggleR);
            }}
          >
            {" "}
            <div className="navtitle">
              <FontAwesomeIcon icon={faFile} className="MenuIcon" />{" "}
              <span>Reports</span>
            </div>
            {isToggleR ? (
              <FontAwesomeIcon icon={faAngleDown} className="rside" />
            ) : (
              <FontAwesomeIcon icon={faAngleRight} className="rside" />
            )}
          </Link>
          {isToggleR ? (
            <div className="list-group list-group-light">
              <Link
                className={activeItem.includes("reportUL") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("reportUL")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} User Login Report
                </div>
              </Link>
              <Link
                className={
                  activeItem.includes("reportUAI") ? amenucss : menucss
                }
                onClick={() => handleSetActiveItem("reportUAI")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} User Active/Inactive
                </div>
              </Link>
              <Link
                className={activeItem.includes("reportFA") ? amenucss : menucss}
                onClick={() => handleSetActiveItem("reportFA")}
              >
                <div className="menutitle">
                  <FontAwesomeIcon icon={faAngleRight} />
                  {"  "} FIFO Ageing Report
                </div>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
