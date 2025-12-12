import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Problem = () => {
  const { elementRef: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { elementRef: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { elementRef: card3Ref, isVisible: card3Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-sm font-bold text-primary uppercase tracking-wide">The Problem</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-gray-900 dark:text-white mb-6">
            Campaign setup is
            <br />
            <span className="text-primary">broken</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div ref={card1Ref as any} className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 group scroll-animate-fade-up ${card1Visible ? 'visible' : ''} relative overflow-hidden`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">3hrs</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-3">Wasted on setup</div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Manual campaign building. Copy-pasting settings. Switching between platforms. Every. Single. Time.
            </p>
          </div>

          <div ref={card2Ref as any} className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 group scroll-animate-fade-up delay-100 ${card2Visible ? 'visible' : ''} relative overflow-hidden`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">5+</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tools to manage</div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Spreadsheets, ad managers, analytics dashboards, creative tools. Data scattered everywhere.
            </p>
          </div>

          <div ref={card3Ref as any} className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-500 group scroll-animate-fade-up delay-200 ${card3Visible ? 'visible' : ''} relative overflow-hidden`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            <div className="relative text-6xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">?</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-3">Pure guesswork</div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              No idea what works until you spend budget. Learning from past campaigns? Good luck finding that data.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Stop wasting time. Start building campaigns that <span className="text-primary">perform</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;