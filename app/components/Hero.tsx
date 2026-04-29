import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-[#0a0a0a]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
         <img src="https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg" alt="Cinematic background" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase mb-4">
            ART SATHI BABU &middot; OSR ARTS
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl heading-serif !text-white mb-6 leading-tight">
            Bringing Cinematic <br />
            <span className="text-primary">Visions</span> to Life.
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl mx-auto font-medium tracking-wide">
            From film sets to grand events, we transform concepts into stunning realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link href="#services" className="bg-primary hover:bg-primary-hover px-8 py-3 rounded-full text-white text-xs font-bold tracking-wider transition-colors text-center w-fit mx-auto sm:mx-0">
              EXPLORE SERVICES
            </Link>
            <Link href="#contact" className="px-8 py-3 rounded-full text-white text-xs font-bold tracking-wider border border-white hover:bg-white/10 transition-colors text-center w-fit mx-auto sm:mx-0">
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
