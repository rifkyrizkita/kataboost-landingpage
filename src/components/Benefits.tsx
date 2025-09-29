import { Card } from "@/components/ui/card";
import { Zap, Database, Brain, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Streamline Campaign Creation",
      description: "Create optimized campaigns in minutes, not hours, with AI-powered automation."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Centralized Data",
      description: "All your campaign data in one place for better insights and decision making."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Optimization",
      description: "Smart recommendations based on real performance data and market trends."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accessible for All",
      description: "User-friendly interface designed for marketers of all skill levels."
    }
  ];

  return (
    <section id="product" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Key Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your advertising workflow with powerful AI-driven features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover-lift card-gradient border-0 shadow-custom animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;