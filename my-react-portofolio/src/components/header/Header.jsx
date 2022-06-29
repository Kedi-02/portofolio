import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      {/* This is spesific for this header component/section. This type of naming classes is called bim. Which is: .container.header__container */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kedi Krasniqi</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contacy" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
