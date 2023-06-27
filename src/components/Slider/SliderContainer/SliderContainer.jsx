import { TRENDING_URL } from "../../../config/config";
import { getModifiedData } from "../../../utils/APIFunctions";
import useFetch from "../../../hooks/useFetch";
import SliderList from "../SliderList/SliderList";

const SliderContainer = ({ title, tvMovieValue }) => {
  const { data, isLoading } = useFetch(
    TRENDING_URL(tvMovieValue),
    getModifiedData
  );

  if (isLoading) return <></>;

  return (
    <section className="mb-4 lg:mb-16">
      <h2 className="w-2/3 py-3 pl-4 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TRENDING {title}
      </h2>
      <SliderList data={data} tvMovieValue={tvMovieValue} />;
    </section>
  );
};

export default SliderContainer;
