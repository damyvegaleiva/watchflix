import HeaderImage from "../../components/Header/HeaderImage/HeaderImage";
import HeaderFormContainer from "../../components/Header/HeaderFormContainer/HeaderFormContainer";

const HeaderContainer = () => {
  return (
    <header className="mb-16 md:mb-28">
      <HeaderImage />
      <HeaderFormContainer />
    </header>
  );
};

export default HeaderContainer;
