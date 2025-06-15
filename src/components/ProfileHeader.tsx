
import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";

const bannerUrl =
  "https://media.licdn.com/dms/image/D4D16AQEU5k0r3Y8sDg/profile-displaybackgroundimage-shrink_200_800/0/1715971608266?e=1721865600&v=beta&t=78TunkvwQ47FeKycWdrN8M8OwQOF6KsArKqj-PRzvgg";
const photoUrl =
  "https://media.licdn.com/dms/image/D4D03AQGn4wQvvu3tRQ/profile-displayphoto-shrink_400_400/0/1715971576456?e=1721865600&v=beta&t=8X_sRDYChRJ5IcFynVLBlkSUP2e_UFGOssZAGVuKbdQ";

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
    <img src={bannerUrl} alt="Banner LinkedIn" className="w-full h-40 md:h-60 object-cover rounded-b-xl" />
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
