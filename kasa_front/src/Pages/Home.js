import React from "react";
import HomeCover from "../components/HomeCover";
import LodgingCard from "../components/LodgingCard";
import data from "../data/kasa_data.json";
import { Link } from "react-router-dom";
import "../styles/pages/home/home.css";
export default function Home() {
  return (
    <main className="home_main">
      <HomeCover />
      <div className="LodgingCard-container">
        {data.map((data) => {
          return (
            <Link
              to={{
                pathname: `/logement/${data.id}`,
              }}
              state={data}
              key={data.id}
            >
              <LodgingCard props={data}>
                <div className="container_img"></div>
                {/* <img src={data.cover} alt="" /> */}

                <h2>{data.title}</h2>
              </LodgingCard>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
