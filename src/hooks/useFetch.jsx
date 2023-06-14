// import withResults from "../mocks/with-result.json";
// import noResults from "../mocks/no-results.json";
import { useEffect, useState } from "react";

const useFetch = (value) => {
  const [data, setData] = useState([]);
  // const movies = data.Search || Object.keys(data).length > 2;
  const hasMovies = data?.length > 0 || Object.keys(data).length > 2;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=2b9059a1&${value}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setData(data.Search);
          return;
        } else if (Object.keys(data).length > 2) {
          setData(data);
          return;
        }
      });
  }, [value]);

  // const mappedMovies = movies?.map((movie) => ({
  //   id: movie.imdbID,
  //   title: movie.Title,
  //   poster: movie.Poster,
  //   year: movie.Year,
  // }));

  // console.log(mappedMovies);

  return { data, hasMovies };
};

export default useFetch;
