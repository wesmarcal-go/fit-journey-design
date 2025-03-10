
import React, { useRef, useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
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

  const benefits = [
    "Programas personalizados para seu objetivo",
    "Acompanhamento constante da evolução",
    "Ajustes na dieta e suplementação",
    "Treinos eficientes para maximizar resultados"
  ];

  return (
    <section id="sobre" ref={sectionRef} className="section-padding bg-trainer-white">
      <div className="trainer-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              className={`relative z-10 rounded-lg overflow-hidden shadow-xl opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1550&q=80"
                alt="Personal Trainer"
                className="w-full h-auto object-cover"
              />
            </div>
            <div 
              className="absolute w-full h-full bg-trainer-yellow rounded-lg -bottom-4 -right-4 z-0"
              style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease-out 0.3s" }}
            ></div>
          </div>

          <div>
            <div 
              className={`opacity-0 ${isVisible ? "animate-fade-in delay-200" : ""}`}
            >
              <div className="inline-block bg-trainer-yellow px-4 py-1 mb-4 rounded">
                <span className="text-sm font-bold">SOBRE MIM</span>
              </div>
            </div>
            
            <h2 
              className={`section-title opacity-0 ${
                isVisible ? "animate-fade-in delay-300" : ""
              }`}
            >
              Transformando vidas através do treinamento personalizado
            </h2>
            
            <p 
              className={`text-gray-700 mb-6 leading-relaxed opacity-0 ${
                isVisible ? "animate-fade-in delay-400" : ""
              }`}
            >
              Com mais de 10 anos de experiência, sou especialista em transformação corporal 
              e bem-estar. Minha metodologia combina treinamento de força, 
              condicionamento cardiovascular e nutrição personalizada para 
              oferecer os melhores resultados.
            </p>
            
            <ul 
              className={`space-y-3 mb-8 opacity-0 ${
                isVisible ? "animate-fade-in delay-500" : ""
              }`}
            >
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-trainer-yellow mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#servicos" 
              className={`btn-secondary inline-block opacity-0 ${
                isVisible ? "animate-fade-in delay-600" : ""
              }`}
            >
              Conheça meus serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
