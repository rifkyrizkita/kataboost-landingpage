import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorks = () => {
  const { elementRef: step1Ref, isVisible: step1Visible } = useScrollAnimation();
  const { elementRef: step2Ref, isVisible: step2Visible } = useScrollAnimation();
  const { elementRef: step3Ref, isVisible: step3Visible } = useScrollAnimation();

  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#def104]/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(222,241,4,0.08)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-[#def104]"></div>
            <span className="text-sm font-bold text-black dark:text-[#def104] uppercase tracking-widest">Workflow</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black dark:text-white mb-6">
            Three steps to
            <br />
            <span className="text-black dark:text-[#def104]">launch</span>
          </h2>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-2xl">
            From connection to deployment in minutes. No complexity. No friction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-[#def104] via-[#def104]/50 to-transparent"></div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div ref={step1Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left ${step1Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 rounded-2xl bg-[#def104] flex items-center justify-center shadow-[0_8px_24px_rgba(222,241,4,0.4)] hover:scale-110 hover:shadow-[0_12px_32px_rgba(222,241,4,0.5)] transition-all duration-300">
                <span className="text-2xl font-black text-black">01</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-black/5 dark:bg-[#def104]/10 border border-black/20 dark:border-[#def104]/30 text-xs font-bold text-black dark:text-[#def104] uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    Connect
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white">
                    Link your accounts
                  </h3>
                  <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
                    Secure OAuth integration with Meta and TikTok. One-click authentication. Your credentials never touch our servers.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#def104]"></div>
                      <span className="text-sm text-black/60 dark:text-white/60 uppercase">30 seconds</span>
                    </div>
                    <div className="w-px h-4 bg-black/20 dark:bg-white/20"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#def104]"></div>
                      <span className="text-sm text-black/60 dark:text-white/60 uppercase">Secure</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] border-2 border-black/10 dark:border-white/10 p-8 backdrop-blur-sm hover:border-[#def104] transition-all duration-500 animate-fade-in-right delay-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(222,241,4,0.2)]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#def104]/10 border-2 border-[#def104]/30 hover:bg-[#def104]/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#def104]/20 flex items-center justify-center">
                          <span className="text-xl">f</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black dark:text-white">Meta</div>
                          <div className="text-xs text-black/60 dark:text-white/60">Facebook & Instagram</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-[#def104] animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black/10 dark:bg-white/10 flex items-center justify-center">
                          <span className="text-xl">◐</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black dark:text-white">TikTok</div>
                          <div className="text-xs text-black/60 dark:text-white/60">TikTok For Business</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-[#def104] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div ref={step2Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left delay-300 ${step2Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 rounded-2xl bg-[#def104] flex items-center justify-center shadow-[0_8px_24px_rgba(222,241,4,0.4)] hover:scale-110 hover:shadow-[0_12px_32px_rgba(222,241,4,0.5)] transition-all duration-300">
                <span className="text-2xl font-black text-black">02</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-black/5 dark:bg-[#def104]/10 border border-black/20 dark:border-[#def104]/30 text-xs font-bold text-black dark:text-[#def104] uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    Generate
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white">
                    AI builds your campaign
                  </h3>
                  <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
                    Answer simple questions about your product, audience, and goals. Our AI analyzes your data and generates optimized campaign structures.
                  </p>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#def104]"></div>
                      <span className="text-sm text-black/60 dark:text-white/60">Smart targeting recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#def104]"></div>
                      <span className="text-sm text-black/60 dark:text-white/60">Budget optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#def104]"></div>
                      <span className="text-sm text-black/60 dark:text-white/60">Creative angle suggestions</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] border-2 border-black/10 dark:border-white/10 p-8 backdrop-blur-sm hover:border-[#def104] transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(222,241,4,0.2)]">
                  <div className="space-y-6">
                    {/* Processing animation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#def104] animate-pulse"></div>
                        <div className="text-xs text-black dark:text-[#def104] uppercase tracking-wider font-bold">AI Processing</div>
                      </div>
                      <div className="relative h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-[#def104] rounded-full animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    {/* Stats grid */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between p-3 bg-[#def104]/10 border-l-2 border-[#def104]">
                        <span className="text-sm text-black/60 dark:text-white/60">Audiences Created</span>
                        <span className="text-2xl font-black text-black dark:text-[#def104]">23</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/5 dark:bg-white/5 border-l-2 border-black/20 dark:border-white/20">
                        <span className="text-sm text-black/60 dark:text-white/60">Ad Sets Generated</span>
                        <span className="text-2xl font-black text-black dark:text-white">12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-black/5 dark:bg-white/5 border-l-2 border-black/20 dark:border-white/20">
                        <span className="text-sm text-black/60 dark:text-white/60">Variant Combinations</span>
                        <span className="text-2xl font-black text-black dark:text-white">48</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div ref={step3Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left delay-600 ${step3Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 rounded-2xl bg-[#def104] flex items-center justify-center shadow-[0_8px_24px_rgba(222,241,4,0.4)] hover:scale-110 hover:shadow-[0_12px_32px_rgba(222,241,4,0.5)] transition-all duration-300">
                <span className="text-2xl font-black text-black">03</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-black/5 dark:bg-[#def104]/10 border border-black/20 dark:border-[#def104]/30 text-xs font-bold text-black dark:text-[#def104] uppercase tracking-wider shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    Deploy
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white">
                    Launch & optimize
                  </h3>
                  <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed">
                    Review, adjust, and deploy campaigns directly to your ad accounts. Monitor real-time performance and get AI-powered optimization recommendations.
                  </p>
                  <div className="pt-4">
                    <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-3 bg-[#def104] hover:bg-[#def104]/90 text-black font-bold uppercase tracking-wide transition-all flex items-center gap-2 group shadow-[0_6px_20px_rgba(222,241,4,0.3)] hover:shadow-[0_8px_28px_rgba(222,241,4,0.4)] hover:scale-105 rounded-full">
                        <span>See it in action</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] border-2 border-black/10 dark:border-white/10 p-8 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-black/60 dark:text-white/60 uppercase tracking-wider">Campaign Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#def104] animate-pulse"></div>
                        <span className="text-sm font-bold text-black dark:text-[#def104]">LIVE</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 p-4">
                        <div className="text-2xl font-black text-black dark:text-white mb-1">$2.4K</div>
                        <div className="text-xs text-black/60 dark:text-white/60 uppercase">Spend</div>
                      </div>
                      <div className="bg-white dark:bg-black border-2 border-black/10 dark:border-white/10 p-4">
                        <div className="text-2xl font-black text-black dark:text-[#def104] mb-1">4.2x</div>
                        <div className="text-xs text-black/60 dark:text-white/60 uppercase">ROAS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;