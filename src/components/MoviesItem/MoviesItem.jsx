import { useNavigate } from "react-router-dom";

const MoviesItem = ({ imdbID, Title, Poster, Year }) => {
  const navigate = useNavigate();

  return (
    <li
      key={imdbID}
      className="flex flex-col items-center justify-center w-1/4 px-6 transition duration-500 bg-black rounded-md shadow-lg shadow-white mb-7 hover:cursor-pointer hover:scale-105 easy-in-out grayscale-75 hover:grayscale-0"
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
