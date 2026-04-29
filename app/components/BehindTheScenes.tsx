export default function BehindTheScenes() {
  const images = [
    { src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop", label: "Exhibition Showcase" },
    { src: "https://images.unsplash.com/photo-1611080026219-48203f7e5b61?w=800&auto=format&fit=crop", label: "Handcrafted statues" },
    { src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop", label: "Monumental deity" },
    { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop", label: "Craftsmanship in Action" },
    { src: "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=800&auto=format&fit=crop", label: "Giant Charminar" },
    { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&auto=format&fit=crop", label: "Movie Weapons" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-4xl md:text-5xl mb-4 relative inline-block">
            Behind <span className="relative z-10">the</span> Scenes
            <div className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 -z-0"></div>
          </h2>
          <p className="text-gray-500">Explore our workshop and see our craftsmen at work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-sm text-gray-700 font-medium">{img.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
