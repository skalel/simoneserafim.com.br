import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Procedures from "../pages/Procedures";
import Testimonials from "../pages/Testimonials";
import Products from "../pages/Products";
import AboutMe from "../pages/AboutMe";
import NotFound from "../pages/NotFound";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" exact element={<Homepage/>} />
    <Route path="/procedimentos" exact element={<Procedures />} />
    <Route path="/depoimentos" exact element={<Testimonials />} />
    <Route path="/sobre-mim" exact element={<AboutMe />} />
    <Route path="/produtos" exact element={<Products />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesConfig;
