import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/components/lodgingHeader/lodgingHeader.css";

export default function LodgingHeader() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="lodging-header">
      <hgroup>
        <h1 className="lodging-header__title">{location.state.title}</h1>
        <h2 className="lodging-header__subtitle">{location.state.location}</h2>
      </hgroup>
    </div>
  );
}
