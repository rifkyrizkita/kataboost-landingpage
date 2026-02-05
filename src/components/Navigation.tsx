import { Home, Sparkles, Route, DollarSign, MessageCircle } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Features", href: "#product", icon: Sparkles },
    { name: "Process", href: "#services", icon: Route },
    { name: "Pricing", href: "#pricing", icon: DollarSign },
  ];

  return (
    <TooltipProvider>
      {/* Desktop Dock Navigation - Fixed Bottom Center */}
      <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
        <Dock iconSize={48} iconMagnification={64} iconDistance={150}>
          {navItems.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className="flex items-center justify-center w-full h-full rounded-full transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-8 bg-black/20 dark:bg-white/20" />
          
          {/* Theme Toggle in Dock */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center w-full h-full rounded-full transition-colors">
                  <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0 w-5 h-5 [&>svg]:w-5 [&>svg]:h-5" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* WhatsApp in Dock */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://wa.link/44vmy3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full rounded-full transition-colors group"
                >
                  <img 
                    src="/assets/logo/whatsapp-svgrepo-com.svg" 
                    alt="WhatsApp"
                    className="w-5 h-5 object-contain group-hover:opacity-80 transition-opacity rounded-none"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>

      {/* Mobile Dock Navigation - Fixed Bottom Center */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] w-auto pb-safe">
        <Dock iconSize={36} iconMagnification={44} iconDistance={80} disableMagnification={false}>
          {navItems.map((item) => (
            <DockIcon key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className="flex items-center justify-center w-full h-full rounded-full transition-colors group"
                  >
                    <item.icon className="w-4 h-4 text-black/40 dark:text-white/40 group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          
          <Separator orientation="vertical" className="h-6 bg-black/20 dark:bg-white/20" />
          
          {/* Theme Toggle in Dock */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center w-full h-full rounded-full transition-colors">
                  <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0 w-4 h-4 [&>svg]:w-4 [&>svg]:h-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          {/* WhatsApp in Dock */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://wa.link/44vmy3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full rounded-full transition-colors group"
                >
                  <img 
                    src="/assets/logo/whatsapp-svgrepo-com.svg" 
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain group-hover:opacity-80 transition-opacity"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-black dark:bg-white text-white dark:text-black">
                <p>WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </TooltipProvider>
  );
};

export default Navigation;
