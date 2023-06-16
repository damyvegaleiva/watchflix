import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import MovieDetailContainer from "./components/MovieDetailContainer/MovieDetailContainer";
import FormContainer from "./components/FormContainer/FormContainer";
import MoviesListContainer from "./components/MoviesListContainer/MoviesListContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FormContainer />
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
