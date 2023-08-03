import SpinnerLoader from "../../components/Loader/SpinnerLoader/SpinnerLoader";

const SuccessfulContainer = ({ text, title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-1/5">
      <h1 className="text-lg text-white">{title}</h1>
      <p className="my-10 text-sm text-white">{text}</p>
      <SpinnerLoader className="h-50" />
    </div>
  );
};

export default SuccessfulContainer;
