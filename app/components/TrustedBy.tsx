export default function TrustedBy() {
  const partners = [
    { name: "TOLLYWOOD STUDIOS", icon: "🎬" },
    { name: "ANNNAPURNA", icon: "✨" },
    { name: "RAMOJI", icon: "🏛️" },
    { name: "SURESH PRODUCTIONS", icon: "🎥" },
    { name: "VEDA EVENTS", icon: "✨" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="heading-serif text-3xl md:text-4xl mb-3">
          Trusted By Industry Leaders
        </h2>
        <p className="text-gray-500 text-sm mb-12">
          Our clients include major studios, production houses, and event organizers
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all cursor-default">
              <span className="text-xl">{partner.icon}</span>
              <span className="font-bold text-gray-800 tracking-wider text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
