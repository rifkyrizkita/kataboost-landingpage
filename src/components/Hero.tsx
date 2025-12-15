import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showKata, setShowKata] = useState(false);
  const [showBoost, setShowBoost] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show "Kata" after 200ms
    setTimeout(() => setShowKata(true), 200);
    
    // Show "Boost" after 900ms
    setTimeout(() => setShowBoost(true), 900);
    
    // Hide splash screen after 2.8 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 2800);

    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <div 
        className={`fixed inset-0 z-[99999] bg-black flex items-center justify-center transition-all duration-700 ${showSplash ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="relative">
          {/* Background glow */}
          <div className={`absolute inset-0 blur-[120px] bg-primary/10 transition-opacity duration-1000 ${showBoost ? 'opacity-100' : 'opacity-0'}`}></div>
          
          <div className="relative">
            <img 
              src="/assets/logo/Kataboost_logo_white_corrected.png" 
              alt="KataBoost" 
              className={`w-[600px] md:w-[800px] lg:w-[1000px] h-auto transition-all duration-1000 ${showBoost ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </div>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-[#def104]/10 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#def104]/8 rounded-full blur-[120px] animate-float" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#def104]/5 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '6s'}}></div>
      </div>

      {/* Refined grid pattern with fade */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_45%,black,transparent)]"></div>
      
      <div className={`relative z-10 w-full px-6 lg:px-8 py-32 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Headline Section */}
          <div className="space-y-8 mb-16 animate-fade-in-up">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-[#def104]/10 blur-xl"></div>
              <div className="relative px-5 py-2.5 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-2 border-black/10 dark:border-white/10">
                <span className="text-xs font-black text-black dark:text-white uppercase tracking-[0.3em]">AI-Powered Campaign Builder</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black dark:text-white leading-[0.95] drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
              Launch Winning
              <br />
              Ads <span className="relative inline-block">
                <span className="relative z-10 text-black/40 dark:text-white/70">In 15 Minutes</span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-[#def104]/30 shadow-[0_4px_16px_rgba(222,241,4,0.3)]"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-3xl leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              Build and optimize Meta & TikTok campaigns with AI that learns from your data. 
              <span className="block mt-2 text-black dark:text-white font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.08)]">No planning. No guesswork. Just results.</span>
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-wrap items-center gap-5 mb-24 animate-fade-in-up delay-100">
            <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="relative bg-[#def104] hover:bg-[#def104] text-black h-16 px-12 text-base font-black uppercase tracking-wide group overflow-hidden shadow-[0_10px_40px_rgba(222,241,4,0.35),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_50px_rgba(222,241,4,0.5),0_8px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-2 border-black/30 dark:border-white/30 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white hover:text-black dark:hover:text-white hover:border-[#def104] hover:bg-[#def104]/10 h-16 px-12 text-base font-black uppercase tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(222,241,4,0.2)]">
              Watch Demo
            </Button>
            <div className="text-sm text-black/50 dark:text-white/50 ml-2">
              <span className="block font-medium">✓ No credit card required</span>
            </div>
          </div>

          {/* Stats Grid - Enhanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 animate-fade-in-up delay-200">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#def104]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 hover:border-[#def104] transition-all duration-500 group-hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-3 group-hover:text-[#def104] transition-colors">4.2x</div>
                <div className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wider font-bold">Average ROAS</div>
                <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                  <div className="text-xs text-black/40 dark:text-white/40">Meta & TikTok</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#def104]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 hover:border-[#def104] transition-all duration-500 group-hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-3 group-hover:text-[#def104] transition-colors">6.8%</div>
                <div className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wider font-bold">Average CTR</div>
                <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                  <div className="text-xs text-black/40 dark:text-white/40">Industry Leading</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#def104]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 hover:border-[#def104] transition-all duration-500 group-hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]">
                <div className="text-4xl md:text-5xl font-black text-black dark:text-white mb-3 group-hover:text-[#def104] transition-colors">15min</div>
                <div className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wider font-bold">Setup Time</div>
                <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                  <div className="text-xs text-black/40 dark:text-white/40">Fully Automated</div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#def104]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-[#def104]/30 dark:border-[#def104]/20 hover:border-[#def104] transition-all duration-500 group-hover:scale-105 shadow-[0_6px_24px_rgba(222,241,4,0.2),0_4px_12px_rgba(0,0,0,0.08)] group-hover:shadow-[0_16px_48px_rgba(222,241,4,0.35),0_8px_20px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block w-2 h-2 bg-[#def104] rounded-full animate-pulse"></span>
                  <div className="text-4xl md:text-5xl font-black text-black dark:text-white group-hover:text-[#def104] transition-colors">24/7</div>
                </div>
                <div className="text-xs text-black/60 dark:text-white/60 uppercase tracking-wider font-bold">AI Optimization</div>
                <div className="mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                  <div className="text-xs text-black/40 dark:text-white/40">Always Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Badges - Enhanced */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-300">
            <div className="text-sm text-black/50 dark:text-white/50 font-medium uppercase tracking-wider">Integrated Platforms</div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#def104]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative px-6 py-3 bg-white dark:bg-[#def104]/10 backdrop-blur-sm border-2 border-black/10 dark:border-white/20 group-hover:border-[#def104] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_24px_rgba(222,241,4,0.25)]">
                  <span className="text-sm font-black text-black dark:text-white uppercase tracking-wider">Meta Ads</span>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#def104]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative px-6 py-3 bg-white dark:bg-[#def104]/10 backdrop-blur-sm border-2 border-black/10 dark:border-white/20 group-hover:border-[#def104] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_24px_rgba(222,241,4,0.25)]">
                  <span className="text-sm font-black text-black dark:text-white uppercase tracking-wider">TikTok Ads</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;