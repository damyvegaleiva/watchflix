import { getModifiedData } from "../../utils/APIFunctions";
import TrendingList from "../SliderList/SliderList";

const RecommendationsContainer = ({ recommendations }) => {
  const related = getModifiedData(recommendations);

  return (
    <div className="w-3/5 m-auto">
      <h2 className="w-full py-1 pl-4 mb-5 text-sm italic tracking-widest text-left text-white rounded-sm lg:text-xl bg-gradient-to-r from-red-600">
        YOU MAY ALSO LIKE
      </h2>
      <TrendingList
        data={related}
        tvMovieValue={related[0].media_type}
        difStyle={"lg:h-48 h-28 md:h-32"}
      />
    </div>
  );
};

export default RecommendationsContainer;
