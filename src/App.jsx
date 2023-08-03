import "./assets/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthContext } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import LoginRegisterContainer from "./containers/LoginRegisterContainer/LoginRegisterContainer";
import FormLoginContainer from "./containers/FormLoginContainer/FormLoginContainer";
import FormRegisterContainer from "./containers/FormRegisterContainer/FormRegisterContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import SearchResultsContainer from "./containers/SearchResultsContainer/SearchResultsContainer";
import DetailContainer from "./containers/DetailContainer/DetailContainer";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { useContext } from "react";
import Logout from "./components/Logout/Logout";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          {user ? (
            <>
              {" "}
              <Logout /> <HeaderContainer />{" "}
            </>
          ) : null}
          <Routes>
            <Route
              path="/"
              element={
                <LoginRegisterContainer
                  FormContainer={<FormLoginContainer />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <LoginRegisterContainer
                  FormContainer={<FormRegisterContainer />}
                />
              }
            />
            <Route element={<ProtectedRoutes />}>
              <Route path={"/home"} element={<HomeContainer />} />
              <Route
                path="/search/:optionId/:id"
                element={<SearchResultsContainer />}
              />
              <Route path="/movie/:id" element={<DetailContainer />} />
              <Route path="/tv/:id" element={<DetailContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
