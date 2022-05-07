import React from "react";
import "../styles/components/footer/footer.css";
import kasaLogoWhite from "../Assets/kasa-logo-white.png";
export default function Footer() {
  return (
    <footer>
      <img src={kasaLogoWhite} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
