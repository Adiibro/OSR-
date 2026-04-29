import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, TechFlow",
      content: "NovaAI transformed our data processing pipeline. What used to take days now takes seconds, and the predictive accuracy is simply unmatched.",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Director of Operations, Nexus",
      content: "The integration was flawless. Their edge AI solutions allowed us to deploy smart analytics directly to our manufacturing floors with zero latency.",
      initials: "MC"
    },
    {
      name: "Elena Rodriguez",
      role: "CEO, DataSphere",
      content: "A game changer for our business. The cybersecurity AI modules detected threats we didn't even know existed. Highly recommended.",
      initials: "ER"
    }
  ];

  return (
    <section className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Innovators</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl relative">
              <div className="flex text-blue-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
