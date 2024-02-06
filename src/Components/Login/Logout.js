import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

function Logout() {
  const navigate = useNavigate();

  async function logout() {
    try {
      const UUID = localStorage.getItem("UUID");
      const response = await axios.post(
        "http://localhost:3007/api/auth/logout",
        { encrypted: UUID }
      );
      if (response.data) {
        localStorage.removeItem("UUID");
        console.log(response.data);
        toast.success("Logout successful!", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate("/NHAI/login");
      }
    } catch (error) {
      console.error("Error fetching public key:", error);
    }
  }

  return (
    <div>
      <span className="NHAIText">
        <FontAwesomeIcon
          icon={faPowerOff}
          style={{ color: "#999999" }}
          onClick={logout}
        />
      </span>
    </div>
  );
}

export default Logout;
