import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

export default function CardContainer() {
  return (
    <a href="reactjs.org" target="_blank" className="card--container">
      <CardBanner />
      <CardContent />
    </a>
  );
}
