import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Comunidades from "./components/Comunidades";
import DetalhesComunidades from "./components/DetalhesComunidades";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/detalhes-comunidades" element={<DetalhesComunidades />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
