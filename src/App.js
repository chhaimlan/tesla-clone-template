import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Models from "./components/Models";
import HomeModel from "./components/HomeModel";
import HomeModel3 from "./components/HomeModel3";
import HomeModelx from "./components/HomeModelx";
import Modely from "./components/Modely";
import Solar from "./components/Solar";
import SolarPanel from "./components/SolarPanel";

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/models" element={<HomeModel />} />
          </Routes>
          <Routes>
            <Route path="/model3" element={<HomeModel3 />} />
          </Routes>
          <Routes>
            <Route path="/modelx" element={<HomeModelx />} />
          </Routes>
          <Routes>
            <Route path="/modely" element={<Modely />} />
          </Routes>
          <Routes>
            <Route path="/solar" element={<Solar />} />
          </Routes>
          <Routes>
            <Route path="/solarpanels" element={<SolarPanel />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
