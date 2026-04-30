import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      id: "OSR101",
      category: "SCULPTURES",
      title: "Divine Deity Sculpture",
      description: "Hand-finished resin deity, 12 inches height. Intricate carvings, antique gold patina.",
      price: 12999,
      originalPrice: 15999,
      reviews: 28,
      images: [
        "/fiber-shiva-statue.webp",
        "/fiber-shiva-statue.webp",
        "/fiber-shiva-statue.webp"
      ]
    },
    {
      id: "OSR115",
      category: "SPIRITUAL",
      title: "Meditating Buddha Statue",
      description: "Serene Buddha in dhyana mudra. Stone textured finish, 10 inches.",
      price: 8499,
      originalPrice: 10999,
      reviews: 42,
      images: [
        "/buddha-statue.webp",
        "/buddha-statue.webp"
      ]
    },
    {
      id: "OSR108",
      category: "PILLARS & COLUMNS",
      title: "Ancient Temple Pillar",
      description: "Ancient Carved Temple Pillars 12 Inches.",
      price: 8999,
      originalPrice: 11999,
      reviews: 18,
      images: [
        "/temple-pillar.jpg",
        "/temple-pillar.jpg"
      ]
    }
  ];

  return (
    <section id="collection" className="pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 border-t border-gray-100 pt-16 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2 mb-3">
            <span className="text-[#f59e0b]">✨</span> OSR signature collection
          </h2>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Handpicked from OSR Arts &bull; original prices crossed &bull; 3 preview images
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
            Swipe arrows <span className="w-1 h-1 rounded-full bg-gray-300"></span> WhatsApp / Call for best price: +91 9666006123
          </p>
        </div>

      </div>
    </section>
  );
}
