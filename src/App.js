import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
