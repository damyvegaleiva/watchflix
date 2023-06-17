import ScrollContainer from "react-indiana-drag-scroll";
import TrendingItem from "../TrendingItem/TrendingItem";

const TrendingMoviesList = ({ movies }) => {
  return (
    <ScrollContainer className="flex flex-row mb-24 scroll-container">
      {movies.map((movie) => (
        <TrendingItem key={movie.id} {...movie} />
      ))}
    </ScrollContainer>
  );
};

export default TrendingMoviesList;
