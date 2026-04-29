export default function BehindTheScenes() {
  const images = [
    { src: "/bts/86d379b2bc58e9ed2228c9226d254614.jpg", label: "Workshop Progress" },
    { src: "/bts/Screenshot_20250516_080844_Instagram.jpg", label: "Production Floor" },
    { src: "/bts/Screenshot_20250516_080914_Instagram.jpg", label: "Behind the set" },
    { src: "/bts/Screenshot_20250516_080922_Instagram.jpg", label: "Weapon Prop assembly" },
    { src: "/bts/Screenshot_20250516_080935_Instagram.jpg", label: "Statue Molding" },
    { src: "/bts/Screenshot_20250516_080953_Instagram.jpg", label: "Creative Process" },
    { src: "/bts/cf274131260b277d621cd0cc5aec92d0.jpg", label: "Assembly detailing" },
    { src: "/bts/fd61f57414ead0ed818c618ebb7ca198.jpg", label: "Traditional Framing" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <h2 className="heading-serif text-4xl md:text-5xl pb-4">Behind the Scenes</h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-primary"></div>
          </div>
          <p className="text-gray-500">Explore our workshop and see our craftsmen at work</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3 border border-gray-100 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-300">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <p className="text-xs text-gray-500 text-center font-medium group-hover:text-[#D91627] transition-colors duration-300">{img.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
