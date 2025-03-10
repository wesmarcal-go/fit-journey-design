
import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  delay: number;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  image, name, role, quote, rating, delay, isVisible 
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-lg opacity-0 ${
        isVisible ? `animate-fade-in delay-${delay}` : ""
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img 
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < rating ? "#FFD100" : "none"} 
            className={i < rating ? "text-trainer-yellow" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      name: "Ana Silva",
      role: "Perdeu 15kg em 6 meses",
      quote: "Os treinos personalizados fizeram toda diferença na minha jornada. Finalmente encontrei um método que funciona!",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
      name: "Carlos Oliveira",
      role: "Ganhou 8kg de massa muscular",
      quote: "O acompanhamento nutricional aliado aos treinos foi fundamental para meu ganho de massa muscular.",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80",
      name: "Juliana Costa",
      role: "Melhorou condicionamento físico",
      quote: "Mesmo treinando online, o suporte foi excelente. Consegui melhorar minha saúde e disposição diária.",
      rating: 4
    }
  ];

  return (
    <section id="depoimentos" ref={sectionRef} className="section-padding bg-trainer-white">
      <div className="trainer-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div 
            className={`inline-block bg-trainer-yellow px-4 py-1 mb-4 rounded opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            <span className="text-sm font-bold">DEPOIMENTOS</span>
          </div>
          
          <h2 
            className={`section-title opacity-0 ${
              isVisible ? "animate-fade-in delay-100" : ""
            }`}
          >
            O que meus alunos dizem
          </h2>
          
          <p 
            className={`text-gray-700 opacity-0 ${
              isVisible ? "animate-fade-in delay-200" : ""
            }`}
          >
            Histórias reais de pessoas que transformaram seus corpos e suas vidas 
            com meus programas de treinamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              rating={testimonial.rating}
              delay={(index + 3) * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
