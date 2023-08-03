import { useNavigate } from "react-router-dom";

const HeaderImage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div
      className="py-5 my-10 hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <img
        className="mx-auto "
        src={"/images/watchflix.png"}
        alt="Logo of the website."
      />
      <p className="text-xs text-center text-white">Where the movies are</p>
    </div>
  );
};

export default HeaderImage;
