import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StatuesPage() {
  const statuesList = Array.from({ length: 71 }, (_, i) => ({
    name: `Divine Craft #${i + 1}`,
    img: `/statues/bommalu-images-${i}.jpg`,
    id: i
  }));

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1E293B] selection:bg-primary/30">
      <Navbar />

      {/* Hero Card */}
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight mb-4">
                OSR Arts<br />Statues
              </h1>
              <p className="text-gray-400 text-xs md:text-sm font-medium border-l border-gray-200 pl-3 mb-8">
                World-class modeling & sculptural heritage — inquire for bespoke pieces.
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
                src="https://images.unsplash.com/photo-1620002093398-8f16081af5ee?q=80&w=600&auto=format&fit=crop" 
                alt="Saraswati Statue" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Private Collection */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-serif text-2xl font-bold text-[#1E293B] mb-2">
            The Private Collection
          </h2>
          <p className="text-[10px] text-gray-400 font-medium mb-12">
            Each piece handcrafted — inquire directly via WhatsApp
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {statuesList.map((item, idx) => (
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
