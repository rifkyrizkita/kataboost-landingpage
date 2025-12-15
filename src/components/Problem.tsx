import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Problem = () => {
  const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { elementRef: card3Ref, isVisible: card3Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-white dark:bg-black relative overflow-hidden transition-colors">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(222,241,4,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-6 py-2 border-2 border-black/10 dark:border-white/10 bg-[#def104]/5 mb-6">
            <span className="text-sm font-bold text-black dark:text-white uppercase tracking-widest">The Problem</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-black dark:text-white mb-6">
            Campaign setup is
            <br />
            <span className="text-black dark:text-[#def104]">broken</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div ref={card1Ref as any} className={`bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 p-8 hover:border-[#def104] hover:scale-105 transition-all duration-500 group scroll-animate-fade-up ${card1Visible ? 'visible' : ''} relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]`}>
            <div className="absolute -inset-1 bg-[#def104]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-black dark:text-[#def104] mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(222,241,4,0.3)]">3hrs</div>
            <div className="text-xl font-bold text-black dark:text-white mb-3">Wasted on setup</div>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Manual campaign building. Copy-pasting settings. Switching between platforms. Every. Single. Time.
            </p>
          </div>

          <div ref={card2Ref as any} className={`bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 p-8 hover:border-[#def104] hover:scale-105 transition-all duration-500 group scroll-animate-fade-up delay-100 ${card2Visible ? 'visible' : ''} relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]`}>
            <div className="absolute -inset-1 bg-[#def104]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-black dark:text-[#def104] mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(222,241,4,0.3)]">5+</div>
            <div className="text-xl font-bold text-black dark:text-white mb-3">Tools to manage</div>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              Spreadsheets, ad managers, analytics dashboards, creative tools. Data scattered everywhere.
            </p>
          </div>

          <div ref={card3Ref as any} className={`bg-gradient-to-br from-white to-white/50 dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border-2 border-black/10 dark:border-white/10 p-8 hover:border-[#def104] hover:scale-105 transition-all duration-500 group scroll-animate-fade-up delay-200 ${card3Visible ? 'visible' : ''} relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(222,241,4,0.25),0_4px_16px_rgba(0,0,0,0.1)]`}>
            <div className="absolute -inset-1 bg-[#def104]/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-black dark:text-[#def104] mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(222,241,4,0.3)]">?</div>
            <div className="text-xl font-bold text-black dark:text-white mb-3">Pure guesswork</div>
            <p className="text-black/60 dark:text-white/60 leading-relaxed">
              No idea what works until you spend budget. Learning from past campaigns? Good luck finding that data.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-black dark:text-white">
            Stop wasting time. Start building campaigns that <span className="text-black dark:text-[#def104]">perform</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;