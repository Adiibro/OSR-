import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "3D Printing Services",
      description: "High-precision additive manufacturing for prototypes, cinematic props, and custom components with rapid turnaround.",
      linkText: "Explore 3D Printing",
      image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
      href: "/3d-printing"
    },
    {
      title: "Modeling Services",
      description: "Detailed scale models, architectural maquettes, and creative conceptual models for film and event pre-visualization.",
      linkText: "View Modeling",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg",
      href: "/movies-craft"
    },
    {
      title: "Event Management Services",
      description: "End-to-end event planning, production design, and flawless execution for corporate, cultural, and private celebrations.",
      linkText: "Plan Your Event",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
      href: "/event-management"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="heading-serif text-4xl md:text-5xl pb-4">Explore Services</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary"></div>
          </div>
          <p className="text-gray-500 text-lg">Specialized offerings tailored to your vision</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="aspect-[3/2] relative w-full">
                <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                <h3 className="heading-serif text-2xl lg:text-3xl mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link href={service.href} className="inline-flex items-center text-primary hover:text-primary-hover text-sm font-semibold transition-colors group mt-auto">
                  <span className="underline decoration-2 underline-offset-4">{service.linkText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
