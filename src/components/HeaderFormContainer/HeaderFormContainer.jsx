import { useNavigate } from "react-router-dom";
import HeaderForm from "../HeaderForm/HeaderForm";
import { useState } from "react";

const HeaderFormContainer = () => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState([]);
  const navigate = useNavigate();

  const handleCheck = (e) => {
    if (option.find((option) => option === e.target.name))
      return setOption(option.filter((option) => option !== e.target.name));

    setOption((prev) => [...prev, e.target.name]);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input && option.length > 0) {
      navigate(`/search/${option.length > 1 ? "multi" : option[0]}/${input}`);
      setInput("");
      return;
    }

    navigate("/");
  };

  return (
    <HeaderForm
      handleCheck={handleCheck}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      input={input}
    />
  );
};

export default HeaderFormContainer;
