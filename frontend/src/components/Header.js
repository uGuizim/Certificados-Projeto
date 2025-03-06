import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/certificados" className="mr-4">Gerar Certificados</Link>
          <Link to="/listar-certificados" className="mr-4">Listar Certificados</Link>
          <Link to="/participantes" className="mr-4">Participantes</Link>
          <Link to="/treinamentos" className="mr-4">Treinamentos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;