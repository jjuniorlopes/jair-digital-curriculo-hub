
import React from "react";
import { Lightbulb, Users, BarChart4, Database, Cloud, Workflow, Award, BrainCircuit, Layers3, Clock4, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

type Skill = {
  label: string;
  icon: React.ReactNode;
  description: string;
};

const softSkills: Skill[] = [
  { label: "Comunicação", icon: <Lightbulb className="text-yellow-500" />, description: "Habilidade de transmitir ideias com clareza" },
  { label: "Liderança", icon: <Users className="text-cyan-600" />, description: "Gestão e motivação de equipes" },
  { label: "Autoconhecimento", icon: <BarChart4 className="text-emerald-600" />, description: "Capacidade de autoavaliação e desenvolvimento pessoal" },
  { label: "Gestão de Projetos", icon: <Database className="text-blue-600" />, description: "Planejamento, execução e liderança de projetos" },
  { label: "Mentalidade de Equipe", icon: <Workflow className="text-green-600" />, description: "Trabalho colaborativo e harmonia em grupo" },
  { label: "Vontade de Aprender", icon: <BookOpen className="text-orange-600" />, description: "Busca constante de atualização" },
  { label: "Gestão do Tempo", icon: <Clock4 className="text-pink-600" />, description: "Organização e disciplina no cumprimento de tarefas" }
];

const hardSkills: Skill[] = [
  { label: "Engenharia de Dados", icon: <Database className="text-blue-600" />, description: "Domínio em Oracle, MySQL, PostgreSQL e DB2" },
  { label: "Internet das Coisas (IoT)", icon: <Cloud className="text-indigo-600" />, description: "Sensoriamento inteligente e LPWAN" },
  { label: "Inteligência Artificial", icon: <BrainCircuit className="text-purple-600" />, description: "IA para análise e inovação de dados" },
  { label: "Projetos Inovadores", icon: <Award className="text-teal-600" />, description: "Experiência premiada em projetos" },
  { label: "ERP/BI", icon: <TrendingUp className="text-blue-600" />, description: "Integração e gestão de dados corporativos" },
  { label: "Modelagem BPM", icon: <Layers3 className="text-emerald-600" />, description: "Noções de modelagem de processos" }
];

const SkillButton = ({ skill }: { skill: Skill }) => {
  return (
    <Button variant="secondary" className="flex flex-col items-center justify-center min-w-32 min-h-20 gap-1 hover-scale text-emerald-900" title={skill.description}>
      <span className="text-2xl">{skill.icon}</span>
      <span className="text-xs font-semibold mt-1">{skill.label}</span>
    </Button>
  );
};

const SkillsSection = () => (
  <section className="max-w-4xl mx-auto mt-10 mb-6">
    <h2 className="text-xl font-bold text-emerald-900 mb-3">Habilidades</h2>
    <div className="grid gap-2 md:grid-cols-2">
      <div>
        <h3 className="text-emerald-700 font-semibold mb-2">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((s) => <SkillButton key={s.label} skill={s} />)}
        </div>
      </div>
      <div>
        <h3 className="text-blue-700 font-semibold mb-2">Hard Skills</h3>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map((s) => <SkillButton key={s.label} skill={s} />)}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
