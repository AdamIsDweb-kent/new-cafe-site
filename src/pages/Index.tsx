import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Menu />
      <About />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
