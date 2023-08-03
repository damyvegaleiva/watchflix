import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

import FormRegister from "../../components/LoginRegister/FormRegister/FormRegister";

const FormRegisterContainer = () => {
  /// VARIABLES

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    verifyPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { register, validate, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const passwordRef = useRef();
  const verifyPasswordRef = useRef();

  /// FUNCTIONS

  /// CHECK IF USER LOGGED IN AND REDIRECTS TO HOME

  if (user) return <Navigate to={"/home"} />;

  /// HANDLE INPUT ON CHANGE
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  /// CREATE NEW ACCOUNT
  const handleRegister = async (e) => {
    e.preventDefault();
    const err = validate(userForm);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      const res = await register(userForm.email, userForm.password);

      if (res === "auth/email-already-in-use") {
        return setErrors({ email: "Account already exists with this email." });
      }

      setIsSuccessful(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <FormRegister
      userForm={userForm}
      passwordRef={passwordRef}
      verifyPasswordRef={verifyPasswordRef}
      handleChange={handleChange}
      handleRegister={handleRegister}
      errors={errors}
      isSuccessful={isSuccessful}
    />
  );
};

export default FormRegisterContainer;
