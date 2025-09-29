import { Card } from "@/components/ui/card";
import { ArrowRight, Link, Download, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Link className="h-10 w-10 text-primary" />,
      title: "Connect",
      description: "Link your Meta and TikTok advertising accounts in seconds."
    },
    {
      icon: <Download className="h-10 w-10 text-primary" />,
      title: "Import",
      description: "Automatically import your existing campaign data and performance metrics."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Generate",
      description: "AI creates optimized campaigns with winning ad blueprints."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and transform your ad campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="p-8 text-center hover-lift card-gradient border-0 shadow-custom mb-4 w-full">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center mt-8">
                  {/* <ArrowRight className="h-6 w-6 text-primary" /> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;