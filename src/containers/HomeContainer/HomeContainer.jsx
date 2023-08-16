import HelmetContainer from "../HelmetContainer/HelmetContainer";
import SliderContainer from "../SliderContainer/SliderContainer";
import { TOP_URL, TRENDING_URL } from "../../config/config";
import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";

const HomeContainer = () => {
  return (
    <>
      <HelmetContainer title={"Welcome To Netflix"} />

      <SliderContainer
        title={"TRENDING MOVIES"}
        tvMovieValue={"movie"}
        URL_VALUE={TRENDING_URL}
      />

      <SliderContainer
        title={"TRENDING TV SHOWS"}
        tvMovieValue={"tv"}
        URL_VALUE={TRENDING_URL}
      />

      <SliderContainer
        title={"TOP RATED MOVIES"}
        tvMovieValue={"movie"}
        URL_VALUE={TOP_URL}
        loader={<SpinnerLoader />}
      />

      <SliderContainer
        title={"TOP RATED TV SHOWS"}
        tvMovieValue={"tv"}
        URL_VALUE={TOP_URL}
      />
    </>
  );
};

export default HomeContainer;
