import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Calendar } from "lucide-react";

export default function EventManagementPage() {
  const serviceCategories = [
    { title: "Mehendi", img: "/events/Bridal-Henna-Designs.jpg" },
    { title: "Sangeet", img: "/events/sangeet.jpg" },
    { title: "Reception", img: "/events/recep[tion.jpg" },
    { title: "Haldhi", img: "/events/haldi-photoshoot-scaled.webp" },
    { title: "Birthday decor", img: "/events/birthday decor.jpg" },
    { title: "Home celebrations", img: "/events/home celebration.jpg" },
    { title: "Bachelor parties", img: "/events/bachelors partyh.jpg" },
    { title: "Mocktail party decor", img: "/events/mocktail.jpg" },
    { title: "Others decorations", img: "/events/other decorations.jpg" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] selection:bg-primary/30">
      <Navbar />

      {/* Hero Section with Video */}
      <section className="pt-28 pb-16 bg-[#F3EFE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4">
                OSR Arts • Est 2014
              </p>
              <h1 className="heading-serif text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#1E293B]">
                Crafting<br />Timeless<br />Celebrations.
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-8">
                Bespoke event management for the moments that matter most. From grand weddings to intimate house celebrations.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-gray-700">Book your date</span>
                <a href="tel:+919391136604" className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="https://wa.me/919391136604" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#1ebd59] transition-colors">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] shadow-xl border border-white/20 bg-black">
              <video 
                src="/videos/Video-844.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                poster="/events/recep[tion.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Middle Video Banner */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] shadow-lg">
            <video 
              src="/videos/Video-844.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              poster="/events/sangeet.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-serif text-3xl font-bold text-[#1E293B] mb-12 text-center">Comprehensive Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {serviceCategories.map((item, idx) => (
              <div key={idx} className="relative group rounded-[32px] overflow-hidden aspect-[4/5] shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-gray-100">
        <span className="text-xs font-bold text-gray-700">Book your date</span>
        <a href="tel:+919391136604" className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-sm">
          <Phone className="w-4 h-4" />
        </a>
        <a href="https://wa.me/919391136604" target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#1ebd59] transition-colors shadow-sm">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/>
          </svg>
        </a>
      </div>

      <Footer />
    </main>
  );
}
