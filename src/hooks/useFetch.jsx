import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../config/config";

const useFetch = () => {
  const useGetMovies = (value) => {
    const [data, setData] = useState([]);
    const hasMovies = data?.length > 1;

    useEffect(() => {
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
        .catch((err) => console.error(err));
    }, [value]);

    return { data, hasMovies };
  };

  const useGetMovieDetail = (value) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err));
    }, [value]);

    return { data };
  };

  return { useGetMovies, useGetMovieDetail };
};

export default useFetch;
