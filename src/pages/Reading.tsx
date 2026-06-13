import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingSection from "@/components/ReadingSection";

const Reading = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 bg-hero">
        <div className="container mx-auto px-6 pt-12">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4">
              Reading & Reflection
            </h1>
            <p className="text-lg text-zinc-100/80 max-w-2xl mx-auto">
              Books, journals, and articles I’ve read (and I’m currently reading), plus a few thoughts on what I’ve taken from them.
            </p>
          </div>
        </div>
      </section>

      <div className="-mt-10">
        <ReadingSection
          title="Reading"
          highlight="List"
          showFooterNote={false}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Reading;

