import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShopHero from "../components/shop/ShopHero";
import ProductGrid from "../components/shop/ProductGrid";

export default function Shop() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-primary/30">
      <Navbar />
      <ShopHero />
      <ProductGrid />
      <Footer />
    </main>
  );
}
