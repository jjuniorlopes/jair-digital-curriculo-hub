
import React from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationItems = [
  { title: "IA Aplicada aos Desafios Socioambientais da Amazônia", institution: "I2A2 - Institut d'Intelligence Artificielle Appliquée", type: "Especialização" },
  { title: "Agentes Inteligentes com IA Generativas", institution: "I2A2 - Institut d'Intelligence Artificielle Appliquée", type: "Curso Internacional" },
  { title: "Ciência de Dados: Big Data e Analytics", institution: "", type: "Especialização" },
  { title: "Engenharia de Internet das Coisas (IoT)", institution: "", type: "Especialização" },
  { title: "MBA em Gestão Empresarial de Cooperativas Médicas", institution: "", type: "MBA" },
  { title: "Banco de Dados e Análise de Sistemas", institution: "", type: "Especialização" },
  { title: "Processamento de Dados", institution: "", type: "Graduação" }
];

const EducationSection = () => (
  <Card className="mb-8 shadow-lg border-0 animate-slide-up" style={{ animationDelay: '0.35s' }}>
    <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <GraduationCap size={24} />
        Formação Acadêmica
      </h2>
    </div>
    <CardContent className="p-6">
      <div className="space-y-4">
        {educationItems.map((item, idx) => (
          <div key={idx} className="border-l-4 border-orange-500 pl-6 pb-4 last:pb-0 transition-all duration-300 hover:border-orange-400 hover:bg-orange-50/30 rounded-r-lg hover:pl-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <Badge variant="outline" className="border-orange-200 text-orange-700 mt-1 md:mt-0 w-fit">
                {item.type}
              </Badge>
            </div>
            {item.institution && (
              <p className="text-gray-500 text-sm ml-7">{item.institution}</p>
            )}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default EducationSection;
