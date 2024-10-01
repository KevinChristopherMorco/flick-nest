import { useEffect, useState } from "react";
import axios from "axios";

const useMovieData = () => {
  const [response, setResponse] = useState(() =>
    JSON.parse(localStorage.getItem("movieDB"))
  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // if (!response) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?language=en-US&append_to_response=videos&api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        localStorage.setItem("movieDB", JSON.stringify(response.data));
        setResponse(response.data);

        // }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { response, isLoading };
};

export default useMovieData;
