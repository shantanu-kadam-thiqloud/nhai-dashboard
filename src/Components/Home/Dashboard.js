import React, { useState } from "react";
import "../../Assets/Css/Dashboard.css";
import TabsComponent from "../HtmlComponents/TabsComponent";
import Snapshot from "./Snapshot";
import FinanacialD from "./Finanacial_D";
import Financial from "./Financial";
import Zone from "./Zone";
import Bank from "./Bank";
import RO from "./RO";
import PIU from "./PIU";
import Transaction from "./Transaction";
import Velocity from "./Velocity";
import Events from "./Events";
import AccountLevel from "./AccountLevel";
import LimitLedger from "./LimitLedger";
import Ageing from "./Ageing";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Snapshot");
  const getActiveTab = (x) => {
    setActiveTab(x);
  };
  return (
    <>
      <div className="wrapper">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="p-1">
                {/* <TabsComponent /> */}
                <TabsComponent
                  ActiveTab={getActiveTab}
                  active={{ name: activeTab }}
                />
              </div>
            </div>
          </div>
          <hr />
          {/* -----------------------------------Dynamic component------------------------------------- */}
          {/* <Snapshot /> */}
          {activeTab === "Snapshot" && <Snapshot />}
          {activeTab === "Financial" && <Financial />}
          {activeTab === "Financial(D)" && <FinanacialD />}
          {activeTab === "Bank" && <Bank />}
          {activeTab === "Zone" && <Zone setTab={setActiveTab} />}
          {activeTab === "RO" && <RO />}
          {activeTab === "PIU" && <PIU />}
          {activeTab === "Account Level" && <AccountLevel />}
          {activeTab === "Transaction" && <Transaction />}
          {activeTab === "Ageing" && <Ageing />}
          {activeTab === "Events" && <Events />}
          {activeTab === "Limit Ledger" && <LimitLedger />}
          {activeTab === "Velocity" && <Velocity />}
          {/* ------------------------------------------------------------------------------------------ */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
