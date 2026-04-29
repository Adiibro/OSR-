"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThreeDPrintingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Gods", "Animals", "Arches", "Statues", "Temple"];

  const itemsList = [
    // Gods
    { name: "5 Head Snake", category: "Gods", img: "/3d-printing/Gods/137 5 Head Snake.png" },
    { name: "Lord Lakshmi Devi", category: "Gods", img: "/3d-printing/Gods/144 Lord Lakshmi Devi.png" },
    { name: "Balaji 009", category: "Gods", img: "/3d-printing/Gods/Balaji 009.png" },
    { name: "Ganesha 093", category: "Gods", img: "/3d-printing/Gods/Ganesha 093.png" },
    { name: "Garuda Sitting Pose", category: "Gods", img: "/3d-printing/Gods/Garuda Siting pose 77.png" },
    { name: "Kurma Avataram", category: "Gods", img: "/3d-printing/Gods/Kurma_Avataram 123.png" },
    { name: "Lord Ganesha 014", category: "Gods", img: "/3d-printing/Gods/Lord Ganesha 014.png" },
    { name: "Narasimha Swamy", category: "Gods", img: "/3d-printing/Gods/Narasimhaswami 080.png" },
    { name: "Ram Lalla", category: "Gods", img: "/3d-printing/Gods/Ram Lalla 079.png" },

    // Animals
    { name: "Peacock Sitting Pose", category: "Animals", img: "/3d-printing/Animals/110 Peacock Sitting Pose.png" },
    { name: "OX Half Model", category: "Animals", img: "/3d-printing/Animals/149 OX Half.png" },
    { name: "Calf Cow", category: "Animals", img: "/3d-printing/Animals/Calf Cow 065.png" },
    { name: "Royal Cow", category: "Animals", img: "/3d-printing/Animals/Cow 064.png" },
    { name: "Sacred Elephant", category: "Animals", img: "/3d-printing/Animals/Elephant 063.png" },
    { name: "Sacred Nandi", category: "Animals", img: "/3d-printing/Animals/Nandi 021.png" },

    // Arches
    { name: "Traditional Arch 003", category: "Arches", img: "/3d-printing/Arches/Arch 003.png" },
    { name: "Traditional Arch 042", category: "Arches", img: "/3d-printing/Arches/Arch 042.png" },
    { name: "Traditional Arch 043", category: "Arches", img: "/3d-printing/Arches/Arch 043.png" },
    { name: "Intricate Arch 091", category: "Arches", img: "/3d-printing/Arches/Arch 091.png" },
    { name: "Mandapa Frame 136", category: "Arches", img: "/3d-printing/Arches/Frame 136.png" },

    // Statues
    { name: "Chinese Guardian Lion", category: "Statues", img: "/3d-printing/Statues/138 Chinese Guardian Lion.png" },
    { name: "Dance Women Statue", category: "Statues", img: "/3d-printing/Statues/Dance Women Statue 109.png" },
    { name: "Dancing Lady", category: "Statues", img: "/3d-printing/Statues/Dancing Lady 070.png" },
    { name: "Lion Sitting Pose", category: "Statues", img: "/3d-printing/Statues/Lion Sitting Pose 111.png" },

    // Temple
    { name: "Elephant Stair Stone", category: "Temple", img: "/3d-printing/Temple/Elephant stair stone 067.png" },
    { name: "Gopurum Pillar", category: "Temple", img: "/3d-printing/Temple/Gopurum 094.png" },
    { name: "Makarathoranan", category: "Temple", img: "/3d-printing/Temple/Makarathoranan 081.png" },
    { name: "Royal Theme Panel", category: "Temple", img: "/3d-printing/Temple/Royal Theme 114.png" },
    { name: "TEMPLE FRAME 073", category: "Temple", img: "/3d-printing/Temple/TEMPLE FRAME 073.png" },
  ];

  const filteredItems = activeCategory === "All" 
    ? itemsList 
    : itemsList.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] selection:bg-primary/30">
      <Navbar />

      {/* Hero Card */}
      <section className="pt-32 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111111] rounded-[40px] shadow-sm text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="flex-1 text-left relative z-10">
              <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase mb-3 block">
                Next-Gen Rapid Prototyping
              </span>
              <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                Precision<br />3D Printing
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                From intricate spiritual iconography to grand cinematic props. We translate pure data into tangible artistry.
              </p>
              <a 
                href="https://wa.me/919391136604" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                Request Custom CAD
              </a>
            </div>

            <div className="w-full md:w-1/3 aspect-square relative rounded-[32px] overflow-hidden bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b]/20 to-transparent"></div>
              <img 
                src="/3d-printing/Gods/Lord Ganesha 014.png" 
                alt="3D CAD Visualization" 
                className="w-4/5 h-4/5 object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Tabs */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold tracking-wide py-2 px-6 rounded-full transition-all border ${
                  activeCategory === cat 
                    ? "bg-[#1E293B] text-white border-[#1E293B]" 
                    : "bg-white text-gray-500 border-gray-200/80 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-[24px] p-3 shadow-sm border border-gray-100/60 hover:shadow-md transition-shadow">
                <div className="aspect-square w-full rounded-[18px] overflow-hidden bg-gray-50 flex items-center justify-center mb-3 p-2 relative group">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-gray-100 text-[8px] font-bold text-gray-500 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-[11px] font-bold text-[#1E293B] text-center mb-2 px-1 truncate">
                  {item.name}
                </h3>
                <a 
                  href={`https://wa.me/919391136604?text=${encodeURIComponent(`Hello OSR Arts, I am interested in inquiring about the price for the 3D Printed ${item.name}. Image Reference: https://osrarts.com${item.img}`)}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white text-[10px] font-bold py-1.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm w-full mt-auto"
                >
                  Get Best Price
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
