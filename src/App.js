import { Routes, Route} from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home";
import Photographie from "./pages/Photographie";
import Video from "./pages/Video";
import Immobilier from "./pages/Immobilier";
import Contact from "./pages/Contact";
import data from "./data";

function App() {

  const  {archi, nature, shooting, montagne, videos, immobilier, chill, lac} = data;

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/photographie" element={<Photographie archi={archi} nature={nature} montagne={montagne} shooting={shooting} chill={chill} lac={lac} />}/>
        <Route exact path="/video" element={<Video videos={videos}/>}/>
        <Route exact path="/immobilier" element={<Immobilier immobilier={immobilier}/>}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
