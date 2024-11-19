import React from "react";
import styles from "../qad_page/qad.css";
import logo1 from "../../src/Asset/qad/q1.png";
import logo2 from "../../src/Asset/qad/q2.png";
import logo3 from "../../src/Asset/qad/qlogo.png";
import logo4 from "../../src/Asset/qad/lo1.png";
import logo5 from "../../src/Asset/qad/lo2.png";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-animated-slider/build/horizontal.css";

// clientslider imgage

import c1 from "../../src/Asset/clientlogo/client1.png";
import c2 from "../../src/Asset/clientlogo/client2.png";
import c3 from "../../src/Asset/clientlogo/client3.png";
import c4 from "../../src/Asset/clientlogo/client4.png";
import c5 from "../../src/Asset/clientlogo/client5.png";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Qad() {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" onClick={onClick}>
        <FaChevronLeft style={{ color: "blue" }} />
      </div>
    );
  };
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const clientUrls = [c1, c2, c3, c4, c5];
  const highlighted = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div style={{ marginLeft: "120px", marginRight: "120px" }}>
      <img
        style={{
          width: "100%",
          height: "450px",
          paddingLeft: "20px",
        }}
        src={logo3}
        alt="Qbot Image"
      />

      <Row style={{ padding: "90px" }}>
        <Col style={{ display: "block", width: 150, marginLeft: "10px" }}>
          <div style={{ marginRight: "30px" }}>
            <h2
              style={{
                whiteSpace: "nowrap",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              About Qad
            </h2>
            <p style={{ textAlign: "justify" }}>
              Digital Signage (Qad) is a product of Transworld Mercantile
              Corporation that uses digital displays to showcase multimedia
              content in public spaces. It is commonly used for advertising and
              information display purposes and can be managed remotely through a
              centralized content management system. This solution is developed
              to help businesses enhance their brand image and improve customer
              engagement. Using our TV screen solution, you can show your
              content on one or many screens placed on a wall. This is good for
              space saving and ideal for many locations. You can show pictures,
              multimedia content, or other relevant content on the screen. Our
              stand-alone Signage Players combined with Digital Screens can
              bring your customer areas to life help you in marketing and boost
              your organization’s image.
            </p>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "140px" }}>
            <img style={{ width: "80%" }} src={logo1} alt="Qbot Image" />
          </div>
        </Col>
      </Row>

      <div className="system-work">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          How Our Cloud Based System Works
        </h1>
        <img
          style={{ width: "100%", height: "300px" }}
          src={logo2}
          alt="Qbot Image"
        />
      </div>

      {/* //------qad  feature */}

      <div className="Advance-lucent-chart">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h1
              style={{
                fontWeight: "bolder",
                fontSize: "50px",
                fontFamily: "Times New Roman",
                textAlign: "center",
              }}
            >
              Digital Signage Solution (Qad) will have the following features
            </h1>
          </div>
          <div className="col-xs-12 col-md-4">
            <Col md={4}>
              <div className="advace-card">
                <div className="advace-card-content">
                  <div className="card-title">
                    <h2 style={{ display: "inline-block" }}>
                      <span
                        style={{
                          color: "#E71616",
                          marginRight: "75px",
                          fontFamily: "New Rocker",
                          fontSize: "30px",
                        }}
                      >
                        01
                      </span>
                      Precisionk
                    </h2>
                  </div>
                  <div className="card-body">
                    <p>
                      The advantage of using unique charts for accurate
                      assessment in adult examinations will ensure you get
                      accurate results
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>

        {/* //2nd row ----------- */}

        <div className="row" style={{ padding: "10px" }}>
          <Col md={4}>
            <div className="advace-card">
              <div className="advace-card-content">
                <div className="card-title">
                  <h2 style={{ display: "inline-block" }}>
                    <span
                      style={{
                        color: "#E71616",
                        marginRight: "75px",
                        fontFamily: "New Rocker",
                        fontSize: "30px",
                      }}
                    >
                      02
                    </span>
                    Flexibility
                  </h2>
                </div>
                <div className="card-body">
                  <p>
                    These systems allow for easy adjustment of optotype size,
                    contrast, and presentation format. This flexibility enables
                    customized testing based on individual patient needs.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="advace-card">
              <div className="advace-card-content">
                <div className="card-title">
                  <h2 style={{ display: "inline-block" }}>
                    <span
                      style={{
                        color: "#E71616",
                        marginRight: "75px",
                        fontFamily: "New Rocker",
                        fontSize: "30px",
                      }}
                    >
                      03
                    </span>
                    Standardization
                  </h2>
                </div>
                <div className="card-body">
                  <p>
                    Digital acuity systems adhere to standardized testing
                    protocols, ensuring consistency and reliability in visual
                    acuity measurements across differentsettings and
                    practitioners.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <div className="col-xs-12 col-md-4">
            <Col md={4}>
              <div className="advace-card">
                <div className="advace-card-content">
                  <div className="card-title">
                    <h2 style={{ display: "inline-block" }}>
                      <span
                        style={{
                          color: "#E71616",
                          marginRight: "50px",
                          fontFamily: "New Rocker",
                          fontSize: "30px",
                        }}
                      >
                        04
                      </span>
                      Enhancement
                    </h2>
                  </div>
                  <div className="card-body">
                    <p>
                      Our solution will help you with a more accurate and
                      comprehensive digital acuity assessment that appliesto
                      both children and adults.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
        {/* // 3rd row---------- */}

        <div className="row" style={{ padding: "10px" }}>
          <Col md={4}>
            <div className="advace-card-31">
              <div className="advace-card-content">
                <div className="card-title">
                  <h2 style={{ display: "inline-block" }}>
                    <span
                      style={{
                        color: "#E71616",
                        marginRight: "50px",
                        fontFamily: "New Rocker",
                        fontSize: "30px",
                      }}
                    >
                      05
                    </span>
                    Innovative
                  </h2>
                </div>
                <div className="card-body">
                  <p>
                    Lucent Charts has new pediatric images and videosto help
                    test even just-talking babies
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="Qad-advace-card-3">
              <div
                className="Qad-advace-card-content"
                style={{ padding: "10px" }}
              >
                <div className="card-title">
                  <h2 style={{ display: "inline-block" }}>
                    <span
                      style={{
                        color: "#E71616",

                        marginRight: "200px",
                        marginLeft: "30px",
                        fontFamily: "New Rocker",
                        fontSize: "30px",
                      }}
                    >
                      06
                    </span>
                    Patient Engagement
                  </h2>
                </div>
                <div className="card-body">
                  <p style={{ textAlign: "center" }}>
                    The interactive nature of digital acuity testing can enhance
                    patient engagement and participation, especially among
                    younger patients or those familiar with technology.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "30px", marginBottom: "10px" }}></div>
      </div>

      {/* ////---looking for */}
      <div class="lokcontainer" style={{ marginBottom: "550px" }}>
        <h1 style={{ textAlign: "center" }}>I’m looking for...</h1>
        <div class="row" style={{ padding: "60px" }}>
          <div class="col-md-6">
            <div
              class="card"
              style={{
                background: "linear-gradient(180deg, #e5e5e5 0%, #beb2f0 100%)",
              }}
            >
              <img
                class="card-img-top"
                src={logo4}
                alt="Qbot Image"
                style={{ width: "70%", marginLeft: "30px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Floor Standing Kiosk ....</h5>
                {/* Add any other content here */}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="card"
              style={{
                background: "linear-gradient(180deg, #e5e5e5 0%, #beb2f0 100%)",
              }}
            >
              <img
                class="card-img-top"
                src={logo4}
                alt="Qbot Image"
                style={{ width: "70%", marginLeft: "30px" }}
              />
              <div class="card-body">
                <h5 class="card-title">Wall Mounting Kiosk ....</h5>
                {/* Add any other content here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /// highlight client */}

      <div className="highlight client">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Highlighted Client List
        </h2>

        <div className="">
          <div className="mt-20">
            <Slider {...highlighted}>
              {clientUrls.map((url, index) => (
                <div key={index} className="">
                  {/* <a href="#" className=""></a> */}
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={url}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qad;
