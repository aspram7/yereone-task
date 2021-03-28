import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewProductsAction } from "store/products/action";
import Product from "components/Product/Product";

import styles from "./NewProducts.module.scss";

const NewProducts = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.section}>
      <h4>ՆՈՐ ԱՊՐԱՆՔՆԵՐ</h4>
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
  return { products: state.products.newProducts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getNewProductsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProducts);
