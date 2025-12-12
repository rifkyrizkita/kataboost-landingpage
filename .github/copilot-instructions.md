# KataBoost Landing Page - AI Coding Instructions

## Project Overview
KataBoost is a React + TypeScript landing page for an AI-powered media planning SaaS product (Meta & TikTok ads). Built with Vite, shadcn/ui, and Tailwind CSS. This is a Lovable.dev-managed project with both AI and local development workflows.

## Tech Stack & Architecture
- **Framework**: Vite + React 18 + TypeScript + SWC compiler
- **UI**: shadcn/ui components (Radix UI primitives) + Tailwind CSS + CVA
- **Routing**: React Router v6 (BrowserRouter) with `<ScrollToTop />` component
- **State**: React Query (@tanstack/react-query) initialized in `App.tsx`
- **Styling**: Tailwind with CSS variables + custom animations
- **Icons**: Lucide React (never use other icon libraries)
- **Build**: Bun for package management, Docker for deployment

## Key File Locations
- **App Root**: `src/App.tsx` - Provider setup (QueryClient, Tooltip, Toast) + all routes
- **Main Page**: `src/pages/Index.tsx` - Single-page landing layout
- **Components**: `src/components/` - Landing sections (Hero, Benefits, Pricing, etc.)
- **UI Library**: `src/components/ui/` - shadcn/ui components (auto-generated, rarely edit)
- **Design System**: `src/index.css` - CSS variables, animations (@keyframes), utility classes
- **Utils**: `src/lib/utils.ts` - `cn()` utility (clsx + tailwind-merge)
- **Custom Hooks**: `src/hooks/use-scroll-animation.ts` - IntersectionObserver hook for scroll animations
- **Config**: `components.json`, `vite.config.ts` - Path aliases and shadcn/ui settings

## Design System (Neon Yellow + Dark Theme)

### CSS Variables (`src/index.css` :root)
**Brand Colors** (HSL format):
- Primary: `--primary: 64 96% 52%` - **Neon Yellow** (brand color)
- Secondary: `--secondary: 240 3.7% 15.9%` - Dark Gray
- Accent: `--accent: 142 76% 36%` - Success Green
- Background: Black (`bg-black`) or dark gradients

**Custom Gradients** (used frequently):
- `--gradient-primary`, `--gradient-hero`, `--gradient-card`
- Apply via Tailwind: `bg-gradient-to-r from-primary/20 to-blue-500/20`

### Component Styling Patterns

**1. Always Use `cn()` Utility**
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-classes", isActive && "active-classes", className)} />
```

**2. Glassmorphism (Site-Wide Pattern)**
```tsx
// Header example (src/components/Header.tsx) - with theme support
className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"

// Card overlays - with theme support
className="bg-white dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20"
```

**3. Custom Animations (Scroll-Triggered)**
Define @keyframes in `src/index.css`:
- `animate-fade-in-up`, `animate-scale-in`, `animate-glow`, `animate-float`, etc.
- Use `useScrollAnimation` hook for IntersectionObserver-based reveals:
```tsx
const { elementRef, isVisible } = useScrollAnimation();
<div ref={elementRef} className={`scroll-animate-fade-up ${isVisible ? 'visible' : ''}`}>
```

**4. Button Styles (Modified from shadcn defaults)**
- All buttons use `rounded-full` by default (see `src/components/ui/button.tsx`)
- Custom `glass` variant added: `<Button variant="glass">`
- Primary buttons: `bg-primary hover:bg-primary/90` (neon yellow)

**5. Typography & Layout**
```tsx
// Section pattern (consistent across all landing sections)
<section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white">
      Title <span className="text-primary">Highlight</span>
    </h2>
  </div>
</section>
```

**6. Theme System (Light + Dark Mode)**
- Default theme: Dark mode (can be toggled via `<ThemeToggle />` component)
- Theme state stored in localStorage and synced with `.dark` class on `<html>`
- Always use dual theme classes: `text-gray-900 dark:text-white`
- Theme toggle icon in Header (desktop + mobile nav)
- Light theme: white backgrounds, dark text
- Dark theme: black/gray-900 backgrounds, white text
```tsx
import { ThemeToggle } from "@/components/ThemeToggle";
// Add to navigation
<ThemeToggle />
```

## Development Workflow

### Commands (CRITICAL: Use npm, not Bun)
```bash
npm run dev          # Dev server on http://localhost:8080
npm run build        # Production build (uses Vite)
npm run build:dev    # Development mode build
npm run preview      # Preview production build
npm run start        # Production server (port 4173, used in Docker)
npm run lint         # ESLint check
```
**Why npm?** Bun is used for package management (bun.lockb), but scripts run via npm.

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```
- Auto-adds to `src/components/ui/` with path aliases configured
- DO NOT manually edit shadcn/ui files; regenerate if needed

