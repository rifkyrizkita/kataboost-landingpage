import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 py-16 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img 
              src="/assets/logo/kataboost logo in black.png" 
              alt="KataBoost" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              High-performance campaign planning for Meta and TikTok ads. Built for marketers who value their time.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide text-sm">Product</h3>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#product" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Features
              </a>
              <a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Process
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide text-sm">Legal</h3>
            <div className="flex flex-col gap-3">
              <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Cookies
              </Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-500">
              © 2025 KataBoost. All rights reserved.
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              Built for performance marketers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;