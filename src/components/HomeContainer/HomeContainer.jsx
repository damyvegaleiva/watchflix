import TrendingContainer from "../TrendingContainer/TrendingContainer";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const HomeContainer = () => {
  return (
    <>
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
