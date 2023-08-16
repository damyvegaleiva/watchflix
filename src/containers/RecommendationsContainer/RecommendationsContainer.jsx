import { DataFormatAdapter } from "../../adapters/DataFormatAdapter";
import SliderList from "../../components/Slider/SliderList";

const RecommendationsContainer = ({ recommendations }) => {
  const related = DataFormatAdapter(recommendations);

  if (related.length > 0)
    return (
      <div className="w-3/4 m-auto md:w-3/5">
        <h2 className="w-full py-1 pl-4 mb-5 text-sm italic tracking-widest text-left text-white rounded-sm lg:text-xl bg-gradient-to-r from-red-600">
          YOU MAY ALSO LIKE
        </h2>
        <SliderList
          data={related}
          tvMovieValue={related[0].media_type}
          difStyle={"h-24 sm:h-44 md:h-52 lg:h-56 xl:h-72"}
        />
      </div>
    );
};

export default RecommendationsContainer;
