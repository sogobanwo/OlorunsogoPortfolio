import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
