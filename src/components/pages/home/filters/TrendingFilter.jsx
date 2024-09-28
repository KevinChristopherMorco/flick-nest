import React, { useState } from "react";
import {
  IconChevronDown,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";

const TrendingFilter = () => {
  const [toggleFilter, setToggleFilter] = useState({
    viewIsTrending: false,
    viewIsPopular: false,
  });
  const { viewIsTrending, viewIsPopular } = toggleFilter;

  return (
    <div className="px-8 md:px-12  flex flex-col gap-4">
      <div className="w-full mx-auto text-[var(--text-color)] relative">
        <div
          className="p-3 flex justify-between items-center bg-[--neutral-color] rounded-md focus:outline-[var(--brand-color)]"
          onClick={() =>
            setToggleFilter(() => ({
              viewIsTrending: !viewIsTrending,
              viewIsPopular: false,
            }))
          }
        >
          <p>Choose by Genre</p>
          <span>
            <IconChevronDown className="w-4 h-4" />
          </span>
        </div>

        {viewIsTrending && (
          <ul className="w-full h-[10rem] px-3 py-2 flex flex-col gap-4 bg-[var(--neutral-color)] overflow-y-scroll absolute -bottom-100 z-[100]">
            <li data-genre="action">Action</li>
            <li data-genre="adventure">Adventure</li>
            <li data-genre="animation">Animation</li>
            <li data-genre="comedy">Comedy</li>
            <li data-genre="documentary">Documentary</li>
            <li data-genre="drama">Drama</li>
            <li data-genre="fantasy">Fantasy</li>
            <li data-genre="historical">Historical</li>
            <li data-genre="horror">Horror</li>
            <li data-genre="mystery">Mystery</li>
            <li data-genre="musical">Musical</li>
            <li data-genre="romance">Romance</li>
            <li data-genre="sci-fi">Sci-Fi</li>
            <li data-genre="thriller">Thriller</li>
            <li data-genre="western">Western</li>
          </ul>
        )}
      </div>

      <div className="w-full mx-auto text-[var(--text-color)] relative">
        <div
          className="p-3 flex justify-between items-center bg-[--neutral-color] rounded-md focus:outline-[var(--brand-color)]"
          onClick={() =>
            setToggleFilter(() => ({
              viewIsTrending: false,
              viewIsPopular: !viewIsPopular,
            }))
          }
        >
          <p>Choose by Popularity</p>
          <span>
            <IconChevronDown className="w-4 h-4" />
          </span>
        </div>

        {viewIsPopular && (
          <ul className="w-full h-fit px-3 py-2 flex flex-col gap-4 bg-[var(--neutral-color)] overflow-y-scroll absolute -bottom-100 z-[100]">
            <li className="flex items-center gap-2" data-genre="action">
              <p>Most Favorite</p>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span key={index}>
                    <IconStarFilled className="w-4 h-4 text-[var(--brand-color-400)]" />
                  </span>
                ))}
            </li>
            <li className="flex items-center gap-2" data-genre="adventure">
              <p> Least Favorite</p>
              <span>
                <IconStarHalfFilled className="w-4 h-4 text-[var(--brand-color-400)]" />
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrendingFilter;
