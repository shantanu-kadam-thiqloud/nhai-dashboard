import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const TabsComponent = (props) => {
  const tabsData = [
    { title: "Snapshot", content: "Content for Tab 1" },
    { title: "Financial", content: "Content for Tab 2" },
    { title: "Financial(D)", content: "Content for Tab 3" },
    { title: "Bank", content: "Content for Tab 4" },
    { title: "Zone", content: "Content for Tab 5" },
    { title: "RO", content: "Content for Tab 6" },
    { title: "PIU", content: "Content for Tab 7" },
    { title: "Account Level", content: "Content for Tab 8" },
    { title: "Transaction", content: "Content for Tab 9" },
    { title: "Ageing", content: "Content for Tab 10" },
    { title: "Events", content: "Content for Tab 11" },
    { title: "Limit Ledger", content: "Content for Tab 12" },
    { title: "Velocity", content: "Content for Tab 12" },
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0]);
  const tabsRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    props.ActiveTab(tab.title);
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

  return (
    <div>
      <div className="tabs-container">
        <div className="buttons">
          <button className="scrollbtn" onClick={handlePreviousClick}>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              style={{ color: "#999999" }}
            />{" "}
          </button>
        </div>
        <div className="tabs" ref={tabsRef}>
          {tabsData.map((tab) => (
            <div
              key={tab.title}
              className={`tab ${activeTab.title === tab.title ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="scrollbtn" onClick={handleNextClick}>
            {" "}
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              style={{ color: "#999999" }}
            />
          </button>
        </div>
      </div>
      {/* <div className="tab-content">
        <h2>{activeTab.title}</h2>
        <p>{activeTab.content}</p>
      </div> */}
    </div>
  );
};

export default TabsComponent;
