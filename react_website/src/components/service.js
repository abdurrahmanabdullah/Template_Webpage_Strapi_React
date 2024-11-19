import React, { useState, useEffect } from "react";
import Card from "./card/cardrow"; // Make sure to adjust the path accordingly
import styles from "../App.css";
import CardGroup from "react-bootstrap/CardGroup";
const Service = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1339/api/services?populate=deep,10"
        );
        const data = await response.json();

        if (data && Array.isArray(data.data) && data.data.length > 0) {
          setServiceData(data.data[0]);
        } else {
          console.error("Service data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <div
      style={{
        flex: 1,
        marginLeft: "60px",
        marginRight: "80px",
        marginBottom: "100px",
      }}
    >
      {serviceData && (
        <>
          <h1
            style={{
              fontWeight: "bolder",
              fontSize: 40,
              textAlign: "center",
              color: "#3E8B94",
              marginBottom: "50px",
              marginTop: "70px",
            }}
          >
            {serviceData.attributes.hero.heading}
          </h1>

          <p
            style={{
              fontFamily: "helvetica",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            {serviceData.attributes.hero.subheading}
          </p>
          <div style={{ textAlign: "center" }}>
            {/* Any additional components you want to render */}
          </div>

          {/* Space between heading and image slider */}
          <div style={{ marginBottom: "10px" }}></div>

          {/* Card Section */}

          {/* <div className="card-container">
            {serviceData.attributes.card.map((card) => (
              <div key={card.id} className="kard">
                <div
                  className="title-bold-center"
                  style={{ paddingBottom: "20px" }}
                >
                  {card.title}
                </div>
                {
                  <div style={{ textAlign: "center", marginBottom: "15px" }}>
                    {card.subtitle}
                  </div>
                }
                {card.button && (
                  <div className="button-center">
                    <a href="https://transworldbd.com/index.php/products/productive-office">
                      {card.button}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div> */}

          <div className="service-card-container">
            {serviceData.attributes.card.map((card) => (
              <div key={card.id} className="kard">
                <div
                  className="title-bold-center"
                  style={{ paddingBottom: "15px" }}
                >
                  {card.title}
                </div>
                <div style={{ paddingBottom: "15px" }}>{card.subtitle}</div>
                {card.button && (
                  <div className="button-center">
                    <a href="https://transworldbd.com/index.php/products/productive-office">
                      {card.button}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ flex: 1, margin: "10px", marginBottom: "10px" }}></div>
          {/* Additional Images */}
          <div className="additional-images">
            {serviceData.attributes.images.data.map((image, index) => (
              <img
                key={image.id}
                src={`
http://localhost:1339${image.attributes.url}`}
                alt={image.attributes.name}
                style={{
                  // borderRadius: `${index + 1 * 5}px`,
                  // margin: `${index + 1 * 10}px`,
                  // padding: `${index + 1 * 8}px`,
                  // transition: 'background-color 0.3s',
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "23px",
                }}
              />
            ))}
          </div>

          {/* Footer Section */}
          {serviceData.attributes.footer && (
            <div className="footer">
              <p style={{ fontWeight: "bold" }}>
                {serviceData.attributes.footer}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Service;
