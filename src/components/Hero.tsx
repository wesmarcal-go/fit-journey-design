
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-20"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="trainer-container">
        <div className="max-w-3xl">
          <div 
            className={`opacity-0 ${isLoaded ? "animate-fade-in" : ""}`}
          >
            <div className="inline-block bg-trainer-yellow px-4 py-1 mb-4 rounded">
              <span className="text-sm font-bold">TRANSFORME SEU CORPO</span>
            </div>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight opacity-0 ${
              isLoaded ? "animate-fade-in delay-100" : ""
            }`}
          >
            4 ERROS QUE TE <span className="text-trainer-yellow">IMPEDEM</span> DE EMAGRECER
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-200 mb-8 opacity-0 ${
              isLoaded ? "animate-fade-in delay-200" : ""
            }`}
          >
            Descubra como melhorar sua rotina de treinos e ter resultados reais que 
            transformarão seu corpo e sua vida.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 opacity-0 ${
              isLoaded ? "animate-fade-in delay-300" : ""
            }`}
          >
            <a 
              href="#contato" 
              className="btn-primary flex items-center justify-center gap-2 animate-pulse-button"
            >
              <span>Quero saber mais!</span>
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#servicos" 
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <span>Ver serviços</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" aria-label="Rolar para baixo">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              transform="rotate(90 12 12)"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
