import { GraduationCap, BookOpen } from "lucide-react";

const subjects = [
  { name: "Mathematics", icon: "📐" },
  { name: "Biology", icon: "🧬" },
  { name: "Chemistry", icon: "⚗️" },
  { name: "EPQ", icon: "📝" },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Education & <span className="text-gradient">Subjects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building a strong foundation in science and mathematics
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center max-w-4xl mx-auto">
          {/* School Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex-1 animate-fade-up delay-200">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Current School
            </h3>
            <p className="text-muted-foreground mb-4">
              The Skinners' School
            </p>
            <p className="text-sm text-muted-foreground">
              Year 12 • 2020-2027
            </p>
          </div>

          {/* Subjects Card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex-[1.5] animate-fade-up delay-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Core Subjects
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {subjects.map((subject) => (
                <div
                  key={subject.name}
                  className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                >
                  <span className="text-2xl">{subject.icon}</span>
                  <span className="font-medium text-foreground">{subject.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
