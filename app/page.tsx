import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Leader from "./components/Leader";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import BehindTheScenes from "./components/BehindTheScenes";
import TrustedBy from "./components/TrustedBy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900 selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Leader />
      <Expertise />
      <Portfolio />
      <BehindTheScenes />
      <TrustedBy />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919666006123" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 z-50 font-medium"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12.031 0C5.385 0 .001 5.385.001 12.032c0 2.12.551 4.195 1.6 6.015L.015 24l6.103-1.602a11.967 11.967 0 005.913 1.562h.005c6.645 0 12.029-5.384 12.029-12.031C24.065 5.385 18.681 0 12.031 0zm0 21.996h-.004a9.972 9.972 0 01-5.074-1.385l-.364-.216-3.774.99 1.008-3.682-.237-.377a9.96 9.96 0 01-1.528-5.298c0-5.503 4.478-9.982 9.98-9.982 5.503 0 9.982 4.479 9.982 9.982 0 5.502-4.479 9.981-9.983 9.981zM17.5 14.542c-.301-.151-1.782-.88-2.059-.981-.277-.101-.478-.151-.679.151-.202.302-.781.982-.958 1.183-.177.201-.354.226-.655.075-1.428-.718-2.457-1.405-3.393-2.923-.204-.329.197-.306.495-.9.1-.201.05-.377-.025-.528-.075-.151-.679-1.636-.93-2.241-.244-.59-.492-.51-.679-.52-.176-.008-.378-.01-.58-.01-.202 0-.528.075-.805.377-.277.302-1.056 1.031-1.056 2.515s1.082 2.917 1.233 3.118c.151.201 2.128 3.249 5.155 4.553 1.954.839 2.76.924 3.791.776 1.157-.168 3.528-1.442 4.032-2.836.504-1.393.504-2.585.354-2.836-.15-.251-.553-.401-.854-.551z"/>
        </svg>
        Get Quote
      </a>
    </main>
  );
}
