import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFile,
  faKey,
  faUser,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import sideBarDataChecker from "../Checker/sideBarData";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home"); // Initialize with the default active item
  const [isToggleA, setToggleA] = useState(false);
  const [isToggleP, setToggleP] = useState(false);
  const [isToggleR, setToggleR] = useState(false);
  // Create a state object to hold the dynamic toggle states
  const [toggleStates, setToggleStates] = useState({});
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
  var jsonData = sideBarDataChecker.find((item) => item.type === "menuData");
  const data = jsonData.data;

  // Initialize the toggle states based on JSON data
  const initializeToggleStates = () => {
    const initialState = {};
    data.forEach((item) => {
      initialState[`item_${item.id}`] = false; // Initialize as false (not toggled)
    });
    setToggleStates(initialState);
  };

  // Call the initialization function when the component mounts
  React.useEffect(() => {
    initializeToggleStates();
  }, []);

  const handleToggle = (itemId) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [`item_${itemId}`]: !prevState[`item_${itemId}`], // Toggle the state
    }));
  };

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse navColor"
    >
      <div className="position-sticky" key="0">
        <div className="list-group list-group-flush" key="0">
          {(data || []).map((x, index) => {
            return (
              <>
                <Link
                  to={x.url}
                  className={
                    activeItem.includes(x.menuName) ? activeCss : simpleCss
                  }
                  onClick={() => {
                    handleSetActiveItem(x.menuName);
                    handleToggle(x.id);
                    //setToggle(!isToggle);
                  }}
                >
                  {" "}
                  <div className="navtitle" key={x.id}>
                    <FontAwesomeIcon
                      icon={
                        x.menuName == "Home"
                          ? faHouse
                          : x.menuName == "Admin"
                          ? faUser
                          : x.menuName == "Manage Password"
                          ? faKey
                          : faFile
                      }
                      className="MenuIcon"
                    />{" "}
                    <span>{x.menuName}</span>
                  </div>
                  <>
                    {x.menuName != "Home" && ( //  x.subMenu.length != 0
                      <FontAwesomeIcon
                        icon={
                          toggleStates[`item_${x.id}`]
                            ? faAngleDown
                            : faAngleRight
                        }
                        className="rside"
                      />
                    )}
                  </>
                </Link>
                {toggleStates[`item_${x.id}`] ? (
                  <div className="list-group list-group-light" key={x.id}>
                    {(x.subMenu || []).map((z) => {
                      return x.menuName != "Home" && z.check ? (
                        <>
                          <Link
                            to={z.url}
                            className={
                              activeItem == x.menuName + z.name
                                ? amenucss
                                : menucss
                            }
                            onClick={() =>
                              handleSetActiveItem(x.menuName + z.name)
                            }
                          >
                            <div className="menutitle">
                              <FontAwesomeIcon icon={faAngleRight} />
                              {"  "} {z.name}
                            </div>
                          </Link>
                        </>
                      ) : (
                        ""
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
