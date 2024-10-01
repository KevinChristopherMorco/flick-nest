import React, { useEffect, useState } from "react";
import { IconCalendarMonth, IconStarFilled, IconX } from "@tabler/icons-react";
import axios from "axios";

const TrendModal = ({ modalData, setModal }) => {
  const [trailer, setTrailer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${modalData.id}/videos?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setTrailer(response.data.results);
      } catch {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="absolute top-0 w-full h-full bg-black bg-opacity-90">
      <div className="w-full h-full flex flex-col items-center relative">
        <div className="w-full md:w-[85%] h-fit min-h-[25rem] md:min-h-[30rem] flex flex-col fixed top-[50%] -translate-y-[50%] bg-[var(--neutral-color)] rounded-lg z-[999] animate-modalShow">
          <div className="w-full h-[15rem] md:h-[19rem] relative rounded-lg">
            <div
              className="p-2 absolute right-0 font-bold cursor-pointer z-[999]"
              onClick={() => setModal(false)}
            >
              <IconX className="cursor-pointer" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-100 mix-blend-multiply rounded-lg"></div>
            <div
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500/${modalData.backdrop_path} ")`,
              }}
              className="w-full h-full bg-cover bg-no-repeat rounded-lg"
            >
              <div className="px-4 absolute bottom-5 text-2xl md:text-3xl font-medium">
                <p>{modalData.title}</p>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow self-stretch gap-4 md:gap-10">
            <div className="flex items-center gap-2">
              <div className="w-fit p-1 flex items-center gap-1 text-[.75rem] md:text-sm bg-[#414141] rounded-md">
                <span>
                  <IconCalendarMonth className="w-3 h-3" />
                </span>
                <p>
                  {new Date(modalData.release_date).toLocaleString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="w-fit p-1 flex items-center gap-1 text-[.75rem] md:text-sm bg-[#414141] rounded-md">
                <span>
                  <IconStarFilled className="w-3 h-3 " />
                </span>
                <p>{modalData.vote_average.toFixed(2)}</p>
              </div>
            </div>
            <div className="text-sm md:text-base">
              <p>{modalData.overview}</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <a
                href={
                  !isLoading
                    ? `https://www.youtube.com/watch?v=${
                        trailer[trailer.length - 1].key
                      }`
                    : ""
                }
                className="w-full p-2 bg-[var(--brand-color)] rounded-md text-center"
                target="__blank"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendModal;
