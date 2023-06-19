import { TRENDING_URL } from "../../config/config";
import useFetch from "../../hooks/useFetch";
import TrendingList from "../TrendingList/TrendingList";

const TrendingContainer = ({ title, trendingValue, loader }) => {
  const { useGetMovies } = useFetch();
  const { data: movies, isLoading } = useGetMovies(TRENDING_URL(trendingValue));

  if (isLoading) return loader;

  return (
    <section>
      <h2 className="w-2/3 py-3 pl-4 mt-24 mb-5 italic tracking-widest text-left text-white rounded-sm lg:text-3xl bg-gradient-to-r from-red-600">
        TRENDING {title}
      </h2>
      <TrendingList data={movies} trendingValue={trendingValue} />;
    </section>
  );
};

export default TrendingContainer;
