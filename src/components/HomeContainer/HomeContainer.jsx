import { Helmet } from "react-helmet-async";
import TopRatedContainer from "../TopRatedContainer/TopRatedContainer";
import SliderContainer from "../SliderContainer/SliderContainer";

const HomeContainer = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Watchflix</title>
      </Helmet>

      <TopRatedContainer />
      <SliderContainer title={"MOVIES"} tvMovieValue={"movie"} />
      <SliderContainer title={"TV SHOWS"} tvMovieValue={"tv"} />
    </>
  );
};

export default HomeContainer;
