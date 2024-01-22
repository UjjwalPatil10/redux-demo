import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import ProductListing from "./ProductListing";
import Checkout from "./Checkout";
const ProductTask = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default ProductTask;
