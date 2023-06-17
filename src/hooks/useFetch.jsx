import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../config/config";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const useGetMovies = (value) => {
    const hasMovies = data?.length > 1;
    useEffect(() => {
      setIsLoading(true);

      setInterval(() => {
        fetch(BASE_URL + value, OPTIONS)
          .then((response) => response.json())
          .then((data) =>
            setData(
              data.results.map(({ poster_path, ...rest }) => ({
                ...rest,
                poster: poster_path,
              }))
            )
          )
          .catch((err) => console.error(err))
          .finally(() => setIsLoading(false));
      }, 1000);
    }, [value]);

    return { data, hasMovies, isLoading };
  };

  const useGetMovieDetail = (value) => {
    useEffect(() => {
      setIsLoading(true);

      setInterval(() => {
        fetch(BASE_URL + value, OPTIONS)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((err) => console.error(err))
          .finally(() => setIsLoading(false));
      }, 1000);
    }, [value]);

    return { data, isLoading };
  };

  const useGetWatchProviders = (value) => {
    useEffect(() => {
      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => setData(data.results.US.buy))
        .catch((err) => console.error(err));
    }, [value]);

    return { data };
  };

  return { useGetMovies, useGetMovieDetail, useGetWatchProviders, isLoading };
};

export default useFetch;
