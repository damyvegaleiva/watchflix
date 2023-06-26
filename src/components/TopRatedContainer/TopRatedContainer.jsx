import { TOP_URL } from "../../config/config";
import { getModifiedData } from "../../utils/APIFunctions";
import useFetch from "../../hooks/useFetch";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import SliderList from "../SliderList/SliderList";

const TopRatedContainer = () => {
  const { data, isLoading } = useFetch(TOP_URL, getModifiedData);

  if (isLoading) return <SpinnerLoader />;

  return (
    <section className="mb-10 lg:mb-24">
      <h2 className="w-2/3 py-3 pl-4 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TOP RATED MOVIES
      </h2>
      <SliderList data={data} tvMovieValue={"movie"} />
    </section>
  );
};

export default TopRatedContainer;
