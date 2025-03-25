import React, { useRef, useEffect, useState } from "react";

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return <section id="contato" ref={sectionRef} className="relative bg-trainer-yellow section-padding overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-15" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
      
      <div className="trainer-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-6 text-trainer-black opacity-0 ${isVisible ? "animate-fade-in" : ""}`}>
            Quer ter resultados reais?
          </h2>
          
          <p className={`text-lg md:text-xl text-trainer-black mb-8 opacity-0 ${isVisible ? "animate-fade-in delay-100" : ""}`}>
            Não perca mais tempo com treinos ineficientes. 
            Comece agora mesmo sua transformação com um plano personalizado.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 opacity-0 ${isVisible ? "animate-fade-in delay-200" : ""}`}>
            <a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className="btn-secondary group flex items-center justify-center gap-2 text-lg py-4 px-8">
              
              <img src="/images/zap-white.png" alt="WhatsApp" className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Quero começar!</span>
            </a>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default CallToAction;
