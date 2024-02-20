import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { ProfileService } from "../../Service/ProfileService";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router";

const TabsComponent = (props) => {
  const location = useLocation();
  const [homeTabs, setHomeTabs] = useState([]);
  const data = [
    {
      id: 1,
      menuName: "Home",
      subMenu: [
        { id: 1, name: "Snapshot", check: true, action: [] },
        { id: 2, name: "Financial", check: true, action: [] },
        { id: 3, name: "Financial(D)", check: true, action: [] },
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
  ];

  React.useEffect(() => {
    // fetchProfileById();
  }, []);
  const userData = location.state ? location.state.userData : ""; //useParams();
  const tabsData = data[0].subMenu; //homeTabs;
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const tabsRef = useRef(null);
  console.log(userData, " - from tabs");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    props.ActiveTab(tab.name);
  };

  const handleNextClick = () => {
    if (tabsRef.current) {
      const tabWidth = tabsRef.current.children[0].offsetWidth;
      tabsRef.current.scrollLeft += tabWidth + 10; // Add some extra spacing
    }
  };

  const handlePreviousClick = () => {
    if (tabsRef.current) {
      const tabWidth = tabsRef.current.children[0].offsetWidth;
      tabsRef.current.scrollLeft -= tabWidth + 10; // Add some extra spacing
    }
  };

  useEffect(() => {
    setActiveTab(props.active);
  }, [props.active]);

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
        id: userData.profileId, //"", //profileId, //47,
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          profile = res.data.data;
          console.log("Profile ->", profile.mapping[0].subMenu);
          setHomeTabs(profile.mappinng[0].subMenu);
        } else if (res.status === 404) {
          console.log("404");
        } else if (res.status === 500) {
          console.log("500");
        }
        //   return data;
      }
    );
    console.log("profile->", profile);
    return profile;
  }

  return (
    <div>
      <div className="tabs-container">
        <div className="buttons">
          <button className="scrollbtn" onClick={handlePreviousClick}>
            <FontAwesomeIcon
              className="arrowColor"
              icon={faCircleChevronLeft}
            />{" "}
          </button>
        </div>
        <div className="tabs" ref={tabsRef}>
          {tabsData.map((tab) => {
            return tab.check ? (
              <div
                key={tab.id}
                className={`tab ${activeTab.name === tab.name ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.name}
              </div>
            ) : (
              ""
            );
          })}
        </div>
        <div className="buttons">
          <button className="scrollbtn" onClick={handleNextClick}>
            {" "}
            <FontAwesomeIcon
              className="arrowColor"
              icon={faCircleChevronRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
