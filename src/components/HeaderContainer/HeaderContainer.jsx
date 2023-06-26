import HeaderImage from "../HeaderImage/HeaderImage";
import HeaderFormContainer from "../HeaderFormContainer/HeaderFormContainer";

const HeaderContainer = () => {
  return (
    <header className="mb-16 md:mb-28">
      <HeaderImage />
      <HeaderFormContainer />
    </header>
  );
};

export default HeaderContainer;
