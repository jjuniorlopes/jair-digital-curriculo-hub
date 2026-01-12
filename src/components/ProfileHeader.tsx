import React from "react";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const bannerUrl =
  "/lovable-uploads/e4e242d0-bac0-4eda-ba39-1e8050334510.png";
// Usa a foto de perfil enviada pelo usuário
const photoUrl =
  "/lovable-uploads/profile-photo.png";

const resumo = (
  <div className="max-w-3xl mx-auto px-4">
    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
      <p className="text-base md:text-lg text-green-900 text-justify leading-relaxed">
        Profissional sênior com mais de 30 anos de experiência em Tecnologia da Informação, com atuação destacada em Engenharia de Dados e Internet das Coisas (IoT). Graduado em Processamento de Dados, possui especializações em Engenharia de IoT, Ciência de Dados (Big Data e Analytics), Banco de Dados, Análise de Sistemas e MBA em Gestão Empresarial. Tem curso internacional em Inteligência Artificial Aplicada aos Desafios Socioambientais da Amazônia se destacando entre os 7 melhores trabalhos do curso e em Agentes Inteligentes com IA Generativas, ambos pelo Instituto de Inteligência Artificial Aplicada (I2A2). Atua no desenvolvimento de soluções em IA aplicada aos negócios e em arquiteturas IoT LPWAN voltadas a Cidades Inteligentes, Acessibilidade e Saneamento/Meio Ambiente. Premiado por inovação e autor de artigos técnicos nas áreas de saneamento e tecnologia.
      </p>
    </div>
  </div>
);

const contatos = [
  {
    icon: <Mail className="text-blue-600" size={18} />,
    text: "jjuniorlopes@gmail.com",
    link: "mailto:jjuniorlopes@gmail.com"
  },
  {
    icon: <Linkedin className="text-blue-700" size={18} />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jair-costa-lopes-junior-ab6109199/"
  },
  {
    icon: <Instagram className="text-pink-600" size={18} />,
    text: "Instagram",
    link: "https://www.instagram.com/jairlopes.inova"
  },
  {
    icon: <MessageCircle className="text-green-500" size={18} />,
    text: "WhatsApp",
    link: "https://wa.me/5571992888890"
  }
];

const ProfileHeader = () => (
  <section className="relative">
    <div className="w-full h-40 md:h-60 overflow-hidden rounded-b-xl">
      <img
        src={bannerUrl}
        alt="Banner ESG e transformação digital sustentável"
        className="w-full h-full object-cover object-center"
        style={{ display: 'block' }}
      />
    </div>
    <div className="flex flex-col items-center -mt-16 md:-mt-24">
      <img
        src={photoUrl}
        alt="Foto de Perfil"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl object-cover"
        style={{ backgroundColor: '#e2e8f0' }}
      />
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 mt-3">Jair Costa Lopes Junior</h1>
      <div className="flex gap-4 items-center mt-2">
        {contatos.map(({ icon, text, link }, idx) =>
          link ? (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2 py-1 rounded hover:bg-emerald-100 transition">
              {icon}
              <span className="text-sm font-medium text-emerald-900">{text}</span>
            </a>
          ) : (
            <span key={idx} className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-50 text-sm font-medium text-emerald-900">
              {icon} {text}
            </span>
          )
        )}
      </div>
      <div className="mt-5">{resumo}</div>
    </div>
  </section>
);

export default ProfileHeader;
