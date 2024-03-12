import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/Kotak_logo.png";
import NHAILogo from "../../Assets/images/NHAI-Logo-VECTOR.png";
import Logout from "../Login/Logout";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  clearCookie,
  getCookie,
  useGetReduxData,
} from "../HtmlComponents/CommonFunction";

function Header() {
  const navigate = useNavigate();
  const [lastLogin, setLastLogin] = useState("8 Aug 2023, 05:18 PM");
  const location = useLocation();
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const USER = reduxUser === "" ? getCookie("USER") : reduxUser;

  const isDashboard =
    location.pathname === "Dashboard" || location.pathname === "Dashboard"
      ? true
      : false;

  useEffect(() => {
    console.log("USER->", USER);
    console.log("Redux_Data", reduxData);
  }, [USER]);

  return (
    <header>
      <div className="row">
        <div className="logo kotakDiv col-md-10">
          <a href="/">
            {" "}
            <img src={logo} alt="Logo" className="headerLogo" />
          </a>
          {isDashboard && (
            <span className="lastLogin">Last Logged in {lastLogin}</span>
          )}
          <span className="lastLogin">
            {USER === "" || USER === undefined
              ? ""
              : USER.userRole == null
              ? ""
              : USER.userRole + " "}
            |{USER === "" || USER === undefined ? "" : " " + USER.userName}
          </span>
        </div>
        <div className="logoNHAI nhaiDiv col-md-2">
          <a href="/">
            {" "}
            <img src={NHAILogo} alt="NHAILogo" className="NHAILogo" />
          </a>
          <span className="NHAIText">NHAI</span>
          <></>
          {location.pathname != "/NHAI/login" ? (
            <div className="logoutBtn">
              <FontAwesomeIcon
                icon={faPowerOff}
                className="MenuIcon"
                onClick={() => {
                  sessionStorage.clear();
                  localStorage.clear();
                  clearCookie("USER");
                  navigate("/NHAI/login");
                  window.location.reload();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {isDashboard && <Logout />}
        </div>
      </div>
    </header>
  );
}

export default Header;
