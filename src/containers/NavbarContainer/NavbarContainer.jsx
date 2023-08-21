import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavbarContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState("-left-[1000px]");
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleShowHideNavBar = () => {
    setIsClicked((prev) => !prev);

    if (isActive === "-left-[1000px]") return setIsActive("left-0");

    setIsActive("-left-[1000px]");
  };

  return (
    <nav className="sticky top-0 z-10 flex flex-row items-center justify-between gap-5 px-8 py-2 bg-black border-b border-red-600 bg-black-600">
      <Link to={"/home"}>
        <img
          src={"./images/preview.png"}
          alt="Watchflix logo"
          className="w-16"
        />
      </Link>

      {/* -------------------------------MOBILE */}

      <div
        className={`bg-black absolute transition:left md:hidden duration-500 py-10 text-center ease-in-out flex flex-col items-center justify-center w-full h-[500px] gap-5 top-[81px] ${isActive} md:flex`}
      >
        <h2 className="text-white ">
          Welcome &ldquo;{user.displayName || user.email}&ldquo;
        </h2>

        <Button title={"SIGN OUT"} handleSubmit={handleLogout} />
      </div>
      {isClicked ? (
        <RxCross1
          className="w-10 h-10 text-white md:hidden"
          onClick={handleShowHideNavBar}
        />
      ) : (
        <RxHamburgerMenu
          className="w-10 h-10 text-white md:hidden"
          onClick={handleShowHideNavBar}
        />
      )}

      {/* -------------------------------DESKTOP */}

      <div className="items-end justify-center hidden gap-2 md:flex-col md:flex">
        <h2 className="text-white ">
          Welcome &ldquo;{user.displayName || user.email}&ldquo;
        </h2>

        <Button title={"SIGN OUT"} handleSubmit={handleLogout} />
      </div>
    </nav>
  );
};

export default NavbarContainer;
