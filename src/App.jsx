import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import TvMoviesListContainer from "./components/SearchResults/TvMoviesListContainer/TvMoviesListContainer";
import DetailContainer from "./components/Detail/DetailContainer/DetailContainer";

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
