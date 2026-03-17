
import React from "react";
import { Award, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const awards = [
  { date: "12/2025", title: "Projeto AguaGuard", desc: "Finalista entre os 7 melhores trabalhos de IA e Desafios Socioambientais da Amazônia, do I2A2." },
  { date: "10/2022", title: "SMART WATER – 3º lugar", desc: "Congresso SUCESSO/Ba com projeto de tecnologias inovadoras da indústria 4.0." },
  { date: "05/2022", title: "1º lugar Hackathon Embasa", desc: "Semana de Conhecimento Embasa." },
  { date: "05/2004", title: "1º lugar Fórum Unimed", desc: "Fórum das Unimed Norte/Nordeste e Centro Oeste." }
];

const AwardsSection = () => (
  <Card className="mb-8 shadow-lg border-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
    <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Trophy size={24} />
        Premiações e Reconhecimentos
      </h2>
    </div>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {awards.map((award, idx) => (
          <div key={idx} className="group border rounded-lg p-5 bg-gradient-to-br from-white to-gray-50 transition-all duration-400 hover:shadow-xl hover:-translate-y-1 hover:border-teal-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-teal-200 group-hover:scale-110 flex-shrink-0">
                <Award className="text-[#1a7a7a]" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-[#1a7a7a]">{award.title}</h3>
                </div>
                <Badge variant="outline" className="border-amber-200 text-amber-700 mb-2">{award.date}</Badge>
                <p className="text-gray-600 text-sm leading-relaxed">{award.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AwardsSection;
