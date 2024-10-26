import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Alternatif from "./pages/Alternatif";
import Kriteria from "./pages/Kriteria";
import Pembobotan from "./pages/Pembobotan";
import Penilaian from "./pages/Penilaian";
import Perhitungan from "./pages/Perhitungan";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pt-16">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alternatif" element={<Alternatif />} />
          <Route path="/kriteria" element={<Kriteria />} />
          <Route path="/pembobotan" element={<Pembobotan />} />
          <Route path="/penilaian" element={<Penilaian />} />
          <Route path="/perhitungan" element={<Perhitungan />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
