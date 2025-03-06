import React, { useState, useEffect } from "react";
import { api } from "../services/api";

export default function Treinamentos() {
  const [treinamentos, setTreinamentos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {
    api.get("treinamentos/").then((res) => setTreinamentos(res.data));
  }, []);

  const adicionarTreinamento = async () => {
    try {
      const response = await api.post("treinamentos/", { titulo, carga_horaria: cargaHoraria, conteudo });
      setTreinamentos([...treinamentos, response.data]);
      setTitulo("");
      setCargaHoraria("");
      setConteudo("");
      alert("Treinamento adicionado!");
    } catch (error) {
      console.error("Erro ao adicionar treinamento:", error);
      alert("Erro ao adicionar treinamento. Verifique os dados e tente novamente.");
    }
  };

  const excluirTreinamento = async (id) => {
    try {
      await api.delete(`treinamentos/${id}/`);
      setTreinamentos(treinamentos.filter(treinamento => treinamento.id !== id));
      alert("Treinamento excluído!");
    } catch (error) {
      console.error("Erro ao excluir treinamento:", error);
      alert("Erro ao excluir treinamento. Tente novamente.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Treinamentos</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="p-2 border mr-2"
        />
        <input
          type="number"
          placeholder="Carga Horária"
          value={cargaHoraria}
          onChange={(e) => setCargaHoraria(e.target.value)}
          className="p-2 border mr-2"
        />
        <textarea
          placeholder="Conteúdo"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          className="p-2 border mr-2"
        />
        <button onClick={adicionarTreinamento} className="p-2 bg-blue-500 text-white rounded">
          Adicionar
        </button>
      </div>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">Título</th>
            <th className="py-2">Carga Horária</th>
            <th className="py-2">Conteúdo</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {treinamentos.map((treinamento) => (
            <tr key={treinamento.id}>
              <td className="border px-4 py-2">{treinamento.titulo}</td>
              <td className="border px-4 py-2">{treinamento.carga_horaria}</td>
              <td className="border px-4 py-2">{treinamento.conteudo}</td>
              <td className="border px-4 py-2">
                <button onClick={() => excluirTreinamento(treinamento.id)} className="bg-red-500 text-white px-4 py-2 rounded">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
