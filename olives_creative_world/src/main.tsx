import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Crotchet from "./pages/Crotchet";
import DigitalArt from "./pages/DigitalArt";
import Embroidery from "./pages/Embroidery";
import Photography from "./pages/Photography";
import PhysicalArt from "./pages/PhysicalArt";
import STEM from "./pages/STEM";
import Teaching from "./pages/Teaching";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/crotchet" element={<Crotchet />} />
      <Route path="/digital-art" element={<DigitalArt />} />
      <Route path="/embroidery" element={<Embroidery />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/physical-art" element={<PhysicalArt />} />
      <Route path="/stem" element={<STEM />} />
      <Route path="/teaching" element={<Teaching />} />
    </Routes>
  </BrowserRouter>,
);
