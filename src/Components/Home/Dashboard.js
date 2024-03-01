import React, { useEffect, useState } from "react";
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
import Spinner from "../HtmlComponents/Spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileService } from "../../Service/ProfileService";
import { v4 as uuid } from "uuid";
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state ? location.state.userData : ""; //useParams();
  const MappingData = JSON.parse(sessionStorage.getItem("Mapping"));
  const [activeTab, setActiveTab] = useState("Snapshot");
  const [isLoading, setIsLoading] = useState(false);
  const [mData, setMData] = useState([]);
  const getActiveTab = (x) => {
    setActiveTab(x);
  };
  useEffect(() => {
    if (MappingData === null) {
      fetchProfileById(userData.profileId);
    } else {
      setIsLoading(false);
    }
  }, []);

  //-----------Get Profile----------------------------------------------
  function fetchProfileById(profileId) {
    var profile = {};
    ProfileService.getProfileById(
      {
        requestMetaData: {
          applicationId: "nhai-dashboard",
          correlationId: uuid(),
        },
        id: profileId,
        userName: "nhai",
      },
      (res) => {
        if (res.status === 200) {
          profile = res.data.data;
          console.log("Profile ->", profile);

          var mappingData = JSON.stringify(res.data.data.mapping);
          setMData(res.data.data.mapping);
          sessionStorage.clear();
          sessionStorage.setItem("Mapping", mappingData);

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
    <>
      <div className="wrapper">
        <Spinner isLoading={isLoading} />
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="p-1">
                {/* <TabsComponent /> */}
                <TabsComponent
                  ActiveTab={getActiveTab}
                  active={{ name: activeTab }}
                  mData={mData}
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
