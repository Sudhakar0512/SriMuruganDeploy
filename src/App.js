import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Gallery from "./component/Gallery";
import Homepage from "./pages/Homepage";
import About from "./component/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
