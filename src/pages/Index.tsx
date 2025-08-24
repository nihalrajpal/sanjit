import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientsSlider  from "@/components/ClientsSlider";
import Certificate from "@/components/certficate";
import { PremiumHomeCleaning } from "@/components/premium-home-cleaning";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PremiumHomeCleaning/>
      <Services />
      <About />
      <Certificate/>
      <ClientsSlider/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
