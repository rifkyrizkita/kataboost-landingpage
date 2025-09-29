import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-4xl mx-auto text-center animate-fade-in mt-8">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          KataBoost
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
          AI-Powered Media Planning for Meta & TikTok Ads
        </h2>

        {/* Lead Paragraph */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          KataBoost blends the AI creative prompt to create, simulate, and
          optimize ad campaigns on Meta and TikTok — faster, more measurable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold hover-lift shadow-xl hover:shadow-2xl backdrop-blur-sm"
          >
            Request A Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            variant="glass"
            size="lg"
            className="text-lg font-semibold hover-lift"
          >
            <Play className="mr-2 h-5 w-5" />
            See How It Works
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20">
          <div className="animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;