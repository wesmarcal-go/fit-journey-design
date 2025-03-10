
import React from "react";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-trainer-black text-white py-12">
      <div className="trainer-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-trainer-yellow">FIT</span>TRAINER
            </h3>
            <p className="text-gray-400 mb-4 max-w-xs">
              Transformando vidas através de treinos personalizados e 
              orientação nutricional profissional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-trainer-yellow hover:text-trainer-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-trainer-yellow hover:text-trainer-black transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-trainer-yellow hover:text-trainer-black transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#inicio" 
                  className="text-gray-400 hover:text-trainer-yellow transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-gray-400 hover:text-trainer-yellow transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className="text-gray-400 hover:text-trainer-yellow transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  className="text-gray-400 hover:text-trainer-yellow transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-gray-400 hover:text-trainer-yellow transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-trainer-yellow mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-trainer-yellow mr-3 mt-1 flex-shrink-0" size={18} />
                <span>contato@fittrainer.com.br</span>
              </li>
              <li className="mt-6">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-trainer-yellow text-trainer-black font-bold py-2 px-4 rounded-md inline-flex items-center hover:bg-opacity-90 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FitTrainer. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-trainer-yellow transition-colors">
              Termos de Uso
            </a>
            <span className="mx-2 text-gray-500">|</span>
            <a href="#" className="text-gray-500 text-sm hover:text-trainer-yellow transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
