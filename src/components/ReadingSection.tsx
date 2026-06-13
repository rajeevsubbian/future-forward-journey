import { BookOpen, FileText } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ReadingItem = {
  title: string;
  authorOrSource: string;
  kind: "Book" | "Journal / Article";
  status: "Read" | "Currently Reading";
  reflection: string;
};

type ReadingSectionProps = {
  id?: string;
  title?: string;
  highlight?: string;
  description?: string;
  showFooterNote?: boolean;
  filterStatus?: ReadingItem["status"] | "All";
  ctaLabel?: string;
  ctaTo?: string;
  className?: string;
};

const reading: ReadingItem[] = [
  {
    title: "Never Split the Difference",
    authorOrSource: "Chris Voss",
    kind: "Book",
    status: "Read",
    reflection:
      "This book changed how I think about negotiation as a communication skill rather than a confrontation. Ideas like tactical empathy, calibrated questions, and active listening feel directly relevant to medicine—building trust, understanding what a patient really means (not just what they say), and working towards shared decisions under pressure.",
  },
  {
    title: "The Body: A Guide for Occupants",
    authorOrSource: "Bill Bryson",
    kind: "Book",
    status: "Currently Reading",
    reflection:
      "I’m enjoying how it turns complex anatomy and physiology into something understandable and memorable. Reading it alongside my science studies has made me think more about the ‘why’ behind symptoms and treatments—and how good medicine depends on combining accurate scientific knowledge with clear communication and curiosity.",
  },
];

const kindMeta: Record<ReadingItem["kind"], { icon: typeof BookOpen; label: string }> = {
  Book: { icon: BookOpen, label: "Book" },
  "Journal / Article": { icon: FileText, label: "Journal / Article" },
};

const statusStyles: Record<ReadingItem["status"], string> = {
  Read: "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
  "Currently Reading": "border-amber-400/40 bg-amber-500/15 text-amber-300",
};

const ReadingSection = ({
  id = "reading",
  title = "Reading",
  highlight = "Reflection",
  description = "Books, journals, and articles I’m exploring—plus a few thoughts on what I’ve taken from them.",
  showFooterNote = true,
  filterStatus = "All",
  ctaLabel,
  ctaTo,
  className = "py-24",
}: ReadingSectionProps) => {
  const visibleReading =
    filterStatus === "All" ? reading : reading.filter((item) => item.status === filterStatus);

  return (
    <section id={id} className={`${className} bg-background`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {highlight ? (
              <>
                {title} & <span className="text-gradient">{highlight}</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {visibleReading.map((item, index) => {
            const meta = kindMeta[item.kind];
            const Icon = meta.icon;

            return (
              <article
                key={`${item.title}-${item.authorOrSource}`}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-xs font-medium">
                        <Icon className="w-4 h-4" />
                        {meta.label}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.authorOrSource}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{item.reflection}</p>
                </div>
              </article>
            );
          })}

          {ctaLabel && ctaTo ? (
            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between animate-fade-up">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Books
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                  Journals
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  Articles
                </span>
              </div>

              <Link
                to={ctaTo}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : null}

          {showFooterNote ? (
            <div className="text-center mt-10 animate-fade-up delay-500">
              <div className="inline-block px-6 py-3 bg-muted rounded-full">
                <p className="text-muted-foreground text-sm">
                  I’ll keep adding to this as I read more books, journals, and articles.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;

