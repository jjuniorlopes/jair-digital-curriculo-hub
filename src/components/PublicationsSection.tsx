
import React from "react";
import { FileText, BookOpen, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const publications = [
  { icon: <FileText className="text-[#1a7a7a]" size={24} />, title: "Congressos Nacionais", desc: "Autor de cinco artigos no 33º Congresso da ABES, artigos na VII e VIII COBESA e publicações na Associação Brasileira de Internet das Coisas (ABINC).", tags: ["ABES", "COBESA", "ABINC"] },
  { icon: <BookOpen className="text-[#1a7a7a]" size={24} />, title: "Simpósios Internacionais", desc: "Autor de dois artigos no 21º Simpósio Luso-Brasileiro de Engenharia Sanitária e Ambiental (SILUBESA).", tags: ["SILUBESA", "Internacional"] },
  { icon: <Mic className="text-[#1a7a7a]" size={24} />, title: "Palestras", desc: "Apresentação de webinars no SENAI CIMATEC e FIEB sobre 'Tecnologias da Transformação Digital no Saneamento'.", tags: ["SENAI CIMATEC", "FIEB", "Webinar"] },
];

const PublicationsSection = () => (
  <Card className="mb-8 shadow-lg border-0 animate-slide-up" style={{ animationDelay: '0.45s' }}>
    <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <FileText size={24} />
        Publicações e Apresentações
      </h2>
    </div>
    <CardContent className="p-6">
      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <div key={idx} className="group border rounded-lg p-5 bg-gradient-to-br from-white to-gray-50 transition-all duration-400 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-200 group-hover:scale-110 flex-shrink-0">
                {pub.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-indigo-700">{pub.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{pub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-indigo-100 text-indigo-800 transition-all duration-200 hover:bg-indigo-200 hover:scale-105">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default PublicationsSection;
