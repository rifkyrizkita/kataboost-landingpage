import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Benefits = () => {
  const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation();
  const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation();
  const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation();
  const { elementRef: section4Ref, isVisible: section4Visible } = useScrollAnimation();

  const benefits = [
    {
      title: "Lightning Fast Setup",
      description: "Generate complete campaign structures in 15 minutes. What used to take hours now takes minutes.",
      metric: "12x",
      label: "Faster"
    },
    {
      title: "Unified Command Center",
      description: "Meta and TikTok campaigns in one dashboard. All your data, all your insights, one place.",
      metric: "100%",
      label: "Unified"
    },
    {
      title: "AI-Powered Intelligence",
      description: "Smart recommendations based on your historical data and proven winning patterns.",
      metric: "AI",
      label: "Driven"
    },
    {
      title: "Built for Performance",
      description: "Track, optimize, and scale campaigns that actually convert. Real-time insights that matter.",
      metric: "∞",
      label: "Scalable"
    }
  ];

  return (
    <section id="product" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wide">Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-gray-900 dark:text-white">
            Performance
            <br />
            <span className="text-primary">unleashed</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const refs = [section1Ref, section2Ref, section3Ref, section4Ref];
            const visibles = [section1Visible, section2Visible, section3Visible, section4Visible];
            return (
            <div 
              key={index}
              ref={refs[index] as any}
              className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 overflow-hidden scroll-animate-fade-up delay-${(index + 1) * 100} ${visibles[index] ? 'visible' : ''}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl font-black text-gray-900 dark:text-white mb-1">{benefit.metric}</div>
                    <div className="text-sm font-bold text-primary uppercase tracking-wide">{benefit.label}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;