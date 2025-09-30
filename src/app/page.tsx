import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-cream-100">
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
