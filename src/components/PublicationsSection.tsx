
import React from "react";
import { FileText } from "lucide-react";

const publications = [
  "Congressos Nacionais: Autor de cinco artigos no 33º Congresso da ABES, artigos na VII e VIII COBESA e publicações na Associação Brasileira de Internet das Coisas (ABINC).",
  "Simpósios Internacionais: Autor de dois artigos no 21º Simpósio Luso-Brasileiro de Engenharia Sanitária e Ambiental (SILUBESA).",
  "Palestras: Apresentação de webinars no SENAI CIMATEC e FIEB sobre \"Tecnologias da Transformação Digital no Saneamento\".",
];

const PublicationsSection = () => (
  <section className="mt-8 mb-6 max-w-3xl mx-auto">
    <h3 className="text-xl font-bold text-blue-900 mb-5 flex items-center gap-2">
      <FileText className="text-blue-600" /> Publicações e Apresentações
    </h3>
    <ul className="grid gap-3">
      {publications.map((pub, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded p-3 shadow transition-colors"
        >
          <FileText size={18} className="mt-1 text-blue-400" />
          <span className="text-blue-800">{pub}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default PublicationsSection;
