import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MandapasPage() {
  const mandapasList = [
    { name: "Mandap Style 1", img: "/mandapas/5YM_0590.JPG" },
    { name: "Mandap Style 2", img: "/mandapas/5YM_0593.JPG" },
    { name: "Mandap Style 3", img: "/mandapas/5YM_0597.JPG" },
    { name: "Mandap Style 4", img: "/mandapas/5YM_0599 (2).JPG" },
    { name: "Mandap Style 5", img: "/mandapas/Copy of KKP_6039 (2).JPG" },
    { name: "Mandap Style 6", img: "/mandapas/Copy of KKP_6040 (2).JPG" },
    { name: "Mandap Style 7", img: "/mandapas/Copy of KKP_6042 (2).JPG" },
    { name: "Mandap Style 8", img: "/mandapas/DSC02302.JPG" },
    { name: "Mandap Style 9", img: "/mandapas/DSC02303.JPG" },
    { name: "Mandap Style 10", img: "/mandapas/DSC_0029.JPG" },
    { name: "Mandap Style 11", img: "/mandapas/DSC_0037.JPG" },
    { name: "Mandap Style 12", img: "/mandapas/DSC_0436.JPG" },
    { name: "Mandap Style 13", img: "/mandapas/DSC_4592.JPG" },
    { name: "Mandap Style 14", img: "/mandapas/DSC_5098_resize.jpg" },
    { name: "Mandap Style 15", img: "/mandapas/DSC_6246 (2).jpg" },
    { name: "Mandap Style 16", img: "/mandapas/GSS_2288.JPG" },
    { name: "Mandap Style 17", img: "/mandapas/GSS_2290.JPG" },
    { name: "Mandap Style 18", img: "/mandapas/GSS_2292.JPG" },
    { name: "Mandap Style 19", img: "/mandapas/GSS_2294 (2).JPG" },
    { name: "Mandap Style 20", img: "/mandapas/GSS_2297.JPG" },
    { name: "Mandap Style 21", img: "/mandapas/GSS_2299.JPG" },
    { name: "Mandap Style 22", img: "/mandapas/GSS_2308.JPG" },
    { name: "Mandap Style 23", img: "/mandapas/GSS_2310 (2).JPG" },
    { name: "Mandap Style 24", img: "/mandapas/GSS_2312.jpg" },
    { name: "Mandap Style 25", img: "/mandapas/GSS_2407.JPG" },
    { name: "Mandap Style 26", img: "/mandapas/GSS_3426_resize.jpg" },
    { name: "Mandap Style 27", img: "/mandapas/GSS_3441_resize.jpg" },
    { name: "Mandap Style 28", img: "/mandapas/GSS_3492_resize (2).jpg" },
    { name: "Mandap Style 29", img: "/mandapas/GSS_3496_resize.jpg" },
    { name: "Mandap Style 30", img: "/mandapas/GSS_3501_resize.jpg" },
    { name: "Mandap Style 31", img: "/mandapas/GSS_3504_resize.jpg" },
    { name: "Mandap Style 32", img: "/mandapas/GSS_3512_resize.jpg" },
    { name: "Mandap Style 33", img: "/mandapas/GSS_3524_resize.jpg" },
    { name: "Mandap Style 34", img: "/mandapas/IMG_0033.JPG" },
    { name: "Mandap Style 35", img: "/mandapas/IMG_0514.JPG" },
    { name: "Mandap Style 36", img: "/mandapas/IMG_1529.JPG" },
    { name: "Mandap Style 37", img: "/mandapas/IMG_1546.JPG" },
    { name: "Mandap Style 38", img: "/mandapas/IMG_1555.JPG" },
    { name: "Mandap Style 39", img: "/mandapas/IMG_1557.JPG" },
    { name: "Mandap Style 40", img: "/mandapas/IMG_1564.JPG" },
    { name: "Mandap Style 41", img: "/mandapas/IMG_1565.JPG" },
    { name: "Mandap Style 42", img: "/mandapas/IMG_1566.JPG" },
    { name: "Mandap Style 43", img: "/mandapas/IMG_1653.JPG" },
    { name: "Mandap Style 44", img: "/mandapas/IMG_1690.JPG" },
    { name: "Mandap Style 45", img: "/mandapas/IMG_1716.JPG" },
    { name: "Mandap Style 46", img: "/mandapas/IMG_1740.JPG" },
    { name: "Mandap Style 47", img: "/mandapas/IMG_1742.JPG" },
    { name: "Mandap Style 48", img: "/mandapas/IMG_1783.JPG" },
    { name: "Mandap Style 49", img: "/mandapas/IMG_3594.JPG" },
    { name: "Mandap Style 50", img: "/mandapas/IMG_3616.JPG" },
    { name: "Mandap Style 51", img: "/mandapas/IMG_3617.JPG" },
    { name: "Mandap Style 52", img: "/mandapas/IMG_3624.JPG" },
    { name: "Mandap Style 53", img: "/mandapas/IMG_3625.JPG" },
    { name: "Mandap Style 54", img: "/mandapas/IMG_3626.JPG" },
    { name: "Mandap Style 55", img: "/mandapas/IMG_3654.JPG" },
    { name: "Mandap Style 56", img: "/mandapas/IMG_3655.JPG" },
    { name: "Mandap Style 57", img: "/mandapas/IMG_3664.JPG" },
    { name: "Mandap Style 58", img: "/mandapas/IMG_3698.JPG" },
    { name: "Mandap Style 59", img: "/mandapas/IMG_3699.JPG" },
    { name: "Mandap Style 60", img: "/mandapas/Image_03.jpg" },
    { name: "Mandap Style 61", img: "/mandapas/P1010463.JPG" },
    { name: "Mandap Style 62", img: "/mandapas/P1040176.JPG" },
    { name: "Mandap Style 63", img: "/mandapas/P1040195.JPG" },
    { name: "Mandap Style 64", img: "/mandapas/P1070751.JPG" },
    { name: "Mandap Style 65", img: "/mandapas/P1070757.JPG" },
    { name: "Mandap Style 66", img: "/mandapas/P1070826.JPG" },
    { name: "Mandap Style 67", img: "/mandapas/P1070844.JPG" },
    { name: "Mandap Style 68", img: "/mandapas/P1070871.JPG" },
    { name: "Mandap Style 69", img: "/mandapas/P1070878.JPG" },
    { name: "Mandap Style 70", img: "/mandapas/P1070899.JPG" },
    { name: "Mandap Style 71", img: "/mandapas/P1070926.JPG" },
    { name: "Mandap Style 72", img: "/mandapas/P1070960.JPG" },
    { name: "Mandap Style 73", img: "/mandapas/P1070976.JPG" },
    { name: "Mandap Style 74", img: "/mandapas/P1070977.JPG" },
    { name: "Mandap Style 75", img: "/mandapas/P1070987.JPG" },
    { name: "Mandap Style 76", img: "/mandapas/P1080006.JPG" },
    { name: "Mandap Style 77", img: "/mandapas/RSR_9130.JPG" },
    { name: "Mandap Style 78", img: "/mandapas/RSR_9131.JPG" },
    { name: "Mandap Style 79", img: "/mandapas/SAT_8072.JPG" },
    { name: "Mandap Style 80", img: "/mandapas/SAT_8083.JPG" },
    { name: "Mandap Style 81", img: "/mandapas/_GSC5966.JPG" },
    { name: "Mandap Style 82", img: "/mandapas/_GSC6030 (2).JPG" },
    { name: "Mandap Style 83", img: "/mandapas/_GSC6030.JPG" },
    { name: "Mandap Style 84", img: "/mandapas/_GSC6031.JPG" },
    { name: "Mandap Style 85", img: "/mandapas/_GSC6032.JPG" },
    { name: "Mandap Style 86", img: "/mandapas/ban'lor 4re stage.JPG" },
    { name: "Mandap Style 87", img: "/mandapas/sai 0000.JPG" },
    { name: "Mandap Style 88", img: "/mandapas/sai 0003.JPG" },
    { name: "Mandap Style 89", img: "/mandapas/sai 0167.JPG" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] selection:bg-primary/30">
      <Navbar />

      {/* Hero Card */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-4">
                OSR Arts<br />Mandapas
              </h1>
              <p className="text-gray-400 text-xs md:text-sm font-medium border-l border-gray-200 pl-3 mb-8">
                Sacred pavilions — intricate ornament & devotion. Custom mandapas for ceremonies and temples.
              </p>
              <a 
                href="https://wa.me/919391136604" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className="w-full md:w-1/3 aspect-square relative rounded-[32px] overflow-hidden shadow-md">
              <img 
                src="/mandapas/Copy of KKP_6039 (2).JPG" 
                alt="Mandapa Stage" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Mandapa Collection */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-2xl font-bold text-[#1E293B] mb-2">
            The Mandapa Collection
          </h2>
          <p className="text-[10px] text-gray-400 font-medium mb-12">
            Each piece handcrafted — inquire directly via WhatsApp
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {mandapasList.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="aspect-[3/4] w-full rounded-[24px] overflow-hidden shadow-sm border border-gray-100/60 mb-3 bg-white">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <a 
                  href={`https://wa.me/919391136604?text=${encodeURIComponent(`Hello OSR Arts, I am interested in inquiring about the price for ${item.name}. Image Reference: https://osrarts.com${item.img}`)}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white text-[10px] font-bold py-1.5 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-sm w-full max-w-[140px]"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/>
                  </svg>
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
