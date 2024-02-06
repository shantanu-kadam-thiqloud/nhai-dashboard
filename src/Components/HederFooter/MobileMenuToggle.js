import React from "react";
import "../../Assets/Css/Sidebar.css";

const MobileMenuToggle = () => {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebarMenu");
    sidebar.style.display = sidebar.style.display === "none" || sidebar.style.display === "" ? "block" : "none";
  };

  return (
    <div className="mobile-menu-toggle">
      <button
        id="menu-toggle"
        className="menu-icon"
        aria-label="Toggle Menu"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
};

export default MobileMenuToggle;
