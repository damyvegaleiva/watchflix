import TrendingContainer from "../TrendingContainer/TrendingContainer";
import { Helmet } from "react-helmet-async";
import TopRatedContainer from "../TopRatedContainer/TopRatedContainer";

const HomeContainer = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Watchflix</title>
      </Helmet>

      <TopRatedContainer />
      <TrendingContainer title={"MOVIES"} trendingValue={"movie"} />
      <TrendingContainer title={"TV SHOWS"} trendingValue={"tv"} />
    </>
  );
};

export default HomeContainer;
