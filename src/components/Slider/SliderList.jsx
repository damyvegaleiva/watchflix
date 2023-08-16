import ScrollContainer from "react-indiana-drag-scroll";
import SliderItem from "./SliderItem";

const SliderList = ({ data, tvMovieValue, difStyle }) => {
  return (
    <ScrollContainer className="flex flex-row scroll-container">
      {data.map((movie) => (
        <SliderItem
          key={movie.id}
          {...movie}
          tvMovieValue={tvMovieValue}
          difStyle={difStyle}
        />
      ))}
    </ScrollContainer>
  );
};

export default SliderList;
