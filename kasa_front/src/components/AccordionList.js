import React, { useState, useRef, useEffect } from "react";
import "../styles/components/accordionAbout/accordionAbout.css";
import ArrowIcone from "../Assets/icones/arrow-icone.png";
import { useLocation } from "react-router-dom";
export default function AccordionAbout(props) {
  const location = useLocation();
  console.log(location.state.equipments);

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const toggleState = () => {
    setToggle(!toggle);
  };
  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);
  return (
    <div className="accord">
      <div onClick={toggleState} className="accord-visible">
        <h3>Équipements</h3>
        <img src={ArrowIcone} alt="chevron" />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accord-toggle animated" : "accord-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <ul className="equipments-list">
          {location.state.equipments.map((equipments) => {
            return (
              <li className="equipments" key={equipments + location.state.id}>
                {equipments}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
