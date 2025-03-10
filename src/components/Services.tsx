
import React, { useRef, useEffect, useState } from "react";
import { Dumbbell, Salad, Smartphone } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 ${
        isVisible ? `animate-fade-in delay-${delay}` : ""
      }`}
    >
      <div className="bg-trainer-yellow p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <a 
        href="#contato" 
        className="font-bold text-trainer-black flex items-center hover:text-trainer-yellow transition-colors"
      >
        <span>Saiba mais</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2"
        >
          <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: <Dumbbell size={28} className="text-trainer-black" />,
      title: "Treino Personalizado",
      description: "Planos de treinamento adaptados às suas necessidades, objetivos e limitações físicas."
    },
    {
      icon: <Salad size={28} className="text-trainer-black" />,
      title: "Dieta Orientada",
      description: "Planos alimentares personalizados que complementam seu treinamento e aceleram resultados."
    },
    {
      icon: <Smartphone size={28} className="text-trainer-black" />,
      title: "Acompanhamento Online",
      description: "Suporte contínuo via aplicativo, com ajustes de treino e dieta conforme sua evolução."
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="section-padding bg-trainer-gray">
      <div className="trainer-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div 
            className={`inline-block bg-trainer-yellow px-4 py-1 mb-4 rounded opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            <span className="text-sm font-bold">SERVIÇOS</span>
          </div>
          
          <h2 
            className={`section-title opacity-0 ${
              isVisible ? "animate-fade-in delay-100" : ""
            }`}
          >
            Como posso te ajudar a atingir seus objetivos
          </h2>
          
          <p 
            className={`text-gray-700 opacity-0 ${
              isVisible ? "animate-fade-in delay-200" : ""
            }`}
          >
            Ofereço serviços completos que abordam todos os aspectos necessários 
            para sua transformação física.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={(index + 3) * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
