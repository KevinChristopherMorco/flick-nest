import React from "react";
import Hero from "./Hero";
import Trending from "./Trending";
import FAQ from "./FAQ";
import movieData from "../../../axios/movieData";
// import movie from "../../../json/movieIDS.json";

const Home = () => {
  // console.log(movie.split("\n"));
  return (
    <>
      <Hero />
      <Trending />
      <FAQ />
    </>
  );
};

export default Home;
