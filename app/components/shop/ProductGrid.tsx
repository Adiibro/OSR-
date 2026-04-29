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
    },
    {
      id: "OSR078",
      category: "DEITY",
      title: "Ganesha Idol - Blessings",
      description: "Eco-friendly resin Ganesha, hand painted details. 8 inches.",
      price: 5699,
      originalPrice: 7499,
      reviews: 56,
      images: ["https://placehold.co/400x400/fde68a/000000?text=Ganesha+1", "https://placehold.co/400x400/fde68a/000000?text=Ganesha+2"]
    },
    {
      id: "OSR234",
      category: "MODERN ART",
      title: "Tribal Couple Sculpture",
      description: "Stylized African-inspired couple, bronze effect. 16 inches.",
      price: 11499,
      originalPrice: 13999,
      reviews: 23,
      images: ["https://placehold.co/400x400/452b1b/d4af37?text=Tribal+1", "https://placehold.co/400x400/452b1b/d4af37?text=Tribal+2"]
    },
    {
      id: "OSR188",
      category: "SCULPTURES",
      title: "Dancing Lady Figurine",
      description: "Graceful dancer in motion, brass finish. 13 inches.",
      price: 9899,
      originalPrice: 11999,
      reviews: 31,
      images: ["https://placehold.co/400x400/e6d5b8/cc5500?text=Dancer+1"]
    },
    {
      id: "OSR312",
      category: "WALL HANGING",
      title: "Geometric Bull Head",
      description: "Modern polygonal bull, resin with metallic sheen. 18 inches.",
      price: 7499,
      originalPrice: 8999,
      reviews: 17,
      images: ["https://placehold.co/400x400/1e1b4b/facc15?text=Bull+1"]
    },
    {
      id: "OSR159",
      category: "ZEN DECOR",
      title: "Serene Buddha Head",
      description: "Calm Buddha head, grey stone wash. Perfect for meditation corner.",
      price: 5299,
      originalPrice: 6999,
      reviews: 38,
      images: ["https://placehold.co/400x400/bcaaa4/000000?text=Buddha+Head+1"]
    },
    {
      id: "OSR231",
      category: "ANIMAL SCULPTURE",
      title: "Elephant Family Parade",
      description: "Three elephants in graduated sizes, textured bronze finish.",
      price: 8799,
      originalPrice: 10999,
      reviews: 22,
      images: ["https://placehold.co/400x400/5d4037/fcd34d?text=Elephants+1"]
    },
    {
      id: "OSR267",
      category: "WALL ART",
      title: "Tree of Life Wall Panel",
      description: "Intricate resin panel, hand-painted gold accents. 24 inches.",
      price: 13499,
      originalPrice: 16999,
      reviews: 15,
      images: ["https://placehold.co/400x400/1b5e20/ffffff?text=Tree+Life+1"]
    },
    {
      id: "OSR143",
      category: "DEITY",
      title: "Krishna Flute Idol",
      description: "Beautiful Krishna playing flute, peacock feather detail.",
      price: 6999,
      originalPrice: 8999,
      reviews: 47,
      images: ["https://placehold.co/400x400/1a237e/ffca28?text=Krishna+1"]
    },
    {
      id: "OSR179",
      category: "EQUESTRIAN",
      title: "Horse Bust - Majesty",
      description: "Regal horse head with flowing mane, black marble finish.",
      price: 10399,
      originalPrice: 12799,
      reviews: 27,
      images: ["https://placehold.co/400x400/212121/ffffff?text=Horse+1"]
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
