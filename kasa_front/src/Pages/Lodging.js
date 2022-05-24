import React from "react";
import "../styles/pages/Lodging/lodging.css";
import { useLocation } from "react-router-dom";
import redStar from "../Assets/icones/red-star-icone.png";
import star from "../Assets/icones/stars-icone.png";
import Slider from "../components/Slider";
import LodgingHeader from "../components/LodgingHeader";
import AccordionList from "../components/AccordionList";
import AccordionLodging from "../components/AccordionLodging";
export default function Lodging() {
  const location = useLocation();

  return (
    <main className="main-lodging">
      {" "}
      <Slider />
      <section className="lodging-top">
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
      </section>
      <section className="hote_container">
        <ul className="hote-rate">
          <li>
            {" "}
            <img src={location.state.rating >= 1 ? redStar : star} alt="" />
          </li>
          <li>
            {" "}
            <img src={location.state.rating >= 2 ? redStar : star} alt="" />
          </li>
          <li>
            {" "}
            <img src={location.state.rating >= 3 ? redStar : star} alt="" />
          </li>
          <li>
            {" "}
            <img src={location.state.rating >= 4 ? redStar : star} alt="" />
          </li>
          <li>
            {" "}
            <img src={location.state.rating >= 5 ? redStar : star} alt="" />
          </li>
        </ul>
        <div className="hote-info">
          <p>{location.state.host.name}</p>
          <img src={location.state.host.picture} alt="" />
        </div>
      </section>
      <section className="accordion-container">
        <AccordionLodging
          txt={location.state.description}
          title={"Description"}
        />

        <AccordionList />
      </section>
    </main>
  );
}
