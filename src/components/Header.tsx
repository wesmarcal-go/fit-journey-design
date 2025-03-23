
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="trainer-container flex items-center md:justify-between">
        <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start">
          <a href="#inicio">
            <img 
              src="/images/logo-dhes.svg" 
              alt="FitTrainer Logo" 
              className={`transition-all duration-300 w-auto ${
                scrolled ? "h-12 md:h-14 brightness-0" : "h-16 md:h-20"
              }`}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#inicio" 
            className={`font-medium hover:text-trainer-yellow transition-colors ${
              scrolled ? "text-trainer-black" : "text-white"
            }`}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className={`font-medium hover:text-trainer-yellow transition-colors ${
              scrolled ? "text-trainer-black" : "text-white"
            }`}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className={`font-medium hover:text-trainer-yellow transition-colors ${
              scrolled ? "text-trainer-black" : "text-white"
            }`}
          >
            Serviços
          </a>
          <a 
            href="#depoimentos" 
            className={`font-medium hover:text-trainer-yellow transition-colors ${
              scrolled ? "text-trainer-black" : "text-white"
            }`}
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="btn-primary animate-pulse-button"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden flex items-center z-50 ${
            scrolled ? "text-trainer-black" : "text-white"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-trainer-white" />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu flex flex-col items-center justify-center ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8">
          <a 
            href="#inicio" 
            className="font-bold text-xl text-trainer-white hover:text-trainer-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className="font-bold text-xl text-trainer-white hover:text-trainer-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#servicos" 
            className="font-bold text-xl text-trainer-white hover:text-trainer-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#depoimentos" 
            className="font-bold text-xl text-trainer-white hover:text-trainer-yellow transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="mt-6 bg-trainer-yellow text-trainer-black font-bold py-3 px-8 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
