import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-colors">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-glow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDuration: '4s'}}></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="relative z-10 w-full px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main content - centered */}
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm animate-slide-down">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Beta Now Open</span>
              </div>
              <div className="w-px h-4 bg-primary/30"></div>
              <span className="text-sm text-gray-400">50+ Teams Already Building</span>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter">
                <div className="text-gray-900 dark:text-white animate-fade-in-up">
                  Stop Planning.
                </div>
                <div className="mt-2 animate-fade-in-up delay-100">
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Start Launching.
                  </span>
                </div>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200 font-light">
                AI-powered campaign builder for Meta & TikTok. <br className="hidden md:block" />
                <span className="text-gray-900 dark:text-white font-semibold">15 minutes</span> from idea to live ads.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white h-16 px-10 text-lg font-bold uppercase tracking-wide group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-3">
                    Get Free Access
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-white/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 h-16 px-10 text-lg font-bold uppercase tracking-wide backdrop-blur-sm">
                See How It Works
              </Button>
            </div>

            {/* Stats bar */}
            <div className="flex items-center justify-center gap-3 md:gap-16 pt-8 animate-fade-in-up delay-400">
              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform">15min</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">Setup</div>
              </div>

              <div className="w-px h-12 md:h-16 bg-gray-300 dark:bg-white/20"></div>

              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1 group-hover:scale-110 transition-transform">2</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">Platforms</div>
              </div>

              <div className="w-px h-12 md:h-16 bg-gray-300 dark:bg-white/20"></div>

              <div className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1 group-hover:scale-110 transition-transform">AI</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">Powered</div>
              </div>
            </div>

            {/* Visual showcase */}
            <div className="pt-16 animate-scale-in delay-500">
              <div className="relative max-w-4xl mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-blue-500/20 to-transparent blur-3xl"></div>
                
                {/* Main visual */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900/90 dark:to-black/90 border border-gray-200 dark:border-white/10 backdrop-blur-xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300 group">
                      <div className="text-primary text-xs uppercase tracking-widest mb-3 font-bold">Meta Ads</div>
                      <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">$12K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Spend</div>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-500">ROAS</span>
                          <span className="text-green-400 font-bold">4.2x</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 group">
                      <div className="text-blue-500 dark:text-blue-400 text-xs uppercase tracking-widest mb-3 font-bold">TikTok Ads</div>
                      <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">$8K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Spend</div>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-500">CTR</span>
                          <span className="text-green-400 font-bold">6.8%</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 group">
                      <div className="text-purple-600 dark:text-purple-400 text-xs uppercase tracking-widest mb-3 font-bold">AI Insights</div>
                      <div className="text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">87%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600 dark:text-gray-500">Time Saved</span>
                          <span className="text-green-400 font-bold">12hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-glow"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-glow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;