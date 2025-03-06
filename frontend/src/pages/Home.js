import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bem-vindo ao Sistema de Certificados</h1>
      <Link to="/certificados" className="p-2 bg-blue-500 text-white rounded mt-4 inline-block">
        Gerar Certificados
      </Link>
      <Link to="/listar-certificados" className="p-2 bg-green-500 text-white rounded mt-4 inline-block ml-4">
        Listar Certificados
      </Link>
    </div>
  );
}

export default Home;
