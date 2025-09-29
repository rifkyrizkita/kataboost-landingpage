import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">KataBoost</h2>
          <p className="text-background/80 max-w-2xl mx-auto">
            AI-powered media planning for Meta & TikTok ads. Create, simulate, 
            and optimize your campaigns with cutting-edge artificial intelligence.
          </p>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-background/60 mb-4 md:mb-0">
              © 2025 KataBoost. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                to="/terms" 
                className="text-background/80 hover:text-background transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <span className="text-background/40">|</span>
              <Link 
                to="/privacy" 
                className="text-background/80 hover:text-background transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-background/40">|</span>
              <Link 
                to="/cookies" 
                className="text-background/80 hover:text-background transition-colors duration-200"
              >
                Cookie Policy
              </Link>
              <span className="text-background/40">|</span>
              <Link 
                to="/contact" 
                className="text-background/80 hover:text-background transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;