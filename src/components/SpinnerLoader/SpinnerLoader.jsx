import "./SpinnerLoader.css";

const SpinnerLoader = () => {
  return (
    <div className="flex justify-center lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoader;
