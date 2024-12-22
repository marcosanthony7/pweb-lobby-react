import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Comunidades from "./components/Comunidades";
import DetalhesComunidades from "./components/DetalhesComunidades";
import Grupos from "./components/Grupos";
import DetalhesGrupos from "./components/DetalhesGrupos";
import Contato from "./components/Contato";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidades" element={<Comunidades />} />
        <Route path="/detalhes-comunidades" element={<DetalhesComunidades />} />
        <Route path="/grupos" element={<Grupos />} />
        <Route path="/detalhes-grupos" element={<DetalhesGrupos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
