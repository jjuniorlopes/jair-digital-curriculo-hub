
import React from "react";
import { Cloud, Database, BrainCircuit, Droplets, CheckCircle2, HeartHandshake, Lightbulb, Workflow } from "lucide-react";

const tealIcon = "text-[#1a7a7a]";
import { Card, CardContent } from "@/components/ui/card";

const areas = [
  {
    title: "Internet das Coisas (IoT)",
    icon: <Cloud className={tealIcon} size={28} />,
    desc: "Projetos de sensoriamento inteligente, automação e IoT conectando dispositivos ao mundo digital.",
    color: "border-indigo-200 hover:border-indigo-400"
  },
  {
    title: "Engenharia de Dados",
    icon: <Database className={tealIcon} size={28} />,
    desc: "Tratamento, integração e análise de dados utilizando bancos Oracle, MySQL, PostgreSQL e DB2.",
    color: "border-blue-200 hover:border-blue-400"
  },
  {
    title: "Inteligência Artificial",
    icon: <BrainCircuit className={tealIcon} size={28} />,
    desc: "Aplicação de IA para inovação, automação e insights valiosos em projetos digitais.",
    color: "border-purple-200 hover:border-purple-400"
  },
  {
    title: "Saneamento Básico & Ambiental",
    icon: <Droplets className={tealIcon} size={28} />,
    desc: "Projetos inovadores para sustentabilidade em saneamento e meio ambiente.",
    color: "border-teal-200 hover:border-teal-400"
  },
  {
    title: "Governança de Dados",
    icon: <CheckCircle2 className={tealIcon} size={28} />,
    desc: "Implantação de processos de governança digital e proteção de dados em gestão pública e privada.",
    color: "border-green-200 hover:border-green-400"
  },
  {
    title: "Acessibilidade",
    icon: <HeartHandshake className={tealIcon} size={28} />,
    desc: "Projetos inovadores para promover inclusão digital e autonomia em ambientes urbanos e institucionais.",
    color: "border-cyan-200 hover:border-cyan-400"
  },
  {
    title: "Gestão da Inovação (Design Thinking)",
    icon: <Lightbulb className={tealIcon} size={28} />,
    desc: "Projetos inovadores com uma abordagem centrada no ser humano para resolver problemas complexos e fomentar a inovação, focando nas necessidades reais dos usuários antes de propor soluções, com base na metodologia Design Thinking.",
    color: "border-amber-200 hover:border-amber-400"
  },
  {
    title: "Gestão Ágil",
    icon: <Workflow className={tealIcon} size={28} />,
    desc: "Projetos focados em metodologias ágeis com eficiência e entrega contínua, com o Scrum estruturado em ciclos fixos (Sprints) e papéis definidos, e o Kanban como método visual e flexível para gerenciar o fluxo contínuo de trabalho.",
    color: "border-rose-200 hover:border-rose-400"
  }
];

const AreaCardsSection = () => (
  <Card className="mb-8 shadow-lg border-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
    <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
      <h2 className="text-xl font-bold">Áreas de Atuação</h2>
    </div>
    <CardContent className="p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <div
            key={area.title}
            className={`group border rounded-lg p-5 bg-gradient-to-br from-white to-gray-50 flex flex-col items-start transition-all duration-400 hover:shadow-xl hover:-translate-y-1 ${area.color}`}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              {area.icon}
            </div>
            <h4 className="font-bold text-gray-800 mb-1 transition-colors duration-300 group-hover:text-[#1a7a7a]">{area.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AreaCardsSection;
