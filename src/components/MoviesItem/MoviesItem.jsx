import { useNavigate } from "react-router-dom";

const MoviesItem = ({ imdbID, Title, Poster, Year }) => {
  const navigate = useNavigate();

  return (
    <li
      key={imdbID}
      className="flex flex-col items-center justify-center w-5/6 px-5 mx-auto transition duration-300 bg-black border rounded-md mb-7 sm:w-1/2 md:max-w-lg lg:w-2/5 md:hover:cursor-pointer md:hover:scale-105 lg:border-transparent lg:grayscale-75 lg:hover:grayscale-0 lg:hover:border-white xl:w-30 2xl:w-50 "
      onClick={() => navigate(`/movie/${imdbID}`)}
    >
      <h3 className="my-3 text-2xl text-center">{Title}</h3>
      <img src={Poster} alt={Title} className="mb-3 rounded-md" />
      <p className="text-xl">{Year}</p>
      <button
        onClick={() => navigate(`/movie/${imdbID}`)}
        className="px-5 my-5 border rounded hover:bg-white hover:text-neutral-950"
      >
        +Info
      </button>
    </li>
  );
};

export default MoviesItem;
