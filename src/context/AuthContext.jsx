import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  ///CHECK IF THERE IS A USER LOGGED IN AND SETS THE USER STATE
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        return;
      }
    });

    return subscribed();
  }, []);

  ///FUNCTION TO REGISTER AN ACCOUNT WITH EMAIL & PASSWORD
  const register = async (emailRegister, passwordRegister) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        emailRegister,
        passwordRegister
      );

      setTimeout(() => {
        setUser(response.user);
      }, 1500);
    } catch (error) {
      return error.code;
    }
  };

  // FUNCTION FOR LOGIN USING GOOGLE AUTHENTICATION
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, responseGoogle);

    setTimeout(() => {
      setUser(response.user);
    }, 1500);
  };

  //LOGIN FUNCTION THAT USES THE USERNAME AND PASSWORDS PROVIDED BY THE FORM INPUT FIELD
  const login = async (emailRegister, passwordRegister) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        emailRegister,
        passwordRegister
      );

      setTimeout(() => {
        setUser(response.user);
      }, 1500);
    } catch (error) {
      return error.code;
    }
  };

  //LOGOUT FUNCTION TO LOG OUT CURRENTLY SIGNED IN USER FROM APP
  const logout = async () => {
    const response = await signOut(auth);
    setUser(response);
  };

  //FORM VALIDATION FUNCTION FOR CREATING NEW ACCOUNT
  const validate = (form) => {
    const errors = {};
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!regexEmail.test(form.email)) {
      errors.email = "Email contains a format not valid.";
    }

    if (form.password.length < 6) {
      errors.password = "Password should be at least 6 characters.";
    } else if (form.password !== form.verifyPassword) {
      errors.password = "Password doesn't match.";
    }

    if (form.verifyPassword.length < 6) {
      errors.verifyPassword = "Password should be at least 6 characters.";
    } else if (form.password !== form.verifyPassword) {
      errors.verifyPassword = "Password doesn't match.";
    }

    return errors;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        validate,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
