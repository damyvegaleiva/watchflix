import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer";
import MoviesListContainer from "./components/MoviesListContainer/MoviesListContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search/:movieTitle" element={<MoviesListContainer />} />
          <Route path="/movie/:movieId" element={<MovieDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
