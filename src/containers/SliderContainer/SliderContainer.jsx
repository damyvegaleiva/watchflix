import useFetch from "../../hooks/useFetch";
import { DataFormatAdapter } from "../../adapters/DataFormatAdapter";
import SliderList from "../../components/Slider/SliderList/SliderList";

const SliderContainer = ({ title, value, tvMovieValue, URL_VALUE, loader }) => {
  const { data, isLoading } = useFetch(
    URL_VALUE(tvMovieValue, value),
    DataFormatAdapter
  );

  const hasMovies = data.length > 1;

  if (isLoading) return loader;

  return hasMovies ? (
    <section className="mb-4 lg:mb-16">
      <h2 className="w-2/3 py-3 pl-4 mb-5 text-sm italic tracking-widest text-left text-white rounded-sm md:text-lg lg:text-3xl bg-gradient-to-r from-red-600">
        {title}
      </h2>
      <SliderList data={data} tvMovieValue={tvMovieValue} />;
    </section>
  ) : (
    <p className="text-center text-white">No results found.</p>
  );
};

export default SliderContainer;
