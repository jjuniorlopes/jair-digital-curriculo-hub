
import React, { useState } from "react";
import { Lightbulb, Users, BarChart4, Database, Cloud, Workflow, Award, BrainCircuit, Layers3, Clock4, BookOpen, TrendingUp, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies?: string[];
};

const hardSkills: Skill[] = [
  { name: "Engenharia de Dados", icon: <Database className="text-[#1a7a7a]" size={24} />, description: "Domínio em Oracle, MySQL, PostgreSQL e DB2", technologies: ["Oracle", "MySQL", "PostgreSQL", "DB2", "ETL"] },
  { name: "Internet das Coisas (IoT)", icon: <Cloud className="text-[#1a7a7a]" size={24} />, description: "Sensoriamento inteligente e LPWAN", technologies: ["LoRaWAN", "MQTT", "Sensores", "Arduino", "Raspberry Pi"] },
  { name: "Inteligência Artificial", icon: <BrainCircuit className="text-[#1a7a7a]" size={24} />, description: "IA para análise e inovação de dados", technologies: ["IA Generativa", "IA Preventiva", "Engenharia de Prompt", "Python", "NLP"] },
  { name: "Projetos Inovadores", icon: <Award className="text-[#1a7a7a]" size={24} />, description: "Experiência premiada em projetos", technologies: ["Smart Water", "EcoGás", "Acessibilidade Conectada", "IoT LPWAN"] },
  { name: "ERP/BI", icon: <TrendingUp className="text-[#1a7a7a]" size={24} />, description: "Integração e gestão de dados corporativos", technologies: ["Power BI", "Qlik Sense", "Grafana", "SQL", "ETL"] },
  { name: "Modelagem BPM", icon: <Layers3 className="text-[#1a7a7a]" size={24} />, description: "Noções de modelagem de processos", technologies: ["BPM", "BPMN", "Processos"] },
  { name: "Design Thinking", icon: <Lightbulb className="text-[#1a7a7a]" size={24} />, description: "Abordagem criativa para resolução de problemas centrada no usuário", technologies: ["Empatia", "Definição", "Ideação", "Prototipação", "Teste", "UX"] },
  { name: "Scrum & Kanban", icon: <Workflow className="text-[#1a7a7a]" size={24} />, description: "Metodologias ágeis para gestão e entrega de projetos", technologies: ["Scrum", "Kanban", "Sprints", "Backlog", "Jira"] }
];

const softSkills: Skill[] = [
  { name: "Comunicação", icon: <Lightbulb className="text-[#1a7a7a]" size={24} />, description: "Habilidade de transmitir ideias com clareza para diferentes audiências." },
  { name: "Liderança", icon: <Users className="text-[#1a7a7a]" size={24} />, description: "Gestão e motivação de equipes multidisciplinares." },
  { name: "Autoconhecimento", icon: <BarChart4 className="text-[#1a7a7a]" size={24} />, description: "Capacidade de autoavaliação e desenvolvimento pessoal." },
  { name: "Gestão de Projetos", icon: <Workflow className="text-[#1a7a7a]" size={24} />, description: "Planejamento, execução e liderança de projetos tecnológicos." },
  { name: "Mentalidade de Equipe", icon: <Users className="text-[#1a7a7a]" size={24} />, description: "Trabalho colaborativo e harmonia em grupo." },
  { name: "Vontade de Aprender", icon: <BookOpen className="text-[#1a7a7a]" size={24} />, description: "Busca constante de atualização e novas tecnologias." },
  { name: "Gestão do Tempo", icon: <Clock4 className="text-[#1a7a7a]" size={24} />, description: "Organização e disciplina no cumprimento de tarefas." },
  { name: "Gestão Ágil", icon: <Workflow className="text-[#1a7a7a]" size={24} />, description: "Adaptação rápida a mudanças com foco em entregas de valor contínuas." },
  { name: "Gestão da Inovação", icon: <Lightbulb className="text-[#1a7a7a]" size={24} />, description: "Promoção de uma cultura criativa para transformar ideias em soluções de impacto." }
];

const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (name: string) => {
    setExpandedSkill(expandedSkill === name ? null : name);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Hard Skills */}
      <Card className="shadow-lg border-0 animate-fade-in" style={{ animationDelay: '0.25s' }}>
        <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
          <h2 className="text-xl font-bold">Hard Skills</h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            {hardSkills.map((skill) => (
              <div key={skill.name} className="border rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-teal-200">
                <Button variant="ghost" className="w-full justify-between p-0 h-auto" onClick={() => toggleSkill(skill.name)}>
                  <div className="flex items-center gap-3">
                    <span className={`transition-transform duration-300 ${expandedSkill === skill.name ? 'scale-110' : ''}`}>{skill.icon}</span>
                    <span className="font-semibold text-left">{skill.name}</span>
                  </div>
                  <div className={`transition-transform duration-300 ${expandedSkill === skill.name ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </Button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSkill === skill.name ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-10">
                    <p className="text-gray-600 mb-3">{skill.description}</p>
                    {skill.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-teal-200 text-[#1a7a7a] transition-all duration-200 hover:bg-teal-50 hover:scale-105">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soft Skills */}
      <Card className="shadow-lg border-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
          <h2 className="text-xl font-bold">Soft Skills</h2>
        </div>
        <CardContent className="p-6">
          <div className="space-y-4">
            {softSkills.map((skill) => (
              <div key={skill.name} className="border rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-teal-200">
                <Button variant="ghost" className="w-full justify-between p-0 h-auto" onClick={() => toggleSkill(skill.name)}>
                  <div className="flex items-center gap-3">
                    <span className={`transition-transform duration-300 ${expandedSkill === skill.name ? 'scale-110' : ''}`}>{skill.icon}</span>
                    <span className="font-semibold text-left">{skill.name}</span>
                  </div>
                  <div className={`transition-transform duration-300 ${expandedSkill === skill.name ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </Button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSkill === skill.name ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-10">
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsSection;
