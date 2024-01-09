import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProuductList";
import ScrollableProductImages from "./components/ScrollableProductImages";
import Footer from "./components/footer/Footer";
import FootTwo from "./components/footer/FooterTwo";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Banner />
        <ProductList />
        <Routes>
          <Route path="/ScrollableProductImages" element={<ScrollableProductImages />} />
        </Routes>
    
        <FootTwo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
