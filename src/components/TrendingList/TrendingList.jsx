import ScrollContainer from "react-indiana-drag-scroll";
import TrendingItem from "../TrendingItem/TrendingItem";

const TrendingList = ({ data, trendingValue }) => {
  return (
    <ScrollContainer className="flex flex-row scroll-container">
      {data.map((movie) => (
        <TrendingItem key={movie.id} {...movie} trendingValue={trendingValue} />
      ))}
    </ScrollContainer>
  );
};

export default TrendingList;
