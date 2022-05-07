import React from "react";
import "../styles/pages/Lodging/lodging.css";
import { useLocation } from "react-router-dom";

import Slider from "../components/Slider";
import LodgingHeader from "../components/LodgingHeader";
import AccordionList from "../components/AccordionList";
export default function Lodging() {
  const location = useLocation();
  console.log(location.state.tags);
  return (
    <div className="main-lodging">
      {" "}
      <Slider />
      <LodgingHeader />
      <ul className="tag-container">
        {location.state.tags.map((tag) => {
          return (
            <li className="tag" key={tag + location.state.id}>
              <p>{tag} </p>
            </li>
          );
        })}
      </ul>
      <div className="accordion-container">
        <AccordionList />
      </div>
    </div>
  );
}
