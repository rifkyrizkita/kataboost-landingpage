import { Card } from "@/components/ui/card";
import { Monitor } from "lucide-react";

const Demo = () => {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            See KataBoost In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan, launch, and optimize from a single dashboard
          </p>
        </div>

        <Card className="p-12 card-gradient border-0 shadow-xl hover-lift">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Monitor className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Interactive Demo Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Experience the full power of KataBoost's AI-driven interface
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Demo;