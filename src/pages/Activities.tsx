import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Music, GraduationCap, Mountain, Store, Code, Trophy, Stethoscope, Droplets, Lightbulb } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Piano Grade 5",
    date: "12/2024",
    sortDate: new Date(2024, 11),
    description: "I prepared for and completed my Grade 5 piano examination, developing consistent practice habits and refining my technical accuracy and musical expression. Balancing piano alongside academic commitments strengthened my time management and perseverance, while performing under exam conditions improved my confidence and focus.",
    icon: Music,
    tags: ["Discipline", "Creativity", "Time Management"],
  },
  {
    id: 2,
    title: "Schools County Badminton Champions",
    date: "01/2025",
    sortDate: new Date(2025, 0),
    description: "I was part of the school badminton team that won the County Championship. Competing at a high level required focus, discipline, and teamwork, particularly under pressure during decisive matches. This achievement reflected sustained training and effective coordination as a team.",
    icon: Trophy,
    tags: ["Teamwork", "Competitive Sport", "Commitment"],
  },
  {
    id: 3,
    title: "No-Code Hackathon",
    date: "01/2026",
    sortDate: new Date(2026, 0),
    description: "I attended a no-code hackathon where I collaborated in a team to design and prototype a functional digital solution within a limited timeframe. Contributing through prompt engineering, ideation, and design strengthened my rapid problem-solving skills and my understanding of product development under time pressure.",
    icon: Lightbulb,
    tags: ["Innovation", "Collaboration", "Rapid Prototyping"],
  },
  {
    id: 4,
    title: "GCSE Examinations",
    date: "05–06/2025",
    sortDate: new Date(2025, 5),
    description: "I completed my GCSE examinations across a broad range of subjects, consolidating foundational knowledge and exam technique. The revision process improved my ability to plan long-term study, prioritise weaker areas, and perform under pressure. Key highlights being: 9s in Maths, Physics, Chemistry, Biology and an A in FSMQ (Add maths), as well as 8s in Computer Science and English Literature. This experience helped shape my academic interests and prepared me for the demands of A-level study.",
    icon: GraduationCap,
    tags: ["Academic Achievement", "Resilience", "Independent Learning"],
  },
  {
    id: 5,
    title: "50 Days of Python Bootcamp",
    date: "06–12/2025",
    sortDate: new Date(2025, 11),
    description: "I completed a 50-day Python bootcamp, building a strong foundation in programming through daily practice and projects. I developed problem-solving skills, logical thinking, and familiarity with writing clean, efficient code. This experience reinforced my interest in computational thinking and its applications in science and technology.",
    icon: Code,
    tags: ["Python", "Problem Solving", "Computational Thinking"],
  },
  {
    id: 6,
    title: "Silver Duke of Edinburgh Award",
    date: "07/2025",
    sortDate: new Date(2025, 6),
    description: "I completed the Silver Duke of Edinburgh Award, involving volunteering, physical activity, skill development, and a team expedition. This experience strengthened my teamwork, leadership, and problem-solving skills, particularly during the expedition where planning, communication, and adaptability were essential in challenging conditions.",
    icon: Mountain,
    tags: ["Leadership", "Teamwork", "Resilience"],
  },
  {
    id: 7,
    title: "Medical Shadowing Experience (India)",
    date: "07/2025",
    sortDate: new Date(2025, 6),
    description: "While in India, I shadowed a doctor working with a free ambulance service providing medical assistance to local communities. I observed patient care in time-sensitive situations and gained insight into clinical decision-making, triage, and the importance of accessible healthcare. This experience deepened my interest in medicine and public health.",
    icon: Stethoscope,
    tags: ["Healthcare", "Clinical Exposure", "Social Impact"],
  },
  {
    id: 8,
    title: "Water Treatment Plant Visit (India)",
    date: "07/2025",
    sortDate: new Date(2025, 6),
    description: "I visited a water treatment plant to observe the full process of water purification, from initial intake to final distribution and packaging. This visit helped me understand large-scale filtration, chemical treatment, and quality control, highlighting the role of science and engineering in public health and sustainability.",
    icon: Droplets,
    tags: ["Environmental Science", "Engineering", "Sustainability"],
  },
  {
    id: 9,
    title: "Jewellery Shop Work Experience (India)",
    date: "08/2025",
    sortDate: new Date(2025, 7),
    description: "I worked in a jewellery shop, gaining experience in customer service, sales, and professional communication. I learned how to interact confidently with customers, handle responsibility, and maintain attention to detail when dealing with high-value items. This role improved my interpersonal skills and workplace professionalism.",
    icon: Store,
    tags: ["Customer Service", "Communication", "Responsibility"],
  },
  {
    id: 10,
    title: "Badminton League Table Winners",
    date: "01/2026",
    sortDate: new Date(2026, 0),
    description: "Our school badminton team finished top of the league table this season. Across multiple fixtures, I contributed consistently while adapting tactics based on opponents. The experience reinforced the importance of long-term consistency, communication, and maintaining performance across a full season.",
    icon: Trophy,
    tags: ["Consistency", "Strategy", "Team Performance"],
  },
].sort((a, b) => a.sortDate.getTime() - b.sortDate.getTime());

const tagColors: Record<string, string> = {
  // Skills & Personal Development
  "Discipline": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Creativity": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "Time Management": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Resilience": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "Independent Learning": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Commitment": "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300",
  "Consistency": "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-300",
  
  // Academic & Technical
  "Academic Achievement": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Python": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Problem Solving": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Computational Thinking": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "Environmental Science": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  "Engineering": "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300",
  "Sustainability": "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300",
  
  // Leadership & Teamwork
  "Leadership": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Teamwork": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  "Collaboration": "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  "Team Performance": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "Strategy": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
  
  // Professional Skills
  "Customer Service": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  "Communication": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  "Responsibility": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  
  // Sports & Competition
  "Competitive Sport": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  
  // Healthcare & Social
  "Healthcare": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
  "Clinical Exposure": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  "Social Impact": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  
  // Innovation & Prototyping
  "Innovation": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "Rapid Prototyping": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
};

const getTagColor = (tag: string) => {
  return tagColors[tag] || "bg-secondary text-secondary-foreground";
};

const Activities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-24 pb-16 bg-hero">
        <div className="container mx-auto px-6 pt-12">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Activities & Experiences
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              A collection of events, achievements, and experiences that have
              shaped my journey
            </p>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden hover:shadow-elevated transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Icon/Image Section */}
                  <div className="md:w-48 bg-muted/50 p-8 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <experience.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {experience.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-sm rounded-full font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More to come message */}
          <div className="text-center mt-16 animate-fade-up delay-500">
            <div className="inline-block px-6 py-3 bg-muted rounded-full">
              <p className="text-muted-foreground text-sm">
                More experiences coming soon as my journey continues...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
