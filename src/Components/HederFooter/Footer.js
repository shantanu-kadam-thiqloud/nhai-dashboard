import React from "react";

function Footer() {
  return (
    <div className="footerbar">
      <footer className="text-center footer">
        <p>Kotak Bank &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
