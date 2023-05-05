import React from "react";
import PoliciesHero from "./PoliciesHero";
import { Link } from "react-router-dom";
import Poster from "../images/poster.jpg";

const Home = () => {
  return (
    <>
      {/* hero content */}
      <div
        className="hero h-1/2"
        style={{
          backgroundImage: `url(${Poster})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 xl:text-5xl font-bold text-3xl">
              PUBLISH A PAPER
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
            <Link to="/publish">
              <button className="btn btn-primary">Publish</button>
            </Link>
          </div>
        </div>
      </div>
      {/* policies */}
      <div className="pb-10">
        <PoliciesHero />
      </div>
    </>
  );
};

export default Home;
