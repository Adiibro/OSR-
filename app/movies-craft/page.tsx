import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function MoviesCraftPage() {
  const sections = [
    {
      id: "statues",
      title: "Statues",
      subtitle: "Timeless forms - carved to perfection",
      items: [
        { name: "Divine Form #1", img: "/statues/bommalu-images-0.jpg" },
        { name: "Divine Form #2", img: "/statues/bommalu-images-1.jpg" },
        { name: "Divine Form #3", img: "/statues/bommalu-images-2.jpg" }
      ]
    },
    {
      id: "pillars",
      title: "Pillars",
      subtitle: "Architectural majesty - strength in detail",
      items: [
        { name: "Carved Pillar #1", img: "/pillars/IMG-20240714-WA0065.jpg" },
        { name: "Carved Pillar #2", img: "/pillars/IMG-20240714-WA0097.jpg" },
        { name: "Carved Pillar #3", img: "/pillars/IMG-20240714-WA0109.jpg" }
      ]
    },
    {
      id: "weapons",
      title: "Weapons",
      subtitle: "Historic replicas - artistic arms & ceremonial pieces",
      items: [
        { name: "Movie Prop Weapon #1", img: "/weapons/IMG-20240716-WA0076.jpg" },
        { name: "Movie Prop Weapon #2", img: "/weapons/IMG-20240716-WA0077.jpg" },
        { name: "Movie Prop Weapon #3", img: "/weapons/IMG-20240716-WA0078.jpg" }
      ]
    },
    {
      id: "mandapas",
      title: "Mandapas",
      subtitle: "Sacred pavilions - intricate ornament & devotion",
      items: [
        { name: "Bespoke Mandap #1", img: "/mandapas/5YM_0590.JPG" },
        { name: "Bespoke Mandap #2", img: "/mandapas/5YM_0593.JPG" },
        { name: "Bespoke Mandap #3", img: "/mandapas/5YM_0597.JPG" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] selection:bg-primary/30">
      <Navbar />

      {/* Banner */}
      <section className="pt-28 pb-12 bg-white relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[250px] md:h-[350px] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1920&auto=format&fit=crop" 
              alt="Movies and Craft Banner" 
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/50 max-w-xl text-center">
                <p className="text-gray-800 text-xs md:text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
                  🍃 dedicately serving world-class modeling sculptures - precision & soul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section) => (
        <section key={section.id} className="py-16 bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 border-l-2 border-[#D91627] pl-4">
              <h2 className="heading-serif text-3xl font-bold text-[#1E293B]">
                {section.title}
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-medium">
                {section.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm font-bold text-gray-800 mb-4">{item.name}</h4>
                    {section.id === "statues" ? (
                      <Link href="/statues" className="text-[11px] font-bold text-[#D91627] hover:text-[#b0121e] transition-colors border border-gray-200 hover:border-[#D91627]/30 px-4 py-2 rounded-full inline-flex items-center gap-1">
                        View details &rarr;
                      </Link>
                    ) : section.id === "pillars" ? (
                      <Link href="/pillars" className="text-[11px] font-bold text-[#D91627] hover:text-[#b0121e] transition-colors border border-gray-200 hover:border-[#D91627]/30 px-4 py-2 rounded-full inline-flex items-center gap-1">
                        View details &rarr;
                      </Link>
                    ) : section.id === "weapons" ? (
                      <Link href="/weapons" className="text-[11px] font-bold text-[#D91627] hover:text-[#b0121e] transition-colors border border-gray-200 hover:border-[#D91627]/30 px-4 py-2 rounded-full inline-flex items-center gap-1">
                        View details &rarr;
                      </Link>
                    ) : section.id === "mandapas" ? (
                      <Link href="/mandapas" className="text-[11px] font-bold text-[#D91627] hover:text-[#b0121e] transition-colors border border-gray-200 hover:border-[#D91627]/30 px-4 py-2 rounded-full inline-flex items-center gap-1">
                        View details &rarr;
                      </Link>
                    ) : (
                      <button className="text-[11px] font-bold text-[#D91627] hover:text-[#b0121e] transition-colors border border-gray-200 hover:border-[#D91627]/30 px-4 py-2 rounded-full flex items-center gap-1">
                        View details &rarr;
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              {section.id === "statues" ? (
                <Link href="/statues" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm">
                  Explore all {section.title.toLowerCase()} &rarr;
                </Link>
              ) : section.id === "pillars" ? (
                <Link href="/pillars" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm">
                  Explore all {section.title.toLowerCase()} &rarr;
                </Link>
              ) : section.id === "weapons" ? (
                <Link href="/weapons" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm">
                  Explore all {section.title.toLowerCase()} &rarr;
                </Link>
              ) : section.id === "mandapas" ? (
                <Link href="/mandapas" className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm">
                  Explore all {section.title.toLowerCase()} &rarr;
                </Link>
              ) : (
                <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold px-6 py-3 rounded-full transition-colors shadow-sm">
                  Explore all {section.title.toLowerCase()} &rarr;
                </button>
              )}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
