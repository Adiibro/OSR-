import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, CheckCircle2, Eye, Target, Palette, BarChart, Film, Award, Diamond } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold tracking-wider mb-6">
            EST. 1989 • TELUGU FILM INDUSTRY
          </div>
          
          <h1 className="heading-serif text-5xl md:text-6xl font-bold text-[#1e293b] leading-tight mb-4">
            OSR Designs<br />
            <span className="text-[#D91627]">Beyond Structures, Stories.</span>
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            With 35+ years of legacy in film sets, grand events & 3D installations, we turn every space into an experience.
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="tel:+919391136604" className="bg-[#D91627] hover:bg-[#b0121e] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-colors inline-flex items-center gap-2 shadow-md">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href="https://wa.me/919391136604" target="_blank" rel="noreferrer" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-colors inline-flex items-center gap-2">
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/></svg> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid Info */}
      <section className="pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* About OSR */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 bg-[#fef2f2] text-[#D91627] rounded-2xl flex items-center justify-center mb-6">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4">About OSR Designs</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                At <strong className="text-gray-900 font-semibold">OSR Designs</strong>, we believe that every space has the potential to tell a story. With over <strong className="text-gray-900 font-semibold">35 years of experience in the Telugu film industry</strong>, we have built a legacy rooted in creativity, craftsmanship, and reliability. Our journey has been shaped by a deep passion for design and a commitment to delivering visually striking and structurally sound environments.
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                From cinema sets to large-scale events, our work reflects a seamless blend of artistic vision and technical expertise. Over the years, we have successfully contributed to <strong className="text-gray-900 font-semibold">20+ major projects and events</strong>, earning recognition as a trusted name in the industry.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#FEF9F3] rounded-3xl p-8 border border-orange-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-6">Why Choose Us</h3>
              
              <ul className="space-y-3.5 mb-8">
                {[
                  "35+ years of industry expertise",
                  "Strong foundation in film & event production",
                  "Skilled team – creative & technical mastery",
                  "Commitment to quality, innovation, reliability",
                  "Proven track record: 20+ large-scale projects"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-orange-200/50 pt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-orange-600">20+</span>
                <span className="text-xs text-gray-500 font-medium">Major projects & events delivered</span>
              </div>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 bg-[#fef2f2] text-[#D91627] rounded-2xl flex items-center justify-center mb-6">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4">What We Do</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-6">
                OSR Designs specializes in <strong className="text-gray-900 font-semibold">end-to-end design and execution</strong>, offering complete solutions tailored to client needs. Our expertise spans across multiple sectors:
              </p>
              
              <div className="space-y-4 w-full">
                {[
                  { title: "Event Design & Execution", desc: "Immersive spaces that leave lasting impressions." },
                  { title: "Film & Set Design", desc: "High-quality set construction & 3D solutions for productions." },
                  { title: "3D Design & Fabrication", desc: "From detailed visualization to precise fabrication." },
                  { title: "Thematic Installations & Exhibitions", desc: "Unique environments for exhibitions and public spaces." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91627] mt-1.5 flex-shrink-0"></span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <BarChart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-6">Our Approach</h3>
              
              <div className="space-y-5 w-full">
                {[
                  { title: "Understanding the Vision", desc: "Close collaboration to capture ideas." },
                  { title: "Creative Development", desc: "Innovative concepts balancing aesthetics & function." },
                  { title: "Precision Execution", desc: "High-quality production with attention to every detail." },
                  { title: "Timely Delivery", desc: "Respecting deadlines without compromising standards." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50/50 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-800">{item.title}</h4>
                      <p className="text-[10px] text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-10 h-10 bg-[#fef2f2] text-[#D91627] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-3">Our Vision</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                To continue pushing creative boundaries and become a leading force in design and execution, delivering innovative and impactful experiences across industries.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start">
              <div className="w-10 h-10 bg-red-50 text-[#D91627] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-3">Our Mission</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                To provide high-quality, creative, and reliable design solutions that bring ideas to life, exceed client expectations, and build long-lasting professional relationships.
              </p>
            </div>

            {/* Solid CTA Card */}
            <div className="bg-[#111111] text-white rounded-3xl p-8 flex flex-col items-start shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-white/10 transition-all duration-500"></div>
              <div className="w-10 h-10 bg-white/10 text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                <Diamond className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">Let's Build Something Extraordinary</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                At OSR Designs, we don't just create structures—we create experiences. Whether it's a film set, an event space, or a large-scale installation, we are committed to turning your vision into reality.
              </p>
              <a href="#contact" className="mt-auto text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2">
                Get in touch with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Strip */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="heading-serif text-3xl font-bold text-[#1e293b] mb-2">Our Portfolio</h2>
              <p className="text-xs text-gray-400 font-medium max-w-lg leading-relaxed">
                Every project reflects our commitment to creativity, precision, and excellence. Over <strong className="text-gray-600 font-semibold">35 years of experience</strong>, design meets execution across film, events, and large-scale installations.
              </p>
            </div>
            <p className="text-[10px] text-gray-400 font-medium italic tracking-wide md:text-right max-w-xs">
              From concept to completion, we transform ideas into immersive visual experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Cinema Sets", label: "Film Set Designs", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=400&auto=format&fit=crop" },
              { title: "Grand Events", label: "Large-Scale Events", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=400&auto=format&fit=crop" },
              { title: "Installations", label: "Thematic Installations", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" },
              { title: "3D Fabrication", label: "3D Design & Fab", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-3 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg tracking-wider">
                    {item.title}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-gray-800 text-center">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-3xl font-bold text-[#1e293b] mb-2">Contact Us</h2>
            <p className="text-xs text-gray-400 font-medium">We'd love to hear from you. Whether you're planning a project or seeking a custom install.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            
            {/* Contact Info (Left) */}
            <div className="md:col-span-2 flex flex-col bg-gray-50/50 rounded-2xl p-6 border border-gray-50">
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Phone</h4>
                  <a href="tel:+919391136604" className="text-xs font-bold text-gray-800 hover:text-[#D91627]">+91 9391136604</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Email</h4>
                  <a href="mailto:osrevents77@gmail.com" className="text-xs font-bold text-gray-800 hover:text-[#D91627]">osrevents77@gmail.com</a>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Location</h4>
                  <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                    OSR traders, Aziz nagar, Hyderabad,<br />Telangana, India
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Business Hours</h4>
                  <p className="text-xs font-medium text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs font-medium text-gray-600">Sunday: 10:00 AM - 1:00 PM</p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200/50">
                <h4 className="text-xs font-bold text-gray-800 mb-2">Let's Work Together</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed mb-4">
                  Have a project in mind? Share your ideas with us, and we'll help you bring them to life.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-[#D91627] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#D91627] transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form (Right) */}
            <form className="md:col-span-3 space-y-4">
              <h3 className="text-base font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <span className="text-[#25D366]">💬</span> Send Us a Message
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Full Name *</label>
                  <input type="text" placeholder="Your full name" required className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D91627] bg-gray-50/30" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Phone Number *</label>
                  <input type="tel" placeholder="Your mobile number" required className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D91627] bg-gray-50/30" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D91627] bg-gray-50/30" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Project Type</label>
                <select className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D91627] bg-gray-50/30">
                  <option>Film Set Design</option>
                  <option>Large-Scale Event</option>
                  <option>3D Installation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Message *</label>
                <textarea rows={3} placeholder="Describe your vision, event, or film set..." required className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#D91627] bg-gray-50/30 resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#EAB308] hover:bg-[#ca9b00] text-[#1e293b] font-bold text-xs py-3 rounded-xl shadow-md transition-all duration-300">
                Send via WhatsApp &rarr;
              </button>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
