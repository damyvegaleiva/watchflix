import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const FormEyeIcon = ({ value }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowPassword = (ref) => {
    setIsVisible((prev) => !prev);

    if (ref.current.type === "password") return (ref.current.type = "text");

    return (ref.current.type = "password");
  };

  return (
    <>
      {isVisible ? (
        <AiFillEyeInvisible
          onClick={() => handleShowPassword(value)}
          className="absolute text-black top-3.5 right-4 hover:cursor-pointer hover:bg-slate-400 hover:rounded-lg"
        />
      ) : (
        <AiFillEye
          onClick={() => handleShowPassword(value)}
          className="absolute text-black hover:rounded-lg top-3.5 right-4 hover:cursor-pointer hover:bg-slate-400"
        />
      )}
    </>
  );
};

export default FormEyeIcon;
