import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/HederFooter/Header";
import Routers from "./Components/Route/Routers";
import Footer from "./Components/HederFooter/Footer";
import Sidebar from "./Components/HederFooter/Sidebar";
import { useLocation } from "react-router-dom";

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
      {!isLoginPage && <Sidebar />}
      <ToastContainer />
      <Routers />
      {/* Check Commit */}
      {/* <div style={{ height: "100vh" }}></div> */}
      <Footer />
    </div>
  );
}

export default App;