### Docker Deployment
```dockerfile
# Dockerfile uses Bun runtime (FROM oven/bun:1)
# Runs on port 4173 in production
# docker-compose.yml exposes service as "boostkit-landing"
```

## Component Architecture

### App.tsx Provider Stack (DO NOT MODIFY ORDER)
```tsx
<QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster /> {/* shadcn/ui toast */}
    <Sonner />  {/* Sonner toast */}
    <BrowserRouter>
      <ScrollToTop /> {/* Auto-scroll to top on route change */}
      <Routes>...</Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>
```

### Landing Page Structure (`src/pages/Index.tsx`)
Single-page layout with sections:
```tsx
<Header />       // Fixed nav (glassmorphism)
<Hero />         // Full-screen gradient hero + CTA
<Problem />      // Problem statement
<Benefits />     // 4-card grid with scroll animations
<HowItWorks />   // Step-by-step process
<Pricing />      // Pricing tiers
<Footer />       // Site footer
```
`<Demo />` and `<Testimonials />` are commented out.

### Routing Pattern (`src/App.tsx`)
```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/cookies" element={<Cookies />} />
  <Route path="/contact" element={<Contact />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} /> {/* Must be last */}
</Routes>
```
**CRITICAL**: Catch-all route (`*`) must be last or custom routes won't match.

### Section Component Pattern
All landing sections follow this structure:
```tsx
const SectionName = () => {
  // Optional: useScrollAnimation hook for multiple elements
  const { elementRef: ref1, isVisible: visible1 } = useScrollAnimation();
  
  return (
    <section id="section-id" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Grid overlay (common pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge (common pattern) */}
        <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
          <span className="text-sm font-bold text-primary uppercase tracking-wide">Label</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
          Title
        </h2>
        
        {/* Content grid */}
      </div>
    </section>
  );
};
```

## Path Aliases (Vite + shadcn/ui)
Configured in `vite.config.ts` and `components.json`:
```typescript
@               → ./src/
@/components    → ./src/components
@/lib           → ./src/lib
@/hooks         → ./src/hooks
@/pages         → ./src/pages (not configured, use relative)
```

## Animation System

### Custom Animations (`src/index.css`)
Define @keyframes and utility classes:
```css
@keyframes fadeInUp { /* ... */ }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
```
**Available animations**: `fadeInUp`, `fadeInLeft`, `fadeInRight`, `scaleIn`, `slideDown`, `glow`, `float`, `shimmer`, `rotateGradient`

### Scroll-Triggered Animations (`useScrollAnimation` hook)
```tsx
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

<div 
  ref={elementRef as any}
  className={`scroll-animate-fade-up ${isVisible ? 'visible' : ''}`}
>
```
Hook uses IntersectionObserver, unobserves after first trigger (performance optimization).

### Staggered Delays
```tsx
{items.map((item, index) => (
  <div 
    key={index}
    className={`animate-fade-in-up delay-${(index + 1) * 100}`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
))}
```

## External Links & CTAs
**WhatsApp Demo Link** (used in Hero, Header):
```tsx
<a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
  <Button>Request A Demo</Button>
</a>
```
Always use `target="_blank" rel="noopener noreferrer"` for external links.

## Lovable.dev Integration
- Changes pushed to repo sync with Lovable platform
- `lovable-tagger` plugin enabled in dev mode (see `vite.config.ts`)
- Project URL: https://lovable.dev/projects/34741d3a-6194-4dfd-906d-1b3e417cf73e
- **DO NOT** remove `lovable-tagger` import or conditionals

## Common Pitfalls & Debugging

1. **Package Manager Confusion**: Use **npm** for scripts, not Bun (Bun is for lockfile only)
2. **Routing**: Catch-all route (`*`) must be **last** in `<Routes>`
3. **Styling**: Always use `cn()` utility, never string concatenation for classNames
4. **Icons**: Only use `lucide-react` (e.g., `import { ArrowRight } from "lucide-react"`)
5. **Animations**: Check `src/index.css` for @keyframes definitions before creating new ones
6. **Path Aliases**: Use `@/` prefix (e.g., `@/components/Hero`) for src imports
7. **Button Styling**: Default is `rounded-full`, don't override unless necessary
8. **Theme Support**: Site supports both light and dark modes via `<ThemeToggle />` component - always use dual classes (`text-gray-900 dark:text-white`)
9. **Dev Server**: Runs on port **8080** (not 5173, see `vite.config.ts`)
10. **shadcn/ui**: Never manually edit `src/components/ui/*` files; regenerate with CLI
