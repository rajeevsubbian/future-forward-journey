import { Rocket, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const AspirationsSection = () => {
  const quotes = useMemo(
    () => [
      "Somewhere, something incredible is waiting to be known.",
      "The good physician treats the disease; the great physician treats the patient who has the disease.",
      "Medicine is a science of uncertainty and an art of probability.",
      "Listen to your patient, he is telling you the diagnosis.",
    ],
    [],
  );

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 15_000);

    return () => window.clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="py-24 bg-muted/50 bg-texture">
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
                My ambition is to become a doctor, working at the forefront of healthcare 
                and scientific progress. I want to contribute to better patient outcomes 
                through evidence-based practice, compassion, and continuous learning.
              </p>
              <p className="text-lg leading-relaxed">
                Long-term, I hope to combine strong scientific foundations with real clinical 
                experience, helping to make high-quality healthcare more accessible and 
                impactful for communities. I want to be part of solutions that address 
                global challenges in health and wellbeing.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <p
                key={quoteIndex}
                className="text-sm text-primary font-medium italic animate-fade-up"
              >
                "{quotes[quoteIndex]}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;
