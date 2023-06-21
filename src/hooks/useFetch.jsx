import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../config/config";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  ////////////// TODO -GET DATA MOVIES/SERIES

  const useGetMovies = (value) => {
    const hasMovies = data?.length > 1;

    useEffect(() => {
      setIsLoading(true);

      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => {
          setData(
            data.results.map(({ poster_path, ...rest }) => ({
              ...rest,
              poster: poster_path,
            }))
          );
        })
        .catch((err) => console.error(err))
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        );
    }, [value]);

    return { data, hasMovies, isLoading };
  };

  ////////////// TODO -GET ITEM DETAIL

  const useGetMovieDetail = (value) => {
    useEffect(() => {
      setIsLoading(true);

      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => {
          value.includes("tv")
            ? setData(() => {
                const { name, poster_path, ...rest } = data;
                return {
                  title: name,
                  poster: poster_path,
                  ...rest,
                };
              })
            : setData(() => {
                const { poster_path, ...rest } = data;
                return {
                  poster: poster_path,
                  ...rest,
                };
              });
        })
        .catch((err) => console.error(err))
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 1000)
        );
    }, [value]);

    return { data, isLoading };
  };

  ////////////// TODO -GET PROVIDERS TO WATCH MOVIE

  const useGetWatchProviders = (value) => {
    useEffect(() => {
      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.US.buy) return setData(data.results.US.buy);
          setData(data.results.US?.flatrate);
        })
        .catch((err) => console.error(err));
    }, [value]);

    return { data };
  };
  ////////////// TODO -GET TRAILER

  const useGetTrailer = (value) => {
    useEffect(() => {
      fetch(BASE_URL + value, OPTIONS)
        .then((response) => response.json())
        .then((data) =>
          setData(data.results?.find((video) => video.name.includes("Trailer")))
        )
        .catch((err) => console.log(err));
    }, [value]);

    return { data, isLoading };
  };

  return {
    useGetMovies,
    useGetMovieDetail,
    useGetWatchProviders,
    useGetTrailer,
    isLoading,
  };
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
//       const json = await re sponse.json();

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
