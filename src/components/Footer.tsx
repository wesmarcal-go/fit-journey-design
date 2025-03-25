import React from "react";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";
const Footer: React.FC = () => {
  return <footer className="bg-trainer-black text-white py-12">
      <div className="trainer-container">
        <div className="grid md:grid-cols-3 gap-8">
          
          
          
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-trainer-yellow mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(62) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-trainer-yellow mr-3 mt-1 flex-shrink-0" size={18} />
                <span>dhesley_soares@hotmail.com</span>
              </li>
              <li className="mt-6">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-trainer-yellow text-trainer-black font-bold py-2 px-4 rounded-md inline-flex items-center hover:bg-opacity-90 transition-colors">
                  <Phone size={18} className="mr-2" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        
      </div>
    </footer>;
};
export default Footer;