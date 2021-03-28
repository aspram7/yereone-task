import React from "react";
import PropTypes from "prop-types";

import sign from "assets/svg/best-sellers/sign.svg";
import sold from "assets/svg/best-sellers/sold.svg";
import yellowStarImg from "assets/svg/best-sellers/yellow-star.svg";
import grayStarImg from "assets/svg/best-sellers/gray-star.svg";
import tabCoral from "assets/svg/best-sellers/tab-coral.svg";
import tabPastelGreen from "assets/svg/best-sellers/tab-pastel-green.svg";

import "./Product.scss";

const calculateStar = (star = 0) => {
  const starsList = [];
  for (let i = 0; i < 5; i++) {
    starsList.push(star > i);
  }
  return starsList;
};

const addPriceDots = (num = 0) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "Դ";
};

const Product = ({ className, image, name, price, salePrice, star, newProduct, sale, exist }) => {
  return (
    <div className={`app-product ${className}`}>
      <div className="app-product-image">
        <img src={image} alt="main pic" />
        <span className="app-product-image-sign">
          <img src={exist ? sign : sold} alt="sign" />
        </span>
        <span className="app-product-tab">
          {newProduct && <img src={tabPastelGreen} alt="tab" />}
          {sale && <img src={tabCoral} alt="tab" />}
        </span>
      </div>
      <div className="product-text">
        <p>{name}</p>
        <p className="product-price">
          {salePrice ? (
            <>
              <span className="original-price">{addPriceDots(price)}</span>
              <span className="sale-price">{addPriceDots(salePrice)}</span>
            </>
          ) : (
            addPriceDots(price)
          )}
        </p>
        <span className="product-star">
          {calculateStar(star).map((star, idx) => {
            return <img key={idx} src={star ? yellowStarImg : grayStarImg} alt="rating" />;
          })}
        </span>
      </div>
    </div>
  );
};

Product.defaultProps = {
  className: "",
  image: "",
  name: "",
  price: 0,
  salePrice: null,
  star: 0,
  newProduct: false,
  sale: false,
  exist: false,
};

Product.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.oneOf([null]).isRequired]),
  star: PropTypes.number.isRequired,
  newProduct: PropTypes.bool,
  sale: PropTypes.bool,
  exist: PropTypes.bool,
};

export default Product;
