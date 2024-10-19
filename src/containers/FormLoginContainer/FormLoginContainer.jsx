import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import FormLogin from "../../components/LoginRegister/FormLogin";

const FormLoginContainer = () => {
  /// VARIABLES
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { login, loginWithGoogle, user } = useContext(AuthContext);
  const passwordRef = useRef();
  const navigate = useNavigate();

  /// FUNCTIONS

  /// CHECK IF USER LOGGED IN AND REDIRECTS TO HOME
  if (user) return <Navigate to={"/home"} />;

  /// HANDLE INPUT ON CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  /// VERIFY LOGIN USER/PASSWORD
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(userLogin.email, userLogin.password);

    if (res === "auth/invalid-login-credentials") {
      return setErrors({
        password: "That email and password combination is not valid.",
      });
    }

    // --------------------------------------BACKUP CODE TO BE TESTED ---------------------------------
    // if (res === "auth/wrong-password") {
    //   return setErrors({ password: "Wrong password." });
    // }
    // if (res === "auth/user-not-found") {
    //   return setErrors({ email: "Account not found with this email." });
    // }
    // if (res === "auth/too-many-requests") {
    //   return setErrors({ requests: "Too many attempts, try again later." });
    // }

    setIsSuccessful(true);
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  ///HANDLE LOG IN WITH GOOGLE
  const handleGoogle = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
    setIsSuccessful(true);
    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  return (
    <FormLogin
      isSuccessful={isSuccessful}
      handleGoogle={handleGoogle}
      handleChange={handleChange}
      handleLogin={handleLogin}
      passwordRef={passwordRef}
      errors={errors}
      userLogin={userLogin}
    />
  );
};

export default FormLoginContainer;
