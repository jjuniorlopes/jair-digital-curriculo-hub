
import React from "react";
import { Cloud, Database, BrainCircuit, Droplets, CheckCircle2, HeartHandshake } from "lucide-react";

const areas = [
  {
    title: "Internet das Coisas (IoT)",
    icon: <Cloud className="text-indigo-600" size={28} />,
    desc: "Projetos de sensoriamento inteligente, automação e IoT conectando dispositivos ao mundo digital."
  },
  {
    title: "Engenharia de Dados",
    icon: <Database className="text-blue-700" size={28} />,
    desc: "Tratamento, integração e análise de dados utilizando bancos Oracle, MySQL, PostgreSQL e DB2."
  },
  {
    title: "Inteligência Artificial",
    icon: <BrainCircuit className="text-purple-700" size={28} />,
    desc: "Aplicação de IA para inovação, automação e insights valiosos em projetos digitais."
  },
  {
    title: "Saneamento Básico & Ambiental",
    icon: <Droplets className="text-teal-700" size={28} />,
    desc: "Projetos inovadores para sustentabilidade em saneamento e meio ambiente."
  },
  {
    title: "Governança de Dados",
    icon: <CheckCircle2 className="text-green-700" size={28} />,
    desc: "Implantação de processos de governança e proteção de dados em gestão pública e privada."
  },
  {
    title: "Acessibilidade",
    icon: <HeartHandshake className="text-cyan-700" size={28} />,
    desc: "Projetos inovadores para promover inclusão digital e autonomia em ambientes urbanos e institucionais."
  }
];

const AreaCardsSection = () => (
  <section className="max-w-6xl mx-auto mt-10 mb-5">
    <h2 className="text-xl font-bold text-green-900 mb-6">Áreas de Atuação</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <div
          key={area.title}
          className="bg-green-50 border border-green-100 rounded-xl p-5 flex flex-col items-start shadow hover:scale-105 transition-transform min-h-36"
        >
          <div className="mb-2">{area.icon}</div>
          <h4 className="font-bold text-green-900 mb-1">{area.title}</h4>
          <p className="text-green-800 text-sm">{area.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AreaCardsSection;
