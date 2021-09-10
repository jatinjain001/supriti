import React from "react";
import "./index.css";

function Footer() {

    const currentYear = new Date().getFullYear()

    return(
    // <!-- footer start -->

    <footer className="page-footer font-small footer">
    <div className="footer-copyright text-center py-3">{currentYear} Copyright:
      <h5 className="footer1">Supriti.com</h5>
    </div>
  </footer>
//   <!-- footer end -->
    );
}
export default Footer;