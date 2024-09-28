import React from "react";
import cover from "../../../assets/images/cover-photo.jpg";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center gap-10 basis-[100vh] grow">
      <div
        className="absolute inset-0 bg-cover bg-center  bg-black bg-blend-darken bg-opacity-65 bg-cover skew-y-3"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      ></div>
      <div className="relative flex flex-col items-center gap-10 z-5">
        <div className="px-2 flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-6">
            <p className="text-4xl md:text-5xl font-bold">
              Discover a world of movies at your fingertips
            </p>
            <p className="md:text-lg">
              Browse, search, and find your next favorite film.
            </p>
          </div>
          <div>
            <p className="md:text-lg">
              Dive into detailed information, watch trailers, and keep track of
              your must-see list.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-0 ">
          <input
            type="text"
            placeholder="Search for a movie"
            className="w-[80%] md:basis-[50%] px-2 py-4 rounded-md bg-[var(--neutral-color-light)] border border-gray-400 focus:outline-[var(--brand-color)]"
          />
          <button className="w-[40%] md:basis-[20%] p-4 flex justify-between items-center bg-[var(--brand-color)] text-white rounded-md">
            <p>Get Started</p>
            <span>
              <IconChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
