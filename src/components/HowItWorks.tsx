import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HowItWorks = () => {
  const { elementRef: step1Ref, isVisible: step1Visible } = useScrollAnimation();
  const { elementRef: step2Ref, isVisible: step2Visible } = useScrollAnimation();
  const { elementRef: step3Ref, isVisible: step3Visible } = useScrollAnimation();

  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors">
      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#1e40af15_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-16 bg-primary"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Workflow</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 dark:text-white mb-6">
            Three steps to
            <br />
            <span className="text-primary">launch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            From connection to deployment in minutes. No complexity. No friction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div ref={step1Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left ${step1Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/50 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-black">01</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-bold text-primary uppercase tracking-wider">
                    Connect
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                    Link your accounts
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Secure OAuth integration with Meta and TikTok. One-click authentication. Your credentials never touch our servers.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-500 uppercase">30 seconds</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-500 uppercase">Secure</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-in-right delay-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="text-xl">f</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">Meta</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Facebook & Instagram</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <span className="text-xl">◐</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">TikTok</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">TikTok For Business</div>
                        </div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div ref={step2Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left delay-300 ${step2Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/50 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-black">02</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-bold text-primary uppercase tracking-wider">
                    Generate
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                    AI builds your campaign
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Answer simple questions about your product, audience, and goals. Our AI analyzes your data and generates optimized campaign structures.
                  </p>
                  <div className="space-y-2 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Smart targeting recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Budget optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Creative angle suggestions</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  <div className="space-y-6">
                    {/* Processing animation */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div className="text-xs text-primary uppercase tracking-wider font-bold">AI Processing</div>
                      </div>
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-primary rounded-full animate-pulse" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    {/* Stats grid */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/10 to-transparent border-l-2 border-primary rounded">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Audiences Created</span>
                        <span className="text-2xl font-black text-primary">23</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-300/30 dark:from-gray-700/30 to-transparent border-l-2 border-gray-400 dark:border-gray-500 rounded">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Ad Sets Generated</span>
                        <span className="text-2xl font-black text-gray-700 dark:text-gray-300">12</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-300/30 dark:from-gray-700/30 to-transparent border-l-2 border-gray-400 dark:border-gray-500 rounded">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Variant Combinations</span>
                        <span className="text-2xl font-black text-gray-700 dark:text-gray-300">48</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div ref={step3Ref as any} className={`relative pl-20 md:pl-40 scroll-animate-fade-left delay-600 ${step3Visible ? 'visible' : ''}`}>
              <div className="absolute left-0 md:left-12 top-0 w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/50 hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-black text-black">03</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs font-bold text-green-400 uppercase tracking-wider">
                    Deploy
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                    Launch & optimize
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Review, adjust, and deploy campaigns directly to your ad accounts. Monitor real-time performance and get AI-powered optimization recommendations.
                  </p>
                  <div className="pt-4">
                    <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide transition-all flex items-center gap-2 group">
                        <span>See it in action</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">Campaign Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm font-bold text-green-400">LIVE</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-white/5 rounded-lg p-4">
                        <div className="text-2xl font-black text-gray-900 dark:text-white mb-1">$2.4K</div>
                        <div className="text-xs text-gray-600 dark:text-gray-500 uppercase">Spend</div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-white/5 rounded-lg p-4">
                        <div className="text-2xl font-black text-green-400 mb-1">4.2x</div>
                        <div className="text-xs text-gray-600 dark:text-gray-500 uppercase">ROAS</div>
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