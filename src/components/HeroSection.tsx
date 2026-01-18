import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Abstract pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      {/* DNA helix pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-primary-foreground" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Ramsundar Rajeev
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
            <span className="px-4 py-1.5 rounded-full border border-blue-400/40 bg-blue-500/15 text-blue-300">
              Student
            </span>
            <span className="px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 text-emerald-300">
              Computational Scientist
            </span>
            <span className="px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 text-amber-300">
              Aspiring Biotechnologist
            </span>
          </div>
        </div>
        
        <div className="animate-fade-up delay-300">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mt-12"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
