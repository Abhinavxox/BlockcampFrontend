import React from "react";
import PoliciesHero from "./PoliciesHero";
import WhySection from "./WhySection";

const Home = () => {
  return (
    <>
      {/* hero content */}
      <div
        className="hero h-1/2"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
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
            <button className="btn btn-primary">Publish</button>
          </div>
        </div>
      </div>
      {/* policies */}
      <div className="pb-10">
        <PoliciesHero />
      </div>
      {/* why section
      <div>
        <WhySection />
      </div> */}
    </>
  );
};

export default Home;
