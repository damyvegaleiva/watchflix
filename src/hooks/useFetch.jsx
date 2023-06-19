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
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        );
    }, [value]);

    return { data, hasMovies, isLoading };
  };

  const useGetMovieDetail = (value) => {
    useEffect(() => {
      setIsLoading(true);

      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err))
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        );
    }, [value]);

    return { data, isLoading };
  };

  const useGetWatchProviders = (value) => {
    useEffect(() => {
      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => {
          setData(data.results.US.buy);
        })
        .catch((err) => console.error(err));
    }, [value]);

    return { data };
  };

  return { useGetMovies, useGetMovieDetail, useGetWatchProviders, isLoading };
};

export default useFetch;

// const useGetMovies = (value) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const hasMovies = data?.length > 1;

//   useEffect(() => {
//     getMovies(value);
//   }, [value]);

//   const getMovies = async (value) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(BASE_URL + value, OPTIONS);
//       const json = await response.json();

//       if (Array.isArray(json.results)) {
//         setData(
//           json.results.map(({ poster_path, ...rest }) => ({
//             ...rest,
//             poster: poster_path,
//           }))
//         );
//         return;
//       }
//       const modifiedObject = {
//         ...json,
//         poster: json.poster_path,
//       };
//       setData(modifiedObject);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setTimeout(() => setIsLoading(false), 3000);
//     }
//   };
//   return { data, hasMovies, isLoading };
// };

// export default useGetMovies;
