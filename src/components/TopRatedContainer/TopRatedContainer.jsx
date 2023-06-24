import { TOP_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import { getModifiedData } from "../../utils/APIFunctions";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import TrendingList from "../TrendingList/TrendingList";

const TopRatedContainer = () => {
  const { data, isLoading } = useFetch(TOP_URL, getModifiedData);

  if (isLoading) return <SpinnerLoader />;

  return (
    <section className="mb-10 lg:mb-24">
      <h2 className="w-2/3 py-3 pl-4 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TOP RATED MOVIES
      </h2>
      <TrendingList data={data} trendingValue={"movie"} />
    </section>
  );
};

export default TopRatedContainer;
