import { Zap, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CurrentFocusSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Current Status</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What am I doing <span className="text-gradient">right now?</span>
            </h2>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50 animate-fade-up delay-200">
            <div className="flex items-center gap-3 text-muted-foreground text-sm mb-6">
              <Calendar className="w-4 h-4" />
              <span>Academic Year 2025-2026</span>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Currently, I am focused on my core subjects, developing a strong academic foundation while balancing my studies with regular training and participation in badminton tournaments. Alongside this, I actively contribute to school life by helping out in various activities and responsibilities.
              </p>
              <p className="text-lg leading-relaxed">
                Over the course of this year, I will be undertaking a personal project and gaining work experience related to biotechnology, allowing me to explore the field beyond the classroom. These experiences are helping me build practical skills, discipline, and a deeper understanding of how science is applied in real-world contexts.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Science
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  Competitions
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  Volunteering
                </span>
              </div>
              
              <Link 
                to="/activities"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <span>See all activities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocusSection;
