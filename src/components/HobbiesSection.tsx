import { Trophy, Atom, Music } from "lucide-react";

const hobbies = [
  {
    icon: Trophy,
    title: "Badminton",
    description: "Staying active and competitive on the court",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Atom,
    title: "Science",
    description: "Exploring the wonders of the natural world",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Music,
    title: "Piano",
    description: "Expressing creativity through music and melody",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const HobbiesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Hobbies & <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Beyond academics, these passions shape who I am
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className={`group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-fade-up`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className={`w-16 h-16 ${hobby.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <hobby.icon className={`w-8 h-8 ${hobby.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
