import React, { useState, useEffect } from "react";
import { api } from "../services/api";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ListarCertificados() {
  const [certificados, setCertificados] = useState([]);

  useEffect(() => {
    api.get("certificados/").then((res) => setCertificados(res.data));
  }, []);

  const excluirCertificado = async (id) => {
    await api.delete(`certificados/${id}/`);
    setCertificados(certificados.filter(certificado => certificado.id !== id));
    alert("Certificado excluído!");
  };

  const gerarPDF = (certificado) => {
    const doc = new jsPDF();

    // Adicionar título
    doc.setFontSize(22);
    doc.text("CERTIFICADO", 105, 60, null, null, 'center');

    // Adicionar texto do certificado
    doc.setFontSize(12);
    const text = `Certificamos que o participante ${certificado.participante_nome}, portador do RG:_________
participou do Curso: ${certificado.treinamento_titulo}, no período 
de __________ a __________ com carga horária de ${certificado.carga_horaria} horas.`;
    doc.text(text, 20, 80);

    // Adicionar local e data
    doc.text(`Cidade ______________, data __________`, 20, 120);

    // Adicionar assinaturas
    doc.text("____________________________", 20, 150);
    doc.text("Nome", 20, 155);
    doc.text("Número do registro", 20, 165);

    doc.text("____________________________", 140, 150);
    doc.text("Nome", 140, 155);
    doc.text("Concluinte", 140, 160);

    // Adicionar rodapé
    doc.text("Rua:____________________ N° ____ Quadra. _____, Lotes _____. Bairro: __________________", 20, 190);

    doc.save(`certificado_${certificado.participante_nome}_${certificado.treinamento_titulo}.pdf`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Lista de Certificados</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Participante</th>
            <th className="py-2">Treinamento</th>
            <th className="py-2">Carga Horária</th>
            <th className="py-2">Data de Emissão</th>
            <th className="py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {certificados.map((certificado) => (
            <tr key={certificado.id}>
              <td className="border px-4 py-2">{certificado.participante_nome}</td>
              <td className="border px-4 py-2">{certificado.treinamento_titulo}</td>
              <td className="border px-4 py-2">{certificado.carga_horaria}</td>
              <td className="border px-4 py-2">{new Date(certificado.data_emissao).toLocaleDateString()}</td>
              <td className="border px-4 py-2">
                <button onClick={() => excluirCertificado(certificado.id)} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
                  Excluir
                </button>
                <button onClick={() => gerarPDF(certificado)} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}