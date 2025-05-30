import HeaderImage from "../../components/Header/HeaderImage";
import HeaderFormContainer from "../../components/Header/HeaderFormContainer";

const HeaderContainer = () => {
  return (
    <header className="mb-16 md:mb-28 bg-[url('../images/login-bg.jpg')] bg-cover relative z-50 before:content-[''] before:w-full before:h-full before:-z-[1] before:absolute before:bg-black/75 pb-5">
      <HeaderImage />
      <HeaderFormContainer />
    </header>
  );
};

export default HeaderContainer;
