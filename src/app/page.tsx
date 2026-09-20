import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader"; // Import Preloader

export default function Home() {
  return (
    <main className="min-h-screen bg-kari-dark selection:bg-kari-gold selection:text-kari-dark relative">
      <Preloader /> {/* Place it at the very top */}
      <Navbar />
      <Hero />
      <Quality />
      <Products />
      <Footer />
    </main>
  );
}