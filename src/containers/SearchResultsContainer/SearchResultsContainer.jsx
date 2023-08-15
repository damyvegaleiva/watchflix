import { useParams } from "react-router-dom";
import { MOVIE_SEARCH_URL } from "../../config/config";
import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";
import SliderContainer from "../SliderContainer/SliderContainer";

const SearchResultsContainer = () => {
  const { id, optionId } = useParams();

  return (
    <main className="mt-10">
      <SliderContainer
        title={"SEARCH RESULTS"}
        tvMovieValue={optionId}
        value={id}
        URL_VALUE={MOVIE_SEARCH_URL}
        loader={<SpinnerLoader />}
      />
    </main>
  );
};

export default SearchResultsContainer;
