import React from "react";
import Home from "./components/home";
import Product from "./components/products";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/aboutus";
import CustomNavbar from "./components/Nabvar";
import ContactForm from "./components/contact";
import Service from "./components/service";
// import LucentChartComponent from "./components/lucentChart";
import LucentChartComponent from "./lucent_chart_page/lucentChart";
import ProductOfficeComponent from "./components/productoffice";
import IpTelephoneService from "./components/IpTelephoneService";

import DynamicContent from "../src/components/TemplatePage";
import Qbot from "./qbot_page/Qbot";
import Qad from "./qad_page/qad";

import NurseCall from "./components/nursecall_page/nurseCall";

function App() {
  return (
    <div>
      <div>
        <CustomNavbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />{" "}
        {/* Add this line for the product route */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="product/qbot" element={<Qbot />} /> {/* Q bot route*/}
        <Route path="product/qad" element={<Qad />} /> {/* Q bot route*/}
        <Route path="product/nursecalling" element={<NurseCall />} />{" "}
        {/* Q bot route*/}
        <Route path="/service" element={<Service />} /> Fix the component name
        here
        <Route path="product/lucentchart" element={<LucentChartComponent />} />
        <Route
          path="product/ProductiveOffice"
          element={<ProductOfficeComponent />}
        />
        <Route
          path="product/IpTelephoneService&Solution"
          element={<IpTelephoneService />}
        />
        <Route path="service/:slug" element={<DynamicContent />} />
        <Route
          path="service/*"
          element={
            <Routes>
              <Route path="/*" element={<DynamicContent />} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
