import useFetch from "../../hooks/useFetch";

import { DataFormatAdapter } from "../../adapters/DataFormatAdapter";
import SliderList from "../../components/Slider/SliderList/SliderList";

const SliderContainer = ({ title, tvMovieValue, URL_VALUE, loader }) => {
  const { data, isLoading } = useFetch(
    URL_VALUE(tvMovieValue),
    DataFormatAdapter
  );

  if (isLoading) return loader;

  return (
    <section className="mb-4 lg:mb-16">
      <h2 className="w-2/3 py-3 pl-4 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        {title}
      </h2>
      <SliderList data={data} tvMovieValue={tvMovieValue} />;
    </section>
  );
};

export default SliderContainer;
