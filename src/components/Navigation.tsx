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
                  <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0" />
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
                  <svg className="w-5 h-5 text-[#def104] group-hover:text-[#def104]/80 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
                  <AnimatedThemeToggler className="p-0 bg-transparent hover:bg-transparent border-0" />
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
                  <svg className="w-4 h-4 text-[#def104] group-hover:text-[#def104]/80 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
