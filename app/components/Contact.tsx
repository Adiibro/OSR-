import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 mt-12 max-w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/75 z-10 rounded-t-[3rem]" />
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
          alt="Contact background" 
          className="w-full h-full object-cover rounded-t-[3rem]" 
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center pt-8">
        <h2 className="heading-serif text-4xl md:text-5xl !text-white mb-6">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl font-medium">
          Let&apos;s discuss how OSR Arts can support your next film production or event.
        </p>

        <a 
          href="https://wa.me/919391136604?text=Hello OSR Arts, I would like to inquire about a Custom Design setup." 
          target="_blank" 
          rel="noreferrer" 
          className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-colors inline-flex items-center shadow-lg hover:shadow-xl mb-12 uppercase"
        >
          Contact for custom design <ArrowRight className="w-4 h-4 ml-2" />
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-gray-300 font-medium">
          <span>Aziznagar Hyderabad</span>
          <span className="hidden md:inline text-gray-500">|</span>
          <span>+91 9391136604</span>
          <span className="hidden md:inline text-gray-500">|</span>
          <span>ssevents77@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
