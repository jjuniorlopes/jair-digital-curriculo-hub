
import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

const bannerUrl =
  "/lovable-uploads/e4e242d0-bac0-4eda-ba39-1e8050334510.png";
// Usa a foto de perfil enviada pelo usuário
const photoUrl =
  "/lovable-uploads/5142b86b-21ac-49aa-b54b-6b384979f7a2.png";

const resumo = (
  <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto">
    Com mais de <b>30 anos de experiência</b> em Engenharia de Dados e Internet das Coisas, sou consultor em novas tendências tecnológicas como Engenharia de Dados, IoT, IA e Governança Digital, com destaque para projetos de saneamento básico e ambiental. Especialista em análise e visualização de dados com soluções inovadoras, liderando equipes e projetos premiados em empresas públicas e privadas. 
  </p>
);

const contatos = [
  {
    icon: <Phone className="text-emerald-600" size={18} />,
    text: "(71) 99288-8890"
  },
  {
    icon: <Mail className="text-blue-600" size={18} />,
    text: "jjuniorlopes@gmail.com",
    link: "mailto:jjuniorlopes@gmail.com"
  },
  {
    icon: <Linkedin className="text-blue-700" size={18} />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/jair-costa-lopes-junior-ab6109199/"
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
