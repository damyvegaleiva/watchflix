import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FormContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/search/:movieTitle" element={<HomeContainer />} />
          <Route path="/movie/:movieId" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
