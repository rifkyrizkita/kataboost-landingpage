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
    <section id="product" className="py-32 px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1.5px,transparent_1.5px)] dark:bg-[linear-gradient(to_right,rgba(222,241,4,0.04)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(222,241,4,0.04)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-6 py-2 border-2 border-black/10 dark:border-white/20 bg-[#def104]/5 dark:bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-sm font-bold text-black dark:text-white uppercase tracking-widest">Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-black dark:text-white">
            Performance
            <br />
            <span className="text-black dark:text-[#def104]">unleashed</span>
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
              className={`group relative scroll-animate-fade-up ${visibles[index] ? 'visible' : ''}`}
            >
              <div className="transform transition-transform duration-500 hover:scale-[1.045] hover:-translate-y-1 bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 hover:border-[#def104] dark:hover:border-[#def104] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="relative">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="text-6xl md:text-7xl font-black text-black dark:text-white mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">{benefit.metric}</div>
                      <div className="text-xs font-black text-black/60 dark:text-white/60 uppercase tracking-[0.2em]">{benefit.label}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
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