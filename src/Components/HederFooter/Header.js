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
import Spinner from "../HtmlComponents/Spinner";

function Header() {
  const navigate = useNavigate();

  const [lastLogin, setLastLogin] = useState("8 Aug 2023, 05:18 PM");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const reduxData = useGetReduxData();
  const reduxUser = reduxData.length != 0 ? reduxData.userData : "";
  const cookieUser = getCookie("USER");
  const USER = cookieUser === "" ? reduxUser : cookieUser;
  const lastCookie = document.cookie;

  const isLogin =
    location.pathname === "/NHAI/login" ||
    location.pathname === "/NHAI/internalLogin"
      ? true
      : false;
  // const isLogin = location.pathname === "/" ? true : false;
  const isDashboard =
    location.pathname === "/NHAI/Dashboard" ||
    location.pathname === "/NHAI/Dashboard"
      ? true
      : false;

  useEffect(() => {
    const checkCookie = () => {
      if (!isLogin && USER) {
        // console.log("lastCookie ",lastCookie);
        const currentCookie = document.cookie;
        if (currentCookie !== lastCookie) {
          console.log("coockie changed.!");
          clearCookie("TEST");
          clearCookie("USER");
          window.location.href = "/NHAI/login";
          // console.log("cookie data changed");
          //setLastCookie(currentCookie); // Update lastCookie state
        }
      }
    };
    const intervalId = setInterval(checkCookie, 1000);
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [lastCookie, isLogin]);

  useEffect(() => {
    console.log("USER->", USER);
    console.log("Redux_Data", reduxData);
  }, [USER]);

  return (
    <header>
      <div className="row">
        <Spinner isLoading={isLoading} />
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
              : USER?.userRole === null || USER?.userRole === undefined
              ? ""
              : USER?.userRole + " "}
            |
            {USER === "" || USER === undefined
              ? ""
              : " " + USER?.userName === undefined
              ? ""
              : USER?.userName}
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
                  setIsLoading(true);
                  sessionStorage.clear();
                  localStorage.clear();
                  clearCookie("USER");
                  navigate("/NHAI/login");
                  window.location.reload();
                  setIsLoading(false);
                }}
              />
            </div>
          ) : (
            ""
          )}
          {/* {isDashboard && <Logout />} */}
        </div>
      </div>
    </header>
  );
}

export default Header;
