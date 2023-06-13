import { useNavigate } from "react-router-dom";

const MoviesItem = ({ id, title, poster, year }) => {
  const navigate = useNavigate();

  return (
    <li
      key={id}
      className="flex flex-col items-center justify-center w-1/4 px-6 transition duration-500 bg-black rounded-md shadow-lg shadow-white mb-7 hover:cursor-pointer hover:scale-105 easy-in-out grayscale-75 hover:grayscale-0"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <h3 className="my-3 text-2xl text-center">{title}</h3>
      <img src={poster} alt={title} className="mb-3 rounded-md" />
      <p className="text-xl">{year}</p>
      <button
        onClick={() => navigate(`/movie/${id}`)}
        className="px-5 my-5 border rounded hover:bg-white hover:text-neutral-950"
      >
        +Info
      </button>
    </li>
  );
};

export default MoviesItem;
