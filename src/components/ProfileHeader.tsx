
import React from "react";
import { Mail, Linkedin, Instagram, MessageCircle, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bannerUrl = "/lovable-uploads/painel_jair.png";
const photoUrl = "/lovable-uploads/profile-photo.png";

const resumo = `Profissional sênior com mais de 30 anos de experiência em Tecnologia da Informação, com atuação destacada em Engenharia de Dados e Internet das Coisas (IoT). Graduado em Processamento de Dados, possui especializações em Engenharia de IoT, Ciência de Dados (Big Data e Analytics), Banco de Dados, Análise de Sistemas e MBA em Gestão Empresarial. Tem curso internacional em Inteligência Artificial Aplicada aos Desafios Socioambientais da Amazônia se destacando entre os 7 melhores trabalhos do curso e em Agentes Inteligentes com IA Generativas, ambos pelo Instituto de Inteligência Artificial Aplicada (I2A2). Atua no desenvolvimento de soluções em IA aplicada aos negócios e em arquiteturas IoT LPWAN voltadas a Cidades Inteligentes, Acessibilidade e Saneamento/Meio Ambiente. Premiado por inovação e autor de artigos técnicos nas áreas de saneamento e tecnologia.`;

const ProfileHeader = () => (
  <div className="animate-fade-in">
    {/* Banner */}
    <Card className="mb-8 shadow-lg border-0 overflow-hidden">
      <div className="w-full overflow-hidden">
        <img
          src={bannerUrl}
          alt="Banner Inovação, Transformação Digital e Ambiental"
          className="w-full h-auto object-cover"
        />
      </div>
    </Card>

    {/* Profile Card */}
    <Card className="mb-8 shadow-lg border-0 overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white/30 transition-transform duration-500 hover:scale-110 hover:border-white/60 flex-shrink-0">
            <img
              src={photoUrl}
              alt="Foto de Jair Costa Lopes Junior"
              className="w-full h-full object-cover"
              style={{ backgroundColor: '#e2e8f0' }}
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Jair Costa Lopes Junior</h1>
            <p className="text-xl text-blue-100 mb-4">
              Consultor em Tecnologias Emergentes | IoT | Data Engineering | AI
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-200">
                <MapPin size={16} />
                <span>Salvador - BA, Brasil</span>
              </div>
              <div className="flex items-center gap-2 transition-colors duration-300 hover:text-blue-200">
                <Mail size={16} />
                <span>jjuniorlopes@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://www.linkedin.com/in/jair-costa-lopes-junior-ab6109199/', '_blank')}
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://www.instagram.com/jairlopes.inova', '_blank')}
            >
              <Instagram size={20} className="mr-2" />
              Instagram
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://wa.me/5571992888890', '_blank')}
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Card>

    {/* Resumo Profissional */}
    <Card className="mb-8 shadow-lg border-0 animate-fade-in" style={{ animationDelay: '0.15s' }}>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4">
        <h2 className="text-2xl font-bold">Resumo Profissional</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed text-lg text-justify">{resumo}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["IoT Specialist", "Data Engineering", "AI Consultant", "Environmental Tech", "Acessibilidade"].map((tag, i) => {
            const colors = [
              "bg-blue-100 text-blue-800",
              "bg-green-100 text-green-800",
              "bg-purple-100 text-purple-800",
              "bg-orange-100 text-orange-800",
              "bg-cyan-100 text-cyan-800",
            ];
            return (
              <span key={tag} className={`px-3 py-1 rounded-full text-sm font-medium ${colors[i]} transition-all duration-200 hover:scale-110 hover:shadow-md cursor-default`}>
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  </div>
);

export default ProfileHeader;
