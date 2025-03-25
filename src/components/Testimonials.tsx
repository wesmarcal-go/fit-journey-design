import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplayInterval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Move every 3 seconds

      return () => {
        clearInterval(autoplayInterval);
      };
    }
  }, [emblaApi]);

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
      src: "/images/cases/case01.jpg",
      alt: "Caso de Sucesso 1 - Transformação"
    },
    {
      src: "/images/cases/case02.jpg",
      alt: "Caso de Sucesso 2 - Transformação"
    },
    {
      src: "/images/cases/case03.jpg",
      alt: "Caso de Sucesso 3 - Transformação"
    },
    {
      src: "/images/cases/case04.jpg",
      alt: "Caso de Sucesso 4 - Transformação"
    },
    {
      src: "/images/cases/case05.jpg",
      alt: "Caso de Sucesso 5 - Transformação"
    },
    {
      src: "/images/cases/case06.jpg",
      alt: "Caso de Sucesso 6 - Transformação"
    },
    {
      src: "/images/cases/case07.jpg",
      alt: "Caso de Sucesso 7 - Transformação"
    }
  ];

  return (
    <section id="depoimentos" ref={sectionRef} className="section-padding bg-trainer-white w-full overflow-hidden">
      <div className="w-full">
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
            Transformações reais de pessoas como você
          </h2>
          
          <p 
            className={`text-gray-700 opacity-0 ${
              isVisible ? "animate-fade-in delay-200" : ""
            }`}
          >
            Veja o que nossos alunos compartilham sobre suas jornadas de transformação
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`flex-[0_0_280px] md:flex-[0_0_320px] opacity-0 ${
                    isVisible ? `animate-fade-in delay-${(index + 3) * 100}` : ""
                  }`}
                >
                  <div className="aspect-[3/4] w-full max-w-[280px] md:max-w-[320px] mx-auto">
                    <img
                      src={testimonial.src}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
