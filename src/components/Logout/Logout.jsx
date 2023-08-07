import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Logout = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("-left-full");
  const [isClicked, setIsClicked] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleShowHideNavBar = () => {
    setIsClicked((prev) => !prev);

    if (isActive === "-left-full") return setIsActive("left-0");

    setIsActive("-left-full");
  };
  return (
    <nav className="relative flex flex-row items-center justify-between gap-5 px-8 py-2 border-b border-red-600 bg-black-600">
      <Link to={"/home"}>
        <img
          src={"./images/preview.png"}
          alt="Watchflix logo"
          className="w-24 "
        />
      </Link>
      <div
        className={`bg-black absolute transition:left lg:hidden duration-500 py-10 ease-in-out flex flex-col items-center justify-center w-full h-[500px] gap-5 top-32 ${isActive} md:flex`}
      >
        <h2 className="text-white">
          Welcome &ldquo;{user.displayName || user.email}&ldquo;
        </h2>
        <button
          className="w-1/3 px-3 py-1 text-sm text-white border rounded-md hover:bg-white hover:text-red-600"
          onClick={handleLogout}
        >
          SIGN OUT
        </button>
      </div>

      {/* /////DESKTOP/////////////////////////////// */}
      <div className="flex-col items-end justify-center hidden gap-2 lg:flex">
        <h2 className="text-white">
          Welcome &ldquo;{user.displayName || user.email}&ldquo;
        </h2>
        <button
          className="px-3 py-1 text-sm text-white border rounded-md hover:bg-white hover:text-red-600"
          onClick={handleLogout}
        >
          SIGN OUT
        </button>
      </div>
      {isClicked ? (
        <RxCross1
          className="w-10 h-10 text-white lg:hidden"
          onClick={handleShowHideNavBar}
        />
      ) : (
        <RxHamburgerMenu
          className="w-10 h-10 text-white lg:hidden"
          onClick={handleShowHideNavBar}
        />
      )}
    </nav>
  );
};

export default Logout;
