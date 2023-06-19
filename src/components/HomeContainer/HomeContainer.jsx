import { useParams } from "react-router-dom";
import TrendingContainer from "../TrendingContainer/TrendingContainer";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import DetailContainer from "../DetailContainer/DetailContainer";
import TvMoviesListContainer from "../TvMoviesListContainer/TvMoviesListContainer";

const HomeContainer = () => {
  const { movieTitle } = useParams();
  const { movieId } = useParams();

  return (
    <>
      <TrendingContainer
        title={"MOVIES"}
        trendingValue={"movie"}
        loader={<SpinnerLoader />}
      />
      <TrendingContainer title={"TV SHOWS"} trendingValue={"tv"} />

      {movieTitle ? (
        <TvMoviesListContainer />
      ) : movieId ? (
        <DetailContainer />
      ) : (
        ""
      )}
    </>
  );
};

export default HomeContainer;
