
import React from "react";
import { Award } from "lucide-react";

const awards = [
  "12/2025 - Projeto AguaGuard. Finalista entre os 7 melhores trabalhos de IA e Desafios Socioambientais da Amazônia, do I2A2 - Institut d'Intelligence Artificielle Appliquée.",
  "10/2022 - Prêmio de 3º lugar no congresso SUCESSO/Ba com o projeto SMART WATER – Uma Solução Integrada que implementa tecnologias inovadoras da industria 4.0",
  "05/2022 - Prêmio de 1º lugar Hackathon Semana de Conhecimento Embasa",
  "05/2004 - Prêmio de 1º lugar Fórum das Unimed Norte/Nordeste e Centro Oeste"
];

const AwardsSection = () => (
  <section className="max-w-4xl mx-auto mt-10 mb-6">
    <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
      <Award className="text-green-700" /> Premiações e Reconhecimentos
    </h2>
    <ul className="grid gap-2 md:grid-cols-2">
      {awards.map((a, idx) => (
        <li key={idx} className="flex items-center gap-2 bg-green-50 border border-green-100 rounded p-2 shadow-sm">
          <Award size={18} className="text-green-600" />
          <span className="text-green-800">{a}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default AwardsSection;
