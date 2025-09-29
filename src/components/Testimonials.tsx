import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "KataBoost transformed our ad performance. What used to take hours now takes minutes, and our ROI has increased by 40% since we started using their AI recommendations.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStartup Inc.",
      initials: "SC"
    },
    {
      quote: "The centralized dashboard is a game-changer. Having all our Meta and TikTok campaigns in one place with AI optimization suggestions has streamlined our entire workflow.",
      author: "Michael Rodriguez",
      role: "Performance Marketing Manager", 
      company: "E-commerce Pro",
      initials: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real marketers who've transformed their ad campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 hover-lift card-gradient border-0 shadow-custom animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;