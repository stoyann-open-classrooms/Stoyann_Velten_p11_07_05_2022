import React from "react";
import "../styles/components/lodgingCard/lodgingCard.css";
export default function CardLogement(props) {
  return (
    <>
      <div className="LodgingCards">{props.children}</div>
    </>
  );
}
