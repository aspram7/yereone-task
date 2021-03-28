import React from "react";

import speakCoral from "assets/svg/header-menu/speak-coral.svg";
import speakLightblue from "assets/svg/header-menu/speak-lightblue.svg";
import search from "assets/svg/header-menu/search.svg";

import "./HeaderMenu.scss";

const HeaderMenu = () => {
  return (
    <div className="app-header-menu">
      <ul className="app-header-menu-list">
        <li className="list-item">
          <p>ԿԱՆԱՆՑ</p>
        </li>
        <li className="list-item">
          <p>ՏՂԱՄԱՐԴԿԱՆՑ</p>
        </li>
        <li className="list-item childish">
          <div className="list-item-sale">
            <img src={speakCoral} alt="Զեղչ" />
            <p className="list-item-sale-text">ԶԵՂՉ</p>
          </div>
          <p>ՄԱՆԿԱԿԱՆ</p>
          <div className="list-item-childish-hover">
            <ul>
              <li>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</li>
              <li>ԶԱՐԴԵՐ</li>
              <li>ԲԱԺԱԿՆԵՐ</li>
              <li>ԳՐՔԵՐ</li>
              <li>16+</li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <p>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</p>
        </li>
        <li className="list-item">
          <p>ՏԱՆ</p>
        </li>
        <li className="list-item">
          <div className="list-item-sale">
            <img src={speakLightblue} alt="Նոր" />
            <p className="list-item-sale-text">ՆՈՐ</p>
          </div>
          <p>ԽՈՀԱՆՈՑԱՅԻՆ</p>
        </li>
        <li className="list-item">
          <p>ԱՅԼ</p>
        </li>
      </ul>
      <div className="search">
        <img src={search} alt="Որոնում" />
      </div>
    </div>
  );
};

export default HeaderMenu;
