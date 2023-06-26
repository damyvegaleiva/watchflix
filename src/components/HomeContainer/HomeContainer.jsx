import HelmetContainer from "../HelmetContainer/HelmetContainer";
import TopRatedContainer from "../TopRatedContainer/TopRatedContainer";
import SliderContainer from "../SliderContainer/SliderContainer";

const HomeContainer = () => {
  return (
    <>
      <HelmetContainer title={"Welcome To Netflix"} />

      <TopRatedContainer />
      <SliderContainer title={"MOVIES"} tvMovieValue={"movie"} />
      <SliderContainer title={"TV SHOWS"} tvMovieValue={"tv"} />
    </>
  );
};

export default HomeContainer;
