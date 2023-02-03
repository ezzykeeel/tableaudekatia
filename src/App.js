import "./styles.scss";
import "./fonts/aAbstractGroovy.ttf";
import { Routes, Route } from "react-router-dom";
import Header from "./features/header/Header";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Portafolio from "./features/portafolio/Portafolio";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portafolio" element={<Portafolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
