
import React from "react";
import { FileText } from "lucide-react";

const publications = [
  "Idealizei cinco artigos científicos no 33º Congresso Brasileiro de Engenharia Sanitária e Ambiental (ABES).",
  "Publiquei artigos científicos em congressos da Associação Brasileira de Internet das Coisas (ABINC), no VII e VIII Congresso Baiano de Engenharia Sanitária e Ambiental, e no 34º Encontro Técnico da FENASAN (Feira Nacional de Saneamento e Meio Ambiente).",
  "Apresentei e idealizei dois artigos científicos no 21º Simpósio Luso-Brasileiro de Engenharia Sanitária e Ambiental (SILUBESA).",
  "Realizei uma apresentação de webinar no SENAI e SENAI CIMATEC sobre o tema 'Aplicabilidade e Benefícios das Tecnologias da Transformação Digital no Saneamento'.",
  "Mediei e palestrei na 1ª e 2ª Semana do Conhecimento com o painel 'Tecnologias Habilitadoras na Transformação Digital: Construção de Novos Processos no Saneamento'.",
  "Publiquei artigos acadêmicos no acervo digital da EMBASA.",
  "Apresentei o artigo 'Otimizando o ORACLE em Plataforma LINUX' no III Fórum de Tecnologia das Unimed Norte/Nordeste.",
  "Participei de congressos e workshops sobre temas tecnológicos e inovação.",
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
