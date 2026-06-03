import { useEffect } from "react";
import { Mail, Instagram, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  { icon: Mail, label: "Email", value: "tecnologiadojair@gmail.com", action: () => window.open('mailto:tecnologiadojair@gmail.com'), color: "text-blue-600" },
  { icon: Instagram, label: "Instagram", value: "@jairlopes.inova", action: () => window.open('https://www.instagram.com/jairlopes.inova', '_blank'), color: "text-pink-600" },
  { icon: MessageCircle, label: "WhatsApp", value: "+55 71 99288-8890", action: () => window.open('https://wa.me/5571992888890', '_blank'), color: "text-green-500" },
  { icon: MapPin, label: "Localização", value: "Salvador - BA, Brasil", action: null as (() => void) | null, color: "text-green-600" }
];

const ContactSection = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.LIRenderAll) window.LIRenderAll();
    }
  }, []);

  return (
  <Card className="shadow-lg border-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
    <div className="bg-[#1a7a7a] text-white rounded-t-lg p-4">
      <h2 className="text-xl font-bold">Entre em Contato</h2>
    </div>
    <CardContent className="p-6">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="flex justify-center md:justify-start">
          <div
            className="badge-base LI-profile-badge"
            data-locale="pt_BR"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="jairlopesjr"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link sr-only"
              href="https://br.linkedin.com/in/jairlopesjr?trk=profile-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jair Lopes
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Informações de Contato</h3>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
                <contact.icon className={`${contact.color} w-5 h-5 transition-transform duration-300 hover:scale-125`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">{contact.label}</p>
                  {contact.action ? (
                    <Button variant="link" className="p-0 h-auto text-left justify-start" onClick={contact.action}>
                      {contact.value}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  ) : (
                    <p className="font-medium text-gray-800">{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Vamos Conversar</h3>
          <p className="text-gray-600 mb-4">
            Interessado em soluções inovadoras para IoT, análise de dados, IA ou governança de dados?
            Entre em contato para discutirmos como posso ajudar seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('mailto:jjuniorlopes@gmail.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Enviar Email
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://wa.me/5571992888890', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t text-center">
        <p className="text-gray-600 italic">
          "Transformando dados em soluções sustentáveis para um futuro melhor"
        </p>
      </div>
    </CardContent>
  </Card>
  );
};

export default ContactSection;
