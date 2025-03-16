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
      className="relative min-h-screen flex items-center pt-12 px-4 md:px-0"
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/bg-hero.png')`,
        }}
      ></div>
      
      <div className="trainer-container flex flex-col md:flex-row items-start justify-between relative z-10 w-full mt-[70px]">
        <div className="max-w-xl z-10 mb-8 md:mb-0 text-center md:text-left">
          <h1 
            className={`text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight opacity-0 ${
              isLoaded ? "animate-fade-in delay-100" : ""
            }`}
          >
            <span className="bg-black/80 px-2 py-1 box-decoration-clone">
              Treinos que geram <span className="text-trainer-yellow">RESULTADOS</span></span>
          </h1>
          
          <p 
            className={`text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 opacity-0 ${
              isLoaded ? "animate-fade-in delay-200" : ""
            }`}
          >
            Descubra como melhorar sua rotina de treinos e ter resultados reais que 
            transformarão seu corpo e sua vida.
          </p>
          
          <div 
            className={`flex justify-center md:justify-start opacity-0 ${
              isLoaded ? "animate-fade-in delay-300" : ""
            }`}
          >
            <a 
              href="#contato" 
              className="btn-primary flex items-center justify-center gap-2 animate-pulse-button w-full sm:w-auto px-8"
            >
              <span>Quero saber mais!</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div 
          className={`relative w-full md:w-1/2 flex justify-center mt-8 md:mt-0 opacity-0 ${
            isLoaded ? "animate-fade-in delay-400" : ""
          }`}
        >
          <div className="relative w-full max-w-md md:max-w-none">
            <img 
              src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Personal Trainer" 
              className="w-[400px] md:w-[500px] h-[500px] md:h-[600px] object-cover object-top rounded-lg z-10 relative"
            />
            
            <div className="absolute -bottom-4 md:-bottom-6 left-4 md:-left-6 lg:-left-6 right-32 md:right-32 lg:right-32 py-3 md:py-4 lg:py-4 px-4 md:px-6 lg:px-6 bg-black/80 backdrop-blur-sm border border-trainer-yellow/30 rounded-lg z-20">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-6 bg-trainer-yellow"></div>
                <p className="text-trainer-yellow text-xs md:text-sm lg:text-sm font-bold">SEU TREINADOR</p>
              </div>
              <h3 className="text-white text-lg md:text-xl lg:text-xl font-bold mt-1">Dhesley Marçal</h3>
              <p className="text-gray-300 text-xs md:text-sm lg:text-sm">CREF: 123456-G/SP • Especialista em Transformação Corporal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
