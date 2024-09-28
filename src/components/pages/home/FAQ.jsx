import React from "react";
import {
  IconDeviceLaptop,
  IconMovie,
  IconStereoGlasses,
} from "@tabler/icons-react";

import tickets from "../../../assets/images/movie-tickets.png";
import screening from "../../../assets/images/movie.png";
import movie from "../../../assets/images/action-movie.png";

const FAQ = () => {
  return (
    <div className="px-8 md:px-12 flex flex-col gap-6">
      <p className="text-lg font-bold">Why Flicknest?</p>
      <div className="p-4 flex flex-col gap-5 bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] rounded-lg">
        <div className="text-lg md:text-xl font-medium">
          Film Discovery Awaits!
        </div>
        <p className="md:text-lg">
          Discover Your Next Favorite Film! Explore an expansive database of
          movies, reviews, and insights with FlickNest!
        </p>
        <span className="w-14 h-14 md:w-16 md:h-16 self-end ">
          <img src={tickets} alt="" />
        </span>
      </div>
      <div className="p-4 flex flex-col gap-5 bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] rounded-lg">
        <div className="text-lg md:text-xl font-medium">Dive into Cinema!</div>
        <p className="md:text-lg">
          Dive into the World of Cinema! Uncover hidden gems and blockbuster
          hits—FlickNest is your ultimate movie companion!
        </p>
        <span className="w-14 h-14 md:w-16 md:h-16 self-end ">
          <img src={screening} alt="" />
        </span>
      </div>
      <div className="p-4 flex flex-col gap-5 bg-gradient-to-br from-[#1A2145] via-[#1D172D] to-[#1E1425] rounded-lg">
        <div className="text-lg md:text-xl font-medium">
          Start Your Movie Journey!
        </div>
        <p className="md:text-lg">
          Your Movie Journey Starts Here! Navigate through genres, ratings, and
          community favorites with FlickNest—where every film lover belongs!
        </p>
        <span className="w-14 h-14 md:w-16 md:h-16 self-end ">
          <img src={movie} alt="" />
        </span>
      </div>
    </div>
  );
};

export default FAQ;
