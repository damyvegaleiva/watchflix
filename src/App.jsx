import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeContainer from "./components/HomeContainer/HomeContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/movie/:movideId" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
