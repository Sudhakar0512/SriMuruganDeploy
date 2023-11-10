import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Gallery from "./component/Gallery";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <Router basename="/SriMuruganDeploy">
      <Routes>
        <Route exact path="/SriMuruganDeploy" element={<SharedLayout />}>
          <Route index element={<Homepage />} />

          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
