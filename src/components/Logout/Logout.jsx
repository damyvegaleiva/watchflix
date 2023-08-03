import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex flex-row items-center justify-between gap-5 px-10 py-2 border-b border-red-600 bg-black-600">
      <img
        src={"./images/watchflix.png"}
        alt="Watchflix logo"
        className="w-28"
      />

      <div className="flex flex-col items-end justify-center gap-2">
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
    </nav>
  );
};

export default Logout;
