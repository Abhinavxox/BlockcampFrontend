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
              GET A BLOCKSURANCE
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* policies */}
      <div className="pb-10">
        <PoliciesHero />
      </div>
      {/* why section */}
      <div>
        <WhySection />
      </div>
    </>
  );
};

export default Home;
