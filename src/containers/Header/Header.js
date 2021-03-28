import React from "react";

import Layout from "components/Layout/Layout";
import HeaderTop from "containers/Header/HeaderTop/HeaderTop";
import HeaderContent from "containers/Header/HeaderContent/HeaderContent";
import HeaderMenu from "containers/Header/HeaderMenu/HeaderaMenu";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <Layout>
        <HeaderContent />
        <HeaderMenu />
      </Layout>
    </header>
  );
};

export default Header;
