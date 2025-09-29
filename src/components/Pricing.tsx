import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            Early Access — Limited Spots
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Join the Beta Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Sign up for early access. Free during beta. Priority support for early adopters.
          </p>
        </div>

        <Card className="p-12 card-gradient border-0 shadow-xl max-w-2xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Beta Access
            </h3>
            <div className="text-4xl font-bold mb-2">
              <span className="gradient-text">Free</span>
            </div>
            <p className="text-muted-foreground">During beta period</p>
          </div>

          <div className="space-y-4 mb-8 text-left">
            {[
              "Full access to AI campaign creation",
              "Meta & TikTok integration",
              "Priority customer support",
              "Direct feedback channel to development team",
              "Exclusive early adopter pricing for future plans"
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg font-semibold hover-lift shadow-glow"
          >
            Request Early Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;