import React from "react";
import styles from "../nursecall_page/nurseCall.css";

import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-animated-slider/build/horizontal.css";
//body image
import n1 from "../../Asset/nursecall/n1.png";
import n2 from "../../Asset/nursecall/n2.jpeg";
import n3 from "../../Asset/nursecall/n3.png";
// clientslider imgage
import c1 from "../../Asset/clientlogo/client1.png";
import c2 from "../../Asset/clientlogo/client2.png";
import c3 from "../../Asset/clientlogo/client3.png";
import c4 from "../../Asset/clientlogo/client4.png";
import c5 from "../../Asset/clientlogo/client5.png";
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
        src={n1}
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
            <img style={{ width: "80%" }} src={n2} alt="Qbot Image" />
          </div>
        </Col>
      </Row>

      <div className="system-work">
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          How Our Cloud Based System Works
        </h1>
        {/* <img
          style={{ width: "100%", height: "300px" }}
          src={logo2}
          alt="Qbot Image"
        /> */}
      </div>

      {/* //------qad  feature */}

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
