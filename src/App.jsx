import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import DetailContainer from "./components/DetailContainer/DetailContainer";
import TvMoviesListContainer from "./components/TvMoviesListContainer/TvMoviesListContainer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route
              path="/search/:optionId/:id"
              element={<TvMoviesListContainer />}
            />
            <Route path="/movie/:id" element={<DetailContainer />} />
            <Route path="/tv/:id" element={<DetailContainer />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
