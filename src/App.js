import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/HederFooter/Header";
import Routers from "./Routes";
import Footer from "./Components/HederFooter/Footer";
import Sidebar from "./Components/HederFooter/Sidebar";
import { useLocation } from "react-router-dom";
import MobileMenuToggle from "./Components/HederFooter/MobileMenuToggle";

function App() {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/NHAI" ||
    location.pathname === "/NHAI/" ||
    location.pathname === "/NHAI/login" ||
    location.pathname === "/NHAI/varients"
      ? true
      : false;

  return (
    <div className="App">
      <Header />

      <div className="row">
        {!isLoginPage && (
          <>
            <div className="col-3 sideBar bgAppColor">
              <MobileMenuToggle />
              <Sidebar />
            </div>
            <div className="col-9 dataContainer pageWrapper">
              <div className="ps-4">
                <Routers />
              </div>
            </div>
          </>
        )}
        {isLoginPage && (
          <div className="col-12 dataContainer">
            <Routers />
          </div>
        )}
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
