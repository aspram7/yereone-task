import React from "react";

import call from "assets/svg/header-content/call.svg";
import mail from "assets/svg/header-content/mail.svg";
import delivery from "assets/svg/header-content/delivery.svg";
import smile from "assets/svg/header-content/smile.svg";
import bag from "assets/svg/header-content/bag.svg";
import bigboxLogo from "assets/svg/header-content/bigbox-logo.svg";

import "./HeaderContent.scss";

const HeaderContent = () => {
  return (
    <div className="app-header-content">
      <div className="left-side">
        <div className="left-side-address">
          <div className="left-side-phone">
            <div className="left-side-phone-icon">
              <img src={call} alt="call" />
            </div>
            <div className="left-side-phone-numbers">
              +044 17216621 <br />
              +044 17216622
            </div>
          </div>
          <div className="left-side-mail">
            <div className="left-side-mail-icon">
              <img src={mail} alt="mail" />
            </div>
            <div className="left-side-mail-text">contact@bigbox.com</div>
          </div>
        </div>
        <div className="left-side-delivery">
          <div className="left-side-delivery-icon">
            <img src={delivery} alt="delivery" />
          </div>
          <div className="left-side-delivery-text">Գործում է առաքում</div>
        </div>
      </div>
      <div className="center-logo">
        <img src={bigboxLogo} alt="logo" />
      </div>
      <div className="right-side">
        <div className="right-side-auth">
          <div className="right-side-auth-icon">
            <img src={smile} alt="smile" />
          </div>
          <div className="right-side-auth-sign">
            <span className="right-side-auth-signup">Գրանցում </span>
            <span className="right-side-auth-signin">/ Մուտք</span>
          </div>
        </div>
        <div className="right-side-bag">
          <div className="right-side-bag-icon">
            <img src={bag} alt="bag" />
            <span className="right-side-bag-count">2</span>
          </div>
          <div className="right-side-bag-text">Զամբյուղ</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
