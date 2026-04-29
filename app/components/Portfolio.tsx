"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      tag: "HISTORICAL EPIC",
      title: "Ancient Temple Set",
      description: "Complete period-accurate set creation for an award-winning historical drama series.",
      image: "https://topaitechnologies.in/wp-content/uploads/2026/04/ancient-temple.jpg"
    },
    {
      tag: "MYTHOLOGICAL DRAMA",
      title: "Divine Deity Installation",
      description: "Immersive mythological set featuring a majestic Lord Shiva statue with dramatic lighting and atmospheric elements for a blockbuster film.",
      image: "https://topaitechnologies.in/wp-content/uploads/2026/04/divine-diety.jpg"
    },
    {
      tag: "FILM",
      title: "Large-Scale Studio Set",
      description: "Comprehensive set construction for a major production, showcasing our team's expertise in creating complex environments from the ground up.",
      image: "https://topaitechnologies.in/wp-content/uploads/2026/04/studio-set.jpg"
    },
    {
      tag: "PERIOD DRAMA",
      title: "Royal Court Assembly",
      description: "Grand durbar hall with ornate thrones and traditional motifs.",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="heading-serif text-4xl md:text-5xl pb-4">Featured Projects</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary"></div>
          </div>
          <p className="text-gray-500 text-lg">A glimpse into our portfolio of successful collaborations</p>
        </div>

        <div className="relative bg-[#f8f8f8] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row min-h-[500px] mb-12 shadow-sm border border-gray-100">
          
          {/* Image Side */}
          <div className="md:w-1/2 relative h-[300px] md:h-auto">
             <img 
                key={currentSlide}
                src={projects[currentSlide].image} 
                alt={projects[currentSlide].title} 
                className="w-full h-full object-cover md:absolute inset-0 animate-fade-in" 
             />
             <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors z-10"
             >
               <ChevronLeft className="w-5 h-5 text-gray-800" />
             </button>
          </div>
          
          {/* Text Side */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative min-h-[400px]">
             <div key={currentSlide} className="animate-fade-in">
               <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                 {projects[currentSlide].tag}
               </p>
               <h3 className="heading-serif text-3xl md:text-4xl mb-6">
                 {projects[currentSlide].title}
               </h3>
               <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
                 {projects[currentSlide].description}
               </p>
               <Link href="#" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-semibold text-sm w-fit transition-colors inline-block shadow-md">
                 VIEW PROJECT
               </Link>
             </div>

             <button 
                onClick={nextSlide}
                className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#005bb5] text-white rounded-full items-center justify-center shadow-lg hover:bg-[#004494] transition-colors z-10"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {projects.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 w-10 ${currentSlide === index ? 'bg-primary' : 'bg-gray-400/50 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link href="#" className="inline-flex items-center justify-center border border-gray-800 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold text-gray-900 transition-colors uppercase tracking-wide">
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
