
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TransformationImage {
  id: number;
  before: string;
  after: string;
  name: string;
  result: string;
}

const transformationImages: TransformationImage[] = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    after: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Rodrigo S.",
    result: "-15kg em 3 meses"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    after: "https://images.unsplash.com/photo-1535268623488-a1c50702a9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Ana P.",
    result: "+7kg de massa muscular"
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    after: "https://images.unsplash.com/photo-1472396956029-d60b0ce0ff37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Carlos M.",
    result: "Ganho de definição em 8 semanas"
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    after: "https://images.unsplash.com/photo-1721322800612-5c35075722ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Beatriz L.",
    result: "Transformação em 12 semanas"
  }
];

const BeforeAfter: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (!api) return;

    // Set auto-rotation interval
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="transformacoes" className="section-padding mt-[250px]">
      <div className="trainer-container">
        <div className="text-center mb-12">
          <h2 className={`section-title opacity-0 ${isLoaded ? "animate-fade-in delay-100" : ""}`}>
            <span className="bg-black/80 px-2 py-1 text-trainer-yellow inline-block">
              ANTES & DEPOIS
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mt-4 opacity-0 ${isLoaded ? "animate-fade-in delay-200" : ""}`}>
            Resultados reais de pessoas que transformaram seus corpos com nossos treinos personalizados
          </p>
        </div>

        <div className={`opacity-0 ${isLoaded ? "animate-fade-in delay-300" : ""}`}>
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {transformationImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-black rounded-lg p-1 overflow-hidden transform transition-all hover:scale-[1.01] hover:shadow-lg">
                    <div className="flex flex-col h-full">
                      <div className="relative flex space-x-1">
                        <div className="flex-1 relative">
                          <div className="absolute top-2 left-2 z-10 bg-black/70 text-white px-2 py-1 text-xs font-bold rounded">
                            ANTES
                          </div>
                          <img 
                            src={item.before} 
                            alt={`Antes - ${item.name}`} 
                            className="w-full aspect-[3/4] object-cover object-center rounded"
                          />
                        </div>
                        <div className="flex-1 relative">
                          <div className="absolute top-2 right-2 z-10 bg-trainer-yellow text-black px-2 py-1 text-xs font-bold rounded">
                            DEPOIS
                          </div>
                          <img 
                            src={item.after} 
                            alt={`Depois - ${item.name}`} 
                            className="w-full aspect-[3/4] object-cover object-center rounded"
                          />
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-xl">{item.name}</h3>
                        <p className="text-trainer-yellow font-semibold">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious 
                className="relative static left-0 right-auto translate-y-0 bg-black hover:bg-black/80 text-white border-trainer-yellow"
              />
              <CarouselNext 
                className="relative static right-0 left-auto translate-y-0 bg-black hover:bg-black/80 text-white border-trainer-yellow"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
