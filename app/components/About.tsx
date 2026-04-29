export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-serif text-4xl md:text-5xl mb-4">
              Industry Leaders
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              in Film Production &amp; Event Management
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              OSR Arts delivers precision, creativity, and reliability to studios and event organizers worldwide.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              For over a decade, we&apos;ve been the trusted partner for major studios, production houses, and event planners who demand excellence. Our comprehensive services span from creating immersive film sets to orchestrating flawless events of any scale.
            </p>

            <div className="flex gap-12 border-l-2 border-primary pl-6">
              <div>
                <h4 className="heading-serif text-3xl mb-1">10+</h4>
                <p className="text-sm text-gray-500">Years of Excellence</p>
              </div>
              <div>
                <h4 className="heading-serif text-3xl mb-1">200+</h4>
                <p className="text-sm text-gray-500">Major Productions</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
              alt="Team collaborating" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
