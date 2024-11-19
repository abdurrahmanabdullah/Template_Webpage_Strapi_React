import React from "react";
import logo from "../../src/Asset/qbot.png";
import logo1 from "../../src/Asset/qbot1.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComponent from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import styles from "../lucent_chart_page/lucentChart.css";
import l1 from "../../src/Asset/lucentchart/l1.png";
import l2 from "../../src/Asset/lucentchart/l2.png";
import l3 from "../../src/Asset/lucentchart/l3.png";

// clientslider imgage
import c1 from "../../src/Asset/clientlogo/client1.png";
import c2 from "../../src/Asset/clientlogo/client2.png";
import c3 from "../../src/Asset/clientlogo/client3.png";
import c4 from "../../src/Asset/clientlogo/client4.png";
import c5 from "../../src/Asset/clientlogo/client5.png";

//why choose
import why1 from "../../src/Asset/lucentchart/why1.png";
import why2 from "../../src/Asset/lucentchart/why2.png";
import why3 from "../../src/Asset/lucentchart/why3.png";

import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Qbot() {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" onClick={onClick}>
        <FaChevronRight
          style={{
            color: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50%",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow" onClick={onClick}>
        <FaChevronLeft style={{ color: "blue" }} />
      </div>
    );
  };

  const clientUrls = [c1, c2, c3, c4, c5];
  const highlighted = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const ImageSlider = () => {
    return (
      <div>
        <Row>
          <Col>
            <div>
              <div
                style={{
                  marginTop: "70px",
                  marginLeft: "220px",
                }}
              >
                <h1
                  style={{
                    fontFamily: "New Rocker",
                    color: "#3FC9DA",
                    fontSize: "90px",
                  }}
                >
                  LUCENT CHART
                </h1>
                <h3
                  style={{
                    fontFamily: "Lato",
                    color: "#005A6C",
                    fontWeight: "bolder",
                    marginTop: "30px",
                  }}
                >
                  Digital Vision Chart
                </h3>
              </div>
            </div>
          </Col>
          <Col>
            <div
              style={{
                marginLeft: "120px",
                marginBottom: "15%",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              <img style={{ width: "90%" }} src={l1} alt="L1 Image" />
            </div>
          </Col>
        </Row>
        {/* ////Digital Acuity System */}

        <Row>
          <Col>
            <div>
              <div
                style={{
                  marginLeft: "220px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Times New Roman",
                  }}
                >
                  Digital Acuity System
                </h3>
                <p
                  style={{
                    fontFamily: "Lato",
                    textAlign: "justify",
                  }}
                >
                  A digital acuity system, also known as a digital visual acuity
                  testing system, is a technology based tool used to measure
                  visual acuity. These systems replace traditional letter charts
                  or Snellen charts used in manual visual acuity testing.
                  Digital acuity systems typically consist of a computer or
                  tablet screen displaying optotypes (letters, numbers, or
                  symbols) at various sizes. Patients are asked to identify the
                  optotypes presented on the screen, and the system records
                  theirresponses
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div
              style={{
                marginLeft: "120px",
                marginBottom: "100px",
                maxWidth: "50%",
                overflow: "hidden",
              }}
            >
              <img style={{ width: "90%" }} src={l2} alt="L2 Image" />
            </div>
          </Col>
        </Row>

        {/* ///image section */}
        <img
          style={{
            width: "50%",
            maxWidth: "1333px",
            maxHeight: "577px",
            marginLeft: "320px",
          }}
          src={l3}
          alt="L3 Image"
        />
        {/* //Feature of Lucent Chart */}
        <div>
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>
            Feature of Lucent Chart
          </h2>
          <div
            style={{
              paddingLeft: "120px",
              paddingRight: "80px",
              paddingTop: "20px",
            }}
          >
            <Row>
              {/* First Card */}
              <Col xs={12} md={2}>
                <div className="lucent-Card">
                  <div className="card-body">
                    <p>18.5” Wide monitor with mirror function</p>
                  </div>
                </div>
              </Col>

              {/* Second Card */}
              <Col xs={12} md={2}>
                <div className="lucent-Card">
                  <div className="card-body">
                    <p>
                      Menu option for distance, Single OPTO, and Setup Function
                    </p>
                  </div>
                </div>
              </Col>

              {/* Third Card */}
              <Col xs={12} md={2}>
                <div className="lucent-Card">
                  <div className="card-body">
                    <p>High-resolution test image</p>
                  </div>
                </div>
              </Col>

              {/* Fourth Card (and so on) */}
              <Col xs={12} md={2}>
                <div className="lucent-Card">
                  <div className="card-body">
                    <p>Fixation targets for children and educational charts</p>
                  </div>
                </div>
              </Col>

              {/* Fifth Card (and so on) */}
              <Col xs={12} md={2}>
                <div className="lucent-Card">
                  <div className="card-body">
                    <p>User-friendly Bluetooth remote control</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="Advance-lucent-chart">
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "80px",
                  fontFamily: "Times New Roman",
                  textAlign: "center",
                }}
              >
                Advance of Lucent chart
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

          <div className="row" style={{ padding: "20px" }}>
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
                      contrast, and presentation format. This flexibility
                      enables customized testing based on individual patient
                      needs.
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
              <div className="advace-card-3">
                <div className="advace-card-content">
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
                      The interactive nature of digital acuity testing can
                      enhance patient engagement and participation, especially
                      among younger patients or those familiar with technology.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>

        {/* ///////////////////////--------------why choose  */}
        <div
          className="why-choose"
          style={{ marginLeft: "90px", marginRight: "50px" }}
        >
          <div className="row">
            <div className="col-md-4">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "60px",
                  fontFamily: "Times New Roman",
                  textAlign: "center",
                  marginTop: "40px",
                  width: "150px",
                }}
              >
                Why choose ‘Lucent Chart’
              </h1>
            </div>
            <div className="col-md-4">
              <div className="row" style={{ marginLeft: "15px" }}>
                <div className="col-md-12" style={{ marginBottom: "30px" }}>
                  <img style={{ width: "40%" }} src={why1} alt="L2 Image" />
                </div>
                <div className="col-md-12" style={{ marginBottom: "30px" }}>
                  <img style={{ width: "40%" }} src={why2} alt="why2 Image" />
                </div>
                <div className="col-md-12">
                  <img style={{ width: "40%" }} src={why3} alt="why3 Image" />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12" style={{ marginBottom: "10px" }}>
                  <div className="lucent-Card-1">
                    <div className="card-body-1">
                      <p>
                        Our solution uses tests and charts designed by
                        ophthalmologists
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginBottom: "10px" }}>
                  <div className="lucent-Card-1">
                    <div className="card-body-1">
                      <p>
                        Fully built on latest android technology which can be
                        easily controlled with Bluetooth remote
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="lucent-Card-1">
                    <div className="card-body-1">
                      <p>
                        You can choose any option of all in one or justsolution
                        without display
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* /// highlight client */}

        <div className="highlight client">
          <h2
            style={{
              marginTop: "60px",
              marginBottom: "60px",
              marginLeft: "90px",
              marginLeft: "30px",
              textAlign: "center",
            }}
          >
            Highlighted Client List
          </h2>

          <div>
            <Slider {...highlighted}>
              {clientUrls.map((url, index) => (
                <div key={index}>
                  <img style={{ width: "120px", height: "120px" }} src={url} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  };

  return <ImageSlider />;
}

export default Qbot;
