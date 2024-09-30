import React, { useEffect, useRef, useState } from "react";
import TrendingFilter from "./filters/TrendingFilter";
import {
  IconChevronCompactLeft,
  IconChevronCompactRight,
} from "@tabler/icons-react";

const Trending = () => {
  const ref = useRef(null);
  let [scroll, setScroll] = useState(0);
  const [isVisible, setIsVisible] = useState({
    descVisibility: true,
    ascVisibility: true,
  });
  const { descVisibility, ascVisibility } = isVisible;

  const handleScroll = (event) => {
    console.log(ref.current.scrollWidth);

    const { id } = event.target;
    setScroll(ref.current.scrollLeft);

    if (id === "scrollToLeft") {
      if (scroll === 0) return;
      setScroll((prev) => {
        return (ref.current.scrollLeft = prev - 400);
      });
    }

    if (id === "scrollToRight") {
      if (scroll >= ref.current.scrollWidth) return;
      setScroll((prev) => {
        return (ref.current.scrollLeft = prev + 400);
      });
    }
  };

  useEffect(() => {
    setIsVisible((prev) => {
      if (scroll === 0) {
        return {
          descVisibility: false,
          ascVisibility: true,
        };
      }

      if (scroll >= ref.current.scrollWidth) {
        return {
          descVisibility: true,
          ascVisibility: false,
        };
      }

      return {
        descVisibility: true,
        ascVisibility: true,
      };
    });
  }, [scroll]);

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
          ref={ref}
        >
          {Array(10)
            .fill()
            .map((_, index) => {
              return (
                <li
                  key={index}
                  className="flex-none w-[8rem] md:w-[9rem] relative transition-transform hover:scale-110"
                >
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNjE0NjIwMzAwOF5BMl5BanBnXkFtZTgwOTIyMzMzMDE@._V1_SX300.jpg"
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
    </section>
  );
};

export default Trending;
