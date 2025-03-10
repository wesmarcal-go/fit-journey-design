
import React, { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
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

  return (
    <section 
      id="contato" 
      ref={sectionRef} 
      className="bg-trainer-yellow section-padding"
    >
      <div className="trainer-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-3xl md:text-5xl font-extrabold mb-6 text-trainer-black opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            Quer ter resultados reais?
          </h2>
          
          <p 
            className={`text-lg md:text-xl text-trainer-black mb-8 opacity-0 ${
              isVisible ? "animate-fade-in delay-100" : ""
            }`}
          >
            Não perca mais tempo com treinos ineficientes. 
            Comece agora mesmo sua transformação com um plano personalizado.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${
              isVisible ? "animate-fade-in delay-200" : ""
            }`}
          >
            <a 
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary group flex items-center justify-center gap-2 text-lg py-4 px-8"
            >
              <span>Agendar Consulta</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <p 
            className={`mt-6 text-sm text-trainer-black opacity-0 ${
              isVisible ? "animate-fade-in delay-300" : ""
            }`}
          >
            * Primeira avaliação gratuita para novos alunos
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
