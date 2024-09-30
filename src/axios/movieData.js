import { useEffect, useState } from "react";
import axios from "axios";

const movieData = () => {
  const [response, setResponse] = useState(() =>
    JSON.parse(localStorage.getItem("movieDB"))
  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // if (!response) {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/157336?api_key=17da9a85f2af4da6e1c86b34ace2316a"
        );
        localStorage.setItem("movieDB", JSON.stringify(response.data));
        setResponse(JSON.stringify(response.data));
        // }
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [response]);

  return { response, isLoading };
};

export default OMDB;
