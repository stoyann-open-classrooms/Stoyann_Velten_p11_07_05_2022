import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Lodging from "./Pages/Lodging";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:slug" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
