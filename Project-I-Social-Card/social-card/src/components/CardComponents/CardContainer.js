import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

export default function CardContainer() {
  return (
    <div className="card--container">
      <CardBanner />
      <CardContent />
    </div>
  );
}
