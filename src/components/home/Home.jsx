import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Awards />
    </>
  );
};

export default Home;
