import React, { useState, useRef, useEffect } from "react";
import "../styles/components/AccordionLodgin/accordionLodgin.css";
import ArrowIcone from "../Assets/icones/arrow-icone.png";
export default function AccordionAbout(props) {
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
        <h3>{props.title}</h3>
        <img src={ArrowIcone} alt="chevron" />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accord-toggle animated" : "accord-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
      >
        <p>{props.txt}</p>
      </div>
    </div>
  );
}
