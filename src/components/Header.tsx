import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Product", href: "#product" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`
            backdrop-blur-xl bg-white/10 border border-white/20 
            rounded-3xl shadow-2xl transition-all duration-500 ease-out
            ${isScrolled 
              ? 'bg-white/90 border-white/30 shadow-xl' 
              : 'bg-white/5 border-white/10'
            }
          `}
        >
          <div className="flex justify-between items-center px-6 py-3 relative">
            {/* Logo */}
            <div className="flex items-center relative">
              <div className="absolute -top-4 -bottom-4 flex items-center">
                <img 
                  src="/assets/logo/kataboost logo in black.png" 
                  alt="KataBoost" 
                  className="h-7 w-auto" 
                />
              </div>
              {/* Invisible spacer to maintain layout */}
              <div className="w-36 h-8"></div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    px-4 py-2 rounded-full text-gray-700/90 hover:text-primary 
                    transition-all duration-300 font-medium text-sm
                    hover:bg-white/20 hover:backdrop-blur-sm
                    border border-transparent hover:border-white/30
                  "
              >
                {item.name}
              </a>
            ))}
          </nav>

            {/* Desktop Login Button */}
            <div className="hidden md:flex">
              <Button 
                variant="outline" 
                className="
                  backdrop-blur-sm bg-white/10 border-white/30 
                  hover:bg-white/20 hover:border-white/40
                  text-gray-800 hover:text-gray-900
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                "
              >
                Login
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 border-t border-white/20 animate-slide-up">
              <nav className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors duration-200 py-2 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" className="mt-4 w-fit">
                  Login
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;