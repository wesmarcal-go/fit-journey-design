
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
        background: `linear-gradient(45deg, #3551a4, #31cdb0), url('/lovable-uploads/adfb0dac-0570-48ba-a87e-82fa41b27a1d.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="trainer-container flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl z-10 mb-10 md:mb-0">
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
            TREINOS QUE GERAM <span className="text-trainer-yellow">RESULTADOS</span>: DO INICIANTE AO AVANÇADO
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white mb-8 opacity-0 ${
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
        
        <div 
          className={`relative md:w-1/2 flex justify-center opacity-0 ${
            isLoaded ? "animate-fade-in delay-400" : ""
          }`}
        >
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Personal Trainer" 
              className="w-auto h-[500px] object-cover object-center rounded-lg z-10 relative"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-trainer-yellow/30 to-transparent rounded-lg"></div>
            
            <div className="absolute -bottom-6 -left-6 right-12 py-4 px-6 bg-black/80 backdrop-blur-sm border border-trainer-yellow/30 rounded-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-6 bg-trainer-yellow"></div>
                <p className="text-trainer-yellow text-sm font-bold">SEU TREINADOR</p>
              </div>
              <h3 className="text-white text-xl font-bold mt-1">Carlos Silva</h3>
              <p className="text-gray-300 text-sm">CREF: 123456-G/SP • Especialista em Transformação Corporal</p>
            </div>
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
