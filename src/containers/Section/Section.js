import React from "react";
import Layout from "components/Layout/Layout";

import Home from "containers/Section/Home/Home";
import BestSellers from "containers/Section/BestSellers/BestSellers";
import NewProducts from "containers/Section/NewProducts/NewProducts";
import Gifts from "containers/Section/Gifts/Gifts";

const Section = () => {
  return (
    <Layout>
      <Home />
      <BestSellers />
      <Gifts />
      <NewProducts />
    </Layout>
  );
};

export default Section;
