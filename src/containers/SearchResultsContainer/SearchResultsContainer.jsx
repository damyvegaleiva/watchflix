import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { MOVIE_SEARCH_URL } from "../../config/config";
import { DataFormatAdapter } from "../../adapters/DataFormatAdapter";

import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";
import SearchResultsList from "../../components/Search/SearchResultsList/SearchResultsList";

const SearchResultsContainer = () => {
  const { id, optionId } = useParams();
  const { data, isLoading } = useFetch(
    MOVIE_SEARCH_URL(optionId, id),
    DataFormatAdapter
  );
  const hasMovies = data.length > 1;

  if (isLoading) return <SpinnerLoader />;

  return (
    <main className="mt-10">
      <h2 className="mb-10 text-2xl text-center text-white">Search results:</h2>
      <SearchResultsList movies={data} hasMovies={hasMovies} />
    </main>
  );
};

export default SearchResultsContainer;
