import React from "react";
import Layout from "components/Layout/Layout";

import logoFooter from "assets/svg/footer/logo-footer.svg";
import locationFooter from "assets/svg/footer/location-footer.svg";
import mailFooter from "assets/svg/footer/email-footer.svg";
import phoneFooter from "assets/svg/footer/phone-footer.svg";
import cardsFooter from "assets/svg/footer/cards-footer.svg";
import facebook from "assets/svg/footer/facebook.svg";
import instagram from "assets/svg/footer/instagram.svg";
import twitter from "assets/svg/footer/twitter.svg";
import linkedin from "assets/svg/footer/linkedin.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app-footer">
      <Layout>
        <div className="footer-block">
          <div className="footer-block-item">
            <img src={logoFooter} alt="Logo" />
            <div className="footer-info-item">
              <div>
                <span>
                  <img src={locationFooter} alt="address" />
                </span>
                <p>Հասցե 3/5, Երեւան, ՀՀ</p>
              </div>
              <div>
                <span>
                  <img src={mailFooter} alt="mail" />
                </span>
                <p>giftshop@gmail.com</p>
              </div>
              <div>
                <span>
                  <img src={phoneFooter} alt="address" />
                </span>
                <p>(044) 989 - 177</p>
              </div>
            </div>
            <img src={cardsFooter} alt="cards" />
          </div>
          <div className="footer-block-item">
            <div className="footer-block-header">
              <h4>ԱՊՐԱՆՔՆԵՐ</h4>
            </div>
            <div className="footer-block-content">
              <p>Զարդեր</p>
              <p>Տուփեր</p>
              <p>Մանկական</p>
              <p>Կանանց</p>
              <p>Տան</p>
            </div>
          </div>
          <div className="footer-block-item">
            <div className="footer-block-header">
              <h4>ՀԱՇԻՎ</h4>
            </div>
            <div className="footer-block-content">
              <p>Իմ Էջը</p>
              <p>Գրանցվել</p>
              <p>Մուտք</p>
              <p>Առաքում</p>
              <p>Վճարում</p>
            </div>
          </div>
          <div className="footer-block-item">
            <div className="footer-block-header">
              <h4>ԳՐԱՆՑՎԵԼ</h4>
            </div>
            <p className="footer-block-red-text">Գրանցվեք նորությունների համար և ստացեք 2% զեղչ:</p>
            <div className="footer-block-media">
              <div>
                <input type="text" placeholder="Էլ. հասցե" />
                <button>ԳՐԱՆՑՎԵԼ </button>
              </div>
              <div className="footer-block-social-media">
                <div>
                  <img src={facebook} alt="facebook" />
                </div>
                <div>
                  <img src={instagram} alt="instagram" />
                </div>
                <div>
                  <img src={twitter} alt="twitter" />
                </div>
                <div>
                  <img src={linkedin} alt="linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
