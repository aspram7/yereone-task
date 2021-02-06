import React from "react";

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
