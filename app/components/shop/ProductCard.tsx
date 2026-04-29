"use client";
import { useState } from "react";
import { Phone, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface ProductProps {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  reviews: number;
  images: string[];
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white rounded-[2rem] p-4 flex flex-col xl:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      
      {/* Image Slider */}
      <div className="w-full xl:w-[45%] relative aspect-square xl:aspect-auto xl:min-h-[250px] rounded-2xl overflow-hidden bg-gray-50 group">
        <img 
          key={currentImg}
          src={product.images[currentImg]} 
          alt={product.title} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Arrows */}
        {product.images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {product.images.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all ${currentImg === idx ? 'w-4 bg-primary' : 'w-1.5 bg-gray-300'}`}></div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="w-full xl:w-[55%] flex flex-col pt-2 pb-2 pr-2">
        <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">
          {product.id} - {product.category}
        </p>
        
        <h3 className="heading-serif text-xl mb-3 text-gray-900 leading-tight">
          {product.title}
        </h3>
        
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center gap-3 mb-3">
          <span className="text-primary text-xl font-bold">₹{product.price.toLocaleString()}</span>
          <span className="text-gray-400 text-sm line-through decoration-gray-300">₹{product.originalPrice.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-1.5 mb-6">
          <div className="flex text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <span className="text-[11px] text-gray-400">({product.reviews} reviews)</span>
        </div>
        
        <div className="flex flex-col gap-2 mt-auto">
          <a href="tel:+919391136604" className="w-full bg-[#111111] hover:bg-black text-white py-2 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <a href="https://wa.me/919391136604" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#1ebd57] text-white py-2 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.976L2 22l5.187-1.339a9.92 9.92 0 004.825 1.25h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.508-4.484-9.987-9.993-9.987zm0 18.297a8.28 8.28 0 01-4.225-1.155l-.303-.18-3.14.823.839-3.06-.197-.315A8.257 8.257 0 013.68 9.98c.002-4.598 3.743-8.337 8.34-8.337 4.596 0 8.336 3.74 8.336 8.337-.001 4.599-3.742 8.337-8.344 8.337zm4.58-6.248c-.25-.125-1.488-.735-1.718-.82-.23-.083-.398-.125-.566.125-.168.25-.65 .82-.797.986-.147.167-.296.188-.546.063-.25-.125-1.06-.39-2.02-1.246-.747-.665-1.251-1.486-1.398-1.737-.148-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.167.042-.313-.02-.438-.063-.125-.567-1.366-.777-1.87-.205-.494-.413-.427-.566-.435l-.485-.008c-.167 0-.44.063-.67.313-.23.25-.88.86-.88 2.096 0 1.236.902 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.731 2.518 1.026 2.518.683 2.978.641.46-.042 1.488-.608 1.698-1.194.21-.586.21-1.088.147-1.194-.062-.106-.23-.169-.48-.294z"/></svg> WhatsApp
          </a>
        </div>
        
        <div className="mt-4 text-center">
          <Link href="#" className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover text-[10px] font-bold tracking-wider uppercase transition-colors group">
            <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform" /> View More About This
          </Link>
        </div>
      </div>
    </div>
  );
}
