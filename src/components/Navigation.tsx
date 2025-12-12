import { Home, Sparkles, Route, DollarSign } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Separator } from "@/components/ui/separator";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Features", href: "#product", icon: Sparkles },
    { name: "Process", href: "#services", icon: Route },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
  ];

  return (
    <>
      {/* Desktop Dock Navigation - Fixed Bottom Center */}
      <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <Dock iconSize={48} iconMagnification={64} iconDistance={150}>
          {navItems.map((item) => (
            <DockIcon key={item.name}>
              <a
                href={item.href}
                className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary transition-colors border border-gray-200 dark:border-white/10"
                title={item.name}
              >
                <item.icon className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-8 bg-gray-300 dark:bg-white/20" />
          
          {/* Theme Toggle in Dock */}
          <DockIcon>
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary transition-colors border border-gray-200 dark:border-white/10">
              <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0" />
            </div>
          </DockIcon>

          {/* CTA Button in Dock */}
          <DockIcon>
            <a
              href="https://wa.link/44vmy3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full rounded-full bg-primary hover:bg-primary/90 transition-colors border border-primary text-white font-bold text-sm"
              title="Get Access"
            >
              <span className="text-xs">🚀</span>
            </a>
          </DockIcon>
        </Dock>
      </div>

      {/* Mobile Dock Navigation - Fixed Bottom Center */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-auto pb-safe">
        <Dock iconSize={36} iconMagnification={44} iconDistance={80} disableMagnification={false}>
          {navItems.map((item) => (
            <DockIcon key={item.name}>
              <a
                href={item.href}
                className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary transition-colors border border-gray-200 dark:border-white/10"
                title={item.name}
              >
                <item.icon className="w-4 h-4 text-gray-900 dark:text-white" />
              </a>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-6 bg-gray-300 dark:bg-white/20" />
          
          {/* Theme Toggle in Dock */}
          <DockIcon>
            <div className="flex items-center justify-center w-full h-full rounded-full bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary transition-colors border border-gray-200 dark:border-white/10">
              <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0" />
            </div>
          </DockIcon>

          {/* CTA Button in Dock */}
          <DockIcon>
            <a
              href="https://wa.link/44vmy3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full rounded-full bg-primary hover:bg-primary/90 transition-colors border border-primary text-white font-bold text-sm"
              title="Get Access"
            >
              <span className="text-xs">🚀</span>
            </a>
          </DockIcon>
        </Dock>
      </div>
    </>
  );
};

export default Navigation;
