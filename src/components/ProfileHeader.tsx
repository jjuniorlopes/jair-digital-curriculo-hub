
import React from "react";
import { Mail, Linkedin, Instagram, MessageCircle, MapPin, Cloud, Database, BrainCircuit, Droplets, HeartHandshake, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bannerUrl = "/lovable-uploads/Banner_jair_limpo.png";
const photoUrl = "/lovable-uploads/profile-photo.png";

const resumoParagrafos = [
  "Profissional com mais de 30 anos de experiência em Tecnologia da Informação, atuando de forma estratégica na interseção entre Engenharia de Dados, Inteligência Artificial Generativa, Internet das Coisas (IoT) e Transformação Digital.",
  "Ao longo da minha trajetória, liderei e participei de projetos de alto impacto voltados à inovação e eficiência operacional, com foco na aplicação de dados e tecnologias emergentes para resolver problemas reais de negócio — especialmente em iniciativas relacionadas a Smart Cities, acessibilidade, saneamento, sustentabilidade e gestão pública.",
  "Possuo sólida experiência na construção de arquiteturas de dados, integração de sistemas e desenvolvimento de soluções analíticas utilizando bancos de dados como Oracle, PostgreSQL, MySQL e DB2, além da aplicação de IA Generativa para geração de insights, automação e apoio à tomada de decisão.",
  "Minha atuação inclui projetos de Indústria 4.0, soluções ergonômicas assertivas, governança de dados, gestão de ativos e redução de perdas, contribuindo diretamente para melhoria de eficiência operacional e inovação organizacional.",
  "Sou reconhecido pela capacidade de conectar tecnologia à estratégia de negócios, transformando dados em valor e soluções digitais em resultados concretos.",
  "📩 Aberto a conexões e oportunidades para projetos estratégicos, inovação e transformação digital."
];

const perfilCards = [
  { label: "Especialista em IoT", icon: <Cloud size={18} className="text-[#1a7a7a]" /> },
  { label: "Engenharia de Dados", icon: <Database size={18} className="text-[#1a7a7a]" /> },
  { label: "Consultor de IA", icon: <BrainCircuit size={18} className="text-[#1a7a7a]" /> },
  { label: "Tecnologia Ambiental", icon: <Droplets size={18} className="text-[#1a7a7a]" /> },
  { label: "Acessibilidade", icon: <HeartHandshake size={18} className="text-[#1a7a7a]" /> },
  { label: "Inovação", icon: <Lightbulb size={18} className="text-[#1a7a7a]" /> },
];

const ProfileHeader = () => (
  <div className="animate-fade-in">
    {/* Banner as background with profile info overlay */}
    <Card className="mb-8 shadow-lg border-0 overflow-hidden">
      <div
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerUrl})`,
          minHeight: '280px',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content over banner */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8 md:p-10">
          {/* Profile photo */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white/80 bg-white transition-transform duration-500 hover:scale-110 flex-shrink-0">
            <img
              src={photoUrl}
              alt="Foto de Jair Costa Lopes Junior"
              className="w-full h-full object-cover bg-white"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">Jair Costa Lopes Junior</h1>
            <p className="text-base md:text-lg text-white/90 mb-4 drop-shadow leading-snug">
              Head de Dados & Inovação | Engenheiro de Dados Sênior | Especialista em IA Generativa, IoT e Transformação Digital | Smart Cities & Sustentabilidade | +30 anos gerando inovação e eficiência com dados
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2 drop-shadow">
                <MapPin size={16} />
                <span>Salvador - BA, Brasil</span>
              </div>
              <div className="flex items-center gap-2 drop-shadow">
                <Mail size={16} />
                <span>jjuniorlopes@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Button
              className="bg-[#0A66C2] hover:bg-[#004182] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://www.linkedin.com/in/jjuniorlopes/', '_blank')}
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button
              className="bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
      <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
        <h2 className="text-2xl font-bold">Resumo Profissional</h2>
      </div>
      <div className="p-6">
        <div className="space-y-3">
          {resumoParagrafos.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">{p}</p>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {perfilCards.map((card) => (
            <div
              key={card.label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-teal-200 bg-teal-50/50 hover:bg-teal-50 hover:border-[#1a7a7a] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex-shrink-0">{card.icon}</span>
              <span className="text-sm font-medium text-gray-700">{card.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

export default ProfileHeader;
