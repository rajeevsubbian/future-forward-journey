import { Rocket, Target, Lightbulb, Sparkles } from "lucide-react";

const AspirationsSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket className="w-4 h-4" />
            Looking Ahead
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Future <span className="text-gradient">Aspirations</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Aspirations Text Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border/50 mb-8 animate-fade-up">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                My ambition is to become a leading biotechnologist, working at the 
                forefront of scientific innovation. I envision myself contributing to 
                breakthroughs in sustainable biotechnology and medical research.
              </p>
              <p className="text-lg leading-relaxed">
                Long-term, I aim to bridge the gap between laboratory discoveries and 
                real-world applications, making science accessible and impactful for 
                communities worldwide. I want to be part of solutions that address 
                global challenges in health and sustainability.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <p className="text-sm text-primary font-medium italic">
                "Somewhere, something incredible is waiting to be known."
              </p>
            </div>
          </div>

          {/* Feature Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-up">
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/30 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Goal-Driven</h4>
                <p className="text-sm text-muted-foreground">Focused on meaningful outcomes and measurable impact</p>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/30 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Innovative</h4>
                <p className="text-sm text-muted-foreground">Thinking outside the box to solve complex problems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;
