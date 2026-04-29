import { GlassWater, Clapperboard, Cuboid, Warehouse, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Expertise() {
  const expertises = [
    {
      icon: <GlassWater className="w-8 h-8 text-primary" />,
      title: "Event Management",
      description: "Corporate gatherings, private celebrations, weddings, and themed events executed with precision and flair.",
      href: "/event-management"
    },
    {
      icon: <Clapperboard className="w-8 h-8 text-primary" />,
      title: "Film Production Support",
      description: "Comprehensive support for movie sets, background elements, custom props, and large-scale set design.",
      href: "/movies-craft"
    },
    {
      icon: <Cuboid className="w-8 h-8 text-primary" />,
      title: "3D Printing",
      description: "Custom 3D-printing, from drafting design with your ideas and blending into final product with our team.",
      href: "/3d-printing"
    },
    {
      icon: <Warehouse className="w-8 h-8 text-primary" />,
      title: "Studio Supply",
      description: "Reliable asset provision and support services for major film studios and private productions.",
      href: "/3d-printing"
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-4">Our Expertise</h2>
          <p className="text-gray-500">Comprehensive solutions for film and event industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="heading-serif text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              <Link href={item.href} className="inline-flex items-center text-primary hover:text-primary-hover text-sm font-semibold transition-colors mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
