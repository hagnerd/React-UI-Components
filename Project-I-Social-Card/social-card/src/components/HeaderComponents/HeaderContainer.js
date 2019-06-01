import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";
import "./Header.css";

export default function HeaderContainer() {
  return (
    <header className="header">
      <ImageThumbnail />
      <div className="header--text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
}
