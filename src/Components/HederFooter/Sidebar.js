import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../Assets/Css/Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faFile,
  faKey,
  faUser,
  faHouse,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import sideBarDataChecker from "../Checker/sideBarData";
import { ProfileService } from "../../Service/ProfileService";
import { v4 as uuid } from "uuid";
import {
  useGetReduxData,
  useSetReduxProfile,
} from "../HtmlComponents/CommonFunction";
const Sidebar = () => {
  const location = useLocation();
  const reduxData = useGetReduxData();
  const setReduxProfile = useSetReduxProfile();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const reduxProfile =
    reduxData.length != 0
      ? reduxData.profileData !== null
        ? reduxData.profileData.profile
        : null
      : "";
  const MAPPING =
    reduxProfile === "" || reduxProfile === null || reduxProfile === undefined
      ? null
      : reduxProfile.mapping;
  const userData = location.state ? location.state.userData : ""; //useParams();
  const MappingData =
    JSON.parse(sessionStorage.getItem("Mapping")) === null
      ? MAPPING
      : JSON.parse(sessionStorage.getItem("Mapping"));
  const [activeItem, setActiveItem] = useState("Home"); // Initialize with the default active item
  const [mappingData, setMappingData] = useState([]);
  // Create a state object to hold the dynamic toggle states
  const [toggleStates, setToggleStates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
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
    (MappingData || data).forEach((item) => {
      initialState[`item_${item.id}`] = false; // Initialize as false (not toggled)
    });
    setToggleStates(initialState);
  };

  // Call the initialization function when the component mounts
  React.useEffect(() => {
    if (MappingData == null) {
      fetchProfileById();
    } else {
      setIsLoading(false);
    }

    initializeToggleStates();
  }, []);

  const handleToggle = (itemId) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [`item_${itemId}`]: !prevState[`item_${itemId}`], // Toggle the state
    }));
  };

  //-----------Get Profile----------------------------------------------
  function fetchProfileById() {
    var profile = {};
    //  var profileId = parseInt(userId, 10);
    ProfileService.getProfileById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        id: userData.profileId, //profileId, //47,
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          profile = res.data.data;
          setReduxProfile({ profile });
          console.log("Profile ->", profile);
          setMappingData(res.data.data.mapping);

          setIsLoading(false);
        } else if (res.status === 404) {
          setIsLoading(false);
          navigate("/NHAI/Error/404");
        } else if (res.status === 500) {
          setIsLoading(false);
          navigate("/NHAI/Error/500");
        }
        //   return data;
      }
    );
    console.log("profile->", profile);
    return profile;
  }

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse navColor"
    >
      <div className="position-sticky" key="0">
        <div className="list-group list-group-flush" key="0">
          {(MappingData || mappingData).map((x, index) => {
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
                          : x.menuName == "Transaction Type"
                          ? faPenToSquare
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
