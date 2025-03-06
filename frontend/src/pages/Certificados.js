import React, { useState, useEffect } from "react";
import { api } from "../services/api";

export default function Certificados() {
  const [participantes, setParticipantes] = useState([]);
  const [treinamentos, setTreinamentos] = useState([]);
  const [participanteId, setParticipanteId] = useState("");
  const [treinamentoId, setTreinamentoId] = useState("");

  useEffect(() => {
    api.get("participantes/").then((res) => setParticipantes(res.data));
    api.get("treinamentos/").then((res) => setTreinamentos(res.data));
  }, []);

  const gerarCertificado = async () => {
    await api.post("certificados/", {
      participante: participanteId,
      treinamento: treinamentoId,
    });
    alert("Certificado gerado!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Gerar Certificado</h1>
      <select className="p-2 border mt-4" onChange={(e) => setParticipanteId(e.target.value)}>
        <option value="">Selecione um participante</option>
        {participantes.map((p) => (
          <option key={p.id} value={p.id}>{p.nome}</option>
        ))}
      </select>

      <select className="p-2 border mt-4" onChange={(e) => setTreinamentoId(e.target.value)}>
        <option value="">Selecione um treinamento</option>
        {treinamentos.map((t) => (
          <option key={t.id} value={t.id}>{t.titulo}</option>
        ))}
      </select>

      <button onClick={gerarCertificado} className="p-2 bg-green-500 text-white rounded mt-4">
        Gerar
      </button>
    </div>
  );
}
