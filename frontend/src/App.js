import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Certificados from './pages/Certificados';
import ListarCertificados from './pages/ListarCertificados';
import Participantes from './pages/Participantes';
import Treinamentos from './pages/Treinamentos';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/listar-certificados" element={<ListarCertificados />} />
        <Route path="/participantes" element={<Participantes />} />
        <Route path="/treinamentos" element={<Treinamentos />} />
      </Routes>
    </Router>
  );
}

export default App;