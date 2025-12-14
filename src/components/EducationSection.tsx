import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationItems = [
  "Especialização em Inteligência Artificial Aplicada aos Desafios Socioambientais da Amazônia pelo Instituto de Inteligência Artificial Aplicada/I2A2.",
  "Especialização em Ciência de Dados: Big Data e Analytics.",
  "Especialização em Engenharia de Internet das Coisas (IoT).",
  "MBA em Gestão Empresarial de Cooperativas Médicas.",
  "Especialização em Banco de Dados e Análise de Sistemas.",
  "Graduação em Processamento de Dados."
];

const EducationSection = () => {
  return (
    <section className="max-w-3xl mx-auto mt-8 px-4">
      <Card className="bg-white/80 shadow-lg border-0">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-green-700" size={24} />
            <h2 className="text-xl font-bold text-green-800">Formação Acadêmica</h2>
          </div>
          <ul className="space-y-3">
            {educationItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default EducationSection;
