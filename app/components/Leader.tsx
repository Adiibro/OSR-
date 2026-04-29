export default function Leader() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-gray-200 rounded-[2rem] overflow-hidden shadow-xl lg:w-[85%] mx-auto lg:mr-auto lg:ml-0">
             <img src="https://topaitechnologies.in/wp-content/uploads/2026/04/sathibabu2.jpg" alt="Sathi Babu" className="w-full h-full object-cover" />
          </div>

          <div className="lg:pl-4">
            <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold tracking-wide rounded-full mb-6">
              Meet Our Visionary Leader
            </span>
            <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-3">Sathi Babu</h2>
            <h3 className="text-primary font-medium text-lg mb-8">Founder &amp; Director &middot; OSR Arts</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 25 years of experience in the Telugu film industry, Sathi Babu has established OSR Arts as a premier name in film production support and event management.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed">
              From Tollywood movie sets to high-profile private events, his artistic vision transforms countless productions.
            </p>

            <div className="grid grid-cols-2 gap-y-10 gap-x-8">
              <div>
                <h4 className="heading-serif text-3xl md:text-4xl mb-2">200+</h4>
                <p className="text-sm text-gray-500">major films</p>
              </div>
              <div>
                <h4 className="heading-serif text-3xl md:text-4xl mb-2">25 yrs</h4>
                <p className="text-sm text-gray-500">Industry Recognition</p>
              </div>
              <div>
                <h4 className="heading-serif text-3xl md:text-4xl mb-2">Hundreds</h4>
                <p className="text-sm text-gray-500">High-profile events</p>
              </div>
              <div>
                <h4 className="heading-serif text-3xl md:text-4xl mb-2">∞</h4>
                <p className="text-sm text-gray-500">Artistic Direction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
