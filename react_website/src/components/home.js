import React, { useState, useEffect } from "react";
import Card from "./card/card"; // Make sure to adjust the path accordingly
import styles from "../App.css";
import coreurl from "../components/core_url/coreurl";
const Product = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1339/api/landing-pages?populate=*"
        );
        const data = await response.json();
        setHomeData(data.data[0]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div
      style={{
        flex: 1,
        marginLeft: "70px",
        marginRight: "70px",
        marginBottom: "100px",
      }}
    >
      {homeData && (
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
            {homeData.attributes.heading}
          </h1>
          <p
            style={{
              fontFamily: "serif",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {homeData.attributes.hero.title}
          </p>
          <p
            style={{
              fontFamily: "helvetica",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            {homeData.attributes.hero.subtitle}
          </p>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                fontFamily: "Metropolis",
                cursor: "pointer",
                color: "white",
                backgroundColor: "#008b8b",
                borderRadius: "8px",
                padding: "10px 20px",
                border: "none",
              }}
              onClick={() =>
                (window.location.href =
                  "https://transworldbd.com/index.php/products/productive-office")
              }
            >
              {homeData.attributes.hero.button}
            </button>
          </div>

          {/* Space between heading and image slider */}
          <div style={{ marginBottom: "50px" }}></div>

          {/* Card Section */}
          <div>
            {homeData.attributes.card.map((card) => (
              <Card
                key={card.id}
                title={<div className="title-bold-center">{card.title}</div>}
                subtitle={<div className="subtitle">{card.subtitle}</div>}
                subhead={
                  <div className="button-center">
                    {card.button && (
                      <a
                        href={card.ReadMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.button}
                      </a>
                    )}
                  </div>
                }
              />
            ))}
          </div>

          {/* Additional Images */}
          <div className="additional-images">
            {homeData.attributes.image.data.map((image, index) => (
              <img
                key={image.id}
                src={`http://localhost:1339${image.attributes.url}`}
                alt={image.attributes.name}
                style={{
                  borderRadius: "10px",
                  margin: "10px",
                  padding: "23px",
                }}
              />
            ))}
          </div>

          {/* Footer Section */}
          {homeData.attributes.footer && (
            <div className="footer">
              <p style={{ fontWeight: "bold" }}>{homeData.attributes.footer}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
