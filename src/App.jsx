import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import DetailContainer from "./components/DetailContainer/DetailContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import TvMoviesListContainer from "./components/TvMoviesListContainer/TvMoviesListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/search/:movieTitle"
            element={<TvMoviesListContainer />}
          />
          <Route path="/movie/:id" element={<DetailContainer />} />
          <Route path="/tv/:id" element={<DetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
