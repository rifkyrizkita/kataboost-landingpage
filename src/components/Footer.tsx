import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t-2 border-black/10 dark:border-white/10 py-16 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img 
              src="/assets/logo/kataboost logo in black.png" 
              alt="KataBoost" 
              className="h-12 w-auto mb-4 dark:hidden drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            />
            <img 
              src="/assets/logo/Kataboost_logo_white_corrected.png" 
              alt="KataBoost" 
              className="h-12 w-auto mb-4 hidden dark:block drop-shadow-[0_2px_4px_rgba(255,255,255,0.1)]"
            />
            <p className="text-black/60 dark:text-white/60 max-w-md leading-relaxed mb-6">
              High-performance campaign planning for Meta and TikTok ads. Built for marketers who value their time.
            </p>
            
            {/* CTA */}
            <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[#def104] hover:bg-[#def104]/90 text-black font-bold uppercase tracking-wide text-sm transition-all shadow-[0_4px_16px_rgba(222,241,4,0.25)] hover:shadow-[0_6px_20px_rgba(222,241,4,0.35)] hover:scale-105 inline-flex items-center gap-2 group">
                <span>Get Started Free</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </a>
            
            {/* Trust badges */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
                <svg className="w-4 h-4 text-[#def104]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Secure OAuth</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-black/50 dark:text-white/50">
                <svg className="w-4 h-4 text-[#def104]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4 uppercase tracking-wide text-sm">Product</h3>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                About
              </a>
              <a href="#product" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Features
              </a>
              <a href="#services" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Process
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-black dark:text-white mb-4 uppercase tracking-wide text-sm">Legal</h3>
            <div className="flex flex-col gap-3">
              <Link to="/terms" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Cookies
              </Link>
              <Link to="/contact" className="text-black/60 dark:text-white/60 hover:text-[#def104] transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t-2 border-black/10 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-black/50 dark:text-white/50">
              © 2025 KataBoost. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-black/50 dark:text-white/50">
                Built for performance marketers
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#def104] hover:bg-[#def104]/10 transition-all group">
                  <svg className="w-4 h-4 text-black/60 dark:text-white/60 group-hover:text-[#def104]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;