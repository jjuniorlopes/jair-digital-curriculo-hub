
import React from "react";
import { Mail, Linkedin, Instagram, MessageCircle, MapPin, Cloud, Database, BrainCircuit, Droplets, HeartHandshake, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bannerUrl = "/lovable-uploads/banner_principal_jair-2.png";
const photoUrl = "/lovable-uploads/profile-photo.png";

const resumoParagrafos = [
  "Profissional com mais de 30 anos de experiência em Tecnologia da Informação, atuando estrategicamente na interseção entre Engenharia de Dados, Análise de Dados, Inteligência Artificial (incluindo IA Generativa), Internet das Coisas (IoT), Governança Digital, Gestão Ágil e Transformação Digital.",
  "Atualmente, sou concursado na Empresa Baiana de Águas e Saneamento S.A. (Embasa) e atuo também no Parque Tecnológico da Bahia como mentor em Engenharia de Dados, Engenharia de Prompt aplicada à IA e IoT. Integro ainda o grupo técnico do Governo da Bahia no Programa Consórcio Bahia para Gestão Pública Consorcial, parceria entre EMBASA e SEPLAN, apoiando iniciativas de governança digital, computação em nuvem, análise de dados e inteligência artificial.",
  "Ao longo da minha trajetória, atuei nos setores de energia, saúde suplementar, financeiro, saneamento e desenvolvimento de sistemas, liderando e participando de projetos voltados à inovação, eficiência operacional e transformação digital.",
  "Possuo sólida experiência em arquitetura e engenharia de dados, integração de sistemas e desenvolvimento de soluções analíticas com bancos de dados relacionais e não relacionais, além da aplicação de IA Generativa para automação, geração de insights e apoio à tomada de decisão.",
  "Minha atuação inclui projetos relacionados a Smart Cities & Sustentabilidade, Acessibilidade Digital, Recursos Hídricos, Saneamento Básico, Indústria 4.0, governança de dados, gestão de ativos e redução de perdas.",
  "🏆 Premiações e Reconhecimentos:",
  "• Projeto AguaGuard — Finalista entre os 7 melhores projetos de IA e Desafios Socioambientais da Amazônia pelo I2A2",
  "• Projeto SMART WATER — 3º lugar no Congresso SUCESSO/BA com soluções inovadoras aplicadas à Indústria 4.0",
  "• 1º lugar no Hackathon EMBASA com projeto de controle de H2S em ETE utilizando redes IoT",
  "• 1º lugar no Fórum Unimed com projeto de otimização de banco de dados em ERP",
  "📚 Publicações e Apresentações:",
  "• Autor de cinco artigos no 33º Congresso da ABES",
  "• Publicações na VII e VIII COBESA e na ABINC",
  "• Autor de dois artigos no 21º SILUBESA",
  "• Palestrante em webinars no SENAI CIMATEC e FIEB sobre Tecnologias da Transformação Digital no Saneamento",
  "Sou reconhecido pela capacidade de conectar tecnologia à estratégia de negócios, transformando dados em valor, inovação em resultados concretos e tecnologia em impacto positivo para organizações e sociedade.",
  "📩 Aberto a conexões, parcerias e projetos estratégicos em Dados, IA, Inovação, Sustentabilidade e Transformação Digital."
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
    {/* Banner with photo overlapping bottom-left and action buttons overlapping bottom-right */}
    <Card className="mb-8 shadow-lg border-0 overflow-hidden">
      <div className="relative w-full">
        <div
          className="relative w-full bg-cover bg-center aspect-[1920/576] bg-[#1a7a7a]"
          style={{
            backgroundImage: `linear-gradient(rgba(26,122,122,0.85), rgba(26,122,122,0.85)), url(${bannerUrl})`,
            minHeight: '260px',
          }}
        >
          {/* Text + tags overlay */}
          <div className="absolute inset-0 flex flex-col items-end justify-center pl-32 md:pl-40 pr-2 md:pr-3 text-right">
            <h2 className="text-white font-extrabold leading-tight drop-shadow-lg text-base sm:text-lg md:text-2xl lg:text-3xl mb-3 md:mb-5 max-w-3xl">
              Inovação, Transformação Digital e Ambiental com Acessibilidade e Gestão Ágil
            </h2>
            <div className="flex flex-wrap justify-end gap-1.5 md:gap-2 max-w-3xl">

              <span className="px-2.5 py-1 rounded-md bg-[#1d4ed8] text-white text-[10px] md:text-xs font-bold shadow">INTELIGÊNCIA ARTIFICIAL</span>
              <span className="px-2.5 py-1 rounded-md bg-[#0f766e] text-white text-[10px] md:text-xs font-bold shadow">SCRUM</span>
              <span className="px-2.5 py-1 rounded-md bg-[#6b21a8] text-white text-[10px] md:text-xs font-bold shadow">KANBAN</span>
              <span className="px-2.5 py-1 rounded-md bg-[#ea580c] text-white text-[10px] md:text-xs font-bold shadow">OKR</span>
              <span className="px-2.5 py-1 rounded-md bg-[#1d4ed8] text-white text-[10px] md:text-xs font-bold shadow">PYTHON</span>
              <span className="px-2.5 py-1 rounded-md bg-[#0f766e] text-white text-[10px] md:text-xs font-bold shadow">SQL</span>
              <span className="px-2.5 py-1 rounded-md bg-[#334155] text-white text-[10px] md:text-xs font-bold shadow">DESIGN THINKING</span>
              <span className="px-2.5 py-1 rounded-md bg-[#0891b2] text-white text-[10px] md:text-xs font-bold shadow">BANCO DE DADOS</span>
              <span className="px-2.5 py-1 rounded-md bg-[#1d4ed8] text-white text-[10px] md:text-xs font-bold shadow">INTERNET DAS COISAS</span>
              <span className="px-2.5 py-1 rounded-md bg-[#ea580c] text-white text-[10px] md:text-xs font-bold shadow">E MUITO MAIS</span>
            </div>
          </div>
        </div>

        {/* Profile photo - bottom left overlapping banner */}
        <div className="absolute left-4 md:left-8 -bottom-10 md:-bottom-12 z-20 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white transition-transform duration-500 hover:scale-105">
          <img
            src={photoUrl}
            alt="Foto de Jair Costa Lopes Junior"
            className="w-full h-full object-cover bg-white"
          />
        </div>

      </div>

      {/* Action buttons row - below banner, aligned right */}
      <div className="bg-white px-6 md:px-10 pt-4">
        <div className="flex justify-end flex-wrap gap-2 md:gap-3">
          <Button
            size="sm"
        <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
          Análise de Dados | Administração de Banco de Dados | Inteligência Artificial | IoT | Gestão da Inovação | Governança Digital | Transformação Digital | Smart Cities | Acessibilidade Digital | Gestão Ágil | ESG | Saneamento
        </p>
          >
            <Linkedin size={16} className="mr-1" />
            LinkedIn
          </Button>
          <Button
            size="sm"
            className="bg-pink-500 hover:bg-pink-600 text-white shadow-md transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.instagram.com/jairlopes.inova', '_blank')}
          >
            <Instagram size={16} className="mr-1" />
            Instagram
          </Button>
          <Button
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white shadow-md transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/5571992888890', '_blank')}
          >
            <MessageCircle size={16} className="mr-1" />
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Info section below banner */}
      <div className="bg-white px-6 md:px-10 pt-10 md:pt-12 pb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Jair Costa Lopes Junior</h1>
        <p className="text-sm md:text-base text-gray-700 mb-3 leading-relaxed">
          Eng. de Dados Sênior | Análise de Dados | Gestão da Inovação | Inteligência Artificial | IoT | Governança Digital | Transformação Digital | Smart Cities & Sustentabilidade | Saneamento & Recursos Hídricos | Acessibilidade Digital | Gestão Ágil
        </p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Salvador - BA, Brasil
          </span>
          <span className="text-gray-400">·</span>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#0A66C2] hover:underline font-medium"
          >
            Informações de contato
          </a>
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
