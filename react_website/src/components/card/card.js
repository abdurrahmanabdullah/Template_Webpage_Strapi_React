// Card.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.css";

const Card = ({ title, subtitle, subhead }) => (
  <div className="card">
    {" "}
    {/* apply the .card class */}
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <p>{subhead}</p>
    {/* <button>{subhead}</button> */}
  </div>
);

export default Card;
