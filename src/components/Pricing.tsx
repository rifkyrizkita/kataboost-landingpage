import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Core",
      budget: "$25K-50K",
      monthly: 250,
      annual: 3000,
      features: [
        "Campaign Planning & Setup",
        "Meta & TikTok Integration",
        "AI-Powered Audience Targeting",
        "Basic Analytics Dashboard",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      budget: "$50K-125K",
      monthly: 550,
      annual: 6600,
      popular: true,
      features: [
        "Everything in Core",
        "Advanced AI Recommendations",
        "Multi-Campaign Management",
        "Custom Audience Segments",
        "Priority Support",
        "Quarterly Strategy Reviews"
      ]
    },
    {
      name: "Scale",
      budget: "$125K-250K",
      monthly: 850,
      annual: 10200,
      features: [
        "Everything in Growth",
        "Dedicated Account Manager",
        "Advanced Attribution Models",
        "API Access",
        "White-Label Reporting",
        "24/7 Priority Support"
      ]
    },
    {
      name: "Enterprise",
      budget: "$250K-500K",
      monthly: 1500,
      annual: 18000,
      features: [
        "Everything in Scale",
        "Custom Integrations",
        "Dedicated Success Team",
        "Advanced Security & Compliance",
        "Custom AI Model Training",
        "Unlimited Users"
      ]
    },
    {
      name: "Elite",
      budget: "By Request",
      custom: true,
      features: [
        "Everything in Enterprise",
        "Fully Customized Solution",
        "On-Site Training & Support",
        "Custom SLA Agreements",
        "Executive Strategy Sessions",
        "Priority Feature Development"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative overflow-hidden bg-gray-50 dark:bg-black py-32 px-6 lg:px-8 min-h-screen transition-colors">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-glow" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Pricing</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
            Plans That
            <br />
            <span className="text-primary">Scale With You</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your ad spend. All plans include core features with increasing levels of support and customization.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.slice(0, 3).map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/90 dark:to-black/90 border ${
                tier.popular ? 'border-primary' : 'border-gray-200 dark:border-white/10'
              } p-8 hover:border-primary/50 transition-all duration-500 group animate-fade-in-up`}
              style={{animationDelay: `${(index + 1) * 100}ms`}}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Budget: {tier.budget}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gray-900 dark:text-white">${tier.monthly}</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-primary">
                    ${tier.annual.toLocaleString()}/year • Save {Math.round(((tier.monthly * 12 - tier.annual) / (tier.monthly * 12)) * 100)}%
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wide h-12 group-hover:scale-105 transition-transform">
                  Get Started
                </Button>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Tiers */}
        <div className="grid md:grid-cols-2 gap-6">
          {tiers.slice(3).map((tier, index) => (
            <div
              key={tier.name}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/90 dark:to-black/90 border border-gray-200 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-500 group animate-fade-in-up"
              style={{animationDelay: `${(index + 4) * 100}ms`}}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Budget: {tier.budget}</div>
                </div>

                {!tier.custom ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-gray-900 dark:text-white">${tier.monthly}</span>
                        <span className="text-gray-600 dark:text-gray-400">/month</span>
                      </div>
                      <div className="text-sm text-primary">
                        ${tier.annual?.toLocaleString()}/year • Save {tier.annual && tier.monthly ? Math.round(((tier.monthly * 12 - tier.annual) / (tier.monthly * 12)) * 100) : 0}%
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wide h-12 group-hover:scale-105 transition-transform">
                      Contact Sales
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="py-4">
                      <div className="text-3xl font-black text-primary mb-2">Custom Pricing</div>
                      <div className="text-sm text-gray-400">Tailored to your specific needs</div>
                    </div>
                    <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-wide h-12 group-hover:scale-105 transition-transform">
                        Request Quote
                      </Button>
                    </a>
                  </>
                )}

                <div className="pt-6 border-t border-white/10 space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '600ms'}}>
          <p className="text-gray-400 mb-4">All plans include 14-day free trial • No credit card required</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-sm text-gray-500">
              <span className="text-white font-bold">Custom enterprise solutions</span> available for budgets over $500K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;