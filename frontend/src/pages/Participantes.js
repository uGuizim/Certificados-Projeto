import React, { useState, useEffect } from "react";
import { api } from "../services/api";

export default function Participantes() {
  const [participantes, setParticipantes] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    api.get("participantes/").then((res) => setParticipantes(res.data));
  }, []);

  const adicionarParticipante = async () => {
    const response = await api.post("participantes/", { nome, cpf });
    setParticipantes([...participantes, response.data]);
    setNome("");
    setCpf("");
    alert("Participante adicionado!");
  };

  const excluirParticipante = async (id) => {
    await api.delete(`participantes/${id}/`);
    setParticipantes(participantes.filter(participante => participante.id !== id));
    alert("Participante excluído!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 border mr-2"
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="p-2 border mr-2"
        />
        <button onClick={adicionarParticipante} className="p-2 bg-blue-500 text-white rounded">
          Adicionar
        </button>
      </div>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2">Nome</th>
            <th className="py-2">CPF</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {participantes.map((participante) => (
            <tr key={participante.id}>
              <td className="border px-4 py-2">{participante.nome}</td>
              <td className="border px-4 py-2">{participante.cpf}</td>
              <td className="border px-4 py-2">
                <button onClick={() => excluirParticipante(participante.id)} className="bg-red-500 text-white px-4 py-2 rounded">
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
