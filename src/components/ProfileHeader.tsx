
import React from "react";
import { Linkedin, Instagram, MessageCircle, MapPin, Cloud, Database, BrainCircuit, Droplets, HeartHandshake, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import bannerBg from "@/assets/banner-bg.png";
 
const photoUrl = "/lovable-uploads/profile-photo.png";

// Heading + colored tag pills overlaid on the banner (responsive HTML for legibility)
const bannerHeading =
  "Inovação, Transformação Digital e Ambiental com Acessibilidade e Gestão Ágil";

const bannerTags: { label: string; className: string }[] = [
  { label: "IA", className: "bg-violet-600" },
  { label: "Scrum", className: "bg-orange-500" },
  { label: "Kanban", className: "bg-blue-600" },
  { label: "OKR", className: "bg-emerald-600" },
  { label: "PMI / PMBOK", className: "bg-rose-600" },
  { label: "SQL", className: "bg-indigo-600" },
  { label: "Design Thinking", className: "bg-pink-500" },
  { label: "IoT", className: "bg-cyan-600" },
  { label: "Data Engineering", className: "bg-amber-600" },
  { label: "ESG", className: "bg-green-600" },
  { label: "Smart Cities", className: "bg-sky-600" },
  { label: "Acessibilidade", className: "bg-fuchsia-600" },
];

const resumoParagrafos = [
  "Profissional com mais de 30 anos de experiência em Tecnologia da Informação, atuando estrategicamente na interseção entre Engenharia de Dados, Análise de Dados, Inteligência Artificial (incluindo IA Generativa), Internet das Coisas (IoT), Governança Digital, Gestão Ágil e Transformação Digital.",
  "Atualmente, sou concursado na Empresa Baiana de Águas e Saneamento S.A. (Embasa) e atuo também no Parque Tecnológico da Bahia como mentor em Engenharia de Dados, Engenharia de Prompt aplicada à IA e IoT. Integro ainda o grupo técnico do Governo da Bahia no Programa Consórcio Bahia para Gestão Pública Consorcial, parceria entre EMBASA e SEPLAN, apoiando iniciativas de governança digital, computação em nuvem, análise de dados e inteligência artificial.",
  "Ao longo da minha trajetória, atuei nos setores de energia, saúde suplementar, financeiro, saneamento e desenvolvimento de sistemas, liderando e participando de projetos voltados à inovação, eficiência operacional e transformação digital.",
  "Possuo sólida experiência em arquitetura e engenharia de dados, integração de sistemas e desenvolvimento de soluções analíticas com bancos de dados relacionais e não relacionais, além da aplicação de IA Generativa para automação, geração de insights e apoio à tomada de decisão.",
  "Minha atuação inclui projetos relacionados a Smart Cities & Sustentabilidade, Acessibilidade Digital, Recursos Hídricos, Saneamento Básico, Indústria 4.0, governança de dados, gestão de ativos e redução de perdas.",
  "🏆 Premiações e Reconhecimentos:",
  "➤ Projeto AguaGuard — Finalista entre os 7 melhores projetos de IA e Desafios Socioambientais da Amazônia pelo I2A2 - Institut d'Intelligence Artificielle Appliquée",
  "➤ Projeto SMART WATER — 3º lugar no Congresso SUCESSO/BA com soluções inovadoras aplicadas à Indústria 4.0",
  "➤ 1º lugar no Hackathon EMBASA com projeto de controle de H2S em ETE utilizando redes IoT",
  "➤ 1º lugar no Fórum Unimed com projeto de otimização de banco de dados em ERP",
  "📚 Publicações e Apresentações:",
  "➤ Autor de cinco artigos no 33º Congresso da ABES – Associação Brasileira de Engenharia Sanitária e Ambiental",
  "➤ Publicações na VII e VIII COBESA - Congresso Baiano de Engenharia Sanitária e Ambiental e na ABINC - Associação Brasileira de Internet das Coisas",
  "➤ Autor de dois artigos no 21º SILUBESA -Simpósio Luso-Brasileiro de Engenharia Sanitária e Ambiental",
  "➤ Palestrante em webinars no SENAI CIMATEC e FIEB sobre Tecnologias da Transformação Digital no Saneamento",
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
      <div className="relative w-full bg-[#0d5c5c] aspect-[2/1] min-h-[230px]">
        <img
          src={bannerBg}
          alt="Banner de tecnologia com lâmpada, circuitos e ícones de IoT e dados"
          loading="eager"
          width={1920}
          height={960}
          className="absolute inset-0 block w-full h-full object-cover"
        />

        {/* Subtle scrim to guarantee overlay text contrast on any device */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-black/10 to-black/55" />

        {/* Responsive HTML overlay: heading + colored skill tags (right side) */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-end gap-2 md:gap-3 px-4 py-4 md:px-12 md:py-10 text-right">
          <h2 className="max-w-[62%] text-white font-extrabold leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] text-sm sm:text-lg md:text-2xl lg:text-3xl">
            {bannerHeading}
          </h2>
          <div className="flex flex-wrap justify-end gap-1.5 md:gap-2 max-w-[62%]">
            {bannerTags.map((t) => (
              <span
                key={t.label}
                className={`${t.className} text-white font-semibold rounded-full px-2 py-0.5 md:px-3 md:py-1 text-[10px] sm:text-xs md:text-sm shadow-md whitespace-nowrap`}
              >
                {t.label}
              </span>
            ))}
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
            className="bg-[#0A66C2] hover:bg-[#004182] text-white shadow-md transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://www.linkedin.com/in/jairlopesjr', '_blank')}
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
          Análise de Dados | Administração de Banco de Dados | Inteligência Artificial | IoT | Gestão da Inovação | Governança Digital | Transformação Digital | Smart Cities | Acessibilidade Digital | Gestão Ágil | ESG | Saneamento
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
