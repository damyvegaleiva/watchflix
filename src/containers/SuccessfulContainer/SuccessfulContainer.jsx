import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";

const SuccessfulContainer = ({ text, title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] lg:h-1/5">
      <h1 className="text-white lg:text-lg">{title}</h1>
      <p className="my-10 text-sm text-white">{text}</p>
      <SpinnerLoader />
    </div>
  );
};

export default SuccessfulContainer;
