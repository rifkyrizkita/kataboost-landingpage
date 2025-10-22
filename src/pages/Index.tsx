import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <HowItWorks />
        {/* <Demo /> */}
        <Pricing />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
