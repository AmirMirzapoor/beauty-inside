import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import StructuredData from "@/components/common/StructuredData";

// هدر و فوتر به Layout منتقل شدند

export default function Home() {
  return (
    <>
      {/* اسکیمای LocalBusiness را فقط در صفحه اصلی (یا صفحه تماس) تزریق می‌کنیم */}
      <StructuredData type="LocalBusiness" />
      
      {/* استفاده از تگ article یا section برای سمنتیک بودن */}
      <article>
        <Hero />
        
        {/* اضافه کردن ID برای اسکرول نرم */}
        <section id="services">
          <Services />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="about">
          <About />
        </section>
      </article>
    </>
  );
}