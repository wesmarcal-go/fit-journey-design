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
    <section 
      id="sobre" 
      ref={sectionRef} 
      className="section-padding relative overflow-hidden"
      style={{
        background: `linear-gradient(to right, rgba(245, 245, 245, 0.9), rgba(255, 255, 255, 0.95))`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="trainer-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div 
              className={`relative z-10 rounded-lg overflow-hidden shadow-xl opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Personal Trainer"
                className="w-4/5 h-auto object-cover mx-auto"
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
