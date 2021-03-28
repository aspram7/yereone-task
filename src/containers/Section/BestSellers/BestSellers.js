import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBestSellersAction } from "store/products/action";
import Product from "components/Product/Product";

import styles from "./BestSellers.module.scss";

const BestSellers = ({ products, getBestSellers }) => {
  useEffect(() => {
    getBestSellers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.section}>
      <h4>ԱՄԵՆԱՎԱՃԱՌՎԱԾ</h4>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              image={product.img}
              name={product.title}
              price={product.originalPrice}
              salePrice={product.salePrice}
              star={product.rating}
              newProduct={product.new}
              sale={product.sale}
              exist={product.exist}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products.bestSellers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBestSellers: () => dispatch(getBestSellersAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSellers);
