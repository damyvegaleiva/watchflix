import TrendingContainer from "../TrendingContainer/TrendingContainer";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { Helmet } from "react-helmet-async";

const HomeContainer = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Watchflix</title>
      </Helmet>

      <TrendingContainer
        title={"MOVIES"}
        trendingValue={"movie"}
        loader={<SpinnerLoader />}
      />
      <TrendingContainer title={"TV SHOWS"} trendingValue={"tv"} />
    </>
  );
};

export default HomeContainer;
