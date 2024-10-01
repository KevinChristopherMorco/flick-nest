import React, { useEffect, useRef, useState } from "react";
import TrendingFilter from "./filters/TrendingFilter";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";

import useMovieData from "../../../hooks/axios/useMovieData";
import useScroll from "../../../hooks/home/useScroll";

import TrendModal from "./modal/TrendModal";

const Trending = () => {
  const { response } = useMovieData();

  const [modalIsOpen, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const { scrollRef, ascVisibility, handleScroll } = useScroll();

  return (
    <section className="w-full flex flex-col gap-6 md:gap-10">
      <p className="px-8 md:px-12 text-lg font-bold">Trending Now</p>
      <TrendingFilter />
      <div className="flex items-stretch">
        <div className="flex items-center font-bold bg-black">
          <IconChevronCompactLeft
            id="scrollToLeft"
            className="w-8 h-8"
            onClick={handleScroll}
          />
        </div>
        <ul
          className="scrollable px-4 md:px-8 w-full flex gap-8 overflow-x-scroll scroll-smooth"
          onScroll={handleScroll}
          ref={scrollRef}
        >
          {response.results.map((movieTrend, index) => {
            return (
              <li
                key={index}
                className="flex-none w-[8rem] md:w-[9rem] relative transition-transform cursor-pointer hover:scale-110"
                onClick={() => {
                  setModalData(movieTrend);
                  setModal(true);
                }}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w500/${movieTrend.poster_path}`}
                  alt=""
                  className="w-full h-full rounded-lg"
                />
                <p className="highlight-number text-7xl text-black absolute -left-6 bottom-2 text-stroke font-extrabold">
                  {index + 1}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center font-bold bg-black">
          <IconChevronCompactRight
            id="scrollToRight"
            className={`${ascVisibility ? "block" : "hidden"} w-8 h-8`}
            onClick={handleScroll}
          />
        </div>
      </div>
      {modalIsOpen && (
        <TrendModal
          modalData={modalData}
          modalIsOpen={modalIsOpen}
          setModal={setModal}
        />
      )}
    </section>
  );
};

export default Trending;
