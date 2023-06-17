import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../HeaderImage/HeaderImage";
import HeaderForm from "../HeaderForm/HeaderForm";

const HeaderContainer = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      navigate(`/search/${input}`);
      setInput("");
      return;
    }

    navigate("/");
  };

  return (
    <header className="mb-32 ">
      <HeaderImage />
      <HeaderForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        input={input}
      />
    </header>
  );
};

export default HeaderContainer;
